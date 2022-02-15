class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "introduce tu nombre"); 
    this.playButton = createButton("jugar");
    this.titleImg = createImg("assets/title.png");
    this.greeting = createElement ("h2");
    
  }
setElementsPosition(){
  this.titleImg.position(120,100);
  this.playButton.position(width/2 -90, heihgt/2 -20);
  this.input.position(width/2 -110, height/2 -80);
  this.greeting.position(width/2 -300, height/2 -100);


}
display(){
this.setElementsPosition();
this.handleMousePressed();
}




handleMousePressed(){
this.playButton.mousepressed(()=> {
this.input.hide();
this.playButton.hide(); 
var message = 'Hola ${this.input.value()}espera a que se una otro jugador...';
this.greeting.html(message);
player.name = this.input.value();
player.index = 1;

})
}

}
