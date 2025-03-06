// components/StrategyCard.jsx
import Image from "next/image";

export default function TestimonialCard({ description, name, comment }) {
	return (
		<div className='bg-[#f7f7f7] flex  text-wrap rounded-2xl flex-col  p-4 min-w-[330px] mr-4 '>
			<p className='text-sm mb-5 leading-tight tracking-tight '>
				{description}
			</p>
			<p className='text-sm font-semibold'> {name}</p>
			<p className='text-xs font-normal'>{comment}</p>
		</div>
	);
}
