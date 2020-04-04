import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

export type Category = {
   __typename?: 'category';
  value: Scalars['String'];
};

export type Category_Aggregate = {
   __typename?: 'category_aggregate';
  aggregate?: Maybe<Category_Aggregate_Fields>;
  nodes: Array<Category>;
};

export type Category_Aggregate_Fields = {
   __typename?: 'category_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Category_Max_Fields>;
  min?: Maybe<Category_Min_Fields>;
};


export type Category_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Category_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Category_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Category_Max_Order_By>;
  min?: Maybe<Category_Min_Order_By>;
};

export type Category_Arr_Rel_Insert_Input = {
  data: Array<Category_Insert_Input>;
  on_conflict?: Maybe<Category_On_Conflict>;
};

export type Category_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Category_Bool_Exp>>>;
  _not?: Maybe<Category_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Category_Bool_Exp>>>;
  value?: Maybe<String_Comparison_Exp>;
};

export enum Category_Constraint {
  CategoryPkey = 'category_pkey'
}

export enum Category_Enum {
  Cook = 'COOK',
  Fitness = 'FITNESS',
  Fun = 'FUN',
  Health = 'HEALTH',
  Help = 'HELP'
}

export type Category_Enum_Comparison_Exp = {
  _eq?: Maybe<Category_Enum>;
  _in?: Maybe<Array<Category_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Category_Enum>;
  _nin?: Maybe<Array<Category_Enum>>;
};

export type Category_Insert_Input = {
  value?: Maybe<Scalars['String']>;
};

export type Category_Max_Fields = {
   __typename?: 'category_max_fields';
  value?: Maybe<Scalars['String']>;
};

export type Category_Max_Order_By = {
  value?: Maybe<Order_By>;
};

export type Category_Min_Fields = {
   __typename?: 'category_min_fields';
  value?: Maybe<Scalars['String']>;
};

export type Category_Min_Order_By = {
  value?: Maybe<Order_By>;
};

export type Category_Mutation_Response = {
   __typename?: 'category_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Category>;
};

export type Category_Obj_Rel_Insert_Input = {
  data: Category_Insert_Input;
  on_conflict?: Maybe<Category_On_Conflict>;
};

export type Category_On_Conflict = {
  constraint: Category_Constraint;
  update_columns: Array<Category_Update_Column>;
  where?: Maybe<Category_Bool_Exp>;
};

export type Category_Order_By = {
  value?: Maybe<Order_By>;
};

export enum Category_Select_Column {
  Value = 'value'
}

export type Category_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

export enum Category_Update_Column {
  Value = 'value'
}

export type Challenge = {
   __typename?: 'challenge';
  category: Category_Enum;
  description: Scalars['String'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  points: Scalars['Int'];
};

export type Challenge_Aggregate = {
   __typename?: 'challenge_aggregate';
  aggregate?: Maybe<Challenge_Aggregate_Fields>;
  nodes: Array<Challenge>;
};

export type Challenge_Aggregate_Fields = {
   __typename?: 'challenge_aggregate_fields';
  avg?: Maybe<Challenge_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Challenge_Max_Fields>;
  min?: Maybe<Challenge_Min_Fields>;
  stddev?: Maybe<Challenge_Stddev_Fields>;
  stddev_pop?: Maybe<Challenge_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Challenge_Stddev_Samp_Fields>;
  sum?: Maybe<Challenge_Sum_Fields>;
  var_pop?: Maybe<Challenge_Var_Pop_Fields>;
  var_samp?: Maybe<Challenge_Var_Samp_Fields>;
  variance?: Maybe<Challenge_Variance_Fields>;
};


export type Challenge_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Challenge_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Challenge_Aggregate_Order_By = {
  avg?: Maybe<Challenge_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Challenge_Max_Order_By>;
  min?: Maybe<Challenge_Min_Order_By>;
  stddev?: Maybe<Challenge_Stddev_Order_By>;
  stddev_pop?: Maybe<Challenge_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Challenge_Stddev_Samp_Order_By>;
  sum?: Maybe<Challenge_Sum_Order_By>;
  var_pop?: Maybe<Challenge_Var_Pop_Order_By>;
  var_samp?: Maybe<Challenge_Var_Samp_Order_By>;
  variance?: Maybe<Challenge_Variance_Order_By>;
};

export type Challenge_Arr_Rel_Insert_Input = {
  data: Array<Challenge_Insert_Input>;
  on_conflict?: Maybe<Challenge_On_Conflict>;
};

export type Challenge_Avg_Fields = {
   __typename?: 'challenge_avg_fields';
  points?: Maybe<Scalars['Float']>;
};

export type Challenge_Avg_Order_By = {
  points?: Maybe<Order_By>;
};

export type Challenge_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Challenge_Bool_Exp>>>;
  _not?: Maybe<Challenge_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Challenge_Bool_Exp>>>;
  category?: Maybe<Category_Enum_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  points?: Maybe<Int_Comparison_Exp>;
};

