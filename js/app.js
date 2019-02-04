const canvasWidth = 800;
const canvasHeight = 800;
const pointSize = 6;
const drawOnlyRedPoint = false;
const seriesHistory = 200;

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Circle {
    /**
     * Creates circle
     * @param {double} amplitude in pixels
     * @param {double} frequency radians per update
     * @param {double} phase starting angle
     */
    constructor(amplitude, frequency, phase) {
        this._amplitude = amplitude;
        this._frequency = frequency;
        this._phase = phase;
        this._angle = this._phase;
    }

    update() {
        this._angle += this._frequency;
    }

    calculateTip(center) {
        let x = center.x + this._amplitude * Math.cos(this._angle);
        let y = center.y + this._amplitude * Math.sin(this._angle);

        return new Point(x, y);
    }

    draw(center) {
        let tip = this.calculateTip(center);

        if (!drawOnlyRedPoint) {
            stroke(220);
            noFill();
            ellipse(center.x, center.y, this._amplitude * 2, this._amplitude * 2);
            line(center.x, center.y, tip.x, tip.y);
            fill(0);
            ellipse(tip.x, tip.y, pointSize, pointSize);
        }

        return tip;
    }
}

class Circles {
    constructor(center) {
        this._center = center;
        this._circles = [];
        this._series = [];
    }

    push(circle) {
        this._circles.push(circle);
    }

    update() {
        for (let circle of this._circles) {
            circle.update();
        }
    }

    draw() {
        let center = this._center;
        for (let circle of this._circles) {
            center = circle.draw(center);
        }

        this._series.unshift(center.y);
        if (this._series.length > seriesHistory) {
            this._series.pop();
        }

        fill(255, 0, 0);
        noStroke();
        ellipse(center.x, center.y, pointSize, pointSize);

        let startX = canvasWidth * 0.7;
        stroke(255, 150, 150);
        line(center.x, center.y, startX, center.y);

        noFill();
        stroke(0);
        beginShape();
        for (let s of this._series) {
            vertex(startX, s);
            startX++;
        }
        endShape();
    }
}

let circles = new Circles(new Point(canvasWidth * 0.2, canvasHeight * 0.5));

function setup() {
    let canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('sketch-holder');

    let baseSize = 100;
    let baseFreq = 10 / 360;
    for (let i = 1; i < 10; i += 2) {
        circles.push(new Circle(baseSize / i, baseFreq * i, 0.0));
    }
}

function draw() {
    if (!drawOnlyRedPoint) {
        background(255);
    }

    circles.update();
    circles.draw();
}