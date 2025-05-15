import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTimeISO: { input: any; output: any; }
};

export type AccountCreateManyUserInput = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  accessTokenExpiresAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  accountId: Scalars['String']['input'];
  createdAt: Scalars['DateTimeISO']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  idToken?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  providerId: Scalars['String']['input'];
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  refreshTokenExpiresAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  updatedAt: Scalars['DateTimeISO']['input'];
};

export type AccountCreateManyUserInputEnvelope = {
  data: Array<AccountCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AccountCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AccountCreateWithoutUserInput>>;
  createMany?: InputMaybe<AccountCreateManyUserInputEnvelope>;
};

export type AccountCreateOrConnectWithoutUserInput = {
  create: AccountCreateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountCreateWithoutUserInput = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  accessTokenExpiresAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  accountId: Scalars['String']['input'];
  createdAt: Scalars['DateTimeISO']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  idToken?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  providerId: Scalars['String']['input'];
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  refreshTokenExpiresAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  updatedAt: Scalars['DateTimeISO']['input'];
};

export type AccountListRelationFilter = {
  every?: InputMaybe<AccountWhereInput>;
  none?: InputMaybe<AccountWhereInput>;
  some?: InputMaybe<AccountWhereInput>;
};

export type AccountWhereInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  accessToken?: InputMaybe<StringNullableFilter>;
  accessTokenExpiresAt?: InputMaybe<DateTimeNullableFilter>;
  accountId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  idToken?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringNullableFilter>;
  providerId?: InputMaybe<StringFilter>;
  refreshToken?: InputMaybe<StringNullableFilter>;
  refreshTokenExpiresAt?: InputMaybe<DateTimeNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AccountWhereUniqueInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  accessToken?: InputMaybe<StringNullableFilter>;
  accessTokenExpiresAt?: InputMaybe<DateTimeNullableFilter>;
  accountId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  idToken?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringNullableFilter>;
  providerId?: InputMaybe<StringFilter>;
  refreshToken?: InputMaybe<StringNullableFilter>;
  refreshTokenExpiresAt?: InputMaybe<DateTimeNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ActivityLogCreateManyUserInput = {
  action: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
};

export type ActivityLogCreateManyUserInputEnvelope = {
  data: Array<ActivityLogCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ActivityLogCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ActivityLogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ActivityLogCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ActivityLogCreateWithoutUserInput>>;
  createMany?: InputMaybe<ActivityLogCreateManyUserInputEnvelope>;
};

export type ActivityLogCreateOrConnectWithoutUserInput = {
  create: ActivityLogCreateWithoutUserInput;
  where: ActivityLogWhereUniqueInput;
};

export type ActivityLogCreateWithoutUserInput = {
  action: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
};

export type ActivityLogListRelationFilter = {
  every?: InputMaybe<ActivityLogWhereInput>;
  none?: InputMaybe<ActivityLogWhereInput>;
  some?: InputMaybe<ActivityLogWhereInput>;
};

