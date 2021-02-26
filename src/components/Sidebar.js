import React from "react";
import ToggleDashboard from "./dashboard/ToggleDashboard";

const Sidebar = () => {
  return (
    <div className="h-100 pt-2">
      <div>
        <ToggleDashboard />
      </div>
    </div>
  );
};

export default Sidebar;
