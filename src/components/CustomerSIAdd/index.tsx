import React from "react";
import { Checkbox, FormControlLabel, FormLabel, makeStyles, Radio, TextField } from "@material-ui/core";
import { formDataType } from "../Homepage";
import { ErrorType } from "../Homepage";
import SearchIcon from "@mui/icons-material/Search";
import { MoreHoriz, Percent } from "@mui/icons-material";

type DemoFormProps = {
  data: formDataType;
  setData: React.Dispatch<React.SetStateAction<formDataType>>;
  errors: ErrorType;
  setErrors: React.Dispatch<React.SetStateAction<ErrorType>>;
};

const useStyles = makeStyles({
  form: {
    border: "1px solid black",
    margin: "10px",
  },
  formGroup: {
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)",
    padding: "5px 0px",
    gap: "8px",
  },
  inputField: {
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "50px",
    gridColumn: "2/4",
  },
  inputFieldLeftLarge: {
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "50px",
    gridColumn: "2/5",
  },
  inputFieldRight: {
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "50px",
    gridColumn: "6/7",
  },
  inputFieldRightLarge: {
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "50px",
    gridColumn: "6/8",
  },
  FormLeftLevel: {
    gridColumn: "1/2",
    padding: "0px 5px",
    color: "black",
    "&.MuiFormLabel-root": {
      fontSize: "12px",
    },
    width: "100px",
  },
  FormTitleLevel: {
    gridColumn: "1/5",
    padding: "0px 5px",
    color: "black",
    "&.MuiFormLabel-root": {
      fontSize: "12px",
    },
  },
  FormRightLevel: {
    gridColumn: "5/6",
    padding: "0px 5px",
    color: "black",
    "&.MuiFormLabel-root": {
      fontSize: "12px",
    },
    width: "100px",
  },
  FormSelectButton1: {
    gridColumn: "6/7",
    color: "black",
    "&.MuiFormLabel-root": {
      fontSize: "12px",
    },
  },
  FormSelectButton2: {
    gridColumn: "7/8",
    color: "black",
    "&.MuiFormLabel-root": {
      fontSize: "12px",
    },
  },
  inputCheckbox1: {
    gridColumn: "1/3",
    "&.MuiFormLabel-root": {
      fontSize: "12px",
    },
  },
  inputCheckbox2: {
    gridColumn: "3/6",
    "&.MuiFormLabel-root": {
      fontSize: "12px",
    },
  },
  CallCenterLevel: {
    gridColumn: "2/4",
    color: "black",
    "&.MuiFormLabel-root": {
      fontSize: "12px",
    },
  },
  RegDateLevel: {
    gridColumn: "5/9",
    color: "black",
    "&.MuiFormLabel-root": {
      fontSize: "12px",
    },
  },
  errorMessage: {
    Color: "red",
    padding: "10px",
  },
});

