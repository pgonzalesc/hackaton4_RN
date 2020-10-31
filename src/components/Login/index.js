import React from 'react';
import './index.css';

const Login = () => {
    return (
        <section className="login">
            <div className="loginContainer">
                <div className="frameData">
                    <div className="dataContainer">
                        <div className="dataTitle">
                            <h1>Datos de Registro</h1>
                        </div>
                        <div className="dataBody">
                            <p>No hay datos</p>
                        </div>
                    </div>
                </div>
                <div className="frameForm">
                    <div className="formHeader">
                        <label>Registro</label>
                    </div>

                    <div className="formBody">
                        <input type="text" placeholder="Nombre" required />
                        <input type="text" placeholder="Apellido" required />
                        <input type="text" placeholder="Correo" required />
                        <input type="text" placeholder="Teléfono" required />
                        <input type="date" data-placeholder="Fecha de Nacimiento" required aria-required="true"/>
                        <input type="text" placeholder="Dirección" required />
                    </div>
                    
                    <div className="formFooter">
                        <button>Registrar</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;