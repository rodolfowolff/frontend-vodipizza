import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import { ShoppingCartIcon, ArrowRightIcon } from '@heroicons/react/solid';
import { HeartIcon } from '@heroicons/react/outline';
// import { toast } from 'react-toastify';

import { ContentState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';

// import SpinSVG from '../../components/spin-svg/spin-svg.component';
// import ProductNoImage from '../../components/product-image/product-no-image.component';
import CustomButton from '../../components/custom-button/custom-button.component.jsx';//
import CustomLink from '../../components/custom-link/custom-link.component';//
import SlideOver from '../../components/slide-over/slide-over.component.jsx';//
import SlideOverCartItem from '../../components/slide-over-cart-item/slide-over-cart-item.component';
import PizzaPage from '../../components/product-types/pizza/pizza-page.component';//
// import Notification from '../../components/notification/notification.component.jsx';
import ProductQuantity from '../../components/product-quantity/product-quantity.component';//

import {
  listProductDetails,
} from '../../redux/reducers/product/product.actions';//
import { addToCart } from '../../redux/reducers/cart/cart.actions';
// import { addProductToWishlist } from '../../redux/reducers/user/user.actions';
// import { ADD_PRODUCT_TO_WISHLIST_RESET } from '../../redux/reducers/user/user.types';

import { MULTISELECT_INTERNATIONALIZATION } from '../../constants/admin.product.constants';//
import { currencyFormatter } from '../../utils/functions';

import { ArrowRenderer, CustomClearIcon } from '../../utils/components';
import ProductCardSkeleton from '../../components/cards/product-card-skeleton.component';
import DescriptionCardSkeleton from '../../components/cards/description-card-skeleton.component';

const Product = () => {
  const [convertedContent, setConvertedContent] = useState(null);
  const params = useParams();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartProducts } = cart;
  const productDetails = useSelector((state) => state.productDetails);
  const { product } = productDetails;
  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;

  // const addToWishlist = useSelector((state) => state.addToWishlist);
  // const {
  //   loading: loadingAddToWishlist,
  //   success: successAddToWishlist,
  //   error: errorAddToWishlist,
  // } = addToWishlist;

  //Product
  const [price, setPrice] = useState(1);
  const [quantity, setQuantity] = useState(1);

  // const cancelButtonRef = useRef();

  //Slide Over
  const [openSlideOver, setOpenSlideOver] = useState(false);

  //Pizza Component State
  const [pizzaShares, setPizzaShares] = useState([]);
  const [pizzaShare, setPizzaShare] = useState(null);
  // const [pizzaCakes, setPizzaCakes] = useState([]);
  // const [pizzaCake, setPizzaCake] = useState(null);
  // const [pizzaCake2, setPizzaCake2] = useState(null);
  // const [pizzaFodders, setPizzaFodders] = useState([]);
  // const [pizzaFodder, setPizzaFodder] = useState(null);
  // const [pizzaFodder2, setPizzaFodder2] = useState(null);
  // const [pizzaCreamColors, setPizzaCreamColors] = useState([]);
  // const [pizzaCreamColor, setPizzaCreamColor] = useState(null);
  // const [pizzaCreamColor2, setPizzaCreamColor2] = useState(null);
  const [pizzaToppings, setPizzaToppings] = useState([]);
  // const [pizzaToppings2, setPizzaToppings2] = useState([]);
  const [pizzaSelectedToppings, setPizzaSelectedToppings] = useState([]);
  // const [pizzaSelectedToppings2, setPizzaSelectedToppings2] = useState([]);
  const [pizzaDescription, setPizzaDescription] = useState('');

  const disableRemainingToppings = (selectedToppings, toppings) => {
    return toppings.map((topping) => {
      const key = Object.keys(topping)[0];
      return (
        (topping.disabled = !selectedToppings.some(
          (selectedTopping) =>
            key in selectedTopping && selectedTopping[key] === topping[key]
        )),
        topping
      );
    });
  };

  const handleAddToCart = () => {
    let cartItem = {
      _id: product._id,
      title: product.title,
      slug: product.slug,
      imageURL: product.images[0].imageURL,
      price,
      category: product.category.name,
      productType: product.productType,
      quantity,
      shipping: product.shipping,
    };

    if (product.productType === 'Pizza') {
      cartItem = {
        ...cartItem,
        share: pizzaShare.name,
        // cake: pizzaCake?.name,
        // fodder: pizzaFodder?.name,
        // creamColor: pizzaCreamColor?.name,
        toppings: pizzaSelectedToppings,
        // cake2: pizzaCake2?.name,
        // fodder2: pizzaFodder2?.name,
        // creamColor2: pizzaCreamColor2?.name,
        // toppings2: pizzaSelectedToppings2,
        description: pizzaDescription,
      };
    }
    dispatch(addToCart(cartItem));
    setOpenSlideOver(true);
  };

  const handleAddToWishlist = () => {
    // dispatch(addProductToWishlist(product?._id));
    console.log('add to wishlist');
  };

  useEffect(() => {
    dispatch(listProductDetails(params.slug));
    if (product.productType === 'Pizza') {
      setPizzaShares([
        ...product.productSpecifics.shares.map((ps) => ({
          ...ps.share,
          price: ps.price,
        })),
      ]);
      // setPizzaCakes([...product?.productSpecifics.cakes]);
      // setPizzaFodders([...product?.productSpecifics.fodders]);
      // setPizzaCreamColors([...product?.productSpecifics.creamColors]);
    }
  }, [
    dispatch,
    params,
    product.productType,
  ]);

  // option dos select de pizza
  useEffect(() => {
    if (product.productType === 'Pizza') {
      if (pizzaShares.length > 0) {
        setPizzaShare(pizzaShares[0]);
      }
      // if (pizzaCakes?.length > 0) {
        // setPizzaCake(pizzaCakes[0]);
        // setPizzaCake2(pizzaCakes[0]);
      // }
      // if (pizzaFodders?.length > 0) {
        // setPizzaFodder(pizzaFodders[0]);
        // setPizzaFodder2(pizzaFodders[0]);
      // }
      // if (pizzaCreamColors?.length > 0) {
      //   setPizzaCreamColor(pizzaCreamColors[0]);
      //   setPizzaCreamColor2(pizzaCreamColors[0]);
      // }
    }
  }, [
    pizzaShares,
    // pizzaCakes,
    // pizzaFodders,
    // pizzaCreamColors,
    product.productType,
  ]);

  useEffect(() => {
    if (product.productType === 'Pizza') {
      pizzaShare ?
      setPrice(Number(pizzaShare.price))
      :
      setPrice(0);
    }
  }, [
    pizzaShare, 
    product
  ]);

  useEffect(() => {
    if (pizzaSelectedToppings.length === 3) {
      setPizzaToppings((previousPizzaToppings) => [
        ...disableRemainingToppings(
          pizzaSelectedToppings,
          previousPizzaToppings
        ),
      ]);
    } else {
      if (product._id && product.productType === 'Pizza') {
        setPizzaToppings([
          ...product.productSpecifics.toppings.map((pt) => ({
            ...pt,
            disabled: false,
          })),
        ]);
      }
    }
    // if (pizzaSelectedToppings2.length === 3) {
    //   setPizzaToppings2((previousPizzaToppings2) => [
    //     ...disableRemainingToppings(
    //       pizzaSelectedToppings2,
    //       previousPizzaToppings2
    //     ),
    //   ]);
    // } else {
    //   if (product?._id && product?.productType === 'Pizza') {
    //     setPizzaToppings2([
    //       ...product?.productSpecifics?.toppings?.map((pt) => ({
    //         ...pt,
    //         disabled: false,
    //       })),
    //     ]);
    //   }
    // }
  }, [
    pizzaSelectedToppings,
    // pizzaSelectedToppings2,
    product,
  ]);

  useEffect(() => {
    if (product._id) {
      const blocksFromHtml = htmlToDraft(product.description);
      const { contentBlocks, entityMap } = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(
        contentBlocks,
        entityMap
      );
      const currentContentAsHTML = convertToHTML(contentState);
      setConvertedContent(currentContentAsHTML);
    }
  }, [
    product
  ]);

  // useEffect(() => {
  //   if (successAddToWishlist) {
  //     toast(
  //       <Notification success headline='❤'>
  //         O produto foi adicionado à sua lista de desejos!
  //       </Notification>
  //     );
  //     // dispatch({ type: ADD_PRODUCT_TO_WISHLIST_RESET });
  //     dispatch(console.log('ADD_PRODUCT_TO_WISHLIST_RESET'));
  //   }
  //   if (errorAddToWishlist) {
  //     toast(
  //       <Notification error headline='Error'>
  //         Ocorreu um erro. Tente novamente!
  //       </Notification>
  //     );
  //   }
  // }, [dispatch, successAddToWishlist, errorAddToWishlist]);

  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  return (
    <>
      <div className='relative'>
        <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:items-start'>
          <div className='relative'>
            <div
              aria-hidden='true'
              className='hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen'
            >
              <div className='absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72' />
              </div>
              <div className='relative mx-auto max-w-full px-4 sm:max-w-md md:max-w-2xl sm:px-6 lg:px-4 lg:max-w-none lg:py-20'>
                {product ? (
                  <Carousel
                    showArrows={false}
                    showStatus={false}
                    showIndicators={false}
                    infiniteLoop={false}
                  >
                    {product.images ? product.images .map((image) => (
                      <img
                        src={image.imageURL}
                        key={image.public_id}
                        alt={image.public_id}
                      />
                    )) : null}
                  </Carousel>
                ) : (
                  <ProductCardSkeleton />
                )
                }
              </div>
            </div>


            {product.title ? 
          (
              <div className='relative mx-auto max-w-sm px-4 md:max-w-2xl sm:px-6 lg:px-0'>
              {/* Description area */}
              <div className='pt-12 sm:pt-16 lg:pt-20'>
                <h2 className='text-4xl text-blue-gray-800 font-extrabold font-hind tracking-tight sm:text-5xl'>
                  {product.title}
                </h2>
                <h2 className='mt-4 text-2xl text-rose-500 font-extrabold font-poppins tracking-tight sm:text-3xl'>
                {currencyFormatter(price)}
                </h2>
                <div
                  className='mt-6 text-blue-gray-500 font-hind space-y-6'
                  dangerouslySetInnerHTML={createMarkup(convertedContent)}
                ></div>
              </div>
                
              {/* Specifics section */}
              <div className='mt-10'>
                {product.productType === 'Pizza' && (
                  <PizzaPage
                    pizzaShares={pizzaShares}
                    pizzaShare={pizzaShare}
                    setPizzaShare={setPizzaShare}
                    price={price}
                    // pizzaCakes={pizzaCakes}
                    // pizzaCake={pizzaCake}
                    // pizzaCake2={pizzaCake2}
                    // setPizzaCake={setPizzaCake}
                    // setPizzaCake2={setPizzaCake2}
                    // pizzaFodders={pizzaFodders}
                    // pizzaFodder={pizzaFodder}
                    // pizzaFodder2={pizzaFodder2}
                    // setPizzaFodder={setPizzaFodder}
                    // setPizzaFodder2={setPizzaFodder2}
                    // pizzaCreamColors={pizzaCreamColors}
                    // pizzaCreamColor={pizzaCreamColor}
                    // pizzaCreamColor2={pizzaCreamColor2}
                    // setPizzaCreamColor={setPizzaCreamColor}
                    // setPizzaCreamColor2={setPizzaCreamColor2}
                    pizzaToppings={pizzaToppings}
                    // pizzaToppings2={pizzaToppings2}
                    pizzaSelectedToppings={pizzaSelectedToppings}
                    // pizzaSelectedToppings2={pizzaSelectedToppings2}
                    // setPizzaSelectedToppings={setPizzaSelectedToppings}
                    // setPizzaSelectedToppings2={setPizzaSelectedToppings2}
                    overrideStrings={MULTISELECT_INTERNATIONALIZATION}
                    ArrowRenderer={ArrowRenderer}
                    ClearIcon={<CustomClearIcon />}
                    ClearSelectedIcon={<CustomClearIcon />}
                    pizzaDescription={pizzaDescription}
                    pizzaDescriptionOnChange={(e) =>
                      setPizzaDescription(e.target.value)
                    }
                  />
                )}
  
                <ProductQuantity quantity={quantity} setQuantity={setQuantity} />
                  
                <div className='mt-9 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense'>
                  <CustomButton
                    type='button'
                    onClick={handleAddToCart}
                    customStyles='w-full inline-flex text-base border border-transparent px-6 py-6 text-white bg-rose-500 hover:bg-rose-600 focus:outline-none sm:col-start-1 sm:text-sm'
                  >
                    <ShoppingCartIcon
                      className='-ml-1 mr-3 h-5 w-5'
                      aria-hidden='true'
                    />
                    Adicionar ao carrinho
                  </CustomButton>
                  <CustomButton
                    type='button'
                    onClick={handleAddToWishlist}
                    customStyles='mt-3 w-full inline-flex text-base border border-blue-gray-400 py-6 text-blue-gray-500 bg-white hover:bg-blue-gray-100 focus:outline-none sm:mt-0 sm:col-start-2 sm:text-sm'
                  >
                    {/* {loadingAddToWishlist ? (
                      <SpinSVG
                        size={'h-5 w-5'}
                        color={'text-blue-gray-800'}
                        className={'-ml-1 mr-3'}
                      />
                    ) :  */}
                    {/* ( */}
                      <HeartIcon
                        className='-ml-1 mr-3 h-5 w-5'
                        aria-hidden='true'
                      />
                    {/* ) */}
                    {/* } */}
                    Adicionar ao favoritos
                  </CustomButton>
                </div>
              </div>
            </div>
          )            
          : (
            <DescriptionCardSkeleton />
          )
          }

        </div>
      </div>
      <SlideOver
        title={'Meu carrinho'}
        open={openSlideOver}
        setOpen={setOpenSlideOver}
        showStickyFooter={true}
        button2={
          <CustomLink
            url='/cart'
            type='link-button'
            custom='w-full text-base justify-between px-4 py-4 text-white bg-rose-500 hover:bg-rose-600 sm:col-start-1 sm:text-sm uppercase col-span-2'
          >
            Ver meu carrinho
            <ArrowRightIcon className='ml-3 -mr-1 h-5 w-5' aria-hidden='true' />
          </CustomLink>
        }
      >
        <SlideOverCartItem cartProducts={cartProducts} />
      </SlideOver>
    </>
  );
};

export default Product;
