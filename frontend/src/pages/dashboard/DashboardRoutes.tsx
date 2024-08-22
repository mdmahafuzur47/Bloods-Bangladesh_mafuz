import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import SetInformation from "./setInformation/SetInformation";

const DashboardRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="setInfo" element={<SetInformation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default DashboardRoutes;
