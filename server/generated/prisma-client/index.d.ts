// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  joke: (where?: JokeWhereInput) => Promise<boolean>;
  profile: (where?: ProfileWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  joke: (where: JokeWhereUniqueInput) => JokeNullablePromise;
  jokes: (args?: {
    where?: JokeWhereInput;
    orderBy?: JokeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Joke>;
  jokesConnection: (args?: {
    where?: JokeWhereInput;
    orderBy?: JokeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => JokeConnectionPromise;
  profile: (where: ProfileWhereUniqueInput) => ProfileNullablePromise;
  profiles: (args?: {
    where?: ProfileWhereInput;
    orderBy?: ProfileOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Profile>;
  profilesConnection: (args?: {
    where?: ProfileWhereInput;
    orderBy?: ProfileOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ProfileConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createJoke: (data: JokeCreateInput) => JokePromise;
  updateJoke: (args: {
    data: JokeUpdateInput;
    where: JokeWhereUniqueInput;
  }) => JokePromise;
  updateManyJokes: (args: {
    data: JokeUpdateManyMutationInput;
    where?: JokeWhereInput;
  }) => BatchPayloadPromise;
  upsertJoke: (args: {
    where: JokeWhereUniqueInput;
    create: JokeCreateInput;
    update: JokeUpdateInput;
  }) => JokePromise;
  deleteJoke: (where: JokeWhereUniqueInput) => JokePromise;
  deleteManyJokes: (where?: JokeWhereInput) => BatchPayloadPromise;
  createProfile: (data: ProfileCreateInput) => ProfilePromise;
  updateProfile: (args: {
    data: ProfileUpdateInput;
    where: ProfileWhereUniqueInput;
  }) => ProfilePromise;
  upsertProfile: (args: {
    where: ProfileWhereUniqueInput;
    create: ProfileCreateInput;
    update: ProfileUpdateInput;
  }) => ProfilePromise;
  deleteProfile: (where: ProfileWhereUniqueInput) => ProfilePromise;
  deleteManyProfiles: (where?: ProfileWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  joke: (
    where?: JokeSubscriptionWhereInput
  ) => JokeSubscriptionPayloadSubscription;
  profile: (
    where?: ProfileSubscriptionWhereInput
  ) => ProfileSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type JokeOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "url_ASC"
  | "url_DESC"
  | "value_ASC"
  | "value_DESC"
  | "icon_url_ASC"
  | "icon_url_DESC";

export type ProfileOrderByInput = "id_ASC" | "id_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "first_name_ASC"
  | "first_name_DESC"
  | "last_name_ASC"
  | "last_name_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC"
  | "created_at_ASC"
  | "created_at_DESC"
  | "updated_at_ASC"
  | "updated_at_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface JokeUpdateInput {
  url?: Maybe<String>;
  value?: Maybe<String>;
  icon_url?: Maybe<String>;
  categories?: Maybe<JokeUpdatecategoriesInput>;
}

export type JokeWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface UserUpsertWithoutProfileInput {
  update: UserUpdateWithoutProfileDataInput;
  create: UserCreateWithoutProfileInput;
}

export interface ProfileCreateInput {
  id?: Maybe<ID_Input>;
  user: UserCreateOneWithoutProfileInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  email?: Maybe<String>;
}>;

export interface ProfileSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<ProfileWhereInput>;
  AND?: Maybe<ProfileSubscriptionWhereInput[] | ProfileSubscriptionWhereInput>;
  OR?: Maybe<ProfileSubscriptionWhereInput[] | ProfileSubscriptionWhereInput>;
  NOT?: Maybe<ProfileSubscriptionWhereInput[] | ProfileSubscriptionWhereInput>;
}

export interface UserUpdatefavroite_jokesInput {
  set?: Maybe<String[] | String>;
}

export interface UserUpdateManyMutationInput {
  first_name?: Maybe<String>;
  last_name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
  favroite_jokes?: Maybe<UserUpdatefavroite_jokesInput>;
}

export interface UserUpdateWithoutProfileDataInput {
  first_name?: Maybe<String>;
  last_name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
  favroite_jokes?: Maybe<UserUpdatefavroite_jokesInput>;
}

export interface ProfileUpdateOneWithoutUserInput {
  create?: Maybe<ProfileCreateWithoutUserInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<ProfileWhereUniqueInput>;
}

export interface UserUpdateOneRequiredWithoutProfileInput {
  create?: Maybe<UserCreateWithoutProfileInput>;
  update?: Maybe<UserUpdateWithoutProfileDataInput>;
  upsert?: Maybe<UserUpsertWithoutProfileInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface ProfileCreateWithoutUserInput {
  id?: Maybe<ID_Input>;
}

export interface ProfileUpdateInput {
  user?: Maybe<UserUpdateOneRequiredWithoutProfileInput>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  first_name?: Maybe<String>;
  first_name_not?: Maybe<String>;
  first_name_in?: Maybe<String[] | String>;
  first_name_not_in?: Maybe<String[] | String>;
  first_name_lt?: Maybe<String>;
  first_name_lte?: Maybe<String>;
  first_name_gt?: Maybe<String>;
  first_name_gte?: Maybe<String>;
  first_name_contains?: Maybe<String>;
  first_name_not_contains?: Maybe<String>;
  first_name_starts_with?: Maybe<String>;
  first_name_not_starts_with?: Maybe<String>;
  first_name_ends_with?: Maybe<String>;
  first_name_not_ends_with?: Maybe<String>;
  last_name?: Maybe<String>;
  last_name_not?: Maybe<String>;
  last_name_in?: Maybe<String[] | String>;
  last_name_not_in?: Maybe<String[] | String>;
  last_name_lt?: Maybe<String>;
  last_name_lte?: Maybe<String>;
  last_name_gt?: Maybe<String>;
  last_name_gte?: Maybe<String>;
  last_name_contains?: Maybe<String>;
  last_name_not_contains?: Maybe<String>;
  last_name_starts_with?: Maybe<String>;
  last_name_not_starts_with?: Maybe<String>;
  last_name_ends_with?: Maybe<String>;
  last_name_not_ends_with?: Maybe<String>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  password?: Maybe<String>;
  password_not?: Maybe<String>;
  password_in?: Maybe<String[] | String>;
  password_not_in?: Maybe<String[] | String>;
  password_lt?: Maybe<String>;
  password_lte?: Maybe<String>;
  password_gt?: Maybe<String>;
  password_gte?: Maybe<String>;
  password_contains?: Maybe<String>;
  password_not_contains?: Maybe<String>;
  password_starts_with?: Maybe<String>;
  password_not_starts_with?: Maybe<String>;
  password_ends_with?: Maybe<String>;
  password_not_ends_with?: Maybe<String>;
  profile?: Maybe<ProfileWhereInput>;
  created_at?: Maybe<DateTimeInput>;
  created_at_not?: Maybe<DateTimeInput>;
  created_at_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  created_at_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  created_at_lt?: Maybe<DateTimeInput>;
  created_at_lte?: Maybe<DateTimeInput>;
  created_at_gt?: Maybe<DateTimeInput>;
  created_at_gte?: Maybe<DateTimeInput>;
  updated_at?: Maybe<DateTimeInput>;
  updated_at_not?: Maybe<DateTimeInput>;
  updated_at_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updated_at_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updated_at_lt?: Maybe<DateTimeInput>;
  updated_at_lte?: Maybe<DateTimeInput>;
  updated_at_gt?: Maybe<DateTimeInput>;
  updated_at_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  first_name: String;
  last_name: String;
  email: String;
  password: String;
  favroite_jokes?: Maybe<UserCreatefavroite_jokesInput>;
  profile?: Maybe<ProfileCreateOneWithoutUserInput>;
}

export interface UserCreateOneWithoutProfileInput {
  create?: Maybe<UserCreateWithoutProfileInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface JokeCreateInput {
  id?: Maybe<ID_Input>;
  url?: Maybe<String>;
  value: String;
  icon_url?: Maybe<String>;
  categories?: Maybe<JokeCreatecategoriesInput>;
}

export interface ProfileCreateOneWithoutUserInput {
  create?: Maybe<ProfileCreateWithoutUserInput>;
  connect?: Maybe<ProfileWhereUniqueInput>;
}

export interface JokeCreatecategoriesInput {
  set?: Maybe<String[] | String>;
}

export interface JokeSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<JokeWhereInput>;
  AND?: Maybe<JokeSubscriptionWhereInput[] | JokeSubscriptionWhereInput>;
  OR?: Maybe<JokeSubscriptionWhereInput[] | JokeSubscriptionWhereInput>;
  NOT?: Maybe<JokeSubscriptionWhereInput[] | JokeSubscriptionWhereInput>;
}

export interface UserUpdateInput {
  first_name?: Maybe<String>;
  last_name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
  favroite_jokes?: Maybe<UserUpdatefavroite_jokesInput>;
  profile?: Maybe<ProfileUpdateOneWithoutUserInput>;
}

export interface UserCreateWithoutProfileInput {
  id?: Maybe<ID_Input>;
  first_name: String;
  last_name: String;
  email: String;
  password: String;
  favroite_jokes?: Maybe<UserCreatefavroite_jokesInput>;
}

export interface JokeUpdateManyMutationInput {
  url?: Maybe<String>;
  value?: Maybe<String>;
  icon_url?: Maybe<String>;
  categories?: Maybe<JokeUpdatecategoriesInput>;
}

export interface JokeUpdatecategoriesInput {
  set?: Maybe<String[] | String>;
}

export interface UserCreatefavroite_jokesInput {
  set?: Maybe<String[] | String>;
}

export interface ProfileWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  user?: Maybe<UserWhereInput>;
  AND?: Maybe<ProfileWhereInput[] | ProfileWhereInput>;
  OR?: Maybe<ProfileWhereInput[] | ProfileWhereInput>;
  NOT?: Maybe<ProfileWhereInput[] | ProfileWhereInput>;
}

export type ProfileWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface JokeWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  url?: Maybe<String>;
  url_not?: Maybe<String>;
  url_in?: Maybe<String[] | String>;
  url_not_in?: Maybe<String[] | String>;
  url_lt?: Maybe<String>;
  url_lte?: Maybe<String>;
  url_gt?: Maybe<String>;
  url_gte?: Maybe<String>;
  url_contains?: Maybe<String>;
  url_not_contains?: Maybe<String>;
  url_starts_with?: Maybe<String>;
  url_not_starts_with?: Maybe<String>;
  url_ends_with?: Maybe<String>;
  url_not_ends_with?: Maybe<String>;
  value?: Maybe<String>;
  value_not?: Maybe<String>;
  value_in?: Maybe<String[] | String>;
  value_not_in?: Maybe<String[] | String>;
  value_lt?: Maybe<String>;
  value_lte?: Maybe<String>;
  value_gt?: Maybe<String>;
  value_gte?: Maybe<String>;
  value_contains?: Maybe<String>;
  value_not_contains?: Maybe<String>;
  value_starts_with?: Maybe<String>;
  value_not_starts_with?: Maybe<String>;
  value_ends_with?: Maybe<String>;
  value_not_ends_with?: Maybe<String>;
  icon_url?: Maybe<String>;
  icon_url_not?: Maybe<String>;
  icon_url_in?: Maybe<String[] | String>;
  icon_url_not_in?: Maybe<String[] | String>;
  icon_url_lt?: Maybe<String>;
  icon_url_lte?: Maybe<String>;
  icon_url_gt?: Maybe<String>;
  icon_url_gte?: Maybe<String>;
  icon_url_contains?: Maybe<String>;
  icon_url_not_contains?: Maybe<String>;
  icon_url_starts_with?: Maybe<String>;
  icon_url_not_starts_with?: Maybe<String>;
  icon_url_ends_with?: Maybe<String>;
  icon_url_not_ends_with?: Maybe<String>;
  AND?: Maybe<JokeWhereInput[] | JokeWhereInput>;
  OR?: Maybe<JokeWhereInput[] | JokeWhereInput>;
  NOT?: Maybe<JokeWhereInput[] | JokeWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface UserPreviousValues {
  id: ID_Output;
  first_name: String;
  last_name: String;
  email: String;
  password: String;
  favroite_jokes: String[];
  created_at: DateTimeOutput;
  updated_at: DateTimeOutput;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  first_name: () => Promise<String>;
  last_name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  favroite_jokes: () => Promise<String[]>;
  created_at: () => Promise<DateTimeOutput>;
  updated_at: () => Promise<DateTimeOutput>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  first_name: () => Promise<AsyncIterator<String>>;
  last_name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  favroite_jokes: () => Promise<AsyncIterator<String[]>>;
  created_at: () => Promise<AsyncIterator<DateTimeOutput>>;
  updated_at: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface ProfilePreviousValues {
  id: ID_Output;
}

export interface ProfilePreviousValuesPromise
  extends Promise<ProfilePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
}

export interface ProfilePreviousValuesSubscription
  extends Promise<AsyncIterator<ProfilePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
}

export interface ProfileSubscriptionPayload {
  mutation: MutationType;
  node: Profile;
  updatedFields: String[];
  previousValues: ProfilePreviousValues;
}

export interface ProfileSubscriptionPayloadPromise
  extends Promise<ProfileSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ProfilePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ProfilePreviousValuesPromise>() => T;
}

export interface ProfileSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ProfileSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ProfileSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ProfilePreviousValuesSubscription>() => T;
}

export interface User {
  id: ID_Output;
  first_name: String;
  last_name: String;
  email: String;
  password: String;
  favroite_jokes: String[];
  created_at: DateTimeOutput;
  updated_at: DateTimeOutput;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  first_name: () => Promise<String>;
  last_name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  favroite_jokes: () => Promise<String[]>;
  profile: <T = ProfilePromise>() => T;
  created_at: () => Promise<DateTimeOutput>;
  updated_at: () => Promise<DateTimeOutput>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  first_name: () => Promise<AsyncIterator<String>>;
  last_name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  favroite_jokes: () => Promise<AsyncIterator<String[]>>;
  profile: <T = ProfileSubscription>() => T;
  created_at: () => Promise<AsyncIterator<DateTimeOutput>>;
  updated_at: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  first_name: () => Promise<String>;
  last_name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  favroite_jokes: () => Promise<String[]>;
  profile: <T = ProfilePromise>() => T;
  created_at: () => Promise<DateTimeOutput>;
  updated_at: () => Promise<DateTimeOutput>;
}

export interface Profile {
  id: ID_Output;
}

export interface ProfilePromise extends Promise<Profile>, Fragmentable {
  id: () => Promise<ID_Output>;
  user: <T = UserPromise>() => T;
}

export interface ProfileSubscription
  extends Promise<AsyncIterator<Profile>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  user: <T = UserSubscription>() => T;
}

export interface ProfileNullablePromise
  extends Promise<Profile | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  user: <T = UserPromise>() => T;
}

export interface JokeConnection {
  pageInfo: PageInfo;
  edges: JokeEdge[];
}

export interface JokeConnectionPromise
  extends Promise<JokeConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<JokeEdge>>() => T;
  aggregate: <T = AggregateJokePromise>() => T;
}

export interface JokeConnectionSubscription
  extends Promise<AsyncIterator<JokeConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<JokeEdgeSubscription>>>() => T;
  aggregate: <T = AggregateJokeSubscription>() => T;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface AggregateJoke {
  count: Int;
}

export interface AggregateJokePromise
  extends Promise<AggregateJoke>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateJokeSubscription
  extends Promise<AsyncIterator<AggregateJoke>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface AggregateProfile {
  count: Int;
}

export interface AggregateProfilePromise
  extends Promise<AggregateProfile>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateProfileSubscription
  extends Promise<AsyncIterator<AggregateProfile>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface JokePreviousValues {
  id: ID_Output;
  url?: String;
  value: String;
  icon_url?: String;
  categories: String[];
}

export interface JokePreviousValuesPromise
  extends Promise<JokePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  url: () => Promise<String>;
  value: () => Promise<String>;
  icon_url: () => Promise<String>;
  categories: () => Promise<String[]>;
}

export interface JokePreviousValuesSubscription
  extends Promise<AsyncIterator<JokePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  url: () => Promise<AsyncIterator<String>>;
  value: () => Promise<AsyncIterator<String>>;
  icon_url: () => Promise<AsyncIterator<String>>;
  categories: () => Promise<AsyncIterator<String[]>>;
}

