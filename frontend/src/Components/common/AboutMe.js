import { autoType } from 'd3';

import LILogo from '../../assets/LILogo.png';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import './about.css';

export default function AboutMe() {
  return (
    <div className='aboutMe'>
      <div className='box'>
        <h3 className='name'>Meera Ramesh</h3>
        <div className='picInfo'>
          <img
            className='profile'
            src='https://avatars.githubusercontent.com/u/46873861?v=4'
            alt='Meera'
          />

          <div className='bio'>
            I am a Software Engineer/Full Stack Developer 🚀 from NYC,
            proficient in Full Stack Web Development,and Data Visualization
            tools like Tableau and Power BI. I am passionate about learning and
            curiosity has been a part of me forever. My experiences in and
            outside of working with nonprofits in addition to design consulting,
            have given me the analytical skills and curiosity to bring in
            creative problem solving when learning and using code.
          </div>
        </div>

        <div className='links'>
          <a className='github' href='https://github.com/meera-ramesh19'>
            <FaGithub />
            {/* <img align='center' src={GitHubMark64} alt='' style={{width:'100px', height:'100px',margin:'0 auto',textAlign:'center'}}/> */}
          </a>
          <a
            className='linkedin'
            href='https://www.linkedin.com/in/meeraramesh/'
            target='blank'
          >
            {/* <img
            align='center'
            src={LILogo}
            alt='meeraramesh'
            style={{padding:
            '0 1rem',width:'150px', height:'100px',margin:'0 auto'}}  />*/}
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}
