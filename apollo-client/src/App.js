import logo from "./logo.svg";
import "./App.css";
import { useQuery, gql } from "@apollo/client";

function App() {
  const get_film_details = gql`
    query Query {
      allFilms {
        films {
          title
          director
        }
      }
    }
  `;

  const DisplayFilms = () => {
    const { loading, error, data } = useQuery(get_film_details);
    if (loading) return <p>Loading....</p>;
    if (error) return <p>Error</p>;
    return data.allFilms.films.map(({ title, director }) => (
      <div>
        <div className="main-container">
          <div className="card-container">
            <h1>{title}</h1>
            <h2>{director}</h2>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="App">
      <h1>Films</h1>

      <DisplayFilms />
    </div>
  );
}

export default App;
