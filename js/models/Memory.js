'use strict';

function Memory(updateViewCallback, updateContentCallback, name) {
    this.updateViewCallback = updateViewCallback;
    this.updateContentCallback = updateContentCallback;
    this.name = name;
    this.content = {};
    this.addressBus = undefined;
    this.dataBus = undefined;
}

Memory.prototype.setName = function (name) {
    this.name = name;
};

Memory.prototype.getName = function () {
    return this.name;
};

Memory.prototype.setAddressBusConnection = function (bus, readWire) {
    /* The address bus connection has only two states:
     * 0 means the connection is inactive
     * -1 means the address is read from the addressBus */
    this.addressBus = {
        state: 0,
        bus: bus,
        readWire: readWire
    };
};

Memory.prototype.getAddressBusConnection = function () {
    return this.addressBus;
};

Memory.prototype.getAddressBus = function () {
    return this.addressBus.bus;
};

Memory.prototype.setDataBusConnection = function (bus, writeWire, readWire) {
    /* The data bus connection can have three states:
     * 1 means the data is written to the bus
     * 0 means the connection is inactive
     * -1 means the data is read from the bus */
    this.dataBus = {
        state: 0,
        bus: bus,
        writeWire: writeWire,
        readWire: readWire
    };
};

Memory.prototype.getDataBusConnection = function () {
    return this.dataBus;
};

Memory.prototype.setContent = function (newContent) {
    this.content = newContent;
    this.updateContentCallback(this.content);
    /* Please be aware that since we have no address here we cannot update
     * the data context in all cases. But we try. */
    if (this.addressBus) {
        if (this.addressBus.state == -1) {
            var address = this.addressBus.bus.registerReaderAndRead(this);
            if (address && (this.dataBus) && (this.dataBus.state === 1)) {
                this.dataBus.bus.write(this, this.content[address]);
            }
            this.updateViewCallback(this.getDataWithContext(address));
        }
    }
};

Memory.prototype.getDataWithContext = function (address) {
    var context = [
        {"address": undefined, 'value': undefined},
        {"address": undefined, 'value': undefined},
        {"address": undefined, 'value': undefined},
        {"address": undefined, 'value': undefined},
        {"address": undefined, 'value': undefined}
    ];
    var keys = Object.keys(this.content);
    var prevPrev = undefined;
    var prev = undefined;
    for (var i = 0; i < keys.length; i++) {
        if (keys[i] == address) {
            context[0].address = prevPrev;
            context[0].value = this.content[prevPrev];
            context[1].address = prev;
            context[1].value = this.content[prev];
            context[2].address = keys[i];
            context[2].value = this.content[keys[i]];
            if (i + 1 < keys.length) {
                context[3].address = keys[i + 1];
                context[3].value = this.content[keys[i + 1]];
            }
            if (i + 2 < keys.length) {
                context[4].address = keys[i + 2];
                context[4].value = this.content[keys[i + 2]];
            }
        }
        prevPrev = prev;
        prev = keys[i];
    }
    return context;
};

Memory.prototype.writeData = function (data) {
    if (this.addressBus) {
        if (this.addressBus.state == -1) {
            var address = this.addressBus.bus.registerReaderAndRead(this);
            if (typeof address != 'undefined') {
                this.content[address] = data;
                this.updateViewCallback(this.getDataWithContext(address));
                this.updateContentCallback(this.content);
            } else {
                throw WriteToUndefinedAddress(this,
                    "Memory " + this.name + ": The address which was read from the bus (" +
                        this.addressBus.bus.getName() + ") is undefined. Nothing can be written to a undefined place.",
                    this.getName(),
                    this.addressBus.bus.getName()
                )
            }
        } else {
            throw InactiveAdressBusConnection(this,
                "Memory " + this.name + ": The address bus connection is not set to reading. " +
                    "This connection needs to be set to reading to get an address from the address bus " +
                    "which specifies where to write or read.",
                this.name
            )
        }
    } else {
        throw NoAdressBusConnected(this,
            "Memory " + this.name + ": No address bus connected. " +
                "You have to specify an address which specifies where to write or read the data.",
            this.name
        );
    }
};

Memory.prototype.setValue = function (data, writingBus) {
    if ((this.dataBus) && (this.dataBus.bus) && (writingBus == this.dataBus.bus)) {
        this.writeData(data)
    } else if (writingBus == this.addressBus.bus) {
        if ((this.dataBus) && (this.dataBus.state == -1) && (typeof data != 'undefined')) {
            this.content[data] = this.dataBus.bus.registerReaderAndRead(this);
        } else if ((this.dataBus) && (this.dataBus.state == 1)) {
            if (typeof data != 'undefined') {
                this.dataBus.bus.write(this, this.content[data]);
            } else {
                this.dataBus.bus.write(this, undefined);
            }
        }
        if ((typeof data != 'undefined') && (typeof this.content[data] == 'undefined')) {
            this.content[data] = undefined;
        }
        this.updateViewCallback(this.getDataWithContext(data));
        this.updateContentCallback(this.content);
    }
};

