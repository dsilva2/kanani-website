import { Face } from "./Face";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Header = () => {
  const headerStyle = { marginBottom: "2px", marginTop: "2px" };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <Face imageUrl="/kanani.jpg" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "left",
        }}
      >
        <h1 style={{ marginBottom: "5px" }}>Kanani</h1>
        <h2 style={headerStyle}>Mechanical Engineering, Vanderbilt University</h2>
        <h3 style={headerStyle}>kanani.a.silva@vanderbilt.edu</h3>

      </div>
    </div>
  );
};