export interface JokeSubscriptionPayload {
  mutation: MutationType;
  node: Joke;
  updatedFields: String[];
  previousValues: JokePreviousValues;
}

export interface JokeSubscriptionPayloadPromise
  extends Promise<JokeSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = JokePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = JokePreviousValuesPromise>() => T;
}

export interface JokeSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<JokeSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = JokeSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = JokePreviousValuesSubscription>() => T;
}

export interface Joke {
  id: ID_Output;
  url?: String;
  value: String;
  icon_url?: String;
  categories: String[];
}

export interface JokePromise extends Promise<Joke>, Fragmentable {
  id: () => Promise<ID_Output>;
  url: () => Promise<String>;
  value: () => Promise<String>;
  icon_url: () => Promise<String>;
  categories: () => Promise<String[]>;
}

export interface JokeSubscription
  extends Promise<AsyncIterator<Joke>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  url: () => Promise<AsyncIterator<String>>;
  value: () => Promise<AsyncIterator<String>>;
  icon_url: () => Promise<AsyncIterator<String>>;
  categories: () => Promise<AsyncIterator<String[]>>;
}

export interface JokeNullablePromise
  extends Promise<Joke | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  url: () => Promise<String>;
  value: () => Promise<String>;
  icon_url: () => Promise<String>;
  categories: () => Promise<String[]>;
}

