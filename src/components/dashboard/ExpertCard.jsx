import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Star, Briefcase, Clock } from "lucide-react";
import ExpertProfileSheet from "./ExpertProfileSheet";

const ExpertCard = ({ expert }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <>
      <Card
        className="overflow-hidden cursor-pointer hover:shadow-md  shadow-none transition-shadow border-none"
        onClick={() => setIsProfileOpen(true)}
      >
        <div className="flex flex-col h-full">
          <div className="relative flex items-center p-4">
            <div className="relative h-24 w-24 rounded-md overflow-hidden">
              <Image
                src={expert.imgSrc || "/placeholder.jpg"}
                alt={expert.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 96px"
                priority={false}
              />
            </div>
            <div className="ml-4">
              <h3 className="font-medium text-lg">{expert.name}</h3>
              <p className="text-muted-foreground">{expert.title}</p>
              <div className="flex items-center mt-1">
                <Briefcase className="h-4 w-4 mr-1 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {expert.jobs} Jobs
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center px-4 py-2 ">
            <div className="flex items-center">
              <span className="font-semibold text-lg">
                $ {expert.rate.toFixed(2)}
              </span>
              <span className="ml-2 text-xs px-2 py-0.5 bg-green-100 text-green-800 rounded-full flex items-center justify-center">
                <Clock className="size-4 mr-2" />
                {expert.rateType}
              </span>
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4  mr-1 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">
                {expert.rating.toFixed(1)}
              </span>
            </div>
          </div>

          <div className="p-4 ">
            <p className="text-sm text-muted-foreground line-clamp-2">
              {expert.description}
            </p>
          </div>
        </div>
      </Card>

      {/* Pass the expert ID instead of the entire object */}
      <ExpertProfileSheet
        expertId={expert.id}
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
    </>
  );
};

export default ExpertCard;
