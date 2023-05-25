import { VariantProps, cva } from "class-variance-authority";

const labelVariants = cva("text-slate-50 font-medium", {
  variants: {
    size: {
      default: "text-normal sm:text-sm lg:text-lg",
      sm: "text-sm sm:text-xs lg:text-sm",
      lg: "text-lg sm:text-base lg:text-xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});
type LabelVariantsProps = VariantProps<typeof labelVariants>;

export { labelVariants, type LabelVariantsProps };
