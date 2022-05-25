import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);


    return (
        <>
            <h3>{category}</h3>

            {
                !loading ?
                <div className='card-grid'>
                    {
                        images.map((item) => {
                            return <GifGridItem {...item} key={item.id}></GifGridItem>
                        })
                    }

                </div> : <p>loading...</p>
            }

        </>

    )
}
