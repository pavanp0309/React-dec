import React from "react";
import { useGetUsersQuery } from "../api/userApi";
import UserCard from "./UserCard";

const UserList = () => {
  const { data, isLoading, isError } = useGetUsersQuery();
  console.log(data);
  if (isLoading) return <h1>loading...</h1>;
  if (isError) return <h1>error...</h1>;
  return (
    <div className="container">
      <div className="row gy-2">
        {data.map((ele) => (
          <div className="col-sm-12 col-md-3 col-lg-3" key={ele.id}>
            <UserCard user={ele} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