export type ActivityLogWhereInput = {
  AND?: InputMaybe<Array<ActivityLogWhereInput>>;
  NOT?: InputMaybe<Array<ActivityLogWhereInput>>;
  OR?: InputMaybe<Array<ActivityLogWhereInput>>;
  action?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  ipAddress?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userAgent?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ActivityLogWhereUniqueInput = {
  AND?: InputMaybe<Array<ActivityLogWhereInput>>;
  NOT?: InputMaybe<Array<ActivityLogWhereInput>>;
  OR?: InputMaybe<Array<ActivityLogWhereInput>>;
  action?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userAgent?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type Average = {
  __typename?: 'Average';
  current: Scalars['Float']['output'];
  percentageChange: Scalars['Float']['output'];
  previous: Scalars['Float']['output'];
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type Category = {
  __typename?: 'Category';
  _count?: Maybe<CategoryCount>;
  color?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['String']['output'];
  value?: Maybe<Scalars['String']['output']>;
};

export type CategoryCount = {
  __typename?: 'CategoryCount';
  expenses: Scalars['Int']['output'];
};


export type CategoryCountExpensesArgs = {
  where?: InputMaybe<ExpenseWhereInput>;
};

export type CategoryCreateInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expenses?: InputMaybe<ExpenseCreateNestedManyWithoutCategoryInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutCategoriesInput;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryCreateManyUserInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryCreateManyUserInputEnvelope = {
  data: Array<CategoryCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CategoryCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<CategoryCreateWithoutUserInput>>;
  createMany?: InputMaybe<CategoryCreateManyUserInputEnvelope>;
};

export type CategoryCreateNestedOneWithoutExpensesInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutExpensesInput>;
  create?: InputMaybe<CategoryCreateWithoutExpensesInput>;
};

export type CategoryCreateOrConnectWithoutExpensesInput = {
  create: CategoryCreateWithoutExpensesInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutUserInput = {
  create: CategoryCreateWithoutUserInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateWithoutExpensesInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutCategoriesInput;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryCreateWithoutUserInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expenses?: InputMaybe<ExpenseCreateNestedManyWithoutCategoryInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryListRelationFilter = {
  every?: InputMaybe<CategoryWhereInput>;
  none?: InputMaybe<CategoryWhereInput>;
  some?: InputMaybe<CategoryWhereInput>;
};

export type CategoryNameUserIdValueCompoundUniqueInput = {
  name: Scalars['String']['input'];
  userId: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type CategoryRelationFilter = {
  is?: InputMaybe<CategoryWhereInput>;
  isNot?: InputMaybe<CategoryWhereInput>;
};

export type CategoryStat = {
  __typename?: 'CategoryStat';
  name: Scalars['String']['output'];
  percentage: Scalars['Float']['output'];
  totalAmount: Scalars['Float']['output'];
};

export type CategoryWhereInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  color?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  expenses?: InputMaybe<ExpenseListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  value?: InputMaybe<StringNullableFilter>;
};

export type CategoryWhereUniqueInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  color?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  expenses?: InputMaybe<ExpenseListRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilter>;
  name_userId_value?: InputMaybe<CategoryNameUserIdValueCompoundUniqueInput>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  value?: InputMaybe<StringNullableFilter>;
};

export type DashboardData = {
  __typename?: 'DashboardData';
  average: Average;
  categoryStats: Array<CategoryStat>;
  currency: Scalars['String']['output'];
  highestCategory: HighestCategory;
  recent?: Maybe<Recent>;
  total: Total;
  trending: Trending;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type Expense = {
  __typename?: 'Expense';
  amount: Scalars['Float']['output'];
  categoryId: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  date: Scalars['DateTimeISO']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  payment: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['String']['output'];
};

export type ExpenseCreateInput = {
  amount: Scalars['Float']['input'];
  category: CategoryCreateNestedOneWithoutExpensesInput;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  date: Scalars['DateTimeISO']['input'];
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  payment?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutExpensesInput;
};

export type ExpenseCreateManyCategoryInput = {
  amount: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  date: Scalars['DateTimeISO']['input'];
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  payment?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['String']['input'];
};

export type ExpenseCreateManyCategoryInputEnvelope = {
  data: Array<ExpenseCreateManyCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ExpenseCreateManyUserInput = {
  amount: Scalars['Float']['input'];
  categoryId: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  date: Scalars['DateTimeISO']['input'];
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  payment?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type ExpenseCreateManyUserInputEnvelope = {
  data: Array<ExpenseCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ExpenseCreateNestedManyWithoutCategoryInput = {
  connect?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ExpenseCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<ExpenseCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<ExpenseCreateManyCategoryInputEnvelope>;
};

export type ExpenseCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ExpenseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ExpenseCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ExpenseCreateWithoutUserInput>>;
  createMany?: InputMaybe<ExpenseCreateManyUserInputEnvelope>;
};

export type ExpenseCreateOrConnectWithoutCategoryInput = {
  create: ExpenseCreateWithoutCategoryInput;
  where: ExpenseWhereUniqueInput;
};

export type ExpenseCreateOrConnectWithoutUserInput = {
  create: ExpenseCreateWithoutUserInput;
  where: ExpenseWhereUniqueInput;
};

export type ExpenseCreateWithoutCategoryInput = {
  amount: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  date: Scalars['DateTimeISO']['input'];
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  payment?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutExpensesInput;
};

export type ExpenseCreateWithoutUserInput = {
  amount: Scalars['Float']['input'];
  category: CategoryCreateNestedOneWithoutExpensesInput;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  date: Scalars['DateTimeISO']['input'];
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  payment?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type ExpenseListRelationFilter = {
  every?: InputMaybe<ExpenseWhereInput>;
  none?: InputMaybe<ExpenseWhereInput>;
  some?: InputMaybe<ExpenseWhereInput>;
};

export type ExpenseWhereInput = {
  AND?: InputMaybe<Array<ExpenseWhereInput>>;
  NOT?: InputMaybe<Array<ExpenseWhereInput>>;
  OR?: InputMaybe<Array<ExpenseWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  category?: InputMaybe<CategoryRelationFilter>;
  categoryId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  notes?: InputMaybe<StringNullableFilter>;
  payment?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ExpenseWhereUniqueInput = {
  AND?: InputMaybe<Array<ExpenseWhereInput>>;
  NOT?: InputMaybe<Array<ExpenseWhereInput>>;
  OR?: InputMaybe<Array<ExpenseWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  category?: InputMaybe<CategoryRelationFilter>;
  categoryId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<StringNullableFilter>;
  payment?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type HighestCategory = {
  __typename?: 'HighestCategory';
  name: Scalars['String']['output'];
  percentage: Scalars['Float']['output'];
  total: Scalars['Float']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteCategory: Scalars['Boolean']['output'];
  deleteExpense: Scalars['Boolean']['output'];
  upsertCategory: Category;
  upsertExpense: Expense;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteExpenseArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpsertCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationUpsertExpenseArgs = {
  data: ExpenseCreateInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  dash: DashboardData;
  getAllCategory: Array<Category>;
  getAllExpense: Array<Expense>;
  test: Scalars['String']['output'];
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Recent = {
  __typename?: 'Recent';
  amount?: Maybe<Scalars['Float']['output']>;
  date?: Maybe<Scalars['DateTimeISO']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type SessionCreateManyUserInput = {
  createdAt: Scalars['DateTimeISO']['input'];
  expiresAt: Scalars['DateTimeISO']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
  updatedAt: Scalars['DateTimeISO']['input'];
  userAgent?: InputMaybe<Scalars['String']['input']>;
};

export type SessionCreateManyUserInputEnvelope = {
  data: Array<SessionCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SessionCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
};

export type SessionCreateOrConnectWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionCreateWithoutUserInput = {
  createdAt: Scalars['DateTimeISO']['input'];
  expiresAt: Scalars['DateTimeISO']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
  updatedAt: Scalars['DateTimeISO']['input'];
  userAgent?: InputMaybe<Scalars['String']['input']>;
};

export type SessionListRelationFilter = {
  every?: InputMaybe<SessionWhereInput>;
  none?: InputMaybe<SessionWhereInput>;
  some?: InputMaybe<SessionWhereInput>;
};

export type SessionWhereInput = {
  AND?: InputMaybe<Array<SessionWhereInput>>;
  NOT?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiresAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  ipAddress?: InputMaybe<StringNullableFilter>;
  token?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userAgent?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SessionWhereUniqueInput = {
  AND?: InputMaybe<Array<SessionWhereInput>>;
  NOT?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiresAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<StringNullableFilter>;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userAgent?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SettingCreateManyUserInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  key: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SettingCreateManyUserInputEnvelope = {
  data: Array<SettingCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SettingCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<SettingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SettingCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SettingCreateWithoutUserInput>>;
  createMany?: InputMaybe<SettingCreateManyUserInputEnvelope>;
};

export type SettingCreateOrConnectWithoutUserInput = {
  create: SettingCreateWithoutUserInput;
  where: SettingWhereUniqueInput;
};

export type SettingCreateWithoutUserInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  key: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SettingListRelationFilter = {
  every?: InputMaybe<SettingWhereInput>;
  none?: InputMaybe<SettingWhereInput>;
  some?: InputMaybe<SettingWhereInput>;
};

export type SettingWhereInput = {
  AND?: InputMaybe<Array<SettingWhereInput>>;
  NOT?: InputMaybe<Array<SettingWhereInput>>;
  OR?: InputMaybe<Array<SettingWhereInput>>;
  id?: InputMaybe<StringFilter>;
  key?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  value?: InputMaybe<StringNullableFilter>;
};

export type SettingWhereUniqueInput = {
  AND?: InputMaybe<Array<SettingWhereInput>>;
  NOT?: InputMaybe<Array<SettingWhereInput>>;
  OR?: InputMaybe<Array<SettingWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  value?: InputMaybe<StringNullableFilter>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Total = {
  __typename?: 'Total';
  current: Scalars['Float']['output'];
  previous: Scalars['Float']['output'];
};

export type Trending = {
  __typename?: 'Trending';
  current: Scalars['Float']['output'];
  percent: Scalars['Float']['output'];
  previous: Scalars['Float']['output'];
};

export type UserCreateNestedOneWithoutCategoriesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCategoriesInput>;
  create?: InputMaybe<UserCreateWithoutCategoriesInput>;
};

export type UserCreateNestedOneWithoutExpensesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutExpensesInput>;
  create?: InputMaybe<UserCreateWithoutExpensesInput>;
};

export type UserCreateOrConnectWithoutCategoriesInput = {
  create: UserCreateWithoutCategoriesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutExpensesInput = {
  create: UserCreateWithoutExpensesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutCategoriesInput = {
  Setting?: InputMaybe<SettingCreateNestedManyWithoutUserInput>;
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  activityLogs?: InputMaybe<ActivityLogCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  expenses?: InputMaybe<ExpenseCreateNestedManyWithoutUserInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserCreateWithoutExpensesInput = {
  Setting?: InputMaybe<SettingCreateNestedManyWithoutUserInput>;
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  activityLogs?: InputMaybe<ActivityLogCreateNestedManyWithoutUserInput>;
  categories?: InputMaybe<CategoryCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  Setting?: InputMaybe<SettingListRelationFilter>;
  accounts?: InputMaybe<AccountListRelationFilter>;
  activityLogs?: InputMaybe<ActivityLogListRelationFilter>;
  categories?: InputMaybe<CategoryListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  emailVerified?: InputMaybe<BoolFilter>;
  expenses?: InputMaybe<ExpenseListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringNullableFilter>;
  sessions?: InputMaybe<SessionListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  Setting?: InputMaybe<SettingListRelationFilter>;
  accounts?: InputMaybe<AccountListRelationFilter>;
  activityLogs?: InputMaybe<ActivityLogListRelationFilter>;
  categories?: InputMaybe<CategoryListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<BoolFilter>;
  expenses?: InputMaybe<ExpenseListRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringNullableFilter>;
  sessions?: InputMaybe<SessionListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type DashQueryVariables = Exact<{ [key: string]: never; }>;


export type DashQuery = { __typename?: 'Query', dash: { __typename?: 'DashboardData', currency: string, average: { __typename?: 'Average', current: number, previous: number, percentageChange: number }, total: { __typename?: 'Total', current: number, previous: number }, highestCategory: { __typename?: 'HighestCategory', name: string, total: number, percentage: number }, recent?: { __typename?: 'Recent', amount?: number | null, date?: any | null, name?: string | null } | null, categoryStats: Array<{ __typename?: 'CategoryStat', name: string, percentage: number, totalAmount: number }>, trending: { __typename?: 'Trending', current: number, previous: number, percent: number } } };

export type AllCategoryQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCategoryQuery = { __typename?: 'Query', getAllCategory: Array<{ __typename?: 'Category', id: string, name: string, color?: string | null, value?: string | null, description?: string | null, createdAt: any, updatedAt: any, _count?: { __typename?: 'CategoryCount', expenses: number } | null }> };


export const DashDocument = gql`
    query Dash {
  dash {
    average {
      current
      previous
      percentageChange
    }
    currency
    total {
      current
      previous
    }
    highestCategory {
      name
      total
      percentage
    }
    recent {
      amount
      date
      name
    }
    categoryStats {
      name
      percentage
      totalAmount
    }
    trending {
      current
      previous
      percent
    }
  }
}
    `;

/**
 * __useDashQuery__
 *
 * To run a query within a React component, call `useDashQuery` and pass it any options that fit your needs.
 * When your component renders, `useDashQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDashQuery({
 *   variables: {
 *   },
 * });
 */
export function useDashQuery(baseOptions?: Apollo.QueryHookOptions<DashQuery, DashQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DashQuery, DashQueryVariables>(DashDocument, options);
      }
export function useDashLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DashQuery, DashQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DashQuery, DashQueryVariables>(DashDocument, options);
        }
export function useDashSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<DashQuery, DashQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<DashQuery, DashQueryVariables>(DashDocument, options);
        }
export type DashQueryHookResult = ReturnType<typeof useDashQuery>;
export type DashLazyQueryHookResult = ReturnType<typeof useDashLazyQuery>;
export type DashSuspenseQueryHookResult = ReturnType<typeof useDashSuspenseQuery>;
export type DashQueryResult = Apollo.QueryResult<DashQuery, DashQueryVariables>;
export const AllCategoryDocument = gql`
    query AllCategory {
  getAllCategory {
    id
    name
    color
    value
    description
    createdAt
    updatedAt
    _count {
      expenses
    }
  }
}
    `;

/**
 * __useAllCategoryQuery__
 *
 * To run a query within a React component, call `useAllCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCategoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllCategoryQuery(baseOptions?: Apollo.QueryHookOptions<AllCategoryQuery, AllCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllCategoryQuery, AllCategoryQueryVariables>(AllCategoryDocument, options);
      }
export function useAllCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllCategoryQuery, AllCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllCategoryQuery, AllCategoryQueryVariables>(AllCategoryDocument, options);
        }
export function useAllCategorySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AllCategoryQuery, AllCategoryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AllCategoryQuery, AllCategoryQueryVariables>(AllCategoryDocument, options);
        }
export type AllCategoryQueryHookResult = ReturnType<typeof useAllCategoryQuery>;
export type AllCategoryLazyQueryHookResult = ReturnType<typeof useAllCategoryLazyQuery>;
export type AllCategorySuspenseQueryHookResult = ReturnType<typeof useAllCategorySuspenseQuery>;
export type AllCategoryQueryResult = Apollo.QueryResult<AllCategoryQuery, AllCategoryQueryVariables>;