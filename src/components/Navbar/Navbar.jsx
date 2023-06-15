import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { authActions } from "../../store/authSlice";

import "./Navbar.scss";

const Navbar = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(authActions.logout());
    };

    return (
        <>
            <div className='navbar sticky'>
                <NavLink className='nav-logo upper-case text-xl' to='/'>
                    Softevia
                </NavLink>
                {!isLoggedIn && (
                    <NavLink className='btn btn-outline' to='/login'>
                        Login
                    </NavLink>
                )}
                {isLoggedIn && (
                    <button className='btn btn-outline' onClick={logoutHandler}>
                        Logout
                    </button>
                )}
            </div>
        </>
    );
};

export default Navbar;
