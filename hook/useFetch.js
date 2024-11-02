import {useState, useEffect} from "react";
import axios from "axios"

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/search`,
        headers: {
            'x-rapidapi-key': '73671c1ba4msh06f4ef6ace1764cp1b1bd1jsn5b2e2f12d2c0',
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        },
        params: {...query}
    }

    const fetchData = async () => {
        setIsLoading(true)

        try {
            const response = await axios.request(options)

            setData(response.data.data)
            setIsLoading(false)
        } catch (error) {
            setError(error);
            alert('There is an error')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {

        fetchData()

    }, []);

    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }

    return {data, isLoading, error, refetch}
}
export default useFetch