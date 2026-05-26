import moviesArr from "../data/movies.json"


function MovieList() {

    let title;
    if (moviesArr.length) {
        title = <h1>List of movies:</h1>
    } else {
        title = <h1>Sorry, no movies to display</h1>
    }

    return (
        <>
            {title}

            {moviesArr.map(function (movieObj, i, arr) {
                return (
                    <section key={movieObj.id}>
                        <h2>{movieObj.title}</h2>
                        <h3>{movieObj.year}</h3>

                        {movieObj.rating > 7 && <p className="badge" >RECOMMENDED</p>}

                        {movieObj.imgURL
                            ? <img src={movieObj.imgURL} alt="image poster" />
                            : <img src="https://dummyimage.com/182x268/ffffff/000000" alt="image poster" />
                        }

                    </section>
                )
            })}
        </>
    )
}

export default MovieList