import { useState, useEffect } from "react";
import { Logo_06, FormRow_06 } from "../components";
import Wrapper from "../assets/wrappers/Register_06";
import { useAppContext } from "../context/appContext_06";
import Alert_06 from "../components/Alert_06";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  showAlert: false,
};

export const Register_06 = () => {
  const [values, setValues] = useState(initialState);

  const { showAlert, displayAlert } = useAppContext();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const taggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    if (!email || !password) {
      displayAlert();
      return;
    }
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        <Logo_06 />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert_06 />}

        {/*name input*/}
        {!values.isMember && (
          <FormRow_06
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
            className="form-input" />
        )}
        {/* email input */}
        <FormRow_06
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
          className="form-input" />
        {/* password input */}
        <FormRow_06
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
          className="form-input" />

        <button className="btn btn-block" type="submit">
          Submit
        </button>

        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type="button" className="member-btn" onClick={taggleMember}>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register_06;
