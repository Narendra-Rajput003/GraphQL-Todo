import Todo from "../model/todos.js"
import User from "../model/user.js"

class TodoRepository{

    async getAll(){
        return await Todo.find();
    }

    async create(title,tags,completed){
        const todo = new Todo({
            title,
            tags,
            completed
        })
        await todo.save();
        await todo.populate("user");
        return todo;
    }

    async createUser(name,email,gender){
        
        const user=await User.create({
            name,
            email,
            gender
        })
        await user.populate("todos");
        return user;
    
    }
    async getAllUsers(){
        return await User.find();
    }
}

export default TodoRepository