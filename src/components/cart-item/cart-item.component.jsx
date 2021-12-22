import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { TrashIcon } from '@heroicons/react/outline';
import { PlusIcon, MinusIcon } from '@heroicons/react/solid';
// import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/solid';

import NoImage from '../../assets/images/no-product-image.png';

import { updateCart, removeFromCart } from '../../redux/reducers/cart/cart.actions';

import CartItemPizza from './cart-item-pizza/cart-item-pizza.component';
import ProductQuantity from '../product-quantity/product-quantity.component';
import CartItemLabelValue from './cart-item-label-value/cart-item-label-vaue.component';
import { currencyFormatter } from '../../utils/functions';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(item.quantity);

  useEffect(() => {
    if (quantity !== item.quantity) {
      dispatch(updateCart(quantity, item.c_id));
    }
  }, [dispatch, quantity, item.quantity, item.c_id]);

  const handleRemoveProductFromCart = () => {
    dispatch(removeFromCart(item.c_id))
  };

  return (
    <div className='bg-white shadow sm:rounded-lg mb-1'>
      <div className='flex justify-between p-2'>
        <div className='flex items-center space-x-5'>
          <div className='flex-shrink-0'>
            <div className='relative'>
              <img
                className='h-16 w-16 rounded-md object-cover'
                src={item.imageURL ? item.imageURL : NoImage}
                alt={item.title}
              />
              <span
                className='absolute inset-0 shadow-inner rounded-md'
                aria-hidden='true'
              />
            </div>
          </div>
          <div className='ml-4'>
            <h2
              id='applicant-information-title'
              className='text-lg leading-6 font-medium text-blue-gray-800'
            >
              {item.title}
            </h2>
            <div className='mt-1 max-w-2xl text-sm flex'>
              <p className='inline-flex text-blue-gray-500 mr-3'>
                {item.category}
              </p>
              {item.shipping === 'Sim' && (
                <>
                  {' '}
                  {' | '}
                  <span className='ml-3 inline-flex items-center  px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800'>
                    Entrega grátis
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
        <button
          type='button'
          onClick={handleRemoveProductFromCart}
          className='inline-flex items-center p-1 border border-transparent rounded-full text-blue-gray-800 bg-white focus:outline-none'
        >
          <TrashIcon className='h-5 w-5' aria-hidden='true' />
        </button>
      </div>
      <div className='border-t border-blue-gray-200 px-4 py-5 sm:px-6'>
        <dl className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
          <CartItemLabelValue
            label={'Quantidade'}
            value={
              <ProductQuantity
                showLabel={false}
                quantity={quantity}
                setQuantity={setQuantity}
                iconLeft={
                  <MinusIcon className='h-5 w-5' aria-hidden='true' />
                }
                iconRight={
                  <PlusIcon className='h-5 w-5' aria-hidden='true' />
                }
                btnStyles='text-white bg-rose-500 hover:bg-rose-600 px-2 py-2'
                containerStyles='mt-0'
              />
            }
          />
          <CartItemLabelValue
            label={'Preço'}
            value={currencyFormatter(item.price)}
          />
          {item.productType === 'Pizza' && <CartItemPizza item={item} />}
        </dl>
      </div>
    </div>
  );
};

export default CartItem;
