import React, { useReducer } from 'react';


const formReducer = (state, event) => {
    return {
      ...state,
      [event.target.name]: event.target.value,
    }
  }

const Modal = ({userInfo, setUserInfo}) => {

    const [formData, setFormData] = useReducer(formReducer, {})
    const handleSubmit = (e) => {
      e.preventDefault()   
      console.log(formData);
    }

    return (
        <div>
{/* Put this part before </body> tag */}
<input type="checkbox" id="modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <div className="py-10">
      <form onSubmit={handleSubmit}>
        
          <input
            className="w-full focus:outline-none py-1 my-2 px-3 rounded-md"
            name="name"
            type="text"
            onChange={setFormData}
            placeholder={`${userInfo?.name}`}
          />
          <input
            className="w-full focus:outline-none py-1 px-3 rounded-md my-2"
            name="email"
            type="email"
            onChange={setFormData} 
            readOnly
            defaultValue={`${userInfo?.email}`}
          />
          <input
            className="w-full focus:outline-none py-1 px-3 rounded-md my-2"
            name="salary"
            type="number"
            onChange={setFormData}
            defaultValue={`${userInfo?.salary}`}
          />
          <input
            className="w-full focus:outline-none py-1 px-3 rounded-md my-2"
            name="join"
            type="date"
            defaultValue={`${userInfo?.join}`}
            onChange={setFormData}
          />
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
          className="bg-yellow-700 px-3 py-1 rounded-md mt-3 hover:bg-yellow-800"
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  </div>
</div>
   </div>
    );
};

export default Modal;