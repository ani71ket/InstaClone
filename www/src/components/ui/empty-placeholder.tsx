"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

const EmptyPlaceholder = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & {
        isBackgroundVisible?: boolean;
        fullWidth?: boolean;
    }
>(({ className, isBackgroundVisible = true, fullWidth, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "space-y-5 rounded-xl bg-accent p-10 text-center text-foreground shadow dark:bg-muted/40",
            !isBackgroundVisible && "bg-transparent shadow-none",
            fullWidth ? "w-full" : "max-w-md",
            className
        )}
        {...props}
    />
));
EmptyPlaceholder.displayName = "EmptyPlaceholder";

const EmptyPlaceholderIcon = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex items-center justify-center", className)}
        {...props}
    >
        {children}
    </div>
));
EmptyPlaceholderIcon.displayName = "EmptyPlaceholderIcon";

const EmptyPlaceholderTitle = React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-2xl font-bold", className)} {...props} />
));
EmptyPlaceholderTitle.displayName = "EmptyPlaceholderTitle";

const EmptyPlaceholderDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("max-w-xs text-sm text-foreground", className)}
        {...props}
    />
));
EmptyPlaceholderDescription.displayName = "EmptyPlaceholderDescription";

const EmptyPlaceholderContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "flex flex-col items-center gap-3 text-center",
            className
        )}
        {...props}
    />
));
EmptyPlaceholderContent.displayName = "EmptyPlaceholderContent";

export {
    EmptyPlaceholder,
    EmptyPlaceholderIcon,
    EmptyPlaceholderTitle,
    EmptyPlaceholderDescription,
    EmptyPlaceholderContent,
};
