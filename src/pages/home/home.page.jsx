import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { getCategories } from '../../redux/reducers/category/category.actions';

import Hero from '../../components/hero/hero.component.jsx';
import NewProducts from '../../components/new-products/new-products.component.jsx';
import Notification from '../../components/notification/notification.component.jsx';
import Loader from '../../components/loader/loader.component';
import SectionHeadline from '../../components/section-headline/section-headline.component.jsx';
import ChooseCategory from '../../components/choose-category/choose-category.component.jsx';

const Home = () => {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categoryList);
  const { loading, error, categories } = categoryList;

  useEffect(() => {
    dispatch(getCategories());
    if (error) {
      toast(
        <Notification error headline='Erro de carregamento'>
          {error}
        </Notification>
      );
    }
  }, [dispatch, error]);

  return (
    <>
      <div className='lg:relative max-w-screen-xl mx-auto'>
        <Hero />
      </div>
      <NewProducts />
      <div className='bg-white'>
        <div className='mx-auto py-12 px-4 max-w-screen-xl sm:px-6 lg:px-8 lg:py-24'>
          <div className='space-y-12'>
            <div className='mx-auto space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
              <SectionHeadline
                tag={'#CATEGORIAS'}
                headline={'Qual categoria é a certa para você?'}
              ></SectionHeadline>
            </div>
            {loading && (
              <div className='mt-2 sm:mx-auto sm:w-full sm:max-w-md'>
                <div className='py-8 px-4 flex justify-center sm:px-10'>
                  <Loader height='h-24' width='h-24' />
                </div>
              </div>
            )}
            {categories.length > 0 && (
              <ul className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8'>
                {categories.map((category) => (
                  <ChooseCategory
                    key={category.id + category.name}
                    public_id={`/${category.name}`}
                    category={category.name}
                    url={`/categories/${category.slug}`}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
