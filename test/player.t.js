var assert = require('assert');
var Player = require('../player').Player;

describe('Player', function () {
    describe('#name', function () {
        it('should return the same name it was initialized with', function () {
            var name = "testName",
                player = new Player(name);
            assert.equal(name, player.name);
        });
    });
});