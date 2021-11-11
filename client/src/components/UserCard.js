import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser, getUsers } from "../Redux/actions";
import Edituser from "./Edituser";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>
      <h2>{user.number}</h2>
      <button
        onClick={() => {
          dispatch(deleteUser(user._id));
          dispatch(getUsers());
        }}
      >
        Delete
      </button>
      <Edituser el={user} />
    </div>
  );
};

export default UserCard;
