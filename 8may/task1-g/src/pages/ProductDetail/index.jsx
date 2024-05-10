import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDataById} from '../../services/requests'
import { useState } from 'react'


const ProductDetail = () => {
    const { id } = useParams()

    const [prdData, setPrdData] = useState([])

    useEffect(() => {
      getDataById("/products/", id)
      .then((data) => {
        setPrdData(data)
    }, [])})

  return (
        <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
            <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                <img className="w-full" alt="img of a girl posing" src={prdData.image} />
            </div>
            <div className="md:hidden">
                <img className="w-full" alt="img of a girl posing" src="https://i.ibb.co/QMdWfzX/component-image-one.png" />
                <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
                    <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/cYDrVGh/Rectangle-245.png" />
                    <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/f17NXrW/Rectangle-244.png" />
                    <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/cYDrVGh/Rectangle-245.png" />
                    <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/f17NXrW/Rectangle-244.png" />
                </div>
            </div>
            <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                <div className="border-b border-gray-200 pb-6">
                    <h1
                        className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
                    >
                        {prdData.title}
                    </h1>

                    <button
              type="submit"
              className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none my-4"
            >
              Add favorite
            </button>                  

                </div>
                <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                    <p className="text-base leading-4 text-gray-800">Category</p>
                    <div className="flex items-center justify-center">
                        <p className="text-sm leading-none text-gray-600 mx-2">{prdData.category}</p>
                        
                        <svg className="cursor-pointer" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L1 9" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                <button
                    className="
						focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
						text-base
						flex
						items-center
						justify-center
						leading-none
						text-white
						bg-gray-800
						w-full
						py-4
						hover:bg-gray-700
					"
                >
                    Add Basket
                </button>
                <div>
                    <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">{prdData.description}</p>
                    <p className="text-base leading-4 mt-7 text-gray-600">Product Code: {prdData.id}</p>
                    <p className="text-base leading-4 mt-4 text-gray-600">Length: 13.2 inches</p>
                    <p className="text-base leading-4 mt-4 text-gray-600">Height: 10 inches</p>
                    <p className="text-base leading-4 mt-4 text-gray-600">Depth: 5.1 inches</p>
                    <p className="md:w-96 text-base leading-normal text-gray-600 mt-4">Composition: 100% calf leather, inside: 100% lamb leather</p>
                </div>
            </div>
        </div>
    );
}


export default ProductDetail

