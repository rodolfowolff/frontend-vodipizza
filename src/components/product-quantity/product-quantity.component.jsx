import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { PlusIcon, MinusIcon } from '@heroicons/react/solid';

const ProductQuantity = ({
  quantity,
  setQuantity,
  iconLeft,
  showLabel = true,
  iconRight,
  btnStyles,
  containerStyles,
}) => {
  return (
    <div className={`${containerStyles ? containerStyles : 'flex items-center mx-auto my-12 w-full md:flex-col lg:flex-row'}`}>
      {showLabel && (
        <label
          htmlFor={'quantity-' + uuidv4()}
          className='block text-lg font-medium font-hind text-center text-blue-gray-800 sm:text-left'
        >
          Quantidade
        </label>
      )}
      <span className='relative z-0 inline-flex rounded-md mt-2 w-full place-content-center'>
        <button
          type='button'
          name='remove'
          onClick={() => setQuantity(quantity - 1)}
          disabled={quantity === 1}
          className={`relative inline-flex items-center rounded-md border-transparent text-lg font-medium ${
            btnStyles
              ? btnStyles
              : 'text-white bg-rose-500 hover:bg-rose-600 px-2 py-2'
          } focus:z-10 focus:outline-none`}
        >
          <span className='sr-only'>Remover</span>
          {iconLeft ? (
            iconLeft
          ) : (
            <MinusIcon className='h-5 w-5' aria-hidden='true' />
          )}
        </button>
        <input
          name={'quantity-' + uuidv4()}
          id={'quantity-' + uuidv4()}
          value={quantity}
          type='tel'
          min='1'
          pattern={`[0-9]*`}
          className='shadow-sm block text-lg text-center text-blue-gray-800 w-10 sm:text-base ml-2 border-0 font-medium font-poppins focus:outline-none focus:ring-0'
          readOnly
        />
        <button
          type='button'
          name='add'
          onClick={() => setQuantity(quantity + 1)}
          className={`ml-2 relative inline-flex items-center rounded-md border-transparent text-sm font-medium ${
            btnStyles
              ? btnStyles
              : 'text-white bg-rose-500 hover:bg-rose-600 px-2 py-2'
          } focus:z-10 focus:outline-none`}
        >
          <span className='sr-only'>Adicionar</span>
          {iconRight ? (
            iconRight
          ) : (
            <PlusIcon className='h-5 w-5' aria-hidden='true' />
          )}
        </button>
      </span>
    </div>
  );
};

export default ProductQuantity;
