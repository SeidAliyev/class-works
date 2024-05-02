import React from "react";
import { useRef } from "react";
import { postData } from "../../services/requests";
import { v4 as uuidv4 } from 'uuid';


const Post = ({state,dispatch}) => {
  let companyN = useRef();
  let contactN = useRef();
  let cityN = useRef();
  let regionN = useRef();

function Ok (e) {
  e.preventDefault()
  let obj = {
    id:uuidv4(),
    companyName:companyN.current.value,
    contactName:contactN.current.value,
    address:{city:cityN.current.value,
      region:regionN.current.value}
  }
  postData(obj)
}


  return (
    <div className="flex items-center justify-center p-12">
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
              Company Name
            </label>
            <input
              ref={companyN}
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
              Contact Name
            </label>
            <input
              ref={contactN}
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
              City
            </label>
            <input
              ref={cityN}
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
              Region
            </label>
            <input
              ref={regionN}
              type="text"
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
  );
};

export default Post;
