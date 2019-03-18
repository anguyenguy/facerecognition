import React from 'react';
import './Facerecognition.css';



const Facerecognition = ({link, box0}) =>{
	console.log(box0);
	return (
		<div className='zero'>
			<div className='mt2 first '>
				<img className='second' id='inputImage' alt='hinh' src = {link}  width='500px' heigh='auto' />
				<div className="bounding-box" style={{
					top: box0.top, 
					left:box0.left,
					right: box0.right,
					bottom: box0.bottom
				}} ></div>
			</div>
		</div>
	)
}


export default Facerecognition;