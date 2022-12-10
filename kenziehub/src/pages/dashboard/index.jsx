import React from "react";
import HeaderHome from "../../components/headerHome";
import MainHome from "../../components/mainHome";

const DashboardPage = ({ user, setUser }) => {
  return (
    <>
      <HeaderHome user={user} setUser={setUser} />
      <MainHome />
    </>
  );
};

export default DashboardPage;
