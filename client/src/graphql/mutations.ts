import { gql } from "@apollo/client";


 export const Add_Todo =gql `

    mutation AddTodos($title: String!, $tags: [String]!, $completed: Boolean){
        createTodo(title:$title,tags:$tags,completed:$completed){
            id
            title
            completed
        }
    }

`


export default Add_Todo;