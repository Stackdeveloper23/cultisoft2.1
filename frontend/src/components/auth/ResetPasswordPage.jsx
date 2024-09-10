import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Config from '../../Config';
import logo from '../../assets/img/logoCultisoft.svg'

const ResetPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await Config.getPasswordReset({
                email,
                password,
                password_confirmation: passwordConfirmation
            });
            console.log('Response:', response); 
            setTimeout(() => {navigate('/login');}, 1000);  
           

        } catch (error) {
            console.error('Error:', error);

            if (error.errors) {
                const errorMessages = Object.values(error.errors).flat().join(' ');
                setMessage(errorMessages);
            } else {
                setMessage(error.message || 'Error sending password reset request.');
            }
        }
    };

    const viewport = {
        height: '100vh',
    };

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center" style={viewport}>
                <div className="col-sm-4">
                    <div className="card mt-5 mb-5 rounded-4">
                        <div className="card-body rounded-4" style={{ backgroundColor: "#98FB98" }}>
                            <div className="svg-container mt-3 mb-3 d-flex justify-content-center" id="logo">
                                <img src={logo} alt="logo" height={70} className=''/>
                            </div>
                            <h2 className='text-center fw-bolder mb-5'>Recuperacion de Contraseña</h2>
                            <form onSubmit={handleSubmit} className='d-flex' style={{ flexDirection: "column" }}>
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input
                                        type="email"
                                        className="form-control mt-2"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password:</label>
                                    <input
                                        type="password"
                                        className="form-control mt-2"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Confirm Password:</label>
                                    <input
                                        type="password"
                                        className="form-control mt-2"
                                        value={passwordConfirmation}
                                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="container d-flex justify-content-center">
                                    <button type="submit" className="btn btn-primary mt-3">Enviar</button>
                                </div>
                                <Link to="/login">Back</Link>
                            </form>
                            {message && <p>{message}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPasswordPage;



