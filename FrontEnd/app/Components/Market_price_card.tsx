import React from 'react'

type Info = {
    slno: string,
    crop: string,
    location: string,
    price: string,
    unit: string
}
const Market_price_card: React.FC<Info> = ({ slno, crop, location, price, unit }) => {
  return (
    <div className='w-full p-2 shadow-md rounded-2xl'>
      <ul className='flex justify-around items-center'>
        <li className='w-1/5 text-center'>{slno}</li>
        <li className='w-1/5 text-center'>{crop}</li>
        <li className='w-1/5 text-center'>{location}</li>
        <li className='w-1/5 text-center'>{price}</li>
        <li className='w-1/5 text-center'>{unit}</li>
      </ul>
    </div>
  )
}

export default Market_price_card
