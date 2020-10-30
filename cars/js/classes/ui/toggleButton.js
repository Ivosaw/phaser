class ToggleButton extends Phaser.GameObjects.Container
{
  constructor(config)
  {
    super(config.scene);
    this.scene=config.scene;

    this.back=this.scene.add.image(0,0,config.backKey);
    this.onIcon=this.scene.add.image(0,0,config.onIcon);
    this.offIcon=this.scene.add.image(0,0,config.offIcon);

    Align.scaleToGameW(this.back,.1);
    Align.scaleToGameW(this.onIcon,.05);
    Align.scaleToGameW(this.offIcon,.05);

    this.add(this.back);
    this.add(this.onIcon);
    this.add(this.offIcon);

    if(!config.value)
    {
      config.value=true;
    }
    // makes a reference to value so that it sets value into the config
    this.value=config.value;
    // has a reference in toggle() to trigger the this.value to swap to not the current value
    if (config.event)
    {
      this.event=config.event;
    }

    this.setIcons();

    this.back.setInteractive();
    this.back.on('pointerdown',this.toggle,this);
    // Alows button location to be added to the ToggleButton in sceneMain
    if (config.x)
    {
      this.x=config.x;
    }
    if (config.y)
    {
      this.y=config.y;
    }
    // Containers in Phaser dont have a screen Height or Width unless it is set in the constructor
    this.setSize(this.back.displayWidth,this.back.displayHeight);
    //Needs to be added back to the scene otherwise button will exist but wont be visable
    this.scene.add.existing(this);
  }
  toggle()
  {
    this.value=!this.value;
    this.setIcons();
    if (this.event)
    {
      emitter.emit(this.event,this.value);
    }
  }
  setIcons()
  {
    if (this.value==true) {
      this.onIcon.visible=true;
      this.offIcon.visible=false;
    } else {
      this.onIcon.visible=false;
      this.offIcon.visible=true;
    }
  }
}
