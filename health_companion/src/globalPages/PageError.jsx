import { useSearchParams } from "react-router-dom"

function PageError() {
    document.title = "Page not found"
    let { error } = useSearchParams();
    return (
        <div align="center" >
            <h1>Oops! Seem you have an error!</h1>
            {error ? <h2>Error: {error}</h2> : null}
        </div>
    )
}

export default PageError