import './About.css';

export default function About() {

  function changeBackgroundJess() {
    const aboutSection = document.querySelector('.about');
    aboutSection.style.background = 
    'linear-gradient(90deg, hsla(154, 100%, 76%, 1) 0%, hsla(234, 100%, 83%, 1) 50%, hsla(288, 100%, 81%, 1) 100%)';
  }

  function changeBackgroundNathan() {
    const aboutSection = document.querySelector('.about');
    aboutSection.style.background = 
    'linear-gradient(90deg, hsla(270, 94%, 25%, 1) 0%, hsla(158, 94%, 49%, 1) 100%)';
  }

  function changeBackgroundEddie() {
    const aboutSection = document.querySelector('.about');
    aboutSection.style.background = 
    'linear-gradient(90deg, hsla(202, 71%, 27%, 1) 0%, hsla(176, 45%, 66%, 1) 100%)';
  }

  function changeBackgroundRyanP() {
    const aboutSection = document.querySelector('.about');
    aboutSection.style.background = 
    'linear-gradient(90deg, hsla(154, 53%, 82%, 1) 0%, hsla(24, 88%, 65%, 1) 50%, hsla(216, 56%, 16%, 1) 100%)';
  }

  function changeBackgroundRyanS() {
    const aboutSection = document.querySelector('.about');
    aboutSection.style.background = 
    'linear-gradient(90deg, hsla(230, 59%, 25%, 1) 0%, hsla(359, 73%, 39%, 1) 50%, hsla(32, 97%, 59%, 1) 100%)';
  }

  function revertBackground() {
    const aboutSection = document.querySelector('.about');
    aboutSection.style.background = 'none';
    aboutSection.style.backgroundColor = 'grey';
  }

  return (
    <div className="about">
      <div
        onMouseEnter={changeBackgroundNathan}
        onMouseLeave={revertBackground} 
        className="nathan">
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

      <div 
        onMouseEnter={changeBackgroundEddie}
        onMouseLeave={revertBackground}
        className="eddie">
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

      <div 
        onMouseEnter={changeBackgroundJess}
        onMouseLeave={revertBackground}
        className="jessica">
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

      <div 
        onMouseEnter={changeBackgroundRyanP}
        onMouseLeave={revertBackground}
        className="ryanp">
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

      <div
        onMouseEnter={changeBackgroundRyanS}
        onMouseLeave={revertBackground}
        className="ryans">
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