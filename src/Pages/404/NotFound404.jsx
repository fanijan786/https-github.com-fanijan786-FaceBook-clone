import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
const NotFound404 = () => {
  return (
    <section className="page_404">
	<div className="container">
		<div className="row">	
		<div className="col-sm-12 ">
		<div className="col-sm-10 col-sm-offset-1  text-center">
		<div className="four_zero_four_bg">
			<h2 className="text-center ">ERROR:404 <br /> Page Not Found</h2>
		
		
		</div>
		
		<div className="contant_box_404">
		<h3 className="h2">
		Look like you're lost
		</h3>
		
		<p>the page you are looking for not avaible!</p>
		
		<Link to="/" className="link_404" style={{textDecoration:'none'}}>Go to HomePage</Link>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
  )
}

export default NotFound404