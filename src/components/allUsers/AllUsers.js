import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Oval } from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState({});
  const [deleteUser, setDeleteUser] = useState({});
  const [isLoading, setIsLoading] = useState(false)
  const URL = window.URL;
  const navigate = useNavigate();
  const handleChange = (e) => {
    setModal({
      ...modal, [e.target.name]: e.target.value
    })
  }

  const handleEdit = (user) => {
    console.log(user);
    setModal(user)
  }

  const updateData = () => {
    let updateData = {
      id: modal._id,
      name: modal.name,
      email: modal.email,
      age: modal.age,
      userName: modal.userName
    }
    axios.put(`${URL}/editUser`, updateData).then((res) => {
      console.log("Message from server", res.data);
      navigate('/allUsers')
      toast.info(res.data, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }).catch((error) => {
      console.log(error)
    })
  }

  const handleDelete = (user) => {
    const { _id } = user
    axios.delete(`${URL}/deleteUser/${_id}`).then((res) => {
      console.log("message from server", res.data);
      toast.error(res.data, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }).catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    axios.get(`${URL}/getUsers`).then((res) => {
      setUsers(res.data)
      setIsLoading(true)
    }).catch(error => {
      console.log(error);
    })
  }, [users]);

  return (
    <div className="container">
      {/* Modal */ }
      <div className="modal fade" id="edit" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">User Details</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <label htmlFor="basic-url" className="form-label mt-4">
                Full Name
              </label>
              <div className="input-group flex-nowrap">
                <input
                  type="text"
                  name='name'
                  value={ modal.name }
                  className="form-control inputGroup-sizing-lg inputBorder"
                  placeholder="Fahad Shoukat"
                  required
                  onChange={ handleChange }
                />
              </div>
              <label htmlFor="basic-url" className="form-label mt-4">
                Email
              </label>
              <div className="input-group flex-nowrap">
                <input
                  type="text"
                  name='email'
                  value={ modal.email }
                  className="form-control inputGroup-sizing-lg inputBorder"
                  placeholder="example@gmail.com"
                  required
                  onChange={ handleChange }
                />
              </div>
              <label htmlFor="basic-url" className="form-label mt-4">
                Age
              </label>
              <div className="input-group flex-nowrap">
                <input
                  type="number"
                  name='age'
                  value={ modal.age }
                  className="form-control inputGroup-sizing-lg inputBorder"
                  placeholder="23"
                  required
                  onChange={ handleChange }
                />
              </div>
              <label htmlFor="basic-url" className="form-label mt-4">
                UserName
              </label>
              <div className="input-group flex-nowrap">
                <input
                  type="text"
                  name='userName'
                  value={ modal.userName }
                  className="form-control inputGroup-sizing-lg inputBorder"
                  placeholder="fahad@1546"
                  required
                  onChange={ handleChange }
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={ updateData }>Update</button>
            </div>
          </div>
        </div>
      </div>
      {/* End Modal */ }
      {/* Delete Modal */ }
      <div className="modal" id="delete" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Delete User</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete this user?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={ () => handleDelete(deleteUser) }>Delete</button>
            </div>
          </div>
        </div>
      </div>
      {/* End Delete Modal */ }
      <h1 className='text-center my-4'>Users List</h1>
      {/* { users.length > 0 ? */ }
      <div className="table-responsive">
        <table className="table table-hover table-striped">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>UserName</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              isLoading ?
                users.map((user, index) => {
                  return <tr className='bg-light' key={ index }>
                    <td>{ user.name }</td>
                    <td>{ user.email }</td>
                    <td>{ user.age }</td>
                    <td>{ user.userName }</td>
                    <td>
                      <button className='btn btn-outline-primary mx-1 my-1' data-bs-toggle="modal" data-bs-target="#edit" onClick={ () => handleEdit(user) }>Edit</button>
                      <button className='btn btn-outline-danger mx-1 my-1' data-bs-toggle="modal" data-bs-target="#delete" onClick={ () => setDeleteUser(user) }>Delete</button>
                    </td>
                  </tr>
                })
                : <Oval
                  ariaLabel="loading-indicator"
                  height={ 100 }
                  width={ 100 }
                  strokeWidth={ 5 }
                  color="red"
                  secondaryColor="yellow"
                />
            }
          </tbody>
        </table>
      </div>
      {/* : <h1 className="text-center bg-light">Users Table Empty</h1> } */ }
    </div>
  )
}

export default AllUsers