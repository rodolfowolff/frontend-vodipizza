import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import Notification from '../notification/notification.component.jsx';
import HeadlineAndProducts from '../headline-and-products/headline-and-products.component.jsx';

import { listSortNewProducts } from '../../redux/reducers/product/product.actions';

const NewProducts = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const dispatch = useDispatch();

  const productSortNew = useSelector((state) => state.productSortNew);
  const { loading, error, products, page, pages } = productSortNew;

  useEffect(() => {
    dispatch(listSortNewProducts('desc', pageNumber));
    if (error) {
      toast(
        <Notification error headline='Erro de carregamento'>
          {error}
        </Notification>
      );
    }
  }, [dispatch, error, pageNumber]);

  return (
    <>
      <HeadlineAndProducts
        tag='#novidades'
        headline='Novos Produtos'
        loading={loading}
        products={products}
        showPagination
        showHeadline
        pages={Math.ceil((pages / 3) * 2)}
        page={page}
        setPageNumber={setPageNumber}
      >
      </HeadlineAndProducts>
    </>
  );
};

export default NewProducts;
