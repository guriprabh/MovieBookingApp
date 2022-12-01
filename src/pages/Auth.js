import { useState, useEffect } from "react";
import { Dropdown, DropdownButton, Button } from "react-bootstrap";

const Auth = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userType, setUserType] = useState("CUSTOMER");

  const clearState = () => {
    setUserId("");
    setUserName("");
    setUserType("CUSTOMER");
    setEmail("");
    setPassword("");
  };
  const updateSignUpData = (e) => {
    const id = e.target.id;

    if (id === "username") {
      setUserName(e.target.value);
    } else if (id === "password") {
      setPassword(e.target.value);
    } else if (id === "email") {
      setEmail(e.target.value);
    } else if (id === "userId") {
      setUserId(e.target.value);
    }
  };

  const handleSelect = (e) => {
    setUserType(e);
  };

  const toggleSignUp = () => {
    clearState();
    setShowSignUp(!showSignUp);
  };

  const loginFn = async (e) => {
    console.log("login");
    e.preventDefault();
  };

  const signUpFn = async (e) => {
    console.log("signup");
    e.preventDefault();
  };

  return (
    <div id="loginPage">
      <div
        id="loginPage"
        className="m-5 p-5 bg-danger d-flex justify-content-center align-items-center vh-100"
      >
        <div className="card m-5 p-5 bg-light text-dark shadow-lg d-flex align-items-center">
          <div>
            <h3>{showSignUp ? "Sign Up" : "Login"}</h3>

            <form onSubmit={showSignUp ? signUpFn : loginFn}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control m-1"
                  placeholder="User Id"
                  value={userId}
                  id="userId"
                  onChange={updateSignUpData}
                  autoFocus
                  required
                />
              </div>

              <div className="input-group">
                <input
                  type="password"
                  className="form-control m-1"
                  placeholder="Password"
                  id="password"
                  onChange={updateSignUpData}
                  value={password}
                  autoFocus
                  required
                />
              </div>

              {showSignUp && (
                <>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control m-1"
                      placeholder="User Name"
                      value={userName}
                      id="username"
                      onChange={updateSignUpData}
                      autoFocus
                      required
                    />
                  </div>

                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control m-1"
                      placeholder="Email"
                      value={email}
                      id="email"
                      onChange={updateSignUpData}
                      autoFocus
                      required
                    />
                  </div>

                  <div className="row m-1">
                    <div className="col">
                      <span className="mx-1 my-1">User Type</span>
                    </div>

                    <div className="col">
                      <DropdownButton
                        align="end"
                        title={userType}
                        id={userType}
                        onSelect={handleSelect}
                        varient="light"
                      >
                        <Dropdown.Item eventKey="CUSTOMER">
                          CUSTOMER
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="CLIENT">CLIENT</Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </div>
                </>
              )}

              <div className="input-group">
                <input
                  type="submit"
                  className="btn btn-danger"
                  value={showSignUp ? "Sign Up" : "Log In"}
                />
              </div>

              <div className="text-center pe" onClick={toggleSignUp}>
                {showSignUp
                  ? "Already have a Account ?Login"
                  : "Don't have an Account?Signup"}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
