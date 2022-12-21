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
        <p>Hi! My name&apos;s Nathan, I&apos;m a software engineer, artist,
          and former math teacher based in Portland, OR. I run a digital art
          business focused on the latest developments in AI image generation.
          It&apos;s been a blast working on Sound Palette with this awesome team,
          practicing the strange art of synaesthetic design. Though I&apos;ve forgotten
          all my piano lessons from childhood, I can play QWERTY okay.</p>
        <span><strong>Favorite Instrument:</strong> Human Voice</span>
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
        <p>Hi! My name is Eddie Kuo and I am a Full Stack Software 
          Engineer based in Austin, Texas. From managing hotels to 
          becoming an amateur bodybuilder and now software engineer, 
          music was the one thing that helped me through all my 
          professional career transitions. Here is an app that displays 
          all of our creativity as well as in hopes of helping you unlock 
          your own!</p>
        <span><strong>Favorite Instrument:</strong> Piano</span>
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
        <p>Hey Everyone! I&apos;m Jessica Martin, a Full-Stack 
          Software Engineer based out of Corvallis, OR. Working with
          this amazing team of developers to bring this creative app to 
          life was a truly enjoyable experience. I was excited to get the
          opportunity to implement react three fiber in this project. While I 
          grew up playing the Flute, I recently started learning the accordion.
        </p>
        <span><strong>Favorite Instrument:</strong> Accordion</span>
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
        <p>I&apos;m Ryan Parker, a creative developer based in Vancouver, 
          WA with dreams of building the metaverse. Creating this app 
          with such a skilled team of developers has been a fantastic 
          experience, and the opportunity to build a feature-rich and 
          visually appealing UI using 3D components has been incredibly 
          instructive. I love the sound of a sitar, but I&apos;m also 
          unreasonably fond of bagpipes.</p>
        <span><strong>Favorite Instrument:</strong> Sitar</span>
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
        <p>Hi my name is Ryan Smith and I am a Full Stack Software Engineer 
          based in Chicago. As a musician and developer, I love to create apps 
          that make music fun and easy. This app was so much fun to work on 
          because of the incredible team of devs that all used their 
          creativity and technical skills to make something amazing! 
          My favorite instrument is the Hammond B3 Organ.</p>
        <span><strong>Favorite Instrument:</strong> B3 Organ</span>
        <div>
          <a href="https://github.com/ryanjeffrey">
            <img className='logo' src={`${process.env.PUBLIC_URL}/images/githublogo.png`}></img>
          </a>
          <a href="https://www.linkedin.com/in/ryan-jeffrey-smith/">
            <img className='logo' src={`${process.env.PUBLIC_URL}/images/linkedinlogo.png`}></img>
          </a>
        </div>
      </div>
    </div>
  );
}