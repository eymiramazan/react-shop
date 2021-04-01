import React from 'react';
import "./user.styles.scss";

import SignIn from "../../components/sign-in/sign-in.component.jsx"
import SignUp from "../../components/sign-up/sign-up.component.jsx"

const User = () => (
  <div className="user">
    <SignIn />
    <SignUp />
  </div>
)

export default User;