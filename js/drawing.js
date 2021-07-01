var draw;
var unit = 25;
var x = 0;
var y = 0;
var scale = 1;
var characterX = 0;
var characterY = 14*unit;
var direction =1;
var isJumping = false;
var isGoingUp = true;
var time = 0;

const scaleChange = 0.1;

// When the window is loaded, call (use) the init fuction.
window.onload = init;
document.onkeydown = checkKey;
// Comment (Comman + / or Ctrl + /)
//   - Block within code that the computer skips over.
//   - Meant to be seen by humans

// Fuction
//   - Group of code that is packaged under a fuction name that can be 
//     used multiple times.
//   - init() fuction is the first fuction that is used when the webpage is loaded.
function init() {
    // Variable
    //  - Storing a value given a name

    // Connecting the elemnet in HTML file with id of "myCanvas""
    var canvas = document.getElementById("myCanvas")

    draw = canvas.getContext("2d");
    draw.canvas.width = 1350;
    draw.canvas.height = 760;
    updateUI();

    //drawHeart() ;
    //drawSunglass() ;
    //drawName();
    //drawPicachu();
}
function checkKey(e) {
    if (e.keyCode == '32') { // space
        x = 0;
        y = 0;
        scale = 1;
        draw.resetTransform();
    }
    if (e.keyCode == '37') {//left arrow
        x--;
        draw.translate(-unit,0);
    }
    if (e.keyCode == '38') {// up arrow
        y--;
        draw.translate(0,-unit);
    }
    if (e.keyCode == '39') {// right arrow
        x++;
        draw.translate(unit,0);
    }
    
    if (e.keyCode == '40') { // down arrow
        y++;
        draw.translate(0,unit);
    }  
    if (e.keyCode == '65') { // a (left)
        characterX -= 3;
        direction =-1;
        
        animateKirby (characterX,direction,1);
    }  
    if (e.keyCode == '68') { // d (right)
        characterX += 3;
        direction = 1;
        animateKirby (characterX,direction,1);
    }  
    if (e.keyCode == '87') {
        isJumping = true;
        animateKirby(characterX,direction,0);
    }
    if (e.keyCode == '187') { // +
        draw.scale(1/scale,1/scale);
        scale += scaleChange; 
        draw.scale(scale,scale);
    }  
    if (e.keyCode == '189') { // -
        draw.scale(1/scale,1/scale);
        scale -= scaleChange;
        draw.scale(scale,scale);
    }
    updateUI();
}


function updateUI() {
    document.getElementById("xTranslate").innerHTML = "X : " + x;
    document.getElementById("yTranslate").innerHTML = "Y : " + y; 
    document.getElementById("scale").innerHTML = "Scale : " + scale; 
}

function drawHeart() {
    draw.fillStyle = 'red';
    draw.fillRect(3 * unit, 1, 3 * unit, unit);
    draw.fillRect(2 * unit, 1 * unit, unit, unit, unit);
    draw.fillRect(unit, 2 * unit, unit, unit, unit);
    draw.fillRect(1, 3 * unit, unit, 2 * unit, unit);
    draw.fillRect(unit, 2 * unit, unit, unit, unit);
    draw.fillRect(1 * unit, 5 * unit, unit, unit, unit);
    draw.fillRect(2 * unit, 6 * unit, unit, unit, unit);
    draw.fillRect(3 * unit, 7 * unit, unit, unit, unit);
    draw.fillRect(4 * unit, 8 * unit, unit, unit, unit);
    draw.fillRect(5 * unit, 9 * unit, unit, unit, unit);
    draw.fillRect(6 * unit, 10 * unit, unit, unit, unit);
    draw.fillRect(7 * unit, 11 * unit, unit, unit, unit);
    draw.fillRect(8 * unit, 12 * unit, unit, unit, unit);
    draw.fillRect(9 * unit, 11 * unit, unit, unit, unit);
    draw.fillRect(10 * unit, 10 * unit, unit, unit, unit);
    draw.fillRect(11 * unit, 9 * unit, unit, unit, unit);
    draw.fillRect(12 * unit, 8 * unit, unit, unit, unit);
    draw.fillRect(13 * unit, 7 * unit, unit, unit, unit);
    draw.fillRect(14 * unit, 6 * unit, unit, unit, unit);
    draw.fillRect(15 * unit, 5 * unit, unit, unit, unit);
    draw.fillRect(16 * unit, 3 * unit, unit, 2 * unit, unit);
    draw.fillRect(15 * unit, 2 * unit, unit, unit, unit);
    draw.fillRect(14 * unit, 1 * unit, unit, unit, unit);
    draw.fillRect(13 * unit, 0 * unit, unit, unit);
    draw.fillRect(12 * unit, 0 * unit, unit, unit);
    draw.fillRect(11 * unit, 0 * unit, unit, unit);
    draw.fillRect(10 * unit, 1 * unit, unit, unit);
    draw.fillRect(9 * unit, 2 * unit, unit, unit);
    draw.fillRect(8 * unit, 3 * unit, unit, unit);
    draw.fillRect(7 * unit, 2 * unit, unit, unit);
    draw.fillRect(6 * unit, 1 * unit, unit, unit);


}

