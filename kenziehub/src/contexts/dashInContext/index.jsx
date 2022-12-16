import React from "react";
import DashboardPage from "../../pages/dashboard";
import { TechProvider } from "../techContext";

const DashInContext = () => {
  return (
    <TechProvider>
      <DashboardPage />
    </TechProvider>
  );
};

export default DashInContext;
