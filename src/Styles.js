import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "120vh",
    backgroundImage: `url(${"background-img.jpg"})`,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  leftsection: {
    width: "61%",
    backgroundColor: "white",
    height: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  leftsection_steps: {
    position: "absolute",
    right: "20px",
    top: "20px",
    fontSize: "12px",
    fontWeight: "bold",
  },
  rightsection: {
    width: "33%",
    backgroundColor: "#5a00f8",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    /* marginTop: '20px',
    marginBottom: '20px', */
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "14px",
  },
  rightsection_title: {
    color: "white",
  },
  rightsection_paragraph: {
    fontFamily: "Arial, Helvetica, sans-serif",
    width: "50%",
    lineHeight: "20pt",
    color: "#fff",
    fontSize: "18px",
    fontWeight: 500,
    marginTop: "60px",
  },
  form: {
    width: "42%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& > *": {
      width: "100%",
    },
  },
  leftsection_title: {
    alignSelf: "start",
    width: "40%",
    marginRight: "auto",
    marginLeft: "auto",
  },
  btn: {
    padding: "20px",
    minHeight: 0,
    minWidth: 0,
    backgroundColor: "rgb(40, 110, 250)",
    border: 0,
    borderRadius: 4,
    color: "white",
    fontSize: "16px",
    width: "100%",
  },
  link: {
    color: "#286efa",
    fontWeight: "bold",
  },
  input: {
    border: "1px",
    borderColor: "white",
  },
}));
