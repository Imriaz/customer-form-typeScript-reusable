import React from "react";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Modal,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import { formDataType } from "../Homepage";
import { ErrorType } from "../Homepage";
import SearchIcon from "@mui/icons-material/Search";
import { MoreHoriz } from "@mui/icons-material";
import MyInputfield from "../MyInputfield";
import { DataGrid } from "@mui/x-data-grid";

type DemoFormProps = {
  data: formDataType;
  setData: React.Dispatch<React.SetStateAction<formDataType>>;
  errors: ErrorType;
  setErrors: React.Dispatch<React.SetStateAction<ErrorType>>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const useStyles = makeStyles({
  form: {
    border: "1px solid black",
    padding: "5px 10px",
    margin: "10px",
  },
  formGroup: {
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)",
    padding: "5px 0px",
    gap: "8px",
    alignItems: "center",
  },
  inputField: {
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "50px",
    gridColumn: "2/4",
    height: "25px",
    marginBottom: "5px",
    "& .MuiFormHelperText-root": {
      marginTop: "-9px",
      marginLeft: "5px",
      fontSize: "12px",
    },
  },
  inputFieldLeftLarge: {
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "50px",
    gridColumn: "2/5",
    height: "25px",
    marginBottom: "5px",
    "& .MuiFormHelperText-root": {
      marginTop: "-9px",
      marginLeft: "5px",
      fontSize: "12px",
    },
  },
  inputFieldRight: {
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "50px",
    gridColumn: "6/7",
    height: "25px",
    marginBottom: "5px",
    "& .MuiFormHelperText-root": {
      marginTop: "-9px",
      marginLeft: "5px",
      fontSize: "12px",
    },
  },
  inputFieldRightLarge: {
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "50px",
    gridColumn: "6/8",
    height: "25px",
    marginBottom: "5px",
    "& .MuiFormHelperText-root": {
      marginTop: "-9px",
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
    width: "110px",
    textAlign: "right",
    paddingRight: "10px",
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
    color: "black",
    "&.MuiFormLabel-root": {
      fontSize: "12px",
    },
    width: "110px",
    textAlign: "right",
    paddingRight: "10px",
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: "yello",
    border: "2px solid #000",
    padding: "300px",
  },
  noneLevel: {
    gridColumn: "2/4",
    color: "black",
    "&.MuiFormLabel-root": {
      fontSize: "12px",
    },
  },
  borderButton: {
    border: "1px solid black",
    borderRadius: "50px",
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
  checkboxTitle: {
    fontSize: "12px",
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

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const CustomerSIAdd: React.FC<DemoFormProps> = (props) => {
  const discountRegex = "^[0-9.]+$|^$";

  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const formatYmd = (date: Date) => date.toISOString().slice(0, 10);

  return (
    <React.Fragment>
      <form className={classes.form}>
        <div className={classes.formGroup}>
          <FormLabel className={classes.FormTitleLevel}>
            Customer Supplementary Information
          </FormLabel>
          <MyInputfield
            labelText="requester"
            labelClass={classes.FormRightLevel}
            name="requester"
            required={false}
            textFieldClass={classes.inputFieldRightLarge}
            handleChange={props.handleChange}
            helperText={props.errors.requester}
            error={Boolean(props.errors.requester)}
          />
          <SearchIcon className={classes.borderButton} />
          <MyInputfield
            labelText="region code"
            labelClass={classes.FormLeftLevel}
            name="regionCode"
            required={false}
            textFieldClass={classes.inputFieldLeftLarge}
            handleChange={props.handleChange}
            helperText={props.errors.regionCode}
            error={Boolean(props.errors.regionCode)}
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

          <button
            className={classes.inputField}
            type="button"
            onClick={handleOpen}
          >
            <MoreHoriz />
          </button>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <div style={modalStyle} className={classes.paper}>
              <FormControl component="fieldset">
                <FormLabel>Select an option:</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender"
                  onChange={props.handleChange}
                  value={props.data?.gender}
                >
                  <FormControlLabel
                    value="Male"
                    control={<Radio size="small" color="primary" />}
                    label={<Typography>Male</Typography>}
                  />
                  <FormControlLabel
                    value="Female"
                    control={<Radio size="small" color="primary" />}
                    label={<Typography>Female</Typography>}
                  />
                  <FormControlLabel
                    value="Others"
                    control={<Radio size="small" color="primary" />}
                    label={<Typography>Others</Typography>}
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </Modal>

          <MyInputfield
            labelText="Receipt address"
            labelClass={classes.FormRightLevel}
            name="receiptAddress"
            required={false}
            textFieldClass={classes.inputFieldRightLarge}
            handleChange={props.handleChange}
            helperText={props.errors.receiptAddress}
            error={Boolean(props.errors.receiptAddress)}
          />
          <MyInputfield
            labelText="Age"
            labelClass={classes.FormLeftLevel}
            name="age"
            required={false}
            textFieldClass={classes.inputFieldLeftLarge}
            handleChange={props.handleChange}
            helperText={props.errors.age}
            error={Boolean(props.errors.age)}
          />
          <FormLabel className={classes.FormRightLevel}>
            Discount rate
          </FormLabel>
          <TextField
            name="discountRate"
            value={props.data.discountRate}
            required={false}
            InputProps={{
              disableUnderline: true,
              style: { fontSize: "12px", padding: "0px 10px" },
            }}
            className={classes.inputFieldRight}
            helperText={props.errors.discountRate}
            error={Boolean(props.errors.discountRate)}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              if (event.target.value.match(discountRegex)) {
                props.handleChange(event);
              }
            }}
          />
          <span>%</span>
          <MyInputfield
            labelText="Customer factor"
            labelClass={classes.FormLeftLevel}
            name="customerFactor"
            required={false}
            textFieldClass={classes.inputField}
            handleChange={props.handleChange}
            helperText={props.errors.customerFactor}
            error={Boolean(props.errors.customerFactor)}
          />
          <FormLabel className={classes.FormRightLevel}>
            Discount rate memo
          </FormLabel>
          <MoreHoriz className={classes.borderButton} />
          <MyInputfield
            labelText="Classification code"
            labelClass={classes.FormLeftLevel}
            name="classificationCode"
            required={false}
            textFieldClass={classes.inputField}
            handleChange={props.handleChange}
            helperText={props.errors.classificationCode}
            error={Boolean(props.errors.classificationCode)}
          />
          <MyInputfield
            labelText="Urge to distinguish"
            labelClass={classes.FormRightLevel}
            name="distinguish"
            required={false}
            textFieldClass={classes.inputFieldRight}
            handleChange={props.handleChange}
            helperText={props.errors.distinguish}
            error={Boolean(props.errors.distinguish)}
          />
          <MyInputfield
            labelText="Order category"
            labelClass={classes.FormLeftLevel}
            name="orderCategory"
            required={false}
            textFieldClass={classes.inputField}
            handleChange={props.handleChange}
            helperText={props.errors.orderCategory}
            error={Boolean(props.errors.orderCategory)}
          />
          <MyInputfield
            labelText="Closing date classification"
            labelClass={classes.FormRightLevel}
            name="closingDate"
            required={false}
            textFieldClass={classes.inputFieldRight}
            handleChange={props.handleChange}
            helperText={props.errors.closingDate}
            error={Boolean(props.errors.closingDate)}
          />
          <MyInputfield
            labelText="Collection method"
            labelClass={classes.FormLeftLevel}
            name="collectionMethod"
            required={false}
            textFieldClass={classes.inputField}
            handleChange={props.handleChange}
            helperText={props.errors.collectionMethod}
            error={Boolean(props.errors.collectionMethod)}
          />
          <MyInputfield
            labelText="Customer generic 1"
            labelClass={classes.FormRightLevel}
            name="customerGen1"
            required={false}
            textFieldClass={classes.inputFieldRight}
            handleChange={props.handleChange}
            helperText={props.errors.customerGen1}
            error={Boolean(props.errors.customerGen1)}
          />
          <MyInputfield
            labelText="Last store CD"
            labelClass={classes.FormLeftLevel}
            name="lastStoreCD"
            required={false}
            textFieldClass={classes.inputField}
            handleChange={props.handleChange}
            helperText={props.errors.lastStoreCD}
            error={Boolean(props.errors.lastStoreCD)}
          />
          <MyInputfield
            labelText="Customer generic 2"
            labelClass={classes.FormRightLevel}
            name="customerGen2"
            required={false}
            textFieldClass={classes.inputFieldRight}
            handleChange={props.handleChange}
            helperText={props.errors.customerGen2}
            error={Boolean(props.errors.customerGen2)}
          />
          <MyInputfield
            labelText="customer rank"
            labelClass={classes.FormLeftLevel}
            name="customerRank"
            required={false}
            textFieldClass={classes.inputField}
            handleChange={props.handleChange}
            helperText={props.errors.customerRank}
            error={Boolean(props.errors.customerRank)}
          />
          <MyInputfield
            labelText="Customer generic 3"
            labelClass={classes.FormRightLevel}
            name="customerGen3"
            required={false}
            textFieldClass={classes.inputFieldRight}
            handleChange={props.handleChange}
            helperText={props.errors.customerGen3}
            error={Boolean(props.errors.customerGen3)}
          />
          <FormLabel className={classes.FormLeftLevel}>
            credit registration
          </FormLabel>
          <FormLabel className={classes.noneLevel}>none</FormLabel>
          <MoreHoriz className={classes.borderButton} />
          <MyInputfield
            labelText="Customer generic 4"
            labelClass={classes.FormRightLevel}
            name="customerGen4"
            required={false}
            textFieldClass={classes.inputFieldRight}
            handleChange={props.handleChange}
            helperText={props.errors.customerGen4}
            error={Boolean(props.errors.customerGen4)}
          />
          <FormLabel className={classes.FormLeftLevel}>
            Rejection management
          </FormLabel>
          <MyInputfield
            labelText="Customer generic 5"
            labelClass={classes.FormRightLevel}
            name="customerGen5"
            required={false}
            textFieldClass={classes.inputFieldRight}
            handleChange={props.handleChange}
            helperText={props.errors.customerGen5}
            error={Boolean(props.errors.customerGen5)}
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={props.handleChange}
                color="primary"
                value="do not send DM"
                name="doNotSDM"
              />
            }
            className={classes.inputCheckbox1}
            label={
              <Typography className={classes.checkboxTitle}>
                do not send DM
              </Typography>
            }
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={props.handleChange}
                color="primary"
                value="do not issue a purchase order"
                name="doNotIPO"
              />
            }
            className={classes.inputCheckbox2}
            label={
              <Typography className={classes.checkboxTitle}>
                do not issue a purchase order
              </Typography>
            }
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
