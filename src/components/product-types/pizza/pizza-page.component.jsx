import React from 'react';
import {MultiSelect} from 'react-multi-select-component';
import Select from '../../select/select.component';
import { currencyFormatter } from '../../../utils/functions';

const PizzaPage = ({
  pizzaShares,
  pizzaShare,
  setPizzaShare,
  price,
  // pizzaCakes,
  // pizzaCake,
  // pizzaCake2,
  // setPizzaCake,
  // setPizzaCake2,
  // pizzaFodders,
  // pizzaFodder,
  // pizzaFodder2,
  // setPizzaFodder,
  // setPizzaFodder2,
  // pizzaCreamColors,
  // pizzaCreamColor,
  // pizzaCreamColor2,
  // setPizzaCreamColor,
  // setPizzaCreamColor2,
  pizzaToppings,
  // pizzaToppings2,
  pizzaSelectedToppings,
  // pizzaSelectedToppings2,
  setPizzaSelectedToppings,
  // setPizzaSelectedToppings2,
  overrideStrings,
  ArrowRenderer,
  ClearIcon,
  ClearSelectedIcon,
  pizzaDescription,
  pizzaDescriptionOnChange,
}) => {
  return (
    <>
      <div className='grid grid-cols-2 gap-x-12 gap-y-8'>
        <div className='col-span-6'>
          <Select
            options={pizzaShares}
            value={pizzaShare}
            onChange={setPizzaShare}
            label={'Número de fatias'}
          />
        </div>
        <div className='col-span-6'>
          <div className='font-medium'>
            <span className='text-sm font-hind text-blue-gray-800'>
              Valor
            </span>
          </div>
          <div className='font-extrabold flex items-center'>
            <span className='text-3xl tracking-tight text-rose-500 font-poppins'>
              {currencyFormatter(price)}
            </span>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-x-10 gap-y-8 pt-8'>
        {/* <div className='col-span-6'>
          <Select
            options={pizzaCakes}
            value={pizzaCake}
            onChange={setPizzaCake}
            label={'Sabor de bolo'}
          />
        </div>
        <div className='col-span-6'>
          <Select
            options={pizzaFodders}
            value={pizzaFodder}
            onChange={setPizzaFodder}
            label={'Alimentação'}
          />
        </div>
        <div className='col-span-6'>
          <Select
            options={pizzaCreamColors}
            value={pizzaCreamColor}
            onChange={setPizzaCreamColor}
            label={'Cor creme'}
          />
        </div> */}
        <div className='col-span-6'>
          <label className='mb-1 block text-sm font-medium text-blue-gray-500 font-hind'>
          Adicionais
          </label>
          <MultiSelect
            options={pizzaToppings}
            hasSelectAll={false}
            value={pizzaSelectedToppings}
            overrideStrings={overrideStrings}
            onChange={setPizzaSelectedToppings}
            ArrowRenderer={ArrowRenderer}
            ClearIcon={ClearIcon}
            ClearSelectedIcon={ClearSelectedIcon}
            labelledBy='Toppings'
            className='text-sm font-hind'
          />
        </div>
      </div>
      {/* <div className='grid grid-cols-12 gap-x-10 gap-y-8 pt-5 border-t-2 border-blue-gray-100 mt-6'>
        <div className='col-span-6'>
          <Select
            options={pizzaCakes}
            value={pizzaCake2}
            onChange={setPizzaCake2}
            label={'Sabor de Bolo 2'}
          />
        </div>
        <div className='col-span-6'>
          <Select
            options={pizzaFodders}
            value={pizzaFodder2}
            onChange={setPizzaFodder2}
            label={'Alimentação 2'}
          />
        </div>
        <div className='col-span-6'>
          <Select
            options={pizzaCreamColors}
            value={pizzaCreamColor2}
            onChange={setPizzaCreamColor2}
            label={'Cor creme 2'}
          />
        </div>
        <div className='col-span-6'>
          <label className='mb-1 block text-sm font-medium text-blue-gray-500 font-hind'>
          Coberturas 2
          </label>
          <MultiSelect
            options={pizzaToppings2}
            hasSelectAll={false}
            value={pizzaSelectedToppings2}
            overrideStrings={overrideStrings}
            onChange={setPizzaSelectedToppings2}
            ArrowRenderer={ArrowRenderer}
            ClearIcon={ClearIcon}
            ClearSelectedIcon={ClearSelectedIcon}
            labelledBy='Coberturas 2'
            className='text-sm font-hind'
          />
        </div>
      </div> */}
      <div className='grid grid-cols-2 gap-x-10 gap-y-8 pt-8'>
        <div className='col-span-2'>
          <label htmlFor='comment' className='sr-only'>
          Descrição
          </label>
          <textarea
            id='description'
            name='description'
            rows={3}
            value={pizzaDescription}
            onChange={pizzaDescriptionOnChange}
            className='shadow-sm block w-full focus:ring-rose-500 focus:border-rose-500 sm:text-sm border-blue-gray-300 rounded-md font-hind'
            placeholder='Adicione uma descrição (sem cebola, sem pimenta... etc)'
          />
        </div>
      </div>
    </>
  );
};

export default PizzaPage;
