import GitHubMark64 from '../../assets/GitHubMark64.png';
import LILogo from '../../assets/LILogo.png';
import './about.css';

export default function AboutMe() {
  return (
    <div className='aboutMe'>
    <div className='aboutpage'>
      <hr></hr>
      <br />

      {/* <h2 className='about'>About Me</h2> */}

      <div>
        <div className='box'>
          <h3 className='name'>Meera Ramesh</h3>
          <div className='border'>
            <img
              className='profile'
              src='https://avatars.githubusercontent.com/u/46873861?v=4'
              alt='Meera'
            />
          </div>
          <br></br>
          <p className='bio'>
            I am a Software Engineer/Full Stack Developer 🚀 from NYC,
            proficient in Full Stack Web Development,and Data Visualization
            tools like Tableau and Power BI. I am passionate about learning and
            curiosity has been a part of me forever. My experiences in and
            outside of working with nonprofits in addition to design consulting,
            have given me the analytical skills and curiosity to bring in
            creative problem solving when learning and using code.
          </p>
          <div className='links'>
            <a className='github' href='https://github.com/meera-ramesh19'>
              <img align='center' src={GitHubMark64} alt=''></img>
            </a>
            <a className="github" href="https://www.linkedin.com/in/meeraramesh/" target="blank">
              <img
                align="center"
                src={LILogo}
                alt="meeraramesh"
                height="50"
                
              />
            
            </a> 
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
