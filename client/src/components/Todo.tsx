import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { Add_Todo} from "../graphql/mutations";
import  {GET_TODOS} from "../graphql/query"

const Todo: React.FC = () => {
  const [title, setTitle] = useState("");

  const [tags, setTags] = useState("");
  const [completed, setCompleted] = useState(false);

  const [addTodo, { loading, error }] = useMutation(Add_Todo, {
    optimisticResponse: {
      createTodo: {
        id: uuid(),
        title: title,
        completed: completed,
        tags: tags.split(",").map((tag) => tag.trim()),
      },
    },
    update: (cache, { data: { createTodo } }) => {
      console.log("update function :", createTodo);
      const existingTodos = cache.readQuery({
        query: GET_TODOS
      });
      console.log("existingTodos :", existingTodos);

      cache.writeQuery({
        query: GET_TODOS,
        data: {
          getTodos: [createTodo]
        }
      })
      
    },
    onCompleted: (data) => {
      console.log("onCompleted function :", data.createTodo);
    },
    onError: (error) => {
      console.log("error function :", error);
    },
  });

  //const {} =useQuery(GET_TODO)

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo({
      variables: {
        title: title,
        tags: tags.split(",").map((tag) => tag.trim()),
        completed: completed,
      },
    });
    if (loading) return <p>Adding todo.....</p>;
    if (error) return <p>Error{error.message}</p>;
  };

  return (
    <>
      <div>
        <h1>Graphql Power todo</h1>

        <form onSubmit={handleAddTodo}>
          <input
            type="text"
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="tags"
            onChange={(e) => setTags(e.target.value)}
          />
          <div>
            <label>
              <input
                type="checkbox"
                checked={completed}
                onChange={(e) => setCompleted(e.target.checked)}
              />
              Completed
            </label>
          </div>

          <button type="submit">Add Todo</button>
          <p>{loading ? "Adding todo....." : null}</p>
          <p>{error ? `Error! ${error.message}` : null}</p>
        </form>
      </div>
    </>
  );
};

export default Todo;