export type Challenge_Completition = {
   __typename?: 'challenge_completition';
  attachment?: Maybe<Scalars['String']>;
  challenge_id: Scalars['uuid'];
  emotion?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  timestamp: Scalars['timestamptz'];
  user_id: Scalars['uuid'];
};

export type Challenge_Completition_Aggregate = {
   __typename?: 'challenge_completition_aggregate';
  aggregate?: Maybe<Challenge_Completition_Aggregate_Fields>;
  nodes: Array<Challenge_Completition>;
};

export type Challenge_Completition_Aggregate_Fields = {
   __typename?: 'challenge_completition_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Challenge_Completition_Max_Fields>;
  min?: Maybe<Challenge_Completition_Min_Fields>;
};


export type Challenge_Completition_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Challenge_Completition_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Challenge_Completition_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Challenge_Completition_Max_Order_By>;
  min?: Maybe<Challenge_Completition_Min_Order_By>;
};

export type Challenge_Completition_Arr_Rel_Insert_Input = {
  data: Array<Challenge_Completition_Insert_Input>;
  on_conflict?: Maybe<Challenge_Completition_On_Conflict>;
};

export type Challenge_Completition_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Challenge_Completition_Bool_Exp>>>;
  _not?: Maybe<Challenge_Completition_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Challenge_Completition_Bool_Exp>>>;
  attachment?: Maybe<String_Comparison_Exp>;
  challenge_id?: Maybe<Uuid_Comparison_Exp>;
  emotion?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  timestamp?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

export enum Challenge_Completition_Constraint {
  ChallengeCompletitionPkey = 'challenge_completition_pkey'
}

