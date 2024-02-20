// ProductCard.tsx
import Image from 'next/image';
import React from 'react';

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className='w-[250px] shadow-lg p-2'>
      <div className='relative h-[200px]'>
        <Image src={product.image} alt="" className='object-contain' width={250} height={200} />
      </div>
    </div>
  );
}

export default ProductCard;

