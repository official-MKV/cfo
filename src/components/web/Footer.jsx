import React from "react";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className='bg-[#02182A] text-white '>
			<div className='flex flex-row pt-19 pl-24 pr-48 place-content-between'>
				<div>
					<p className='text-4xl font-normal mb-6'>CFO Advisory</p>
					<p className='text-xs font-normal  leading-5  text-wrap w-[300px] mb-8'>
						Our CFO advisory firm offers customized financial strategies to
						boost your business, focusing on your unique challenges with expert
						insights and collaboration.
					</p>
					<div className='text-sm font-normal space-y-3 mb-24'>
						<p>Office Address should be written here</p>
						<p>Phone Number</p>
						<p>Email</p>
					</div>
				</div>
				<div className='flex flex-row '></div>
			</div>
		</footer>
	);
};

export default Footer;
