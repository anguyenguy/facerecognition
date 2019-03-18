import React from 'react';
import './ImageLinkForm.css'


const ImageLinkForm = ({onInputChange , onClick}) =>{
	return (
		<div className = " w-80 pa4 center setHeight shadow-3">
			<p className='f2 font'>This magic box will detect faces in your image. Give it a try.</p>
			<div className="box ">
			 <input onChange= {onInputChange} className="shadow-3 w-60 center input pa2 " placeholder="Put your link image here." required></input>
			 <button onClick= {onClick} className="w-10 center button pa2 ma1 f3 " >Detect</button>
		    </div>
		</div>
		)
}


export default ImageLinkForm;