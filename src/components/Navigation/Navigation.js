import React from 'react';

const Navigation = ({props , onRouteChange}) =>{
	return (
		<nav style={{ display:'flex' , justifyContent: 'flex-end'}}>
			{ (props==="Register")
				? <p onClick = { (e) => {onRouteChange(e, "register") } } className="f3 dim link black underline pa4 pointer" >{props}</p>
				:(props==="Sign Out")
				?<p onClick = { (e) => { onRouteChange(e, "signout") } } className="f3 dim link black underline pa4 pointer" >{props}</p>
				:<p onClick = { (e) => { onRouteChange(e, "signout") } } className="f3 dim link black underline pa4 pointer" >{props}</p>
			}
		</nav>
		)
}


export default Navigation;