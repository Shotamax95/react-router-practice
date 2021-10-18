import { useParams, useLocation } from "react-router";

export const UrlParameter = () => {
    const { id } = useParams();
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    console.log(query);
    return(
        <div>
            <h1>URL Parameter Page</h1>
            <p>Parameter is: {id}</p>
            <p>Query Parameter is: {query.get("name")}</p>
        </div>
    );
};