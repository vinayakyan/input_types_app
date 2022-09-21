import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { allUsers, deleteUserAPI } from '../MyApiServices/MyApiServices'

function Display() {
    const [users,setUsers] = useState([])
    const [flag, setFlag] = useState(true);
    useEffect(()=>{
        getAllUsers()
    },[flag])
    const getAllUsers = async () =>{
        const data = await allUsers()
        setUsers(data.data)
    }
    const deleteUser = async (id) =>{
        await deleteUserAPI(id)
        setFlag(!flag)
    }
  return (
    <>
        <div className='container'>
            {users?(
                <>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">FirstName</th>
                                <th scope="col">LastName</th>
                                <th scope="col">Gender</th>
                                <th scope='col'>Languages Known</th>
                                <th scope='col'>Course</th>
                                <th scope='col'>UPDATE</th>
                                <th scope='col'>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            { users.map(user=>{
                                return(
                            <tr>
                                <th scope="row">{user.id}</th>
                                <td>{user.fname}</td>
                                <td>{user.lname}</td>
                                <td>{user.gender}</td>
                                <td>{user.languages.map(l=>{
                                    return(
                                        <p>{l}</p>
                                    )
                                })}</td>
                                <td>{user.course}</td>
                                <td><NavLink to={`/edit/${user.id}`}><i class="bi bi-pencil-square"></i></NavLink></td>
                                <td><i class="bi bi-trash2-fill" onClick={()=>{deleteUser(user.id)}}></i></td>
                            </tr>
                            )})}
                        </tbody>
                    </table>
                </>
            ):(
                <>
                    <h3 className='text-danger'>Data doesn't exists</h3>
                </>
            )

            }

        </div>
    </>
  )
}

export default Display;