import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegisterPage(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    function registerUser(ev){
        ev.preventDefault();
        axios.get('http://localhost:4000/test')

    }
    return(
        <div className="mt-4 grow flex item-centre justify-around">
            <div className="mb-64">
            <h1 className="text-4xl text-center mb-4">Register</h1>
            <form className="max-w-md mx-auto" onSubmit={registerUser}>
                <input type="text" placeholder="Fullname" 
                        value={name} 
                        onChange={ev => setName(ev.target.value)} />
                <input type="email" placeholder="your@email.com" 
                        value={email} 
                        onChange={ev => setEmail(ev.target.value)} />
                <input type="password" placeholder="password" 
                        value={password} 
                        onChange={ev => setPassword(ev.target.value)} />
                <button>Register</button>
                <div className="text-center py-2 text-grey-500">
                    Already a member? <Link className="underline text" to={'/login'}>Register now</Link>
                </div>
            </form>
            </div>
        </div>
    );

}