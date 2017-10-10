IgeFilters.multiply = function (canvas, ctx, originalImage, texture, data) {
	// Set the composite operation and draw the colour over the top
	ctx.globalCompositeOperation = 'source-atop';

	//ctx.globalAlpha = 0.45;
	ctx.fillStyle = data.color;
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	ctx.globalCompositeOperation = "multiply";
	ctx.drawImage(originalImage, 0, 0);
	
	// setting the composite back
	ctx.globalCompositeOperation = "source-over";
};