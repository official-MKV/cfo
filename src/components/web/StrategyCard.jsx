// components/StrategyCard.jsx
import Image from "next/image";

export default function StrategyCard({ imageSrc, title, description }) {
  return (
    <div className='flex flex-col w-full max-w-[300px] gap-y-3 mx-3  '>
      <div>
        <Image
          src={imageSrc}
          width={300}
          height={140}
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