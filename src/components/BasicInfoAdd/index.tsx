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
  },
  formGroup: {
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)",
    padding: "5px 0px",
  },
  inputField: {
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "50px",
    gridColumn: "2/4",
  },
  inputFieldPrefectures: {
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "50px",
    gridColumn: "2/3",
  },
  inputFieldRight: {
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "50px",
    gridColumn: "7/9",
  },
  FormLeftLevel: {
    gridColumn: "1/2",
    color: "black",
    "&.MuiFormLabel-root": {
      fontSize: "12px",
    },
    width: "100px",
  },
  FormTitleLevel: {
    gridColumn: "4/5",
    color: "black",
    paddingTop: "10px",
    "&.MuiFormLabel-root": {
      fontSize: "12px",
    },
  },
  FormRightLevel: {
    gridColumn: "6/7",
    color: "black",
    "&.MuiFormLabel-root": {
      fontSize: "12px",
    },
  },
  titleField: {
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "50px",
    gridColumn: "5/6",
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
          <FormLabel className={classes.FormLeftLevel}>phone number</FormLabel>
          <TextField
            name="phoneNo"
            value={props.data.phoneNo}
            required={true}
            InputProps={{ disableUnderline: true }}
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
            // labelClass={"classes.RightLevel"}
            name="firstName"
            value={props.data.firstName}
            required={true}
            // textFieldClass={classes.inputField}
            textFieldClass={classes.inputField}
            handleChange={props.handleChange}
            helperText={props.errors.firstName}
            error={Boolean(props.errors.firstName)}
          />
          <MyInputfield
            labelText="title"
            labelClass={classes.FormTitleLevel}
            // labelClass={"classes.RightLevel"}
            name="lastName"
            value={props.data.lastName}
            required={true}
            // textFieldClass={classes.inputField}
            textFieldClass={classes.titleField}
            handleChange={props.handleChange}
            helperText={props.errors.lastName}
            error={Boolean(props.errors.lastName)}
          />
        </div>

        <div className={classes.formGroup}>
          <MyInputfield
            labelText="Furigana"
            // labelClass="LeftLevel"
            labelClass={classes.FormLeftLevel}
            name="company"
            value={props.data.company}
            required={true}
            // textFieldClass="inputField"
            textFieldClass={classes.inputField}
            handleChange={props.handleChange}
            helperText={props.errors.company}
            error={Boolean(props.errors.company)}
          />
        </div>
        <div className={classes.formGroup}>
          <MyInputfield
            labelText="Search"
            // labelClass="LeftLevel"
            labelClass={classes.FormLeftLevel}
            name="search"
            value={""}
            required={false}
            // textFieldClass="inputField"
            textFieldClass={classes.inputField}
            handleChange={props.handleChange}
            helperText={props.errors.search}
            error={Boolean(props.errors.search)}
          />
          <SearchIcon />
          <MyInputfield
            labelText="sort code"
            // labelClass="LeftLevel"
            labelClass={classes.FormRightLevel}
            name="sortCode"
            value={""}
            required={true}
            // textFieldClass="inputField"
            textFieldClass={classes.inputFieldRight}
            handleChange={props.handleChange}
            helperText={props.errors.sortCode}
            error={Boolean(props.errors.sortCode)}
          />
        </div>

        <div className={classes.formGroup}>
          <MyInputfield
            labelText="Prefectures"
            // labelClass="LeftLevel"
            labelClass={classes.FormLeftLevel}
            name="company"
            value={""}
            required={true}
            // textFieldClass="inputField"
            textFieldClass={classes.inputFieldPrefectures}
            handleChange={props.handleChange}
            helperText={props.errors.company}
            error={Boolean(props.errors.company)}
          />
          <MyInputfield
            labelText="service level"
            // labelClass="LeftLevel"
            labelClass={classes.FormRightLevel}
            name="serviceLevel"
            value={""}
            required={true}
            // textFieldClass="inputField"
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
