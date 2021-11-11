import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../Redux/actions";
import UserCard from "./UserCard";
const UserList = () => {
  const { users, loading } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        users.map((user, i) => <UserCard user={user} key={i} />)
      )}
    </div>
  );
};

export default UserList;
