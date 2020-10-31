import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Login = () => {
    const [data, setData] = useState('No hay datos');
    
    const temp = {
        name: '',
        lastname: '',
        email: '',
        phone: '',
        birth: '',
        address: ''
    }

    

    const handleLogin = (e)=> {
        e.preventDefault();
        document.querySelector('#dataBody').style.display = 'flex';
        temp.birth = temp.birth.split("-");
        temp.birth = `${temp.birth[2]}/${temp.birth[1]}/${temp.birth[0]}`;
        //setData(JSON.stringify(temp, null, 5));
        setData(temp);
    }
    const handleChange = (e, name) => {
        temp[name] = e.target.value;
    }

    return (
        <section className="login">
            <div className="loginContainer">
                <div className="frameData">
                    <div className="dataContainer">
                        <div className="dataTitle">
                            <h1>Datos de Registro</h1>
                        </div>
                        <div id="dataBody" className="dataBody">
                            <label>Nombre</label>
                            <p>{data.name}</p>
                            <label>Apellido</label>
                            <p>{data.lastname}</p>
                            <label>Correo</label>
                            <p>{data.email}</p>
                            <label>Telefono</label>
                            <p>{data.phone}</p>
                            <label>Fecha de Nacimiento</label>
                            <p>{data.birth}</p>
                            <label>Dirección</label>
                            <p>{data.address}</p>
                        </div>
                    </div>
                </div>
                <div className="frameForm">
                    <div className="formHeader">
                        <label>Registro</label>
                    </div>
                    {/* handleChange(this.event, 'name') */}
                    <div className="formBody">
                        <input type="text" name="name" placeholder="Nombre" required onChange={(e)=>{handleChange(e, 'name')}} autoComplete="off"/>
                        <input type="text" name="lastname" placeholder="Apellido" required onChange={(e)=>{handleChange(e, 'lastname')}} autoComplete="off"/>
                        <input type="text" name="email" placeholder="Correo" required onChange={(e)=>{handleChange(e, 'email')}} autoComplete="off"/>
                        <input type="text" name="phone" placeholder="Teléfono" required onChange={(e)=>{handleChange(e, 'phone')}} autoComplete="off"/>
                        <input type="date" name="birth" data-placeholder="Fecha de Nacimiento" required aria-required="true" onChange={(e)=>{handleChange(e, 'birth')}} autoComplete="off"/>
                        <input type="text" name="address" placeholder="Dirección" required onChange={(e)=>{handleChange(e, 'address')}} autoComplete="off"/>
                    </div>
                    
                    <div className="formFooter">
                        <button onClick={handleLogin}>Registrar</button>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default Login;