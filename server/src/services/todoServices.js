import TodoRepository from "../repository/todoRepository.js"

class TodoService{
    constructor(){
        this.todoRepository =new  TodoRepository();

    }

    async getAll(){
        return await this.todoRepository.getAll();
    }

    async create(title,tags,completed){
        const data= await this.todoRepository.create(title,tags,completed)
        return data;
       
    }
    async createUser(name,email,gender){
        return await this.todoRepository.createUser(name,email,gender)
    }
    async getAllUsers(){
        return await this.todoRepository.getAllUsers();
    }
}

export default TodoService