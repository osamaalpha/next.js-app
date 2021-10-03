import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { forwardRef } from "react";
const Icon = forwardRef((
  props,
  ref: any // doesn't give the warning
) => (
  <h1 ref={ref}>
    <FontAwesomeIcon icon={faCartArrowDown} {...props} />
  </h1>
));
Icon.displayName = "Icon";
export default Icon;
