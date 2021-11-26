import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoaderV2 from './components/loader/loader-v2.component.jsx';

const Home = lazy(() => import('./pages/home/home.pages'));
const Header = lazy(() => import('./components/header/header.component.jsx'));
const Footer = lazy(() => import('./components/footer/footer.component.jsx'));

const App = () => {
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
      </Routes>
      <Footer />
      <ToastContainer />
    </Suspense>
  );
};

export default App;