export type Challenge_Completition_Insert_Input = {
  attachment?: Maybe<Scalars['String']>;
  challenge_id?: Maybe<Scalars['uuid']>;
  emotion?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

export type Challenge_Completition_Max_Fields = {
   __typename?: 'challenge_completition_max_fields';
  attachment?: Maybe<Scalars['String']>;
  emotion?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
};

export type Challenge_Completition_Max_Order_By = {
  attachment?: Maybe<Order_By>;
  emotion?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
};

export type Challenge_Completition_Min_Fields = {
   __typename?: 'challenge_completition_min_fields';
  attachment?: Maybe<Scalars['String']>;
  emotion?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
};

export type Challenge_Completition_Min_Order_By = {
  attachment?: Maybe<Order_By>;
  emotion?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
};

export type Challenge_Completition_Mutation_Response = {
   __typename?: 'challenge_completition_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Challenge_Completition>;
};

export type Challenge_Completition_Obj_Rel_Insert_Input = {
  data: Challenge_Completition_Insert_Input;
  on_conflict?: Maybe<Challenge_Completition_On_Conflict>;
};

export type Challenge_Completition_On_Conflict = {
  constraint: Challenge_Completition_Constraint;
  update_columns: Array<Challenge_Completition_Update_Column>;
  where?: Maybe<Challenge_Completition_Bool_Exp>;
};

export type Challenge_Completition_Order_By = {
  attachment?: Maybe<Order_By>;
  challenge_id?: Maybe<Order_By>;
  emotion?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export enum Challenge_Completition_Select_Column {
  Attachment = 'attachment',
  ChallengeId = 'challenge_id',
  Emotion = 'emotion',
  Id = 'id',
  Timestamp = 'timestamp',
  UserId = 'user_id'
}

export type Challenge_Completition_Set_Input = {
  attachment?: Maybe<Scalars['String']>;
  challenge_id?: Maybe<Scalars['uuid']>;
  emotion?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

export enum Challenge_Completition_Update_Column {
  Attachment = 'attachment',
  ChallengeId = 'challenge_id',
  Emotion = 'emotion',
  Id = 'id',
  Timestamp = 'timestamp',
  UserId = 'user_id'
}

export enum Challenge_Constraint {
  ChallengeTemplatePkey = 'challenge_template_pkey'
}

export type Challenge_Inc_Input = {
  points?: Maybe<Scalars['Int']>;
};

export type Challenge_Insert_Input = {
  category?: Maybe<Category_Enum>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Int']>;
};

export type Challenge_Max_Fields = {
   __typename?: 'challenge_max_fields';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Int']>;
};

export type Challenge_Max_Order_By = {
  description?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  points?: Maybe<Order_By>;
};

export type Challenge_Min_Fields = {
   __typename?: 'challenge_min_fields';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Int']>;
};

export type Challenge_Min_Order_By = {
  description?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  points?: Maybe<Order_By>;
};

export type Challenge_Mutation_Response = {
   __typename?: 'challenge_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Challenge>;
};

export type Challenge_Obj_Rel_Insert_Input = {
  data: Challenge_Insert_Input;
  on_conflict?: Maybe<Challenge_On_Conflict>;
};

export type Challenge_On_Conflict = {
  constraint: Challenge_Constraint;
  update_columns: Array<Challenge_Update_Column>;
  where?: Maybe<Challenge_Bool_Exp>;
};

export type Challenge_Order_By = {
  category?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  points?: Maybe<Order_By>;
};

export enum Challenge_Select_Column {
  Category = 'category',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  Points = 'points'
}

export type Challenge_Set_Input = {
  category?: Maybe<Category_Enum>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Int']>;
};

export type Challenge_Stddev_Fields = {
   __typename?: 'challenge_stddev_fields';
  points?: Maybe<Scalars['Float']>;
};

export type Challenge_Stddev_Order_By = {
  points?: Maybe<Order_By>;
};

export type Challenge_Stddev_Pop_Fields = {
   __typename?: 'challenge_stddev_pop_fields';
  points?: Maybe<Scalars['Float']>;
};

export type Challenge_Stddev_Pop_Order_By = {
  points?: Maybe<Order_By>;
};

export type Challenge_Stddev_Samp_Fields = {
   __typename?: 'challenge_stddev_samp_fields';
  points?: Maybe<Scalars['Float']>;
};

export type Challenge_Stddev_Samp_Order_By = {
  points?: Maybe<Order_By>;
};

export type Challenge_Sum_Fields = {
   __typename?: 'challenge_sum_fields';
  points?: Maybe<Scalars['Int']>;
};

export type Challenge_Sum_Order_By = {
  points?: Maybe<Order_By>;
};

export enum Challenge_Update_Column {
  Category = 'category',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  Points = 'points'
}

export type Challenge_Var_Pop_Fields = {
   __typename?: 'challenge_var_pop_fields';
  points?: Maybe<Scalars['Float']>;
};

export type Challenge_Var_Pop_Order_By = {
  points?: Maybe<Order_By>;
};

export type Challenge_Var_Samp_Fields = {
   __typename?: 'challenge_var_samp_fields';
  points?: Maybe<Scalars['Float']>;
};

export type Challenge_Var_Samp_Order_By = {
  points?: Maybe<Order_By>;
};

export type Challenge_Variance_Fields = {
   __typename?: 'challenge_variance_fields';
  points?: Maybe<Scalars['Float']>;
};

export type Challenge_Variance_Order_By = {
  points?: Maybe<Order_By>;
};

export type Emotion = {
   __typename?: 'emotion';
  value: Scalars['String'];
};

export type Emotion_Aggregate = {
   __typename?: 'emotion_aggregate';
  aggregate?: Maybe<Emotion_Aggregate_Fields>;
  nodes: Array<Emotion>;
};

export type Emotion_Aggregate_Fields = {
   __typename?: 'emotion_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Emotion_Max_Fields>;
  min?: Maybe<Emotion_Min_Fields>;
};


export type Emotion_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Emotion_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Emotion_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Emotion_Max_Order_By>;
  min?: Maybe<Emotion_Min_Order_By>;
};

export type Emotion_Arr_Rel_Insert_Input = {
  data: Array<Emotion_Insert_Input>;
  on_conflict?: Maybe<Emotion_On_Conflict>;
};

export type Emotion_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Emotion_Bool_Exp>>>;
  _not?: Maybe<Emotion_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Emotion_Bool_Exp>>>;
  value?: Maybe<String_Comparison_Exp>;
};

export enum Emotion_Constraint {
  EmotionPkey = 'emotion_pkey'
}

export type Emotion_Insert_Input = {
  value?: Maybe<Scalars['String']>;
};

export type Emotion_Max_Fields = {
   __typename?: 'emotion_max_fields';
  value?: Maybe<Scalars['String']>;
};

export type Emotion_Max_Order_By = {
  value?: Maybe<Order_By>;
};

export type Emotion_Min_Fields = {
   __typename?: 'emotion_min_fields';
  value?: Maybe<Scalars['String']>;
};

export type Emotion_Min_Order_By = {
  value?: Maybe<Order_By>;
};

export type Emotion_Mutation_Response = {
   __typename?: 'emotion_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Emotion>;
};

export type Emotion_Obj_Rel_Insert_Input = {
  data: Emotion_Insert_Input;
  on_conflict?: Maybe<Emotion_On_Conflict>;
};

export type Emotion_On_Conflict = {
  constraint: Emotion_Constraint;
  update_columns: Array<Emotion_Update_Column>;
  where?: Maybe<Emotion_Bool_Exp>;
};

export type Emotion_Order_By = {
  value?: Maybe<Order_By>;
};

export enum Emotion_Select_Column {
  Value = 'value'
}

export type Emotion_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

export enum Emotion_Update_Column {
  Value = 'value'
}

export type Mutation_Root = {
   __typename?: 'mutation_root';
  delete_category?: Maybe<Category_Mutation_Response>;
  delete_challenge?: Maybe<Challenge_Mutation_Response>;
  delete_challenge_completition?: Maybe<Challenge_Completition_Mutation_Response>;
  delete_emotion?: Maybe<Emotion_Mutation_Response>;
  delete_user?: Maybe<User_Mutation_Response>;
  insert_category?: Maybe<Category_Mutation_Response>;
  insert_challenge?: Maybe<Challenge_Mutation_Response>;
  insert_challenge_completition?: Maybe<Challenge_Completition_Mutation_Response>;
  insert_emotion?: Maybe<Emotion_Mutation_Response>;
  insert_user?: Maybe<User_Mutation_Response>;
  update_category?: Maybe<Category_Mutation_Response>;
  update_challenge?: Maybe<Challenge_Mutation_Response>;
  update_challenge_completition?: Maybe<Challenge_Completition_Mutation_Response>;
  update_emotion?: Maybe<Emotion_Mutation_Response>;
  update_user?: Maybe<User_Mutation_Response>;
};


export type Mutation_RootDelete_CategoryArgs = {
  where: Category_Bool_Exp;
};


export type Mutation_RootDelete_ChallengeArgs = {
  where: Challenge_Bool_Exp;
};


export type Mutation_RootDelete_Challenge_CompletitionArgs = {
  where: Challenge_Completition_Bool_Exp;
};


export type Mutation_RootDelete_EmotionArgs = {
  where: Emotion_Bool_Exp;
};


export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


export type Mutation_RootInsert_CategoryArgs = {
  objects: Array<Category_Insert_Input>;
  on_conflict?: Maybe<Category_On_Conflict>;
};


export type Mutation_RootInsert_ChallengeArgs = {
  objects: Array<Challenge_Insert_Input>;
  on_conflict?: Maybe<Challenge_On_Conflict>;
};


export type Mutation_RootInsert_Challenge_CompletitionArgs = {
  objects: Array<Challenge_Completition_Insert_Input>;
  on_conflict?: Maybe<Challenge_Completition_On_Conflict>;
};


export type Mutation_RootInsert_EmotionArgs = {
  objects: Array<Emotion_Insert_Input>;
  on_conflict?: Maybe<Emotion_On_Conflict>;
};


export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};


