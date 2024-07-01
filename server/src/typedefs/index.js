
const typeDef=`#graphql

    type Todo{
        id:ID!,
        title:String,
        completed:Boolean,
        tags:[String]!
        user:User
    }

    type User{
        id:ID!,
        name:String,
        email:String,
        todos:[Todo]!,
        gender: Gender!

    }
    enum Gender{
        MALE
        FEMALE
        OTHER
    }
  
    type Query{
        getTodos:[Todo]!
        getUsers:[User]!
    }

    type Mutation{
        createTodo(title:String!,tags:[String]!,completed:Boolean):Todo
        createUser(name:String!,email:String!,gender:Gender!):User
    }




`

export default typeDef;