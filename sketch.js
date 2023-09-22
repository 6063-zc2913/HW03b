let eDiam = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
    background("yellow");
    fill("black");
    for(let xpos = 0; xpos <= width; xpos+= eDiam) {
        for(let ypos = 0; ypos <= height; ypos+= eDiam) {
            randomLength = random() * 25 + 3;
            randomShift = random() * 12 - 2.5;
            ellipse(xpos + randomShift, ypos + randomShift, randomLength, randomLength);
    }

  }
}

