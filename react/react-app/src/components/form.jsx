import React, { useState } from "react";
import Button from "./button";
import Input from "./input";

function Form() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = () => {
    console.log(name, email, password);
    alert(`Name: ${name} \n Email: ${email} \n Password: ${password}`);
  };

  return (
    <>
      <h1>User Profile Form</h1>
      <Input
        type="text"
        placeholder="Enter your name"
        onChange={onChangeName}
        value={name}
      />
      <Input
        type="email"
        placeholder="Enter your email"
        onChange={onChangeEmail}
        value={email}
      />
      <Input
        type="password"
        placeholder="Enter your password"
        onChange={onChangePassword}
        value={password}
      />
      <Button buttonText="Submit" onClick={onSubmit} />
    </>
  );
}

export default Form;
