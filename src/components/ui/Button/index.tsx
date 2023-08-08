import { ReactNode, useEffect } from "react";
import "./button.scss";
import { testApi } from "../../../utils/apiUtil";

export interface Props {
  type?: "button" | "submit" | "reset";
  children: ReactNode | Array<ReactNode>;
}

function Button({ children, type = "button" }: Props) {
  useEffect(() => {
    testApi().then((res) => {
      alert(res);
    });
  }, []);

  return (
    <button className={"sneakers-button"} type={type}>
      {children}
    </button>
  );
}

export default Button;
