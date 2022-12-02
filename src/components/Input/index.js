import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  FillWhiteA700: "bg-white_A700",
  FillGray100: "bg-gray_100",
  OutlineGray5006c: "border border-gray_500_6c border-solid",
  srcFillWhiteA700: "bg-white_A700",
};
const shapes = {
  RoundedBorder8: "rounded-radius8",
  RoundedBorder12: "rounded-radius12",
  srcRoundedBorder12: "rounded-radius12",
};
const sizes = {
  sm: "md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px]",
  md: "pb-[14px] sm:pb-[7px] md:pb-[9px] md:pt-[12px] pt-[18px] sm:pt-[9px] px-[14px] sm:px-[7px] md:px-[9px]",
  lg: "sm:pb-[10px] md:pb-[13px] pb-[19px] sm:pt-[12px] md:pt-[15px] pt-[23px] md:px-[13px] sm:px-[15px] px-[19px]",
  smSrc: "md:p-[14px] p-[21px] sm:px-[15px] sm:py-[11px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "RoundedBorder8",
    "RoundedBorder12",
    "srcRoundedBorder12",
  ]),
  variant: PropTypes.oneOf([
    "FillWhiteA700",
    "FillGray100",
    "OutlineGray5006c",
    "srcFillWhiteA700",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "smSrc"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "",
  size: "",
};

export { Input };
