import Header from "./components/Header"
import MyFirstComponent from "./components/MyFirstComponent"
import Footer from "./components/Footer"
import User from "./components/User"
import MovieList from "./components/MovieList"


function App() {
  return (
    <>
      <Header message="hello world" />

      <User userName="Alice" age={30} />
      <User userName="Bob" age={40} />
      <User userName="Charlie" age={50} />

      <MovieList />

      <Footer>
        <p>Crack it Squad, 2026</p>
      </Footer>
    </>
  )
}

export default App