export type Mutation_RootUpdate_CategoryArgs = {
  _set?: Maybe<Category_Set_Input>;
  where: Category_Bool_Exp;
};


export type Mutation_RootUpdate_ChallengeArgs = {
  _inc?: Maybe<Challenge_Inc_Input>;
  _set?: Maybe<Challenge_Set_Input>;
  where: Challenge_Bool_Exp;
};


export type Mutation_RootUpdate_Challenge_CompletitionArgs = {
  _set?: Maybe<Challenge_Completition_Set_Input>;
  where: Challenge_Completition_Bool_Exp;
};


export type Mutation_RootUpdate_EmotionArgs = {
  _set?: Maybe<Emotion_Set_Input>;
  where: Emotion_Bool_Exp;
};


export type Mutation_RootUpdate_UserArgs = {
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};

export enum Order_By {
  Asc = 'asc',
  AscNullsFirst = 'asc_nulls_first',
  AscNullsLast = 'asc_nulls_last',
  Desc = 'desc',
  DescNullsFirst = 'desc_nulls_first',
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
   __typename?: 'query_root';
  category: Array<Category>;
  category_aggregate: Category_Aggregate;
  category_by_pk?: Maybe<Category>;
  challenge: Array<Challenge>;
  challenge_aggregate: Challenge_Aggregate;
  challenge_by_pk?: Maybe<Challenge>;
  challenge_completition: Array<Challenge_Completition>;
  challenge_completition_aggregate: Challenge_Completition_Aggregate;
  challenge_completition_by_pk?: Maybe<Challenge_Completition>;
  emotion: Array<Emotion>;
  emotion_aggregate: Emotion_Aggregate;
  emotion_by_pk?: Maybe<Emotion>;
  user: Array<User>;
  user_aggregate: User_Aggregate;
  user_by_pk?: Maybe<User>;
};


