import Image from "next/image";
import React from "react";
import { CustomBlueButton } from "@/components/ui/CustomBlueButton";

export default function Home() {
	return (
		<main className='w-full'>
			<div className='flex flex-col md:flex-row items-center '>
				{/* Left Section */}
				<div className='flex flex-col   p-8 md:p-13  lg:p-10 xl:p-24 md:w-1/2 gap-4'>
					<p className='text-5xl  lg:text-3xl md:text-2xl xl:text-5xl font-bold'>
						Strategic CFO Advisory for Business Growth & Financial Success
					</p>
					<p className='text-base'>
						Gain expert financial insights, optimize cash flow, and drive
						profitability with our tailored CFO advisory services
					</p>
					<div className='flex md:flex-wrap lg:flex-nowrap items-center3 gap-4 w-full xl:mb-2 '>
						<CustomBlueButton>Contact us to get started today</CustomBlueButton>

						<div className='flex items-center justify-center space-x-2 min-w-0 '>
							<Image
								src='/services_icon.svg'
								width={30}
								height={60}
								alt='services icon'
                className="xl:w-11 lg:w-9"
							/>
							<p className=' font-normal text-base lg:flex whitespace-nowrap flex-shrink'>
								Explore our services
							</p>
						</div>
					</div>
					<div className='flex flex-wrap gap-4 md:gap-2  xl:gap-4 '>
						<Image
							src='/startup_frame.svg'
							width={90}
							height={20}
							alt='startup_frame'
							className='xl:w-28'
						/>
						<Image
							src='/sme_frame.svg'
							width={90}
							height={20}
							alt='startup_frame'
							className='xl:w-28'
						/>
						<Image
							src='/corporate_frame.svg'
							width={90}
							height={20}
							alt='startup_frame'
							className='xl:w-28'
						/>
						<Image
							src='/sovereigns_frame.svg'
							width={90}
							height={20}
							alt='startup_frame'
							className='xl:w-28'
						/>
						<Image
							src='/individuals_frame.svg'
							width={90}
							height={20}
							alt='startup_frame'
              className='xl:w-28'
						/>
					</div>
				</div>

				{/* Right Section */}
				<div className='md:w-1/2 p-2 flex flex-col  items-start'>
					<Image
						src='/home_advisor.svg'
						width={600}
						height={100}
						alt='stocks image'
					/>{" "}
				</div>
			</div>
		</main>
	);
}
