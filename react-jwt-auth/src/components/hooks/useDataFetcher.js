import UserService from "../../service/UserService";
import {useEffect, useState} from "react";

const useDataFetcher = (apiUrl) => {
    const [data, setData] = useState();
    const[isLoading, setIsLoading] = useState(true);
    const[isError, setIsError] = useState(false);
    const[error, setError] = useState();
    const [url, setUrl] = useState(apiUrl);

    useEffect( ()=> {
        const fetchData =  async () => {
            const {data, error}=await UserService.getData(apiUrl);
            console.log('---data---',data);
            if (data){
             setData(data);
             setIsLoading(false);
             setIsError(false);
            }
            if (error){
                setIsLoading(false);
                setIsError(true);
                setError(error);
            }
        }
        fetchData();

    },[apiUrl])

    return [{data, isLoading, isError,error},setUrl ]
}

export default useDataFetcher;

