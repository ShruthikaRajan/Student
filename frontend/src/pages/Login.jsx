import { useState } from 'react';
import '../pages/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { signIn } from '../services/auth';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Access the navigation function

    const handleEmailChange = (value) => {
        setEmail(value);
    };

    const handlePasswordChange = (value) => {
        setPassword(value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const form = {
            email: email,
            password: password
        };

        try {
            const res = await signIn(form);
            console.log(res); // Log the response to inspect its structure
            sessionStorage.setItem('token', res.data.token);
            setEmail("");
            setPassword("");
            navigate('/home');
        } catch (err) {
            setEmail("");
            setPassword("");
            console.error(err); // Log the error for debugging
        }
    };

    return (
        <form className="login">
            <h2>Welcome, User!</h2>
            <p>Please log in</p>
            <input onChange={(e) => handleEmailChange(e.target.value)} type="text" name="email" placeholder="Email" />
            <input onChange={(e) => handlePasswordChange(e.target.value)} name="password" type="password" placeholder="Password" />
            <input onClick={handleFormSubmit} type="submit" defaultValue="Log In" />
            <div className="links">
                <a href="#"><Link to='/dashboard'>Admin</Link></a>
                <a href="#"><Link to='/signup'>Signup</Link></a>
            </div>
        </form>
    );
};

export default Login;
