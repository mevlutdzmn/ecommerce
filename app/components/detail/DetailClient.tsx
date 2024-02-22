"use client"

import pageContainer from "../containers/pageContainer";

const DetailClient = ({product}: {product:any}) => {
  return (
    <div>
      <pageContainer>
        {product?.name}
      </pageContainer>
    </div>
  );
}

export default DetailClient;
