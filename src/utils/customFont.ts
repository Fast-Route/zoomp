import localFont from 'next/font/local';

const amazon = localFont({
    src: [
        { 
            path: '../fonts/amazon/AmazonEmber_Bd.ttf',
            weight: '700',
            style: 'normal',
        },
        { 
            path: '../fonts/amazon/AmazonEmber_Rg.ttf',
            weight: '400',
            style: 'normal',
        }
    ],
    variable: '--font-family-ember',
});

export default amazon;