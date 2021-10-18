import { useLocation, useHistory } from "react-router-dom"

export const Page1DetailA = () => {
    const { state } = useLocation();
    console.log(state);

    // useHistory is used rather than Link.
    const history = useHistory();
    const onClickBack = () => history.goBack();

    return(
        <div>
            <h1>Page1 Detail A</h1>
            <button onClick={onClickBack}>Back</button>
        </div>
    );
};