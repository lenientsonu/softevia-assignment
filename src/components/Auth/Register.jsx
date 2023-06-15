import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

import "./Auth.scss";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cnfrmPassword, setCnfrmPassword] = useState("");
    const history = useNavigate();

    const sendToServer = async (email, password) => {
        try {
            // console.log(email, password);
            const response = await axios.post(
                "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA0cr-FqJajlhBlP_QV0y3KRQRy_6o5i6c",
                {
                    email: email,
                    password: password,
                    returnSecureToken: true,
                }
            );
            console.log(response.data);
            history("/login");
        } catch (error) {
            alert("Registration Failed");
            console.log(error);
        }
    };

    const submitHandler = (event) => {
        event.preventDefault();

        // validation
        if (!email || !password || !cnfrmPassword) {
            alert("Enter All The Fields for Signing Up !!");
        } else if (password !== cnfrmPassword) {
            alert("Passwords Do Not Match !!");
        } else {
            sendToServer(email, password);
        }
    };

    return (
        <>
            <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
                <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                    <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight'>
                        Register your account
                    </h2>
                </div>

                <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                    <form className='space-y-6' onSubmit={submitHandler}>
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

                        <input
                            type='password'
                            placeholder='Confirm Passowrd'
                            className='input input-bordered w-full max-w-xs'
                            required
                            value={cnfrmPassword}
                            onChange={(event) =>
                                setCnfrmPassword(event.target.value)
                            }
                        />

                        <button type='submit' className='btn btn-outline'>
                            Register
                        </button>
                    </form>

                    <p className='mt-10 text-center text-sm text-gray-500'>
                        Already a member?
                        <NavLink
                            to='/login'
                            className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
                            style={{ marginLeft: "1rem" }}
                        >
                            Login
                        </NavLink>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Register;
