class FlatButton extends Phaser.GameObjects.Container
{
  constructor(config)
  {
    if(!config.scene)
    {
      console.log("missing scene!");
      return;
    }
    if (!config.key)
    {
      console.log("missing key");
      return;
    }
    super(config.scene);
    //need to make the local config a class veriable so it can work with the emitter/pressed()
    this.config=config;
    //every time the constructor has the config as a parameter you need to link back to the this.scene
    this.scene=config.scene;
    //this adds the back of the buttton image that will be used.
    this.back=this.scene.add.image(0,0,config.key);

    this.add(this.back);
    //adding text to the "back" of the buttonbutton
    if (config.text)
    {
      if (config.textConfig)
      {
        this.text1=this.scene.add.text(0,0,config.text,config.textConfig);
      }
      else
      {
        this.text1=this.scene.add.text(0,0,config.text);
      }
      this.text1.setOrigin(0.5,0.5);
      this.add(this.text1);
    }
    // Alows button location to be added to the var flatbutton=new FlatButton({}) in sceneMain
    if (config.x)
    {
      this.x=config.x;
    }
    if (config.y)
    {
      this.y=config.y;
    }
    //Needs to be added back to the scene otherwise button will exist but wont be visable
    this.scene.add.existing(this);
    //check to see if a event happens when the button is pressed. pointerdown is a touch friendly version of mousedown.
    if (config.event)
    {
      this.back.setInteractive();
      this.back.on('pointerdown',this.pressed,this);
    }
    // checks if its a desktop device and changes the back button depending on the parameters in over() and out()
    if (model.isMobile==-1)
    {
      this.back.on("pointerover",this.over,this);
      this.back.on("pointerout",this.out,this);
    }
  }
  over()
    {
      this.y-=5;
    }
  out()
    {
      this.y+=5;
    }
  //checks if flatButton variable has params paramiter or just event to emit
  pressed()
  {
    if (this.config.params)
    {
      emitter.emit(this.config.event,this.config.params);
    }
    else
      {
        emitter.emit(this.config.event);
      }
    }
  //tester to see if button was activated
  buttonPressed(params)
  {
    console.log(params);
    // Below is tester to see if new scene transition happenes.
    //this.scene.start("SceneOver");
  }
}
