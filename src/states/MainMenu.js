import Phaser from 'phaser';
import gameConfig from '../config/game';

export default class extends Phaser.State {
    create() {
        // this.add.sprite(0, 0, 'background-landing');

        // this.add.button(
        //     config.gameWidth * 0.2,
        //     config.gameHeight * 0.34,
        //     'play-button',
        //     this.startGame,
        //     this,
        //     1,
        //     0
        // );
    }

    startGame() {
        this.state.start('Game');
    }
}
