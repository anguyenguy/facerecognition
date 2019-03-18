import React from 'react';
import './Signin.css'




const Signin = (onRouteChange) =>{
	return (
		<div >
			<main className="pa4 black-80">
			  <form className="measure center">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <div className="mt3">
			        <label className="db fw6 lh-copy f4" htmlFor="email-address">Email</label>
			        <input className="pa3 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f4" htmlFor="password">Password</label>
			        <input className="b pa3 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
			      </div>
			      <label className="pa1 ma0 lh-copy f4 pointer"><input type="checkbox"/> Remember me</label>
			    </fieldset>
			    <div className="">
			      <input onClick = {() => onRouteChange }

			       className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib" type="submit" value="Sign in"/>
			    </div>
			    <div className="lh-copy mt3">
			      <a href="#0" className="f4 link dim black db">Register</a>
			      <a href="#0" className="f4 link dim black db">Forgot your password?</a>
			    </div>
			  </form>
			</main>

		</div>
	)
}


export default Signin;