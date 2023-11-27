import "./Navbar.css";
  // import useFetch from '../../hooks/fetch.hook';
  import { Link } from "react-router-dom";
  import jwtDecode from "jwt-decode";
  // import { useAuthStore } from "../../store/store";
  import avatar from '../../assets/profile.png';
  import { useNavigate } from "react-router-dom";
  import { useEffect, useState } from "react";

  export default function Navbar() {
    const navigate = useNavigate();
    const user = localStorage.getItem("token");
    const decodedUser =   user? jwtDecode(user):null;
    // const { username } = useAuthStore(state => state.auth)

    const [profile, setProfile] = useState("")
    
    const username = decodedUser? decodedUser.username:null;

    useEffect(() => {
      const fetchUser = () => {
        if(username){
      fetch(`http://localhost:8080/api/user/${username}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setProfile(data.profile)
        // console.log(profile)
      })
      .catch(err => console.log(err))
    
    }
    }
      fetchUser()

    }, [username])
    
    


    // const [{ isLoading, apiData, serverError }] = useFetch(`http://localhost:8080/api/user/${username}`);
    function userLogout(){
      localStorage.removeItem('token');
      console.log("logout")
      navigate('/')
    }
    
    return (
      <section>
        <div className="nav-container">
          <Link to="/" className="brandLink"><div className="nav-left">FutureFinance</div></Link>
          <div className="nav-center">
          <Link to="getCard">
              <div>Get Card</div>
            </Link>
           <Link to="/about"> <div>About</div></Link>
           <Link to='contact'>
             <div>Contact Us</div>
            </Link>
          </div>
          {!user &&<div className="nav-right">
            <div>
              <Link to="/username">
              <button className="login-button">Log In</button>
              </Link>
            </div>
            <div>
            
              <Link to="/register">
                <button className="signup-button">Create Account</button>
              </Link>
            </div>
          </div>}
          {user&&
          <div className="nav-right">
            <div className="nav-right-profileSection">
              <Link to="/profile">
              <img src={profile||avatar} alt="" className="profileImg" /></Link>
            <button className="signup-button" onClick={userLogout}>Logout</button>
            </div>
          </div>
          }        
        </div>
      </section>
    );
  }