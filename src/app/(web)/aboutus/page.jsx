import React from "react";
import Image from "next/image";
import { CustomBlueButton } from "@/components/ui/CustomBlueButton";

const AboutUS = () => {
	return (
		<main>
			<div className='flex flex-col'>
				<div className='flex flex-col items-center space-y-3 mb-10'>
					<span className='text-4xl font-semibold tracking-wide '>
						Welcome to The CFO advisory
					</span>
					<p className=' text-[#5c5c5c] text-sm font-normal max-w-[800px] text-center  text-wrap'>
						We provide strategic financial advisory services to businesses
						requisite to making our clients efficient and profitable global
						businesses.
					</p>
				</div>
				<div className='flex w-full justify-center items-center max-h-[470px] xl:gap-8 gap-3 mb-20 '>
					<div className='shrink '>
						<Image
							src='/end_cfo_group.svg'
							width={200}
							height={10}
							alt='work image'
							className=''
						/>
					</div>

					<div className='shrink'>
						<Image
							src='/full_cfo_group.svg'
							width={800}
							height={90}
							alt='work image'
							className=' shrink'
						/>
					</div>

					<div className='shrink'>
						<Image
							src='/beg_cfo_group.svg'
							width={200}
							height={90}
							alt='work image'
							className='shrink'
						/>
					</div>
				</div>

				<div className='flex items-center w-full xl:px-20 lg:px-10 justify-between mb-20'>
					<div className='flex flex-col  w-1/2 py-4 gap-y-4.5 px-10'>
						<span className=' text-2xl font-semibold'>Our Story</span>
						<p className=' font-semibold '>
							We believe every business deserves access to top-tier financial
							expertise. Frustrated by the hurdles companies face without
							strategic financial guidance, our founders launched [Company Name]
							in [Year] to change the game. Starting from a modest office in
							[City], we built an innovative web app that brings real-time
							financial insights and direct access to seasoned CFOs. Today, we
							empower businesses to make smarter decisions and fuel growth
							through trusted, actionable financial advice.
						</p>
					</div>
					<div className=' bg-amber-50'>
						<Image
							src='/Rectangle 13.svg'
							width={500}
							height={30}
							alt='rectangle'
						/>
					</div>
				</div>
				<div className='flex items-center w-full xl:px-20 lg:px-10 justify-between mb-20'>
					<div className=' bg-amber-200 ml-10 '>
						<Image
							src='/Rectangle 13.svg'
							width={500}
							height={30}
							alt='rectangle'
						/>
					</div>
					<div className='flex flex-col  w-1/3 py-4 gap-y-4.5 '>
						<span className=' text-2xl font-semibold'>Vision & Mission</span>
						<p className=' font-semibold '>
							We believe every business deserves access to top-tier financial
							expertise. Frustrated by the hurdles companies face without
							strategic financial guidance, our founders launched [Company Name]
							in [Year] to change the game. Starting from a modest office in
							[City], we built an innovative web app that brings real-time
							financial insights and direct access to seasoned CFOs. Today, we
							empower businesses to make smarter decisions and fuel growth
							through trusted, actionable financial advice.
						</p>
					</div>
				</div>
				<div className='flex items-center w-full xl:px-20 lg:px-10 justify-between mb-40'>
					<div className='flex flex-col  w-1/2 py-4 gap-y-4.5 px-10'>
						<span className=' text-2xl font-semibold'>Our Story</span>
						<p className=' font-semibold '>
							We believe every business deserves access to top-tier financial
							expertise. Frustrated by the hurdles companies face without
							strategic financial guidance, our founders launched [Company Name]
							in [Year] to change the game. Starting from a modest office in
							[City], we built an innovative web app that brings real-time
							financial insights and direct access to seasoned CFOs. Today, we
							empower businesses to make smarter decisions and fuel growth
							through trusted, actionable financial advice.
						</p>
					</div>
					<div className=' bg-amber-50'>
						<Image
							src='/Rectangle 13.svg'
							width={500}
							height={30}
							alt='rectangle'
						/>
					</div>
				</div>
				<div className='w-full bg-[#E9EEFB]  flex flex-col items-center py-30 mb-8 text-center` '>
					<span className='font-bold text-4xl mb-8'>
						Powering 31,000+ of the best customer experiences
					</span>
                    <CustomBlueButton className="px-20 cursor-pointer">Get started</CustomBlueButton>
				</div>
			</div>
		</main>
	);
};

export default AboutUS;