export interface JokeEdge {
  node: Joke;
  cursor: String;
}

export interface JokeEdgePromise extends Promise<JokeEdge>, Fragmentable {
  node: <T = JokePromise>() => T;
  cursor: () => Promise<String>;
}

export interface JokeEdgeSubscription
  extends Promise<AsyncIterator<JokeEdge>>,
    Fragmentable {
  node: <T = JokeSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface ProfileEdge {
  node: Profile;
  cursor: String;
}

export interface ProfileEdgePromise extends Promise<ProfileEdge>, Fragmentable {
  node: <T = ProfilePromise>() => T;
  cursor: () => Promise<String>;
}

export interface ProfileEdgeSubscription
  extends Promise<AsyncIterator<ProfileEdge>>,
    Fragmentable {
  node: <T = ProfileSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface ProfileConnection {
  pageInfo: PageInfo;
  edges: ProfileEdge[];
}

export interface ProfileConnectionPromise
  extends Promise<ProfileConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ProfileEdge>>() => T;
  aggregate: <T = AggregateProfilePromise>() => T;
}

export interface ProfileConnectionSubscription
  extends Promise<AsyncIterator<ProfileConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ProfileEdgeSubscription>>>() => T;
  aggregate: <T = AggregateProfileSubscription>() => T;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Model Metadata
 */

export const models: Model[] = [
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

/**
 * Type Defs
 */

export const prisma: Prisma;
