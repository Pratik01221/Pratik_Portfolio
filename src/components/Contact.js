export default function Contact() {
  return (
    
    <section id="contact" style={{ padding: "50px", textAlign: "center" }}>
      <h2>Contact</h2>
      <a href="mailto:pratikgarad9822@gmail.com" target="blank" style={textStyle}>Send me an email</a>
      <p style={emailStyle}>Email: pratikgarad9822@gmail.com</p>
      <p style={emailStyle}>GitHub: github.com/pratikgarad</p>
      <a href="https://github.com/pratik01221" target="blank" style={textStyle}>GitHub Profile</a>
    </section>
  );
}


const emailStyle = {
  color: "#93C5FD",
  textDecoration: "none",
  fontSize: "18px",
};

const textStyle = {
  color: "#ffffff",
  textDecoration: "none",
  fontSize: "18px",
};