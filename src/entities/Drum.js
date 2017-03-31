import Phaser from 'phaser';

export default class extends Phaser.Sprite {

    constructor({game, x, y, asset, collectibleType, onOutOfBounds, isFood}) {
        super(game, x, y, asset);
        this.anchor.setTo(0.5);
    }
}
