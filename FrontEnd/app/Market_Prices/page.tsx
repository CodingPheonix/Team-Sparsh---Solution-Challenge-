// 'use client'
// import React, { useState } from 'react'
// import market_prices from '../json/market_prices.json'
// import Market_price_card from '../Components/Market_price_card'
// import News_card from '../Components/News_card'
// import news_data from '../json/news.json'

// const page: React.FC = () => {

//     const [initdata, setInitdata] = useState({
//         slno: 'Sl.no.',
//         crop: 'Crop',
//         location: 'Location',
//         price: 'Price',
//         unit: 'Unit'
//     })

//     return (
//         <div className='flex'>
//             <div className='w-3/4'>
//                 <h1 className='font-bold text-3xl m-3 '>Market Price Indexes</h1>
//                 <div className='w-[90%]'>
//                     <Market_price_card {...initdata} />
//                 </div>
//                 <div className='w-[90%] grid place-items-center h-[calc(100vh-10.5rem)] overflow-scroll'>
//                     {market_prices && (
//                         market_prices.map((data, index) => {
//                             return (
//                                 <Market_price_card key={index} slno={`${index}`} crop={data.crop} location={data.location} price={data.marketPrice} unit={data.unit} />
//                             )
//                         })
//                     )}
//                 </div>
//             </div>
//             <div className='w-1/4'>
//             <h1 className='font-bold text-3xl m-3 '>News</h1>
//                 <div className='w-[90%] grid place-items-center h-[calc(100vh-10.5rem)] overflow-scroll'>
//                     {news_data && (
//                         news_data.map((data, index) => {
//                             return (
//                                 <News_card key={index} headline={data.headline} location={data.location} publishedDate={data.publishedDate} source={data.source} content={data.content} />
//                             )
//                         })
//                     )}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default page




'use client';
import React, { useState } from 'react';
import market_prices from '../json/market_prices.json';
import Market_price_card from '../Components/Market_price_card';
import News_card from '../Components/News_card';
import news_data from '../json/news.json';

const Page: React.FC = () => {
  const [initdata, setInitdata] = useState({
    slno: 'Sl.no.',
    crop: 'Crop',
    location: 'Location',
    price: 'Price',
    unit: 'Unit',
  });

  return (
    <div className='flex flex-col md:flex-row bg-green-100 p-2 md:p-5'>
      {/* Market Data Section */}
      <div className='md:w-3/4 w-full bg-white p-4 rounded-lg shadow-lg'>
        <h1 className='font-bold text-3xl text-green-700 m-3'>Market Price Indexes</h1>
        <div className='w-full'>
          <Market_price_card {...initdata} />
        </div>
        <div className='w-full grid place-items-center h-[calc(100vh-13rem)] overflow-scroll'>
          {market_prices.map((data, index) => (
            <Market_price_card
              key={index}
              slno={`${index}`}
              crop={data.crop}
              location={data.location}
              price={data.marketPrice}
              unit={data.unit}
            />
          ))}
        </div>
      </div>

      {/* News Section */}
      <div className='md:w-1/4 w-full bg-white p-4 rounded-lg shadow-lg mt-5 md:mt-0'>
        <h1 className='font-bold text-3xl text-green-700 m-3'>News</h1>
        <div className='w-full grid place-items-center h-[calc(100vh-13rem)] overflow-scroll'>
          {news_data.map((data, index) => (
            <News_card
              key={index}
              headline={data.headline}
              location={data.location}
              publishedDate={data.publishedDate}
              source={data.source}
              content={data.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
