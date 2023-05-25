import * as React from "react";

import { cn } from "@/utils/index";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col gap-2 rounded-md border border-slate-700 bg-transparent p-5 shadow-md md:max-w-[950px]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
Card.displayName = "Card";

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  children: React.ReactNode;
}

const CardTitle: React.FC<CardTitleProps> = ({ className, children }) => (
  <h3
    className={cn(
      "text-center text-xl font-bold tracking-wide text-slate-50",
      className
    )}
  >
    {children}
  </h3>
);
CardTitle.displayName = "CardTitle";

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

const CardContent: React.FC<CardContentProps> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn("p-2 text-sm text-emerald-500", className)} {...props}>
    {children}
  </div>
);
CardContent.displayName = "CardContent";

interface CardActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

const CardActions: React.FC<CardActionsProps> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn("flex", className)} {...props}>
    {children}
  </div>
);

export { Card, CardContent, CardTitle, CardActions };
