import React from "react";
import PersonalData from "../../components/PersonalData/PersonalData";
import SettingsBlock from "../../components/SettingsBlock/SettingsBlock";
import withAuthorization from "../../components/Session/withAuthorization";
import "./style.scss";

const ProfilePage = () => {
  return (
    <div className="wrapper-profile-page">
      <PersonalData />
      <SettingsBlock />
    </div>
  );
};

export default withAuthorization(ProfilePage);