function drawSunglass() {
    draw.fillStyle = 'black'
    draw.fillRect(5 * unit, 0 * unit, unit, unit);
    draw.fillRect(4 * unit, 1 * unit, unit, unit);
    draw.fillRect(3 * unit, 2 * unit, unit, unit);
    draw.fillRect(2 * unit, 3 * unit, unit, unit);
    draw.fillRect(1 * unit, 4 * unit, unit, unit);
    draw.fillRect(0 * unit, 5 * unit, unit, unit);
    draw.fillRect(0 * unit, 6 * unit, unit, unit);
    draw.fillRect(0 * unit, 7 * unit, unit, unit);

    draw.fillRect(1 * unit, 6 * unit, unit, unit);
    draw.fillRect(1 * unit, 7 * unit, unit, unit);
    draw.fillRect(1 * unit, 8 * unit, unit, unit);

    draw.fillRect(2 * unit, 6 * unit, unit, unit);
    draw.fillRect(2 * unit, 6 * unit, unit, unit);
    draw.fillRect(2 * unit, 7 * unit, unit, unit);
    draw.fillRect(2 * unit, 8 * unit, unit, unit);
    draw.fillRect(2 * unit, 9 * unit, unit, unit);

    draw.fillRect(3 * unit, 6 * unit, unit, unit);
    draw.fillRect(3 * unit, 7 * unit, unit, unit);
    // draw.fillRect(3*unit,8*unit,unit,unit);
    draw.fillRect(3 * unit, 9 * unit, unit, unit);
    draw.fillRect(3 * unit, 10 * unit, unit, unit);

    draw.fillRect(4 * unit, 6 * unit, unit, unit);
    draw.fillRect(4 * unit, 7 * unit, unit, unit);
    draw.fillRect(4 * unit, 8 * unit, unit, unit);
    //draw.fillRect(4*unit,9*unit,unit,unit);
    draw.fillRect(4 * unit, 10 * unit, unit, unit);
    draw.fillRect(4 * unit, 11 * unit, unit, unit);

    draw.fillRect(5 * unit, 6 * unit, unit, unit);
    draw.fillRect(5 * unit, 7 * unit, unit, unit);
    //draw.fillRect(5*unit,8*unit,unit,unit);
    draw.fillRect(5 * unit, 9 * unit, unit, unit);
    //draw.fillRect(5*unit,10*unit,unit,unit);
    draw.fillRect(5 * unit, 11 * unit, unit, unit);

    draw.fillRect(6 * unit, 6 * unit, unit, unit);
    draw.fillRect(6 * unit, 7 * unit, unit, unit);
    draw.fillRect(6 * unit, 8 * unit, unit, unit);
    //draw.fillRect(6*unit,9*unit,unit,unit);
    draw.fillRect(6 * unit, 10 * unit, unit, unit);
    draw.fillRect(6 * unit, 11 * unit, unit, unit);

    draw.fillRect(7 * unit, 6 * unit, unit, unit);
    draw.fillRect(7 * unit, 7 * unit, unit, unit);
    draw.fillRect(7 * unit, 8 * unit, unit, unit);
    draw.fillRect(7 * unit, 9 * unit, unit, unit);
    //draw.fillRect(7*unit,10*unit,unit,unit);
    draw.fillRect(7 * unit, 11 * unit, unit, unit);

    draw.fillRect(8 * unit, 6 * unit, unit, unit);
    draw.fillRect(8 * unit, 7 * unit, unit, unit);
    draw.fillRect(8 * unit, 8 * unit, unit, unit);
    draw.fillRect(8 * unit, 9 * unit, unit, unit);
    draw.fillRect(8 * unit, 10 * unit, unit, unit);
    draw.fillRect(8 * unit, 11 * unit, unit, unit);

    draw.fillRect(9 * unit, 6 * unit, unit, unit);
    draw.fillRect(9 * unit, 7 * unit, unit, unit);
    draw.fillRect(9 * unit, 8 * unit, unit, unit);
    draw.fillRect(9 * unit, 9 * unit, unit, unit);
    draw.fillRect(9 * unit, 10 * unit, unit, unit);
    draw.fillRect(9 * unit, 11 * unit, unit, unit);

    draw.fillRect(10 * unit, 6 * unit, unit, unit);
    draw.fillRect(10 * unit, 7 * unit, unit, unit);
    draw.fillRect(10 * unit, 8 * unit, unit, unit);
    draw.fillRect(10 * unit, 9 * unit, unit, unit);
    draw.fillRect(10 * unit, 10 * unit, unit, unit);
    draw.fillRect(10 * unit, 11 * unit, unit, unit);

    draw.fillRect(11 * unit, 6 * unit, unit, unit);
    draw.fillRect(11 * unit, 7 * unit, unit, unit);
    draw.fillRect(11 * unit, 8 * unit, unit, unit);
    draw.fillRect(11 * unit, 9 * unit, unit, unit);
    draw.fillRect(11 * unit, 10 * unit, unit, unit);

    draw.fillRect(12 * unit, 6 * unit, unit, unit);
    draw.fillRect(12 * unit, 7 * unit, unit, unit);
    draw.fillRect(12 * unit, 8 * unit, unit, unit);
    draw.fillRect(12 * unit, 9 * unit, unit, unit);

    draw.fillRect(13 * unit, 6 * unit, unit, unit);
    draw.fillRect(13 * unit, 7 * unit, unit, unit);
    draw.fillRect(13 * unit, 8 * unit, unit, unit);

    draw.fillRect(14 * unit, 6 * unit, unit, unit);
    draw.fillRect(15 * unit, 6 * unit, unit, unit);
    draw.fillRect(16 * unit, 6 * unit, unit, unit);

    draw.fillRect(17 * unit, 7 * unit, unit, unit);
    draw.fillRect(17 * unit, 6 * unit, unit, unit);
    draw.fillRect(17 * unit, 7 * unit, unit, unit);
    draw.fillRect(17 * unit, 8 * unit, unit, unit);

    draw.fillRect(18 * unit, 6 * unit, unit, unit);
    draw.fillRect(18 * unit, 6 * unit, unit, unit);
    draw.fillRect(18 * unit, 7 * unit, unit, unit);
    draw.fillRect(18 * unit, 8 * unit, unit, unit);
    draw.fillRect(18 * unit, 9 * unit, unit, unit);

    draw.fillRect(19 * unit, 6 * unit, unit, unit);
    draw.fillRect(19 * unit, 7 * unit, unit, unit);
    // draw.fillRect(19*unit,8*unit,unit,unit);
    draw.fillRect(19 * unit, 9 * unit, unit, unit);
    draw.fillRect(19 * unit, 10 * unit, unit, unit);

    draw.fillRect(20 * unit, 6 * unit, unit, unit);
    draw.fillRect(20 * unit, 7 * unit, unit, unit);
    draw.fillRect(20 * unit, 8 * unit, unit, unit);
    //draw.fillRect(20*unit,9*unit,unit,unit);
    draw.fillRect(20 * unit, 10 * unit, unit, unit);
    draw.fillRect(20 * unit, 11 * unit, unit, unit);

    draw.fillRect(21 * unit, 6 * unit, unit, unit);
    draw.fillRect(21 * unit, 7 * unit, unit, unit);
    //draw.fillRect(21*unit,8*unit,unit,unit);
    draw.fillRect(21 * unit, 9 * unit, unit, unit);
    //draw.fillRect(21*unit,10*unit,unit,unit);
    draw.fillRect(21 * unit, 11 * unit, unit, unit);


    draw.fillRect(22 * unit, 6 * unit, unit, unit);
    draw.fillRect(22 * unit, 7 * unit, unit, unit);
    draw.fillRect(22 * unit, 8 * unit, unit, unit);
    //draw.fillRect(22*unit,9*unit,unit,unit);
    draw.fillRect(22 * unit, 10 * unit, unit, unit);
    draw.fillRect(22 * unit, 11 * unit, unit, unit);

    draw.fillRect(23 * unit, 6 * unit, unit, unit);
    draw.fillRect(23 * unit, 7 * unit, unit, unit);
    draw.fillRect(23 * unit, 8 * unit, unit, unit);
    draw.fillRect(23 * unit, 9 * unit, unit, unit);
    //draw.fillRect(23*unit,10*unit,unit,unit);
    draw.fillRect(23 * unit, 11 * unit, unit, unit);

    draw.fillRect(24 * unit, 6 * unit, unit, unit);
    draw.fillRect(24 * unit, 7 * unit, unit, unit);
    draw.fillRect(24 * unit, 8 * unit, unit, unit);
    draw.fillRect(24 * unit, 9 * unit, unit, unit);
    draw.fillRect(24 * unit, 10 * unit, unit, unit);
    draw.fillRect(24 * unit, 11 * unit, unit, unit);

    draw.fillRect(25 * unit, 6 * unit, unit, unit);
    draw.fillRect(25 * unit, 7 * unit, unit, unit);
    draw.fillRect(25 * unit, 8 * unit, unit, unit);
    draw.fillRect(25 * unit, 9 * unit, unit, unit);
    draw.fillRect(25 * unit, 10 * unit, unit, unit);
    draw.fillRect(25 * unit, 11 * unit, unit, unit);

    draw.fillRect(26 * unit, 6 * unit, unit, unit);
    draw.fillRect(26 * unit, 7 * unit, unit, unit);
    draw.fillRect(26 * unit, 8 * unit, unit, unit);
    draw.fillRect(26 * unit, 9 * unit, unit, unit);
    draw.fillRect(26 * unit, 10 * unit, unit, unit);
    draw.fillRect(26 * unit, 11 * unit, unit, unit);

    draw.fillRect(27 * unit, 6 * unit, unit, unit);
    draw.fillRect(27 * unit, 7 * unit, unit, unit);
    draw.fillRect(27 * unit, 8 * unit, unit, unit);
    draw.fillRect(27 * unit, 9 * unit, unit, unit);
    draw.fillRect(27 * unit, 10 * unit, unit, unit);

    draw.fillRect(28 * unit, 6 * unit, unit, unit);
    draw.fillRect(28 * unit, 7 * unit, unit, unit);
    draw.fillRect(28 * unit, 8 * unit, unit, unit);
    draw.fillRect(28 * unit, 9 * unit, unit, unit);

    draw.fillRect(29 * unit, 6 * unit, unit, unit);
    draw.fillRect(29 * unit, 7 * unit, unit, unit);
    draw.fillRect(29 * unit, 8 * unit, unit, unit);

    draw.fillRect(29 * unit, 5 * unit, unit, unit);
    draw.fillRect(30 * unit, 4 * unit, unit, unit);
    draw.fillRect(31 * unit, 3 * unit, unit, unit);
    draw.fillRect(32 * unit, 2 * unit, unit, unit);
    draw.fillRect(33 * unit, 1 * unit, unit, unit);
    draw.fillRect(34 * unit, 0 * unit, unit, unit);



}

