//types
import type { ReactNode, CSSProperties } from "react";

interface Props {
  children: ReactNode;
  variant: "h3" | "heroText" | "body";
  className?: string;
  style?: CSSProperties;
}

const VARIANT_VS_CLASSNAME = {
  h3: "text-4xl font-semibold",
  heroText: "text-8xl font-bold",
  body: "",
};

export const Typography = ({ children, variant, className, style }: Props) => {
  return (
    <div
      className={`${VARIANT_VS_CLASSNAME[variant]} ${
        className ?? ""
      } text-slate-50`}
      style={style}
    >
      {children}
    </div>
  );
};
