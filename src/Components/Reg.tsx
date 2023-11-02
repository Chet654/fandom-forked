import { useState } from "react";
import classes from "../Style/Components/reg.module.scss";
import UIButton from "./UIButton";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux";
import { login } from "../Store/ActionCreators/UserActionCreators";
import { data } from "./data";
import UIInput from "./UIInput";
const Reg = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [reg, setReg] = useState(true);
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const [customLogin, setCustomLogin] = useState("");
  const [customPhone, setCustomPhone] = useState("");
  const handler = async () => {
    const userData = { number, password };
    await dispatch(login({ userData }));
  };
  return (
    <div className={classes["Card"]}>
      {reg ? <h1>Registration</h1> : <h1>Login</h1>}
     
      <UIInput
        text={"пароль"}
        value={customLogin}
        setValue={(e) => setCustomLogin(e.currentTarget.value)}
        type={"password"}
      />
      <UIInput
        text={"+ 7 (***) *** ** **"}
        value={customPhone}
        setValue={(e) => setCustomPhone(e.currentTarget.value)}
        type={"phone"}
      />
      <UIButton onClick={() => handler()} type="radio">
        Login
      </UIButton>
      {reg ? (
        <p>
          Have an account?{" "}
          <UIButton type="range" onClick={() => setReg(!reg)}>
            Log in
          </UIButton>
        </p>
      ) : (
        <p>
          Don`t have an account?{" "}
          <UIButton type="range" onClick={() => setReg(!reg)}>
            Sign in
          </UIButton>
        </p>
      )}
      <UIButton type="active" onClick={() => navigate("/")}>
        Back
      </UIButton>
    </div>
  );
};
export default Reg;
