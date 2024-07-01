import { gql } from "@apollo/client";



export const GET_TODOS=gql`
query Fetch{
    getTodos{
        id
        title
        completed
        tags
    }
}


`

export default GET_TODOS;