import React from "react";
import "./home.css";
import Popular from "./Category/Popular";
import Navbar from "./Navbar";

function Home() {
  document.title = "Kartly";

  return (
    <>
      <Navbar />
      <div className="content">
        <img
          src="https://res.cloudinary.com/dz2mlxltd/image/upload/c_crop,w_3500,h_863/v1751559887/Group_204_1_lcbp2b.png"
          alt="Hero Banner"
          className="hero-banner"
        />
        <Popular />
      </div>
    </>
  );
}

export default Home;
