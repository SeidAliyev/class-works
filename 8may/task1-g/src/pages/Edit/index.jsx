import React, { useEffect, useState } from 'react'
import { getDataById,patchById } from '../../services/requests'
import { useParams } from 'react-router-dom'

const EditProduct = ({state,dispatch}) => {
  const { id } = useParams()

  const [editData, setEditData] = useState({
    image: '',
    title: '',
    price: '',
    category: '',
    rating: {
    rate: '',
    count: ''
  }
});

  useEffect(() => {
  getDataById("/products/",id).then((product)=>setEditData(product))
  // console.log(editData.title);  
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    patchById("/products/", id, editData)
    dispatch({
      type:"SetProducts",
      products:state.products.map((product) =>
        product.id === id ? editData : product
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
              Image
            </label>
            <input
              // ref={image}
              value={editData.image}
                onChange={handleInputChange}
              type="text"
              name="image"
                id="image"
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
              // ref={title}
              value={editData.title}
                onChange={handleInputChange}
              type="text"
              name="title"
                id="title"
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
              // ref={price}
              value={editData.price}
                onChange={handleInputChange}
              type="number"
              name="price"
              id="price"
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
              // ref={category}
              value={editData.category}
                onChange={handleInputChange}
              type="text"
              name="category"
              id="category"
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
              // ref={rate}
              value={editData.rating.rate}
                onChange={handleInputChange}
              type="number"
              name="rate"
              id="rate"
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
              // ref={count}
              value={editData.rating.count}
                onChange={handleInputChange}
              type="number"
              name="count"
              id="count"
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
</>
  )
}

export default EditProduct