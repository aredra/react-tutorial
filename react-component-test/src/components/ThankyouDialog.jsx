import React from "react";
import { Dialog } from "./Dialog";

export const ThankyouDialog = () => {
  return (
    <Dialog
      title={<h1 style={{ color: "purple" }}>Thanks</h1>}
      description="Welcome custom dialog!!"
    ></Dialog>
  );
};
