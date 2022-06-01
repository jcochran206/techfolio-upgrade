import React, { useState, useEffect } from 'react';
import {motion} from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';

import {images} from '../../constants';
import './About.scss';
import {urlFor, client } from '../../client'


// const abouts = [
//   {title: 'Web Development', description: 'I am a good web developer', imgUrl: images.about01},
//   {title: 'FrontEnd Development', description: 'I am a good web designer', imgUrl: images.about02},
//   {title: 'Backend Development', description: 'I am a good UX/UI designer', imgUrl: images.about03},
//   {title: 'Geospatial Engineer', description: 'I am a good Geospatial Engineer', imgUrl: images.about04},
// ]

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
     <h2 className="head-text">I know that <span>Good Apps</span><br />means <span>Good Business</span></h2>

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