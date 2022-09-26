import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  
  async function handleSubmit(event) {
    event.preventDefault();
    let headersList = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "basic YWQubWlzc2FuLmdyb3VwXHRlc3R1c2VyOk1pc3NhbkAxMjM=",
    };

    let reqOptions = {
      url: "https://dms.missancomputer.com:8081/windream.web.api/authentication/GetAuthenticationToken",
      method: "GET",
      headers: headersList,
    };

    let response = await axios.request(reqOptions);
    let responseToken = response.data.Token;
    console.log(response.data.HasErrors);

    if (responseToken) {
      localStorage.setItem("user-info", responseToken);
      navigate("/dashboard");
      console.log("in if condition");
    }
  }

  return (
    <>
      <div className="header">
        <div className="title">
          <div className="heading">
            Missan <br /> FMS Login{" "}
          </div>
        </div>
      </div>
      <form className="row justify-content-center" onSubmit={handleSubmit}>
        <div className="col-8 mb-3 m-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
          />
        </div>
        <div className="col-8 mb-3 m-3">
          <input
            type="text"
            className="form-control"
            placeholder="Domain"
            name="domain"
          />
        </div>
        <div className="col-8 mb-3 m-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
          />
        </div>
        <div className="col-8 mb-3 m-3 text-center">
          <button type="submit" className="btn btn-primary btn-lg mb-3 w-100">
            Login
          </button>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