const CustomerSIAdd: React.FC<DemoFormProps> = (props) => {
  const classes = useStyles();

  // ============================== Methods =========================

  /** 
       This Method for get all change on the Input Field
      */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    props.setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    props.setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const formatYmd = (date:Date) => date.toISOString().slice(0, 10);

  return (
    <React.Fragment>
      <form className={classes.form}>
        <div className={classes.formGroup}>
          <FormLabel className={classes.FormTitleLevel}>
            Customer Supplementary Information
          </FormLabel>
          <FormLabel className={classes.FormRightLevel}>requester</FormLabel>
          <TextField
            id="requester"
            name="requester"
            className={classes.inputFieldRightLarge}
            InputProps={{ disableUnderline: true }}
            onChange={handleChange}
          />
          <SearchIcon />
          <FormLabel className={classes.FormLeftLevel}>region code</FormLabel>
          <TextField
            id="regionCode"
            name="regionCode"
            className={classes.inputFieldLeftLarge}
            InputProps={{ disableUnderline: true }}
            onChange={handleChange}
          />
          <FormLabel className={classes.FormRightLevel}>receipt</FormLabel>

          <FormControlLabel
            value="requirement"
            control={<Radio size="small" />}
            label="requirement"
            className={classes.FormSelectButton1}
          />
          <FormControlLabel
            value="notRequirement"
            control={<Radio size="small" />}
            label="don't want"
            className={classes.FormSelectButton2}
          />
          <FormLabel className={classes.FormLeftLevel}>Gender</FormLabel>
          <TextField
            id="gender"
            name="gender"
            className={classes.inputField}
            InputProps={{ disableUnderline: true }}
            onChange={handleChange}
          />
          <FormLabel className={classes.FormRightLevel}>
            Receipt address
          </FormLabel>
          <TextField
            id="receiptAddress"
            name="receiptAddress"
            className={classes.inputFieldRightLarge}
            InputProps={{ disableUnderline: true }}
            onChange={handleChange}
          />
          <FormLabel className={classes.FormLeftLevel}>Age</FormLabel>
          <TextField
            id="age"
            name="age"
            className={classes.inputFieldLeftLarge}
            InputProps={{ disableUnderline: true }}
            onChange={handleChange}
          />
          <FormLabel className={classes.FormRightLevel}>
            Discount rate
          </FormLabel>
          <TextField
            id="discountRate"
            name="discountRate"
            className={classes.inputFieldRight}
            InputProps={{ disableUnderline: true }}
            onChange={handleChange}
          />
          <Percent />
          <FormLabel className={classes.FormLeftLevel}>
            Customer factor
          </FormLabel>
          <TextField
            id="customerFactor"
            name="customerFactor"
            className={classes.inputField}
            InputProps={{ disableUnderline: true }}
            onChange={handleChange}
          />
          <FormLabel className={classes.FormRightLevel}>
            Discount rate memo
          </FormLabel>
          <MoreHoriz />
          <FormLabel className={classes.FormLeftLevel}>
            Classification code
          </FormLabel>
          <TextField
            id="classificationCode"
            name="classificationCode"
            className={classes.inputField}
            InputProps={{ disableUnderline: true }}
            onChange={handleChange}
          />
          <FormLabel className={classes.FormRightLevel}>
            Urge to distinguish
          </FormLabel>
          <TextField
            id="distinguish"
            name="distinguish"
            className={classes.inputFieldRight}
            InputProps={{ disableUnderline: true }}
            onChange={handleChange}
          />
          <FormLabel className={classes.FormLeftLevel}>
            Order category
          </FormLabel>
          <TextField
            id="orderCategory"
            name="orderCategory"
            className={classes.inputField}
            InputProps={{ disableUnderline: true }}
            onChange={handleChange}
          />
          <FormLabel className={classes.FormRightLevel}>
            Closing date classification
          </FormLabel>
          <TextField
            id="closingDate"
            name="closingDate"
            className={classes.inputFieldRight}
            InputProps={{ disableUnderline: true }}
            onChange={handleChange}
          />
          <FormLabel className={classes.FormLeftLevel}>
            Collection method
          </FormLabel>
          <TextField
            id="collectionMethod"
            name="collectionMethod"
            className={classes.inputField}
            InputProps={{ disableUnderline: true }}
            onChange={handleChange}
          />
          <FormLabel className={classes.FormRightLevel}>
            Customer generic 1
          </FormLabel>
          <TextField
            id="customerGen1"
            name="customerGen1"
            className={classes.inputFieldRight}
            InputProps={{ disableUnderline: true }}
            onChange={handleChange}
          />
          <FormLabel className={classes.FormLeftLevel}>Last store CD</FormLabel>
          <TextField
            id="lastStoreCD"
            name="lastStoreCD"
            className={classes.inputField}
            InputProps={{ disableUnderline: true }}
            onChange={handleChange}
          />
          <FormLabel className={classes.FormRightLevel}>
            Customer generic 2
          </FormLabel>
          <TextField
            id="customerGen2"
            name="customerGen2"
            className={classes.inputFieldRight}
            InputProps={{ disableUnderline: true }}
            onChange={handleChange}
          />
          <FormLabel className={classes.FormLeftLevel}>customer rank</FormLabel>
          <TextField
            id="customerRank"
            name="customerRank"
            className={classes.inputField}
            InputProps={{ disableUnderline: true }}
            onChange={handleChange}
          />
          <FormLabel className={classes.FormRightLevel}>
            Customer generic 3
          </FormLabel>
          <TextField
            id="customerGen3"
            name="customerGen3"
            className={classes.inputFieldRight}
            InputProps={{ disableUnderline: true }}
            onChange={handleChange}
          />
          <FormLabel className={classes.FormLeftLevel}>
            credit registration
          </FormLabel>
          <label>none</label>
          <MoreHoriz />
          <FormLabel className={classes.FormRightLevel}>
            Customer generic 4
          </FormLabel>
          <TextField
            id="customerGen4"
            name="customerGen4"
            className={classes.inputFieldRight}
            InputProps={{ disableUnderline: true }}
            onChange={handleChange}
          />
          <FormLabel className={classes.FormLeftLevel}>
            Rejection management
          </FormLabel>
          <FormLabel className={classes.FormRightLevel}>
            Customer generic 5
          </FormLabel>
          <TextField
            id="customerGen5"
            name="customerGen5"
            className={classes.inputFieldRight}
            InputProps={{ disableUnderline: true }}
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox />}
            className={classes.inputCheckbox1}
            label="do not send DM"
          />
          <FormControlLabel
            className={classes.inputCheckbox2}
            control={<Checkbox />}
            label="do not issue a purchase order"
          />
          <FormLabel className={classes.FormLeftLevel}>
            First store CD
          </FormLabel>
          <FormLabel className={classes.CallCenterLevel}>call center</FormLabel>

          <FormLabel className={classes.RegDateLevel}>
            registration date {formatYmd(new Date())}
          </FormLabel>
        </div>
      </form>
    </React.Fragment>
  );
};

export default CustomerSIAdd;
