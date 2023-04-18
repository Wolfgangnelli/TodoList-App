import React from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

interface Props {
  path: string;
  label: string;
  className?: string;
}

const ButtonLink = (props: Props) => {
  const { path = "", label = "", className = "" } = props;

  return (
    <LinkContainer to={path}>
      <Button className={className}>{label}</Button>
    </LinkContainer>
  );
};

export default ButtonLink;
