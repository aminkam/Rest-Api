import axios from "axios";
import { ADD, DELETE, EDIT, GET } from "./actionType";

//Get USER
export const getUsers = () => async (dispatch) => {
  try {
    let res = await axios.get("/user/get");
    dispatch({
      type: GET,
      payload: res.data,
    });
  } catch (error) {
    alert("get error");
  }
};

//Delete User
export const deleteUser = (id) => async (dispatch) => {
  try {
    let res = await axios.delete(`/user/delete/${id}`);
    dispatch({
      type: DELETE,
      payload: res.data,
    });
  } catch (error) {
    alert("del error");
  }
};

//ADD NEW USER

export const addNewUser = (name, email, number) => async (dispatch) => {
  let newUser = { name, email, number };
  let res = await axios.post("/user/post", newUser);
  try {
    dispatch({
      type: ADD,
      payload: res.data,
    });
  } catch (error) {
    alert("add error");
  }
};

//EDIT USER
export const editeUsers = (id, name, email, number) => async (dispatch) => {
  try {
    let newUserEdit = { id, name, email, number };
    let res = await axios.put(`/user/edit/${id}`, newUserEdit);
    dispatch({
      type: EDIT,
      payload: res.data,
    });
  } catch (error) {
    alert("edit error");
  }
};
