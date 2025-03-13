"use client";
import React, { useState } from "react";
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
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const totalSteps = 5;

  const handleBack = () => currentStep > 1 && setCurrentStep(currentStep - 1);
  
  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Show success notification and success page
      setShowSuccessNotification(true);
      setFormSubmitted(true);
      setTimeout(() => setShowSuccessNotification(false), 5000);
    }
  };

  // Form step content configuration
  const steps = [
    {
      icon: "/user_icon.svg",
      title: "Personal Information",
      content: (
        <div className="space-y-4">
          <FormField label="Full name" type="text" placeholder="Enter fullname" />
          <FormField label="Email Address" type="email" placeholder="example@gmail.com" />
          <FormField label="Phone Number" type="tel" placeholder="000-000-0000" />
          <FormField label="LinkedIn Profile" type="url" placeholder="Enter linkedin profile link" />
        </div>
      )
    },
    {
      icon: "/luggage_icon.svg",
      title: "Professional Information",
      content: (
        <div className="space-y-4">
          <FormField label="Current work position" type="text" placeholder="Current work position" />
          <FormField label="Years of experience" type="number" placeholder="0" />
          <div>
            <label className="block text-gray-600 mb-1">Area of specialization</label>
            <select className="w-full border hover:border-gray-300 shadow-[0px_1px_2px_0px_#E3E8EE] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300">
              <option value="">Enter area of specialization</option>
              <option value="accounting">Accounting</option>
              <option value="financial-analysis">Financial Analysis</option>
              <option value="audit">Audit</option>
            </select>
          </div>
          <FormField label="Certification" type="text" placeholder="Enter certification" />
        </div>
      )
    },
    {
      icon: "/work_icon.svg",
      title: "Work Experience",
      content: (
        <div className="space-y-4">
          <FormTextArea 
            label="Previous Employment" 
            placeholder="Brief summary of previous work" 
            maxWords={250} 
          />
          <FormTextArea 
            label="Key Achievements" 
            placeholder="Enter institution name" 
            maxWords={1000} 
          />
        </div>
      )
    },
    {
      icon: "/paint_icon.svg",
      title: "Skill and expertise",
      content: (
        <div className="space-y-4">
          <FormTextArea 
            label="Describe your experience in CFO advisory" 
            placeholder="Focus on how your background aligns with our mission" 
          />
          <div>
            <span className="text-[#697386] text-sm font-semibold mb-1">
              Financial Tools & Software Proficiency
            </span>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a finanacial tool" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Financial Planning & Analysis (FP&A)</SelectLabel>
                  <SelectItem value="anaplan">Anaplan</SelectItem>
                  <SelectItem value="cube">Cube</SelectItem>
                  <SelectItem value="adaptive_insights">Adaptive Insights</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Accounting & ERP</SelectLabel>
                  <SelectItem value="quickbooks_online">QuickBooks Online</SelectItem>
                  <SelectItem value="netsuite_erp">NetSuite ERP</SelectItem>
                  <SelectItem value="sage_intacct">Sage Intacct</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Forecasting & Budgeting</SelectLabel>
                  <SelectItem value="planful">Planful</SelectItem>
                  <SelectItem value="vena_solutions">Vena Solutions</SelectItem>
                  <SelectItem value="jirav">Jirav</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      )
    },
    {
      icon: "/info_icon.svg",
      title: "Additional Information",
      content: (
        <div className="space-y-4">
          <FormTextArea 
            label="Why do you want to join our team?" 
            placeholder="Explain your motivation and what you bring to the role" 
            maxWords={500} 
          />
          <FormTextArea 
            label="Why do you want to join our team?" 
            placeholder="Explain your motivation and what you bring to the role" 
            maxWords={500} 
          />
          <FileUpload label="Resume/CV" />
        </div>
      )
    }
  ];

  // Success page
  if (formSubmitted) {
    return (
      <div className="min-h-screen py-12">
        <div className="bg-white rounded-lg w-full max-w-3xl mx-auto">
          {showSuccessNotification && (
            <SuccessNotification onClose={() => setShowSuccessNotification(false)} />
          )}
          <div className="p-8">
            <div className="flex flex-col items-center justify-center py-16">
              <div className="text-center max-w-md">
                <h2 className="text-xl font-medium mb-4">
                  Thank you for applying as a Financial Expert.
                </h2>
                <p className="text-gray-600 mb-8">
                  Your application has been successfully submitted. You will
                  receive a confirmation email with further details shortly.
                </p>
                <Link href="/" className="bg-black">
                  <button className="bg-[#2054D2] text-white px-6 py-2 rounded-md flex items-center justify-center mx-auto cursor-pointer">
                    <span className="mr-2">Go back to home</span>
                    <Image src="/home_icon.svg" width={20} height={20} alt="home_icon" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="flex items-center mb-6 pl-24">
        {currentStep === 1 ? (
          <Link href="/career" className="text-gray-600 mr-2 flex items-center">
            <Image src="/left_arrow.svg" width={30} height={30} alt="arrow" />
          </Link>
        ) : (
          <button onClick={handleBack} className="text-gray-600 mr-2">
            <Image src="/left_arrow.svg" width={30} height={30} alt="arrow" />
          </button>
        )}
        <div className="flex items-center">
          <span className="text-xl text-[#575757] font-medium tracking-tight">Career</span>
          <span className="mx-2">|</span>
          <span className="text-[#121212] text-xl font-medium tracking-tight">
            Apply to be a financial expert
          </span>
        </div>
      </div>
      
      <div className="bg-white rounded-lg w-full max-w-3xl p-8 mx-auto">
        {/* Progress bar */}
        <div className="flex gap-1 mb-8">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded flex-1 transition-all ${
                index + 1 <= currentStep ? "bg-[#2054d2]" : "bg-[#c7d4f4]"
              }`}
            />
          ))}
        </div>

        {/* Current step content */}
        <div>
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2">
              <Image
                src={steps[currentStep-1].icon}
                width={30}
                height={30}
                alt="icon"
              />
              <span className="font-medium leading-tight">{steps[currentStep-1].title}</span>
            </div>
          </div>
          {steps[currentStep-1].content}
        </div>

        {/* Navigation buttons */}
        <div className="mt-8 flex justify-between">
          {currentStep > 1 && (
            <CustomBlueButton onClick={handleBack} className="cursor-pointer gap-3">
              <Image
                src="/arrow_icon.svg"
                width={30}
                height={30}
                alt="arrow"
                className="rotate-180"
              />
              Previous
            </CustomBlueButton>
          )}
          <div className={`${currentStep > 1 ? "" : "ml-auto"}`}>
            <CustomBlueButton
              onClick={handleNext}
              className="flex items-center justify-center w-fit gap-0"
            >
              {currentStep === totalSteps ? "Submit form" : "Next"}
              {currentStep !== totalSteps && (
                <Image
                  src="/arrow_icon.svg"
                  width={30}
                  height={30}
                  alt="arrow"
                  className="ml-3"
                />
              )}
            </CustomBlueButton>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable components
const FormField = ({ label, type, placeholder }) => (
  <div>
    <label className="text-[#697386] text-sm font-semibold mb-1">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border hover:border-gray-300 shadow-[0px_1px_2px_0px_#E3E8EE] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
    />
  </div>
);

const FormTextArea = ({ label, placeholder, maxWords }) => (
  <div>
    <label className="text-[#697386] text-sm font-semibold mb-1">{label}</label>
    <textarea
      placeholder={placeholder}
      className="w-full h-40 border hover:border-gray-300 shadow-[0px_1px_2px_0px_#E3E8EE] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none"
    />
    {maxWords && (
      <span className="text-[#697386] text-xs font-normal">
        Maximum of {maxWords} words
      </span>
    )}
  </div>
);

const FileUpload = ({ label }) => (
  <div>
    <label className="block text-gray-600 mb-1">{label}</label>
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
      <input
        type="file"
        className="hidden"
        id="resume-upload"
        accept=".pdf,.doc,.docx"
      />
      <label htmlFor="resume-upload" className="cursor-pointer">
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-500 mb-2"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="17 8 12 3 7 8"></polyline>
            <line x1="12" y1="3" x2="12" y2="15"></line>
          </svg>
          <span className="text-blue-500 font-medium">Upload Resume/CV</span>
          <span className="text-gray-500 text-sm mt-1">
            PDF, DOC, or DOCX (Max 5MB)
          </span>
        </div>
      </label>
    </div>
  </div>
);

const SuccessNotification = ({ onClose }) => (
  <div className="bg-[#E5FCF1] border-2 border-[#00AF12] flex items-center p-2 mx-8 mt-4 rounded ease-in-out anima">
    <div className="bg-green-500 text-white p-1 rounded mr-4">
      <Image src="/green_check_icon.svg" width={22} height={20} alt="green check icon" />
    </div>
    <span className="text-base font-medium">
      Application submitted successfully
    </span>
    <button
      className="ml-auto hover:text-gray-700 flex items-center"
      onClick={onClose}
    >
      <span className="mr-2 text-base font-medium text-[#00AF12]">Close</span>
      <Image src="/green_close_icon.svg" width={18} height={20} alt="green close icon" />
    </button>
  </div>
);

export default ApplyNow;