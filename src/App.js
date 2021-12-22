import React, { lazy, Suspense, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { refreshToken } from './redux/reducers/user/user.actions';

import LoaderV2 from './components/loader/loader-v2.component.jsx';

import { getCurrentUser } from './redux/reducers/user/user.actions';

const History = lazy(() => import('./pages/user/history.page.jsx'));

const Login = lazy(() => import('./pages/auth/login/login.page.jsx'));
const Home = lazy(() => import('./pages/home/home.page.jsx'));
const Product = lazy(() => import('./pages/product/product.page.jsx'));
const Cart = lazy(() => import('./pages/cart/cart.page.jsx'));

const Header = lazy(() => import('./components/header/header.component.jsx'));
const UserRoute = lazy(() => import('./components/private-routes/user-routes.component.jsx'));
const Footer = lazy(() => import('./components/footer/footer.component.jsx'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(refreshToken());
    // const token = localStorage.getItem('logged');
    // if (token) {
    //   dispatch(getCurrentUser(token));
    // }
  }, [dispatch]);

  return (
    <Suspense fallback={ <LoaderV2 size={ 'h-12 w-12' } color={ 'text-rose-500' } /> }>
      <Header />
      <ToastContainer
        hideProgressBar
        closeButton={ false }
        style={ { width: '25rem', padding: '0px' } }
      />
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/login' component={ Login } />
        {/* <Route exact path='/register' component={ Register } /> */ }
        {/* <Route exact path='/register/finish' component={ FinishRegistration } /> */ }
        {/* <Route exact path='/password/new' component={ ForgotPassword } /> */ }
        {/* <Route exact path='/products' component={ Products } /> */ }
        <Route exact path='/cart' component={ Cart } />
        <Route exact path='/product/:slug' component={ Product } />
        {/* <Route exact path='/categories/:slug' component={ Category } /> */ }
        {/* <UserRoute exact path='/me/delivery' component={ Checkout } /> */ }
        {/* <UserRoute exact path='/me/payment' component={ Payment } /> */ }
        <UserRoute exact path='/me/account' component={ History } />
        {/* <UserRoute exact path='/me/password/update' component={ Password } /> */ }
        {/* <UserRoute exact path='/me/wishlist' component={ WishList } /> */ }

        {/* <Route exact path='/' element={ <Home /> }></Route>
        <Route exact path={ '/login' } element={ <Login /> }></Route>
        <Route exact path={ '/cart' } element={ <Cart /> }></Route>
        <Route exact path={ '/products/:slug' } element={ <Product /> }></Route>
        <UserRoute exact path={ '/me/account' } element={ <History /> }></UserRoute> */}
        {/* <Route exact path={ '/me/account' } element={ <UserRoute component={ History } /> }></Route> */ }
        {/* <Route exact path="/me/account" element={ <UserRoute /> }>
          <Route exact path="/me/account" element={ <History /> } />
        </Route> */}
      </Switch>
      <Footer />
      <ToastContainer />
    </Suspense>
  );
};

export default App;
