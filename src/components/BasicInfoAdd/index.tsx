import React from "react";
import { FormLabel, makeStyles, TextField } from "@material-ui/core";
import { formDataType, ErrorType } from "../Homepage";
import SearchIcon from "@mui/icons-material/Search";
import MyInputfield from "../MyInputfield";

type DemoFormProps = {
  data: formDataType;
  setData: React.Dispatch<React.SetStateAction<formDataType>>;
  errors: ErrorType;
  setErrors: React.Dispatch<React.SetStateAction<ErrorType>>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const useStyles = makeStyles((theme) => ({
  form: {
    backgroundColor: "#CBFFF8",
    margin: "0px 10px",
    padding: "0px 10px",
  },
  formGroup: {
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)",
    padding: "5px 0px",
    alignItems: "center",
  },
  inputField: {
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "50px",
    gridColumn: "2/4",
    height: "25px",
    marginBottom: "6px",
    "& .MuiFormHelperText-root": {
      marginTop: "-6px",
      marginLeft: "5px",
      fontSize: "12px",
    },
  },
  inputFieldPrefectures: {
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "50px",
    gridColumn: "2/3",
    height: "25px",
    marginBottom: "6px",
    "& .MuiFormHelperText-root": {
      marginTop: "-6px",
      marginLeft: "5px",
      fontSize: "12px",
    },
  },
  inputFieldRight: {
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "50px",
    gridColumn: "7/9",
    height: "25px",
    marginBottom: "6px",
    "& .MuiFormHelperText-root": {
      marginTop: "-6px",
      marginLeft: "5px",
      fontSize: "12px",
    },
  },
  FormLeftLevel: {
    gridColumn: "1/2",
    color: "black",
    "&.MuiFormLabel-root": {
      fontSize: "12px",
    },
    width: "90px",
    textAlign: "right",
    paddingRight: "10px",
  },
  FormTitleLevel: {
    gridColumn: "4/5",
    color: "black",
    "&.MuiFormLabel-root": {
      fontSize: "12px",
    },
    textAlign: "right",
    paddingRight: "10px",
  },
  FormRightLevel: {
    gridColumn: "6/7",
    color: "black",
    "&.MuiFormLabel-root": {
      fontSize: "12px",
    },
    width: "80px",
    textAlign: "right",
    paddingRight: "10px",
  },
  titleField: {
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "50px",
    gridColumn: "5/6",
    height: "25px",
    marginBottom: "6px",
    "& .MuiFormHelperText-root": {
      marginTop: "-6px",
      marginLeft: "5px",
      fontSize: "12px",
    },
  },
  borderButton: {
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "50px",
    marginLeft: "10px",
  },
  errorMessage: {
    Color: "red",
    padding: "10px",
  },
}));

const BasicInfoAdd: React.FC<DemoFormProps> = (props) => {
  const classes = useStyles();
  const phoneNoRegex = "^[0-9-]+$|^$";

  return (
    <React.Fragment>
      <form className={classes.form}>
        <div className={classes.formGroup}>
          <FormLabel className={classes.FormLeftLevel}>Phone number</FormLabel>
          <TextField
            name="phoneNo"
            value={props.data.phoneNo}
            required={true}
            InputProps={{
              disableUnderline: true,
              style: { fontSize: "12px", padding: "0px 10px" },
            }}
            className={classes.inputField}
            helperText={props.errors.phoneNo}
            error={Boolean(props.errors.phoneNo)}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              if (event.target.value.match(phoneNoRegex)) {
                props.handleChange(event);
              }
            }}
          />
        </div>

        <div className={classes.formGroup}>
          <MyInputfield
            labelText="Your name"
            labelClass={classes.FormLeftLevel}
            name="firstName"
            value={props.data.firstName}
            required={true}
            textFieldClass={classes.inputField}
            handleChange={props.handleChange}
            helperText={props.errors.firstName}
            error={Boolean(props.errors.firstName)}
          />
          <MyInputfield
            labelText="title"
            labelClass={classes.FormTitleLevel}
            name="lastName"
            value={props.data.lastName}
            required={true}
            textFieldClass={classes.titleField}
            handleChange={props.handleChange}
            helperText={props.errors.lastName}
            error={Boolean(props.errors.lastName)}
          />
        </div>

        <div className={classes.formGroup}>
          <MyInputfield
            labelText="Furigana"
            labelClass={classes.FormLeftLevel}
            name="furigana"
            required={true}
            textFieldClass={classes.inputField}
            handleChange={props.handleChange}
            helperText={props.errors.company}
            error={Boolean(props.errors.company)}
          />
        </div>
        <div className={classes.formGroup}>
          <MyInputfield
            labelText="T"
            labelClass={classes.FormLeftLevel}
            name="search"
            required={false}
            textFieldClass={classes.inputField}
            handleChange={props.handleChange}
            helperText={props.errors.search}
            error={Boolean(props.errors.search)}
          />
          <SearchIcon className={classes.borderButton} />
          <MyInputfield
            labelText="sort code"
            labelClass={classes.FormRightLevel}
            name="sortCode"
            required={true}
            textFieldClass={classes.inputFieldRight}
            handleChange={props.handleChange}
            helperText={props.errors.sortCode}
            error={Boolean(props.errors.sortCode)}
          />
        </div>

        <div className={classes.formGroup}>
          <MyInputfield
            labelText="Prefectures"
            labelClass={classes.FormLeftLevel}
            name="prefectures"
            required={true}
            textFieldClass={classes.inputFieldPrefectures}
            handleChange={props.handleChange}
            helperText={props.errors.company}
            error={Boolean(props.errors.company)}
          />
          <MyInputfield
            labelText="service level"
            labelClass={classes.FormRightLevel}
            name="serviceLevel"
            value={""}
            required={true}
            textFieldClass={classes.inputFieldRight}
            handleChange={props.handleChange}
            helperText={props.errors.company}
            error={Boolean(props.errors.company)}
          />
        </div>
      </form>
    </React.Fragment>
  );
};

export default BasicInfoAdd;
