import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate

const LoginPage = () => {
  const { register, handleSubmit, errors } = useForm();
  const navigate = useNavigate(); // Use the useNavigate hook instead of useHistory

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/login', data);
      console.log(response.data);

      // Redirect the user after successful login
      navigate('/home'); // Use navigate instead of history.push
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="username"
          placeholder="Username"
          {...register("username", { required: true })}
        />
        {errors && errors.username && <p>Username is required</p>}


        <input
          type="password"
          name="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        {errors && errors.password && <p>Password is required</p>}


        <input type="submit" />
        <Link to="/register">Don't have an account? Register here.</Link>
      </form>
    </div>
  );
};

export default LoginPage;