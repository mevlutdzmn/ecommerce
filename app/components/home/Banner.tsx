import Image from "next/image"
const Banner = () => {
  return (
    <div className="h-[237pxs] bg-black flex items-center justify-center">
      <div className="h-[137px] relative w-full">
            <Image fill src={"/d.webp"} alt=""/>
      </div>
    </div>
  );
}

export default Banner;
