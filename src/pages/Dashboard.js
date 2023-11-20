import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../Component/Sidebar";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/monitoring/pending");
  }, []);
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 dash-left">
            <Sidebar />
            <div className="profile">
              <div className="profile-img">
                <img src="/static/images/Passport.png"></img>
              </div>
              <div className="profile-name-con">
                <div className="profile-name">Archita</div>
                <div className="profile-email">archita@google.com</div>
              </div>
            </div>
          </div>
          <div className="col-md-10 dash-right">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
