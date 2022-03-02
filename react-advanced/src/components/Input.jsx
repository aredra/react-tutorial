import React from "react";
import withLoading from "./withLoading";

const Input = () => {
  return <input defaultValue="Input" />;
};

export default withLoading(Input);
