class Player {
constructor(x,y,width,height)
var option= {
isStatic : true
};
this. body=Bodies.rectangle(x,y,width,height,option);
this. width=width;
this.height=height;
this.image= loadImage("./assets/player.png");


World.add(world,this.body)
}

display() {
    var pos = this.body.position;
var angel = this.body.angel;

push();
translate(pos.x,pos.y);

rotate(angel)
imageMode(CENTER)
image(this.image,0,0,this. width,this.height);
pop();


}
}
