import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
       <SocialMedia />

        <div className='app__wrapper app_flex'>
            <Component /> 

            <div className='copyright'>
               <p className='p-text'>@2022 Jonathan Cochran</p>
               <p className='p-text'>All rights reserved</p>    
            </div>
        </div>
        <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap
