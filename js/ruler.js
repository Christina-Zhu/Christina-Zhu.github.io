function drawRuler(delta) {
    draw.fillStyle = "black";
    const numX = draw.canvas.width / (unit*delta);
    const numY = draw.canvas.height / (unit*delta);
    for (i = 0; i < numX; i++) {
        draw.fillRect(i*unit*delta-1,0,1,10);
        draw.fillRect(i*unit*delta-1,draw.canvas.height-10,1,10);
        draw.fillRect(i*unit*delta-1,30,1,draw.canvas.height-61);
        draw.fillText(i*delta, i*unit*delta-5, 23);
        draw.fillText(i*delta, i*unit*delta-5, draw.canvas.height-17);
    }
    for (i = 0; i < numY; i++) {
        draw.fillRect(0,i*unit*delta-1,10,1);
        draw.fillRect(draw.canvas.width-10,i*unit*delta-1,10,1);
        draw.fillRect(35,i*unit*delta-1,draw.canvas.width-70,1);
        if (i*delta != 0) {
            draw.fillText(i*delta, 17, i*unit*delta+4);
            draw.fillText(i*delta, draw.canvas.width-27, i*unit*delta+4);
        }
    }
}