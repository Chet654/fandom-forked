import classes from "../Style/Pages/ErrorPage.module.scss";
import { useNavigate } from "react-router-dom";
import UIButton from "../Components/UIButton";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className={classes["Main"]}>
      <p className={classes["text"]}>eRr0r</p>

      <UIButton type="active" onClick={() => navigate("/")}>
        Go Back
      </UIButton>
    </div>
  );
};

export default Error;
