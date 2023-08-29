let titleLabel1, titleLabel2;
let fontSelector;
let titleInput1, titleInput2;
let fontRadio;
let textColor;
let fontSize;
let rSlider, gSlider, bSlider;

let sel;
let images = {};
let selectedImageKey = 'image1';


let font;
let fontSiize = 24;
let textColour;

function preload() {
  images.image1 = loadImage('images/Distracted-Boyfriend.jpg');
  images.image2 = loadImage('images/womancat.jpg');
  images.image3 = loadImage('images/firegirl.jpg');
  images.image4 = loadImage('images/comic.jpg');
}




function setup() {
 let canvas= createCanvas(800, 600);
 canvas.parent('column-two');

 let btn1 = createButton('Save'); //creates a button element called btn1

  btn1.parent('column-one'); //sets div id="column-two"></div> as the parent container of the element
  btn1.class('buttons'); //assigns the class 'buttons' to the element
  btn1.id('button1'); //assigns the id 'button1' to element

  btn1.mousePressed(saveImage);
  
  
  

  titleLabel1 = createP('Title 1');
  //titleLabel1.position(20, 60);
titleLabel1.parent('column-one');
  

  titleInput1 = createInput();
  //titleInput1.position(20, 100);
titleInput1.parent('column-one');

  titleLabel2 = createP('Title 2');
 // titleLabel2.position(20, 120);
titleLabel2.parent('column-one'); 

  titleInput2 = createInput();
  //titleInput2.position(20, 160);
titleInput2.parent('column-one');   

  textColor = color(128, 128, 128);
  let fontLabel = createP('Font color (R, G, B)');
  //fontLabel.position(280, 450);
  fontLabel.parent('column-one');

  rSlider = createSlider(0, 255, 128); // Red slider
  gSlider = createSlider(0, 255, 128); // Green slider
  bSlider = createSlider(0, 255, 128); // Blue slider
  
  //rSlider.position(280, 490);
  //gSlider.position(280, 510);
  //bSlider.position(280, 530);

  rSlider.parent('column-one'); 
  gSlider.parent('column-one'); 
  bSlider.parent('column-one'); 

  fontRadio = createRadio();
  fontRadio.option('Impact');
  fontRadio.option('Arial');
  fontRadio.option('Courier New');
  fontRadio.selected('Impact');
  //fontRadio.position(280, 565);
  fontRadio.parent('column-one'); 



 

  let sizeLabel = createP('Font size');
  //sizeLabel.position(20, 535);
  sizeLabel.parent('column-one'); 

  let fontSlider = createSlider(10, 50, 20);
  //fontSlider.position(20, 570);
  fontSlider.parent('column-one'); 

  fontSlider.input(updateFont);
  titleInput1.input(drawText);
  titleInput2.input(drawText);
  rSlider.input(updateTextColor);
  gSlider.input(updateTextColor);
  bSlider.input(updateTextColor);
  
  
  

   textAlign(CENTER);
  background(200);
  

  
  imageSelector = createSelect();
  imageSelector.position(20,470)
  imageSelector.option('Image 1', 'image1');
  imageSelector.option('Image 2', 'image2');
  imageSelector.option('Image 3', 'image3');
  imageSelector.option('Image 4', 'image4');
  imageSelector.selected(selectedImageKey);
  imageSelector.changed(changeImage);
  
  
  
}

function saveImage() { 
  saveCanvas(canvas, 'myCanvas', 'png');
}

function draw() {
  background(245);
  
  let selectedImage = images[selectedImageKey];
  if (selectedImage) {
    image(selectedImage, 0,0,800,600)
  }
  
  
  let selectedFont = fontRadio.value();
  textFont(selectedFont);
  fill(textColor);
  
  let title1 = titleInput1.value();
  textSize(fontSize);
  text(title1,550,110);
  
  let title2 = titleInput2.value();
  textSize(fontSize);
  text(title2,150, 470);
  
   
  
}

function updateFont() {
  fontSize = this.value();
  drawText();
}

function updateTextColor() {
  let r = rSlider.value();
  let g = gSlider.value();
  let b = bSlider.value();
  textColor = color(r, g, b);
  drawText();
}

function drawText() {
  redraw();
  
}  
function changeImage() {
  
  selectedImageKey = imageSelector.value();
  redraw();
}

