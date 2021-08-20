import useStyles from "./Styles";
import { useState } from "react";
import clsx from "clsx";
import {
  MenuItem,
  TextField,
  OutlinedInput,
  InputLabel,
  IconButton,
  InputAdornment,
  FormControl,
  Button,
  Box,
  Typography,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
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

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChangeEmail = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className={styles.root}>
      <div className={styles.leftsection}>
        <div className={styles.leftsection_steps}>Step 1 of 3</div>
        <form className={styles.form}>
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
              fullWidth
            />
          </Box>
          <Box className={styles.box} mt={2} mb={2}>
            <TextField
              id="outlined-basic"
              label="Email adress"
              variant="outlined"
              className={styles.input}
              onBlur={handleChangeEmail}
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
              className={styles.input}
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
              value={values.password}
              onChange={handleChange("password")}
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
            <Typography variant="caption">Minimum 8 characters</Typography>
          </Box>
          <Box className={styles.box} mt={2} mb={2}>
            <button className={styles.btn}>Next</button>
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
    </div>
  );
}

export default App;
