import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { addUserAPI } from '../MyApiServices/MyApiServices'
import { ErrorMessage} from '@hookform/error-message'
function User() {
    const gender = ['male', 'female', 'transgender']
    const languages = ["Marathi","Hindi","English"]
    const course = ["Python", "React", "Java", "JavaScript", "c", "c++"]
    const navigate = useNavigate()
    const {register,reset,formState:{errors},handleSubmit}= useForm();
    const addUserData = async (userData) =>{
      await addUserAPI(userData)
      navigate('/display')
    }
    return (
        <>
          <div className='container' style={{"width":"60%"}}>
            <h3 className='text-info'>User Registration</h3>
            <form onSubmit={handleSubmit(addUserData)}>
              <div className="form-group">
                <label>FirstName</label>
                <input type="text" className="form-control" id="exampleFirstName" {...register('fname',
                {required:
                {value:true,
                message:"this field is required"},
                pattern:{
                  value:/^[a-zA-Z]+$/,
                  message:'Only Alphabets allowed in first name'                }
                })} aria-describedby="FirstNameHelp" placeholder="Enter FirstName"/>
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
                  })} aria-describedby="LastNameHelp" placeholder="Enter LastName"/>
                  <p className='text-danger'><strong><ErrorMessage  errors={errors} name='lname'/></strong></p>
              </div>
              <div className='form-group'>
                <label className="form-check-label">Gender</label>
                {gender.map(g=>{
                  return(
                    <div className="form-check mt-3">
                      <label>
                      <input type="radio" className="form-check-input" name='gender' id="exampleInputGender" {...register('gender',{required:"please select gender"})} value={g} aria-describedby="LastNameHelp" placeholder="Enter LastName"/>{g}</label>
                    </div>
                )})}
                <p className='text-danger'><strong><ErrorMessage  errors={errors} name='gender'/></strong></p>
              </div>
              <div className="form-group">
                <label className="form-check-label">Languages</label>
                {languages.map(language=>{
                  return(
                    <div className='form-check'>
                      <input type="checkbox" name='languages' value={language} className="form-check-input" {...register('languages', {required:"Please select language"})} id="exampleInputLanguages" />
                      <label>{language}</label>
                    </div>
                )})}
                <p className='text-danger'><strong><ErrorMessage  errors={errors} name='languages'/></strong></p>
              </div>
              
              <div className="form-group">
                <label className='form-check-label'>Course</label>
                <select name='programming' className='form-select' {...register('course',{required:'Select One Course'})}>
                    <option selected value=''>Select One Course</option>
                    {course.map(p=>{
                      return(
                        <option value={p}>{p}</option>
                      )
                    })

                    }
                </select>
                <p className='text-danger'><strong><ErrorMessage  errors={errors} name='course'/></strong></p>
                
              </div>
              <button type="submit" className="btn btn-success">Add User</button>
              <button type="button" className="btn btn-danger float-end" onClick={() => reset()}>Reset</button>
            </form>
          </div>
        </>
      )
}

export default User;