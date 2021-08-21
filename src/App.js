import useStyles from "./Styles";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import logo from "./images/in.png";
import message from "./images/message.png";
import loupe from "./images/loupe.png";
import code from "./images/code.png";
import menu from "./images/menu.png";
import {
  MenuItem,
  TextField,
  OutlinedInput,
  InputLabel,
  IconButton,
  InputAdornment,
  FormControl,
  Box,
  Typography,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

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
  const styles = useStyles();
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
    emailFalse: false,
  });
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
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.root}>
      <div className={styles.leftsection}>
        <div className={styles.leftsection_steps}>Step 1 of 3</div>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <Box className={styles.box} m={0} p={0}>
            <Typography className={styles.title} variant="h4">
              Let's set up your account
            </Typography>
          </Box>
          <Box className={styles.box} mb={3} mt={3} p={0}>
            <Typography className={styles.subtitle} variant="body1">
              Already have an account?
              <span className={styles.link}> Sign In</span>
            </Typography>
          </Box>
          <Box className={styles.box} mt={2} mb={2}>
            <TextField
              id="outlined-basic"
              label="Your name"
              variant="outlined"
              className={styles.input}
              value={formik.values.name}
              onChange={formik.handleChange("name")}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              onBlur={formik.handleBlur}
              fullWidth
            />
          </Box>
          <Box className={styles.box} mt={2} mb={2}>
            <TextField
              id="outlined-basic"
              label="Email adress"
              variant="outlined"
              className={styles.input}
              value={formik.values.email}
              onChange={formik.handleChange("email")}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              onBlur={formik.handleBlur}
              fullWidth
            />
          </Box>
          <Box className={styles.box} mt={2} mb={2}>
            <TextField
              fullWidth
              id="outlined-select-currency"
              select
              label="Select"
              variant="outlined"
              value={formik.values.profession}
              className={styles.input}
              onChange={formik.handleChange("profession")}
              error={
                formik.touched.profession && Boolean(formik.errors.profession)
              }
              helperText={formik.touched.profession && formik.errors.profession}
              onBlur={formik.handleBlur}
            >
              <MenuItem value="test">test</MenuItem>
            </TextField>
          </Box>
          <FormControl className={styles.test} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              fullWidth
              className={styles.input}
              id="outlined-adornment-password"
              type={!values.showPassword ? "text" : "password"}
              value={formik.values.password}
              onChange={formik.handleChange("password")}
              error={formik.touched.password && Boolean(formik.errors.password)}
              onBlur={formik.handleBlur}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {!values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
          <Box className={styles.box} mt={1} p={0}>
            {formik.touched.password && Boolean(formik.errors.password) && (
              <Typography className={styles.errorPassword} variant="caption">
                {formik.errors.password}
              </Typography>
            )}
          </Box>
          <Box className={styles.box} mt={2} mb={2}>
            <button type="submit" className={styles.btn}>
              Next
            </button>
          </Box>
          <Box className={styles.box} mt={2} mb={2}>
            <Typography variant="body2" className={styles.test}>
              By clicking the "Next" button, you agree to creating a free
              account, and{" "}
              <span className={styles.link}>Terms of Services</span> and
              <span className={styles.link}> Privacy Policy</span>.
            </Typography>
          </Box>
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
