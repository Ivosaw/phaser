// Remove the "extends Phaser.GameObjects.Container" , "super(config.scene);" and "this.add(this.musicButton);/this.add(this.sfcButton);" if container within container creates a problem
class SoundButtons
{
  constructor(config)
  {

    this.scene=config.scene;

    this.musicButton=new ToggleButton({scene:this.scene,backKey:'toggleBack',onIcon:'musicOn',offIcon:'musicOff',event:G.TOGGLE_MUSIC});
    this.sfxButton=new ToggleButton({scene:this.scene,backKey:'toggleBack',onIcon:'sfxOn',offIcon:'sfxOff',event:G.TOGGLE_SOUND});



    this.musicButton.y=this.musicButton.height/2;
    this.musicButton.x=this.musicButton.width/2;

    this.sfxButton.x=game.config.width-this.sfxButton.width/2;
    this.sfxButton.y=this.musicButton.y;
    // Turns the music button off if the game is restarted and the music was off previously.
    if (model.musicOn==false)
    {
      this.musicButton.toggle();
    }
    if (model.soundOn==false)
    {
      this.sfxButton.toggle();
    }

    this.scene.add.existing(this);
  }
}
