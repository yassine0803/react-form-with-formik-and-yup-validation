import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import logo from "./images/in.png";
import message from "./images/message.png";
import loupe from "./images/loupe.png";
import code from "./images/code.png";
import menu from "./images/menu.png";
import eye from "./images/eye.png";
import invisible from "./images/invisible.png";

import styles from "./app.module.css";
const validationSchema = yup.object({
  name: yup.string().required("name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("email is required"),
  profession: yup.string().required("profession is required"),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Minimum 8 characters"),
});
function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [selectLabelOnTop, setSelectLabelOnTop] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      profession: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    },
    validationSchema: validationSchema,
  });

  const slectOnBlur = (e) => {
    formik.values.profession
      ? setSelectLabelOnTop(true)
      : setSelectLabelOnTop(false);
    formik.handleBlur(e);
  };
  return (
    <div className={styles.root}>
      <div className={styles.leftsection}>
        <div className={styles.leftsection_steps}>Step 1 of 3</div>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <div className={styles.box}>
            <h1 className={styles.title} variant="h4">
              Let's set up your account
            </h1>
          </div>
          <div className={styles.box}>
            <p className={styles.subtitle}>
              Already have an account?
              <span className={styles.link}> Sign In</span>
            </p>
          </div>
          <div className={styles.box}>
            <input
              className={styles.input}
              value={formik.values.name}
              onChange={formik.handleChange("name")}
              onBlur={formik.handleBlur}
              placeholder=""
            />
            <label className={styles.label}>Your name</label>
          </div>
          <div className={styles.boxError}>
            {formik.touched.name && Boolean(formik.errors.name) && (
              <span className={styles.errorPassword}>{formik.errors.name}</span>
            )}
          </div>
          <div className={styles.box}>
            <input
              className={styles.input}
              value={formik.values.email}
              onChange={formik.handleChange("email")}
              onBlur={formik.handleBlur}
              placeholder=""
            />
            <label className={styles.label}>Email address</label>
          </div>
          <div className={styles.boxError}>
            {formik.touched.email && Boolean(formik.errors.email) && (
              <span className={styles.errorPassword}>
                {formik.errors.email}
              </span>
            )}
          </div>
          <div className={styles.box}>
            <select
              className={styles.select}
              value={formik.values.profession}
              onChange={formik.handleChange("profession")}
              onBlur={slectOnBlur}
              onClick={() => setSelectLabelOnTop(true)}
            >
              {selectLabelOnTop && (
                <>
                  <option value="developer">Developer</option>
                  <option value="translator">Translator</option>
                </>
              )}
            </select>
            <label
              className={
                !selectLabelOnTop ? styles.Selectlabel : styles.selectLabelfocus
              }
            >
              I would describe my user type as
            </label>
          </div>
          <div className={styles.boxError}>
            {formik.touched.profession && Boolean(formik.errors.profession) && (
              <span className={styles.errorPassword}>
                {formik.errors.profession}
              </span>
            )}
          </div>
          <div className={styles.box}>
            <input
              className={styles.input}
              value={formik.values.password}
              onChange={formik.handleChange("password")}
              onBlur={formik.handleBlur}
              placeholder=""
              type={showPassword ? "text" : "password"}
            />
            <label className={styles.label}>Password</label>
            <img
              className={styles.showHidePassword}
              src={showPassword ? invisible : eye}
              onClick={() => setShowPassword((oldValue) => !oldValue)}
              alt=""
            />
          </div>
          <div className={styles.boxError}>
            {formik.touched.password && Boolean(formik.errors.password) && (
              <span className={styles.errorPassword}>
                {formik.errors.password}
              </span>
            )}
          </div>
          <div className={styles.box}>
            <button type="submit" className={styles.btn}>
              Next
            </button>
          </div>
          <div className={styles.box}>
            <p className={styles.terms}>
              By clicking the "Next" button, you agree to creating a free
              account, and{" "}
              <span className={styles.link}>Terms of Services</span> and
              <span className={styles.link}> Privacy Policy</span>.
            </p>
          </div>
        </form>
      </div>
      <div className={styles.rightsection}>
        <h2 className={styles.rightsection_title}>Dummy Heading</h2>
        <p className={styles.rightsection_paragraph}>
          Lorem ipsum dolor sit amet consec tetur adipiscing elit. Phasellus
          condi mentum ligula at nibh fermentum facilisis.
        </p>
      </div>
      <div className={styles.testa}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
          <span>Made in InVision</span>
        </div>
        <ul className={styles.list}>
          <li>
            <img src={message} alt="" />
            <span>Comments (17)</span>
            <div className={styles.notification}></div>
          </li>
          <li>
            <img src={loupe} alt="" />
            <span>Search</span>
          </li>
          <li>
            <img src={code} alt="" />
            <span>Inspect</span>
          </li>
          <li>
            <img src={menu} alt="" />
            <span>Screens (13)</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
