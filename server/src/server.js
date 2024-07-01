import {ApolloServer} from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import connectDB from "./config/db_config.js"
import typeDefs from "./typedefs/index.js"
import resolvers from "./resolvers/index.js"

const server=new ApolloServer({
    typeDefs:typeDefs,
    resolvers:resolvers
})

async function start(){
    const {url}=await startStandaloneServer(server);
    console.log(`Server is running on ${url}`);
     connectDB();
}

start();