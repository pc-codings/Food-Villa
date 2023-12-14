import { useRouteError } from "react-router-dom";
import error from "/404Error.jpg"

const Error = ()=>{
    const Err = useRouteError()
    return(
        <div className="error-page">
            <img src={error}/>
            <h1>Oops...</h1>
            <h2>Something Went wrong but from your side</h2>
            <h2>{Err.status+":"+Err.statusText}</h2>
        </div>
    )

}

export default Error;