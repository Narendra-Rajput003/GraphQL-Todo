import TodoRepository from "../repository/todoRepository.js";
import TodoService from "../services/todoServices.js";

const todoService = new TodoService(new TodoRepository());

const resolvers = {
    Query: {
        getTodos: async () => {
            return await todoService.getAll();
        },
        getUsers:async()=>{
            return await todoService.getAllUsers();
            
         }
    },
    Mutation: {
        createTodo: async (_, { title, tags,completed }) => {
            const reponse=await todoService.create(title, tags,completed);
            return reponse;

        },
        createUser:async(_,{name,email,gender})=>{
            const user=await todoService.createUser(name,email,gender);
            return user;
        }
    },
    
};

export default resolvers;
