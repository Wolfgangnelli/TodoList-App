import React from "react";
import { Button as ButtonB } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

interface Props {
  path?: string
  label: React.ReactNode
  className: string
  onClick?: () => void
}

const Button = (props: Props) => {
  const { path = "", label = "", className = "", onClick = undefined } = props;

  return path ? (
    <LinkContainer to={path}>
      <ButtonB className={className}>{label}</ButtonB>
    </LinkContainer>
  ) : onClick ? (
    <button className={className} onClick={onClick}>{label}</button>
  ) : (
    <button className={className}>{label}</button>
  );
};

export default Button;
