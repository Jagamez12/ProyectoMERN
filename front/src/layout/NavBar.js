import { NavBar as Navi, NavItem} from 'reactstrap'
import { Link} from 'react-router-dom'
export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                
            
                <a className="navbar-brand" href="/">PetsHelp!</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
               
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <NavItem className="nav-link">
                        <Link to="/" className="nav-link">Inicio</Link>
                    </NavItem>
                    <NavItem className="nav-link">
                        <Link to="/signup" className="nav-link">Signup</Link>
                    </NavItem>
                    <NavItem className="nav-link">
                        <Link to="/signin" className="nav-link">Signin</Link>
                    </NavItem>
                                        
                </ul>
                <div>
                    
                <ul className="navbar-nav">
                <li className="nav-item">
                        <a className="nav-link" href="/">Profile</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Logout</a>
                    </li>
                </ul>
                </div>
                </div>
            
            </div>
            </nav>
        </div>
    )
}
