class SceneMainMenu extends Phaser.Scene {
  constructor () {
    super({ key: 'SceneMainMenu' })
  }

  preload () {
    this.load.image('sprBg0', 'content/sprBg0.png')
    this.load.image('sprBg1', 'content/sprBg1.png')
    this.load.image('sprBtnPlay', 'content/sprBtnPlay.png')
    this.load.image('sprBtnPlayHover', 'content/sprBtnPlayHover.png')
    this.load.image('sprBtnPlayDown', 'content/sprBtnPlayDown.png')
    this.load.image('sprBtnRestart', 'content/sprBtnRestart.png')
    this.load.image('sprBtnRestartHover', 'content/sprBtnRestartHover.png')
    this.load.image('sprBtnRestartDown', 'content/sprBtnRestartDown.png')
  }

  create () {
    this.btnPlay = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      'sprBtnPlay'
    )

    this.btnPlay.setInteractive()

    this.btnPlay.on(
      'pointerover',
      function () {
        this.btnPlay.setTexture('sprBtnPlayHover') // set the button texture to sprBtnPlayHover
      },
      this
    )

    this.btnPlay.on('pointerout', function () {
      this.setTexture('sprBtnPlay')
    })

    this.btnPlay.on(
      'pointerdown',
      function () {
        this.btnPlay.setTexture('sprBtnPlayDown')
      },
      this
    )

    this.btnPlay.on(
      'pointerup',
      function () {
        this.btnPlay.setTexture('sprBtnPlay')
        this.scene.start('SceneMain')
      },
      this
    )

    this.title = this.add.text(
      this.game.config.width * 0.5,
      128,
      'SPACE SHOOTER',
      {
        fontFamily: 'VT323',
        fontSize: 48,
        fontStyle: 'bold',
        color: '#ffffff',
        align: 'center'
      }
    )
    this.title.setOrigin(0.5)
  }
}