Memory.prototype.readData = function () {
    if (this.addressBus) {
        if (this.addressBus.state == -1) {
            var address = this.addressBus.bus.registerReaderAndRead(this);
            return this.content[address];
        } else {
            throw InactiveAdressBusConnection(this,
                "Memory " + this.name + ": The address bus connection is not set to reading. " +
                    "This connection needs to be set to reading to get an address from the address bus " +
                    "which specifies where to write or read.",
                this.name
            )
        }
    } else {
        throw NoAdressBusConnected(this,
            "Memory " + this.name + ": No address bus connected. " +
                "You have to specify an address which specifies where to write or read the data.",
            this.name
        );
    }
};

Memory.prototype.getAddressBus = function () {
    return this.addressBus.bus;
};

Memory.prototype.getAddressBusState = function () {
    return this.addressBus.state;
};

Memory.prototype.setAddressBusState = function (desiredState) {
    if (desiredState == 1) {
        throw AddressBusConnectionCanNotBeSetToWrite(this,
            "Memory " + this.name + "It does not make sense to write to an address bus (" +
                this.addressBus.bus.name + ").",
            this.addressBus.bus.name
        );
    } else if (desiredState == -1) {
        try {
            var address = this.addressBus.bus.registerReaderAndRead(this);
            this.addressBus.state = desiredState;
            this.setValue(address, this.addressBus.bus);
        } catch (exception) {
            throw exception;
        }
    } else {
        this.addressBus.bus.unregisterReader(this);
        this.addressBus.state = desiredState;
    }
};

Memory.prototype.getDataBus = function () {
    return this.dataBus.bus;
};

Memory.prototype.getDataBusState = function () {
    return this.dataBus.state;
};

Memory.prototype.setDataBusState = function (desiredState) {
    var wasReading = (this.dataBus.state == -1);
    var wasWriting = (this.dataBus.state == 1);
    var address;
    if (desiredState == 1) {
        if (this.addressBus.state == -1) {
            address = this.addressBus.bus.registerReaderAndRead(this);
            this.dataBus.bus.unregisterReader(this);
            try {
                this.dataBus.bus.write(this, this.content[address]);
                this.dataBus.state = desiredState;
            } catch (exception) {
                if (wasReading) {
                    this.dataBus.bus.registerReaderAndRead(this);
                }
                throw exception;
            }
            this.updateViewCallback(this.getDataWithContext(address));
        } else {
            throw InactiveAdressBusConnection(this,
                    "Memory " + this.name + ": The address bus connection is not set to reading. " +
                    "This connection needs to be set to reading to get an address from the address bus " +
                    "which specifies where to write or read.",
                this.name
            );
        }
    } else if (desiredState == -1) {
        if (this.addressBus.state == -1) {
            address = this.addressBus.bus.registerReaderAndRead(this);
            this.dataBus.bus.stopWriting(this);
            try {
                this.content[address] = this.dataBus.bus.registerReaderAndRead(this);
                this.dataBus.state = desiredState;
                this.updateViewCallback(this.getDataWithContext(address));
                this.updateContentCallback(this.content);
            } catch (exception) {
                if (wasWriting) {
                    this.dataBus.bus.write(this, this.value);
                }
                throw exception;
            }
        } else {
            throw InactiveAdressBusConnection(this,
                    "Memory " + this.name + ": The address bus connection is not set to reading. " +
                    "This connection needs to be set to reading to get an address from the address bus " +
                    "which specifies where to write or read.",
                this.name
            );
        }
    } else {
        this.dataBus.bus.stopWriting(this);
        this.dataBus.bus.unregisterReader(this);
        this.dataBus.state = desiredState;
    }
};

Memory.prototype.setToRead = function (wire) {
    if (this.addressBus.readWire === wire) {
        this.setAddressBusState(-1);
    }
    if (this.dataBus.readWire === wire) {
        if ((this.dataBus.writeWire) &&
            (this.dataBus.writeWire.isActive()) &&
            (this.dataBus.writeWire.isNotZero())) {
            throw GateIsAlreadyWriting(this,
                this.getName() + ": The gate to bus " + this.dataBus.bus.getName() +
                    " is already writing and therefore can not be set to read.",
                this.getName(),
                this.dataBus.bus.getName()
            )
        } else {
            this.setDataBusState(-1);
        }
    }
};

Memory.prototype.setToWrite = function (wire) {
    if (this.dataBus.writeWire === wire) {
        if ((this.dataBus.readWire) &&
            (this.dataBus.readWire.isActive()) &&
            (this.dataBus.readWire.isNotZero())) {
            throw GateIsAlreadyReading(this,
                this.getName() + ": The gate to bus " + this.dataBus.bus.getName() +
                    " is already reading and therefore can not be set to write.",
                this.getName(),
                this.dataBus.bus.getName()
            )
        } else {
            this.setDataBusState(1);
        }
    }
};

Memory.prototype.setToDisconnected = function (wire) {
    if (this.addressBus.readWire === wire) {
        this.setAddressBusState(0);
    }
    if (this.dataBus.readWire === wire) {
        if ((this.dataBus) && (this.dataBus.writeWire) &&
            (this.dataBus.writeWire.isActive()) && (this.dataBus.writeWire.isNotZero())) {
            this.setDataBusState(1)
        } else {
            this.setDataBusState(0);
        }
    }
    if (this.dataBus.writeWire === wire) {
        if ((this.dataBus) && (this.dataBus.readWire) &&
            (this.dataBus.readWire.isActive()) && (this.dataBus.readWire.isNotZero())) {
            this.setDataBusState(-1)
        } else {
            this.setDataBusState(0);
        }
    }
};