import sys
import numpy as np
from operator import itemgetter
from svgpathtools import svg2paths, wsvg, path
import json


def calculate_circles(points, scale=1.0, speed=2.0, harmonics_length=100) -> str:
    """
    Calculate Fourier series from given points and transform results to JSON string for drawing web app.
    :type points: np.ndarray
    :param points: Numpy array where element is x, y coordinate, shape is (count, 2)
    :param scale:
    :param speed: In terms of "how much time whole animation will be long"
    :param harmonics_length: Number of returned circles (harmonics)
    :return: JSON string for drawing web app
    """

    point_count = points.shape[0]

    # these are truly magic constants that were calculated with gut feeling
    scale_factor = 500 / point_count / 2 * scale
    speed_factor = point_count / 100 * speed

    samples = points * scale_factor
    samples = samples.view(np.complex).reshape((point_count,))

    start_index = point_count // 2 - harmonics_length // 2
    end_index = start_index + harmonics_length

    fourier = np.fft.fft(samples)
    fourier = np.fft.fftshift(fourier[1:])[start_index:end_index]

    freq = np.fft.fftfreq(point_count, 1 / speed_factor)
    freq = np.fft.fftshift(freq[1:])[start_index:end_index]

    amplitudes = np.abs(fourier)
    phases = np.angle(fourier)

    output = [
        {"a": a, "f": f, "p": p}
        for a, f, p in zip(amplitudes, freq, phases)
    ]
    output = sorted(output, key=itemgetter("a"), reverse=True)

    return json.dumps(output)


def main():
    sample_count = 100000
    svg_paths, _ = svg2paths(sys.argv[1])
    vector_path = path.concatpaths(svg_paths)

    time = np.linspace(0.0, 1.0, sample_count)
    points = np.asarray([vector_path.point(t) for t in time]).view(np.float).reshape(sample_count, 2) * 0.005

    circles_json = calculate_circles(points, speed=1.0, harmonics_length=800)
    print(circles_json)


if __name__ == '__main__':
    main()
