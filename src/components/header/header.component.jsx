import React from 'react';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Logo from '../../assets/images/vo_di_pizza_logo.png';

import { MENU_HEADER_LINKS } from '../../constants/menu.constants';
import { SIGN_IN_BUTTON_HEADER } from '../../constants/auth.constants';

import CustomLink from '../custom-link/custom-link.component.jsx';

const Header = () => {
  const history = useNavigate();

  const logoutHandler = () => {
    history.push('/');
  };
  return (
    <Disclosure as='nav' className='bg-white shadow '>
      {({ open }) => (
        <>
          <>
            <div className='max-w-screen-xl mx-auto px-2 sm:px-4 lg:px-8'>
              <div className='flex justify-between h-16'>
                <div className='flex px-2 lg:px-0'>
                  <div className='flex-shrink-0 flex items-center'>
                    <Link to='/'>
                      <img
                        className='block lg:hidden h-9 w-auto'
                        src={Logo}
                        alt='Vo di pizza logo'
                      />
                      <img
                        className='hidden lg:block h-9 w-auto'
                        src={Logo}
                        alt='Vo di pizza logo'
                      />
                    </Link>
                  </div>
                  <div className='hidden lg:ml-6 lg:flex lg:space-x-8 c'>
                    {MENU_HEADER_LINKS.map((link) => {
                      const { id, text, url } = link;
                      return (
                        <CustomLink key={id + url} url={url} type='nav'>
                          {text}
                        </CustomLink>
                      );
                    })}
                  </div>
                </div>
                <div className='flex items-center lg:hidden'>
                  <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-blue-gray-400 hover:text-blue-gray-500 hover:bg-blue-gray-100 focus:outline-none'>
                    <span className='sr-only'>Abra o menu principal</span>
                    {open ? (
                      <XIcon className='block h-7 w-7' aria-hidden='true' />
                    ) : (
                      <MenuIcon className='block h-7 w-7' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </div>
                <div className='hidden lg:ml-4 lg:flex lg:items-center'>
                  <Link
                    to={'/cart'}
                    className='inline-block relative flex-shrink-0 bg-white p-1 text-blue-gray-400 rounded-full hover:text-blue-gray-500'
                  >
                    <span className='sr-only'>Seu carrinho</span>
                    <ShoppingCartIcon className='h-7 w-7' aria-hidden='true' />
                  </Link>
                    <CustomLink
                      url='/login'
                      type='link-button'
                      custom='ml-5 px-4 py-2  text-base font-medium text-white bg-orange-600 hover:bg-orange-500'
                    >
                      {SIGN_IN_BUTTON_HEADER}
                    </CustomLink>
                </div>
              </div>
            </div>
            <Disclosure.Panel className='lg:hidden'>
              <div className='pt-2 pb-3 space-y-1 capitalize'>
                {MENU_HEADER_LINKS.map((link) => {
                  const { id, text, url } = link;
                  return (
                    <CustomLink key={id + text} url={url} type='mobile'>
                      {text}
                    </CustomLink>
                  );
                })}
              </div>
              <div className='flex justify-evenly pt-4 pb-3 border-t border-gray-200'>
                <div className='flex items-center px-4'>
                  <Link
                    to={'/cart'}
                    className='ml-auto flex-shrink-0 bg-white p-1 text-blue-gray-400 rounded-full hover:text-blue-gray-500'
                  >
                    <span className='sr-only'>Seu carrinho</span>
                    <ShoppingCartIcon className='h-7 w-7' aria-hidden='true' />
                  </Link>
                </div>
                <div className='space-y-1'>
                  <CustomLink
                    type='button'
                    role='menuitem'
                    onClick={logoutHandler}
                    custom='w-full flex px-8 py-3 rounded-full text-base font-medium text-white bg-orange-600 hover:bg-orange-500 md:py-4 md:text-lg md:px-10'
                  >
                    Sair
                  </CustomLink>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        </>
      )}
      
    </Disclosure>
  );
}
export default Header;
