import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper/index";

const Signup = () => {

const [values,setValues]=useState({
  name:"",
  email:"",
  password:"",
  rollnumber:"",
  roomnumber:"",
  batch:"",
  phonenumber:"",
  error:"",
  success:false
})
 const {name,email,password,rollnumber,roomnumber,batch,phonenumber,error,success}= values;
 
 
 const handleChange=(name)=>(event)=>{
   setValues({...values,error:false,[name]: event.target.value});
 }

 
 const onSubmit=(event)=>{
   event.preventDefault();
   console.log("prevented default")
   setValues({...values,error:false})
  //  console.log(JSON.stringify(name));
   signup({name,email,password,rollnumber,roomnumber,batch,phonenumber}).then(data=>{
   // console.log(data.err); 
    if(data?.err){
       console.log("the data from error",data.err);
       setValues({...values,error:data.err,success:false});
     }
     
     else
     {  console.log("this executed")
       setValues({
       ...values,
        name:"",
        email:"",
        password:"",
        rollnumber:"",
        roomnumber:"",
        batch:"",
        phonenumber:"",
        error:"",
        success: true,
      
     })
    
    }
   }).catch(
    setValues({...values,error:true,success:false}) );
  //  console.log("error occured in signing up"));
 }
  const signUpForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-light">Name</label>
              <input value={name} className="form-control" onChange={handleChange("name")} type="text" />
            </div>
            <div className="form-group">
              <label className="text-light">Email</label>
              <input value={email}  className="form-control" onChange={handleChange("email")} type="email" />
            </div>

            <div className="form-group">
              <label className="text-light">Password</label>
              <input value={password} className="form-control" onChange={handleChange("password")} type="password" />
            </div>
            <div className="form-group">
              <label className="text-light">RollNumber</label>
              <input value={rollnumber} className="form-control" onChange={handleChange("rollnumber")} type="text" />
            </div>
            <div className="form-group">
              <label className="text-light">RoomNumber</label>
              <input value={roomnumber} className="form-control" onChange={handleChange("roomnumber")} type="text" />
            </div>
            <div className="form-group">
              <label className="text-light">Batch</label>
              <input value={batch} className="form-control" onChange={handleChange("batch")} type="text" />
            </div>
            <div className="form-group">
              <label className="text-light">PhoneNumber</label>
              <input value={phonenumber} className="form-control" onChange={handleChange("phonenumber")} type="text" />
            </div>

            <button onClick={onSubmit} className="btn btn-success btn-block">Submit</button>
          </form>
        </div>
      </div>
    );
  };
  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            Message Has Been sent on your Institute Email Id Please{" "}
            <Link to="/signin">Login Here After Verifying</Link>
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {"There is an error"}
          </div>
        </div>
      </div>
    );
  };
  return (
    <Base title="Sign up page" description="A page for user to sign up!">
      {successMessage()}
      {errorMessage()}
      {signUpForm()}
      <p className="text-white text-center">{JSON.stringify(values)}</p>
    </Base>
  );
};

export default Signup;
