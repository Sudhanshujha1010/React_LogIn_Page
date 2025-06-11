import { useState } from "react";
const InputField = ({ type, placeholder, icon }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  return (
    <div className="input-wrapper">
      <input
        type={isPasswordShown ? 'text' : type}
        placeholder={placeholder}
        className="input-field"
        required
      />
      <span className="material-symbols-rounded">{icon}</span>
      {type === 'password' && (
        <span 
          onClick={() => setIsPasswordShown(prevState => !prevState)} 
          className="material-symbols-rounded eye-icon">
          {isPasswordShown ? 'visibility' : 'visibility_off'}
        </span>
      )}
    </div>
  )
}

export default InputField;