import React from 'react';
import './Facerecognition.css';



const Facerecognition = ({link}) =>{
	return (
		<div className='div pa5 '>
			<img className='img' alt='hinh' src = {link} />
		</div>
	)
}


export default Facerecognition;