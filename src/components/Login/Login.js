import Input from "../../common/Input";
import { useFormik } from "formik";
import * as yup from "yup";
import "./Login.css";
import { Link, withRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { loginUser } from "../../services/loginService";
import { useAuth, useAuthActions } from "../../Providers/AuthProvider";
import { useQuery } from "../../hooks/useQuery";

const initialValues = {
    email:"",
    password:""
}

const validationSchema = yup.object({

    email: yup.string()
    .email("Invalid email format")
    .required("Email is required "),

    password: yup.string().required("Password is required")
})

const LoginForm = ({history}) => {

  const query = useQuery();
  const redirect = query.get("redirect") || "/";
  const setAuth = useAuthActions();
  const auth = useAuth();
  const [error, setError] = useState(null);

  useEffect(() => {
    if(auth) history.push(redirect);
  },[redirect.userData]);

  const onSubmit = async (values) => {
    console.log(values);
    try {
      const { data } = await loginUser(values);
      setAuth(data);
      // localStorage.setItem("authState", JSON.stringify(data));
       setError(null);
       history.push(redirect);
    } catch (error) {
      if(error.response && error.response.data.message)
        setError(error.response.data.message);
      }
}

  const formik = useFormik ({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true, 
  })

    return ( 
        <div className="formContainer">
          <section className="loginSection">
            <form onSubmit={formik.handleSubmit} className="loginForm">
              <Input 
                formik={formik} 
                name="email" 
                label="Email" 
                type="email" 
              />
              <Input
                formik={formik} 
                name="password" 
                label="Password"
                type="password" 
              />
              <button type="submit" disabled={!formik.isValid} className="loginBtn">
                login
              </button>
              { 
                error && 
                 <p style={{color: "red", fontSize:"13px", padding:"10px"}}>
                   {error}
                 </p> 
              }
              <Link to={`/signup?redirect=${redirect}`}>
                <p className="signupStatus">Not signup yet ?</p>
              </Link>
            </form>
          </section>
        </div>    
     );
}
 
export default withRouter(LoginForm);