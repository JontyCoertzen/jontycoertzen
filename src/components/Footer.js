import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<div className="container">
					<a href="mailto:info@jontycoertzen.com" target="_blank"><i class="fa fa-envelope"></i></a>	
					<a href="https://www.linkedin.com/in/jonty-coertzen-a1b84a8b" target="_blank"><i class="fa fa-linkedin"></i></a>
					<a href="https://github.com/JontyCoertzen" target="_blank"><i class="fa fa-github"></i></a>
					<a href="https://twitter.com/JontyCoertzen" target="_blank"><i class="fa fa-twitter"></i></a>			
					<a href="https://www.instagram.com/jontycoertzen/" target="_blank"><i class="fa fa-instagram"></i></a>
				</div>
			</footer>
		)
	}
}

export default Footer;

