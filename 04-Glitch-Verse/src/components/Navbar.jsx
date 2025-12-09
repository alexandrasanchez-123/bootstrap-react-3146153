import React from "react";

export const Navbar = () => {
  return (
    <nav
      className="navbar py-3 d-flex justify-content-center align-items-center shadow-sm"
      style={{ backgroundColor: "#cfe3f5" }} 
    >
      <img
        src="../public/logo-img.png"
        alt="GlitchVerse Logo"
        className="img-fluid"
        style={{
          width: "392px",
          objectFit: "contain",
          cursor: "pointer"
        }}
      />
    </nav>
  );
};