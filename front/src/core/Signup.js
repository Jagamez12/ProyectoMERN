import NavBar from '../layout/NavBar'
import './Signup.css'

export default function Signup() {

    const signUpForm = () => (
        <form className = "sign-box">
            <div className="form-group">
                <label className="text-muted">Nombre</label>
                <input type="text" className="form-control"  
                />
            </div>
            <div className="form-group">
                <label className="text-muted">email</label>
                <input type="text" className="form-control"  
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Contraseña</label>
                <input type="text" className="form-control"  
                />
            </div>
            <button  className = 'btn btn-primary'>Sign Up</button>
        </form>
    )
    return (
        <div>
            <NavBar></NavBar>
            {signUpForm()}
            
        </div>
    )
}
