"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Joke",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Profile",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/muneeb-rabaney/ChuckNorrisJokeAppService/ChuckNorrisJokeAppServiceUAT`
});
exports.prisma = new exports.Prisma();
