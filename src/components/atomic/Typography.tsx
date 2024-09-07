//types
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  variant: "h3";
  className?: string;
}

const VARIANT_VS_CLASSNAME = {
  h3: "text-4xl font-semibold",
};

export const Typography = ({ children, variant, className }: Props) => {
  return (
    <div className={`${VARIANT_VS_CLASSNAME[variant]} ${className ?? ""}`}>
      {children}
    </div>
  );
};
