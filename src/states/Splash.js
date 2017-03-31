import Phaser from 'phaser';

import gameConfig from '../config/game';

export default class extends Phaser.State {
    preload() {
        this.stage.backgroundColor = '#E7DFCC';
        // this.preloadBar = this.add.sprite((config.gameWidth - 500) / 2, config.gameHeight / 2, 'bars', 1);
        // this.preloadBar.anchor.setTo(0, 0.5);
        // this.load.setPreloadSprite(this.preloadBar);

        this.loadImages();
    }

    create() {
        this.state.start('MainMenu');
    }

    loadImages() {
        const imageMap = gameConfig.images;
        Object.keys(imageMap).forEach((id) => {
            this.load.image(id, imageMap[id]);
        });
    }
}
