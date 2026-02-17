import { useEffect, useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme === "light" ? "light" : "";
  }, [theme]);

  return (
    <nav style={nav}>
      <h3 style={{ color: "white" ,fontSize: "1.5rem",
  fontWeight: "300"}}>Portfolio Website</h3>

      <div style={right}>
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>

        
 
  <button
    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    style={themeButton}
  >
    <span style={{ marginRight: "8px" }}>
      {theme === "dark" ? "☀" : "🌙"}
    </span>
    {theme === "dark" ? "Light Mode" : "Dark Mode"}
  </button>



      </div>
    </nav>
  );
}

const nav = {
  position: "fixed",
  top: 0,
  width: "100%",
  padding: "25px 10%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#6d84a7",
  zIndex: 100
};

const right = {
  display: "flex",
  gap: "28px",
  alignItems: "center",
  color: "var(--subtext)"
};

const toggle = {
  width: "42px",
  height: "42px",
  borderRadius: "50%",
  border: "1px solid var(--accent)",
  background: "transparent",
  color: "var(--accent)",
  cursor: "pointer",
  fontSize: "18px"
};

const themeButton = {
  display: "flex",
  justifyContent: "flex-end",
  // alignItems: "center",
  padding: "8px 18px",
  borderRadius: "30px",
  border: "none",
  fontSize: "14px",
  fontWeight: "600",
  cursor: "pointer",
  background: "linear-gradient(135deg, #5e6e72, #0072ff)",
  color: "white",
  boxShadow: "0 4px 15px rgba(252, 247, 247, 0.2)",
  transition: "all 0.3s ease"
};
