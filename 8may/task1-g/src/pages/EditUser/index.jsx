import React, { useEffect, useState } from 'react'
import { getDataById,patchById } from '../../services/requests'
import { useParams } from 'react-router-dom'


const EditUser = ({state,dispatch}) => {
  const { id } = useParams()

  const [editData, setEditData] = useState({
    userName: '',
    name: '',
    surname: '',
    gender: '',
    genderFe:'',
    password: '',
    email: '',
    isAdmin: ''

  
});

useEffect(() => {
  getDataById("/users/", id)
    .then((user) => {
      user.isAdmin = user.isAdmin === "true" ? true : false;
      setEditData(user);
    });
}, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    patchById("/users/", id, editData)
    dispatch({
      type:"SetUser",
      user:state.user.map((user) =>
        user.id === id ? editData : user
      )
    })

  };

  return (
    <>
    <h1>Edit</h1>

    <div  className="productPost flex items-center justify-center p-10">
      <div className="mx-auto w-full max-w-[550px]">
        <form
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              User Name
            </label>
            <input
              // ref={image}
              value={editData.userName}
                onChange={handleInputChange}
              type="text"
              name="userName"
                id="userName"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Name
            </label>
            <input
              // ref={title}
              value={editData.name}
                onChange={handleInputChange}
              type="text"
              name="name"
                id="name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="subject"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Surname
            </label>
            <input
              // ref={price}
              value={editData.surname}
                onChange={handleInputChange}
              type="text"
              name="surname"
              id="surname"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
  <label htmlFor="messages" className="mb-3 block text-base font-medium text-[#07074D]">
    Gender
  </label>
  <label className="inline-flex items-center">
  <input
  onChange={handleInputChange}
  type="radio"
  className="form-radio h-5 w-5 text-[#6A64F1]"
  name="gender"
  value="male"
  checked={editData.gender === "male"}
/>
<span className="ml-2">Male</span>

<input
  onChange={handleInputChange}
  type="radio"
  className="form-radio h-5 w-5 text-[#6A64F1]"
  name="gender"
  value="female"
  checked={editData.gender === "female"}
/>
<span className="ml-2">Female</span>
  </label>
</div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Password
            </label>
            <input
              // ref={category}
              value={editData.password}
                onChange={handleInputChange}
              type="text"
              name="password"
              id="password"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
              <label htmlFor="messages" className="mb-3 block text-base font-medium text-[#07074D]">
                Is admin
              </label>
              <label className="inline-flex items-center">
                <input
                  onChange={handleInputChange}
                  type="radio"
                  className="form-radio h-5 w-5 text-[#6A64F1]"
                  name="isAdmin"
                  value="true"
                  checked={editData.isAdmin === true}
                />
                <span className="ml-2">True</span>
              </label>

              <label className="inline-flex items-center ml-6">
                <input
                  onChange={handleInputChange}
                  type="radio"
                  className="form-radio h-5 w-5 text-[#6A64F1]"
                  name="isAdmin"
                  value="false"
                  checked={editData.isAdmin === false}
                />
                <span className="ml-2">False</span>
              </label>
            </div>

          
          <div className="mb-5"></div>
          <div>
            <button
              type="submit"
              className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
</>
  )
}

export default EditUser