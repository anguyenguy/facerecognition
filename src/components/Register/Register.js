import React from 'react';
import '../Signin/Signin.css'




const Register = ({onRouteChange}) =>{
	return (
		<div >
			<main className="pa4 black-80">
			  <form className="measure center">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">

			    <div className="mt3">
			        <label className="db fw6 lh-copy f4" htmlFor="email-address">Your full name</label>
			        <input className="pa3 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
			     </div>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f4" htmlFor="email-address">Email</label>
			        <input className="pa3 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f4" htmlFor="password">Password</label>
			        <input className="b pa3 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
			      </div>
			      			      <div className="mv3">
			        <label className="db fw6 lh-copy f4" htmlFor="password">Confirm Password</label>
			        <input className="b pa3 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
			      </div>
			    </fieldset>
			    <div className="">
			      <input onClick= {(e) => onRouteChange(e,"signin")}
			       className="b link ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib" type="submit" value="Register"/>
			    </div>
			  </form>
			</main>

		</div>
	)
}


export default Register;