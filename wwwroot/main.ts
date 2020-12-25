const Random = Phaser.Math.Between;

const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;

class StartScene extends Phaser.Scene {
    button: Phaser.GameObjects.Graphics
    constructor() {
        super("StartScene");
    }
    preload() {
        this.load.scenePlugin({
            key: 'rexuiplugin',
            url: './Phaser/Plugins/rexuiplugin.min.js',
            sceneKey: 'rexUI'
        });

        


    }
    create() {
        this["rexUI"].add.fixWidthButtons({
            x: 0,
            y: 0,
            width: 400,
            height: 400,

            orientation: 0,

            // Elements
            // background: backgroundGameObject,

            buttons: [
                new UIButton(this, 200, 166, 152, 61, "Play", 0xffff00),
            ],
            align: 0,
            click: {
                mode: 'pointerup',
                clickInterval: 100
            },

            // space: 0,
            // space: { left: 0, right:0, top:0, bottom:0, line:0, item:0 },

            // name: '',
            // draggable: false,
            eventEmitter: this,
            // groupName: undefined,

            
        })
        .setButtonEnable(0)
        .on('button.over', (button, index, pointer, event) => {
            console.log(`Clicked me = ${button} ,  from ${index} at ${pointer} , e=${event}`);
        }, this);
    }
}
var game: Phaser.Game;
window.onload = () => {
    game = new Phaser.Game({
        type: Phaser.AUTO,
        physics: {
            arcade: {
                debug: true
            }
        },
        backgroundColor: 0xf0f0f0,
        width: 600,
        height: 600,
        scene: [
            StartScene
        ]
    })
}
class UIButton {
    constructor(
        public scene: Phaser.Scene,
        public x: number, public y: number,
        public width: number, public height: number,
        public text: string, public color: number) {

        scene["rexUI"].add.label({
            x: x, 
            y: y,
            width: width,
            height: height,
            background: scene["rexUI"].add.roundRectangle(x, y, width, height, 20, COLOR_LIGHT),
            text: scene.add.text(x, y, text, {
                fontSize: "18"
            }),
            space: {
                left: 10,
                right: 10,
            },
            align: 'center'
        });
    }
}

