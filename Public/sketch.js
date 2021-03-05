var socket;

function setup() {
background(200);
createCanvas(windowWidth, windowHeight);
socket = io.connect('http://localhost:3000/');
socket.on('mouse', newDrawing);
}

function draw() {
}

function mouseDragged(){
    var data = {
        x: mouseX,
        
        y: mouseY
    }
    
    
    
    socket.emit('mouse', data);
    
    console.log('sending' + mouseX + ',' + mouseY);
    
    ellipse(mouseX, mouseY, 50,50);
}

function newDrawing(data){
    
    fill(100);
    
    ellipse(data.x, data.y, 50, 50);
    
}