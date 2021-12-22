import React from 'react';
import { Link } from 'react-router-dom';

import { currencyFormatter } from '../../utils/functions';
import NoImage from '../../assets/images/no-product-image.png';

const ProductCard = ({ product }) => {
  const { slug, title, images, category, price } = product;
  return (
    <div className='space-y-4 group rounded-xl hover:bg-transparent hover:shadow-2xl p-2'>
      <div className=''>
          <Link to={`/product/${slug}`}>
            <div className='pb-5/6 relative'>
              <img
                className='h-full w-full object-cover absolute rounded-lg shadow-md'
                src={images.length > 0 ? images[0].imageURL : NoImage}
                alt={title}
              />
            </div>
          <div className='relative px-4 -mt-16'>
            <div className='bg-white p-6 rounded-lg shadow-lg'>
              <div className='flex items-baseline'>
                <span className='inline-block bg-rose-200 text-rose-600 text-xs uppercase tracking-widest font-semibold px-2 rounded-sm'>
                  {category.name}
                </span>
              </div>
                <h4 className='mt-1 font-semibold font-hind text-blue-gray-800 text-lg leading-snug truncate'>
                  { title }
                </h4>
              <div className='mt-1 font-poppins text-blue-gray-800'>{currencyFormatter(price)}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
