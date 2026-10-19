import React from "react";

interface LogoProps {
  className?: string;
  variant?: "full" | "mark" | "compact";
  dark?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  variant = "full",
  dark = false,
}) => {
  return (
    <div className={`inline-flex flex-col justify-center ${className}`}>
      <span
        className={`font-black tracking-tight text-xl sm:text-2xl leading-none select-none ${
          dark ? "text-white" : "text-navy-900"
        }`}
      >
        CORE <span className="text-forest-700">SYNFUELS</span>
      </span>
      {variant === "full" && (
        <span
          className={`text-[9px] sm:text-[10px] tracking-widest uppercase font-bold mt-1 select-none ${
            dark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Consulting & Industrial Solutions
        </span>
      )}
    </div>
  );
};
