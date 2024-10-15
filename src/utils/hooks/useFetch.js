import { useState, useEffect } from 'react'

export function useFetch(url, method = 'GET', body = {}) {

    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        if (!url) return

        async function fetchData() {
            const response = method === 'GET' ? await fetch(url) : fetch(url,{
                method: method,
                headers: {'Content-Type':'application/json'},
                body: body
            });
            const data = await response.json()

            setData(data)
            setLoading(false)
        }

        setLoading(true)
        fetchData()
    }, [url])
    return { isLoading, data }
}