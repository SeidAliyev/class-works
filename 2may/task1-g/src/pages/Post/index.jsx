import React from "react";
import { useRef,useState } from "react";
import { postData } from "../../services/requests";
import { v4 as uuidv4 } from 'uuid';


const Post = ({state,dispatch}) => {
  let image = useRef();
  let title = useRef();
  let price = useRef();
  let category = useRef();
  let rate = useRef();
  let count = useRef();

const [data, setdata] = useState();

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
              Image
            </label>
            <input
              ref={image}
              onSubmit={(e)=>e.target.value=""}
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
  );
};

export default Post;
