import { Gupter, Montserrat_Alternates, Playfair_Display, } from 'next/font/google';


export const titleFont = Montserrat_Alternates({ 
  subsets: ['latin'],
  weight: ['500', '700'],
});


export const specialTitle = Gupter({
  subsets: ['latin'],
  weight: ['500', '700'],
})



import { Montserrat } from 'next/font/google';

export const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
});



export const playfairDisplay = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin'],
});

import { Bebas_Neue } from 'next/font/google';

export const bebasNeue = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
});


import { Poppins } from 'next/font/google';

export const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});
