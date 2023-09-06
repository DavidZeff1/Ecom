import React,{useState} from "react";

function SignUp() {

  
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
        const response = await fetch("/sendSignUp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
  
        // Check the response from the server
        if (response.ok) {
          // Handle a successful SignUp (e.g., redirect the user)
        } else {
          // Handle an unsuccessful SignUp (e.g., display an error message)
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
  }



    

  return (
 
 

    <div className="bg-dark login-page">
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-9 col-lg-7 col-xl-7">
          <div className="card bg-dark text-white" style={{ borderRadius: "15px" }}>
            <div className="card-body p-5">
            <div className="mb-4">
            <img
              src="/Logo.png"
              alt="Login Image"
              className="img-fluid "
              style={{ width: "800px", height: "300px", borderRadius: "10px" }}
            />
          </div>
              <h2 className="text-uppercase text-center mb-5">Create an account</h2>

              <form>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example1cg" className="form-control form-control-lg text-black" />
                  <label className="form-label text-white" htmlFor="form3Example1cg" style={{ marginLeft: "0px" }}>Your Name</label>
                  <div className="form-notch"><div className="form-notch-leading" style={{ width: "9px" }}></div><div className="form-notch-middle" style={{ width: "71.2px" }}></div><div className="form-notch-trailing"></div></div>
                </div>

                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3cg" className="form-control form-control-lg text-black" />
                  <label className="form-label text-white" htmlFor="form3Example3cg" style={{ marginLeft: "0px" }}>Your Email</label>
                  <div className="form-notch"><div className="form-notch-leading" style={{ width: "9px" }}></div><div className="form-notch-middle" style={{ width: "69.6px" }}></div><div className="form-notch-trailing"></div></div>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4cg" className="form-control form-control-lg text-black" />
                  <label className="form-label text-white" htmlFor="form3Example4cg" style={{ marginLeft: "0px" }}>Password</label>
                  <div className="form-notch"><div className="form-notch-leading" style={{ width: "9px" }}></div><div className="form-notch-middle" style={{ width: "64px" }}></div><div className="form-notch-trailing"></div></div>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4cdg" className="form-control form-control-lg text-black" />
                  <label className="form-label text-white" htmlFor="form3Example4cdg" style={{ marginLeft: "0px" }}>Repeat your password</label>
                  <div className="form-notch"><div className="form-notch-leading" style={{ width: "9px" }}></div><div className="form-notch-middle" style={{ width: "134.4px" }}></div><div className="form-notch-trailing"></div></div>
                </div>

                <div className="form-check d-flex justify-content-center mb-5">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label className="form-check-label text-white" htmlFor="form2Example3g">
                    I agree to all statements in <a href="#!" className="text-white"><u>Terms of service</u></a>
                  </label>
                </div>

                <div className="d-flex justify-content-center">
                  <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-white">Register</button>
                </div>

                <p className="text-center text-white mt-5 mb-0 fw-bold ">Already have an account? <a href="/" className="fw-bold text-white"><u>Login here</u></a></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
 



 

    
  );
}

export default SignUp;