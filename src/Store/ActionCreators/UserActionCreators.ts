import { log } from "console";
import { Ilogin } from "../../moduls/moduls";
import { AppDispatch } from "../store";
import {$authHost, $host} from "../../hof/http";
import {userSlice} from "../Slices/UserSlice"
export const login = ({userData}:{userData: Ilogin}) => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.loginLoading())
    const {data} = await $host.post('api/user/login', {number: userData.number, password: userData.password})
    dispatch(userSlice.actions.loginSuccess(data))
  } catch (e) {
    dispatch(userSlice.actions.loginError('erhere'))
  }
}
