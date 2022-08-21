import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthProvider';
import '../styles/Login.scss'       
import Signup from './Signup';     

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/user/login',
                {
                    method : 'POST'
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg("Nom d'utilisateur ou mot de passe oublié ?");
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Connexion échouée');
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            <div className='login_img'>
                <img className="logo2" src="./imgs/logo/logo-black2.png" alt="Groupomania" />
                </div>
            {success ? (
                <section>
                    <h1>Connexion réussie !</h1>
                    <br />
                    <p>
                        <a href="Home.js">Aller à l'acceuil</a>
                    </p>
                </section>
                
            ) : (
                
                <section className='Login_box'>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1 className='Login_title'>Se connecter</h1>
                    <form className='Login_form' onSubmit={handleSubmit}>
                        <label className='Login_label' htmlFor="username">Nom d'utilisateur:</label>
                        <input
                            className='Login_input'
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label className='Login_label' htmlFor="password">Mot de passe:</label>
                        <input
                            className='Login_input'
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button className='Login_button' >Connexion</button>
                    </form>
                    <p>
                        Pas de compte ?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a className="connect_link" href="/Signup">Inscrivez-vous</a>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default Login