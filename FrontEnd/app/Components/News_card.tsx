import React from 'react'

type NewsInfo = {
    headline: string,
    location: string,
    publishedDate: string,
    source: string,
    content: string
}

const News_card: React.FC<NewsInfo> = ({ headline, location, publishedDate, source, content }) => {
    return (
        <div className='w-full flex flex-col justify-around items-start border rounded-2xl m-4 p-2'>
            <h3 className='font-semibold'>{headline}</h3>
            <p className='text-sm'>{content}</p>
            <div className='flex flex-row justify-between items-center w-full'>
                <p>{location}</p>
                <p>{publishedDate}</p>
            </div>
            <p className='text-sm text-slate-400'>Source: {source}</p>
        </div>
    )
}

export default News_card
