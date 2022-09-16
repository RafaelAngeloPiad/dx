import { CSSTransition } from "react-transition-group";

function Animate({ children, animateClass }) {
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={9000}
      classNames={animateClass}
    >
      {children}
    </CSSTransition>
  );
}

export default Animate;