export type Query_RootCategoryArgs = {
  distinct_on?: Maybe<Array<Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Category_Order_By>>;
  where?: Maybe<Category_Bool_Exp>;
};


export type Query_RootCategory_AggregateArgs = {
  distinct_on?: Maybe<Array<Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Category_Order_By>>;
  where?: Maybe<Category_Bool_Exp>;
};


export type Query_RootCategory_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootChallengeArgs = {
  distinct_on?: Maybe<Array<Challenge_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Order_By>>;
  where?: Maybe<Challenge_Bool_Exp>;
};


export type Query_RootChallenge_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Order_By>>;
  where?: Maybe<Challenge_Bool_Exp>;
};


export type Query_RootChallenge_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootChallenge_CompletitionArgs = {
  distinct_on?: Maybe<Array<Challenge_Completition_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Completition_Order_By>>;
  where?: Maybe<Challenge_Completition_Bool_Exp>;
};


export type Query_RootChallenge_Completition_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Completition_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Completition_Order_By>>;
  where?: Maybe<Challenge_Completition_Bool_Exp>;
};


export type Query_RootChallenge_Completition_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootEmotionArgs = {
  distinct_on?: Maybe<Array<Emotion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Emotion_Order_By>>;
  where?: Maybe<Emotion_Bool_Exp>;
};


