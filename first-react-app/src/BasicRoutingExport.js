
function Home() {
    console.log('Home page')
    return (
        <div>
            <h2>Home</h2>
            <p>This is home page.</p>
        </div>
    )
}
function About() {
    console.log('About page');
    return (
        <div>
            <h2>About</h2>
            <p>This is about page.</p>
        </div>
    )
}
function PageNotFound() {
    console.log('This page opens when we don\'t have any matching page');
    return (
        <>
            <h2>OOPs Page not found...</h2>
            <p> No page whith this url is present</p>
        </>
    )
}

export { Home, About, PageNotFound }