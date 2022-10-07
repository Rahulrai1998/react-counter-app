import logo from './logo.svg';
import './App.css';
import {useQuery , gql} from "@apollo/client"



 

function App() {

  const get_api_details = gql`
  query Query(
    $options: PageQueryOptions
  ) {
    posts(options: $options) {
      data {
        id
        title
      }
      meta {
        totalCount
      }
    }
  }
  `;

  const Show = () =>{

    const{loading , error , data} = useQuery(get_api_details)
    if (loading) return <p>Loading....</p>;
    if (error) return <p>Error</p>;
    return data.posts.data.map(({ id,title }) => (
      <div>
        <div className="main-container">
          <div className="card-container">
            <h1>{id}</h1>
            <h2>{title}</h2>
          </div>
        </div>
      </div>
    ));

  }



  return (
    <div className="App">
      <Show/>
     
    </div>
  );
}

export default App;
