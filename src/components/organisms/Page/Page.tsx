import React, { useContext } from "react";
import SidePanel from "../../molecules/SidePanel/SidePanel";
import { SidePanelContext } from '../../../app/App';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Page = (props: Props) => {
  const { children, className = "min-vh-100 my-5" } = props;

  const { isSidePanelOpen, handleCloseSidePanel } = useContext(SidePanelContext);

  return (
  <section className={className}>
    <SidePanel isOpen={isSidePanelOpen} onClose={handleCloseSidePanel} />
    {children}
  </section>);
};

export default Page;
