import React from 'react';

import CartItemLabelValue from '../cart-item-label-value/cart-item-label-vaue.component';
import CartItemToppings from '../cart-item-toppings/cart-item-toppings.component';

const CartItemCupcake = ({ item }) => {
  return (
    <>
      <CartItemLabelValue label={'Número de pedaços'} value={item.share} />
      <CartItemLabelValue label={'Chedddar'} value={item.chedddar} />
      <CartItemLabelValue label={'Queijo mussarela'} value={item.queijomussarela} />
      <CartItemLabelValue label={'Frango'} value={item.frango} />
      <CartItemLabelValue label={'Bacon'} value={item.bacon} />
      <CartItemLabelValue label={'Calabresa'} value={item.calabresa} />
      <CartItemLabelValue label={'Catupiry'} value={item.catupiry} />
      <CartItemLabelValue label={'Batata palha'} value={item.batatapalha} />
      {item.description && (
        <CartItemLabelValue
          gridCol={'sm:col-span-2'}
          label={'Descrição'}
          value={item.description}
        />
      )}
      <CartItemToppings toppings={item.toppings} label={'Toppings'} />
      {/* <CartItemToppings toppings={item.toppings2} label={'Toppings 2'} /> */}
    </>
  );
};

export default CartItemCupcake;
