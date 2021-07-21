import {useEffect, useState} from "react";
import axios from "axios";

const useDataFetcher = (apiUrl) => {
    const [data, setData] = useState();
    const[isLoading, setIsLoading] = useState(true);
    const[isError, setIsError] = useState(false);
    const [url, setUrl] = useState(apiUrl);

    useEffect( ()=> {
        const fetchData =  async () => {
            try{
                const {data} = await axios.get(apiUrl);
                console.log('--data---', data);
                setData(data);
                setIsLoading(false);
            }catch (e) {
                setIsError(true);
                setIsLoading(false);
            }

        }
        fetchData();

    },[url])

    return [{data, isLoading, isError},setUrl ]


}
export default useDataFetcher;