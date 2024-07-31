import { Link, useNavigate,} from 'react-router-dom';
import Logo from '../../assets/img/gallery/logo.svg'


export default function Header(){
    const navigator = useNavigate();
    function handleLoginRedirect(){
      navigator('login');
    }

    function handleSingupRedirect(){
      navigator('signup');
    }
    
    return(
        <nav
  className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
  data-navbar-on-scroll="data-navbar-on-scroll"
>
  <div className="container">
    <Link className="navbar-brand d-inline-flex">
      <img
          className="d-inline-block"
          src={Logo}
          alt="logo"
        />
        <span className="text-1000 fs-3 fw-bold ms-2 text-gradient">
          foodwaGon
        </span>
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"> </span>
    </button>
    <div
      className="collapse navbar-collapse border-top border-lg-0 my-2 mt-lg-0"
      id="navbarSupportedContent"
    >
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="nav nav-pills">
      <li className="nav-item">  
      <Link to='/' className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
      <Link to='product' className="nav-link">Products</Link>
      </li>
      <li className="nav-item">
      <Link to='cart' className="nav-link">Cart</Link>
      </li>

    </ul>
  </div>
  <form className="d-flex mt-4 mt-lg-0 ms-lg-auto ms-xl-0">
    <div className="input-group-icon pe-2">
      <div id="welcomediv">
        Welcome: <span id="fullname" />
      </div>
    </div>
    <div id="authbutton">
      <button
        id="loginbtn"
        className="btn btn-white shadow-warning text-warning"
        type="button"
        onClick={handleLoginRedirect}
      >
        {" "}
        <i className="fas fa-user me-2" />
        Login
      </button>
      <button
        id="loginbtn"
        className="btn btn-white shadow-warning text-warning"
        type="button"
        onClick={handleSingupRedirect}
      >
        {" "}
        <i className="fas fa-user me-2" />
        SignUp
      </button>
    </div>
  </form>
    </div>
  </div>
</nav>


    );

}