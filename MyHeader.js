import React from "react"


function MyHeader(){
	return(
		<section>
			<header className="MyHeader">
				<img src="Logo.png" alt="my Logo" />
				<div>
					<h1>Web Content Liberation</h1>
					<p>Tranforming Ideas, Creating Realities!</p>
				</div>
				<input type="search" placeholder="Search" />
			</header>
			<br />
		</section>
		)
}

export default MyHeader;