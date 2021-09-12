import React,{useRef} from 'react';
import '../css/login.css';
import logo from '../img/Caja-Negra-LOGO.png';
const URL_LOGIN  = "http://localhost:8083/cotizador/login.php"
const enviarData = async (url, data) =>{
    const resp = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type':'application/json'
        }
    });
}

export default function Login(props) {
    // OBTENCION DE DATOS
    const refUsuario = useRef(null);
    const refClave = useRef(null);
    const handleLogin = () => {
        const data = {
            "usuario": refUsuario.current.value,
            "clave": refClave.current.value
        };
        console.log(data); 
        enviarData(URL_LOGIN,data);
    }
    return (
        // CONSTRUCCION DEL LOGIN PRINCIPAL
        <div className="login">
            <div className="row">
                <div className="col-sm-4 offset-4 mt-5" >
                    <div className="card pt-5">
                        <div className="card-header text-center">
                            <img src={logo}/>
                            <br/>
                            <h3>Bienvenido</h3>
                        </div>
                        <div className="card-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                    @
                                </span>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Correo"
                                    aria-label="Correo"
                                    aria-describedby="basic-addon1"
                                    ref = {refUsuario}
                                />
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon2">
                                    #
                                </span>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="password"
                                    aria-label="password"
                                    aria-describedby="basic-addon2"
                                    ref = {refClave}
                                />
                            </div>
                            <div className="text-center">
                            <button onClick = {handleLogin} className = "btn btn-info btn-lg btn-block align-center">Acceder</button>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}