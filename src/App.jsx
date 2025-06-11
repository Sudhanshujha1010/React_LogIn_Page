import { useState } from "react";
import SocialLogin from "./components/SocialLogin";
import InputField from "./components/InputField";

const App = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const toggleMode = (e) => {
    e.preventDefault();
    setIsLoginMode(!isLoginMode);
  };

  return (
    <div className="login-container">
      <h2 className="form-title">
        {isLoginMode ? "Log in with" : "Sign up with"}
      </h2>
      <SocialLogin />

      <p className="separator"><span>or</span></p>

      <form action="#" className="login-form">
        {!isLoginMode && (
          <InputField type="text" placeholder="Full Name" icon="person" />
        )}
        <InputField type="email" placeholder="Email address" icon="mail" />
        <InputField type="password" placeholder="Password" icon="lock" />
        {!isLoginMode && (
          <InputField type="password" placeholder="Confirm Password" icon="lock" />
        )}

        {isLoginMode && (
          <a href="#" className="forgot-password-link">Forgot password?</a>
        )}
        <button type="submit" className="login-button">
          {isLoginMode ? "Log In" : "Sign Up"}
        </button>
      </form>

      <p className="signup-prompt">
        {isLoginMode 
          ? <>Don&apos;t have an account? <a href="#" className="signup-link" onClick={toggleMode}>Sign up</a></>
          : <>Already have an account? <a href="#" className="signup-link" onClick={toggleMode}>Log in</a></>
        }
      </p>
    </div>
  )
}

export default App;