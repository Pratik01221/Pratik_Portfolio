import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section style={hero}>
      
      {/* LEFT IMAGE */}
      <div>
        <img src={profile} alt="profile" style={image} />
      </div>

      {/* RIGHT CONTENT */}
      <div style={content}>
        <p style={{ color: "#2dd4bf" }}>Hi, my name is</p>

        <h1 style={name}>Pratik Garad</h1>

        <h2 style={tagline}>I build things for the web.</h2>

        <p style={desc}>
          I'm a full-stack developer specializing in building exceptional
          digital experiences. Currently, I am focused on developing
          accessible, human-centered products.
        </p>

        <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
          <button style={primaryBtn}>Check out my work!</button>
          <a href="/resume.pdf" download style={{ textDecoration: "none" }}>
  <button style={secondaryBtn}>Download Resume</button>
</a>

        </div>
      </div>

    </section>
  );
}

const hero = {
  minHeight: "100vh",
  padding: "140px 10%",
  display: "flex",
  alignItems: "center",
  gap: "80px"
};

const image = {
  width: "380px",
  height: "380px",
  borderRadius: "50%",
  objectFit: "cover",
  boxShadow: "0 0 80px rgba(45,212,191,0.25)"
};

const content = {
  maxWidth: "600px"
};

const name = {
  fontSize: "4rem",
  fontWeight: "700",
  color: "#93c5fd",
  margin: "10px 0"
};

const tagline = {
  fontSize: "2.2rem",
  color: "#94a3b8",
  marginBottom: "20px"
};

const desc = {
  color: "#94a3b8",
  lineHeight: "1.7"
};

const primaryBtn = {
  padding: "14px 28px",
  background: "transparent",
  border: "2px solid #2dd4bf",
  color: "#2dd4bf",
  borderRadius: "8px",
  fontSize: "16px",
  cursor: "pointer"
};

const secondaryBtn = {
  padding: "14px 28px",
  background: "#020617",
  border: "2px solid #94a3b8",
  color: "#e5e7eb",
  borderRadius: "8px",
  fontSize: "16px",
  cursor: "pointer"
};
