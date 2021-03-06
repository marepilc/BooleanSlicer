"use strict";


export function drawBtn(size: number, color: string, orientation: 'left' | 'right'): string {
    let svgL = `<svg width="${size}px" height="${size}px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;
    clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M201.757,128l0.243,0c0,39.382 13.471,77.707 36.514,108.757c1.687,
    2.249 2.342,5.107 1.805,7.866c-0.538,2.76 -2.219,5.163 -4.627,6.614c-0.066,0.04 -0.133,0.08 -0.209,0.102c-4.33,2.608 -9.928,1.545 -13,
    -2.469c-14.192,-18.839 -25.151,-40.064 -31.941,-62.611c-4.746,-15.762 -7.431,-31.992 -8.156,-48.259l-129.386,0l-0.73,-0.027c-7.406,
    -0.815 -12.401,-10.761 -6.469,-16.914c1.521,-1.577 3.572,-2.633 5.743,-2.952c0.643,-0.095 0.808,-0.083 1.456,-0.107l129.386,0c0.725,
    -16.267 3.41,-32.497 8.156,-48.259c6.79,-22.547 17.749,-43.772 31.941,-62.611c3.072,-4.014 8.67,-5.077 13,-2.469c0.076,0.022 0.143,
    0.062 0.209,0.102c2.408,1.451 4.089,3.854 4.627,6.614c0.537,2.759 -0.118,5.617 -1.805,7.866c-23.043,31.05 -36.514,69.375 -36.514,
    108.757l-0.243,0l0,0Z" style="fill:${color};"/></svg>`;
    let svgR = `<svg width="${size}px" height="${size}px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;
    clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M54.243,128l-0.243,0c0,-39.382 -13.471,-77.707 -36.514,
    -108.757c-1.687,-2.249 -2.342,-5.107 -1.805,-7.866c0.538,-2.76 2.219,-5.163 4.627,-6.614c0.066,-0.04 0.133,-0.08 0.209,-0.102c4.33,
    -2.608 9.928,-1.545 13,2.469c14.192,18.839 25.151,40.064 31.941,62.611c4.746,15.762 7.431,31.992 8.156,48.259l129.386,0l0.73,0.027c7.406,
    0.815 12.401,10.761 6.469,16.914c-1.521,1.577 -3.572,2.633 -5.743,2.952c-0.643,0.095 -0.808,0.083 -1.456,0.107l-129.386,0c-0.725,
    16.267 -3.41,32.497 -8.156,48.259c-6.79,22.547 -17.749,43.772 -31.941,62.611c-3.072,4.014 -8.67,5.077 -13,2.469c-0.076,-0.022 -0.143,
    -0.062 -0.209,-0.102c-2.408,-1.451 -4.089,-3.854 -4.627,-6.614c-0.537,-2.759 0.118,-5.617 1.805,-7.866c23.043,-31.05 36.514,-69.375 36.514,
    -108.757l0.243,0l0,0Z" style="fill:${color};"/></svg>`;
    switch (orientation) {
        case 'left':
            return svgL;
        case 'right':
            return svgR;
        default:
            return '';
    }
}

export function drawKnob(size: number, color: string, color2: string, orientation: 'left' | 'right' | 'top'): string {
    let svgL = `<svg width="${size}px" height="${size}px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;
    clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M128.414,0.001c52.33,0.249 102.675,34.861 120.473,85.851c13.431,
    38.477 7.176,83.343 -16.964,116.851c-23.478,32.59 -62.928,53.168 -103.509,53.296c-47.58,0.151 -94.332,-28.377 -115.615,-72.177c-20.156,
    -41.481 -15.868,-94.034 12.414,-132.078c23.528,-31.648 62.108,-51.3 101.547,-51.738c0.551,-0.004 1.102,-0.006 1.654,-0.005Zm-0.764,20c-27.028,
    0.128 -53.681,10.667 -73.435,29.168c-32.891,30.803 -43.959,82.998 -23.711,125.322c17.387,36.346 56.109,61.378 97.146,61.508c45.817,
    0.146 90.072,-31.305 103.786,-76.849c7.923,-26.309 5.33,-55.74 -7.247,-80.28c-17.845,-34.82 -55.785,-58.428 -95.139,-58.865c-0.467,
    -0.004 -0.933,-0.005 -1.4,-0.004Z" style="fill:${color};"/><circle cx="48.058" cy="128" r="22" style="fill:${color2};"/></svg>`;
    let svgR = `<svg width="${size}px" height="${size}px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;
    clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M128.414,0.001c52.33,0.249 102.675,34.861 120.473,85.851c13.431,
    38.477 7.176,83.343 -16.964,116.851c-23.478,32.59 -62.928,53.168 -103.509,53.296c-47.58,0.151 -94.332,-28.377 -115.615,-72.177c-20.156,
    -41.481 -15.868,-94.034 12.414,-132.078c23.528,-31.648 62.108,-51.3 101.547,-51.738c0.551,-0.004 1.102,-0.006 1.654,-0.005Zm-0.764,20c-27.028,
    0.128 -53.681,10.667 -73.435,29.168c-32.891,30.803 -43.959,82.998 -23.711,125.322c17.387,36.346 56.109,61.378 97.146,61.508c45.817,
    0.146 90.072,-31.305 103.786,-76.849c7.923,-26.309 5.33,-55.74 -7.247,-80.28c-17.845,-34.82 -55.785,-58.428 -95.139,-58.865c-0.467,
    -0.004 -0.933,-0.005 -1.4,-0.004Z" style="fill:${color};"/><circle cx="207.942" cy="128" r="22" style="fill:${color2};"/></svg>`;
    let svgT = `<svg width="${size}px" height="${size}px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;
    clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M128.414,0.001c52.33,0.249 102.675,34.861 120.473,85.851c13.431,
    38.477 7.176,83.343 -16.964,116.851c-23.478,32.59 -62.928,53.168 -103.509,53.296c-47.58,0.151 -94.332,-28.377 -115.615,-72.177c-20.156,
    -41.481 -15.868,-94.034 12.414,-132.078c23.528,-31.648 62.108,-51.3 101.547,-51.738c0.551,-0.004 1.102,-0.006 1.654,-0.005Zm-0.764,
    20c-27.028,0.128 -53.681,10.667 -73.435,29.168c-32.891,30.803 -43.959,82.998 -23.711,125.322c17.387,36.346 56.109,61.378 97.146,
    61.508c45.817,0.146 90.072,-31.305 103.786,-76.849c7.923,-26.309 5.33,-55.74 -7.247,-80.28c-17.845,-34.82 -55.785,-58.428 -95.139,
    -58.865c-0.467,-0.004 -0.933,-0.005 -1.4,-0.004Z" style="fill:${color};"/><path d="M106,48.058c0,-12.142 9.858,-21.999 22,-21.999c12.142,
    0 22,9.857 22,21.999c0,12.142 -9.858,22 -22,22c-12.142,0 -22,-9.858 -22,-22Z" style="fill:${color2};"/></svg>`;
    switch (orientation) {
        case 'left':
            return svgL;
        case 'right':
            return svgR;
        case 'top':
            return svgT;
        default:
            return '';
    }
}