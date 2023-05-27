import React, { useState } from "react";
import Categories from "./Categories";
import moment from "moment";

const CustomerOnboarding = ({ categoryData, setCustomerData }) => {
  const [selected, setSelected] = useState(null);
  // name states
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  //  phone number states
  const [enteredNumber, setEnteredNumber] = useState("");
  const [enteredNumberIsValid, setEnteredNumberIsValid] = useState(false);
  const [enteredNumberTouched, setEnteredNumberTouched] = useState(false);
  // dob states
  const [enteredDOB, setEnteredDOB] = useState(moment().format("YYYY-MM-DD"));
  const [enteredDOBIsValid, setEnteredDOBIsValid] = useState(false);
  const [enteredDOBTouched, setEnteredDOBTouched] = useState(false);

  // name validation logic
  const nameChangeHandler = (event) => {
    const result = event.target.value.replace(/[^a-z ]/gi, "");
    setEnteredName(result);
    if (event.target.value.trim() !== "") {
      setEnteredNameIsValid(true);
    }
  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsInvalid
    ? "input_field invalid"
    : "input_field";

  const nameBlurHandler = (event) => {
    setEnteredNameTouched(true);
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
    }
  };

  // phone number validation logic
  const numberChangeHandler = (event) => {
    const result = event.target.value;
    setEnteredNumber(result.replace(/\D/g, ""));
    if (result.trim() !== "") {
      setEnteredNumberIsValid(true);
    }
    if (result.length > 10) {
      setEnteredNumberIsValid(false);
    }
    console.log(result.length);
  };
  const numberInputInValid = !enteredNumberIsValid && enteredNumberTouched;

  const numberInputClasses = numberInputInValid
    ? "input_field invalid"
    : "input_field";

  const numberBlurHandler = (event) => {
    setEnteredNumberTouched(true);
    if (enteredNumber.trim() === "") {
      setEnteredNumberIsValid(false);
    }
  };

  // date validation
  const currentDate = new Date();
  const onDateChange = (e) => {
    const currentYear = currentDate.getFullYear();
    const year = e.target.value.split("-")[0];
    const age = currentYear - year;
    setEnteredDOB(e.target.value);
    if (age < 10) {
      setEnteredDOBIsValid(false);
      return;
    } else {
      setEnteredDOBIsValid(true);
    }
    console.log(enteredDOB);
  };

  const dateInputIsInvalid = !enteredDOBIsValid && enteredDOBTouched;

  const dateInputClasses = dateInputIsInvalid
    ? "input_field invalid"
    : "input_field";

  const dateBlurHandler = (event) => {
    setEnteredDOBTouched(true);
    if (enteredDOB.trim() === currentDate) {
      setEnteredDOBIsValid(false);
    }
  };

  // form submission logic
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    setEnteredNumberTouched(true);
    setEnteredDOBTouched(true);

    if (!enteredNameIsValid || !enteredNumberIsValid || !enteredDOBIsValid) {
      return;
    }

    const userData = {
      name: enteredName,
      phone_number: enteredNumber,
      dob: enteredDOB,
      category: categoryData[selected].title,
    };

    setCustomerData(userData);
  };

  return (
    <form className="form_container" onSubmit={formSubmissionHandler}>
      <h1>Customer Onboarding</h1>
      <div className={nameInputClasses}>
        <label htmlFor="customer_name">Customer Name</label>
        <input
          type="text"
          id="name"
          name="customer_name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          placeholder="Enter Your Name"
        />
      </div>
      <div className={numberInputClasses}>
        <label htmlFor="phone">Customer Phone Number</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={enteredNumber}
          onChange={numberChangeHandler}
          onBlur={numberBlurHandler}
          placeholder="Enter Phone Number"
        />
      </div>
      <div className={dateInputClasses}>
        <label htmlFor="dob">Customer DOB</label>
        <input
          type="date"
          name="dob"
          value={enteredDOB}
          onChange={onDateChange}
          onBlur={dateBlurHandler}
        />
      </div>

      <Categories
        categoryData={categoryData}
        selected={selected}
        setSelected={setSelected}
      />

      <button type="submit" className="submit_button">
        Submit
      </button>
    </form>
  );
};

export default CustomerOnboarding;
