import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  identifier?: ButtonHTMLAttributes<HTMLButtonElement>["id"];
  testId?: ButtonHTMLAttributes<HTMLButtonElement>["datatype"];
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: ButtonHTMLAttributes<HTMLButtonElement>["disabled"];
  popovertarget?: ButtonHTMLAttributes<HTMLButtonElement>["popoverTarget"];
  styling?: ButtonHTMLAttributes<HTMLButtonElement>["className"];
  onClick: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  children?: string | JSX.Element | JSX.Element[] | "() => JSX.Element";
};

const baseStyles =
  "outline-none disabled:bg-green-600 disabled:border-transparent";

const Button = ({
  identifier,
  type = "button",
  disabled = false,
  popovertarget,
  styling,
  testId,
  onClick,
  children = "Click Me!",
}: ButtonProps) => {
  return (
    <button
      id={identifier}
      data-testid={testId}
      type={type}
      disabled={disabled}
      popoverTarget={popovertarget}
      className={`${baseStyles} ${styling}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
