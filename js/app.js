class CircularBuffer {
    constructor(size) {
        this._buffer = [];
        this._buffer.length = size;

        this._writeIndex = 0;
    }

    get size() {
        return this._buffer.length;
    }

    set size(value) {
        this._buffer.length = value;
    }

    push(value) {
        this._buffer[this._writeIndex] = value;
        this._writeIndex = this._right(this._writeIndex);
    }

    _left(index) {
        let ret = index - 1;
        if (ret < 0) {
            ret = this._buffer.length - 1;
        }
        return ret;
    }

    _right(index) {
        let ret = index + 1;
        if (ret >= this._buffer.length) {
            ret = 0;
        }
        return ret;
    }

    // TODO this is not working, n param is ignored
    _iterator(n) {
        var index = this._writeIndex;
        var count = 0;
        var data = this._buffer;
        var that = this;

        return {
            next() {
                index = that._left(index);
                count += 1;
                return {
                    value: data[index],
                    done: (count == data.length + 1) || data[index] == undefined
                };
            }
        };
    }

    every(n) {
        var buffer = this;
        return {
            [Symbol.iterator]() {
                return buffer._iterator(n);
            }
        }
    }

    [Symbol.iterator]() {
        return this._iterator(1);
    }
}


class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

const canvasWidth = 1200;
const canvasHeight = 800;
const signalRelativeOffset = new Point(0.2, 0.8);
const pointSize = 6;
let speedScale = 1.0;
let amplitudeScale = 1.0;
let historySizeScale = 1.0;

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
        this._angle += this._frequency * speedScale;
    }

    calculateTip(center) {
        let x = center.x + this._amplitude * amplitudeScale * Math.cos(this._angle);
        let y = center.y + this._amplitude * amplitudeScale * Math.sin(this._angle);

        return new Point(x, y);
    }

    draw(center) {
        let tip = this.calculateTip(center);

        stroke(0, 0, 0, 45);
        noFill();
        ellipse(center.x, center.y, this._amplitude * 2 * amplitudeScale, this._amplitude * 2 * amplitudeScale);
        line(center.x, center.y, tip.x, tip.y);
        fill(255, 0, 0, 45);
        ellipse(tip.x, tip.y, pointSize, pointSize);

        return tip;
    }
}

class Circles {
    constructor(center) {
        this._center = center;
        this._circles = [];
        this._historySize = 10;
        this._history = new CircularBuffer(this.historySize);
        this._persistent = false;
        this._shouldDrawSignals = true;
    }

    get persistent() {
        return this._persistent;
    }

    set persistent(value) {
        if (value) {
            this.clearHistory();
        }
        this._persistent = value;
    }

    get shouldDrawSignals() {
        return this._shouldDrawSignals;
    }

    set shouldDrawSignals(value) {
        this._shouldDrawSignals = value;
    }

    clearHistory() {
        this._history = new CircularBuffer(this.historySize);
    }

    get historySize() {
        return this._historySize;
    }

    set historySize(value) {
        this._historySize = value;
        this._history.size = value;
    }

    clear() {
        this.clearHistory();
        this._circles = [];
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
        if (this._persistent) {
            fill(255, 0, 0);
            noStroke();
            for (let point of this._history) {
                ellipse(point.x, point.y, pointSize, pointSize);
            }

            /* // Line segments are bad looking
            noFill();
            stroke(255, 0, 0);
            beginShape();
            for (let point of this._history) {
                vertex(point.x, point.y);
            }
            endShape();
            */
        }

        let center = this._center;
        for (let circle of this._circles) {
            center = circle.draw(center);
        }

        this._history.push(center);

        fill(255, 0, 0);
        noStroke();
        ellipse(center.x, center.y, pointSize, pointSize);

        if (this._shouldDrawSignals) {
            let startX = canvasWidth * signalRelativeOffset.x;
            stroke(255, 150, 150);
            line(center.x, center.y, startX, center.y);

            noFill();
            stroke(0);
            beginShape();
            for (let point of this._history) {
                vertex(startX, point.y);
                startX--;
            }
            endShape();

            let startY = canvasHeight * signalRelativeOffset.y;
            stroke(255, 150, 150);
            line(center.x, center.y, center.x, startY);

            noFill();
            stroke(0);
            beginShape();
            for (let point of this._history) {
                vertex(point.x, startY);
                startY++;
            }
            endShape();
        }
    }
}

let circles = new Circles(new Point(canvasWidth * 0.5, canvasHeight * 0.5));

function setup() {
    let canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('sketch-holder');
}

function draw() {
    background(255);

    circles.update();
    circles.draw();
}

$(function () {
    $('#persistent').change(function () {
        circles.persistent = this.checked;
    }).change();

    $('#show-signals').change(function () {
        circles.shouldDrawSignals = this.checked;
    }).change();

    $('#speed').on('input', function () {
        speedScale = this.value;
    }).trigger('input');

    $('#amplitude-scale').on('input', function () {
        amplitudeScale = this.value;
    }).trigger('input');

    $('#history-size').on('input', function () {
        historySize = this.value;
        circles.historySize = historySize;
    }).trigger('input');

    $.getJSON("harmonics.json", function(data) {
        harmonicsJson = data;
        for(let key in harmonicsJson) {
            if(harmonicsJson.hasOwnProperty(key)) {
                $('.examples').append('<button class="btn btn-success btn-sm mt-1 load-example" data-key="'+key+'">Load <span>'+key+'</span></button> ');
            }
        }
        $('.load-example').unbind('click').on('click', function() {
            try {
                let harmonics = harmonicsJson[$(this).data('key')];

                circles.clear();
                for (let h of harmonics) {
                    circles.push(new Circle(h.a, h.f, h.p));
                }
            } catch (e) {
                console.log('Wrong JSON', e);
            }
        });
    });

    $('#load-harmonics').click(function () {
        try {
            let harmonics = JSON.parse($('#harmonics').val());

            circles.clear();
            for (let h of harmonics) {
                circles.push(new Circle(h.a, h.f, h.p));
            }
        } catch (e) {
            console.log('Wrong JSON', e);
        }
    }).click();
});