import React, { useState } from 'react'
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
    const [inputs, setInputs] = useState({})
    const navigate = useNavigate();
    const URL = window.URL
    const handleChange = (e) => {
        setInputs({
            ...inputs, [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {...inputs}
        axios.post(`${URL}/createUser`, data).then(()=>{
            toast.success('A new user added successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
                navigate("/allUsers")
        }).catch(error => {
            console.log(error);
        })        
    }
    return (
        <div className="container">
            <div className="row d-flex justify-content-center my-2 align-items-center">
                <div className="col col-md-6 col-lg-5 col-xl-4 bg-white p-5">
                    <h1 className="text-center">Create User</h1>
                    <label htmlFor="basic-url" className="form-label mt-4">
                        Full Name
                    </label>
                    <div className="input-group flex-nowrap">
                        <input
                            type="text"
                            name='name'
                            className="form-control inputGroup-sizing-lg inputBorder"
                            placeholder="Fahad Shoukat"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <label htmlFor="basic-url" className="form-label mt-4">
                        Email
                    </label>
                    <div className="input-group flex-nowrap">
                        <input
                            type="text"
                            name='email'
                            className="form-control inputGroup-sizing-lg inputBorder"
                            placeholder="example@gmail.com"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <label htmlFor="basic-url" className="form-label mt-4">
                        Age
                    </label>
                    <div className="input-group flex-nowrap">
                        <input
                            type="number"
                            name='age'
                            className="form-control inputGroup-sizing-lg inputBorder"
                            placeholder="23"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <label htmlFor="basic-url" className="form-label mt-4">
                        UserName
                    </label>
                    <div className="input-group flex-nowrap">
                        <input
                            type="text"
                            name='userName'
                            className="form-control inputGroup-sizing-lg inputBorder"
                            placeholder="fahad@1546"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <label htmlFor="basic-url" className="form-label mt-4">
                        Password
                    </label>
                    <div className="input-group flex-nowrap">
                        <input
                            type="password"
                            name="password"
                            className="form-control inputGroup-sizing-lg inputBorder"
                            placeholder="********"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className="d-grid gap-2">
                        <button className="btn btn-outline-success fw-bold mt-3" type="button" onClick={handleSubmit}>
                            Add User
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateUser