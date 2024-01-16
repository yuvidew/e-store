import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data , setData] = useState([])
    const [error , setError] = useState()
    useEffect(() => {
        const controller = new AbortController()
        fetch(url , {signal : controller.signal})
        .then(res => res.json())
        .then(data => setData(data))
        .catch(setError)

        return () => controller.abort()

    } , [url])

    return [data]
}

export default useFetch