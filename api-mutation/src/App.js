import logo from "./logo.svg";
import "./App.css";
import { useQuery, gql, useMutation } from "@apollo/client";
import { useState } from "react";

function App() {
  const get_api_details = gql`
    query Query($options: PageQueryOptions) {
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

  const add_api_details = gql`
   mutation (
  $input: CreatePostInput!
) {
  createPost(input: $input) {
    id
    title
    body
  }
}
  `;

  const Add = () => {
    const [createPost] = useMutation(add_api_details);
    const [t , tSet] = useState();

    let id, title;

    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createPost({
              variables: {
                input: {
                  title: t.value,
                  body: "Some interesting content.",
                },
              },
            });
          }}
        >
          {/* <input ref={(value) => (id = value)} id="id"></input> */}
          <input ref={(value)=>tSet(value)} id="title"></input>
          <button type="submit">Add Post</button>
        </form>
      </div>
    );
  };

  const Show = () => {
    const { loading, error, data } = useQuery(get_api_details);
    if (loading) return <p>Loading....</p>;
    if (error) return <p>Error</p>;
    return data.posts.data.map(({ id, title }) => (
      <div>
        <div className="main-container">
          <div className="card-container">
            <h1>{id}</h1>
            <h2>{title}</h2>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="App">
      <Add />
      <Show />
    </div>
  );
}

export default App;
