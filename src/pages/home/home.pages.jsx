import Hero from '../../components/hero/hero.component.jsx';
import NewProducts from '../../components/new-products/new-products.component.jsx';

const Home = () => {

  return (
    <>
      <div className='lg:relative'>
        <Hero />
      </div>
      <NewProducts />
    </>
  );
};

export default Home;
