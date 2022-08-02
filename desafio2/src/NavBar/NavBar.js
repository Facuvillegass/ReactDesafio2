import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"

function Navbar ()
{
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
            <a className="navbar-brand" href="index.html">BuyIt.com</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">All Products</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Categories </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">House</a></li>
                    <li><a className="dropdown-item" href="#">Sports</a></li>
                    <li><a className="dropdown-item" href="#">Work</a></li>
                    </ul>
                </li>
               </ul>
               <button>
               <CartWidget />
               </button>
            </div>
            </div>
        </nav>
      </div>
    )
}

export default Navbar;