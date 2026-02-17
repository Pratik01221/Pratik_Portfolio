import project1 from "../assets/project1.png";
import textcraft from "../assets/textcraft.png";
import portfolio from "../assets/Portfolio.png";
export default function Projects() {
  return (
    <section className="featured-projects">
      <h2 className="featured-title">Featured Projects</h2>

      <div className="projects-grid">

        <div className="project-box">
          <img src={textcraft} alt="Cover Letter AI" />

          <div className="project-info">
            <h3>TextCraft – Text Utility Web Application</h3>
            <a href="https://textcraft-ruby.vercel.app/" target="_blank">Live Demo</a>
          </div>
        </div>

        <div className="project-box">
          <img src={portfolio} alt="Portfolio" />

          <div className="project-info">
            <h3>Personal Developer Portfolio Website</h3>
            <a href="/" target="_blank">Live Demo</a>
          </div>
        </div>

        <div className="project-box">
          <img src={project1} alt="NewsFlash – Real-Time News Web Application" />

          <div className="project-info">
            <h3>NewsFlash – Real-Time News Web Application</h3>
            <a href="https://news-flash-know-more-scroll-less.vercel.app/" target="_blank">Live Demo</a>
          </div>
        </div>

      </div>
    </section>
  );
}


