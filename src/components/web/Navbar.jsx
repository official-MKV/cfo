import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
	return (
		<div className='w-full'>
			<nav className='bg-white  px-6 py-4 border  w-full flex justify-between gap-2.5 items-center'>
				<div className='flex items-center space-x-4'>
					<Image src='/cfo_logo.svg' alt='Logo' width={32} height={30} />
					<Image
						src='/cfoadvisory_text.svg'
						alt='Logo'
						width={100}
						height={40}
					/>
				</div>
				<div className='flex gap-10'>
					<Link href='/services'>Services</Link>
					<Link href='/career'>Career</Link>
					<Link href='/aboutus'>About us</Link>
					<Link href='/product'>Services</Link>
				</div>
				<div>
					<div className='flex gap-6'>
						<select className='w-full'>
							<option>EN</option>
							<option>POR</option>
							<option>FRA</option>
						</select>
						<div className='w-full text-[#3781b6]'>
							<Button asChild variant='outline'>
								<Link href='/Login'>Login</Link>
							</Button>
						</div>
					</div>
				</div>
			</nav>
			<Separator />
		</div>
	);
};
