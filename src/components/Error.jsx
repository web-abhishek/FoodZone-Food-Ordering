import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <div className="max-w-7xl mx-auto px-4 flex justify-between">
            <h1>{err.status} : {err.statusText}</h1>
            <h2>Opps !!</h2>
            <h3>Something went wrong !!</h3>
        </div>
    )
}

export default Error;