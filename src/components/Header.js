import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
   /* const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
      setOpenLinks(!openLinks);
    };*/
    return (
    <header class="top-navbar">
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container">
					<img src={Logo} alt="" />
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-rs-food" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
				  <span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbars-rs-food">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item"><Link to="/" className='nav-link'> Home </Link></li>
						<li class="nav-item"><Link to="/About" className='nav-link'> About </Link></li>
						<li class="nav-item"><Link to="/Menu" className='nav-link'> Menu</Link></li>
            {/* <li class="nav-item"><Link to="/Popular" className='nav-link'> Popular</Link></li> */}
            <li class="nav-item"><Link to="/Favorite" className='nav-link'> Favorite</Link></li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
  );


}
export default Header;