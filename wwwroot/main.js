class StartScene extends Phaser.Scene {
    constructor() {
        super("StartScene");
    }
    create() {
        this.button = this.add.graphics()
            .fillStyle(0xffff00)
            .fillRect(200, 166, 152, 61)
            .setInteractive()
            .on('pointerdown', () => {
            console.log("You clicked to play.. and nothing happenend.");
        }, this);
        this.add.text(207, 216, "PLAY")
            .setFill("color(0,0,255)")
            .setFontSize(56)
            .setFont("serif");
    }
}
window.onload = () => {
    var game = new Phaser.Game({
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
    });
};
//# sourceMappingURL=main.js.map