import React, { useState, useEffect } from 'react';
import {motion} from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';

import {images} from '../../constants';
import './About.scss';
import {urlFor, client } from '../../client'



const About = () => {
  //creates variables to map thru 
  const [abouts, setAbouts] = useState([]);
  // fetchs data from sanity 
  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => {
      setAbouts(data);
    })
  }, []);



  return (
   <>
     <h2 className="head-text"> an <span>experienced leader</span> that <span>loves to code</span></h2>

     <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: 'tween'}}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={images.title}/>
            <h2 className="bold-text" style={{marginTop: 20}}>{about.title}</h2>
            <p className="p-text" style={{marginTop:10}}>{about.description}</p>
          </motion.div>
        ))}
     </div>
   </>
    
  );
}

// export default AppWrap(About, 'about');
export default AppWrap(
  MotionWrap(About, 'app__about'), 
  'about',
  'app__whitebg',
);