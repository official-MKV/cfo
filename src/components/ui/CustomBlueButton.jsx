import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CustomBlueButton({ className, children, ...props }) {
  return (
    <Button
      className={cn("bg-[#3B80B3] hover:bg-[#3781b6] text-white  text-sm font-semibold xl:h-12", className)}
      {...props}
    >
      {children}
    </Button>
  );
}
