import axios from "axios";
import { GETUSERS } from "./Actiontype";

export const Getusers = () => async (dispatch) => {
  try {
    await axios
      .get("/user/get")
      .then((res) => dispatch({ type: GETUSERS, payload: res.data.all_users }));
  } catch (error) {
    console.log(error);
  }
};

export const Createuser = (data) => async (dispatch) => {
  try {
    await axios.post("/user/create",data).then((res) => dispatch(Getusers()));
  } catch (error) {
    console.log(error);
  }
};
