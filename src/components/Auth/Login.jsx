import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import { authActions } from "../../store/authSlice";

import './Auth.scss'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();
    const dispatch = useDispatch();

    const sendToServer = async (email, password) => {
        try {
            const response = await axios.post(
                "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA0cr-FqJajlhBlP_QV0y3KRQRy_6o5i6c",
                {
                    email: email,
                    password: password,
                    returnSecureToken: true,
                }
            );
            console.log(response.data);
            dispatch(
                authActions.login({
                    token: response.data.idToken,
                    email,
                })
            );
            history("/");
        } catch (error) {
            alert("Login Failed");
            console.log(error);
        }
    };

    const loginHandler = (event) => {
        event.preventDefault();
        sendToServer(email, password);
    };

    return (
        <>
            <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
                <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                    <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight'>
                        Sign in to your account
                    </h2>
                </div>

                <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                    <form className='space-y-6' onSubmit={loginHandler}>
                        <input
                            type='email'
                            placeholder='Email'
                            className='input input-bordered w-full max-w-xs'
                            required
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />

                        <input
                            type='password'
                            placeholder='Password'
                            className='input input-bordered w-full max-w-xs'
                            required
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                        />

                        <button type='submit' className='btn btn-outline'>
                            Sign in
                        </button>
                    </form>

                    <p className='mt-10 text-center text-sm text-gray-500'>
                        Not a member?
                        <NavLink
                            to='/register'
                            className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
                            style={{marginLeft: '1rem'}}
                        >
                            Register yourself
                        </NavLink>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Login;
