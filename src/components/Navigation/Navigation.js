import React from 'react';

const Navigation = ({props}) =>{
	return (
		<nav style={{ display:'flex' , justifyContent: 'flex-end'}}>
			<p className="f3 dim link black underline pa4 pointer">{props}</p>
		</nav>
		)
}


export default Navigation;