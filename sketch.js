function setup() {
	//Create Canvas
	createCanvas(640, 360);
	noStroke();

}

function draw() {
	// Background fill color & mouseIsPressed color
	background(0, 0, 70);
	if (mouseIsPressed) {
		background(random(0, 200), random(0, 200), random(0, 200));
	}

	// Draw Landscape
	fill(10, 50, 25);
	for (var x = 0; x < 10; x++) {
		triangle((x * 65) - 50, 360, (x * 65) + 32, 200, (x * 65) + 114, 360);
	}

	fill(10, 110, 50);
	rect(0, 280, 640, 370);

	// UFO
	fill(90, 90, 90);
	ellipse(mouseX, mouseY - 60, 100, 50);
	ellipse(mouseX, mouseY - 80, 50, 60);

	// UFO Exterior
	fill(75, 75, 75);
	ellipse(mouseX - 50, mouseY - 60, 10, 10);
	ellipse(mouseX - 25, mouseY - 60, 10, 10);
	ellipse(mouseX, mouseY - 60, 10, 10);
	ellipse(mouseX + 25, mouseY - 60, 10, 10);
	ellipse(mouseX + 50, mouseY - 60, 10, 10);

	// UFO mouseIsPressed color
	if (mouseIsPressed) {

		fill(random(0, 255), random(0, 255), random(0, 255));
		ellipse(mouseX - 50, mouseY - 60, 10, 10);
		ellipse(mouseX - 25, mouseY - 60, 10, 10);
		ellipse(mouseX, mouseY - 60, 10, 10);
		ellipse(mouseX + 25, mouseY - 60, 10, 10);
		ellipse(mouseX + 50, mouseY - 60, 10, 10);
		ellipse(mouseX, mouseY - 40, 30, 5);

		// UFO Beam
		ellipse(mouseX, 310, 65, 20);
	}
}
