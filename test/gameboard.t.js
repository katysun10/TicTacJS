var assert = require('assert');
var GameBoard = require('../GameBoard').GameBoard;

describe('GameBoard', function () {
    describe('numRows and numCols', function () {
        it('should return the same values as it was constructed with', function () {
            var row = 3;
            var col = 3;
            var gameBoard = new GameBoard(row, col);
            assert.equal(row, gameBoard.numRows);
            assert.equal(col, gameBoard.numCols);
        });
    });

    describe('dummy', function () {
        it('should return the same values as it was constructed with', function () {
            var row = 300;
            var col = 3;
            var gameBoard = new GameBoard(row, col);
            assert.equal(row, gameBoard.numRows);
            assert.equal(col, gameBoard.numCols);
        });
    });
});