import React from "react";
import { useRef } from "react";
import { postData, } from "../../services/requests";
import { v4 as uuidv4 } from 'uuid';


const Post = ({state,dispatch}) => {
  let image = useRef();
  let title = useRef();
  let price = useRef();
  let category = useRef();
  let rate = useRef();
  let count = useRef();

  let selectPrd = useRef()
  let selectUsr = useRef()

  let userName = useRef()
  let name = useRef()
  let surname = useRef()
  let gender = useRef()
  let genderFe = useRef()
  let password = useRef()
  let email = useRef()
  let isAdmin =useRef()
  let isAdminFalse =useRef()



function Ok (e) {
  e.preventDefault()
  let obj = {
    id:uuidv4(),
    image:image.current.value,
    title:title.current.value,
    price:price.current.value,
    category:category.current.value,
    rating:{rate:rate.current.value,
      count:count.current.value}
    }
  postData("/products/",obj)
  dispatch({
    type:"SetProducts",
    products:[...state.products, obj]
  })
  
  image.current.value=""
  title.current.value=""
  price.current.value=""
  category.current.value=""
  rate.current.value=""
  count.current.value=""
}


function userPost (e) {
  e.preventDefault()
  let obj = {
    id: uuidv4(),
    userName: userName.current.value,
    name: name.current.value,
    surname: surname.current.value,
    gender: gender.current.checked ? "male" : "female",
    // genderFe: genderFe.current.value,
    password: password.current.value,
    email: email.current.value,
    isAdmin: isAdmin.current.checked,
    createdAt: new Date().toLocaleString()
      }
    
  postData("/users/",obj)
  dispatch({
    type:"SetUser",
    user:[...state.user, obj]
  })
  
    userName.current.value= "",
    name.current.value= "",
    surname.current.value= "",
    gender.current.checked = true;
    password.current.value= "",
    email.current.value= ""
    isAdmin.current.checked = true;
    isAdminFalse.current.checked = false;

}

  return (
    <>
   <main className="grid mt-6 w-full place-items-center">
  <div className="grid w-[20rem] grid-cols-2 gap-2 rounded-xl bg-gray-200 p-2">
    <div>
      <input
      onChange={()=>{selectPrd.current.style.display = "block",selectUsr.current.style.display = "none"}}
        type="radio"
        name="option"
        id={1}
        defaultValue={1}
        className="peer hidden"
        defaultChecked="t"
      />
      <label
        htmlFor={1}
        className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
      >
        Product
      </label>
    </div>
    
    <div>
      <input
      onChange={()=>{selectPrd.current.style.display = "none",selectUsr.current.style.setProperty("display", "block", "important")}}
        type="radio"
        name="option"
        id={4}
        defaultValue={3}
        className="peer hidden"
      />
      <label
        htmlFor={4}
        className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
      >
        User
      </label>
    </div>
  </div>
</main>

  {/* Post area start */}

    <div ref={selectPrd} className="productPost flex items-center justify-center p-10">
      <div className="mx-auto w-full max-w-[550px]">
        <form
          method="POST"
          onSubmit={Ok}
        >
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Image
            </label>
            <input
              ref={image}
              type="text"
              name="name"
              id="name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Title
            </label>
            <input
              ref={title}
              type="text"
              name="email"
              id="email"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="subject"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Price
            </label>
            <input
              ref={price}
              type="number"
              name="subject"
              id="subject"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Category
            </label>
            <input
              ref={category}
              type="text"
              name="subject"
              id="subject"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Rate
            </label>
            <input
              ref={rate}
              type="number"
              name="subject"
              id="subject"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Count
            </label>
            <input
              ref={count}
              type="number"
              name="subject"
              id="subject"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
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

      {/* USER POST */}

    <div ref={selectUsr} className="userPost flex items-center justify-center p-10">
      <div className="mx-auto w-full max-w-[550px]">
        <form
          method="POST"
          onSubmit={userPost}
        >
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              User Name
            </label>
            <input
              ref={userName}
              type="text"
              name="name"
              id="name"
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
              ref={name}
              type="text"
              name="email"
              id="email"
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
              ref={surname}
              type="text"
              name="subject"
              id="subject"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
  <label htmlFor="messages" className="mb-3 block text-base font-medium text-[#07074D]">
    Gender
  </label>
  <label className="inline-flex items-center">
    <input
      ref={gender} 
      type="radio"
      className="form-radio h-5 w-5 text-[#6A64F1]"
      name="gender"
      value="male"
    />
    <span className="ml-2">Male</span>
  </label>
  <label className="inline-flex items-center ml-6">
    <input
      ref={genderFe}
      type="radio"
      className="form-radio h-5 w-5 text-[#6A64F1]"
      name="gender"
      value="female"
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
              ref={password}
              type="password"
              name="subject"
              id="subject"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Email
            </label>
            <input
              ref={email}
              type="email"
              name="subject"
              id="subject"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
  <label htmlFor="message" className="mb-3 block text-base font-medium text-[#07074D]">
    Is Admin
  </label>
  <label className="inline-flex items-center">
    <input
      ref={isAdmin} // true için ayrı bir ref
      type="radio"
      className="form-radio h-5 w-5 text-[#6A64F1]"
      name="isAdmin"
      value="true"
    />
    <span className="ml-2">True</span>
  </label>
  <label className="inline-flex items-center ml-6">
    <input
      ref={isAdminFalse} // false için ayrı bir ref
      type="radio"
      className="form-radio h-5 w-5 text-[#6A64F1]"
      name="isAdmin"
      value="false"
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
  );
}

export default Post;