function clear() {
    draw.clearRect(0, 0, draw.canvas.width, draw.canvas.height)
}
function drawName() {
    draw.fillStyle = 'purple'
    draw.save();
    draw.translate(70 * unit, 46 * unit);
    draw.scale(0.3, 0.3)
    draw.fillRect(0 * unit, 2 * unit, unit, unit)
    draw.fillRect(1 * unit, 1 * unit, unit, unit)
    draw.fillRect(2 * unit, 0 * unit, unit, unit)
    draw.fillRect(3 * unit, 0 * unit, unit, unit)
    draw.fillRect(4 * unit, 1 * unit, unit, unit)
    draw.fillRect(0 * unit, 3 * unit, unit, unit)
    draw.fillRect(0 * unit, 4 * unit, unit, unit)
    draw.fillRect(0 * unit, 5 * unit, unit, unit)
    draw.fillRect(0 * unit, 6 * unit, unit, unit)
    draw.fillRect(1 * unit, 7 * unit, unit, unit)
    draw.fillRect(2 * unit, 8 * unit, unit, unit)
    draw.fillRect(3 * unit, 8 * unit, unit, unit)
    draw.fillRect(4 * unit, 7 * unit, unit, unit)

    draw.fillRect(6 * unit, 0 * unit, unit, unit)
    draw.fillRect(6 * unit, 1 * unit, unit, unit)
    draw.fillRect(6 * unit, 2 * unit, unit, unit)
    draw.fillRect(6 * unit, 3 * unit, unit, unit)
    draw.fillRect(6 * unit, 4 * unit, unit, unit)
    draw.fillRect(6 * unit, 5 * unit, unit, unit)
    draw.fillRect(6 * unit, 6 * unit, unit, unit)
    draw.fillRect(6 * unit, 7 * unit, unit, unit)
    draw.fillRect(6 * unit, 8 * unit, unit, unit)
    draw.fillRect(7 * unit, 3 * unit, unit, unit)
    draw.fillRect(8 * unit, 3 * unit, unit, unit)
    draw.fillRect(9 * unit, 3 * unit, unit, unit)
    draw.fillRect(9 * unit, 4 * unit, unit, unit)
    draw.fillRect(9 * unit, 5 * unit, unit, unit)
    draw.fillRect(9 * unit, 6 * unit, unit, unit)
    draw.fillRect(9 * unit, 7 * unit, unit, unit)
    draw.fillRect(9 * unit, 8 * unit, unit, unit)

    draw.fillRect(11 * unit, 3 * unit, unit, unit)
    draw.fillRect(11 * unit, 4 * unit, unit, unit)
    draw.fillRect(11 * unit, 5 * unit, unit, unit)
    draw.fillRect(11 * unit, 6 * unit, unit, unit)
    draw.fillRect(11 * unit, 7 * unit, unit, unit)
    draw.fillRect(11 * unit, 8 * unit, unit, unit)
    draw.fillRect(12 * unit, 5 * unit, unit, unit)
    draw.fillRect(13 * unit, 4 * unit, unit, unit)
    draw.fillRect(14 * unit, 5 * unit, unit, unit)

    draw.fillRect(16 * unit, 5 * unit, unit, unit)
    draw.fillRect(16 * unit, 3 * unit, unit, unit)
    draw.fillRect(16 * unit, 6 * unit, unit, unit)
    draw.fillRect(16 * unit, 7 * unit, unit, unit)
    draw.fillRect(16 * unit, 8 * unit, unit, unit)

    draw.fillRect(18 * unit, 4 * unit, unit, unit)
    draw.fillRect(19 * unit, 3 * unit, unit, unit)
    draw.fillRect(20 * unit, 6 * unit, unit, unit)

    draw.fillRect(20 * unit, 3 * unit, unit, unit)
    draw.fillRect(18 * unit, 5 * unit, unit, unit)
    draw.fillRect(21 * unit, 3 * unit, unit, unit)
    draw.fillRect(19 * unit, 6 * unit, unit, unit)
    draw.fillRect(20 * unit, 6 * unit, unit, unit)
    draw.fillRect(20 * unit, 6 * unit, unit, unit)
    draw.fillRect(21 * unit, 6 * unit, unit, unit)
    draw.fillRect(21 * unit, 6 * unit, unit, unit)
    draw.fillRect(21 * unit, 7 * unit, unit, unit)
    draw.fillRect(21 * unit, 8 * unit, unit, unit)
    draw.fillRect(20 * unit, 8 * unit, unit, unit)
    draw.fillRect(19 * unit, 8 * unit, unit, unit)
    draw.fillRect(18 * unit, 8 * unit, unit, unit)

    draw.fillRect(23 * unit, 5 * unit, unit, unit)
    draw.fillRect(24 * unit, 5 * unit, unit, unit)
    draw.fillRect(25 * unit, 5 * unit, unit, unit)
    draw.fillRect(26 * unit, 5 * unit, unit, unit)
    draw.fillRect(27 * unit, 5 * unit, unit, unit)
    draw.fillRect(25 * unit, 4 * unit, unit, unit)
    draw.fillRect(25 * unit, 3 * unit, unit, unit)
    draw.fillRect(25 * unit, 6 * unit, unit, unit)
    draw.fillRect(25 * unit, 7 * unit, unit, unit)
    draw.fillRect(25 * unit, 8 * unit, unit, unit)
    draw.fillRect(26 * unit, 8 * unit, unit, unit)
    draw.fillRect(27 * unit, 8 * unit, unit, unit)
    draw.fillRect(28 * unit, 8 * unit, unit, unit)
    draw.fillRect(28 * unit, 7 * unit, unit, unit)

    draw.fillRect(30 * unit, 5 * unit, unit, unit)
    draw.fillRect(30 * unit, 3 * unit, unit, unit)
    draw.fillRect(30 * unit, 6 * unit, unit, unit)
    draw.fillRect(30 * unit, 7 * unit, unit, unit)
    draw.fillRect(30 * unit, 8 * unit, unit, unit)

    draw.fillRect(32 * unit, 3 * unit, unit, unit)
    draw.fillRect(32 * unit, 4 * unit, unit, unit)
    draw.fillRect(32 * unit, 5 * unit, unit, unit)
    draw.fillRect(32 * unit, 6 * unit, unit, unit)
    draw.fillRect(32 * unit, 7 * unit, unit, unit)
    draw.fillRect(32 * unit, 8 * unit, unit, unit)
    draw.fillRect(33 * unit, 4 * unit, unit, unit)
    draw.fillRect(34 * unit, 4 * unit, unit, unit)
    draw.fillRect(35 * unit, 4 * unit, unit, unit)
    draw.fillRect(36 * unit, 4 * unit, unit, unit)
    draw.fillRect(36 * unit, 5 * unit, unit, unit)
    draw.fillRect(36 * unit, 6 * unit, unit, unit)
    draw.fillRect(36 * unit, 7 * unit, unit, unit)
    draw.fillRect(36 * unit, 8 * unit, unit, unit)

    draw.fillRect(38 * unit, 4 * unit, unit, unit)
    draw.fillRect(38 * unit, 5 * unit, unit, unit)
    draw.fillRect(38 * unit, 6 * unit, unit, unit)
    draw.fillRect(38 * unit, 7 * unit, unit, unit)
    draw.fillRect(39 * unit, 8 * unit, unit, unit)
    draw.fillRect(40 * unit, 8 * unit, unit, unit)
    draw.fillRect(41 * unit, 8 * unit, unit, unit)
    draw.fillRect(42 * unit, 7 * unit, unit, unit)
    draw.fillRect(42 * unit, 6 * unit, unit, unit)
    draw.fillRect(42 * unit, 5 * unit, unit, unit)
    draw.fillRect(42 * unit, 4 * unit, unit, unit)
    draw.fillRect(41 * unit, 3 * unit, unit, unit)
    draw.fillRect(40 * unit, 3 * unit, unit, unit)
    draw.fillRect(39 * unit, 3 * unit, unit, unit)
    draw.fillRect(43 * unit, 8 * unit, unit, unit)


    draw.fillRect(48 * unit, 0 * unit, unit, unit)
    draw.fillRect(49 * unit, 0 * unit, unit, unit)
    draw.fillRect(50 * unit, 0 * unit, unit, unit)
    draw.fillRect(51 * unit, 0 * unit, unit, unit)
    draw.fillRect(52 * unit, 0 * unit, unit, unit)
    draw.fillRect(52 * unit, 1 * unit, unit, unit)
    draw.fillRect(51 * unit, 2 * unit, unit, unit)
    draw.fillRect(51 * unit, 3 * unit, unit, unit)
    draw.fillRect(50 * unit, 4 * unit, unit, unit)
    draw.fillRect(50 * unit, 5 * unit, unit, unit)
    draw.fillRect(49 * unit, 6 * unit, unit, unit)
    draw.fillRect(49 * unit, 7 * unit, unit, unit)
    draw.fillRect(49 * unit, 8 * unit, unit, unit)
    draw.fillRect(50 * unit, 8 * unit, unit, unit)
    draw.fillRect(51 * unit, 8 * unit, unit, unit)
    draw.fillRect(52 * unit, 8 * unit, unit, unit)

    draw.fillRect(54 * unit, 0 * unit, unit, unit)
    draw.fillRect(54 * unit, 1 * unit, unit, unit)
    draw.fillRect(54 * unit, 2 * unit, unit, unit)
    draw.fillRect(54 * unit, 3 * unit, unit, unit)
    draw.fillRect(54 * unit, 4 * unit, unit, unit)
    draw.fillRect(54 * unit, 5 * unit, unit, unit)
    draw.fillRect(54 * unit, 6 * unit, unit, unit)
    draw.fillRect(54 * unit, 7 * unit, unit, unit)
    draw.fillRect(54 * unit, 8 * unit, unit, unit)
    draw.fillRect(55 * unit, 3 * unit, unit, unit)
    draw.fillRect(56 * unit, 3 * unit, unit, unit)
    draw.fillRect(57 * unit, 3 * unit, unit, unit)
    draw.fillRect(57 * unit, 4 * unit, unit, unit)
    draw.fillRect(57 * unit, 5 * unit, unit, unit)
    draw.fillRect(57 * unit, 6 * unit, unit, unit)
    draw.fillRect(57 * unit, 7 * unit, unit, unit)
    draw.fillRect(57 * unit, 8 * unit, unit, unit)

    draw.fillRect(59 * unit, 3 * unit, unit, unit)
    draw.fillRect(59 * unit, 4 * unit, unit, unit)
    draw.fillRect(59 * unit, 5 * unit, unit, unit)
    draw.fillRect(59 * unit, 6 * unit, unit, unit)
    draw.fillRect(59 * unit, 7 * unit, unit, unit)
    draw.fillRect(60 * unit, 8 * unit, unit, unit)
    draw.fillRect(61 * unit, 8 * unit, unit, unit)
    draw.fillRect(62 * unit, 8 * unit, unit, unit)
    draw.fillRect(63 * unit, 7 * unit, unit, unit)
    draw.fillRect(63 * unit, 6 * unit, unit, unit)
    draw.fillRect(63 * unit, 5 * unit, unit, unit)
    draw.fillRect(63 * unit, 4 * unit, unit, unit)
    draw.fillRect(63 * unit, 3 * unit, unit, unit)
    draw.fillRect(64 * unit, 8 * unit, unit, unit)
    draw.restore();
}

