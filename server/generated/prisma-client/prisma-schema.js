module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateJoke {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Joke {
  id: ID!
  url: String
  value: String!
  icon_url: String
  categories: [String!]!
}

type JokeConnection {
  pageInfo: PageInfo!
  edges: [JokeEdge]!
  aggregate: AggregateJoke!
}

input JokeCreatecategoriesInput {
  set: [String!]
}

input JokeCreateInput {
  id: ID
  url: String
  value: String!
  icon_url: String
  categories: JokeCreatecategoriesInput
}

input JokeCreateManyInput {
  create: [JokeCreateInput!]
  connect: [JokeWhereUniqueInput!]
}

type JokeEdge {
  node: Joke!
  cursor: String!
}

enum JokeOrderByInput {
  id_ASC
  id_DESC
  url_ASC
  url_DESC
  value_ASC
  value_DESC
  icon_url_ASC
  icon_url_DESC
}

type JokePreviousValues {
  id: ID!
  url: String
  value: String!
  icon_url: String
  categories: [String!]!
}

input JokeScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  value: String
  value_not: String
  value_in: [String!]
  value_not_in: [String!]
  value_lt: String
  value_lte: String
  value_gt: String
  value_gte: String
  value_contains: String
  value_not_contains: String
  value_starts_with: String
  value_not_starts_with: String
  value_ends_with: String
  value_not_ends_with: String
  icon_url: String
  icon_url_not: String
  icon_url_in: [String!]
  icon_url_not_in: [String!]
  icon_url_lt: String
  icon_url_lte: String
  icon_url_gt: String
  icon_url_gte: String
  icon_url_contains: String
  icon_url_not_contains: String
  icon_url_starts_with: String
  icon_url_not_starts_with: String
  icon_url_ends_with: String
  icon_url_not_ends_with: String
  AND: [JokeScalarWhereInput!]
  OR: [JokeScalarWhereInput!]
  NOT: [JokeScalarWhereInput!]
}

type JokeSubscriptionPayload {
  mutation: MutationType!
  node: Joke
  updatedFields: [String!]
  previousValues: JokePreviousValues
}

input JokeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: JokeWhereInput
  AND: [JokeSubscriptionWhereInput!]
  OR: [JokeSubscriptionWhereInput!]
  NOT: [JokeSubscriptionWhereInput!]
}

input JokeUpdatecategoriesInput {
  set: [String!]
}

input JokeUpdateDataInput {
  url: String
  value: String
  icon_url: String
  categories: JokeUpdatecategoriesInput
}

input JokeUpdateInput {
  url: String
  value: String
  icon_url: String
  categories: JokeUpdatecategoriesInput
}

input JokeUpdateManyDataInput {
  url: String
  value: String
  icon_url: String
  categories: JokeUpdatecategoriesInput
}

input JokeUpdateManyInput {
  create: [JokeCreateInput!]
  update: [JokeUpdateWithWhereUniqueNestedInput!]
  upsert: [JokeUpsertWithWhereUniqueNestedInput!]
  delete: [JokeWhereUniqueInput!]
  connect: [JokeWhereUniqueInput!]
  set: [JokeWhereUniqueInput!]
  disconnect: [JokeWhereUniqueInput!]
  deleteMany: [JokeScalarWhereInput!]
  updateMany: [JokeUpdateManyWithWhereNestedInput!]
}

input JokeUpdateManyMutationInput {
  url: String
  value: String
  icon_url: String
  categories: JokeUpdatecategoriesInput
}

input JokeUpdateManyWithWhereNestedInput {
  where: JokeScalarWhereInput!
  data: JokeUpdateManyDataInput!
}

input JokeUpdateWithWhereUniqueNestedInput {
  where: JokeWhereUniqueInput!
  data: JokeUpdateDataInput!
}

input JokeUpsertWithWhereUniqueNestedInput {
  where: JokeWhereUniqueInput!
  update: JokeUpdateDataInput!
  create: JokeCreateInput!
}

input JokeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  value: String
  value_not: String
  value_in: [String!]
  value_not_in: [String!]
  value_lt: String
  value_lte: String
  value_gt: String
  value_gte: String
  value_contains: String
  value_not_contains: String
  value_starts_with: String
  value_not_starts_with: String
  value_ends_with: String
  value_not_ends_with: String
  icon_url: String
  icon_url_not: String
  icon_url_in: [String!]
  icon_url_not_in: [String!]
  icon_url_lt: String
  icon_url_lte: String
  icon_url_gt: String
  icon_url_gte: String
  icon_url_contains: String
  icon_url_not_contains: String
  icon_url_starts_with: String
  icon_url_not_starts_with: String
  icon_url_ends_with: String
  icon_url_not_ends_with: String
  AND: [JokeWhereInput!]
  OR: [JokeWhereInput!]
  NOT: [JokeWhereInput!]
}

input JokeWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createJoke(data: JokeCreateInput!): Joke!
  updateJoke(data: JokeUpdateInput!, where: JokeWhereUniqueInput!): Joke
  updateManyJokes(data: JokeUpdateManyMutationInput!, where: JokeWhereInput): BatchPayload!
  upsertJoke(where: JokeWhereUniqueInput!, create: JokeCreateInput!, update: JokeUpdateInput!): Joke!
  deleteJoke(where: JokeWhereUniqueInput!): Joke
  deleteManyJokes(where: JokeWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  joke(where: JokeWhereUniqueInput!): Joke
  jokes(where: JokeWhereInput, orderBy: JokeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Joke]!
  jokesConnection(where: JokeWhereInput, orderBy: JokeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): JokeConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  joke(where: JokeSubscriptionWhereInput): JokeSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  firstname: String!
  lastname: String!
  email: String!
  password: String!
  favroite_jokes(where: JokeWhereInput, orderBy: JokeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Joke!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  firstname: String!
  lastname: String!
  email: String!
  password: String!
  favroite_jokes: JokeCreateManyInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  firstname_ASC
  firstname_DESC
  lastname_ASC
  lastname_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
}

type UserPreviousValues {
  id: ID!
  firstname: String!
  lastname: String!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  firstname: String
  lastname: String
  email: String
  password: String
  favroite_jokes: JokeUpdateManyInput
}

input UserUpdateManyMutationInput {
  firstname: String
  lastname: String
  email: String
  password: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  firstname: String
  firstname_not: String
  firstname_in: [String!]
  firstname_not_in: [String!]
  firstname_lt: String
  firstname_lte: String
  firstname_gt: String
  firstname_gte: String
  firstname_contains: String
  firstname_not_contains: String
  firstname_starts_with: String
  firstname_not_starts_with: String
  firstname_ends_with: String
  firstname_not_ends_with: String
  lastname: String
  lastname_not: String
  lastname_in: [String!]
  lastname_not_in: [String!]
  lastname_lt: String
  lastname_lte: String
  lastname_gt: String
  lastname_gte: String
  lastname_contains: String
  lastname_not_contains: String
  lastname_starts_with: String
  lastname_not_starts_with: String
  lastname_ends_with: String
  lastname_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  favroite_jokes_every: JokeWhereInput
  favroite_jokes_some: JokeWhereInput
  favroite_jokes_none: JokeWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    