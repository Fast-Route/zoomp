interface LocationProps {
    w: number;
    h: number;
    fill?: string;
    className?: string;
}

function Location({ w, h, fill = '#000', className}: LocationProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width={w} height={h} version="1.1" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering:'auto', fillRule: 'evenodd', clipRule: 'evenodd', fill }}
        viewBox="0 0 6010.08 7134.64"
        xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
                <style type="text/css">
                     { fill }
                </style>
            </defs>
            <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer"/>
                <path className={`fil0 ${fill} ${className}`} d="M2646.03 6887.33c-259.64,-223.45 -484.72,-480.04 -726.38,-721.71 -778.83,-778.84 -1669.82,-1458.08 -1877.47,-2611.07 -333.71,-1852.89 1067.85,-3549.72 2953.8,-3554.01 1882.72,-4.28 3297.58,1708 2955.87,3556.25 -82.41,445.74 -254.63,845.59 -521.53,1211.92 -198.28,272.15 -435.55,502.6 -672.65,739.69 -238.71,238.7 -472.45,482.3 -710.67,721.49 -141.05,141.63 -282.65,282.74 -427.47,420.53 -106.58,101.41 -228.11,223.41 -355.63,296.27l-329.89 188.48 -287.98 -247.84zm86.37 -100.35c-257.93,-221.96 -479.35,-475.2 -719.13,-714.98 -752.09,-752.1 -1640.22,-1427.26 -1840.79,-2540.92 -320.01,-1776.85 1025.15,-3394.05 2823.8,-3398.14 1795.99,-4.08 3152.76,1629.05 2825.38,3399.78 -79.05,427.58 -242.58,806.97 -498.35,1158.03 -196.33,269.48 -425.05,489.83 -659.26,724.03 -238.62,238.62 -472.6,482.44 -710.86,721.68 -140.12,140.69 -281.06,281.16 -424.92,418.04 -92.3,87.81 -220.43,214.6 -330.05,277.23l-248.71 142.1 -217.11 -186.85zm264.59 -307.46c156.47,-89.4 1166.89,-1138.24 1380.23,-1351.57 408.11,-408.11 892,-838.4 1045.56,-1668.98 295.54,-1598.47 -962.98,-2923.72 -2425.58,-2920.39 -1480.2,3.36 -2712.58,1326.61 -2425.5,2920.6 175.78,976.01 1010.04,1607.62 1728.4,2325.99 225.92,225.92 448.38,480.49 696.89,694.35z"/>
            </g>
        </svg>
    );
}

export default Location;