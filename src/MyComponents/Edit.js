import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { ErrorMessage } from '@hookform/error-message'
import { getUserAPI, updateUserAPI } from '../MyApiServices/MyApiServices'
function Edit() {
  const {register,setValue,handleSubmit,formState:{errors},reset} = useForm()
  const [user,setUser] = useState({})
  const navigate = useNavigate()
  const { id } = useParams('id')
  const gender = ['male', 'female', 'transgender']
    const languages = ["Marathi","Hindi","English"]
    const course = ["Python", "React", "Java", "JavaScript", "c", "c++"]
  const getUserForEdit = async () =>{
    const data = await getUserAPI(id)
    setUser(data.data)
  }
  useEffect(()=>{
    getUserForEdit()
  },[])
  const updateUser = async (userData) =>{
    await updateUserAPI(userData)
    navigate('/display')
  }
  return (
    <>
      <div className='container' style={{"width":"60%"}}>
        <h3 className='text-info'>User Update</h3>
        <form onSubmit={handleSubmit(updateUser)}>
          <div className="form-group">
            <input type='hidden' {...register('id')} {...setValue('id', user.id)}/>
            <label>FirstName</label>
            <input type="text" className="form-control" id="exampleFirstName" {...register('fname',
            {required:
            {value:true,
            message:"this field is required"},
            pattern:{
              value:/^[a-zA-Z]+$/,
              message:'Only Alphabets allowed in first name'                }
            })} {...setValue('fname', user.fname)} aria-describedby="FirstNameHelp" placeholder="Enter FirstName"/>
            <p className='text-danger'><strong><ErrorMessage  errors={errors} name='fname'/></strong></p>
          </div>
          <div className="form-group">
            <label>LastName</label>
            <input type="text" className="form-control" id="exampleInputLastName" {...register('lname', {required:
              {value:true,
              message:"this field is required"
              },
              pattern:{
                value:/^[a-zA-Z]+$/,
                message:"Only Alphabets are allowed in last name"
              }
              })} {...setValue('lname', user.lname)} aria-describedby="LastNameHelp" placeholder="Enter LastName"/>
              <p className='text-danger'><strong><ErrorMessage  errors={errors} name='lname'/></strong></p>
          </div>
          <div className='form-group'>
            <label className="form-check-label">Gender</label>
            {gender.map(g=>{
              return(
                <div className="form-check mt-3">
                  <label>
                  <input type="radio" className="form-check-input" name='gender' id="exampleInputGender" {...register('gender',{required:"please select gender"})} value={g} {...setValue('gender', user.gender)} aria-describedby="LastNameHelp" placeholder="Enter LastName"/>{g}</label>
                </div>
            )})}
            <p className='text-danger'><strong><ErrorMessage  errors={errors} name='gender'/></strong></p>
          </div>
          <div className="form-group">
            <label className="form-check-label">Languages</label>
            {languages.map(language=>{
              return(
                <div className='form-check'>
                  <input type="checkbox" name='languages' value={language} className="form-check-input" {...register('languages', {required:"Please select language"})} {...setValue('languages', user.languages)} id="exampleInputLanguages" />
                  <label>{language}</label>
                </div>
            )})}
            <p className='text-danger'><strong><ErrorMessage  errors={errors} name='languages'/></strong></p>
          </div>
          
          <div className="form-group">
            <label className='form-check-label'>Course</label>
            <select name='programming' className='form-select' {...register('course',{required:'Select One Course'})}>
                <option selected value='' {...setValue('course', user.course)}>Select One Course</option>
                {course.map(p=>{
                  return(
                    <option value={p}>{p}</option>
                  )
                })

                }
            </select>
            <p className='text-danger'><strong><ErrorMessage  errors={errors} name='course'/></strong></p>
            
          </div>
          <button type="submit" className="btn btn-success">Update User</button>
          <button type="button" className="btn btn-warning float-end" ><NavLink to='/display' style={{textDecoration:'none'}}>Go Back</NavLink></button>
        </form>
      </div>
    </>
  )
}

export default Edit;