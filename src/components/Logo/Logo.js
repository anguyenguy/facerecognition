import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css'


const Logo = () =>{
	return (
		<div className='ma5 mt0'>
			<Tilt className="Tilt shadow-5" options={{ max : 35 , scale: 1.3 }} style={{ height: 200, width: 200 }} >
			 	<div className="Tilt-inner"><img  src='http://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/1024/22214-dog-face-icon.png'/> </div>
			</Tilt>
		</div>
		)
}


export default Logo;