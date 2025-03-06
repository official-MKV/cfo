import Image from "next/image";
import React from "react";
import { CustomBlueButton } from "@/components/ui/CustomBlueButton";
import StrategyCard from "@/components/web/StrategyCard";
import ServicesCard from "@/components/web/ServicesCard";
import PartnersCard from "@/components/web/PartnersCard";
import TestimonialCard from "@/components/web/TestimonialsCard";

import FAQSection from "@/components/web/FAQsection";

function StrategiesSection() {
  const strategyCards = [
    {
      id: 1,
      imageSrc: "/blank_frame.svg",
      title: "Data-Driven Financial Strategies",
      description:
        "Our CFO advisory firm offers customized financial strategies to boost your business, focusing on your unique challenges with expert insights and collaboration.",
    },
    {
      id: 2,
      imageSrc: "/blank_frame.svg",
      title: "Optimized Cash Flow & Profitability",
      description:
        "Effective and Actionable Financial Strategies Driven by Data Insights, featuring optimized cash flow management techniques, profitability enhancement tips, and personalized budgeting approaches aligned with your unique financial objectives.",
    },
    {
      id: 3,
      imageSrc: "/blank_frame.svg",
      title: "Expert Financial Insights",
      description:
        "Tailored Strategies for Your Financial Success, featuring data-driven budgeting methods, smart investment diversification advice, and personalized risk management techniques designed to align with your unique financial aspirations.",
    },
    {
      id: 4,
      imageSrc: "/blank_frame.svg",
      title: "Experienced CFO Consultants",
      description:
        "Expert Financial Strategies from Seasoned CFO Consultants, featuring tailored budgeting methods, smart investment diversification advice, and effective risk management techniques designed to meet your unique financial objectives.",
    },
  ];

  return (
    <div className="flex justify-center flex-wrap ">
      {strategyCards.map((card) => (
        <StrategyCard
          key={card.id}
          imageSrc={card.imageSrc}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}
function ServicessCard() {
  const serviceCards = [
    {
      id: 1,
      imageSrc: "/network_icon.svg",
      title: "Risk Management Services",
      description:
        "Tailored financial strategies, leveraging data analysis to enhance risk management. This includes personalized budgeting methods, smart investment diversification strategies, and risk mitigation techniques designed to align with your unique financial objectives.",
    },
    {
      id: 2,
      imageSrc: "/business_icon.svg",
      title: "Business Incubation",
      description:
        "We are your driving force for national and regional economic growth. Our mission is to empower you with expert technical and managerial support, helping you unlock your business's full potential and achieve remarkable growth.",
    },
    {
      id: 3,
      imageSrc: "/globe_icon.svg",
      title: "Foreign Exchange Risk Advisory",
      description:
        "Many businesses face the challenge of foreign exchange risk, which can lead to significant losses due to currency fluctuations during international transactions. Understanding this risk is crucial for navigating the global market successfully.",
    },
    {
      id: 4,
      imageSrc: "/card_icon.svg",
      title: "Cost Control",
      description:
        "Transform your budgeting with us! We help eliminate unnecessary expenses, ensuring every dollar counts. Our expert team provides tailored insights to enhance your cost-to-income ratio. Streamline operations and boost profitability. ",
    },
  ];

  return (
    <div className="flex justify-center flex-wrap gap-6">
      {serviceCards.map((card) => (
        <ServicesCard
          key={card.id}
          imageSrc={card.imageSrc}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}

function PartnerssCard() {
  const partnerCards = [
    {
      id: 1,
      imageSrc: "/blank_white_frame.svg",
      title: "Finance dashboard",
      description:
        " Get an overview of cash flow, expenses, and financial trends at a glance.",
    },
    {
      id: 2,
      imageSrc: "/blank_white_frame.svg",
      title: "Real time communication",
      description:
        "Connect with CFO advisors through built-in messaging and consultation scheduling.",
    },
    {
      id: 3,
      imageSrc: "/blank_white_frame.svg",
      title: " Secure Document Sharing",
      description:
        "Upload and manage financial reports, contracts, and key business documents in one place.",
    },
    {
      id: 4,
      imageSrc: "/blank_white_frame.svg",
      title: "Data Security & Confidentiality",
      description:
        "Enterprise-grade security ensures your financial data remains private and protected. ",
    },
  ];

  return (
    <div className="flex justify-center flex-wrap gap-6">
      {partnerCards.map((card) => (
        <PartnersCard
          key={card.id}
          imageSrc={card.imageSrc}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}
function TestimonialssCard() {
  const testimonyCards = [
    {
      id: 1,
      name: "Client’s Name",
      comment: "Client role/job description or post",
      description:
        "Partnering with Apex CFO Advisory has transformed our approach to financial management! Their experts are exceptionally attentive and consistently go above and beyond to address our requirements. Since adopting their strategies, we've experienced a remarkable boost in our operational efficiency. I wholeheartedly recommend their services!",
    },
    {
      id: 2,
      name: "Client’s Name",
      comment: "Client role/job description or post",
      description:
        "Partnering with Apex CFO Advisory has transformed our approach to financial management! Their experts are exceptionally attentive and consistently go above and beyond to address our requirements. Since adopting their strategies, we've experienced a remarkable boost in our operational efficiency. I wholeheartedly recommend their services!",
    },
  ];

  return (
    <div className="flex justify-center overflow-y-auto  ">
      {testimonyCards.map((card) => (
        <TestimonialCard
          key={card.id}
          name={card.name}
          comment={card.comment}
          description={card.description}
        />
      ))}
    </div>
  );
}
export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <div className="flex flex-col md:flex-row items-center ">
        {/* Left Section */}
        <div className="flex flex-col   p-8 md:p-13  lg:p-10 xl:p-24 md:w-1/2 gap-4">
          <p className="text-5xl  lg:text-3xl md:text-2xl xl:text-5xl font-bold">
            Strategic CFO Advisory for Business Growth & Financial Success
          </p>
          <p className="text-base">
            Gain expert financial insights, optimize cash flow, and drive
            profitability with our tailored CFO advisory services
          </p>
          <div className="flex md:flex-wrap lg:flex-nowrap items-center3 gap-4 w-full xl:mb-2 ">
            <CustomBlueButton>Contact us to get started today</CustomBlueButton>

            <div className="flex items-center justify-center space-x-2 min-w-0 ">
              <Image
                src="/services_icon.svg"
                width={30}
                height={60}
                alt="services icon"
                className="xl:w-11 lg:w-9"
              />
              <p className=" font-normal text-base lg:flex whitespace-nowrap flex-shrink">
                Explore our services
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-2  xl:gap-4 ">
            <Image
              src="/startup_frame.svg"
              width={90}
              height={20}
              alt="startup_frame"
              className="xl:w-28"
            />
            <Image
              src="/sme_frame.svg"
              width={90}
              height={20}
              alt="startup_frame"
              className="xl:w-28"
            />
            <Image
              src="/corporate_frame.svg"
              width={90}
              height={20}
              alt="startup_frame"
              className="xl:w-28"
            />
            <Image
              src="/sovereigns_frame.svg"
              width={90}
              height={20}
              alt="startup_frame"
              className="xl:w-28"
            />
            <Image
              src="/individuals_frame.svg"
              width={90}
              height={20}
              alt="startup_frame"
              className="xl:w-28"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 p-2 flex flex-col  items-start">
          <Image
            src="/home_advisor.svg"
            width={600}
            height={100}
            alt="stocks image"
          />{" "}
        </div>
      </div>
      <div className=" py-5 text-black justify-center flex gap-x-20 mb-20">
        <div className="flex items-center gap-x-2 h-full">
          <div>
            <Image
              src="/people_icon.svg"
              width={80}
              height={40}
              alt="people icon"
            />
          </div>
          <div className="flex flex-col gap-y-1.5 ">
            <p className="font-semibold text-4xl flex-1 ">3,500</p>
            <p className="text-[#575757] text-xs font-normal flex-1">
              Active Users
            </p>{" "}
          </div>
        </div>
        <div className="flex items-center gap-x-2 h-full">
          <div>
            <Image
              src="/check_icon.svg"
              width={80}
              height={40}
              alt="check icon"
            />
          </div>
          <div className="flex flex-col gap-y-1.5 ">
            <p className="font-semibold text-4xl flex-1 ">100</p>
            <p className="text-[#575757] text-xs font-normal flex-1">
              Finance Experts
            </p>{" "}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full place-content-center items-center align-center h-full  xl:px-65 md:px-15 lg:px-35 xm:px-10 mb-7">
        <div className="flex flex-col gap-y-2.5 items-center">
          <div className="flex flex-col   items-center ">
            <Image
              src="/why_choose_us_frame.svg"
              height={39}
              width={150}
              alt="why choose us"
              className="lg:w-35 md:w-30"
            />
          </div>
          <p className="font-semibold text-6xl md:text-4xl mb-2  ">
            Tailored Solutions for Your Needs
          </p>
          <p className="flex flex-col   items-center  place-content-center  text-wrap text-center  text-[#5c5c5c] text-sm font-normal">
            At our CFO advisory firm, we bring a wealth of experience and
            expertise to help your business thrive. Our dedicated team
            understands the unique challenges you face and is committed to
            providing tailored financial strategies that drive growth and
            efficiency. Choose us for insightful guidance and a partnership that
            prioritizes your success.
          </p>
        </div>
      </div>
      <div className="mb-30">
        <StrategiesSection />
      </div>
      <div className=" xl:p-10 mb-10">
        <div className="p-10 flex bg-[#FAFAFA] rounded  ">
          <div className="flex flex-col mr-16">
            <div className="flex flex-col max-w-[300px] space-y-2">
              <Image
                src="/our_services_frame.svg"
                width={70}
                height={40}
                alt="our services"
                className="xl:w-24"
              />
              <p className="font-semibold text-3xl">What we offer</p>
              <p className="text-sm font-normal text-wrap text-[#5c5c5c] xl:mb-20 lg:mb-45 sm:mb-130">
                Our CFO advisory firm offers customized financial strategies to
                boost your business, focusing on your unique challenges with
                expert insights and collaboration.
              </p>

              <div className="flex  w-full  ">
                <CustomBlueButton>
                  See all Services
                  <Image
                    src="/arrow_icon.svg"
                    width={30}
                    height={30}
                    alt="right arrow"
                  />
                </CustomBlueButton>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <ServicessCard />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full place-content-center items-center align-center h-full  xl:px-65 md:px-15 lg:px-35 xm:px-10 mb-7">
        <div className="flex flex-col gap-y-2.5 items-center mb-10">
          <div className="flex flex-col   items-center ">
            <Image
              src="/our_product.svg"
              height={39}
              width={150}
              alt="why choose us"
              className="lg:w-35 md:w-30"
            />
          </div>
          <p className="font-semibold text-6xl md:text-4xl mb-2 xl:text-wrap">
            A Smarter Way to Manage Your Finances
          </p>
          <p className="flex flex-col   items-center  place-content-center text-center  text-[#5c5c5c] text-sm font-normal text-wrap">
            Our in-house application offers a real-time financial dashboard and
            a seamless platform for collaboration between clients and financial
            experts, ensuring informed and strategic business decisions.
          </p>
        </div>
      </div>
      <div className="flex flex-col flex-wrap items-center justify-center gap-y-2 ">
        <Image
          src="/blank_rectangle.svg"
          width={1600}
          height={450}
          alt="blank image"
          className="xl:px-25 rounded-4xl lg:px-15 sm:px-10"
        ></Image>
        <button className="cursor-pointer">
          <Image
            src="/live_demo.svg"
            width={150}
            height={30}
            alt="play button"
          />
        </button>
      </div>
      <div className=" xl:p-10 mb-10">
        <div className="p-10 flex bg-[#FAFAFA] rounded  ">
          <div className="flex flex-col mr-16">
            <div className="flex flex-col max-w-[300px] space-y-2">
              <Image
                src="/discover_icon.svg"
                width={70}
                height={40}
                alt="our services"
                className="xl:w-35 sm:w-30 lg:w-30"
              />
              <p className="font-semibold text-3xl">Your finance partner</p>
              <p className="text-sm font-normal text-wrap text-[#5c5c5c] xl:mb-50 lg:mb-33 sm:mb-10">
                Our web application provides tailored financial strategies
                designed to enhance your business performance. It addresses your
                specific challenges through expert insights and collaborative
                tools, ensuring you have the support you need to succeed.
              </p>

              <div className="flex  w-full  ">
                <CustomBlueButton>
                  See all Services
                  <Image
                    src="/arrow_icon.svg"
                    width={30}
                    height={30}
                    alt="right arrow"
                  />
                </CustomBlueButton>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <PartnerssCard />
          </div>
        </div>
      </div>
      <div className="w-full place-content-center items-center align-center   xl:px-25 md:px-15 lg:px-35 xm:px-10 mb-26">
        <div className="flex flex-col gap-y-2.5 items-center">
          <Image
            src="/testimonials_icon.svg"
            height={39}
            width={150}
            alt="testimonials_icon"
            className="lg:w-35 md:w-30 xl:w-40"
          />

          <p className="font-semibold text-6xl md:text-4xl mb-2  ">
            Hear what our clients say about us
          </p>
          <div className="flex p-4 rounded-2xl  ">
            <TestimonialssCard />
          </div>
        </div>
      </div>
      <div className="w-full place-content-center items-center align-center   xl:px-25 md:px-15 lg:px-35 xm:px-10 mb-7">
        <div className="flex flex-col gap-y-2.5 items-center">
          <Image
            src="/needed_answers_icon.svg"
            height={20}
            width={30}
            alt="testimonials_icon"
            className="lg:w-35 md:w-30 xl:w-33"
          />

          <p className="font-semibold text-6xl md:text-4xl mb-2  ">
            Frequently Asked Questions
          </p>
          <p className="   items-center  place-content-center text-center  text-[#5c5c5c] text-sm font-normal text-wrap">
            Find answers to frequently asked question
          </p>
        </div>
        <div>
          <FAQSection />
        </div>
      </div>
      <div className="bg-[#02182A] flex flex-row text-white flex-wrap px-25 lg:px-5 sm:px-3 place-content-between">
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
            />
            <Image
              src="/mid_rectangle.svg"
              width={300}
              height={150}
              className=" sm:w-65"
            />
          </div>
          <Image
            src="/big_rectangle.svg"
            width={460}
            height={225}
            className="sm:w-100"
          />
        </div>
      </div>
      <div className=" py-20 px-10">
        <div>
          <Image
            src="/logo_placeholder.svg"
            width={1000}
            height={120}
            alt="logo"
            className="w-full"
          />
        </div>
      </div>
    </main>
  );
}
