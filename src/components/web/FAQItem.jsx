"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQItem = ({ question, answer }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={`
			rounded-xl 
			${isOpen ? 'bg-[#AFAFFF]' : 'bg-[#F2F9FF]'}
			transition-colors 
			duration-300
		`}>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className='
					flex 
					w-full 
					items-center 
					justify-between 
					py-4 
					text-left 
					text-lg 
					font-medium 
					hover:bg-opacity-90 
					transition-colors
					px-4
				'>
				<span>{question}</span>
				<ChevronDown
					className={`
						transform 
						transition-transform 
						duration-300
						${isOpen ? "rotate-180" : ""}
					`}
				/>
			</button>
			{isOpen && (
				<div
					className='
						px-4 
						pb-4 
						text-gray-600 
						transition-all 
						duration-300 
						ease-in-out
					'>
					{answer}
				</div>
			)}
		</div>
	);
};

export default FAQItem;