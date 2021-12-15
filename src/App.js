import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoaderV2 from './components/loader/loader-v2.component.jsx';

import { getCurrentUser } from './redux/reducers/user/user.actions';

const History = lazy(() => import('./pages/user/history.page.jsx'));

const Login = lazy(() => import('./pages/auth/login/login.page.jsx'));
const Home = lazy(() => import('./pages/home/home.page.jsx'));
const Product = lazy(() => import('./pages/product/product.page.jsx'));

const Header = lazy(() => import('./components/header/header.component.jsx'));
const UserRoute = lazy(() =>
  import('./components/private-routes/user-routes.component.jsx')
);
const Footer = lazy(() => import('./components/footer/footer.component.jsx'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(getCurrentUser(token));
    } else {
      dispatch(getCurrentUser(null));
    }
  }, [dispatch]);

  return (
    <Suspense fallback={ <LoaderV2 size={ 'h-12 w-12' } color={ 'text-rose-500' } /> }>
      <Header />
      <ToastContainer
        hideProgressBar
        closeButton={ false }
        style={ { width: '25rem', padding: '0px' } }
      />
      <Routes>
        <Route exact path='/' element={ <Home /> }></Route>
        <Route exact path={ '/login' } element={ <Login /> }></Route>
        <Route exact path={ '/products/:slug' } element={ <Product /> }></Route>
        <Route element={ <UserRoute /> }>
          <Route path="/me/account" element={ <History /> } />
        </Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </Suspense>
  );
};

export default App;
