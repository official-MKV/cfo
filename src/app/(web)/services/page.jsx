import React from "react";
import Image from "next/image";
import ServicesCard from "@/components/web/ServicesCard";
import { CustomBlueButton } from "@/components/ui/CustomBlueButton";

const Services = () => {
	const services = [
		{
			id: 1,
			icon: "/network_icon.svg",
			title: "Risk Management Services",
			description:
				"Tailored financial strategies, leveraging data analysis to enhance risk management. This includes personalized budgeting methods, smart investment diversification strategies, and risk mitigation techniques designed to align with your unique financial objectives.",
		},
		{
			id: 2,
			icon: "/business_icon.svg",
			title: "Business Incubation",
			description:
				"We are your driving force for national and regional economic growth. Our mission is to empower you with expert technical and managerial support, helping you unlock your business's full potential and achieve remarkable growth.",
		},
		{
			id: 3,
			icon: "/business_icon.svg",
			title: "Trade Financing/Debt Raising",
			description:
				"We review both your qualitative and quantitative financial outlook and provide guidance towards improving your key financial ratios which makes you efficient and profitable.",
		},
		{
			id: 4,
			icon: "/globe_icon.svg",
			title: "Foreign Exchange Risk Advisory",
			description:
				"Many businesses face the challenge of foreign exchange risk, which can lead to significant losses due to currency fluctuations during international transactions. Understanding this risk is crucial for navigating the global market successfully.",
		},
		{
			id: 5,
			icon: "/card_icon.svg",
			title: "Cost Control",
			description:
				"Transform your budgeting with us! We help eliminate unnecessary expenses, ensuring every dollar counts. Our expert team provides tailored insights to enhance your cost-to-income ratio. Streamline operations and boost profitability. ",
		},
		{
			id: 6,
			icon: "/card_icon.svg",
			title: "Foreign Exchange Risk Advisory",
			description:
				"Many businesses incur foreign exchange risk which are losses attained with currency fluctuation when an international financial transaction involving different currencies take place.",
		},
		{
			id: 7,
			icon: "/globe_icon.svg",
			title: "Corporate profitability Services",
			description:
				"We offer analysis and insights to identify cost-saving opportunities and optimize revenue. By using data analytics, companies can make informed decisions that boost profitability and support sustainable growth.",
		},
		{
			id: 8,
			icon: "/card_icon.svg",
			title: "Debt Restructuring",
			description:
				"Transform your finances with our debt restructuring services! We help reduce your liabilities and ensure every payment counts. Our expert team provides tailored solutions to boost your financial health and cash flow.",
		},
		{
			id: 9,
			icon: "/card_icon.svg",
			title: "Corporate Finance Services",
			description:
				"Companies often struggle with foreign exchange risk, which can cause losses from currency fluctuations in international transactions. Corporate finance services offer strategies and tools to effectively manage this currency exposure.",
		},
		{
			id: 10,
			icon: "/globe_icon.svg",
			title: "Business Analysis Services",
			description:
				"Our business analysis services provide comprehensive evaluations and insights to uncover cost-saving opportunities and enhance revenue streams. Leveraging data analytics, organizations can make strategic decisions that increase profitability and foster sustainable growth.",
		},
		{
			id: 11,
			icon: "/card_icon.svg",
			title: "Credit Rating",
			description:
				"Our innovative platform provides real-time insights and analytics, empowering businesses to make informed decisions and enhance their financial strategies. Experience seamless integration and unparalleled support as you elevate your credit assessment processes to new heights.",
		},
		{
			id: 12,
			icon: "/card_icon.svg",
			title: "Mergers and Acquisition",
			description:
				"This innovative approach helps businesses grow and unlock new revenue opportunities. By adopting this strategy, organizations can boost profitability and gain a competitive edge, ensuring long-term success.",
		},
	];
	return (
		<main className='w-full'>
			<div className='flex flex-col md:flex-row items-center '>
				{/* Left Section */}
				<div className='flex flex-col  md:p-13  lg:p-10 xl:p-24 md:w-1/2 '>
					<p className='text-5xl  lg:text-3xl md:text-2xl font-bold tracking-wide leading-10 w-[300px]'>
						Our Company’s Services.
					</p>
				</div>

				{/* Right Section */}
				<div className='md:w-1/2 p-8 text-wrap '>
					<p className='w-[320px] text-[#5c5c5c]'>
						Our CFO advisory firm offers customized financial strategies to
						boost your business, focusing on your unique challenges with expert
						insights and collaboration.
					</p>
				</div>
			</div>
			<div className='lg:px-10 xl:px-24 flex flex-wrap gap-7 mb-32'>
				{services.map((card) => (
					<ServicesCard
						key={card.id}
						imageSrc={card.icon}
						title={card.title}
						description={card.description}
					/>
				))}
			</div>
			<div className="bg-[#0D4370] flex flex-row text-white flex-wrap px-25 lg:px-5 sm:px-3 place-content-between mb-16">
					<div className="flex flex-col py-25  xl:w-[600px] lg:w-[500px] sm:w-[340px]  ">
					  <p className="text-4xl font-bold leading-snug mb-3">
						Take Control of Your Finances Today
					  </p>
					  <p className="mb-9">
						Book a free strategy session with one of our expert CFOs and start
						making better financial decisions
					  </p>
					  <CustomBlueButton className="xl:w-[350px] lg:w-[320px] sm:w-[300px]">
						Get started
					  </CustomBlueButton>
					</div>
					<div className="py-6 sm:py-20 flex flex-col space-y-5">
					  <div className="flex gap-5">
						<Image
						  src="/small_rectangle.svg"
						  width={140}
						  height={150}
						  className=" sm:w-30"
						  alt="small rectangle"
						/>
						<Image
						  src="/mid_rectangle.svg"
						  width={300}
						  height={150}
						  className=" sm:w-65"
						  alt="mid rectangle"
						/>
					  </div>
					  <Image
						src="/big_rectangle.svg"
						width={460}
						height={225}
						className="sm:w-100"
						alt="big rectangle"
					  />
					</div>
				  </div>
		</main>
	);
};

export default Services;
