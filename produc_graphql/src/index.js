const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./schemas/userSchema');
const resolvers = require('./resolvers/userResolver');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge'); 

const startServer = async ()=>{
   await  mongoose.connect('mongodb+srv://admin:admin@carrito.4iszf.mongodb.net/?retryWrites=true&w=majority&appName=CARRITO');
    
   const server = new ApolloServer({typeDefs,resolvers});
    server.listen().then(({url}) => {
        console.log(`Server ready at ${url}`);
    });

};

startServer();