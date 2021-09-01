import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({categoria}) => {

  const {data:imagenes, loading} = useFetchGifs(categoria)

  return (
    <>
      <h3>{categoria}</h3>

      { loading && <p>Loading</p> }
      <div>
        {
          imagenes.map( img => (
            <GifGridItem
              key={img.id}
              {...img}
            />
          ))
        }
      </div>
    </>
  )
}
