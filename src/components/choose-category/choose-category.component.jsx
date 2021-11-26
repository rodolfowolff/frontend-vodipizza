import { Link } from 'react-router-dom';

import { Image } from 'cloudinary-react';

const ChooseCategory = ({ public_id, category, url }) => {
  return (
    <li className='group rounded-lg hover:bg-white hover:shadow-lg hover:border-transparent p-1'>
      <Link to={url} className='space-y-4'>
        <div className='aspect-w-3 aspect-h-2'>
          <Image
            className='object-cover shadow-lg rounded-lg'
            cloudName='dbue8wkkw'
            publicId={public_id}
            loading='lazy'
            width='100%'
            height='100%'
          ></Image>
        </div>

        <div className='space-y-2 '>
          <div className='text-lg text-center leading-6 font-medium space-y-1'>
            <h3 className='text-gray-900 group-hover:underline font-sans text-2xl uppercase tracking-widest'>
              {category}
            </h3>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ChooseCategory;
