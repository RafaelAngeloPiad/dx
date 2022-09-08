import "./css/Button.css";
import "./css/ButtonDx.scss";

const STYLES = ["rounded-dx", "arrow-dx", "outline-dx"];

// const SIZES = [
//   "custom_btn--medium",
//   "custom_btn--large",
//   "custom_btn--mobile",
//   "custom_btn--wide",
// ];

// const COLOR = [
//   "custom_primary",
//   "custom_blue",
//   "custom_red",
//   "custom_green",
//   "custom_gray",
// ];

export const ButtonDx = ({
  children,
  type,
  onClick,
  buttonStyle,
  // buttonSize,
  // buttonColor,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  // const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]; ${checkButtonSize}

  // const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;  ${checkButtonColor}

  return (
    <>
      <button className={checkButtonStyle} onClick={onClick} type={type}>
        {checkButtonStyle === "rounded-dx" && children}
        {checkButtonStyle === "arrow-dx" && (
          <>
            <span class="hover-underline-animation"> {children} </span>
            <svg
              viewBox="0 0 46 16"
              height="10"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
              id="arrow-horizontal"
            >
              <path
                transform="translate(30)"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                data-name="Path 10"
                id="Path_10"
                fill="#3b8fbe"
              ></path>
            </svg>
          </>
        )}
      </button>
    </>
  );
};

/*{checkButtonStyle === "arrow-dx" ? (
        <>
          <span class="hover-underline-animation"> Shop now </span>
          <svg
            viewBox="0 0 46 16"
            height="10"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
            id="arrow-horizontal"
          >
            <path
              transform="translate(30)"
              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
              data-name="Path 10"
              id="Path_10"
            ></path>
          </svg>
          {children}
        </>
      ) : (
        { children }
      )} */
