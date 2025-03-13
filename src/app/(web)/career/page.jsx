"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CustomBlueButton } from "@/components/ui/CustomBlueButton";

const Career = () => {
	return (
		<main className='scroll-smooth'>
			<div className='flex flex-col items-center w-full py-15 px-20 '>
				<div className='flex  items-center w-full mb-26 lg:gap-3'>
					<div className='flex flex-col w-1/2 py-4'>
						<div className='xl:w-[450px] lg:[300px]'>
							<p className='font-bold text-[40px]  tracking-wide mb-2.5 text-wrap leading-12'>
								Join Our Elite Team of Financial Experts
							</p>
							<p className='text-base font-normal tracking-tight mb-6'>
								Empowering businesses with strategic financial insight become a
								part of our innovative team.
							</p>
							<div className=''>
								<Link href='/career/applynow'>
									<CustomBlueButton className='px-20 sm:px-16 '>
										Apply Now
									</CustomBlueButton>
								</Link>
							</div>
						</div>
					</div>
					<div className='w-1/2 '>
						<Image
							src='/cfo_work.svg'
							width={1205}
							height={305}
							alt='People working frame'
							className='w-full'
						/>
					</div>
				</div>
			</div>

			<div className='flex xl:gap-60 mx-10 p-8 bg-[#FAFAFA] rounded-xl mb-25'>
				<div className='flex flex-col  space-y-2 xl:w-[300px] lg:w-[200px]'>
					<Image
						src='/work_with_us_frame.svg'
						width={70}
						height={40}
						alt='our services'
						className='xl:w-30 sm:w-30 lg:w-30'
					/>
					<p className='font-semibold text-3xl'>At our CFO</p>
					<p className='text-sm font-normal text-wrap text-[#5c5c5c] '>
						Working at our CFO advisory firm is rewarding. We collaborate with
						clients to create customized financial strategies that tackle their
						challenges. Our team shares insights and supports each other,
						contributing to our clients' 
					</p>
				</div>
				<div className='flex flex-1 gap-4 '>
					<div className='flex flex-col xl:w-[400px] lg:w[220px] space-y-2'>
						<Image
							src='/speed_icon.svg'
							width={40}
							height={30}
							alt='spped icon'
						/>
						<span className='text-[#121212] text-base font-medium leading-snug'>
							We are result oriented
						</span>
						<p className='text-[#5c5c5c] text-sm  font-normal'>
							We specialize in goal-driven financial strategies using data
							analysis to enhance risk management. Our services include tailored
							budgeting, smart investment diversification, and effective risk
							mitigation, all designed to achieve your financial objectives.
						</p>
					</div>
					<div className='flex flex-col xl:w-[400px] lg:w[220px] space-y-2'>
						<Image
							src='/stickman_icon.svg'
							width={40}
							height={30}
							alt='stickman icon'
						/>
						<span className='text-[#121212] text-base font-medium leading-snug'>
							We value transparency and collaboration
						</span>
						<p className='text-[#5c5c5c] text-sm  font-normal'>
							We succeed as a united team, sharing knowledge and supporting one
							another. Each member brings unique skills, fostering
							collaboration. We take pride in our work and trust everyone to
							give their best, even without supervision, creating a culture of
							excellence and respect.
						</p>
					</div>
				</div>
			</div>

			<div className='flex items-center place-content-center mb-24'>
				<div className='flex flex-col  space-y-2 xl:-w-[300px] lg:w-[300px] '>
					<Image
						src='/work_with_us_frame.svg'
						width={70}
						height={40}
						alt='our services'
						className='xl:w-30 sm:w-30 lg:w-30'
					/>
					<p className='font-semibold text-3xl'>Why should you apply</p>
					<p className='text-sm font-normal text-wrap text-[#5c5c5c] '>
						Working at our CFO advisory firm is rewarding. We collaborate with
						clients to create customized financial strategies that tackle their
						challenges. Our team shares insights and supports each other,
						contributing to our clients'	
					</p>
				</div>
			</div>
			<div className='flex place-content-center mb-16'>
				<span className='text-[#121212] text-[32px] font-semibold  tracking-wide'>
					Go from candidate to colleague in just a few steps
				</span>
			</div>
			<div className='flex flex-col items-center w-full py-15 px-20 '>
				<div className='flex  items-center w-full mb-26'>
					<div className='flex flex-col w-1/2 py-4 space-y-10'>
						<div className='flex items-center '>
							<div className='mr-4'>
								<Image src='/1_icon.svg' width={50} height={50} alt='1 icon' />
							</div>
							<div className='flex flex-col'>
								<span className='text-2xl font-semibold tracking-wide'>
									Apply
								</span>
								<span className='text-[#575757] text-base font-normal  tracking-tight'>
									Click “Apply” and submit relevant information
								</span>
							</div>
						</div>
						<div className='flex items-center'>
							<div className='mr-4'>
								<Image src='/2_icon.svg' width={50} height={50} alt='2 icon' />
							</div>
							<div className='flex flex-col'>
								<span className='text-2xl font-semibold tracking-wide'>
									Review
								</span>
								<span className='text-[#575757] text-base font-normal  tracking-tight'>
									Our team review your submission
								</span>
							</div>
						</div>
						<div className='flex items-center'>
							<div className='mr-4'>
								<Image src='/2_icon.svg' width={50} height={50} alt='1 icon' />
							</div>
							<div className='flex flex-col'>
								<span className='text-2xl font-semibold tracking-wide'>
									Join Us
								</span>
								<span className='text-[#575757] text-base font-normal  tracking-tight'>
									If you are accepted a link will be sent to your mail to
									onboard you
								</span>
							</div>
						</div>
					</div>
					<div className='w-1/2 '>
						<Image
							src='/cfo_work.svg'
							width={1205}
							height={305}
							alt='People working frame'
							className='w-full'
						/>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Career;
