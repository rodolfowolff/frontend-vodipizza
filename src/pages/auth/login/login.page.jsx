import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import {
  SIGN_UP_LINK_ON_SIGN_IN_PAGE,
  SIGN_IN_PAGE,
  // FORGOT_YOUR_PASSWORD,
  SIGN_IN_PAGE_BUTTON_SUBMIT,
  // SIGN_IN_PAGE_CONNECT_WITH_GOOGLE,
} from '../../../constants/auth.constants';

import { login } from '../../../redux/reducers/user/user.actions';

import Logo from '../../../assets/images/vo_di_pizza_logo.png';
// import { ReactComponent as Google } from '../../../assets/images/icons8-google.svg';

import FormInput from '../../../components/form-input/form-input.component.jsx';
import Notification from '../../../components/notification/notification.component.jsx';
import CustomButton from '../../../components/custom-button/custom-button.component.jsx';

const Login = ({ history }) => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);

  console.log('userLogin', userLogin);

  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    const roleBasedRedirect = () => {
      const intendedRoute = history.location.state;
      if (intendedRoute) {
        return intendedRoute.from;
      } else {
        if (userInfo.role === 'admin') {
          return '/admin/dashboard';
        } else {
          return '/me/account';
        }
      }
    };

    if (error) {
      // toast(
        return toast.error(
          error.message || 'Something went wrong. Please try again later.'
        );
        // <Notification error headline='Erro de login'>
        //   {error}
        // </Notification>
      // );
    } 
    // else {
      if (userInfo) {
        history.push(roleBasedRedirect());
      }
    // }
  }, [history, userInfo, error]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = handleSubmit(async ({ email, password }) => {
    dispatch(login(email, password));
  });

  // const handleGoogleLogin = () => {
  //   dispatch(loginWithGoogle());
  // };

  return (
    <div className='max-h-5/6 bg-blue-gray-50 flex flex-col justify-center py-6 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <img className='mx-auto h-12 w-auto' src={Logo} alt='Vo di pizza logo' />
        <h2 className='mt-6 text-center text-3xl font-hind font-extrabold text-blue-gray-900'>
          {SIGN_IN_PAGE}
        </h2>
      </div>

      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          <form className='space-y-6' onSubmit={onSubmit}>
            <FormInput
              id='email'
              name='email'
              type='email'
              label='email'
              labelText='Endereço de e-mail'
              autoComplete='email'
              register={register('email', {
                required: 'Digite um endereço de e-mail',
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: 'Digite um endereço de e-mail válido',
                },
              })}
              placeholder='digiteseumail@email.com'
              error={errors.email ? errors.email.message : null}
            />

            <FormInput
              id='password'
              name='password'
              type={showPassword ? 'text' : 'password'}
              autoComplete='current-password'
              labelText='Senha'
              label='password'
              placeholder='********'
              register={register('password', {
                required: 'Insira uma senha',
              })}
              showPassword={showPassword}
              togglePassword={togglePassword}
              error={errors.password ? errors.password.message : null}
              passwordEyeIcon
            />

            {/* <div className='flex items-center justify-end'>
              <div className='text-sm'>
                <Link
                  to='/password/new'
                  className='font-medium text-rose-600 hover:text-rose-500'
                >
                  {FORGOT_YOUR_PASSWORD}
                </Link>
              </div>
            </div> */}

            <div>
              <CustomButton
                type='submit'
                loading={loading}
                customStyles='border border-transparent text-white bg-rose-600 hover:bg-rose-500'
              >
                {SIGN_IN_PAGE_BUTTON_SUBMIT}
              </CustomButton>
            </div>
            {/* <div className='mt-6'>
              <div className='relative'>
                <div className='absolute inset-0 flex items-center'>
                  <div className='w-full border-t border-blue-gray-300' />
                </div>
                <div className='relative flex justify-center text-sm'>
                  <span className='px-2 bg-white text-blue-gray-500'>
                    Ou se connecter avec
                  </span>
                </div>
              </div>
              <div className='mt-6'>
                <CustomButton
                  type='button'
                  onClick={handleGoogleLogin}
                  customStyles='inline-flex items-center border border-blue-gray-300 text-blue-gray-800 bg-white hover:bg-blue-gray-50'
                >
                  <Google className='-ml-1 mr-2 h-6 w-6' aria-hidden='true' />
                  {SIGN_IN_PAGE_CONNECT_WITH_GOOGLE}
                </CustomButton>
              </div>
            </div> */}
          </form>
          <p className='mt-5 text-center text-base font-hind text-blue-gray-600'>
          Ou{' '}
          <Link
            to='/register'
            className='font-medium text-rose-600 hover:text-rose-500'
          >
            {SIGN_UP_LINK_ON_SIGN_IN_PAGE}
          </Link>
        </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
