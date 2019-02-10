import json
import random
from operator import itemgetter
from optparse import OptionParser

import numpy as np
from PIL import Image
from svgpathtools import svg2paths, path
from tsp_solver.greedy_numpy import solve_tsp


def calculate_circles(points, scale=1.0, speed=2.0, harmonics_length=100) -> str:
    """
    Calculate Fourier series from given points and transform results to JSON string for drawing web app.
    :type points: np.ndarray
    :param points: Numpy array where element is x, y coordinate, shape is (count, 2)
    :param scale:
    :param speed: In terms of "how much time whole animation will be long"
    :param harmonics_length: Number of returned circles (harmonics)
    :return: JSON string
    """

    point_count = points.shape[0]

    # these are truly magic constants that were calculated with gut feeling
    scale_factor = 500 / point_count / 2 * scale
    speed_factor = point_count / 100 * speed

    samples = points * scale_factor
    samples = samples.view(np.complex).reshape((point_count,))

    start_index = point_count // 2 - harmonics_length // 2
    end_index = start_index + harmonics_length

    fourier = np.fft.fft(samples)[1:]  # remove DC (frequency == 0)
    frequencies = np.fft.fftfreq(point_count, 1 / speed_factor)[1:]  # remove DC (frequency == 0)

    fourier = np.fft.fftshift(fourier)[start_index:end_index]
    frequencies = np.fft.fftshift(frequencies)[start_index:end_index]

    amplitudes = np.abs(fourier)
    phases = np.angle(fourier)

    output = [
        {"a": a, "f": f, "p": p}
        for a, f, p in zip(amplitudes, frequencies, phases)
    ]
    output = sorted(output, key=itemgetter("a"), reverse=True)

    return json.dumps(output)


def image_to_point_cloud(image, cloud_size):
    h, w = image.shape
    cloud = np.zeros((2, cloud_size), dtype=np.int)
    for i in range(cloud_size):
        while True:
            x = int(random.random() * w)
            y = int(random.random() * h)
            if image[y, x] < 128:
                break
        cloud[:, i] = (x, y)
    return cloud


def make_dist_matrix(x, y):
    """Creates distance matrix for the given coordinate vectors"""
    n = len(x)
    xx = np.vstack((x,) * n)
    yy = np.vstack((y,) * n)
    return np.sqrt((xx - xx.T) ** 2 + (yy - yy.T) ** 2)


def main():
    parser = OptionParser(description="Circle generator for draw-fft p5js drawing web app.")
    parser.add_option("-i", "--image", dest="image_filename", help="Path to image to transform into circles. All bitmap file types are supported and vector images in SVG.")
    parser.add_option("-p", "--samples-count", type="int", default=1000, dest="samples_count", help="Number of samples extracted from input image")
    parser.add_option("-c", "--circles-count", type="int", default=100, dest="circles_count", help="Number of output circles (harmonics)")
    parser.add_option("-s", "--sample-scale", type="float", default=1.0, dest="sample_scale", help="Multiplication coefficient for x and y coordinates of given image)")
    parser.add_option("-a", "--amplitude-scale", type="float", default=1.0, dest="amplitude_scale", help="Multiplication coefficient for radius (amplitude) of circles")
    parser.add_option("-f", "--frequency-scale", type="float", default=1.0, dest="frequency_scale", help="Multiplication coefficient for frequency of circles")

    options, args = parser.parse_args()

    points = None

    if "svg" in options.image_filename.lower():
        svg_paths, _ = svg2paths(options.image_filename)
        vector_path = path.concatpaths(svg_paths)

        time = np.linspace(0.0, 1.0, options.samples_count)
        points = np.asarray([vector_path.point(t) for t in time]).view(np.float).reshape(options.samples_count, 2) * options.sample_scale
    else:
        image = np.asarray(Image.open(options.image_filename).convert('L'))
        cloud = image_to_point_cloud(image, options.samples_count)

        path_indexes = solve_tsp(make_dist_matrix(cloud[0, :], cloud[1, :]))
        points = np.asarray(list(zip(cloud[0, path_indexes], cloud[1, path_indexes]))) * options.sample_scale

    circles_json = calculate_circles(points, scale=options.amplitude_scale, speed=options.frequency_scale, harmonics_length=options.circles_count)
    print(circles_json)


if __name__ == '__main__':
    main()
