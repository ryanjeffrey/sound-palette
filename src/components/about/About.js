import './About.css';

export default function About() {

  function changeBackground() {
    console.log('event');
    document.body.backgroundColor = 'red';
  }

  return (
    <div className="about">
      <div className="nathan">
        <img className="headshot" src={`${process.env.PUBLIC_URL}/images/nathan.jfif`} />
        <h2>Nathan Burgess</h2>
        <p>Full-Stack Software Developer living in Oregon</p>
        <div>
          <a href="https://github.com/nathburg">
            <img className='logo' src={`${process.env.PUBLIC_URL}/images/githublogo.png`}></img>
          </a>
          <a href="https://www.linkedin.com/in/nathburg/">
            <img className='logo' src={`${process.env.PUBLIC_URL}/images/linkedinlogo.png`}></img>
          </a>
        </div>
      </div>

      <div className="eddie">
        <img className="headshot" src={`${process.env.PUBLIC_URL}/images/eddie.png`} />
        <h2>Eddie Kuo</h2>
        <p>Full-Stack Software Developer living in Texas</p>
        <div>
          <a href="https://github.com/Eddie-Kuo">
            <img className='logo' src={`${process.env.PUBLIC_URL}/images/githublogo.png`}></img>
          </a>
          <a href="https://www.linkedin.com/in/eddie-kuo17/">
            <img className='logo' src={`${process.env.PUBLIC_URL}/images/linkedinlogo.png`}></img>
          </a>
        </div>
      </div>

      <div onMouseOver={changeBackground} className="jessica">
        <img className="headshot" src={`${process.env.PUBLIC_URL}/images/jessica.jpg`} />
        <h2>Jessica Martin</h2>
        <p>Full-Stack Software Developer living in Oregon</p>
        <div>
          <a href="https://github.com/Jmart5564">
            <img className='logo' src={`${process.env.PUBLIC_URL}/images/githublogo.png`}></img>
          </a>
          <a href="https://www.linkedin.com/in/jessica-martin5564/">
            <img className='logo' src={`${process.env.PUBLIC_URL}/images/linkedinlogo.png`}></img>
          </a>
        </div>
      </div>

      <div className="ryanp">
        <img className="headshot" src={`${process.env.PUBLIC_URL}/images/ryanparker.png`} />
        <h2>Ryan Parker</h2>
        <p>Full-Stack Software Developer living in Oregon</p>
        <div>
          <a href="https://github.com/ryan-j-parker">
            <img className='logo' src={`${process.env.PUBLIC_URL}/images/githublogo.png`}></img>
          </a>
          <a href="https://www.linkedin.com/in/ryanparkerdev/">
            <img className='logo' src={`${process.env.PUBLIC_URL}/images/linkedinlogo.png`}></img>
          </a>
        </div>
      </div>

      <div className="ryans">
        <img className="headshot" src={`${process.env.PUBLIC_URL}/images/ryansmith.jfif`} />
        <h2>Ryan Smith</h2>
        <p>Full-Stack Software Developer living in Illinois</p>
        <div>
          <a href="https://github.com/ryanjeffrey">
            <img className='logo' src={`${process.env.PUBLIC_URL}/images/githublogo.png`}></img>
          </a>
          <a href="https://www.linkedin.com/in/ryan-smith-219614230/">
            <img className='logo' src={`${process.env.PUBLIC_URL}/images/linkedinlogo.png`}></img>
          </a>
        </div>
      </div>
    </div>
  );
}