export type Query_RootEmotion_AggregateArgs = {
  distinct_on?: Maybe<Array<Emotion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Emotion_Order_By>>;
  where?: Maybe<Emotion_Bool_Exp>;
};


export type Query_RootEmotion_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
   __typename?: 'subscription_root';
  category: Array<Category>;
  category_aggregate: Category_Aggregate;
  category_by_pk?: Maybe<Category>;
  challenge: Array<Challenge>;
  challenge_aggregate: Challenge_Aggregate;
  challenge_by_pk?: Maybe<Challenge>;
  challenge_completition: Array<Challenge_Completition>;
  challenge_completition_aggregate: Challenge_Completition_Aggregate;
  challenge_completition_by_pk?: Maybe<Challenge_Completition>;
  emotion: Array<Emotion>;
  emotion_aggregate: Emotion_Aggregate;
  emotion_by_pk?: Maybe<Emotion>;
  user: Array<User>;
  user_aggregate: User_Aggregate;
  user_by_pk?: Maybe<User>;
};


export type Subscription_RootCategoryArgs = {
  distinct_on?: Maybe<Array<Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Category_Order_By>>;
  where?: Maybe<Category_Bool_Exp>;
};


export type Subscription_RootCategory_AggregateArgs = {
  distinct_on?: Maybe<Array<Category_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Category_Order_By>>;
  where?: Maybe<Category_Bool_Exp>;
};


export type Subscription_RootCategory_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootChallengeArgs = {
  distinct_on?: Maybe<Array<Challenge_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Order_By>>;
  where?: Maybe<Challenge_Bool_Exp>;
};


export type Subscription_RootChallenge_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Order_By>>;
  where?: Maybe<Challenge_Bool_Exp>;
};


export type Subscription_RootChallenge_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootChallenge_CompletitionArgs = {
  distinct_on?: Maybe<Array<Challenge_Completition_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Completition_Order_By>>;
  where?: Maybe<Challenge_Completition_Bool_Exp>;
};


export type Subscription_RootChallenge_Completition_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Completition_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Completition_Order_By>>;
  where?: Maybe<Challenge_Completition_Bool_Exp>;
};


export type Subscription_RootChallenge_Completition_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootEmotionArgs = {
  distinct_on?: Maybe<Array<Emotion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Emotion_Order_By>>;
  where?: Maybe<Emotion_Bool_Exp>;
};


export type Subscription_RootEmotion_AggregateArgs = {
  distinct_on?: Maybe<Array<Emotion_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Emotion_Order_By>>;
  where?: Maybe<Emotion_Bool_Exp>;
};


export type Subscription_RootEmotion_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

export type User = {
   __typename?: 'user';
  avatar?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
};

