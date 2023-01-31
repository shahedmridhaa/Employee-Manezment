import React, { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../employeeSlice';


const formReducer = (state, event) => {
    return {
      ...state,
      [event.target.name]: event.target.value,
    }
  }
  

const Form = () => {

    const dispatch = useDispatch()
    const [formData, setFormData] = useReducer(formReducer, {})
  
    const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(addEmployee(formData))
    }
    

    return (
        <div>
        <div className="py-10">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-10 py-2">
          <input
            className="w-80 focus:outline-none py-1 px-3 rounded-md"
            name="name"
            type="text"
            onChange={setFormData}
            placeholder=" Name"
          />
          <input
            className="w-80 focus:outline-none py-1 px-3 rounded-md"
            name="email"
            type="email"
            onChange={setFormData}
            placeholder="Email"
          />
        </div>
        <div className="flex gap-10 py-2">
          <input
            className="w-80 focus:outline-none py-1 px-3 rounded-md"
            name="salary"
            type="number"
            onChange={setFormData}
            placeholder="Sellary"
          />
          <input
            className="w-80 focus:outline-none py-1 px-3 rounded-md"
            name="join"
            type="date"
            onChange={setFormData}
          />
        </div>
        <div className="flex gap-10 py-2">
          <div className="form-check">
            <div className="flex">
              <div>
                <label className="pr-2">Active</label>
                <input
                  type="radio"
                  name="status"
                  value="Active"
                  onChange={setFormData}
                  className="radio radio-secondary"
                />
              </div>
              <div>
                <label className="pr-2 ml-5">InActive</label>
                <input
                  type="radio"
                  value="InActive"
                  name="status"
                  onChange={setFormData}
                  className="radio radio-secondary"
                />
              </div>
            </div>
          </div>
        </div>
        <button
          className="bg-green-700 px-3 py-1 rounded-md mt-3 hover:bg-green-900"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
        </div>
    );
};

export default Form;