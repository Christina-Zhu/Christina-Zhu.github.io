function drawGroundBlocks () {
    YPosition = 2350;
    magnify = 0.25;
    numBlocks = 10;
    for (column = 0; column < numBlocks; column++) {
        draw.save();
        draw.scale(0.25,0.25);
        draw.translate(column*unit*36,YPosition);
        drawTile();
        draw.restore();
    }
}
function drawTile() {
    draw.fillStyle = 'rgb(201, 76, 12)';
    draw.fillRect(0*unit,0*unit,16*unit,7*unit);  
    draw.fillRect(18*unit,0*unit,16*unit,7*unit);
    draw.fillRect(0*unit,9*unit,36*unit,7*unit); 
    draw.fillRect(0*unit,18*unit,36*unit,7*unit);
    draw.fillRect(0*unit,27*unit,36*unit,7*unit); 

    draw.fillStyle = 'black';
    draw.fillRect(16*unit,0*unit,2*unit,7*unit);
    draw.fillRect(34*unit,0*unit,2*unit,7*unit);
    draw.fillRect(0*unit,7*unit,36*unit,2*unit);
    draw.fillRect(7*unit,9*unit,2*unit,7*unit);
    draw.fillRect(25*unit,9*unit,2*unit,7*unit);
    draw.fillRect(0*unit,16*unit,36*unit,2*unit);
    draw.fillRect(16*unit,18*unit,2*unit,7*unit);
    draw.fillRect(34*unit,18*unit,2*unit,7*unit);
    draw.fillRect(0*unit,25*unit,36*unit,2*unit);
    draw.fillRect(7*unit,27*unit,2*unit,7*unit);
    draw.fillRect(25*unit,27*unit,2*unit,7*unit);
    draw.fillRect(0*unit,34*unit,36*unit,2*unit);
}