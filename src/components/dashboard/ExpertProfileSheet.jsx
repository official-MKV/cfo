// components/ExpertProfileSheet.jsx
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Star,
  Briefcase,
  MapPin,
  Clock,
  X,
  MessageSquare,
  FileText,
  Award,
  GraduationCap,
} from "lucide-react";
import { financialExpertsDataFull } from "@/data";

// Skeleton components for loading states
const ProfileSkeleton = () => (
  <div className="animate-pulse">
    <div className="flex items-start">
      <Skeleton className="h-20 w-20 rounded-full" />
      <div className="ml-4 space-y-2">
        <Skeleton className="h-6 w-40" />
        <Skeleton className="h-4 w-32" />
        <div className="flex space-x-4">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
        </div>
      </div>
    </div>

    <div className="flex space-x-2 mt-6">
      <Skeleton className="h-10 w-1/2" />
      <Skeleton className="h-10 w-1/2" />
    </div>

    <Skeleton className="h-6 w-64 mt-6" />

    <div className="mt-6 border rounded-md p-4">
      <Skeleton className="h-6 w-20 mb-4" />
      <Skeleton className="h-32 w-full" />
    </div>

    <div className="mt-6 border rounded-md p-4">
      <Skeleton className="h-6 w-20 mb-4" />
      <div className="flex flex-wrap gap-2">
        {[...Array(8)].map((_, i) => (
          <Skeleton key={i} className="h-8 w-24" />
        ))}
      </div>
    </div>

    <div className="mt-6 border rounded-md p-4">
      <Skeleton className="h-6 w-20 mb-4" />
      <div className="space-y-4">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex">
            <Skeleton className="h-12 w-12 mr-3" />
            <Skeleton className="h-6 w-48" />
          </div>
        ))}
      </div>
    </div>

    <div className="mt-6 border rounded-md p-4">
      <Skeleton className="h-6 w-20 mb-4" />
      <div className="space-y-3">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="space-y-1">
            <Skeleton className="h-5 w-48" />
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-3 w-32" />
          </div>
        ))}
      </div>
    </div>

    <div className="mt-6">
      <Skeleton className="h-6 w-40 mb-4" />
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="space-y-2 border-b pb-4">
            <div className="flex justify-between">
              <Skeleton className="h-5 w-48" />
              <Skeleton className="h-4 w-16" />
            </div>
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-16 w-full" />
            <div className="flex justify-between">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-6">
      <Skeleton className="h-6 w-40 mb-4" />
      <div className="space-y-4">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="space-y-2 border-b pb-4">
            <Skeleton className="h-16 w-full" />
            <div className="flex items-center">
              <Skeleton className="h-8 w-8 rounded-full" />
              <div className="ml-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-24" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const WorkHistoryItem = ({
  title,
  rating,
  dateRange,
  description,
  hourlyRate,
}) => (
  <div className="py-4 border-b last:border-b-0">
    <div className="flex justify-between mb-1">
      <h3 className="font-medium text-lg text-primary">{title}</h3>
      <div className="flex items-center">
        <Star className="h-4 w-4  mr-1" />
        <span>{rating}</span>
      </div>
    </div>
    <div className="text-sm text-muted-foreground mb-2">{dateRange}</div>
    <p className="mb-3">{description}</p>
    <div className="flex justify-between items-center">
      <span className="font-semibold">${hourlyRate.toFixed(2)}</span>
      <span className="text-sm text-muted-foreground">Hourly</span>
    </div>
  </div>
);

const TestimonialItem = ({ quote, name, title, initials }) => (
  <div className="py-4 border-b last:border-b-0">
    <p className="italic mb-4">"{quote}"</p>
    <div className="flex items-center">
      <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium">
        {initials}
      </div>
      <div className="ml-2">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
    </div>
  </div>
);

const SkillBadge = ({ skill }) => (
  <Badge
    variant="secondary"
    className="mr-2 mb-2 py-1.5 text-primary bg-primary/20 rounded-full"
  >
    {skill}
  </Badge>
);

const CertificateItem = ({ title, icon }) => (
  <div className="flex items-center py-2">
    <div className="h-12 w-12 bg-blue-50 rounded-md flex items-center justify-center mr-3">
      <span className="text-blue-500 text-xs font-semibold">{icon}</span>
    </div>
    <div>
      <p className="font-medium">{title}</p>
    </div>
  </div>
);

const SectionHeader = ({ icon, children }) => (
  <h3 className="flex items-center text-lg font-semibold text-primary mb-4">
    {icon}
    <span className="ml-2">{children}</span>
  </h3>
);

