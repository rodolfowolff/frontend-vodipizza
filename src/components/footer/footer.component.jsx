import Logo from '../../assets/images/vo_di_pizza_logo.png';

const navigation = {
  company: [
    { name: 'Termos e Política de Privacidade', href: '#' },
    { name: 'Entrega', href: '#' },
    { name: 'Pagamento', href: '#' },
  ],
  help: [
    { name: 'FAQ', href: '#' },
    { name: 'Contato', href: '#' },
    { name: 'Como fazer um pedido', href: '#' },
  ],
  products: [
    { name: 'Pizzas Salgadas', href: '#' },
    { name: 'Pizzas Doces', href: '#' },
    { name: 'Outros', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/',
      icon: (props) => (
      <svg fill='currentColor' viewBox='0 0 50 50' {...props}> 
        <path 
          d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"
        />
      </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/',
      icon: (props) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path
            fillRule='evenodd'
            d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
  ],
};

const Footer = () => {
  return (
    <footer className='bg-white' aria-labelledby='footerHeading'>
      <h2 id='footerHeading' className='sr-only'>
        Rodapé
      </h2>
      <div className='grid justify-center px-10'>
        <div className='xl:grid xl:grid-cols-4 lg:gap-16 xl:gap-9 xl:ml-16'>
          <div className='mt-12 grid grid-cols-2 gap-9 lg:mt-0 sm:col-span-3 md:grid-cols-3 md:justify-items-center font-hind '>
            <div className='md:grid md:gap-20'>
              <div>
                <h3 className='text-sm font-bold text-orange-600 tracking-widest uppercase'>
                  Vo Di Pizza
                </h3>
                <ul className='mt-4 space-y-4'>
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-base text-blue-gray-500 hover:text-blue-gray-800'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              </div>
              <div className='md:grid md:gap-9'>
              <div>
              {/* <div className='mt-12 md:mt-0'> */}
                <h3 className='text-sm font-bold text-orange-600 tracking-widest uppercase'>
                Ajuda
                </h3>
                <ul className='mt-4 space-y-4'>
                  {navigation.help.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-base text-blue-gray-500 hover:text-blue-gray-800'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              </div>
            <div className='md:grid md:gap-9'>
              <div>
                <h3 className='text-sm font-bold text-orange-600 tracking-widest uppercase'>
                  Nossos produtos
                </h3>
                <ul className='mt-4 space-y-4'>
                  {navigation.products.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-base text-blue-gray-500 hover:text-blue-gray-800'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className='grid justify-center justify-items-center space-y-8 xl:col-span-1 mt-7 md:mt-12 xl:mt-0 mx-auto'>
            <img className='h-10' src={Logo} alt='Vo Di Pizza Logo' />
            <p className='text-blue-gray-500 text-base'>
              Somos especializados em pizzas.
            </p>
            <div className='flex space-x-6'>
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank" 
                  rel="noreferrer"
                  className='text-gray-400 hover:text-gray-500'
                >
                  <span className='sr-only'>{item.name}</span>
                  <item.icon className='h-6 w-6' aria-hidden='true' />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className='text-center mt-12 border-t border-blue-gray-200 pt-8'>
          <p className='text-base text-blue-gray-400 xl:text-center font-hind'>
            &copy; {new Date().getFullYear()} Vo di Pizza.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
