"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { usePathname } from "next/navigation"; // Use this instead of window.location

export const Navbar = () => {
	const pathname = usePathname(); // Get current route

	const navItems = [
		{ name: "Services", path: "/services" },
		{ name: "Career", path: "/career" },
		{ name: "About us", path: "/aboutus" },
		{ name: "Product", path: "/product" },
	];

	const languages = [
		{ code: "EN", flagSrc: "/flags/us.svg", alt: "USA Flag" },
		{ code: "POR", flagSrc: "/flags/pt.svg", alt: "Portugal Flag" },
		{ code: "FRA", flagSrc: "/flags/fr.svg", alt: "France Flag" },
	];

	const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

	const getButtonConfig = (currentPath) => {
		if (!currentPath)
			return {
				variant: "outline",
				icon: null,
				text: "Log In",
				href: "/login",
			};

		if (currentPath.includes("/career")) {
			return {
				variant: "default",
				icon: null,
				text: "Get Started",
				href: "/get-started",
			};
		} else if (
			currentPath.includes("/services") ||
			currentPath.includes("/aboutus")
		) {
			return {
				variant: "default",
				icon: <Phone className='mr-2 h-4 w-4' />,
				text: "Contact Us",
				href: "/contact",
			};
		} else {
			return {
				variant: "outline",
				icon: null,
				text: "Log In",
				href: "/login",
			};
		}
	};

	const buttonConfig = getButtonConfig(pathname); // Use pathname directly

	return (
		<div className='w-full'>
			<nav className='bg-white px-6 py-4 border w-full flex justify-between gap-2.5 items-center'>
				<Link href="/">
					<div className='flex items-center space-x-4'>
						<Image src='/cfo_logo.svg' alt='Logo' width={32} height={30} />
						<Image
							src='/cfoadvisory_text.svg'
							alt='Logo'
							width={100}
							height={40}
						/>
					</div>
				</Link>

				<div
					className='flex items-center justify-center'
					style={{ minWidth: "400px" }}>
					<div className='flex'>
						{navItems.map((item) => (
							<div key={item.path} className='relative px-5'>
								<Link
									href={item.path}
									className={`text-sm font-medium transition-colors hover:text-blue-600 whitespace-nowrap ${
										pathname.startsWith(item.path) ? "text-blue-600" : "text-gray-700"
									}`}>
									{item.name}
								</Link>
								<div
									className={`absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 h-0.5 bg-[#2054d2]/75 transition-all duration-300 ease-in-out ${
										pathname.startsWith(item.path) ? "w-12 rounded" : "w-0"
									}`}
								/>
							</div>
						))}
					</div>
				</div>

				<div>
					<div className='flex gap-6 items-center'>
						<div className='relative'>
							<select
								className='appearance-none bg-transparent pl-8 cursor-pointer'
								value={selectedLanguage.code}
								onChange={(e) => {
									const selected = languages.find(
										(lang) => lang.code === e.target.value
									);
									setSelectedLanguage(selected);
								}}>
								{languages.map((lang) => (
									<option key={lang.code} value={lang.code}>
										{lang.code}
									</option>
								))}
							</select>
							<span className='absolute left-0 top-1/2 transform -translate-y-1/2 flex'>
								{selectedLanguage.flagSrc ? (
									<Image
										src={selectedLanguage.flagSrc}
										alt={selectedLanguage.alt}
										width={20}
										height={15}
										style={{ borderRadius: "1px" }}
									/>
								) : (
									// Fallback in case image is not available
									"<div className=' bg-gray-200 rounded-sm' />"
								)}
							</span>
						</div>
						<div className='w-full'>
							<Button asChild variant={buttonConfig.variant}>
								<Link href={buttonConfig.href}>
									{buttonConfig.icon}
									{buttonConfig.text}
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</nav>
			<Separator />
		</div>
	);
};
