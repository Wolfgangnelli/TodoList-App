import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Page = (props: Props) => {
  const { children, className = "min-vh-100 my-5" } = props;

  return <section className={className}>{children}</section>;
};

export default Page;
