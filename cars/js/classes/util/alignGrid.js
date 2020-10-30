class AlignGrid
{
  // Call the config so it can be acsessed anywhere in class. Using config because setting up game
  constructor(config)
  {
    // Below is incase the scene doesnt have any reference to row/colums/height/width
    // ect in sceneMain.js and needs the defult values
    this.config=config;
    if (!config.scene)
    {
      console.log("missing scene");
      return;
    }
    if (!config.rows)
    {
      config.rows=5;
    }
    if (!config.cols)
    {
      config.cols=5;
    }
    if (!config.height)
    {
      config.height=game.config.height;
    }
    if (!config.width)
    {
      config.width=game.config.width;
    }
    // Link to the configuration scene
    this.scene=config.scene;
    // This calculation will define the cells width and height
    this.cellWidth=config.width/config.cols;
    this.cellHeight=config.height/config.rows;
  }

  show()
  {
    // Show the above graph and what thickness and colour the lines are
    this.graphics=this.scene.add.graphics();
    this.graphics.lineStyle(2,0xff0000);
    // Draws in the amount of columns that can be fit into the screen width. Goes from top to bottom of the screen.
    for (var i = 0; i < this.config.width; i+=this.cellWidth) {
          this.graphics.moveTo(i,0); // x=i, y=0
          this.graphics.lineTo(i,this.config.height);
        }
    // Draws in the amount of rows that can be fit into the screen height. Goes from left to right of the screen.
    for (var i = 0; i < this.config.height; i+=this.cellHeight) {
          this.graphics.moveTo(0,i); // x=0, y=i
          this.graphics.lineTo(this.config.width,i);
        }
    // Draws the graphs lines
    this.graphics.strokePath();
  }
  placeAt(xx,yy,obj)
  {
    //calc position based upon the cellWidth and cellHeight
    var x2=this.cellWidth*xx+this.cellWidth/2;
    var y2=this.cellHeight*yy+this.cellHeight/2;

    obj.x=x2;
    obj.y=y2;
  }
  // A simplified version of placing objects on the grid, index is the number of the cell going acoss the screen
  placeAtIndex(index,obj)
  {
    var yy=Math.floor(index/this.config.cols);
    var xx=index-(yy*this.config.cols);

    this.placeAt(xx,yy,obj);
  }
  // Works with placeAtIndex for seeing which cell has witch numer for easier image insertion
  showNumbers()
  {
    this.show();
    var count=0;
    for (var i = 0; i < this.config.rows; i++) {
      for(var j=0;j<this.config.cols;j++)
      {
        var numText=this.scene.add.text(0,0,count,{color:'#ff0000'});
        numText.setOrigin(0.5,0.5);
        this.placeAtIndex(count,numText);
        count++;
      }
    }
  }
}
