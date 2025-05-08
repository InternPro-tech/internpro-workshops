import React from "react";

const MaxWidthWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-[1140px] mx-auto">{children}</div>;
};

export default MaxWidthWrapper;
