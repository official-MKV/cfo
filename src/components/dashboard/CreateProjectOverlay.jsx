// components/CreateProjectOverlay.jsx
"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, Edit, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProjectCreateStepIndicator from "./ProjectCreateStepIndicator";
import { Suspense } from "react";
import { Loader } from "lucide-react";

const CreateProjectOverlayComp = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isOpen = searchParams.get("createProject") === "true";
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkills, setSelectedSkills] = useState(["Accounts Management"]);
  const [currentStep, setCurrentStep] = useState(0); // Start at 0 for welcome screen
  const [substep, setSubStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    skills: [],
    expertiseLevel: "",
    budgetType: "Fixed Rate",
    budgetAmount: "$2000.00",
    hourlyRateFrom: "$50.00",
    hourlyRateTo: "$100.00",
    projectTimeline: "",
    projectStructure: "",
    milestones: [
      "This is my first milestone to keep the project going",
      "This is my second milestone to keep the project going",
      "This is my third milestone to keep the project going",
    ],
  });

  const totalSteps = 5;

  // Reset form state when opened
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(0);
      setSubStep(1);
      setFormData({
        title: "",
        description: "",
        skills: [],
        expertiseLevel: "",
        budgetType: "Fixed Rate",
        budgetAmount: "$2000.00",
        hourlyRateFrom: "$50.00",
        hourlyRateTo: "$100.00",
        projectTimeline: "",
        projectStructure: "",
        milestones: [
          "This is my first milestone to keep the project going",
          "This is my second milestone to keep the project going",
          "This is my third milestone to keep the project going",
        ],
      });
    }
  }, [isOpen]);

  const handleClose = () => {
    // Close by removing the query parameter
    const url = new URL(window.location.href);
    url.searchParams.delete("createProject");
    router.replace(url.pathname + url.search);
  };

  const allSkills = [
    "Accounts Management",
    "Budgeting",
    "Forecasting",
    "Data Analysis",
    "Financial Reporting",
    "Market Knowledge",
    "Capital Raising",
    "Investor Relations",
    "Tax Planning",
    "Risk Management",
    "Audit Preparation",
    "Financial Modeling",
    "Strategic Planning",
    "Cash Flow Management",
    "Cost Reduction",
  ];

  const addSkill = (skill) => {
    if (!selectedSkills.includes(skill) && selectedSkills.length < 5) {
      setSelectedSkills([...selectedSkills, skill]);
      setSearchTerm(""); // Clear search after adding
    }
  };

  const removeSkill = (skill) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (currentStep === 2) {
      setFormData((prev) => ({
        ...prev,
        skills: selectedSkills,
      }));
    }
  }, [selectedSkills, currentStep]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBack = () => {
    if (currentStep === 3 && substep > 1) {
      setSubStep((prev) => prev - 1);
    } else if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      if (currentStep === 4) {
        setSubStep(3); // Go back to the last substep of step 3
      } else {
        setSubStep(1); // Reset substep when going back to previous main step
      }
    } else {
      handleClose();
    }
  };

  const handleNext = () => {
    if (currentStep === 3) {
      if (substep < 3) {
        setSubStep((prev) => prev + 1);
      } else {
        setCurrentStep((prev) => prev + 1);
      }
    } else if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
      setSubStep(1);
    } else {
      // Submit form data
      console.log("Form submitted:", formData);
      handleClose();
      // Optionally navigate to the created project
      // router.push(`/projects/${createdProjectId}`);
    }
  };

  const selectExpertiseLevel = (level) => {
    setFormData({ ...formData, expertiseLevel: level });
    setSubStep(2);
  };

  const selectProjectStructure = (structure) => {
    setFormData({ ...formData, projectStructure: structure });
    if (structure === "Short-term" || structure === "One-time setup") {
      setSubStep(3);
    } else {
      setCurrentStep(4);
    }
  };

  const selectProjectTimeline = (timeline) => {
    setFormData({ ...formData, projectTimeline: timeline });
    setCurrentStep(4);
  };

  const renderWelcomeScreen = () => (
    <div className="flex flex-col items-center justify-center h-[100vh] py-20">
      <h1 className="text-4xl font-bold mb-4">Welcome, Uche!</h1>
      <p className="text-4xl font-bold text-center mb-12">
        Lets help you setup
        <br />
        your first project.
      </p>
      <Button
        size="lg"
        className="px-8 py-6 text-lg bg-blue-600 hover:bg-blue-700"
        onClick={() => setCurrentStep(1)}
      >
        Get Started
      </Button>
    </div>
  );

  // Render different form content based on currentStep
  const renderStepContent = () => {
    if (currentStep === 0) {
      return renderWelcomeScreen();
    }

    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="flex justify-between">
              <h2 className="text-3xl font-bold mb-6">
                What kind of work do you need?
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-lg mb-2">
                    Title of your project
                  </label>
                  <Input
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Enter project title"
                    className="w-full"
                  />
                </div>

                <div>
                  <h3 className="text-lg mb-2">Title Samples</h3>
                  <div className="space-y-2">
                    {[
                      "Fractional CFO for Financial Strategy and Reporting",
                      "Corporate Financial Analyst for Budget Planning and Forecasting",
                      "Financial Controller for Cash Flow Management",
                      "CFO Consultant for Fundraising and Capital Management",
                      "Senior Financial Manager for Audit Preparation and Compliance",
                    ].map((sample, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-gray-600 cursor-pointer hover:text-blue-600"
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, title: sample }))
                        }
                      >
                        <span className="text-sm">↗</span>
                        <span>{sample}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        // Filter skills based on search term
        const filteredSkills = allSkills.filter(
          (skill) =>
            skill.toLowerCase().includes(searchTerm.toLowerCase()) &&
            !selectedSkills.includes(skill)
        );

        return (
          <div className="space-y-6">
            <div className="flex justify-between">
              <h2 className="text-3xl font-bold mb-6">
                What skills are required to successfully work on your project?
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-lg mb-2">
                    Select Skills and categories
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full pl-10 pr-4 py-3 border rounded-lg"
                      placeholder="Search skills..."
                      value={searchTerm}
                      onChange={handleSearchChange}
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-400"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-500 mt-2">
                    For best results, add 3-5 skills
                    {selectedSkills.length > 0 &&
                      ` (${selectedSkills.length}/5 selected)`}
                  </p>
                </div>

                <div className="space-y-3">
                  {/* Selected skills */}
                  <div className="flex flex-wrap">
                    {selectedSkills.map((skill, index) => (
                      <div
                        key={index}
                        className="inline-flex items-center bg-blue-600 text-white rounded-full px-4 py-2 mr-2 mb-2"
                      >
                        <span className="mr-2">{skill}</span>
                        <button
                          className="text-white"
                          onClick={() => removeSkill(skill)}
                          aria-label={`Remove ${skill}`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Skill options based on search */}
                  {searchTerm && filteredSkills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4 p-3 border rounded-lg bg-gray-50">
                      <p className="w-full text-sm text-gray-500 mb-2">
                        Search results:
                      </p>
                      {filteredSkills.slice(0, 8).map((skill, index) => (
                        <button
                          key={index}
                          className="inline-flex items-center border bg-white rounded-full px-4 py-2 hover:bg-gray-50"
                          onClick={() => addSkill(skill)}
                          disabled={selectedSkills.length >= 5}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-1"
                          >
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                          </svg>
                          {skill}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* No search results message */}
                  {searchTerm && filteredSkills.length === 0 && (
                    <div className="p-4 border rounded-lg bg-gray-50 text-center">
                      <p className="text-gray-500">
                        No matching skills found. Try a different search term.
                      </p>
                    </div>
                  )}

                  {/* Suggested skill options (only show when not searching) */}
                  {!searchTerm && (
                    <div className="flex flex-wrap gap-2">
                      {allSkills
                        .filter((skill) => !selectedSkills.includes(skill))
                        .slice(0, 6)
                        .map((skill, index) => (
                          <button
                            key={index}
                            className="inline-flex items-center border rounded-full px-4 py-2 hover:bg-gray-50"
                            onClick={() => addSkill(skill)}
                            disabled={selectedSkills.length >= 5}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="mr-1"
                            >
                              <line x1="12" y1="5" x2="12" y2="19"></line>
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                            {skill}
                          </button>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        switch (substep) {
          case 1:
            return (
              <div className="space-y-6">
                <div className="flex justify-between">
                  <h2 className="text-3xl font-bold mb-6">
                    What level of expertise is required for the project?
                  </h2>

                  <div className="space-y-6 w-1/2">
                    <div>
                      <label className="block text-lg mb-4">
                        Choose the level of expertise
                      </label>
                      <div className="space-y-4">
                        {[
                          "Entry-level",
                          "Intermediate level",
                          "Expert level",
                        ].map((level, index) => (
                          <div
                            key={index}
                            className="flex items-center"
                            onClick={() => selectExpertiseLevel(level)}
                          >
                            <input
                              type="radio"
                              id={`expertise-${index}`}
                              name="expertise"
                              value={level}
                              checked={formData.expertiseLevel === level}
                              onChange={() => selectExpertiseLevel(level)}
                              className="h-5 w-5 text-blue-600 mr-3 cursor-pointer"
                            />
                            <label
                              htmlFor={`expertise-${index}`}
                              className="text-lg cursor-pointer"
                            >
                              {level}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );

          case 2:
            return (
              <div className="space-y-6">
                <div className="flex justify-between">
                  <h2 className="text-3xl font-bold mb-6">
                    How would you like to structure your project?
                  </h2>

                  <div className="space-y-6 w-1/2">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          ></path>
                        </svg>
                      </div>
                      <span>{formData.expertiseLevel}</span>
                    </div>

                    <div>
                      <label className="block text-lg mb-4">
                        Choose the scope of work
                      </label>
                      <div className="space-y-6">
                        <div
                          className="flex items-center cursor-pointer"
                          onClick={() =>
                            selectProjectStructure("One-time setup")
                          }
                        >
                          <input
                            type="radio"
                            id="one-time"
                            name="project-structure"
                            value="One-time setup"
                            checked={
                              formData.projectStructure === "One-time setup"
                            }
                            onChange={() =>
                              selectProjectStructure("One-time setup")
                            }
                            className="h-5 w-5 text-blue-600 mr-3"
                          />
                          <div>
                            <label
                              htmlFor="one-time"
                              className="text-lg block cursor-pointer"
                            >
                              One-time setup
                            </label>
                            <p className="text-gray-600">
                              A single setup task with no long-term engagement
                              needed.
                            </p>
                          </div>
                        </div>

                        <div
                          className="flex items-center cursor-pointer"
                          onClick={() => selectProjectStructure("Short-term")}
                        >
                          <input
                            type="radio"
                            id="short-term"
                            name="project-structure"
                            value="Short-term"
                            checked={formData.projectStructure === "Short-term"}
                            onChange={() =>
                              selectProjectStructure("Short-term")
                            }
                            className="h-5 w-5 text-blue-600 mr-3"
                          />
                          <div>
                            <label
                              htmlFor="short-term"
                              className="text-lg block cursor-pointer"
                            >
                              Short-term
                            </label>
                            <p className="text-gray-600">
                              A project with a set timeline to complete specific
                              tasks.
                            </p>
                          </div>
                        </div>

                        <div
                          className="flex items-center cursor-pointer"
                          onClick={() =>
                            selectProjectStructure("Ongoing project")
                          }
                        >
                          <input
                            type="radio"
                            id="ongoing"
                            name="project-structure"
                            value="Ongoing project"
                            checked={
                              formData.projectStructure === "Ongoing project"
                            }
                            onChange={() =>
                              selectProjectStructure("Ongoing project")
                            }
                            className="h-5 w-5 text-blue-600 mr-3"
                          />
                          <div>
                            <label
                              htmlFor="ongoing"
                              className="text-lg block cursor-pointer"
                            >
                              Ongoing project
                            </label>
                            <p className="text-gray-600">
                              Continuous work requiring regular financial
                              management.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );

          case 3:
            return (
              <div className="space-y-6">
                <div className="flex justify-between">
                  <h2 className="text-3xl font-bold mb-6">
                    Select estimated completion timeline
                  </h2>

                  <div className="space-y-6 w-1/2">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          ></path>
                        </svg>
                      </div>
                      <span>{formData.expertiseLevel}</span>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                        </div>
                        <span>{formData.projectStructure}</span>
                      </div>
                      <p className="ml-12 text-gray-600">
                        A project with a set timeline to complete specific
                        tasks.
                      </p>
                    </div>

                    <div>
                      <label className="block text-lg mb-4">
                        Choose project timeline
                      </label>
                      <div className="space-y-4">
                        {[
                          "1 - 3 Months",
                          "3 - 6 Months",
                          "6 Months and above",
                        ].map((timeline, index) => (
                          <div
                            key={index}
                            className="flex items-center cursor-pointer"
                            onClick={() => selectProjectTimeline(timeline)}
                          >
                            <input
                              type="radio"
                              id={`timeline-${index}`}
                              name="timeline"
                              value={timeline}
                              checked={formData.projectTimeline === timeline}
                              onChange={() => selectProjectTimeline(timeline)}
                              className="h-5 w-5 text-blue-600 mr-3"
                            />
                            <label
                              htmlFor={`timeline-${index}`}
                              className="text-lg cursor-pointer"
                            >
                              {timeline}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );

          default:
            return <p>Substep not found</p>;
        }

      case 4:
        return (
          <div className="space-y-6">
            <div className="flex justify-between">
              <h2 className="text-3xl font-bold mb-6">
                What is your budget for this project?
              </h2>

              <div className="space-y-6 w-1/2">
                <div>
                  <label className="block text-lg mb-4">
                    Choose budget type
                  </label>
                  <div className="flex space-x-4 mb-6">
                    <div
                      className={`border rounded-lg p-4 flex items-center space-x-2 cursor-pointer ${
                        formData.budgetType === "Hourly Rate"
                          ? "border-blue-600 bg-blue-50"
                          : ""
                      }`}
                      onClick={() =>
                        setFormData({ ...formData, budgetType: "Hourly Rate" })
                      }
                    >
                      <input
                        type="radio"
                        id="hourly-rate"
                        name="budget-type"
                        checked={formData.budgetType === "Hourly Rate"}
                        onChange={() => {}}
                        className="h-4 w-4 text-blue-600"
                      />
                      <label htmlFor="hourly-rate">Hourly Rate</label>
                    </div>
                    <div
                      className={`border rounded-lg p-4 flex items-center space-x-2 cursor-pointer ${
                        formData.budgetType === "Fixed Rate"
                          ? "border-blue-600 bg-blue-50"
                          : ""
                      }`}
                      onClick={() =>
                        setFormData({ ...formData, budgetType: "Fixed Rate" })
                      }
                    >
                      <input
                        type="radio"
                        id="fixed-rate"
                        name="budget-type"
                        checked={formData.budgetType === "Fixed Rate"}
                        onChange={() => {}}
                        className="h-4 w-4 text-blue-600"
                      />
                      <label htmlFor="fixed-rate">Fixed Rate</label>
                    </div>
                  </div>

                  {formData.budgetType === "Fixed Rate" ? (
                    <div>
                      <label className="block text-gray-600 mb-2">Rate</label>
                      <input
                        type="text"
                        value={formData.budgetAmount}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            budgetAmount: e.target.value,
                          })
                        }
                        className="w-full border rounded-lg p-3"
                        placeholder="$2000.00"
                      />
                      <p className="text-gray-600 mt-2 text-sm">
                        Recommended Rate: $2000 to attract experienced CFOs for
                        quality financial management
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex space-x-4">
                        <div className="w-1/2">
                          <label className="block text-gray-600 mb-2">
                            From
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              value={formData.hourlyRateFrom}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  hourlyRateFrom: e.target.value,
                                })
                              }
                              className="w-full border rounded-lg p-3"
                              placeholder="$50.00"
                            />
                            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                              /hr
                            </span>
                          </div>
                        </div>
                        <div className="w-1/2">
                          <label className="block text-gray-600 mb-2">To</label>
                          <div className="relative">
                            <input
                              type="text"
                              value={formData.hourlyRateTo}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  hourlyRateTo: e.target.value,
                                })
                              }
                              className="w-full border rounded-lg p-3"
                              placeholder="$100.00"
                            />
                            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                              /hr
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Recommended Rate: $75 - $150/hr to attract experienced
                        CFOs for quality financial management
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <div className="flex justify-between">
              <h2 className="text-3xl font-bold mb-6">Project Details</h2>

              <div className="w-full space-y-8">
                {/* Project Title */}
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">
                      {formData.title ||
                        "Chief Financial Officer for Bookkeeping and Financial Management"}
                    </h3>
                    <button
                      className="text-blue-600 p-1 rounded-full hover:bg-blue-50"
                      onClick={() => setCurrentStep(1)}
                    >
                      <Edit size={18} />
                    </button>
                  </div>
                </div>

                {/* Description */}
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold">Description</h3>
                    <button
                      className="text-blue-600 p-1 rounded-full hover:bg-blue-50"
                      onClick={() => {
                        // Could open a modal to edit the description
                      }}
                    >
                      <Edit size={18} />
                    </button>
                  </div>
                  <p className="text-gray-700">
                    {formData.description ||
                      "We are looking for an experienced Chief Financial Officer (CFO) to handle the financial management and bookkeeping for our company. The scope of work includes preparing monthly financial reports, maintaining accurate financial records, ensuring compliance with regulations, and providing financial analysis for business growth."}
                  </p>
                  <div className="mt-4">
                    <button className="flex items-center text-gray-600 gap-2 border p-2 rounded">
                      <Upload size={16} />
                      <span>Upload document</span>
                    </button>
                  </div>
                </div>

                {/* Skillsets */}
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold">Skillsets</h3>
                    <button
                      className="text-blue-600 p-1 rounded-full hover:bg-blue-50"
                      onClick={() => setCurrentStep(2)}
                    >
                      <Edit size={18} />
                    </button>
                  </div>
                  <div className="flex flex-wrap">
                    {formData.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="inline-flex items-center bg-blue-600 text-white rounded-full px-4 py-2 mr-2 mb-2"
                      >
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Level of expertise */}
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold">
                      Level of expertise
                    </h3>
                    <button
                      className="text-blue-600 p-1 rounded-full hover:bg-blue-50"
                      onClick={() => {
                        setCurrentStep(3);
                        setSubStep(1);
                      }}
                    >
                      <Edit size={18} />
                    </button>
                  </div>
                  <p className="text-gray-700">{formData.expertiseLevel}</p>
                </div>

                {/* Scope of work */}
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold">Scope of work</h3>
                    <button
                      className="text-blue-600 p-1 rounded-full hover:bg-blue-50"
                      onClick={() => {
                        setCurrentStep(3);
                        setSubStep(2);
                      }}
                    >
                      <Edit size={18} />
                    </button>
                  </div>
                  <p className="text-gray-700">{formData.projectStructure}</p>
                  <p className="text-gray-600 mt-1">
                    {formData.projectStructure === "Ongoing project"
                      ? "Continuous work requiring regular financial management."
                      : formData.projectStructure === "Short-term"
                      ? "A project with a set timeline to complete specific tasks."
                      : "A single setup task with no long-term engagement needed."}
                  </p>
                </div>

                {/* Timeline */}
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold">Timeline</h3>
                    <button
                      className="text-blue-600 p-1 rounded-full hover:bg-blue-50"
                      onClick={() => {
                        setCurrentStep(3);
                        setSubStep(3);
                      }}
                    >
                      <Edit size={18} />
                    </button>
                  </div>
                  <p className="text-gray-700">{formData.projectTimeline}</p>
                </div>

                {/* Budget */}
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold">Budget</h3>
                    <button
                      className="text-blue-600 p-1 rounded-full hover:bg-blue-50"
                      onClick={() => setCurrentStep(4)}
                    >
                      <Edit size={18} />
                    </button>
                  </div>
                  {/* <p className="text-gray-700">
                      {formData.budgetType === "Fixed Rate"
                        ? formData.budgetAmount
                        : `${formData.hourlyRateFrom.replace(', '')} - ${formData.hourlyRateTo.replace(', '')}/hr`}
                    </p> */}
                </div>

                {/* Milestone */}
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold">Milestone</h3>
                    <button
                      className="text-blue-600 p-1 rounded-full hover:bg-blue-50"
                      onClick={() => {
                        // Could open a modal to edit milestones
                      }}
                    >
                      <Edit size={18} />
                    </button>
                  </div>
                  <ul className="list-disc pl-5 space-y-2">
                    {formData.milestones.map((milestone, index) => (
                      <li key={index} className="text-gray-700">
                        {milestone}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-white overflow-auto"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
        >
          <div className="container mx-auto px-4 py-6 max-w-5xl h-full">
            {currentStep > 0 && (
              <>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleBack}
                      className="mr-2"
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </Button>
                    <h1 className="text-xl font-semibold">Project</h1>
                  </div>
                  <Button variant="ghost" size="icon" onClick={handleClose}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-medium">
                      {currentStep}/{totalSteps}
                    </span>
                    <span className="text-xl">Create a project</span>
                  </div>

                  <ProjectCreateStepIndicator
                    currentStep={currentStep}
                    totalSteps={totalSteps}
                  />
                </div>
              </>
            )}

            <motion.div
              className="mb-8"
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderStepContent()}
            </motion.div>

            {currentStep > 0 && (
              <div className="border-t pt-6 flex justify-between">
                <Button variant="outline" onClick={handleBack}>
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!formData.title && currentStep === 1}
                  className={
                    currentStep === 4 &&
                    formData.projectStructure !== "Short-term"
                      ? "bg-gray-300"
                      : ""
                  }
                >
                  {currentStep < totalSteps ? "Next Step" : "Submit"}
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
const CreateProjectOverlay = () => (
  <Suspense fallback={<Loader />}>
    <CreateProjectOverlayComp />
  </Suspense>
);

export default CreateProjectOverlay;
