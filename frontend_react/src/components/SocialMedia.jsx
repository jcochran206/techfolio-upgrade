import React from 'react'
import {BsTwitter, BsInstagram, BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';


const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href="https://twitter.com/Jcochran206">
            <BsTwitter />
          </a>
        </div>

        <div>
            <a href="https://www.linkedin.com/in/jonathan-cochran-ms/">
              <BsLinkedin />
            </a>
        </div>

        <div>
          <a href='https://github.com/jcochran206'>
            <FaGithub />
          </a>
        </div>

        <div>
            <BsInstagram />
        </div>
    </div>
  )
}

export default SocialMedia