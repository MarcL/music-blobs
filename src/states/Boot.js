import Phaser from 'phaser';
import WebFont from 'webfontloader';

export default class extends Phaser.State {
    init() {
        this.stage.backgroundColor = '#E7DFCC';
        this.fontsReady = false;
        this.fontsLoaded = this.fontsLoaded.bind(this);
    }

    create() {
        this.input.maxPointers = 1;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.refresh();
    }

    preload() {
        WebFont.load({
            custom: {
                families: ['eraserregular', 'dinregular']
            },
            active: this.fontsLoaded,
        });
    }

    render() {
        if (this.fontsReady) {
            this.state.start('Splash');
        }
    }

    fontsLoaded() {
        this.fontsReady = true;
    }
}
