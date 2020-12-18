import React from "react";

const PageLayout: React.FC = ({ children }) => {
  return <main className="min-h-screen w-full p-16">{children}</main>;
};

export default PageLayout;
