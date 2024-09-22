import React from "react";
import LockIcon from "@mui/icons-material/Lock";
const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "40px",
        boxShadow: "0.1px 0.1px 1px gray",
      }}
    >
      <LockIcon />
      Checkout
    </div>
  );
};

export default Navbar;
