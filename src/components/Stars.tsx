import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import React from "react";

const Stars = ({ cls }: { cls?: string }) => {
  return (
    <div className={cn("flex gap-0.5", cls)}>
      <Star className="h-4 w-4 text-violet-600 fill-violet-600" />
      <Star className="h-4 w-4 text-violet-600 fill-violet-600" />
      <Star className="h-4 w-4 text-violet-600 fill-violet-600" />
      <Star className="h-4 w-4 text-violet-600 fill-violet-600" />
      <Star className="h-4 w-4 text-violet-600 fill-violet-600" />
    </div>
  );
};

export default Stars;
