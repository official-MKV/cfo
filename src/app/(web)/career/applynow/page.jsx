"use client";
import React from "react";
import { useState } from "react";
import { CustomBlueButton } from "@/components/ui/CustomBlueButton";
import Image from "next/image";
import Link from "next/link";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const ApplyNow = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const totalSteps = 5; // Total number of steps in your form
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [showSuccessNotification, setShowSuccessNotification] = useState(false);

	const handleBack = () => {
		if (currentStep > 1) {
			setCurrentStep(currentStep - 1);
		}
		// For step 1, the back button will use Link component (see JSX)
	};

	const handleNext = () => {
		if (currentStep < totalSteps) {
			setCurrentStep(currentStep + 1);
		} else {
			// Handle form submission
			alert("Form submitted successfully!");
			// Form submission will redirect using Link component
		}
	};
	const handleSubmit = () => {
		// Show the success notification
		setShowSuccessNotification(true);
		// Show the success page
		setFormSubmitted(true);
		
		// You can optionally make this notification disappear after some time
		setTimeout(() => {
			setShowSuccessNotification(false);
		}, 5000);
	};

	return (
		<div className='min-h-screen  py-12'>
			<div className='flex items-center mb-6 pl-24'>
				{currentStep === 1 ? (
					<Link href='/career' className='text-gray-600 mr-2 flex items-center'>
						<Image src='/left_arrow.svg' width={30} height={30} alt='arrow' />
					</Link>
				) : (
					<button onClick={handleBack} className='text-gray-600 mr-2'>
						<Image src='/left_arrow.svg' width={30} height={30} alt='arrow' />
					</button>
				)}
				<div className='flex items-center'>
					<span className='text-xl text-[#575757] font-medium tracking-tight '>
						Career
					</span>
					<span className='mx-2 '>|</span>
					<span className=' text-[#121212] text-xl font-mediumtracking-tight'>
						Apply to be a financial expert
					</span>
				</div>
			</div>
			<div className='bg-white rounded-lg w-full max-w-3xl p-8 mx-auto '>
				{/* Progress bar */}
				<div className='flex gap-1 mb-8'>
					{Array.from({ length: totalSteps }).map((_, index) => (
						<div
							key={index}
							className={`h-2 rounded flex-1 transition-all ${
								index + 1 <= currentStep ? "bg-[#2054d2]" : "bg-[#c7d4f4]"
							}`}
						/>
					))}
				</div>

				{/* Form Steps */}
				{currentStep === 1 && (
					<div>
						<div className='flex justify-center mb-6  '>
							<div className='flex items-center space-x-2'>
								<Image
									src='/user_icon.svg'
									width={30}
									height={30}
									alt='user icon'
								/>
								<span className='font-medium leading-tight'>
									Personal Information
								</span>
							</div>
						</div>

						<div className='space-y-4'>
							<div>
								<label className='  mb-1 text-[#697386] text-sm font-semibold'>
									Full name
								</label>
								<input
									type='text'
									placeholder='Enter fullname'
									className='w-full border hover:border-gray-300 shadow-[0px_1px_2px_0px_#E3E8EE] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 '
								/>
							</div>
							<div>
								<label className='text-[#697386] text-sm font-semibold mb-1'>
									Email Address
								</label>
								<input
									type='email'
									placeholder='example@gmail.com'
									className='w-full border hover:border-gray-300 shadow-[0px_1px_2px_0px_#E3E8EE] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300'
								/>
							</div>
							<div>
								<label className='block text-gray-600 mb-1'>Phone Number</label>
								<input
									type='tel'
									placeholder='000-000-0000'
									className='w-full border hover:border-gray-300 shadow-[0px_1px_2px_0px_#E3E8EE] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300'
								/>
							</div>
							<div>
								<label className='block text-gray-600 mb-1'>
									LinkedIn Profile
								</label>
								<input
									type='url'
									placeholder='Enter linkedin profile link'
									className='w-full border hover:border-gray-300 shadow-[0px_1px_2px_0px_#E3E8EE] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300'
								/>
							</div>
						</div>
					</div>
				)}

				{currentStep === 2 && (
					<div>
						<div className='flex justify-center mb-6'>
							<div className='flex items-center space-x-2'>
								<Image
									src='/luggage_icon.svg'
									width={30}
									height={30}
									alt='user icon'
								/>

								<span className='font-medium leading-tight'>
									Professional Information
								</span>
							</div>
						</div>

						<div className='space-y-4'>
							<div>
								<label className='block text-gray-600 mb-1'>
									Current work position
								</label>
								<input
									type='text'
									placeholder='Current work position'
									className='w-full border hover:border-gray-300 shadow-[0px_1px_2px_0px_#E3E8EE] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300'
								/>
							</div>
							<div>
								<label className='block text-gray-600 mb-1'>
									Years of experience
								</label>
								<input
									type='number'
									placeholder='0'
									className='w-full border hover:border-gray-300 shadow-[0px_1px_2px_0px_#E3E8EE] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300'
								/>
							</div>
							<div>
								<label className='block text-gray-600 mb-1'>
									Area of specialization
								</label>
								<select className='w-full border hover:border-gray-300 shadow-[0px_1px_2px_0px_#E3E8EE] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300'>
									<option value=''>Enter area of specialization</option>
									<option value='accounting'>Accounting</option>
									<option value='financial-analysis'>Financial Analysis</option>
									<option value='audit'>Audit</option>
								</select>
							</div>
							<div>
								<label className='block text-gray-600 mb-1'>
									Certification
								</label>
								<input
									type='text'
									placeholder='Enter certification'
									className='w-full border hover:border-gray-300 shadow-[0px_1px_2px_0px_#E3E8EE] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300'
								/>
							</div>
						</div>
					</div>
				)}

				{currentStep === 3 && (
					<div>
						<div className='flex justify-center mb-6'>
							<div className='flex items-center space-x-2'>
								{/* Education Icon - represents educational background */}
								<Image
									src='/work_icon.svg'
									width={30}
									height={30}
									alt='user icon'
								/>
								<span className='font-medium leading-tight'>
									Work Experience
								</span>
							</div>
						</div>

						<div className='space-y-4'>
							<div>
								<label className=' mb-1 text-[#697386] text-sm font-semibold'>
									Previous Employment
								</label>
								<textarea
									type='text'
									placeholder='Brief summary of previous work'
									className='w-full h-40 border hover:border-gray-300 shadow-[0px_1px_2px_0px_#E3E8EE] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none '
								/>
								<span className='text-[#697386] text-xs font-normal'>
									Maximum of 250 words
								</span>
							</div>
							<div>
								<label className='text-[#697386] text-sm font-semibold mb-1'>
									Key Achievements
								</label>
								<textarea
									type='text'
									placeholder='Enter institution name'
									className='w-full h-40 border hover:border-gray-300 shadow-[0px_1px_2px_0px_#E3E8EE] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none'
								/>
								<span className='text-[#697386] text-xs font-normal'>
									Maximum of 1000 words
								</span>
							</div>
						</div>
					</div>
				)}

				{currentStep === 4 && (
					<div>
						<div className='flex justify-center mb-6'>
							<div className='flex items-center space-x-2'>
								{/* Document Icon - represents file uploads */}
								<Image
									src='/paint_icon.svg'
									width={30}
									height={30}
									alt='user icon'
								/>
								<span className='font-medium'>Skill and expertise</span>
							</div>
						</div>

						<div className='space-y-4'>
							<div>
								<label className='text-[#697386] text-sm font-semibold mb-1'>
									Describe your experience in CFO advisory
								</label>
								<textarea
									type='text'
									placeholder='Focus on how your background aligns with our mission'
									className='w-full h-40 border hover:border-gray-300 shadow-[0px_1px_2px_0px_#E3E8EE] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none'
								/>
							</div>
							<div>
								<span className='text-[#697386] text-sm font-semibold mb-1'>
									Financial Tools & Software Proficiency
								</span>
								<Select>
									<SelectTrigger className='w-full'>
										<SelectValue placeholder='Select a finanacial tool' />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>
												Financial Planning & Analysis (FP&A)
											</SelectLabel>
											<SelectItem value='anaplan'>Anaplan</SelectItem>
											<SelectItem value='cube'>Cube</SelectItem>
											<SelectItem value='adaptive_insights'>
												Adaptive Insights
											</SelectItem>
										</SelectGroup>

										<SelectGroup>
											<SelectLabel>
												Accounting & ERP (Enterprise Resource Planning)
											</SelectLabel>
											<SelectItem value='quickbooks_online'>
												QuickBooks Online
											</SelectItem>
											<SelectItem value='netsuite_erp'>NetSuite ERP</SelectItem>
											<SelectItem value='sage_intacct'>Sage Intacct</SelectItem>
										</SelectGroup>

										<SelectGroup>
											<SelectLabel>Forecasting & Budgeting</SelectLabel>
											<SelectItem value='planful'>Planful</SelectItem>
											<SelectItem value='vena_solutions'>
												Vena Solutions
											</SelectItem>
											<SelectItem value='jirav'>Jirav</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>
						</div>
					</div>
				)}

				{currentStep === 5 && (
					<div>
						<div className='flex justify-center mb-6'>
							<div className='flex items-center space-x-2'>
								{/* Clipboard Icon - represents additional information */}
								<Image
									src='/info_icon.svg'
									width={30}
									height={30}
									alt='user icon'
								/>
								<span className='font-medium'>Additional Information</span>
							</div>
						</div>

						<div className='space-y-4'>
							<div>
								<label className='text-[#697386] text-sm font-semibold mb-1'>
									Why do you want to join our team?
								</label>
								<textarea
									placeholder='Explain your motivation and what you bring to the role'
									className='w-full h-40 border hover:border-gray-300 shadow-[0px_1px_2px_0px_#E3E8EE] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none'></textarea>

								<span className='text-[#697386] text-xs font-normal'>
									Maximum of 500 words
								</span>
							</div>
							<div>
								<label className='text-[#697386] text-sm font-semibold mb-1'>
									Why do you want to join our team?
								</label>
								<textarea
									placeholder='Explain your motivation and what you bring to the role'
									className='w-full h-40 border hover:border-gray-300 shadow-[0px_1px_2px_0px_#E3E8EE] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none'></textarea>

								<span className='text-[#697386] text-xs font-normal'>
									Maximum of 500 words
								</span>
							</div>

							<div>
								<label className='block text-gray-600 mb-1'>Resume/CV</label>
								<div className='border-2 border-dashed border-gray-300 rounded-lg p-6 text-center'>
									<input
										type='file'
										className='hidden'
										id='resume-upload'
										accept='.pdf,.doc,.docx'
									/>
									<label htmlFor='resume-upload' className='cursor-pointer'>
										<div className='flex flex-col items-center'>
											{/* Upload Icon */}
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='24'
												height='24'
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth='2'
												strokeLinecap='round'
												strokeLinejoin='round'
												className='text-blue-500 mb-2'>
												<path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'></path>
												<polyline points='17 8 12 3 7 8'></polyline>
												<line x1='12' y1='3' x2='12' y2='15'></line>
											</svg>
											<span className='text-blue-500 font-medium'>
												Upload Resume/CV
											</span>
											<span className='text-gray-500 text-sm mt-1'>
												PDF, DOC, or DOCX (Max 5MB)
											</span>
										</div>
									</label>
								</div>
							</div>
						</div>
					</div>
				)}

				<div className='mt-8 flex justify-between'>
					{currentStep > 1 && (
						<CustomBlueButton
							onClick={handleBack}
							className='cursor-pointer gap-5'>
							<Image
								src='/arrow_icon.svg'
								width={30}
								height={30}
								alt='arrow'
								className='mr-1 rotate-180'
							/>
							Previous
						</CustomBlueButton>
					)}
					<div className={`${currentStep > 1 ? "" : "ml-auto"}`}>
						{currentStep === totalSteps ? (
							<Link href='/career'>
								<CustomBlueButton className='flex items-center justify-center cursor-pointer'>
									Submit form
								</CustomBlueButton>
							</Link>
						) : (
							<CustomBlueButton
								onClick={handleNext}
								className=' cursor-pointer gap-5'>
								Next
								<Image
									src='/arrow_icon.svg'
									width={30}
									height={30}
									alt='arrow'
								/>
							</CustomBlueButton>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ApplyNow;
