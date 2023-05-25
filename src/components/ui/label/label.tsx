import * as React from "react";

import { type LabelVariantsProps } from "./label.variants";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    LabelVariantsProps {
  className?: string;
  children: React.ReactNode;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, children, ...props }, ref) => (
    <label ref={ref} className={className} {...props}>
      {children}
    </label>
  )
);
Label.displayName = "Label";

export { Label };
