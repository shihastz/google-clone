import {useState, useEffect} from 'react'
import API_KEY from './keys';

const CONTEXT_KEY = "51a9e3defee29b00a";
//const API_KEY = "AIzaSyCJ0iY4bmyxF5-kO8uFbiSVW5a6P2VNXHM";

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
        }
        fetchData();
    }, [term])

    return { data }
}

export default useGoogleSearch