function drawPicachu() {
    draw.save();
    draw.translate(1 * unit, 0 * unit, unit, unit);
    draw.fillStyle = 'black'
    draw.fillRect(0 * unit, 0 * unit, unit, unit);
    draw.fillRect(0 * unit, 1 * unit, unit, unit);
    draw.fillRect(0 * unit, 2 * unit, unit, unit);
    draw.fillRect(0 * unit, 3 * unit, unit, unit);
    draw.fillRect(0 * unit, 4 * unit, unit, unit);
    draw.fillRect(1 * unit, 0 * unit, unit, unit);
    draw.fillRect(1 * unit, 1 * unit, unit, unit);
    draw.fillRect(1 * unit, 2 * unit, unit, unit);
    draw.fillRect(1 * unit, 3 * unit, unit, unit);
    draw.fillRect(1 * unit, 4 * unit, unit, unit);
    draw.fillRect(0 * unit, 2 * unit, unit, unit);
    draw.fillRect(2 * unit, 5 * unit, unit, unit);
    draw.fillRect(1 * unit, 5 * unit, unit, unit);
    draw.fillRect(1 * unit, 6 * unit, unit, unit);
    draw.fillRect(2 * unit, 1 * unit, unit, unit);
    draw.fillRect(2 * unit, 2 * unit, unit, unit);
    draw.fillRect(2 * unit, 3 * unit, unit, unit);
    draw.fillRect(2 * unit, 3 * unit, unit, unit);
    draw.fillRect(2 * unit, 4 * unit, unit, unit);
    draw.fillRect(2 * unit, 5 * unit, unit, unit);
    draw.fillRect(2 * unit, 6 * unit, unit, unit);
    draw.fillRect(2 * unit, 7 * unit, unit, unit);
    draw.fillRect(2 * unit, 8 * unit, unit, unit);
    draw.fillRect(3 * unit, 1 * unit, unit, unit);
    draw.fillRect(3 * unit, 9 * unit, unit, unit);
    draw.fillRect(4 * unit, 2 * unit, unit, unit);
    draw.fillRect(4 * unit, 10 * unit, unit, unit);
    draw.fillRect(5 * unit, 3 * unit, unit, unit);
    draw.fillRect(6 * unit, 3 * unit, unit, unit);
    draw.fillRect(5 * unit, 11 * unit, unit, unit);
    draw.fillRect(5 * unit, 12 * unit, unit, unit);
    draw.fillRect(7 * unit, 4 * unit, unit, unit);
    draw.fillRect(8 * unit, 5 * unit, unit, unit);
    draw.fillRect(9 * unit, 5 * unit, unit, unit);
    draw.fillRect(10 * unit, 6 * unit, unit, unit);
    draw.fillRect(11 * unit, 6 * unit, unit, unit);
    draw.fillRect(12 * unit, 7 * unit, unit, unit);
    draw.fillRect(13 * unit, 7 * unit, unit, unit);
    draw.fillRect(14 * unit, 7 * unit, unit, unit);
    draw.fillRect(15 * unit, 7 * unit, unit, unit);
    draw.fillRect(16 * unit, 6 * unit, unit, unit);
    draw.fillRect(17 * unit, 6 * unit, unit, unit);
    draw.fillRect(18 * unit, 5 * unit, unit, unit);
    draw.fillRect(19 * unit, 5 * unit, unit, unit);
    draw.fillRect(20 * unit, 4 * unit, unit, unit);
    draw.fillRect(21 * unit, 3 * unit, unit, unit);
    draw.fillRect(24 * unit, 1 * unit, unit, unit);
    draw.fillRect(22 * unit, 3 * unit, unit, unit);
    draw.fillRect(23 * unit, 2 * unit, unit, unit);
    draw.fillRect(25 * unit, 1 * unit, unit, unit);
    draw.fillRect(26 * unit, 0 * unit, unit, unit);
    draw.fillRect(27 * unit, 0 * unit, unit, unit);
    draw.fillRect(25 * unit, 3 * unit, unit, unit);
    draw.fillRect(25 * unit, 4 * unit, unit, unit);
    draw.fillRect(25 * unit, 5 * unit, unit, unit);
    draw.fillRect(25 * unit, 6 * unit, unit, unit);
    draw.fillRect(25 * unit, 7 * unit, unit, unit);
    draw.fillRect(25 * unit, 2 * unit, unit, unit);
    draw.fillRect(25 * unit, 8 * unit, unit, unit);
    draw.fillRect(26 * unit, 1 * unit, unit, unit);
    draw.fillRect(26 * unit, 2 * unit, unit, unit);
    draw.fillRect(26 * unit, 3 * unit, unit, unit);
    draw.fillRect(26 * unit, 4 * unit, unit, unit);
    draw.fillRect(26 * unit, 5 * unit, unit, unit);
    draw.fillRect(26 * unit, 6 * unit, unit, unit);
    draw.fillRect(27 * unit, 1 * unit, unit, unit);
    draw.fillRect(27 * unit, 2 * unit, unit, unit);
    draw.fillRect(27 * unit, 3 * unit, unit, unit);
    draw.fillRect(27 * unit, 4 * unit, unit, unit);
    draw.fillRect(24 * unit, 9 * unit, unit, unit);
    draw.fillRect(23 * unit, 10 * unit, unit, unit);
    draw.fillRect(22 * unit, 12 * unit, unit, unit);
    draw.fillRect(23 * unit, 13 * unit, unit, unit);
    draw.fillRect(23 * unit, 14 * unit, unit, unit);
    draw.fillRect(23 * unit, 15 * unit, unit, unit);
    draw.fillRect(23 * unit, 16 * unit, unit, unit);
    draw.fillRect(22 * unit, 11 * unit, unit, unit);
    draw.fillRect(21 * unit, 10 * unit, unit, unit);
    draw.fillRect(6 * unit, 10 * unit, unit, unit);
    draw.fillRect(4 * unit, 13 * unit, unit, unit);
    draw.fillRect(4 * unit, 14 * unit, unit, unit);
    draw.fillRect(4 * unit, 15 * unit, unit, unit);
    draw.fillRect(4 * unit, 16 * unit, unit, unit);
    draw.fillRect(3 * unit, 17 * unit, unit, unit);
    draw.fillRect(3 * unit, 18 * unit, unit, unit);
    draw.fillRect(3 * unit, 19 * unit, unit, unit);
    draw.fillRect(4 * unit, 20 * unit, unit, unit);
    draw.fillRect(24 * unit, 17 * unit, unit, unit);
    draw.fillRect(24 * unit, 18 * unit, unit, unit);
    draw.fillRect(24 * unit, 19 * unit, unit, unit);
    draw.fillRect(23 * unit, 20 * unit, unit, unit);
    draw.fillRect(22 * unit, 21 * unit, unit, unit);
    draw.fillRect(20 * unit, 22 * unit, unit, unit);
    draw.fillRect(21 * unit, 22 * unit, unit, unit);
    draw.fillRect(17 * unit, 23 * unit, unit, unit);
    draw.fillRect(18 * unit, 23 * unit, unit, unit);
    draw.fillRect(19 * unit, 23 * unit, unit, unit);
    draw.fillRect(11 * unit, 24 * unit, unit, unit);
    draw.fillRect(12 * unit, 24 * unit, unit, unit);
    draw.fillRect(13 * unit, 24 * unit, unit, unit);
    draw.fillRect(14 * unit, 24 * unit, unit, unit);
    draw.fillRect(15 * unit, 24 * unit, unit, unit);
    draw.fillRect(16 * unit, 24 * unit, unit, unit);
    draw.fillRect(8 * unit, 23 * unit, unit, unit);
    draw.fillRect(9 * unit, 23 * unit, unit, unit);
    draw.fillRect(10 * unit, 23 * unit, unit, unit);
    draw.fillRect(6 * unit, 22 * unit, unit, unit);
    draw.fillRect(7 * unit, 22 * unit, unit, unit);
    draw.fillRect(5 * unit, 21 * unit, unit, unit);
    draw.fillRect(7 * unit, 14 * unit, unit, unit);
    draw.fillRect(7 * unit, 15 * unit, unit, unit);
    draw.fillRect(8 * unit, 13 * unit, unit, unit);
    //draw.fillRect(8*unit,14*unit,unit,unit);
    draw.fillRect(8 * unit, 15 * unit, unit, unit);
    draw.fillRect(8 * unit, 16 * unit, unit, unit);
    draw.fillRect(9 * unit, 16 * unit, unit, unit);
    draw.fillRect(9 * unit, 13 * unit, unit, unit);
    draw.fillRect(9 * unit, 14 * unit, unit, unit);
    draw.fillRect(9 * unit, 15 * unit, unit, unit);
    draw.fillRect(10 * unit, 14 * unit, unit, unit);
    draw.fillRect(10 * unit, 15 * unit, unit, unit);
    draw.fillRect(18 * unit, 13 * unit, unit, unit);
    draw.fillRect(17 * unit, 14 * unit, unit, unit);
    draw.fillRect(17 * unit, 15 * unit, unit, unit);
    draw.fillRect(18 * unit, 15 * unit, unit, unit);
    draw.fillRect(18 * unit, 16 * unit, unit, unit);
    draw.fillRect(19 * unit, 13 * unit, unit, unit);
    draw.fillRect(19 * unit, 14 * unit, unit, unit);
    draw.fillRect(19 * unit, 15 * unit, unit, unit);
    draw.fillRect(19 * unit, 16 * unit, unit, unit);
    draw.fillRect(20 * unit, 14 * unit, unit, unit);
    draw.fillRect(20 * unit, 15 * unit, unit, unit);
    draw.fillRect(13 * unit, 16 * unit, unit, unit);
    draw.fillRect(14 * unit, 16 * unit, unit, unit);
    draw.fillRect(13 * unit, 18 * unit, unit, unit);
    draw.fillRect(14 * unit, 18 * unit, unit, unit);
    draw.fillRect(11 * unit, 18 * unit, unit, unit);
    draw.fillRect(16 * unit, 18 * unit, unit, unit);
    draw.fillRect(12 * unit, 19 * unit, unit, unit);
    draw.fillRect(13 * unit, 19 * unit, unit, unit);
    draw.fillRect(14 * unit, 19 * unit, unit, unit);
    draw.fillRect(15 * unit, 19 * unit, unit, unit);
    draw.fillRect(12 * unit, 20 * unit, unit, unit);
    draw.fillRect(12 * unit, 21 * unit, unit, unit);
    draw.fillRect(13 * unit, 22 * unit, unit, unit);
    draw.fillRect(14 * unit, 22 * unit, unit, unit);
    draw.fillRect(15 * unit, 21 * unit, unit, unit);
    draw.fillRect(15 * unit, 20 * unit, unit, unit);


    draw.fillStyle = 'rgb(255,194,5)'
    draw.fillRect(13 * unit, 21 * unit, unit, unit);
    draw.fillRect(14 * unit, 21 * unit, unit, unit);
    draw.fillRect(16 * unit, 21 * unit, unit, unit);
    draw.fillRect(17 * unit, 21 * unit, unit, unit);
    draw.fillRect(12 * unit, 22 * unit, unit, unit);
    draw.fillRect(15 * unit, 22 * unit, unit, unit);
    draw.fillRect(12 * unit, 23 * unit, unit, unit);
    draw.fillRect(12 * unit, 22 * unit, unit, unit);
    draw.fillRect(22 * unit, 13 * unit, unit, unit);
    draw.fillRect(3 * unit, 2 * unit, unit, unit);
    draw.fillRect(3 * unit, 3 * unit, unit, unit);
    draw.fillRect(3 * unit, 4 * unit, unit, unit);
    draw.fillRect(3 * unit, 5 * unit, unit, unit);
    draw.fillRect(3 * unit, 6 * unit, unit, unit);
    draw.fillRect(3 * unit, 7 * unit, unit, unit);
    draw.fillRect(3 * unit, 8 * unit, unit, unit);
    draw.fillRect(4 * unit, 3 * unit, unit, unit);
    draw.fillRect(4 * unit, 4 * unit, unit, unit);
    draw.fillRect(4 * unit, 5 * unit, unit, unit);
    draw.fillRect(4 * unit, 6 * unit, unit, unit);
    draw.fillRect(4 * unit, 7 * unit, unit, unit);
    draw.fillRect(4 * unit, 8 * unit, unit, unit);
    draw.fillRect(4 * unit, 9 * unit, unit, unit);
    draw.fillRect(5 * unit, 4 * unit, unit, unit);
    draw.fillRect(5 * unit, 5 * unit, unit, unit);
    draw.fillRect(5 * unit, 6 * unit, unit, unit);
    draw.fillRect(5 * unit, 7 * unit, unit, unit);
    draw.fillRect(5 * unit, 8 * unit, unit, unit);
    draw.fillRect(5 * unit, 9 * unit, unit, unit);
    draw.fillRect(5 * unit, 10 * unit, unit, unit);
    draw.fillRect(6 * unit, 4 * unit, unit, unit);
    draw.fillRect(6 * unit, 5 * unit, unit, unit);
    draw.fillRect(6 * unit, 5 * unit, unit, unit);
    draw.fillRect(6 * unit, 6 * unit, unit, unit);
    draw.fillRect(6 * unit, 7 * unit, unit, unit);
    draw.fillRect(6 * unit, 8 * unit, unit, unit);
    draw.fillRect(6 * unit, 9 * unit, unit, unit);
    draw.fillRect(6 * unit, 11 * unit, unit, unit);
    draw.fillRect(6 * unit, 12 * unit, unit, unit);
    draw.fillRect(7 * unit, 5 * unit, unit, unit);
    draw.fillRect(7 * unit, 6 * unit, unit, unit);
    draw.fillRect(7 * unit, 7 * unit, unit, unit);
    draw.fillRect(7 * unit, 8 * unit, unit, unit);
    draw.fillRect(7 * unit, 9 * unit, unit, unit);
    draw.fillRect(7 * unit, 10 * unit, unit, unit);
    draw.fillRect(7 * unit, 11 * unit, unit, unit);
    draw.fillRect(7 * unit, 12 * unit, unit, unit);
    draw.fillRect(8 * unit, 6 * unit, unit, unit);
    draw.fillRect(8 * unit, 7 * unit, unit, unit);
    draw.fillRect(8 * unit, 8 * unit, unit, unit);
    draw.fillRect(8 * unit, 9 * unit, unit, unit);
    draw.fillRect(8 * unit, 10 * unit, unit, unit);
    draw.fillRect(8 * unit, 11 * unit, unit, unit);
    draw.fillRect(8 * unit, 12 * unit, unit, unit);
    draw.fillRect(9 * unit, 6 * unit, unit, unit);
    draw.fillRect(9 * unit, 7 * unit, unit, unit);
    draw.fillRect(9 * unit, 8 * unit, unit, unit);
    draw.fillRect(9 * unit, 9 * unit, unit, unit);
    draw.fillRect(9 * unit, 10 * unit, unit, unit);
    draw.fillRect(9 * unit, 11 * unit, unit, unit);
    draw.fillRect(9 * unit, 12 * unit, unit, unit);
    draw.fillRect(10 * unit, 7 * unit, unit, unit);
    draw.fillRect(10 * unit, 8 * unit, unit, unit);
    draw.fillRect(10 * unit, 9 * unit, unit, unit);
    draw.fillRect(10 * unit, 10 * unit, unit, unit);
    draw.fillRect(10 * unit, 11 * unit, unit, unit);
    draw.fillRect(10 * unit, 12 * unit, unit, unit);
    draw.fillRect(11 * unit, 7 * unit, unit, unit);
    draw.fillRect(11 * unit, 8 * unit, unit, unit);
    draw.fillRect(11 * unit, 9 * unit, unit, unit);
    draw.fillRect(11 * unit, 10 * unit, unit, unit);
    draw.fillRect(11 * unit, 11 * unit, unit, unit);
    draw.fillRect(11 * unit, 12 * unit, unit, unit);
    draw.fillRect(12 * unit, 8 * unit, unit, unit);
    draw.fillRect(12 * unit, 9 * unit, unit, unit);
    draw.fillRect(12 * unit, 10 * unit, unit, unit);
    draw.fillRect(12 * unit, 11 * unit, unit, unit);
    draw.fillRect(12 * unit, 12 * unit, unit, unit);
    draw.fillRect(13 * unit, 8 * unit, unit, unit);
    draw.fillRect(13 * unit, 9 * unit, unit, unit);
    draw.fillRect(13 * unit, 10 * unit, unit, unit);
    draw.fillRect(13 * unit, 11 * unit, unit, unit);
    draw.fillRect(13 * unit, 12 * unit, unit, unit);
    draw.fillRect(14 * unit, 8 * unit, unit, unit);
    draw.fillRect(14 * unit, 9 * unit, unit, unit);
    draw.fillRect(14 * unit, 10 * unit, unit, unit);
    draw.fillRect(14 * unit, 11 * unit, unit, unit);
    draw.fillRect(14 * unit, 12 * unit, unit, unit);
    draw.fillRect(15 * unit, 8 * unit, unit, unit);
    draw.fillRect(15 * unit, 9 * unit, unit, unit);
    draw.fillRect(15 * unit, 10 * unit, unit, unit);
    draw.fillRect(15 * unit, 11 * unit, unit, unit);
    draw.fillRect(15 * unit, 12 * unit, unit, unit);
    draw.fillRect(16 * unit, 7 * unit, unit, unit);
    draw.fillRect(16 * unit, 8 * unit, unit, unit);
    draw.fillRect(16 * unit, 9 * unit, unit, unit);
    draw.fillRect(16 * unit, 10 * unit, unit, unit);
    draw.fillRect(16 * unit, 11 * unit, unit, unit);
    draw.fillRect(16 * unit, 12 * unit, unit, unit);
    draw.fillRect(17 * unit, 7 * unit, unit, unit);
    draw.fillRect(17 * unit, 8 * unit, unit, unit);
    draw.fillRect(17 * unit, 9 * unit, unit, unit);
    draw.fillRect(17 * unit, 10 * unit, unit, unit);
    draw.fillRect(17 * unit, 11 * unit, unit, unit);
    draw.fillRect(17 * unit, 12 * unit, unit, unit);
    draw.fillRect(18 * unit, 6 * unit, unit, unit);
    draw.fillRect(18 * unit, 7 * unit, unit, unit);
    draw.fillRect(18 * unit, 8 * unit, unit, unit);
    draw.fillRect(18 * unit, 9 * unit, unit, unit);
    draw.fillRect(18 * unit, 10 * unit, unit, unit);
    draw.fillRect(18 * unit, 11 * unit, unit, unit);
    draw.fillRect(18 * unit, 12 * unit, unit, unit);
    draw.fillRect(19 * unit, 6 * unit, unit, unit);
    draw.fillRect(19 * unit, 7 * unit, unit, unit);
    draw.fillRect(19 * unit, 8 * unit, unit, unit);
    draw.fillRect(19 * unit, 9 * unit, unit, unit);
    draw.fillRect(19 * unit, 10 * unit, unit, unit);
    draw.fillRect(19 * unit, 11 * unit, unit, unit);
    draw.fillRect(19 * unit, 12 * unit, unit, unit);
    draw.fillRect(20 * unit, 5 * unit, unit, unit);
    draw.fillRect(20 * unit, 6 * unit, unit, unit);
    draw.fillRect(20 * unit, 7 * unit, unit, unit);
    draw.fillRect(20 * unit, 8 * unit, unit, unit);
    draw.fillRect(20 * unit, 9 * unit, unit, unit);
    draw.fillRect(20 * unit, 10 * unit, unit, unit);
    draw.fillRect(20 * unit, 11 * unit, unit, unit);
    draw.fillRect(20 * unit, 12 * unit, unit, unit);
    draw.fillRect(21 * unit, 4 * unit, unit, unit);
    draw.fillRect(21 * unit, 5 * unit, unit, unit);
    draw.fillRect(21 * unit, 6 * unit, unit, unit);
    draw.fillRect(21 * unit, 7 * unit, unit, unit);
    draw.fillRect(21 * unit, 8 * unit, unit, unit);
    draw.fillRect(21 * unit, 9 * unit, unit, unit);
    draw.fillRect(21 * unit, 11 * unit, unit, unit);
    draw.fillRect(21 * unit, 12 * unit, unit, unit);
    //draw.fillRect(22*unit,2*unit,unit,unit);
    draw.fillRect(22 * unit, 4 * unit, unit, unit);
    draw.fillRect(22 * unit, 5 * unit, unit, unit);
    draw.fillRect(22 * unit, 6 * unit, unit, unit);
    draw.fillRect(22 * unit, 7 * unit, unit, unit);
    draw.fillRect(22 * unit, 8 * unit, unit, unit);
    draw.fillRect(22 * unit, 9 * unit, unit, unit);
    draw.fillRect(22 * unit, 10 * unit, unit, unit);
    draw.fillRect(23 * unit, 3 * unit, unit, unit);
    draw.fillRect(23 * unit, 4 * unit, unit, unit);
    draw.fillRect(23 * unit, 5 * unit, unit, unit);
    draw.fillRect(23 * unit, 6 * unit, unit, unit);
    draw.fillRect(23 * unit, 7 * unit, unit, unit);
    draw.fillRect(23 * unit, 8 * unit, unit, unit);
    draw.fillRect(23 * unit, 9 * unit, unit, unit);
    draw.fillRect(24 * unit, 2 * unit, unit, unit);
    draw.fillRect(24 * unit, 3 * unit, unit, unit);
    draw.fillRect(24 * unit, 4 * unit, unit, unit);
    draw.fillRect(24 * unit, 5 * unit, unit, unit);
    draw.fillRect(24 * unit, 6 * unit, unit, unit);
    draw.fillRect(24 * unit, 7 * unit, unit, unit);
    draw.fillRect(24 * unit, 8 * unit, unit, unit);
    draw.fillRect(5 * unit, 13 * unit, unit, unit);
    draw.fillRect(5 * unit, 14 * unit, unit, unit);
    draw.fillRect(5 * unit, 15 * unit, unit, unit);
    draw.fillRect(5 * unit, 16 * unit, unit, unit);
    draw.fillRect(6 * unit, 13 * unit, unit, unit);
    draw.fillRect(6 * unit, 14 * unit, unit, unit);
    draw.fillRect(6 * unit, 15 * unit, unit, unit);
    draw.fillRect(6 * unit, 16 * unit, unit, unit);
    draw.fillRect(7 * unit, 13 * unit, unit, unit);
    draw.fillRect(7 * unit, 16 * unit, unit, unit);
    draw.fillRect(10 * unit, 13 * unit, unit, unit);

    draw.fillRect(10 * unit, 16 * unit, unit, unit);
    draw.fillRect(11 * unit, 13 * unit, unit, unit);
    draw.fillRect(11 * unit, 14 * unit, unit, unit);
    draw.fillRect(11 * unit, 15 * unit, unit, unit);
    draw.fillRect(11 * unit, 16 * unit, unit, unit);
    draw.fillRect(12 * unit, 13 * unit, unit, unit);
    draw.fillRect(12 * unit, 14 * unit, unit, unit);
    draw.fillRect(12 * unit, 15 * unit, unit, unit);
    draw.fillRect(12 * unit, 16 * unit, unit, unit);
    draw.fillRect(13 * unit, 13 * unit, unit, unit);
    draw.fillRect(13 * unit, 14 * unit, unit, unit);
    draw.fillRect(13 * unit, 15 * unit, unit, unit);
    draw.fillRect(14 * unit, 13 * unit, unit, unit);
    draw.fillRect(14 * unit, 14 * unit, unit, unit);
    draw.fillRect(14 * unit, 15 * unit, unit, unit);
    draw.fillRect(15 * unit, 13 * unit, unit, unit);
    draw.fillRect(15 * unit, 14 * unit, unit, unit);
    draw.fillRect(15 * unit, 15 * unit, unit, unit);
    draw.fillRect(15 * unit, 16 * unit, unit, unit);
    draw.fillRect(16 * unit, 13 * unit, unit, unit);
    draw.fillRect(16 * unit, 14 * unit, unit, unit);
    draw.fillRect(16 * unit, 15 * unit, unit, unit);
    draw.fillRect(16 * unit, 16 * unit, unit, unit);
    draw.fillRect(17 * unit, 13 * unit, unit, unit);
    draw.fillRect(20 * unit, 13 * unit, unit, unit);
    draw.fillRect(17 * unit, 16 * unit, unit, unit);
    draw.fillRect(20 * unit, 16 * unit, unit, unit);
    draw.fillRect(21 * unit, 13 * unit, unit, unit);
    draw.fillRect(21 * unit, 14 * unit, unit, unit);
    draw.fillRect(21 * unit, 15 * unit, unit, unit);
    draw.fillRect(21 * unit, 16 * unit, unit, unit);
    draw.fillRect(22 * unit, 14 * unit, unit, unit);
    draw.fillRect(22 * unit, 15 * unit, unit, unit);
    draw.fillRect(22 * unit, 16 * unit, unit, unit);
    draw.fillRect(4 * unit, 17 * unit, unit, unit);
    draw.fillRect(4 * unit, 18 * unit, unit, unit);
    draw.fillRect(4 * unit, 19 * unit, unit, unit);
    draw.fillRect(5 * unit, 17 * unit, unit, unit);
    draw.fillRect(5 * unit, 18 * unit, unit, unit);
    draw.fillRect(5 * unit, 19 * unit, unit, unit);
    draw.fillRect(6 * unit, 17 * unit, unit, unit);
    draw.fillRect(6 * unit, 18 * unit, unit, unit);
    draw.fillRect(6 * unit, 19 * unit, unit, unit);
    draw.fillRect(7 * unit, 17 * unit, unit, unit);
    draw.fillRect(7 * unit, 18 * unit, unit, unit);
    draw.fillRect(7 * unit, 19 * unit, unit, unit);
    draw.fillRect(8 * unit, 17 * unit, unit, unit);
    draw.fillRect(8 * unit, 18 * unit, unit, unit);
    draw.fillRect(8 * unit, 19 * unit, unit, unit);
    draw.fillRect(9 * unit, 17 * unit, unit, unit);
    draw.fillRect(9 * unit, 18 * unit, unit, unit);
    draw.fillRect(9 * unit, 19 * unit, unit, unit);
    draw.fillRect(10 * unit, 17 * unit, unit, unit);
    draw.fillRect(10 * unit, 18 * unit, unit, unit);
    draw.fillRect(10 * unit, 19 * unit, unit, unit);
    draw.fillRect(11 * unit, 17 * unit, unit, unit);
    draw.fillRect(11 * unit, 19 * unit, unit, unit);
    draw.fillRect(12 * unit, 17 * unit, unit, unit);
    draw.fillRect(12 * unit, 18 * unit, unit, unit);

    draw.fillRect(13 * unit, 17 * unit, unit, unit);

    draw.fillRect(14 * unit, 17 * unit, unit, unit);
    draw.fillRect(15 * unit, 17 * unit, unit, unit);
    draw.fillRect(15 * unit, 18 * unit, unit, unit);

    draw.fillRect(16 * unit, 17 * unit, unit, unit);

    draw.fillRect(16 * unit, 19 * unit, unit, unit);
    draw.fillRect(17 * unit, 17 * unit, unit, unit);
    draw.fillRect(17 * unit, 18 * unit, unit, unit);
    draw.fillRect(17 * unit, 19 * unit, unit, unit);
    draw.fillRect(18 * unit, 17 * unit, unit, unit);
    draw.fillRect(18 * unit, 18 * unit, unit, unit);
    draw.fillRect(18 * unit, 19 * unit, unit, unit);
    draw.fillRect(19 * unit, 17 * unit, unit, unit);
    draw.fillRect(19 * unit, 18 * unit, unit, unit);
    draw.fillRect(19 * unit, 19 * unit, unit, unit);
    draw.fillRect(20 * unit, 17 * unit, unit, unit);
    draw.fillRect(20 * unit, 18 * unit, unit, unit);
    draw.fillRect(20 * unit, 19 * unit, unit, unit);
    draw.fillRect(21 * unit, 17 * unit, unit, unit);
    draw.fillRect(21 * unit, 18 * unit, unit, unit);
    draw.fillRect(21 * unit, 19 * unit, unit, unit);
    draw.fillRect(22 * unit, 17 * unit, unit, unit);
    draw.fillRect(22 * unit, 18 * unit, unit, unit);
    draw.fillRect(22 * unit, 19 * unit, unit, unit);
    draw.fillRect(23 * unit, 17 * unit, unit, unit);
    draw.fillRect(23 * unit, 18 * unit, unit, unit);
    draw.fillRect(23 * unit, 19 * unit, unit, unit);
    draw.fillRect(5 * unit, 20 * unit, unit, unit);
    draw.fillRect(6 * unit, 20 * unit, unit, unit);
    draw.fillRect(7 * unit, 20 * unit, unit, unit);
    draw.fillRect(8 * unit, 20 * unit, unit, unit);
    draw.fillRect(9 * unit, 20 * unit, unit, unit);
    draw.fillRect(10 * unit, 20 * unit, unit, unit);
    draw.fillRect(11 * unit, 20 * unit, unit, unit);
    draw.fillRect(13 * unit, 20 * unit, unit, unit);
    draw.fillRect(14 * unit, 20 * unit, unit, unit);
    draw.fillRect(16 * unit, 20 * unit, unit, unit);
    draw.fillRect(17 * unit, 20 * unit, unit, unit);
    draw.fillRect(18 * unit, 20 * unit, unit, unit);
    draw.fillRect(19 * unit, 20 * unit, unit, unit);
    draw.fillRect(20 * unit, 20 * unit, unit, unit);
    draw.fillRect(21 * unit, 20 * unit, unit, unit);
    draw.fillRect(22 * unit, 20 * unit, unit, unit);
    draw.fillRect(6 * unit, 21 * unit, unit, unit);
    draw.fillRect(7 * unit, 21 * unit, unit, unit);
    draw.fillRect(8 * unit, 21 * unit, unit, unit);
    draw.fillRect(9 * unit, 21 * unit, unit, unit);
    draw.fillRect(10 * unit, 21 * unit, unit, unit);
    draw.fillRect(11 * unit, 21 * unit, unit, unit);
    draw.fillRect(18 * unit, 21 * unit, unit, unit);
    draw.fillRect(19 * unit, 21 * unit, unit, unit);
    draw.fillRect(20 * unit, 21 * unit, unit, unit);
    draw.fillRect(21 * unit, 21 * unit, unit, unit);
    //draw.fillRect(22*unit,21*unit,unit,unit);
    draw.fillRect(8 * unit, 22 * unit, unit, unit);
    draw.fillRect(9 * unit, 22 * unit, unit, unit);
    draw.fillRect(10 * unit, 22 * unit, unit, unit);
    draw.fillRect(11 * unit, 22 * unit, unit, unit);



    draw.fillRect(16 * unit, 22 * unit, unit, unit);
    draw.fillRect(17 * unit, 22 * unit, unit, unit);
    draw.fillRect(18 * unit, 22 * unit, unit, unit);
    draw.fillRect(19 * unit, 22 * unit, unit, unit);
    //draw.fillRect(20*unit,22*unit,unit,unit);
    //draw.fillRect(21*unit,22*unit,unit,unit);
    draw.fillRect(11 * unit, 23 * unit, unit, unit);
    draw.fillRect(13 * unit, 23 * unit, unit, unit);
    draw.fillRect(14 * unit, 23 * unit, unit, unit);
    draw.fillRect(15 * unit, 23 * unit, unit, unit);
    draw.fillRect(16 * unit, 23 * unit, unit, unit);


    draw.restore();
}


    

function drawBackground() {
    draw.fillStyle = "skyblue";
    draw.fillRect(0,0,100*unit,100*unit);
    drawGroundBlocks();
}
    
