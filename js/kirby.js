function animateKirby (x, direction, type) {
    drawBackground();
    var xPosition = 22*unit;
    var scale = 0.6;

    const weight = 50;
    const gravity = 1.67 // 9.8Earth 3.7(Mars/Mercury) 1.67(Moon)
    const peak = gravity*weight // F=m*g
    const velocity =0.5 * time * time * gravity;
    if (isJumping) {
        time++;
        if (isGoingUp) {
            characterY -= velocity;
            if (characterY < peak) {
                isGoingUp = false;
                time = 0
            }
        } else {
            characterY += velocity;
            if (characterY > 14*unit) {
                characterY = 14*unit;
                isJumping = false;
                isGoingUp = true;
                time = 0;
            }
        }
    }


    draw.save();
    draw.translate(xPosition+x*unit,characterY); 
    draw.scale(scale,scale);
    if (direction == -1) {
        draw.scale(direction,1);
        draw.translate(-16*unit,0);
    }
    if (type == 0) {
        drawKirby();
        if (isJumping) {
            setTimeout("animateKirby(characterX,direction,0)", 30)
        }
    } else if (type ==1) {
        drawKirbyWalk1();
        setTimeout("animateKirby(characterX,direction,2)",200)
    } else if (type == 2) {
        drawKirbyWalk2();
        setTimeout("animateKirby(characterX,direction,3)",200)
    } else if (type ==3) {
        drawKirbyWalk3();
        setTimeout("animateKirby(characterX,direction,0)",200)
    } 
    
    draw.restore();
}
function drawKirby() {
    // var xPosition = 22*unit;
    // var yPosition = 14*unit;
    // var scale = 0.6;
    // draw.save();
    // draw.translate(xPosition+x*unit,yPosition); 
    // draw.scale(scale,scale);
    // if (direction == -1) {
    //     draw.scale(direction,1);
    //     draw.translate(-16*unit,0);
    // }
    

    draw.fillStyle='black';
    draw.fillRect(6*unit,0*unit,unit,unit);
    draw.fillRect(7*unit,0*unit,unit,unit);
    draw.fillRect(8*unit,0*unit,unit,unit);
    draw.fillRect(9*unit,0*unit,unit,unit);
    draw.fillRect(10*unit,0*unit,unit,unit);
    draw.fillRect(4*unit,1*unit,unit,unit);
    draw.fillRect(5*unit,1*unit,unit,unit);
    draw.fillRect(11*unit,1*unit,unit,unit);
    draw.fillRect(12*unit,1*unit,unit,unit);
    draw.fillRect(3*unit,2*unit,unit,unit);
    draw.fillRect(13*unit,2*unit,unit,unit);
    draw.fillRect(2*unit,3*unit,unit,unit);
    draw.fillRect(12*unit,3*unit,unit,unit);  
    draw.fillRect(13*unit,3*unit,unit,unit);
    draw.fillRect(2*unit,4*unit,unit,unit);
    draw.fillRect(14*unit,4*unit,unit,unit);
    draw.fillRect(1*unit,5*unit,unit,unit);
    draw.fillRect(14*unit,5*unit,unit,unit);
    draw.fillRect(0*unit,6*unit,unit,unit);
    draw.fillRect(15*unit,6*unit,unit,unit);
    draw.fillRect(0*unit,7*unit,unit,unit);
    draw.fillRect(15*unit,7*unit,unit,unit);
    draw.fillRect(0*unit,8*unit,unit,unit);
    draw.fillRect(15*unit,8*unit,unit,unit);
    draw.fillRect(0*unit,9*unit,unit,unit);
    draw.fillRect(15*unit,9*unit,unit,unit);
    draw.fillRect(1*unit,10*unit,unit,unit); 
    draw.fillRect(15*unit,10*unit,unit,unit);
    draw.fillRect(3*unit,11*unit,unit,unit); 
    draw.fillRect(2*unit,11*unit,unit,unit);
    draw.fillRect(13*unit,11*unit,unit,unit);
    draw.fillRect(14*unit,11*unit,unit,unit);
    draw.fillRect(3*unit,12*unit,unit,unit);
    draw.fillRect(4*unit,12*unit,unit,unit);
    draw.fillRect(12*unit,12*unit,unit,unit);  
    draw.fillRect(13*unit,12*unit,unit,unit);
    draw.fillRect(2*unit,13*unit,unit,unit);
    draw.fillRect(5*unit,13*unit,unit,unit);
    draw.fillRect(6*unit,13*unit,unit,unit);
    draw.fillRect(7*unit,13*unit,unit,unit);
    draw.fillRect(8*unit,13*unit,unit,unit);
    draw.fillRect(9*unit,13*unit,unit,unit);
    draw.fillRect(10*unit,13*unit,unit,unit);
    draw.fillRect(11*unit,13*unit,unit,unit);
    draw.fillRect(12*unit,13*unit,unit,unit);
    draw.fillRect(4*unit,13*unit,unit,unit);
    draw.fillRect(5*unit,1*unit,unit,unit);
    draw.fillRect(11*unit,13*unit,unit,unit);
    draw.fillRect(14*unit,13*unit,unit,unit);  
    draw.fillRect(1*unit,14*unit,unit,unit);  
    draw.fillRect(7*unit,14*unit,unit,unit);
    draw.fillRect(8*unit,14*unit,unit,unit);
    draw.fillRect(9*unit,14*unit,unit,unit);
    draw.fillRect(10*unit,14*unit,unit,unit);
    draw.fillRect(15*unit,14*unit,unit,unit);
    draw.fillRect(2*unit,15*unit,unit,unit);
    draw.fillRect(3*unit,15*unit,unit,unit);
    draw.fillRect(4*unit,15*unit,unit,unit);
    draw.fillRect(5*unit,15*unit,unit,unit);
    draw.fillRect(2*unit,15*unit,unit,unit);
    draw.fillRect(6*unit,15*unit,unit,unit);
    draw.fillRect(10*unit,15*unit,unit,unit);
    draw.fillRect(11*unit,15*unit,unit,unit);
    draw.fillRect(12*unit,15*unit,unit,unit);
    draw.fillRect(13*unit,15*unit,unit,unit);
    draw.fillRect(14*unit,15*unit,unit,unit);
    draw.fillRect(9*unit,5*unit,unit,unit);
    draw.fillRect(11*unit,5*unit,unit,unit);
    draw.fillRect(9*unit,6*unit,unit,unit);
    draw.fillRect(11*unit,6*unit,unit,unit);
    draw.fillRect(9*unit,7*unit,unit,unit);
    draw.fillRect(11*unit,7*unit,unit,unit);
    draw.fillRect(4*unit,10*unit,unit,unit);
    draw.fillRect(10*unit,10*unit,unit,unit);
    draw.fillRect(13*unit,10*unit,unit,unit);
    draw.fillRect(5*unit,10*unit,unit,unit);




    draw.fillStyle='rgb(252,194,228)';
    draw.fillRect(7*unit,1*unit,unit,unit);
    draw.fillRect(8*unit,1*unit,unit,unit);
    draw.fillRect(9*unit,1*unit,unit,unit);
    draw.fillRect(5*unit,2*unit,unit,unit);
    draw.fillRect(6*unit,2*unit,unit,unit);
    draw.fillRect(7*unit,2*unit,unit,unit);
    draw.fillRect(8*unit,2*unit,unit,unit);
    draw.fillRect(9*unit,2*unit,unit,unit);
    draw.fillRect(10*unit,2*unit,unit,unit);
    draw.fillRect(11*unit,2*unit,unit,unit);
    draw.fillRect(12*unit,2*unit,unit,unit);
    draw.fillRect(4*unit,2*unit,unit,unit);
    draw.fillRect(5*unit,2*unit,unit,unit);
    draw.fillRect(11*unit,2*unit,unit,unit);
    draw.fillRect(4*unit,3*unit,unit,unit);
    draw.fillRect(5*unit,3*unit,unit,unit);
    draw.fillRect(6*unit,3*unit,unit,unit);
    draw.fillRect(7*unit,3*unit,unit,unit);
    draw.fillRect(8*unit,3*unit,unit,unit);
    draw.fillRect(9*unit,3*unit,unit,unit);
    draw.fillRect(10*unit,3*unit,unit,unit);
    draw.fillRect(11*unit,3*unit,unit,unit);
    draw.fillRect(12*unit,3*unit,unit,unit);
    draw.fillRect(4*unit,3*unit,unit,unit);
    draw.fillRect(5*unit,3*unit,unit,unit);
    draw.fillRect(11*unit,3*unit,unit,unit);
    draw.fillRect(3*unit,4*unit,unit,unit);  
    draw.fillRect(4*unit,4*unit,unit,unit);
    draw.fillRect(5*unit,4*unit,unit,unit);
    draw.fillRect(6*unit,4*unit,unit,unit);
    draw.fillRect(7*unit,4*unit,unit,unit);
    draw.fillRect(8*unit,4*unit,unit,unit);
    draw.fillRect(9*unit,4*unit,unit,unit);
    draw.fillRect(10*unit,4*unit,unit,unit);
    draw.fillRect(11*unit,4*unit,unit,unit);
    draw.fillRect(12*unit,4*unit,unit,unit);
    draw.fillRect(4*unit,4*unit,unit,unit);
    draw.fillRect(5*unit,4*unit,unit,unit);
    draw.fillRect(11*unit,4*unit,unit,unit);
    draw.fillRect(12*unit,4*unit,unit,unit);  
    draw.fillRect(3*unit,5*unit,unit,unit);  
    draw.fillRect(4*unit,5*unit,unit,unit);
    draw.fillRect(5*unit,5*unit,unit,unit);
    draw.fillRect(6*unit,5*unit,unit,unit);
    draw.fillRect(7*unit,5*unit,unit,unit);
    draw.fillRect(8*unit,5*unit,unit,unit);
    draw.fillRect(10*unit,5*unit,unit,unit);
    draw.fillRect(12*unit,5*unit,unit,unit);
    draw.fillRect(4*unit,5*unit,unit,unit);
    draw.fillRect(5*unit,5*unit,unit,unit);
    draw.fillRect(12*unit,5*unit,unit,unit);  
    draw.fillRect(2*unit,5*unit,unit,unit);
    draw.fillRect(2*unit,6*unit,unit,unit);
    draw.fillRect(3*unit,6*unit,unit,unit);  
    draw.fillRect(4*unit,6*unit,unit,unit);
    draw.fillRect(5*unit,6*unit,unit,unit);
    draw.fillRect(6*unit,6*unit,unit,unit);
    draw.fillRect(7*unit,6*unit,unit,unit);
    draw.fillRect(8*unit,6*unit,unit,unit);
    draw.fillRect(10*unit,6*unit,unit,unit);
    draw.fillRect(12*unit,6*unit,unit,unit);
    draw.fillRect(4*unit,6*unit,unit,unit);
    draw.fillRect(5*unit,6*unit,unit,unit);
    draw.fillRect(12*unit,6*unit,unit,unit);  
    draw.fillRect(13*unit,6*unit,unit,unit);
    draw.fillRect(14*unit,6*unit,unit,unit);
    draw.fillRect(1*unit,7*unit,unit,unit);
    draw.fillRect(2*unit,7*unit,unit,unit);
    draw.fillRect(3*unit,7*unit,unit,unit);  
    draw.fillRect(4*unit,7*unit,unit,unit);
    draw.fillRect(5*unit,7*unit,unit,unit);
    draw.fillRect(6*unit,7*unit,unit,unit);
    draw.fillRect(7*unit,7*unit,unit,unit);
    draw.fillRect(8*unit,7*unit,unit,unit);
    draw.fillRect(10*unit,7*unit,unit,unit);
    draw.fillRect(12*unit,7*unit,unit,unit);
    draw.fillRect(4*unit,7*unit,unit,unit);
    draw.fillRect(5*unit,7*unit,unit,unit);
    draw.fillRect(12*unit,7*unit,unit,unit);  
    draw.fillRect(13*unit,7*unit,unit,unit);
    draw.fillRect(14*unit,7*unit,unit,unit);
    draw.fillRect(1*unit,8*unit,unit,unit);
    draw.fillRect(2*unit,8*unit,unit,unit);
    draw.fillRect(3*unit,8*unit,unit,unit);  
    draw.fillRect(5*unit,8*unit,unit,unit);
    draw.fillRect(8*unit,8*unit,unit,unit);
    draw.fillRect(9*unit,8*unit,unit,unit);
    draw.fillRect(10*unit,8*unit,unit,unit);
    draw.fillRect(11*unit,8*unit,unit,unit);
    draw.fillRect(4*unit,8*unit,unit,unit);
    draw.fillRect(5*unit,8*unit,unit,unit); 
    draw.fillRect(14*unit,8*unit,unit,unit);
    draw.fillRect(2*unit,9*unit,unit,unit);
    draw.fillRect(3*unit,9*unit,unit,unit);  
    draw.fillRect(5*unit,9*unit,unit,unit);
    draw.fillRect(6*unit,9*unit,unit,unit);
    draw.fillRect(7*unit,9*unit,unit,unit);
    draw.fillRect(8*unit,9*unit,unit,unit);
    draw.fillRect(9*unit,9*unit,unit,unit);
    draw.fillRect(10*unit,9*unit,unit,unit);
    draw.fillRect(11*unit,9*unit,unit,unit);
    draw.fillRect(12*unit,9*unit,unit,unit);
    draw.fillRect(4*unit,9*unit,unit,unit);
    draw.fillRect(5*unit,9*unit,unit,unit);
    draw.fillRect(11*unit,9*unit,unit,unit);
    draw.fillRect(12*unit,9*unit,unit,unit);  
    draw.fillRect(14*unit,9*unit,unit,unit);
    draw.fillRect(3*unit,10*unit,unit,unit);  
    draw.fillRect(6*unit,10*unit,unit,unit);
    draw.fillRect(7*unit,10*unit,unit,unit);
    draw.fillRect(8*unit,10*unit,unit,unit);
    draw.fillRect(9*unit,10*unit,unit,unit);
    draw.fillRect(11*unit,10*unit,unit,unit);
    draw.fillRect(12*unit,10*unit,unit,unit); 
    draw.fillRect(7*unit,11*unit,unit,unit);
    draw.fillRect(8*unit,11*unit,unit,unit);
    draw.fillRect(9*unit,11*unit,unit,unit);
    draw.fillRect(10*unit,11*unit,unit,unit);
    draw.fillRect(11*unit,11*unit,unit,unit);
    draw.fillRect(12*unit,11*unit,unit,unit);
    draw.fillRect(4*unit,11*unit,unit,unit);
    draw.fillRect(5*unit,11*unit,unit,unit);
    draw.fillRect(11*unit,11*unit,unit,unit);
    draw.fillRect(9*unit,12*unit,unit,unit);
    draw.fillRect(10*unit,12*unit,unit,unit);
    draw.fillRect(11*unit,12*unit,unit,unit);
    draw.fillRect(6*unit,12*unit,unit,unit);


    draw.fillStyle='rgb(252,110,204)';
    draw.fillRect(6*unit,1*unit,unit,unit);
    draw.fillRect(10*unit,1*unit,unit,unit);
    draw.fillRect(4*unit,2*unit,unit,unit);
    draw.fillRect(12*unit,2*unit,unit,unit);  
    draw.fillRect(3*unit,3*unit,unit,unit);  
    draw.fillRect(13*unit,4*unit,unit,unit);
    draw.fillRect(13*unit,5*unit,unit,unit);
    draw.fillRect(1*unit,6*unit,unit,unit);
    draw.fillRect(6*unit,8*unit,unit,unit);
    draw.fillRect(7*unit,8*unit,unit,unit);
    draw.fillRect(12*unit,8*unit,unit,unit);
    draw.fillRect(13*unit,8*unit,unit,unit);
    draw.fillRect(4*unit,9*unit,unit,unit);
    draw.fillRect(1*unit,9*unit,unit,unit);
    draw.fillRect(13*unit,9*unit,unit,unit);
    draw.fillRect(2*unit,10*unit,unit,unit);
    draw.fillRect(14*unit,10*unit,unit,unit);
    draw.fillRect(6*unit,11*unit,unit,unit);
    draw.fillRect(12*unit,11*unit,unit,unit); 
    draw.fillRect(7*unit,12*unit,unit,unit);
    draw.fillRect(8*unit,12*unit,unit,unit);
    draw.fillRect(5*unit,12*unit,unit,unit);
    draw.fillRect(3*unit,13*unit,unit,unit);
    draw.fillRect(4*unit,13*unit,unit,unit);
    draw.fillRect(12*unit,13*unit,unit,unit);  
    draw.fillRect(13*unit,13*unit,unit,unit);
    draw.fillRect(2*unit,14*unit,unit,unit);
    draw.fillRect(3*unit,14*unit,unit,unit);
    draw.fillRect(4*unit,14*unit,unit,unit);
    draw.fillRect(5*unit,14*unit,unit,unit);
    draw.fillRect(6*unit,14*unit,unit,unit);
    draw.fillRect(11*unit,14*unit,unit,unit);
    draw.fillRect(12*unit,14*unit,unit,unit); 
    draw.fillRect(13*unit,14*unit,unit,unit);
    draw.fillRect(14*unit,14*unit,unit,unit);  



}
function drawKirbyWalk1() {
    // draw.save();
    // draw.scale(1.003,1)
    draw.fillStyle='black';
    draw.fillRect(5*unit,0*unit,5*unit,unit);
    draw.fillRect(3*unit,1*unit,2*unit,unit);
    draw.fillRect(10*unit,1*unit,2*unit,unit);
    draw.fillRect(2*unit,2*unit,1*unit,1*unit);  
    draw.fillRect(12*unit,2*unit,1*unit,1*unit);
    draw.fillRect(1*unit,3*unit,3*unit,1*unit);
    draw.fillRect(12*unit,3*unit,3*unit,1*unit);
    draw.fillRect(0*unit,4*unit,1*unit,5*unit);  
    draw.fillRect(15*unit,4*unit,1*unit,5*unit);
    draw.fillRect(1*unit,9*unit,2*unit,1*unit);
    draw.fillRect(1*unit,10*unit,1*unit,1*unit);
    draw.fillRect(13*unit,9*unit,2*unit,1*unit);  
    draw.fillRect(13*unit,10*unit,1*unit,1*unit);
    draw.fillRect(0*unit,11*unit,1*unit,2*unit);
    draw.fillRect(1*unit,13*unit,1*unit,2*unit);
    draw.fillRect(2*unit,15*unit,1*unit,1*unit);  
    draw.fillRect(3*unit,16*unit,2*unit,1*unit);
    draw.fillRect(5*unit,14*unit,1*unit,2*unit);
    draw.fillRect(6*unit,14*unit,4*unit,1*unit);  
    draw.fillRect(10*unit,15*unit,3*unit,1*unit);
    draw.fillRect(13*unit,14*unit,2*unit,1*unit);
    draw.fillRect(15*unit,12*unit,1*unit,2*unit);
    draw.fillRect(12*unit,11*unit,3*unit,1*unit);  
    draw.fillRect(2*unit,11*unit,1*unit,1*unit);  
    draw.fillRect(3*unit,12*unit,1*unit,1*unit);  
    draw.fillRect(4*unit,13*unit,1*unit,1*unit);  
    

    draw.fillStyle='rgb(252,194,228)';
    draw.fillRect(5*unit,1*unit,5*unit,1*unit);
    draw.fillRect(4*unit,2*unit,8*unit,2*unit);
    draw.fillRect(1*unit,4*unit,14*unit,5*unit);  
    draw.fillRect(3*unit,9*unit,10*unit,5*unit);


    draw.fillStyle='rgb(253,110,204)';
    draw.fillRect(3*unit,2*unit,1*unit,1*unit);
    draw.fillRect(5*unit,1*unit,1*unit,1*unit);
    draw.fillRect(11*unit,2*unit,1*unit,1*unit);
    draw.fillRect(12*unit,4*unit,1*unit,1*unit);
    draw.fillRect(11*unit,8*unit,1*unit,1*unit);
    draw.fillRect(12*unit,8*unit,1*unit,1*unit);
    draw.fillRect(14*unit,8*unit,1*unit,1*unit);
    draw.fillRect(9*unit,1*unit,1*unit,1*unit);
    draw.fillRect(1*unit,4*unit,1*unit,1*unit);
    draw.fillRect(1*unit,8*unit,1*unit,1*unit);
    draw.fillRect(5*unit,8*unit,1*unit,1*unit);
    draw.fillRect(6*unit,8*unit,1*unit,1*unit);
    draw.fillRect(4*unit,4*unit,1*unit,1*unit);
    draw.fillRect(3*unit,9*unit,1*unit,1*unit);  
    draw.fillRect(2*unit,10*unit,1*unit,1*unit);
    draw.fillRect(1*unit,11*unit,1*unit,2*unit);
    draw.fillRect(2*unit,12*unit,1*unit,3*unit);
    draw.fillRect(3*unit,13*unit,1*unit,3*unit);
    draw.fillRect(4*unit,14*unit,1*unit,2*unit);
    draw.fillRect(5*unit,13*unit,1*unit,1*unit);
    draw.fillRect(9*unit,13*unit,1*unit,1*unit);
    draw.fillRect(10*unit,14*unit,3*unit,1*unit);
    draw.fillRect(12*unit,13*unit,3*unit,1*unit);
    draw.fillRect(13*unit,12*unit,2*unit,1*unit);
    draw.fillRect(11*unit,12*unit,1*unit,1*unit);

    draw.fillStyle='black';
    draw.fillRect(8*unit,4*unit,1*unit,4*unit);
    draw.fillRect(10*unit,4*unit,1*unit,4*unit);
    draw.fillRect(9*unit,10*unit,1*unit,1*unit);
    draw.fillRect(3*unit,12*unit,1*unit,1*unit);
    draw.fillRect(4*unit,13*unit,1*unit,1*unit);  
    draw.fillRect(10*unit,13*unit,2*unit,1*unit);
    draw.fillRect(12*unit,11*unit,1*unit,2*unit);
    draw.fillRect(13*unit,4*unit,1*unit,5*unit);

    


    
} 
function drawKirbyWalk2() {
    draw.fillStyle='black';
    draw.fillRect(5*unit,1*unit,6*unit,unit);
    draw.fillRect(3*unit,2*unit,2*unit,unit);
    draw.fillRect(2*unit,3*unit,unit,unit);
    draw.fillRect(1*unit,4*unit,1*unit,2*unit);  
    draw.fillRect(0*unit,6*unit,1*unit,4*unit);
    draw.fillRect(1*unit,7*unit,1*unit,1*unit);
    draw.fillRect(1*unit,10*unit,1*unit,1*unit);
    draw.fillRect(2*unit,11*unit,2*unit,1*unit);
    draw.fillRect(3*unit,12*unit,1*unit,2*unit);  
    draw.fillRect(4*unit,14*unit,1*unit,1*unit);  
    draw.fillRect(5*unit,15*unit,6*unit,1*unit);
    draw.fillRect(11*unit,13*unit,1*unit,2*unit);
    draw.fillRect(12*unit,12*unit,1*unit,1*unit);
    draw.fillRect(13*unit,5*unit,1*unit,7*unit);
    draw.fillRect(14*unit,6*unit,1*unit,5*unit); 
    draw.fillRect(12*unit,3*unit,1*unit,2*unit); 
    draw.fillRect(11*unit,2*unit,1*unit,1*unit); 

    draw.fillStyle='rgb(252,194,228)';
    draw.fillRect(6*unit,2*unit,4*unit,1*unit);
    draw.fillRect(4*unit,3*unit,8*unit,1*unit);  
    draw.fillRect(3*unit,4*unit,9*unit,1*unit);  
    draw.fillRect(2*unit,5*unit,11*unit,1*unit);
    //eyes' line

    draw.fillRect(1*unit,6*unit,12*unit,4*unit);  
    draw.fillRect(2*unit,10*unit,11*unit,1*unit);
    draw.fillRect(4*unit,11*unit,9*unit,1*unit);
    draw.fillRect(4*unit,12*unit,7*unit,2*unit);

    draw.fillStyle='rgb(253,110,204)';
    draw.fillRect(5*unit,2*unit,1*unit,1*unit);
    draw.fillRect(10*unit,2*unit,1*unit,1*unit);
    draw.fillRect(3*unit,3*unit,1*unit,1*unit);
    draw.fillRect(2*unit,4*unit,1*unit,1*unit);
    draw.fillRect(4*unit,8*unit,1*unit,1*unit);
    draw.fillRect(6*unit,8*unit,2*unit,1*unit);
    draw.fillRect(12*unit,8*unit,1*unit,1*unit);
    draw.fillRect(1*unit,9*unit,1*unit,1*unit);
    draw.fillRect(2*unit,10*unit,1*unit,1*unit);
    draw.fillRect(4*unit,11*unit,1*unit,1*unit);
    draw.fillRect(5*unit,12*unit,1*unit,1*unit);
    draw.fillRect(4*unit,13*unit,1*unit,1*unit);
    draw.fillRect(5*unit,14*unit,6*unit,1*unit);
    draw.fillRect(11*unit,12*unit,1*unit,1*unit);


    draw.fillStyle='black';
    draw.fillRect(9*unit,5*unit,1*unit,3*unit);
    draw.fillRect(11*unit,5*unit,1*unit,3*unit);
    draw.fillRect(4*unit,9*unit,1*unit,2*unit);
    draw.fillRect(10*unit,10*unit,1*unit,1*unit);
    draw.fillRect(4*unit,12*unit,1*unit,1*unit);
    draw.fillRect(9*unit,14*unit,1*unit,1*unit);
}
function drawKirbyWalk3() {
    draw.fillStyle='rgb(252,194,228)';
    draw.fillRect(5*unit,1*unit,5*unit,1*unit);
    draw.fillRect(3*unit,2*unit,9*unit,2*unit);  
    draw.fillRect(2*unit,4*unit,12*unit,6*unit);  
    draw.fillRect(1*unit,10*unit,13*unit,3*unit);


    draw.fillStyle='black';
    draw.fillRect(5*unit,0*unit,5*unit,unit);
    draw.fillRect(3*unit,1*unit,2*unit,unit);
    draw.fillRect(10*unit,1*unit,2*unit,unit);
    draw.fillRect(2*unit,2*unit,1*unit,2*unit);  
    draw.fillRect(12*unit,2*unit,1*unit,2*unit);
    draw.fillRect(1*unit,4*unit,1*unit,5*unit);
    draw.fillRect(13*unit,4*unit,1*unit,7*unit);
    draw.fillRect(6*unit,6*unit,1*unit,1*unit);
    draw.fillRect(7*unit,7*unit,1*unit,2*unit);
    draw.fillRect(6*unit,9*unit,1*unit,1*unit);
    draw.fillRect(11*unit,4*unit,1*unit,3*unit);
    draw.fillRect(0*unit,9*unit,1*unit,4*unit);
    draw.fillRect(1*unit,9*unit,2*unit,1*unit);
    draw.fillRect(2*unit,10*unit,4*unit,1*unit);
    draw.fillRect(3*unit,11*unit,1*unit,1*unit);
    draw.fillRect(11*unit,9*unit,1*unit,1*unit);
    draw.fillRect(1*unit,13*unit,1*unit,1*unit);
    draw.fillRect(2*unit,14*unit,2*unit,1*unit);
    draw.fillRect(4*unit,12*unit,1*unit,2*unit);
    draw.fillRect(5*unit,13*unit,6*unit,1*unit);
    draw.fillRect(9*unit,14*unit,1*unit,1*unit);
    draw.fillRect(11*unit,12*unit,2*unit,1*unit);
    draw.fillRect(12*unit,11*unit,2*unit,1*unit);
    draw.fillRect(14*unit,12*unit,1*unit,1*unit);
    draw.fillRect(15*unit,13*unit,1*unit,2*unit);
    draw.fillRect(10*unit,15*unit,5*unit,1*unit);


    draw.fillStyle='rgb(253,110,204)';
    draw.fillRect(5*unit,1*unit,1*unit,1*unit);  
    draw.fillRect(9*unit,1*unit,1*unit,1*unit);  
    draw.fillRect(3*unit,2*unit,1*unit,1*unit);
    draw.fillRect(11*unit,2*unit,1*unit,1*unit);
    draw.fillRect(2*unit,4*unit,1*unit,1*unit);
    draw.fillRect(5*unit,6*unit,1*unit,1*unit);
    draw.fillRect(9*unit,7*unit,2*unit,1*unit);
    draw.fillRect(2*unit,8*unit,1*unit,1*unit);
    draw.fillRect(3*unit,9*unit,1*unit,1*unit);
    draw.fillRect(12*unit,10*unit,1*unit,1*unit);
    draw.fillRect(11*unit,11*unit,1*unit,1*unit);
    draw.fillRect(10*unit,12*unit,1*unit,1*unit);
    draw.fillRect(4*unit,11*unit,1*unit,1*unit);
    draw.fillRect(5*unit,12*unit,1*unit,1*unit);
    draw.fillRect(1*unit,10*unit,1*unit,3*unit);
    draw.fillRect(2*unit,11*unit,1*unit,3*unit);
    draw.fillRect(3*unit,12*unit,1*unit,2*unit);
    draw.fillRect(11*unit,13*unit,4*unit,1*unit);
    draw.fillRect(13*unit,12*unit,1*unit,1*unit);
    draw.fillRect(10*unit,14*unit,5*unit,1*unit);
    // draw.fillRect(4*unit,11*unit,1*unit,1*unit);
    // draw.fillRect(5*unit,12*unit,1*unit,1*unit);
}
    
   

    
    
    
     
    
    
    
  


    