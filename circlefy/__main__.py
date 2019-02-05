import sys
import numpy as np
import cv2
from scipy import signal
import json
from operator import itemgetter


def generate_test(harmonics_length=100):
    t = np.linspace(0, 1, 1000)
    samples = signal.sawtooth(2 * np.pi * 5 * t) * 0.2

    np.fft.fft(samples)
    fourier = np.fft.fft(samples)
    freq = np.fft.fftfreq(len(samples), 0.1)
    amplitudes = np.abs(fourier)
    phases = np.angle(fourier) + np.pi / 2

    output = []

    for a, f, p in zip(amplitudes[1:harmonics_length], freq[1:harmonics_length], phases[1:harmonics_length]):
        output.append({"amplitude": a, "frequency": f, "phase": p})

    output = sorted(output, key=itemgetter("amplitude"), reverse=True)

    return json.dumps(output)


def main():
    filename = sys.argv[1]
    print("Circlefying '{0}' image...".format(filename))

    image = cv2.imread(filename, cv2.IMREAD_GRAYSCALE)
    cv2.imshow("Loaded image", image)

    ret, thresh = cv2.threshold(image, 100, 255, cv2.THRESH_BINARY)
    cv2.imshow("Threshold image", thresh)

    fft = np.fft.fft2(thresh)
    print(fft)

    shifted = np.fft.fftshift(fft)
    magnitude_spectrum = 20 * np.log(np.abs(shifted))
    magnitude_spectrum = np.asarray(magnitude_spectrum, dtype=np.uint8)

    cv2.imshow("Spectrum", magnitude_spectrum)

    cv2.waitKey()
    cv2.destroyAllWindows()


if __name__ == '__main__':
    # main()
    print(generate_test())
