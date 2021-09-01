import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (categoria) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  });

  useEffect( () => {
    getGifs(categoria)
      .then(imgs => {
        setTimeout( () => {
          setState({
            data: imgs,
            loading: false
          });
        },3000)
        
      })
  }, [categoria]);//Solo se llama una vez al dejarlo vacio, al inicio del componente

  return state; //data: [], loading: false

}
