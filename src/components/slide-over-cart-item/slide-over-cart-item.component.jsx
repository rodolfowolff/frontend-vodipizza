import React from 'react';
import { TrashIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { currencyFormatter } from '../../utils/functions';

import { removeFromCart } from '../../redux/reducers/cart/cart.actions';

const SlideOverCartItem = ({ cartProducts }) => {
  const dispatch = useDispatch();

  const handleRemoveProductFromCart = (_id) => {
    dispatch(removeFromCart(_id));
  };

  return (
    <ul className='flex-1 divide-y divide-gray-200 overflow-y-auto'>
       { cartProducts && cartProducts.map((product) => (
        <li key={product.c_id}>
          <div className='relative group py-6 px-1 flex items-center'>
            <Link
              to={`product/${product.slug}`}
              className='-m-1 flex-1 block p-1'
            >
              <div
                className='absolute inset-0 group-hover:bg-blue-gray-50'
                aria-hidden='true'
              />
              <div className='flex-1 flex items-center min-w-0 relative'>
                <span className='flex-shrink-0 inline-block relative'>
                  <img
                    className='h-10 w-10 rounded-md object-cover'
                    src={product.imageURL ? product.imageURL : 'Produto sem imagem'}
                    alt={product.title ? product.title : 'Produto sem titulo'}
                  />
                </span>
                <div className='ml-4 truncate'>
                  <p className='text-sm font-medium font-hind text-blue-gray-800 truncate'>
                    {product.title ? product.title : 'Produto sem titulo'}
                  </p>
                  <p className='text-sm font-bold font-hind text-blue-gray-800 truncate'>
                    {product.price ? currencyFormatter(product.price) : 0}
                  </p>
                  <p className='text-sm text-blue-gray-500 truncate'>
                    {'Quantia ' + product.quantity}
                  </p>
                </div>
              </div>
            </Link>
            <div className='ml-2 flex-shrink-0 relative inline-block text-left'>
              <button
                className='group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none'
                onClick={() => handleRemoveProductFromCart(product.c_id)}
              >
                <span className='sr-only'>Abra o menu de opções</span>
                <span className='flex items-center justify-center h-full w-full rounded-full'>
                  <TrashIcon
                    className='w-5 h-5 text-blue-gray-400  group-hover:text-blue-gray-500'
                    aria-hidden='true'
                  />
                </span>
              </button>
            </div>
          </div>
        </li>

      ))}
    </ul>
  );
};

export default SlideOverCartItem;
