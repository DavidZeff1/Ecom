import React,{useState} from "react";

function Login() {

  
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");

 

  function emailHandler(e){
    setEmail(e.target.value)
    console.log(email);
  }
  function passwordHandler(e){
    setPassword(e.target.value)
    console.log(password);
  }

  
  async function submitHandler(e){
    e.preventDefault();
    try {
        // Send a POST request to your backend
        const response = await fetch("/sendLogin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
  
        // Check the response from the server
        if (response.ok) {
          // Handle a successful login (e.g., redirect the user)
        } else {
          // Handle an unsuccessful login (e.g., display an error message)
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
  }



    

  return (
    <div className="bg-dark login-page">
        <div className="row d-flex justify-content-center">
      <div className="col-12 col-md-8 col-lg-6 col-xl-6">
        <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
          <div className="card-body p-5 text-center">
            <div className="mb-md-5 mt-md-4 pb-5">
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>
                
                <form id="loginForm" action="/sendLogin" method="post" >
                    <div className="form-outline form-white mb-4">
                        <input   
                         type="email"
                         id="typeEmailX"
                         className="form-control form-control-lg"
                         name="email"
                         onChange={emailHandler}

                          />
                        <label className="form-label" htmlFor="typeEmailX" style={{ marginLeft: "0px" }}>
                        Email
                        </label>
                        <div className="form-notch">
                        <div className="form-notch-leading" style={{ width: "9px" }}></div>
                        <div className="form-notch-middle" style={{ width: "40px" }}></div>
                        <div className="form-notch-trailing"></div>
                        </div>
                    </div>
                    <div className="form-outline form-white mb-4">
                        <input 
                        type="password"
                        id="typePasswordX" 
                        className="form-control form-control-lg"
                        
                         onChange={passwordHandler}
                        />
                        <label className="form-label" htmlFor="typePasswordX" style={{ marginLeft: "0px" }}>
                        Password
                        </label>
                        <div className="form-notch">
                        <div className="form-notch-leading" style={{ width: "9px" }}></div>
                        <div className="form-notch-middle" style={{ width: "64px" }}></div>
                        <div className="form-notch-trailing"></div>
                        </div>
                    </div>
                    <p className="small mb-5 pb-lg-2">
                        <a className="text-white-50" href="#!">
                        Forgot password?
                        </a>
                    </p>
                    <button className="btn btn-outline-light btn-lg px-5" type="submit" onClick={submitHandler}>
                        Login
                    </button>
                </form>

              <div className="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" className="text-white">
                  <i className="fab fa-facebook-f fa-lg"></i>
                </a>
                <a href="#!" className="text-white">
                  <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                </a>
                <a href="#!" className="text-white">
                  <i className="fab fa-google fa-lg"></i>
                </a>
              </div>
            </div>
            <div>
              <p className="mb-0">
                Don't have an account? <a href="SignUp.js" className="text-white-50 fw-bold">Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Login;
