import React from 'react';
import { Image } from 'cloudinary-react';

import CustomLink from '../custom-link/custom-link.component.jsx';

const Hero = () => {
  return (
    <>
      <div className='mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left'>
        <div className='px-4 lg:w-1/2 sm:px-8 xl:pr-16'>
          <h1 className='text-4xl tracking-tight font-extrabold font-poppins text-blue-gray-800 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl'>
            <span className='block xl:inline'>Pizzaria</span>{' '}
            <span className='block text-orange-600 xl:inline'>Vo Di Pizza</span>
          </h1>
          <p className='mt-3 max-w-md mx-auto text-lg text-blue-gray-500 font-hind sm:text-xl md:mt-5 md:max-w-3xl'>
          Peça sua pizza favorita na melhor pizzaria da cidade.
          Aproveite nossas promoções!
          </p>
          <div className='mt-10 sm:flex sm:justify-center lg:justify-start'>
            <div className='rounded-md shadow'>
              <CustomLink
                url='/shop'
                type='link-button'
                custom='w-full flex px-8 py-3 text-base font-medium text-white bg-orange-600 hover:bg-orange-700 md:py-4 md:text-lg md:px-10'
              >
                Veja o cardápio
              </CustomLink>
            </div>
            <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
              <CustomLink
                url='/blog'
                type='link-button'
                custom='w-full flex px-8 py-3 text-base font-medium text-orange-600 bg-white hover:bg-blue-gray-50 md:py-4 md:text-lg md:px-10'
              >
                Promoções
              </CustomLink>
            </div>
          </div>
        </div>
      </div>
      <div className='relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full'>
        <Image
          className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto'
          cloudName='dbue8wkkw'
          publicId='Pizza-Pizzaria-min_tpaxpz'
          loading='lazy'
          width='100%'
          height='100%'
        >
        </Image>
      </div>
    </>
  );
};

export default Hero;
