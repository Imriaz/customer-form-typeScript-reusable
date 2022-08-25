import React from "react";
import { makeStyles } from "@material-ui/core";
import { Route, Routes, useNavigate } from "react-router-dom";
import BasicInfoAdd from "../BasicInfoAdd";
import ContactInfoAdd from "../ContactInfoAdd";
import EmployeeList from "../EmployeeList";
import { Employee } from "../model/model";
import NotFound from "../NotFound";
import EmailInfoAdd from "../EmailInfoAdd";
import CustomerIdentityAdd from "../CustomerIdentityAdd";
import BlackInformationAdd from "../BlackInformationAdd";
import CustomerSIAdd from "../CustomerSIAdd";

const useStyles = makeStyles({
  form: {
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)",
    gap: "5px",
    margin: "10px",
    padding: "5px",
    border: "1px solid black",
  },
  formLeftSide: {
    gridColumn: "1/5",
  },
  formRightSide: {
    gridColumn: "5/9",
  },
  form__back__button: {
    padding: "5px",
    color: "black",
    backgroundColor: "#27AE60",
    borderRadius: "5px",
    width: "100px",
    margin: "15px",
    marginLeft: "580px",
  },
  form__submit__button: {
    padding: "5px",
    color: "black",
    backgroundColor: "#27AE60",
    borderRadius: "5px",
    width: "100px",
    margin: "15px",
    marginRight: "580px",
  },
});

export type formDataType = {
  customerType: string;
  firstName: string;
  lastName: string;
  company: string;
  designation: string;
  phoneNo: string;
  email1: string;
  email2: string;
  email3: string;
  address1: string;
  address2: string;
  address3: string;
  address4: string;
  departmentName: string;
  remarks: string;
  gender: string;
  discountRate: string;
  doNotSDM: string;
  doNotIPO: string;
};
const formData: formDataType = {
  customerType: "",
  firstName: "",
  lastName: "",
  company: "",
  designation: "",
  phoneNo: "",
  email1: "",
  email2: "",
  email3: "",
  address1: "",
  address2: "",
  address3: "",
  address4: "",
  departmentName: "",
  remarks: "",
  gender: "",
  discountRate: "",
  doNotSDM: "",
  doNotIPO: "",
};

export type ErrorType = {
  [key: string]: string;
};

const initialError: ErrorType = {
  firstName: "",
  lastName: "",
  company: "",
  designation: "",
  phoneNo: "",
  email1: "",
  email2: "",
  email3: "",
  address1: "",
  departmentName: "",
  remarks: "",
};

const Homepage = () => {
  const [employees, setEmployees] = React.useState<Employee[]>([]);
  const [data, setData] = React.useState<formDataType>(formData);
  const [errors, setErrors] = React.useState(initialError);
  const classes = useStyles();
  const navigation = useNavigate();

  /** 
       This Method to Add Employee on the state
      */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid()) {
      return;
    } else {
      setEmployees((prev) => [
        ...prev,
        {
          customerType: data.customerType,
          firstName: data.firstName,
          lastName: data.lastName,
          company: data.company,
          phoneNo: data.phoneNo,
          email1: data.email1,
          email2: data.email2,
          email3: data.email3,
          address1: data.address1,
          address2: data.address2,
          address3: data.address3,
          address4: data.address4,
          departmentName: data.departmentName,
          remarks: data.remarks,
          gender: data.gender,
          discountRate: data.discountRate,
          doNotSDM: data.doNotSDM,
          doNotIPO: data.doNotIPO,
        },
      ]);
      setData({
        customerType: "",
        firstName: "",
        lastName: "",
        company: "",
        designation: "",
        phoneNo: "",
        email1: "",
        email2: "",
        email3: "",
        address1: "",
        address2: "",
        address3: "",
        address4: "",
        departmentName: "",
        remarks: "",
        gender: "",
        discountRate: "",
        doNotSDM: "",
        doNotIPO: "",
      });
      console.log(employees);
      // navigation("/");
    }
  };

  // ============================== Methods =========================

  /** 
       This Method for get all change on the Input Field
      */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  /** 
       This Method for validation on the Input Field
      */
  const isValid = () => {
    let hasError = false;
    const copyErrors: ErrorType = { ...errors };

    const validationFields = [
      "phoneNo",
      "firstName",
      "lastName",
      "company",
      "address1",
      "departmentName",
      "email1",
      "email2",
      "email3",
      "remarks",
      "customerFactor",
    ];

    for (let key in copyErrors) {
      if (
        validationFields.includes(key) &&
        data[key as keyof typeof data] === ""
      ) {
        copyErrors[key] = "required";
        hasError = true;
      } else {
        copyErrors[key] = ``;
      }
    }

    if (data.address1.length < 5) {
      copyErrors.address1 = "Address must be required";
      hasError = true;
    } else {
      copyErrors.address1 = "";
    }

    setErrors(copyErrors);

    return hasError;
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <EmployeeList employees={employees} setEmployees={setEmployees} />
          }
        />
        <Route
          path="/add"
          element={
            <form>
              <div className={classes.form}>
                <div className={classes.formLeftSide}>
                  <CustomerIdentityAdd
                    data={data}
                    setData={setData}
                    errors={errors}
                    setErrors={setErrors}
                  />

                  <BasicInfoAdd
                    data={data}
                    setData={setData}
                    errors={errors}
                    setErrors={setErrors}
                    handleChange={handleChange}
                  />

                  <ContactInfoAdd
                    data={data}
                    setData={setData}
                    errors={errors}
                    setErrors={setErrors}
                    handleChange={handleChange}
                  />

                  <EmailInfoAdd
                    data={data}
                    setData={setData}
                    errors={errors}
                    setErrors={setErrors}
                    handleChange={handleChange}
                  />
                </div>

                <div className={classes.formRightSide}>
                  <BlackInformationAdd
                    data={data}
                    setData={setData}
                    errors={errors}
                    setErrors={setErrors}
                    handleChange={handleChange}
                  />

                  <CustomerSIAdd
                    data={data}
                    setData={setData}
                    errors={errors}
                    setErrors={setErrors}
                    handleChange={handleChange}
                  />
                </div>
              </div>
              <button
                type="submit"
                className={classes.form__submit__button}
                onClick={(e: React.FormEvent) => {
                  // if (isValid()) {
                  //   return;
                  // }
                  handleSubmit(e);
                }}
              >
                Submit
              </button>
            </form>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Homepage;
