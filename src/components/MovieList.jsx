import moviesArr from "../data/movies.json"


function MovieList() {
    return (
        <>
            <h1>List of movies:</h1>

            {moviesArr.map(function (movieObj, i, arr) {
                return (
                    <section key={movieObj.id}>
                        <h2>{movieObj.title}</h2>
                        <h3>{movieObj.year}</h3>
                    </section>
                )
            })}
        </>
    )
}

export default MovieList