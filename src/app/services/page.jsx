import React from "react";
import Image from "next/image";
import { CustomBlueButton } from "@/components/ui/CustomBlueButton";


const Services = () => {
	return (
		<main className='w-full'>
			<div className='flex flex-col md:flex-row items-center '>
				{/* Left Section */}
				<div className='flex flex-col   p-8 md:p-13  lg:p-10 xl:p-24 md:w-1/2 gap-4'>
					<p className='text-5xl  lg:text-3xl md:text-2xl font-bold'>
						Strategic CFO Advisory for Business Growth & Financial Success
					</p>
					<p className='text-base'>
						Gain expert financial insights, optimize cash flow, and drive
						profitability with our tailored CFO advisory services
					</p>
					<div className='flex md:flex-wrap lg:flex-nowrap items-center3 gap-4 w-full '>
						<CustomBlueButton>
							Contact us to get started today
						</CustomBlueButton>

						<div className='flex items-center justify-center space-x-2 min-w-0'>
							<Image
								src='/services_icon.svg'
								width={30}
								height={40}
								alt='services icon'
							/>
							<p className=' font-normal text-base lg:flex whitespace-nowrap flex-shrink'>
								Explore our services
							</p>
						</div>
					</div>
                    <div className="flex flex-wrap">
                        
                    </div>
				</div>

				{/* Right Section */}
				<div className='md:w-1/2 p-8'>right section</div>
			</div>
		</main>
	);
};

export default Services;