const ExpertProfileSheet = ({ expertId, isOpen, onClose }) => {
  const [expert, setExpert] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen && expertId) {
      // Simulate data fetching delay
      setLoading(true);

      // Find the expert with complete profile data
      const timer = setTimeout(() => {
        const foundExpert = financialExpertsDataFull.find(
          (expert) => expert.id === expertId
        );
        setExpert(foundExpert || null);
        setLoading(false);
      }, 800); // Simulate network delay

      return () => clearTimeout(timer);
    }
  }, [expertId, isOpen]);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        className="sm:max-w-md md:max-w-3xl lg:max-w-7xl overflow-y-auto p-0 md:w-full"
        side="right"
      >
        <SheetHeader className="flex flex-row justify-between items-center p-4 border-b">
          <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </SheetClose>
        </SheetHeader>

        <div className="p-6">
          {loading || !expert ? (
            <ProfileSkeleton />
          ) : (
            <>
              <div className="grid grid-cols-2 gap-5">
                <div className="left-grid flex flex-col ">
                  <div className="flex items-start">
                    <div className="relative h-20 w-20 rounded-full overflow-hidden mr-4">
                      <Image
                        src={expert.imgSrc || "/placeholder.jpg"}
                        alt={expert.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-primary">
                        {expert.name}
                      </h2>
                      <p className="text-lg text-muted-foreground">
                        {expert.title}
                      </p>
                      <div className="flex flex-wrap items-center mt-1 gap-x-4 gap-y-1">
                        <div className="flex items-center text-muted-foreground">
                          <Star className="h-4 w-4 text-muted-foreground mr-1" />
                          <span>{expert.rating}</span>
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 text-muted-foreground mr-1" />
                          <span className="text-muted-foreground">
                            {expert.jobs} Jobs
                          </span>
                        </div>
                        {expert.location && (
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 text-muted-foreground mr-1" />
                            <span className="text-muted-foreground">
                              {expert.location}
                            </span>
                          </div>
                        )}
                        {expert.localTime && (
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                            <span className="text-muted-foreground">
                              {expert.localTime}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2 mt-6">
                    <Button className="flex-1">Book a consultation</Button>
                    <Button variant="outline" className="flex-1">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Send a message
                    </Button>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-2 text-primary">
                      Experienced {expert.title} | {expert.specialty}
                    </h3>
                  </div>

                  <div className="mt-6 rounded-md p-4">
                    <SectionHeader
                      icon={<FileText className="h-5 w-5 text-primary" />}
                    >
                      Bio
                    </SectionHeader>
                    <p>{expert.bio}</p>
                  </div>

                  <div className="mt-6  rounded-md p-4">
                    <SectionHeader
                      icon={<Award className="h-5 w-5 text-primary" />}
                    >
                      Skills
                    </SectionHeader>
                    <div className="flex flex-wrap">
                      {expert.skills.map((skill, index) => (
                        <SkillBadge key={index} skill={skill} />
                      ))}
                    </div>
                  </div>

                  {/* Certificates Section */}
                  <div className="mt-6  rounded-md p-4">
                    <SectionHeader
                      icon={<Award className="h-5 w-5 text-primary" />}
                    >
                      Certificates
                    </SectionHeader>
                    {expert.certificates.map((cert, index) => (
                      <CertificateItem
                        key={index}
                        title={cert.title}
                        icon={cert.icon}
                      />
                    ))}
                  </div>
                </div>
                <div id="right-grid">
                  <div className="mt-6">
                    <SectionHeader
                      icon={<Briefcase className="h-5 w-5 text-blue-600" />}
                    >
                      Work History
                    </SectionHeader>
                    <div className="mt-2">
                      {expert.workHistory.map((work, index) => (
                        <WorkHistoryItem
                          key={index}
                          title={work.title}
                          rating={work.rating}
                          dateRange={work.dateRange}
                          description={work.description}
                          hourlyRate={work.hourlyRate}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <SectionHeader
                      icon={<MessageSquare className="h-5 w-5 text-blue-600" />}
                    >
                      Testimonials
                    </SectionHeader>
                    <div className="mt-2">
                      {expert.testimonials.map((testimonial, index) => (
                        <TestimonialItem
                          key={index}
                          quote={testimonial.quote}
                          name={testimonial.name}
                          title={testimonial.title}
                          initials={testimonial.initials}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 border rounded-md p-4">
                <SectionHeader
                  icon={<GraduationCap className="h-5 w-5 text-primary" />}
                >
                  Education
                </SectionHeader>
                {expert.education.map((edu, index) => (
                  <div key={index} className="py-2">
                    <h4 className="font-medium">{edu.institution}</h4>
                    <p className="text-muted-foreground">{edu.degree}</p>
                    <p className="text-sm text-muted-foreground">{edu.years}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ExpertProfileSheet;
