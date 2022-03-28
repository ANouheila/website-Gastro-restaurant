import React from "react";
import { FaEnvelope } from 'react-icons/fa'
import { FaPhone} from 'react-icons/fa'
import { FaMapMarked} from 'react-icons/fa'

function Social() {
    return (
        <div class="contact-imfo-box">
		<div class="container">
			<div class="row">
				<div class="col-md-4">
					<FaPhone  className="social"/>
					<div class="overflow-hidden">
						<h4>Phone</h4>
						<p class="lead">
							+01 123-456-4590
						</p>
					</div>
				</div>
				<div class="col-md-4">
					<FaEnvelope className="social" />
					<div class="overflow-hidden">
						<h4>Email</h4>
						<p class="lead">
							yourmail@gmail.com
						</p>
					</div>
				</div>
				<div class="col-md-4">
					<FaMapMarked className="social" />
					<div class="overflow-hidden">
						<h4>Location</h4>
						<p class="lead">
							800, Lorem Street, US
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
    );
}




export default Social;