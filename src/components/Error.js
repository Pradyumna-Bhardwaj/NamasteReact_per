import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();
    console.log(err)
    return (
        <div>
            <h1>Oops!!!</h1>
            <h2>Something went wrong!!</h2>
            <br></br>
            <h3>{err.status} : {err.statusText} ({err.data})</h3>
        </div>
    );
};

export default Error;