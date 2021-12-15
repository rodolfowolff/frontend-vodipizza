import React from 'react';

const ProductCardSkeleton = () => {
  return (
    <div className='mt-20 space-y-2'>
      <div className='animate-pulse'>
        {/* Fundo titulo */}
        <div className='bg-gray-100 p-1 rounded-lg shadow-lg'>
          {/* titulo */}
        <div className='flex-1 space-y-3 p-2'>
             <div className='space-y-1'>
               <div className='h-12 bg-gray-200 rounded'></div>
              </div>
            </div>
        </div>
        <div className='px-4 mt-4'>
          {/* Fundo Valor */}
          <div className='bg-gray-100 p-4 rounded-lg shadow-lg'>
           {/* Valor */}
            <div className='flex-1 space-y-3 py-1'>
             <div className='space-y-1'>
               <div className='h-6 bg-gray-200 rounded'></div>
              </div>
            </div>
            </div>
          {/* Fundo Descrição */}
          <div className='bg-gray-100 p-6 rounded-lg shadow-lg mt-4'>
          {/* Descrição */}
            <div className='flex-1 space-y-3 py-1'>
             <div className='space-y-1'>
               <div className='h-4 bg-gray-200 rounded'></div>
               <div className='h-4 bg-gray-200 rounded mt-4'></div>
               <div className='h-4 bg-gray-200 rounded mt-4'></div>
               <div className='h-4 bg-gray-200 rounded mt-4'></div>
               <div className='h-4 bg-gray-200 rounded mt-4'></div>
               <div className='h-4 bg-gray-200 rounded mt-4'></div>
               <div className='h-4 bg-gray-200 rounded mt-4'></div>
              </div>
            </div>
         </div> 
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