export type User_Aggregate = {
   __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

export type User_Aggregate_Fields = {
   __typename?: 'user_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type User_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<User_Max_Order_By>;
  min?: Maybe<User_Min_Order_By>;
};

export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

export type User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  avatar?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

export enum User_Constraint {
  UserPkey = 'user_pkey'
}

export type User_Insert_Input = {
  avatar?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

export type User_Max_Fields = {
   __typename?: 'user_max_fields';
  avatar?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type User_Max_Order_By = {
  avatar?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export type User_Min_Fields = {
   __typename?: 'user_min_fields';
  avatar?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type User_Min_Order_By = {
  avatar?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export type User_Mutation_Response = {
   __typename?: 'user_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<User>;
};

export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};

export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

export type User_Order_By = {
  avatar?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export enum User_Select_Column {
  Avatar = 'avatar',
  Id = 'id',
  Name = 'name'
}

export type User_Set_Input = {
  avatar?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

export enum User_Update_Column {
  Avatar = 'avatar',
  Id = 'id',
  Name = 'name'
}


export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type ChallengesQueryVariables = {};


export type ChallengesQuery = (
  { __typename?: 'query_root' }
  & { challenge: Array<(
    { __typename?: 'challenge' }
    & Pick<Challenge, 'id' | 'name' | 'category' | 'description'>
  )> }
);

export type ChallengeQueryVariables = {
  id: Scalars['uuid'];
};


export type ChallengeQuery = (
  { __typename?: 'query_root' }
  & { challenge_by_pk?: Maybe<(
    { __typename?: 'challenge' }
    & Pick<Challenge, 'id' | 'name' | 'category' | 'description'>
  )> }
);


export const ChallengesDocument = gql`
    query Challenges {
  challenge {
    id
    name
    category
    description
  }
}
    `;
export type ChallengesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ChallengesQuery, ChallengesQueryVariables>, 'query'>;

    export const ChallengesComponent = (props: ChallengesComponentProps) => (
      <ApolloReactComponents.Query<ChallengesQuery, ChallengesQueryVariables> query={ChallengesDocument} {...props} />
    );
    

/**
 * __useChallengesQuery__
 *
 * To run a query within a React component, call `useChallengesQuery` and pass it any options that fit your needs.
 * When your component renders, `useChallengesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChallengesQuery({
 *   variables: {
 *   },
 * });
 */
export function useChallengesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ChallengesQuery, ChallengesQueryVariables>) {
        return ApolloReactHooks.useQuery<ChallengesQuery, ChallengesQueryVariables>(ChallengesDocument, baseOptions);
      }
export function useChallengesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ChallengesQuery, ChallengesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ChallengesQuery, ChallengesQueryVariables>(ChallengesDocument, baseOptions);
        }
export type ChallengesQueryHookResult = ReturnType<typeof useChallengesQuery>;
export type ChallengesLazyQueryHookResult = ReturnType<typeof useChallengesLazyQuery>;
export type ChallengesQueryResult = ApolloReactCommon.QueryResult<ChallengesQuery, ChallengesQueryVariables>;
export const ChallengeDocument = gql`
    query Challenge($id: uuid!) {
  challenge_by_pk(id: $id) {
    id
    name
    category
    description
  }
}
    `;
export type ChallengeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ChallengeQuery, ChallengeQueryVariables>, 'query'> & ({ variables: ChallengeQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ChallengeComponent = (props: ChallengeComponentProps) => (
      <ApolloReactComponents.Query<ChallengeQuery, ChallengeQueryVariables> query={ChallengeDocument} {...props} />
    );
    

/**
 * __useChallengeQuery__
 *
 * To run a query within a React component, call `useChallengeQuery` and pass it any options that fit your needs.
 * When your component renders, `useChallengeQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChallengeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useChallengeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ChallengeQuery, ChallengeQueryVariables>) {
        return ApolloReactHooks.useQuery<ChallengeQuery, ChallengeQueryVariables>(ChallengeDocument, baseOptions);
      }
export function useChallengeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ChallengeQuery, ChallengeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ChallengeQuery, ChallengeQueryVariables>(ChallengeDocument, baseOptions);
        }
export type ChallengeQueryHookResult = ReturnType<typeof useChallengeQuery>;
export type ChallengeLazyQueryHookResult = ReturnType<typeof useChallengeLazyQuery>;
export type ChallengeQueryResult = ApolloReactCommon.QueryResult<ChallengeQuery, ChallengeQueryVariables>;