import React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
	return (
		<footer className='bg-[#02182A] text-white '>
			<div className='flex flex-row pt-19 px-24 xl:pr-48  flex-wrap place-content-between'>
				<div className='max-w-[300px]'>
					<p className='text-4xl font-normal mb-6'>CFO Advisory</p>
					<p className='text-xs font-normal  leading-5  text-wrap  mb-8'>
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
				<div className='flex flex-row gap-4 mb-10  ml-auto'>
					<Link href='/' className='mr-2 text-[#4576D4]'>
						CFO advisory
					</Link>
					<Link href='/services'>Services</Link>
					<Link href='/aboutus'>About Us</Link>
					<Link href='/product'>Product</Link>
					<Link href='/career'>Career</Link>
				</div>
			</div>
			<Separator />
			<div className='flex flex-row justify-between px-24 py-8'>
				<p>© All Right Reserved</p>
				<p>2024 Terms and Conditions</p>
			</div>
		</footer>
	);
};

export default Footer;
