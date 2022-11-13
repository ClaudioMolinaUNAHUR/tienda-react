import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [data, setData] = useState([]); //datos almacenados luego de hacer fetch
    const [error,setError] = useState('');//string mensaje error
    const [loading, setLoading] = useState(false);//cuando activa el fetch loading true, al terminar loading false

    useEffect(()=>{
      setLoading(true)
      fetch(url)
          .then(res => res.json())
          .then(data => setData(data))
          .catch(error => setError('Error de servidor'))
          .finally(() => setLoading(false)) 
    },[url])
    
    return {data, error, loading};
}
