import React from "react";
import Loader from "react-loader-spinner";

export const LoaderSpinner = ({ style }) => {
  return (
    <Loader
      type="ThreeDots"
      color="#555"
      height={80}
      width={80}
      style={style}
    />
  );
};
