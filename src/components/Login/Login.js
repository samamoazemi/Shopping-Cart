import Input from "../../common/Input";
import { useFormik } from "formik";
import * as yup from "yup";
import "./Login.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const initialValues = {
    email:"",
    password:""
}

const onSubmit = (values) => {
    console.log(values);
    // axios
    //   .post("http://localhost:3001/users", values)
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.log(err))
}

const validationSchema = yup.object({

    email: yup.string()
    .email("Invalid email format")
    .required("Email is required "),

    password: yup.string().required("Password is required")
})

const LoginForm = () => {

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
              <Link to="/signup">
                <p className="signupStatus">Not signup yet ?</p>
              </Link>
            </form>
          </section>
        </div>    
     );
}
 
export default LoginForm;