// components/StrategyCard.jsx
import Image from "next/image";

export default function ServicesCard({ imageSrc, title, description }) {
  return (
    <div className='flex flex-col  max-w-[400px] gap-y-2  flex-wrap lg:max-w-[300px] xl:max-w-[450px] sm:max-w-full'>
      <div>
        <Image
          src={imageSrc}
          width={30}
          height={30}
          alt={title}
        />
      </div>
      <p className="text-sm font-medium leading-snug">
        {title}
      </p>
      <p className="text-[#5c5c5c] text-sm  font-normal">
        {description}
      </p>
    </div>
  );
}