"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type CheckboxProps = React.ComponentProps<"input">;
function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <input type="checkbox" {...props} />
    // <CheckboxPrimitive.Root
    //   data-slot="checkbox"
    //   className={cn(
    //     "peer border-primary dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-5 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
    //     className,
    //   )}
    //   onChange={(e) => {
    //     if (onChange) {
    //       onChange(e.target.checked);
    //     }
    //   }}
    //   {...props}
    // >
    //   <CheckboxPrimitive.Indicator
    //     data-slot="checkbox-indicator"
    //     className="flex items-center justify-center text-current transition-none"
    //   >
    //     <CheckIcon className="size-4.5" />
    //   </CheckboxPrimitive.Indicator>
    // </CheckboxPrimitive.Root>
  );
}

export default Checkbox;
