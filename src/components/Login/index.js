import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Login = () => {
    const [data, setData] = useState('No hay datos');
    const [error, setError] = useState('');
    
    const temp = {
    }

    const msgErr = {

    }

    const handleLogin = (e)=> {
        e.preventDefault();
        
        temp.birth = temp.birth.split("-");
        temp.birth = `${temp.birth[2]}/${temp.birth[1]}/${temp.birth[0]}`;
        let ind = '1';

        if(!temp.name){
            ind = '0';
            msgErr.name = 'El campo nombre es obligatorio';
        }else if(!temp.lastname){
            ind = '0';
            msgErr.lastname = 'El campo apellido es obligatorio';
        }else if(!temp.email){
            ind = '0';
            msgErr.email = 'El campo correo es obligatorio';
        }else if(!temp.phone){
            ind = '0';
            msgErr.phone = 'El campo apellido es obligatorio';
        }else if(!temp.birth){
            ind = '0';
            msgErr.birth = 'El campo Fecha es obligatorio';
        }else if(!temp.address){
            ind = '0';
            msgErr.adress = 'El campo dirección es obligatorio';
        }

        if(ind === '0')
            setError(msgErr);
        else{
            document.querySelector('#dataBody').style.display = 'flex';
            setData(temp);
            reset();
        }
            
    }
    const handleChange = (e, name) => {
        temp[name] = e.target.value;
    }

    const reset = () => {
        document.querySelector('#name').value = '';
        document.querySelector('#lastname').value = '';
        document.querySelector('#email').value = '';
        document.querySelector('#phone').value = '';
        document.querySelector('#birth').value = '';
        document.querySelector('#address').value = '';
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
   
                    <div className="formBody">
                        <input type="text" name="name" id="name" placeholder="Nombre" required onChange={(e)=>{handleChange(e, 'name')}} autoComplete="off"/>
                        <p className="errorMsg">{error.name}</p>
                        <input type="text" name="lastname" id="lastname" placeholder="Apellido" required onChange={(e)=>{handleChange(e, 'lastname')}} autoComplete="off"/>
                        <p className="errorMsg">{error.lastname}</p>
                        <input type="text" name="email" id="email" placeholder="Correo" required onChange={(e)=>{handleChange(e, 'email')}} autoComplete="off"/>
                        <p className="errorMsg">{error.email}</p>
                        <input type="text" name="phone" id="phone" placeholder="Teléfono" required onChange={(e)=>{handleChange(e, 'phone')}} autoComplete="off"/>
                        <p className="errorMsg">{error.phone}</p>
                        <input type="date" name="birth" id="birth" data-placeholder="Fecha de Nacimiento" required aria-required="true" onChange={(e)=>{handleChange(e, 'birth')}} autoComplete="off"/>
                        <p className="errorMsg">{error.birth}</p>
                        <input type="text" name="address" id="address" placeholder="Dirección" required onChange={(e)=>{handleChange(e, 'address')}} autoComplete="off"/>
                        <p className="errorMsg">{error.address}</p>
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