import './About.css';

export default function About() {
  return (
    <div className="about">
      <div className="nathan">
        <img className="headshot" src={`${process.env.PUBLIC_URL}/images/nathan.jfif`} />
        <a href="https://github.com/nathburg">
          <img className='logo' src={`${process.env.PUBLIC_URL}/images/githublogo.png`}></img>
        </a>
        <a href="https://www.linkedin.com/in/nathburg/">
          <img className='logo' src={`${process.env.PUBLIC_URL}/images/linkedinlogo.png`}></img>
        </a>
      </div>

      <div className="eddie">
        <img className="headshot" src={`${process.env.PUBLIC_URL}/images/eddie.png`} />
        <a href="https://github.com/Eddie-Kuo">
          <img className='logo' src={`${process.env.PUBLIC_URL}/images/githublogo.png`}></img>
        </a>
        <a href="https://www.linkedin.com/in/eddie-kuo17/">
          <img className='logo' src={`${process.env.PUBLIC_URL}/images/linkedinlogo.png`}></img>
        </a>
      </div>

      <div className="jessica">
        <img className="headshot" src={`${process.env.PUBLIC_URL}/images/jessica.jpg`} />
        <a href="https://github.com/Jmart5564">
          <img className='logo' src={`${process.env.PUBLIC_URL}/images/githublogo.png`}></img>
        </a>
        <a href="https://www.linkedin.com/in/jessica-martin5564/">
          <img className='logo' src={`${process.env.PUBLIC_URL}/images/linkedinlogo.png`}></img>
        </a>
      </div>

      <div className="ryanp">
        <img className="headshot" src={`${process.env.PUBLIC_URL}/images/ryanparker.png`} />
        <a href="https://github.com/ryan-j-parker">
          <img className='logo' src={`${process.env.PUBLIC_URL}/images/githublogo.png`}></img>
        </a>
        <a href="https://www.linkedin.com/in/ryanparkerdev/">
          <img className='logo' src={`${process.env.PUBLIC_URL}/images/linkedinlogo.png`}></img>
        </a>
      </div>

      <div className="ryans">
        <img className="headshot" src={`${process.env.PUBLIC_URL}/images/ryansmith.jfif`} />
        <a href="https://github.com/ryanjeffrey">
          <img className='logo' src={`${process.env.PUBLIC_URL}/images/githublogo.png`}></img>
        </a>
        <a href="https://www.linkedin.com/in/ryan-smith-219614230/">
          <img className='logo' src={`${process.env.PUBLIC_URL}/images/linkedinlogo.png`}></img>
        </a>
      </div>
    </div>
  );
}