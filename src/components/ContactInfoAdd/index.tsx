import React from "react";
import { makeStyles } from "@material-ui/core";
import { formDataType, ErrorType } from "../Homepage";
import MyInputfield from "../MyInputfield";

type DemoFormProps = {
  data: formDataType;
  setData: React.Dispatch<React.SetStateAction<formDataType>>;
  errors: ErrorType;
  setErrors: React.Dispatch<React.SetStateAction<ErrorType>>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const useStyles = makeStyles({
  form: {
    backgroundColor: "#CBFFF8",
    margin: "0px 10px",
  },
  formGroup: {
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)",
    padding: "5px 0px",
  },
  FormLeftLevel: {
    gridColumn: "1/2",
    color: "black",
    "&.MuiFormLabel-root": {
      fontSize: "12px",
    },
    width: "100px",
  },
  FormRightLevel: {
    gridColumn: "6/7",
    color: "black",
    "&.MuiFormLabel-root": {
      fontSize: "12px",
    },
  },
  inputField: {
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "50px",
    gridColumn: "2/5",
  },
  inputFieldLarge: {
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "50px",
    gridColumn: "2/6",
  },
  inputFieldRight: {
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "50px",
    gridColumn: "7/9",
  },
  errorMessage: {
    Color: "red",
    padding: "10px",
  },
});

const ContactInfoAdd: React.FC<DemoFormProps> = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <form className={classes.form}>
        <div className={classes.formGroup}>
          <MyInputfield
            labelText="Address line 1"
            labelClass={classes.FormLeftLevel}
            name="address1"
            value={props.data.address1}
            required={true}
            textFieldClass={classes.inputField}
            handleChange={props.handleChange}
            helperText={props.errors.address1}
            error={Boolean(props.errors.address1)}
          />
          <MyInputfield
            labelText="group code"
            labelClass={classes.FormRightLevel}
            name="groupCode"
            value={""}
            required={true}
            textFieldClass={classes.inputFieldRight}
            handleChange={props.handleChange}
            helperText={props.errors.groupCode}
            error={Boolean(props.errors.groupCode)}
          />
        </div>

        <div className={classes.formGroup}>
          <MyInputfield
            labelText="Address 2"
            labelClass={classes.FormLeftLevel}
            name="address2"
            value={props.data.address2}
            required={true}
            textFieldClass={classes.inputField}
            handleChange={props.handleChange}
            helperText={props.errors.address2}
            error={Boolean(props.errors.address2)}
          />
        </div>

        <div className={classes.formGroup}>
          <MyInputfield
            labelText="Address 3"
            labelClass={classes.FormLeftLevel}
            name="address3"
            value={props.data.address3}
            required={true}
            textFieldClass={classes.inputField}
            handleChange={props.handleChange}
            helperText={props.errors.address3}
            error={Boolean(props.errors.address3)}
          />
        </div>

        <div className={classes.formGroup}>
          <MyInputfield
            labelText="Address 4"
            labelClass={classes.FormLeftLevel}
            name="address4"
            value={props.data.address4}
            required={true}
            textFieldClass={classes.inputField}
            handleChange={props.handleChange}
            helperText={props.errors.address4}
            error={Boolean(props.errors.address4)}
          />
        </div>

        <div className={classes.formGroup}>
          <MyInputfield
            labelText="Company Name"
            labelClass={classes.FormLeftLevel}
            name="companyName"
            value={props.data.company}
            required={true}
            textFieldClass={classes.inputFieldLarge}
            handleChange={props.handleChange}
            helperText={props.errors.company}
            error={Boolean(props.errors.company)}
          />
        </div>

        <div className={classes.formGroup}>
          <MyInputfield
            labelText="Department name"
            labelClass={classes.FormLeftLevel}
            name="departmentName"
            value={''}
            required={true}
            textFieldClass={classes.inputFieldLarge}
            handleChange={props.handleChange}
            helperText={props.errors.departmentName}
            error={Boolean(props.errors.departmentName)}
          />
        </div>
      </form>
    </React.Fragment>
  );
};

export default ContactInfoAdd;
