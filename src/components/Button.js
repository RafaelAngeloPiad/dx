import "./css/Button.css";

const STYLES = [
  "custom_btn--primary",
  "custom_btn--outline",
  "custom_btn--words",
];

const SIZES = [
  "custom_btn--medium",
  "custom_btn--large",
  "custom_btn--mobile",
  "custom_btn--wide",
];

const COLOR = [
  "custom_primary",
  "custom_blue",
  "custom_red",
  "custom_green",
  "custom_gray",
];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

  return (
    <button
      className={`custom_btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
