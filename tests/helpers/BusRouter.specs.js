/****************************************************************************************
 * Copyright (c) 2014 Johannes Merkert, Klaus Merkert                                   *
 *                                                                                      *
 * This file is part of Bonsai.                                                         *
 *                                                                                      *
 * Bonsai is free software; you can redistribute it and/or modify it under              *
 * the terms of the GNU General Public License as published by the Free Software        *
 * Foundation; either version 3 of the License, or (at your option) any later           *
 * version.                                                                             *
 *                                                                                      *
 * Bonsai is distributed in the hope that it will be useful, but WITHOUT ANY            *
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A      *
 * PARTICULAR PURPOSE. See the GNU General Public License for more details.             *
 *                                                                                      *
 * You should have received a copy of the GNU General Public License along with         *
 * Bonsai. If not, see <http://www.gnu.org/licenses/>.                                  *
 ****************************************************************************************/

describe('BusRouter', function(){
    it('should be able to print points', function () {
        var router = new BusRouter([], undefined);
        expect(router.printPoint({'i': 3, 'j': 7})).toEqual("(3, 7)");
        expect(router.printPoint({i: 6, j: 1})).toEqual("(6, 1)");
    });

    it('should be able to print point lists', function () {
        var router = new BusRouter([], undefined);
        expect(router.printList([{'i': 3, 'j': 7}, {'i': 4, 'j': 5}, {'i': 1, 'j': 2}], router.printPoint)).toEqual(
            "[(3, 7), (4, 5), (1, 2)]"
        );
    });

    it('should be able to print coordinate point lists', function () {
        var router = new BusRouter([], undefined);
        expect(router.printCoordinatePointList([{'top': 3, 'left': 7}, {'top': 18, 'left': 4}, {'top': 1, 'left': 2}])).toEqual(
            "[(7, 3), (4, 18), (2, 1)]"
        );
    });

    it('should be able to print connections', function () {
        var router = new BusRouter([], undefined);
        var connections = [
            {'connection': [{'i': 1, 'j': 1}, {'i': 1, 'j': 0}], 'dist': 1, 'weight': 19.88},
            {'connection': [{'i': 2, 'j': 0}, {'i': 1, 'j': 0}], 'dist': 7, 'weight': 0.01},
            {'connection': [{'i': 0, 'j': 2}, {'i': 1, 'j': 2}], 'dist': 11.5, 'weight': 13.5},
            {'connection': [{'i': 1, 'j': 1}, {'i': 1, 'j': 2}], 'dist': 2, 'weight': 0.01},
        ];
        expect(router.printConnections(connections)).toEqual(
            "[(1, 1)->(1, 0), (2, 0)->(1, 0), (0, 2)->(1, 2), (1, 1)->(1, 2)]"
        );
    });

    it('should be able to print connectionsToFollow', function () {
        var router = new BusRouter([], undefined);
        var connectionsToFollow = [
            {part: 0, point: {i: 5, j: 3}},
            {part: 3, point: {i: 8, j: 14}},
            {part: 0, point: {i: 1, j: 0}}
        ];
        expect(router.printConnectionsToFollow(connectionsToFollow)).toEqual(
            "[(5, 3) part: 0, (8, 14) part: 3, (1, 0) part: 0]"
        );
    });

    it('should be able to collect all endpoints', function () {
        var connections = [
            {'getPositions': function () {return [1, 2, 3]}},
            {'getPositions': function () {return [4, 5]}},
            {'getPositions': function () {return [6, 7, 8]}}
        ];
        var router = new BusRouter(connections, null);
        for (var i = 0; i < 8; i++) {
            expect(router.getEndpoints()[i]).toBe(i + 1);
        }
    });

    it('should construct connection parts with 3 endpoints in a 3x3 grid (K-Shaped)', function () {
        var router = new BusRouter([], undefined);
        var goodConnections = [
            {'connection': [{'i': 2, 'j': 1}, {'i': 1, 'j': 1}], 'dist': 1, 'weight': 1},
            {'connection': [{'i': 1, 'j': 1}, {'i': 1, 'j': 2}], 'dist': 1, 'weight': 1},
            {'connection': [{'i': 1, 'j': 1}, {'i': 1, 'j': 0}], 'dist': 1, 'weight': 1},
            {'connection': [{'i': 1, 'j': 0}, {'i': 0, 'j': 0}], 'dist': 1, 'weight': 1},
        ];
        var grid = {
            'XCoordinates': [1, 2, 3],
            'YCoordinates': [1, 3, 3.5]
        };
        var connectionParts = router.constructConnectionParts(goodConnections, grid);
        expect(connectionParts.length).toBe(3);
        var expected = [
            [
                [{'i': 2, 'j': 1}, {'i': 1, 'j': 1}]
            ],
            [
                [{'i': 1, 'j': 1}, {'i': 1, 'j': 0}],
                [{'i': 1, 'j': 0}, {'i': 0, 'j': 0}]
            ],
            [
                [{'i': 1, 'j': 1}, {'i': 1, 'j': 2}]
            ]
        ];
        expect(connectionParts).toEqual(expected);
    });

    it('should construct connection parts with 3 endpoints in a 3x3 grid (S-Shaped)', function () {
        var router = new BusRouter([], undefined);
        var goodConnections = [
            {'connection': [{'i': 1, 'j': 1}, {'i': 1, 'j': 0}], 'dist': 1, 'weight': 19.88},
            {'connection': [{'i': 2, 'j': 0}, {'i': 1, 'j': 0}], 'dist': 7, 'weight': 0.01},
            {'connection': [{'i': 0, 'j': 2}, {'i': 1, 'j': 2}], 'dist': 11.5, 'weight': 13.5},
            {'connection': [{'i': 1, 'j': 1}, {'i': 1, 'j': 2}], 'dist': 2, 'weight': 0.01},
        ];
        var grid = {
            'XCoordinates': [1, 2, 3],
            'YCoordinates': [1, 3, 3.5]
        };
        var connectionParts = router.constructConnectionParts(goodConnections, grid);
        expect(connectionParts.length).toBe(2);
        expect(connectionParts).toEqual([
            [
                [{'i': 0, 'j': 2}, {'i': 1, 'j': 2}],
                [{'i': 1, 'j': 1}, {'i': 1, 'j': 2}]
            ],
            [
                [{'i': 1, 'j': 1}, {'i': 1, 'j': 0}],
                [{'i': 2, 'j': 0}, {'i': 1, 'j': 0}]
            ]
        ]);
    });

    it('should find two corners', function () {
        var router = new BusRouter([], undefined);
        var connections = [
            {'connection': [{'i': 1, 'j': 1}, {'i': 1, 'j': 0}], 'dist': 1, 'weight': 19.88},
            {'connection': [{'i': 2, 'j': 0}, {'i': 1, 'j': 0}], 'dist': 7, 'weight': 0.01},
            {'connection': [{'i': 0, 'j': 2}, {'i': 1, 'j': 2}], 'dist': 11.5, 'weight': 13.5},
            {'connection': [{'i': 1, 'j': 1}, {'i': 1, 'j': 2}], 'dist': 2, 'weight': 0.01},
        ];
        var corners = router.findCorners(connections);
        expect(corners.length).toBe(2);
        expect(corners).toEqual([
            {'i': 1, 'j': 0},
            {'i': 1, 'j': 2}
        ]);
    });

    it('should order the chain correctly', function () {
        var router = new BusRouter([], undefined);
        var connections = [
            {'connection': [{'i': 1, 'j': 1}, {'i': 1, 'j': 0}], 'dist': 1, 'weight': 19.88},
            {'connection': [{'i': 2, 'j': 0}, {'i': 1, 'j': 0}], 'dist': 7, 'weight': 0.01},
            {'connection': [{'i': 0, 'j': 2}, {'i': 1, 'j': 2}], 'dist': 11.5, 'weight': 13.5},
            {'connection': [{'i': 1, 'j': 1}, {'i': 1, 'j': 2}], 'dist': 2, 'weight': 0.01}
        ];
        var chain = router.sortConnectionsToChain(connections, {'x': 3, 'y': 3});
        expect(chain.length).toBe(4);
        expect(chain).toEqual([
            {'connection': [{'i': 0, 'j': 2}, {'i': 1, 'j': 2}], 'dist': 11.5, 'weight': 13.5},
            {'connection': [{'i': 1, 'j': 1}, {'i': 1, 'j': 2}], 'dist': 2, 'weight': 0.01},
            {'connection': [{'i': 1, 'j': 1}, {'i': 1, 'j': 0}], 'dist': 1, 'weight': 19.88},
            {'connection': [{'i': 2, 'j': 0}, {'i': 1, 'j': 0}], 'dist': 7, 'weight': 0.01}
        ]);
    });

    it('should create a correct count grid', function () {
        var router = new BusRouter([], undefined);
        var connections = [
            {'connection': [{'i': 2, 'j': 1}, {'i': 1, 'j': 1}], 'dist': 1, 'weight': 1},
            {'connection': [{'i': 1, 'j': 1}, {'i': 1, 'j': 2}], 'dist': 1, 'weight': 1},
            {'connection': [{'i': 1, 'j': 1}, {'i': 1, 'j': 0}], 'dist': 1, 'weight': 1},
            {'connection': [{'i': 1, 'j': 0}, {'i': 0, 'j': 0}], 'dist': 1, 'weight': 1},
            {'connection': [{'i': 1, 'j': 2}, {'i': 1, 'j': 3}], 'dist': 1, 'weight': 1}
        ];
        var countGrid = router.getCountGrid(connections, {'x': 3, 'y': 4});
        expect(countGrid).toEqual([
            [1, 2, 0],
            [0, 3, 1],
            [0, 2, 0],
            [0, 1, 0]
        ]);
    })
});