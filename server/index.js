const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const Employee = require("./models/employee");
require("./models/db");

const typeDefs = `type Employee{
    _id:String,
     firstName: String,
     lastName:String,
     age: Int,
     dateOfJoining: String,
     title: String,
     department: String,
     employeeType: String,
     currentStatus:Int
 }
 
 type Query {
  getEmployees(type:String!): [Employee]
  deleteEmployee(Id:String!): Employee,
  getById(Id:String!): Employee,
 }
 
 
 type Mutation {
 postEmployee(firstName: String,
     lastName:String,
     age: Int,
     dateOfJoining: String,
     title: String,
     department: String,
     employeeType: String,
     currentStatus:Int):Employee,
     updateEmployee(id:String,
      title: String,
        department: String):Employee
 }`;

const resolvers = {
  Query: {
    getEmployees: async (_, { type }) => {
      if (type != "")
        return (await Employee.find({ employeeType: type }));
      else
        return (await Employee.find());
    },
    deleteEmployee: async (_, { Id }) => {
      await Employee.findByIdAndRemove(Id)
      return "deleted";
    },
    getById: async (_, { Id }) => {
      return (await Employee.findById({ _id: Id }))
    }
  },
  Mutation: {
    postEmployee: async (_, args) => {
      const querys = Employee.find({});
      const count = await querys.count();
      args.eid = count + 1;
      Employee.create(args);
      return args;
    },
    updateEmployee: async (_, args) => {
      await Employee.updateOne({_id:args.id},
        { $set: {title: args.title,
            department:args.department} });
      return args;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const app = express();

app.use(express.static("./public"));
server.start().then(() => server.applyMiddleware({ app, path: "/graphql" }));


app.listen("3003", function () {
  console.log("Started");
});
