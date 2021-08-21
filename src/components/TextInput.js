import eye from "../images/eye.png";
import invisible from "../images/invisible.png";
import styles from "./textInput.module.css";
const TextInput = ({
  formikValue,
  formikHundleChange,
  formikHundleBlur,
  label,
  name,
  showPassword,
  setShowPassword
}) => {
  return (
    <div className={styles.box}>
      {name !== "password" && (
        <input
          name={name}
          className={styles.input}
          value={formikValue}
          onChange={formikHundleChange(name)}
          onBlur={formikHundleBlur}
          placeholder=""
        />
      )}
      {name === "password" && (
        <input
          name={name}
          className={styles.input}
          value={formikValue}
          onChange={formikHundleChange(name)}
          onBlur={formikHundleBlur}
          type={showPassword ? "text" : "password"}
          placeholder=""
        />
      )}
      {name === "password" && (
        <img
          className={styles.showHidePassword}
          src={showPassword ? invisible : eye}
          onClick={() => setShowPassword(!showPassword)}
          alt=""
        />
      )}
      <label className={styles.label}>{label}</label>
    </div>
  );
};

export default TextInput;
