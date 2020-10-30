//SceneLoad creates a preloader so that the progress of asset load times can be tracked. helps speed up asset load time on mobile and 
class SceneLoad extends Phaser.Scene {
    constructor() {
        super('SceneLoad');
    }
    preload()
    {
      // load images and sounds
      this.load.image("road","images/road.jpg");
      this.load.spritesheet("cars","images/cars.png",{frameWidth:60,frameHeight:126});
      this.load.image("line","images/line.png");
      this.load.image("pcar1","images/pcar1.png");
      this.load.image("pcar2","images/pcar2.png");
      this.load.image("cone","images/cone.png");
      this.load.image("barrier","images/barrier.png");
      // loads music toggle button images
      this.load.image("toggleBack","images/toggles/1.png");
      this.load.image("sfxOff","images/icons/sfx_off.png");
      this.load.image("sfxOn","images/icons/sfx_on.png");
      this.load.image("musicOn","images/icons/music_on.png");
      this.load.image("musicOff","images/icons/music_off.png");
      // loads music
      this.load.audio("backgroundMusic",['audio/random-race.mp3','audio/random-race.ogg']);
      this.load.audio("boom",['audio/boom.mp3','audio/boom.ogg']);
      this.load.audio("whoosh",['audio/whoosh.mp3','audio/whoosh.ogg']);
    }
    create()
    {
      this.scene.start("SceneTitle");
    }
}
