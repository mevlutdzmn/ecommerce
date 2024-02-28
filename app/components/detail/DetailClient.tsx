"use client"

import Image from "next/image";
import PageContainer from "../containers/PageContainer";

const DetailClient = ({product}: {product:any}) => {
  return (
    <div className="my-10">
      <PageContainer>

        <div className="block  md:flex gap-10 justify-center">
          <div className="relative h-[400px] w-[400px] ">
              <Image src={product.image} fill alt={""}/>
          </div>
          <div className="w-1/2">
            right
          </div>

        </div>
        
      </PageContainer>
    </div>
  );
}

export default DetailClient;
