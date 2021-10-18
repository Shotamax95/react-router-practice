import { Link } from "react-router-dom"

export const Page2 = () => {
    return(
        <div>
            <h1>Page2</h1>
            <Link to="/page2/999">URL Parameter Page</Link>
            <br />
            <Link to="/page2/999?name=hohohoho">Query Parameter Page</Link>
        </div>
    );
};