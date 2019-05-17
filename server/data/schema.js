const resolvers = require( './resolvers');
const makeExecutableSchema = require('graphql-tools');
//import { makeExecutableSchema } from 'graphql-tools'
// import mongoose from 'mongoose';
// const Schema = mongoose.Schema;

const { buildSchema } = require('graphql');
const typeDefs = `
    type Contact {
        id: ID
        firstName: String
        lastName: String
        email: String
        company: String
    }
    type Barber {
      id :  Int, 
      firstname :String,
      lastname :String,
      jobrole: String,
      rating: Int,
      email :String,
    }

    type Query {
        getContacts: [Contact]
        getOneContact(id: ID!): Contact
        getAllBarbers: [Barber]
    }

    input ContactInput {
        id: ID
        firstName: String
        lastName: String
        email: String
        company: String
    }

    type Mutation {
        createContact(input: ContactInput): Contact
        updateContact(input: ContactInput): Contact
        deleteContact(id: ID!): String
    }
`
const schema = makeExecutableSchema.makeExecutableSchema({ typeDefs, resolvers });

module.exports = { schema };
