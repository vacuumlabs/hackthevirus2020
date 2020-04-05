import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
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
  challenges: Array<Challenge>;
  challenges_aggregate: Challenge_Aggregate;
  value: Scalars['String'];
};


export type CategoryChallengesArgs = {
  distinct_on?: Maybe<Array<Challenge_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Order_By>>;
  where?: Maybe<Challenge_Bool_Exp>;
};


export type CategoryChallenges_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Order_By>>;
  where?: Maybe<Challenge_Bool_Exp>;
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
  challenges?: Maybe<Challenge_Bool_Exp>;
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
  challenges?: Maybe<Challenge_Arr_Rel_Insert_Input>;
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
  challenges_aggregate?: Maybe<Challenge_Aggregate_Order_By>;
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
  challenge_assignments: Array<Challenge_Assignment>;
  challenge_assignments_aggregate: Challenge_Assignment_Aggregate;
  description: Scalars['String'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  points: Scalars['Int'];
};


export type ChallengeChallenge_AssignmentsArgs = {
  distinct_on?: Maybe<Array<Challenge_Assignment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Assignment_Order_By>>;
  where?: Maybe<Challenge_Assignment_Bool_Exp>;
};


export type ChallengeChallenge_Assignments_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Assignment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Assignment_Order_By>>;
  where?: Maybe<Challenge_Assignment_Bool_Exp>;
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

export type Challenge_Assignment = {
   __typename?: 'challenge_assignment';
  assigned_at: Scalars['timestamptz'];
  attachment?: Maybe<Scalars['String']>;
  challenge: Challenge;
  challenge_id: Scalars['uuid'];
  completed_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  mood?: Maybe<Mood_Enum>;
  note?: Maybe<Scalars['String']>;
  user: User;
  user_id: Scalars['uuid'];
};

export type Challenge_Assignment_Aggregate = {
   __typename?: 'challenge_assignment_aggregate';
  aggregate?: Maybe<Challenge_Assignment_Aggregate_Fields>;
  nodes: Array<Challenge_Assignment>;
};

export type Challenge_Assignment_Aggregate_Fields = {
   __typename?: 'challenge_assignment_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Challenge_Assignment_Max_Fields>;
  min?: Maybe<Challenge_Assignment_Min_Fields>;
};


export type Challenge_Assignment_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Challenge_Assignment_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Challenge_Assignment_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Challenge_Assignment_Max_Order_By>;
  min?: Maybe<Challenge_Assignment_Min_Order_By>;
};

export type Challenge_Assignment_Arr_Rel_Insert_Input = {
  data: Array<Challenge_Assignment_Insert_Input>;
  on_conflict?: Maybe<Challenge_Assignment_On_Conflict>;
};

export type Challenge_Assignment_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Challenge_Assignment_Bool_Exp>>>;
  _not?: Maybe<Challenge_Assignment_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Challenge_Assignment_Bool_Exp>>>;
  assigned_at?: Maybe<Timestamptz_Comparison_Exp>;
  attachment?: Maybe<String_Comparison_Exp>;
  challenge?: Maybe<Challenge_Bool_Exp>;
  challenge_id?: Maybe<Uuid_Comparison_Exp>;
  completed_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  mood?: Maybe<Mood_Enum_Comparison_Exp>;
  note?: Maybe<String_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

export enum Challenge_Assignment_Constraint {
  ChallengeCompletitionPkey = 'challenge_completition_pkey'
}

export type Challenge_Assignment_Insert_Input = {
  assigned_at?: Maybe<Scalars['timestamptz']>;
  attachment?: Maybe<Scalars['String']>;
  challenge?: Maybe<Challenge_Obj_Rel_Insert_Input>;
  challenge_id?: Maybe<Scalars['uuid']>;
  completed_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  mood?: Maybe<Mood_Enum>;
  note?: Maybe<Scalars['String']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

export type Challenge_Assignment_Max_Fields = {
   __typename?: 'challenge_assignment_max_fields';
  assigned_at?: Maybe<Scalars['timestamptz']>;
  attachment?: Maybe<Scalars['String']>;
  completed_at?: Maybe<Scalars['timestamptz']>;
  note?: Maybe<Scalars['String']>;
};

export type Challenge_Assignment_Max_Order_By = {
  assigned_at?: Maybe<Order_By>;
  attachment?: Maybe<Order_By>;
  completed_at?: Maybe<Order_By>;
  note?: Maybe<Order_By>;
};

export type Challenge_Assignment_Min_Fields = {
   __typename?: 'challenge_assignment_min_fields';
  assigned_at?: Maybe<Scalars['timestamptz']>;
  attachment?: Maybe<Scalars['String']>;
  completed_at?: Maybe<Scalars['timestamptz']>;
  note?: Maybe<Scalars['String']>;
};

export type Challenge_Assignment_Min_Order_By = {
  assigned_at?: Maybe<Order_By>;
  attachment?: Maybe<Order_By>;
  completed_at?: Maybe<Order_By>;
  note?: Maybe<Order_By>;
};

export type Challenge_Assignment_Mutation_Response = {
   __typename?: 'challenge_assignment_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Challenge_Assignment>;
};

export type Challenge_Assignment_Obj_Rel_Insert_Input = {
  data: Challenge_Assignment_Insert_Input;
  on_conflict?: Maybe<Challenge_Assignment_On_Conflict>;
};

export type Challenge_Assignment_On_Conflict = {
  constraint: Challenge_Assignment_Constraint;
  update_columns: Array<Challenge_Assignment_Update_Column>;
  where?: Maybe<Challenge_Assignment_Bool_Exp>;
};

export type Challenge_Assignment_Order_By = {
  assigned_at?: Maybe<Order_By>;
  attachment?: Maybe<Order_By>;
  challenge?: Maybe<Challenge_Order_By>;
  challenge_id?: Maybe<Order_By>;
  completed_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mood?: Maybe<Order_By>;
  note?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
};

export enum Challenge_Assignment_Select_Column {
  AssignedAt = 'assigned_at',
  Attachment = 'attachment',
  ChallengeId = 'challenge_id',
  CompletedAt = 'completed_at',
  Id = 'id',
  Mood = 'mood',
  Note = 'note',
  UserId = 'user_id'
}

export type Challenge_Assignment_Set_Input = {
  assigned_at?: Maybe<Scalars['timestamptz']>;
  attachment?: Maybe<Scalars['String']>;
  challenge_id?: Maybe<Scalars['uuid']>;
  completed_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  mood?: Maybe<Mood_Enum>;
  note?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

export enum Challenge_Assignment_Update_Column {
  AssignedAt = 'assigned_at',
  Attachment = 'attachment',
  ChallengeId = 'challenge_id',
  CompletedAt = 'completed_at',
  Id = 'id',
  Mood = 'mood',
  Note = 'note',
  UserId = 'user_id'
}

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
  challenge_assignments?: Maybe<Challenge_Assignment_Bool_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  points?: Maybe<Int_Comparison_Exp>;
};

export enum Challenge_Constraint {
  ChallengeTemplatePkey = 'challenge_template_pkey'
}

export type Challenge_Inc_Input = {
  points?: Maybe<Scalars['Int']>;
};

export type Challenge_Insert_Input = {
  category?: Maybe<Category_Enum>;
  challenge_assignments?: Maybe<Challenge_Assignment_Arr_Rel_Insert_Input>;
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
  challenge_assignments_aggregate?: Maybe<Challenge_Assignment_Aggregate_Order_By>;
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

export type Member = {
   __typename?: 'member';
  team: Team;
  team_id: Scalars['uuid'];
  user: User;
  user_id: Scalars['uuid'];
};

export type Member_Aggregate = {
   __typename?: 'member_aggregate';
  aggregate?: Maybe<Member_Aggregate_Fields>;
  nodes: Array<Member>;
};

export type Member_Aggregate_Fields = {
   __typename?: 'member_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
};


export type Member_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Member_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Member_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
};

export type Member_Arr_Rel_Insert_Input = {
  data: Array<Member_Insert_Input>;
  on_conflict?: Maybe<Member_On_Conflict>;
};

export type Member_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Member_Bool_Exp>>>;
  _not?: Maybe<Member_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Member_Bool_Exp>>>;
  team?: Maybe<Team_Bool_Exp>;
  team_id?: Maybe<Uuid_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

export enum Member_Constraint {
  MemberPkey = 'member_pkey',
  MemberTeamIdUserIdKey = 'member_team_id_user_id_key',
  MemberUserIdKey = 'member_user_id_key'
}

export type Member_Insert_Input = {
  team?: Maybe<Team_Obj_Rel_Insert_Input>;
  team_id?: Maybe<Scalars['uuid']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

export type Member_Mutation_Response = {
   __typename?: 'member_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Member>;
};

export type Member_Obj_Rel_Insert_Input = {
  data: Member_Insert_Input;
  on_conflict?: Maybe<Member_On_Conflict>;
};

export type Member_On_Conflict = {
  constraint: Member_Constraint;
  update_columns: Array<Member_Update_Column>;
  where?: Maybe<Member_Bool_Exp>;
};

export type Member_Order_By = {
  team?: Maybe<Team_Order_By>;
  team_id?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
};

export enum Member_Select_Column {
  TeamId = 'team_id',
  UserId = 'user_id'
}

export type Member_Set_Input = {
  team_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

export enum Member_Update_Column {
  TeamId = 'team_id',
  UserId = 'user_id'
}

export type Mood = {
   __typename?: 'mood';
  value: Scalars['String'];
};

export type Mood_Aggregate = {
   __typename?: 'mood_aggregate';
  aggregate?: Maybe<Mood_Aggregate_Fields>;
  nodes: Array<Mood>;
};

export type Mood_Aggregate_Fields = {
   __typename?: 'mood_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Mood_Max_Fields>;
  min?: Maybe<Mood_Min_Fields>;
};


export type Mood_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Mood_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Mood_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Mood_Max_Order_By>;
  min?: Maybe<Mood_Min_Order_By>;
};

export type Mood_Arr_Rel_Insert_Input = {
  data: Array<Mood_Insert_Input>;
  on_conflict?: Maybe<Mood_On_Conflict>;
};

export type Mood_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Mood_Bool_Exp>>>;
  _not?: Maybe<Mood_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Mood_Bool_Exp>>>;
  value?: Maybe<String_Comparison_Exp>;
};

export enum Mood_Constraint {
  EmotionPkey = 'emotion_pkey'
}

export enum Mood_Enum {
  Negative = 'NEGATIVE',
  Neutral = 'NEUTRAL',
  Positive = 'POSITIVE'
}

export type Mood_Enum_Comparison_Exp = {
  _eq?: Maybe<Mood_Enum>;
  _in?: Maybe<Array<Mood_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Mood_Enum>;
  _nin?: Maybe<Array<Mood_Enum>>;
};

export type Mood_Insert_Input = {
  value?: Maybe<Scalars['String']>;
};

export type Mood_Max_Fields = {
   __typename?: 'mood_max_fields';
  value?: Maybe<Scalars['String']>;
};

export type Mood_Max_Order_By = {
  value?: Maybe<Order_By>;
};

export type Mood_Min_Fields = {
   __typename?: 'mood_min_fields';
  value?: Maybe<Scalars['String']>;
};

export type Mood_Min_Order_By = {
  value?: Maybe<Order_By>;
};

export type Mood_Mutation_Response = {
   __typename?: 'mood_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Mood>;
};

export type Mood_Obj_Rel_Insert_Input = {
  data: Mood_Insert_Input;
  on_conflict?: Maybe<Mood_On_Conflict>;
};

export type Mood_On_Conflict = {
  constraint: Mood_Constraint;
  update_columns: Array<Mood_Update_Column>;
  where?: Maybe<Mood_Bool_Exp>;
};

export type Mood_Order_By = {
  value?: Maybe<Order_By>;
};

export enum Mood_Select_Column {
  Value = 'value'
}

export type Mood_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

export enum Mood_Update_Column {
  Value = 'value'
}

export type Mutation_Root = {
   __typename?: 'mutation_root';
  delete_category?: Maybe<Category_Mutation_Response>;
  delete_challenge?: Maybe<Challenge_Mutation_Response>;
  delete_challenge_assignment?: Maybe<Challenge_Assignment_Mutation_Response>;
  delete_member?: Maybe<Member_Mutation_Response>;
  delete_mood?: Maybe<Mood_Mutation_Response>;
  delete_team?: Maybe<Team_Mutation_Response>;
  delete_user?: Maybe<User_Mutation_Response>;
  insert_category?: Maybe<Category_Mutation_Response>;
  insert_challenge?: Maybe<Challenge_Mutation_Response>;
  insert_challenge_assignment?: Maybe<Challenge_Assignment_Mutation_Response>;
  insert_member?: Maybe<Member_Mutation_Response>;
  insert_mood?: Maybe<Mood_Mutation_Response>;
  insert_team?: Maybe<Team_Mutation_Response>;
  insert_user?: Maybe<User_Mutation_Response>;
  update_category?: Maybe<Category_Mutation_Response>;
  update_challenge?: Maybe<Challenge_Mutation_Response>;
  update_challenge_assignment?: Maybe<Challenge_Assignment_Mutation_Response>;
  update_member?: Maybe<Member_Mutation_Response>;
  update_mood?: Maybe<Mood_Mutation_Response>;
  update_team?: Maybe<Team_Mutation_Response>;
  update_user?: Maybe<User_Mutation_Response>;
};


export type Mutation_RootDelete_CategoryArgs = {
  where: Category_Bool_Exp;
};


export type Mutation_RootDelete_ChallengeArgs = {
  where: Challenge_Bool_Exp;
};


export type Mutation_RootDelete_Challenge_AssignmentArgs = {
  where: Challenge_Assignment_Bool_Exp;
};


export type Mutation_RootDelete_MemberArgs = {
  where: Member_Bool_Exp;
};


export type Mutation_RootDelete_MoodArgs = {
  where: Mood_Bool_Exp;
};


export type Mutation_RootDelete_TeamArgs = {
  where: Team_Bool_Exp;
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


export type Mutation_RootInsert_Challenge_AssignmentArgs = {
  objects: Array<Challenge_Assignment_Insert_Input>;
  on_conflict?: Maybe<Challenge_Assignment_On_Conflict>;
};


export type Mutation_RootInsert_MemberArgs = {
  objects: Array<Member_Insert_Input>;
  on_conflict?: Maybe<Member_On_Conflict>;
};


export type Mutation_RootInsert_MoodArgs = {
  objects: Array<Mood_Insert_Input>;
  on_conflict?: Maybe<Mood_On_Conflict>;
};


export type Mutation_RootInsert_TeamArgs = {
  objects: Array<Team_Insert_Input>;
  on_conflict?: Maybe<Team_On_Conflict>;
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


export type Mutation_RootUpdate_Challenge_AssignmentArgs = {
  _set?: Maybe<Challenge_Assignment_Set_Input>;
  where: Challenge_Assignment_Bool_Exp;
};


export type Mutation_RootUpdate_MemberArgs = {
  _set?: Maybe<Member_Set_Input>;
  where: Member_Bool_Exp;
};


export type Mutation_RootUpdate_MoodArgs = {
  _set?: Maybe<Mood_Set_Input>;
  where: Mood_Bool_Exp;
};


export type Mutation_RootUpdate_TeamArgs = {
  _set?: Maybe<Team_Set_Input>;
  where: Team_Bool_Exp;
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
  challenge_assignment: Array<Challenge_Assignment>;
  challenge_assignment_aggregate: Challenge_Assignment_Aggregate;
  challenge_assignment_by_pk?: Maybe<Challenge_Assignment>;
  challenge_by_pk?: Maybe<Challenge>;
  member: Array<Member>;
  member_aggregate: Member_Aggregate;
  member_by_pk?: Maybe<Member>;
  mood: Array<Mood>;
  mood_aggregate: Mood_Aggregate;
  mood_by_pk?: Maybe<Mood>;
  team: Array<Team>;
  team_aggregate: Team_Aggregate;
  team_by_pk?: Maybe<Team>;
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


export type Query_RootChallenge_AssignmentArgs = {
  distinct_on?: Maybe<Array<Challenge_Assignment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Assignment_Order_By>>;
  where?: Maybe<Challenge_Assignment_Bool_Exp>;
};


export type Query_RootChallenge_Assignment_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Assignment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Assignment_Order_By>>;
  where?: Maybe<Challenge_Assignment_Bool_Exp>;
};


export type Query_RootChallenge_Assignment_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootChallenge_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootMemberArgs = {
  distinct_on?: Maybe<Array<Member_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Member_Order_By>>;
  where?: Maybe<Member_Bool_Exp>;
};


export type Query_RootMember_AggregateArgs = {
  distinct_on?: Maybe<Array<Member_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Member_Order_By>>;
  where?: Maybe<Member_Bool_Exp>;
};


export type Query_RootMember_By_PkArgs = {
  team_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


export type Query_RootMoodArgs = {
  distinct_on?: Maybe<Array<Mood_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mood_Order_By>>;
  where?: Maybe<Mood_Bool_Exp>;
};


export type Query_RootMood_AggregateArgs = {
  distinct_on?: Maybe<Array<Mood_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mood_Order_By>>;
  where?: Maybe<Mood_Bool_Exp>;
};


export type Query_RootMood_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootTeamArgs = {
  distinct_on?: Maybe<Array<Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Order_By>>;
  where?: Maybe<Team_Bool_Exp>;
};


export type Query_RootTeam_AggregateArgs = {
  distinct_on?: Maybe<Array<Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Order_By>>;
  where?: Maybe<Team_Bool_Exp>;
};


export type Query_RootTeam_By_PkArgs = {
  id: Scalars['uuid'];
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
  challenge_assignment: Array<Challenge_Assignment>;
  challenge_assignment_aggregate: Challenge_Assignment_Aggregate;
  challenge_assignment_by_pk?: Maybe<Challenge_Assignment>;
  challenge_by_pk?: Maybe<Challenge>;
  member: Array<Member>;
  member_aggregate: Member_Aggregate;
  member_by_pk?: Maybe<Member>;
  mood: Array<Mood>;
  mood_aggregate: Mood_Aggregate;
  mood_by_pk?: Maybe<Mood>;
  team: Array<Team>;
  team_aggregate: Team_Aggregate;
  team_by_pk?: Maybe<Team>;
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


export type Subscription_RootChallenge_AssignmentArgs = {
  distinct_on?: Maybe<Array<Challenge_Assignment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Assignment_Order_By>>;
  where?: Maybe<Challenge_Assignment_Bool_Exp>;
};


export type Subscription_RootChallenge_Assignment_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Assignment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Assignment_Order_By>>;
  where?: Maybe<Challenge_Assignment_Bool_Exp>;
};


export type Subscription_RootChallenge_Assignment_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootChallenge_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMemberArgs = {
  distinct_on?: Maybe<Array<Member_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Member_Order_By>>;
  where?: Maybe<Member_Bool_Exp>;
};


export type Subscription_RootMember_AggregateArgs = {
  distinct_on?: Maybe<Array<Member_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Member_Order_By>>;
  where?: Maybe<Member_Bool_Exp>;
};


export type Subscription_RootMember_By_PkArgs = {
  team_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


export type Subscription_RootMoodArgs = {
  distinct_on?: Maybe<Array<Mood_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mood_Order_By>>;
  where?: Maybe<Mood_Bool_Exp>;
};


export type Subscription_RootMood_AggregateArgs = {
  distinct_on?: Maybe<Array<Mood_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mood_Order_By>>;
  where?: Maybe<Mood_Bool_Exp>;
};


export type Subscription_RootMood_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootTeamArgs = {
  distinct_on?: Maybe<Array<Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Order_By>>;
  where?: Maybe<Team_Bool_Exp>;
};


export type Subscription_RootTeam_AggregateArgs = {
  distinct_on?: Maybe<Array<Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Order_By>>;
  where?: Maybe<Team_Bool_Exp>;
};


export type Subscription_RootTeam_By_PkArgs = {
  id: Scalars['uuid'];
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

export type Team = {
   __typename?: 'team';
  code: Scalars['String'];
  id: Scalars['uuid'];
  members: Array<Member>;
  members_aggregate: Member_Aggregate;
  name: Scalars['String'];
  owner: User;
  owner_id: Scalars['uuid'];
};


export type TeamMembersArgs = {
  distinct_on?: Maybe<Array<Member_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Member_Order_By>>;
  where?: Maybe<Member_Bool_Exp>;
};


export type TeamMembers_AggregateArgs = {
  distinct_on?: Maybe<Array<Member_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Member_Order_By>>;
  where?: Maybe<Member_Bool_Exp>;
};

export type Team_Aggregate = {
   __typename?: 'team_aggregate';
  aggregate?: Maybe<Team_Aggregate_Fields>;
  nodes: Array<Team>;
};

export type Team_Aggregate_Fields = {
   __typename?: 'team_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Team_Max_Fields>;
  min?: Maybe<Team_Min_Fields>;
};


export type Team_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Team_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Team_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Team_Max_Order_By>;
  min?: Maybe<Team_Min_Order_By>;
};

export type Team_Arr_Rel_Insert_Input = {
  data: Array<Team_Insert_Input>;
  on_conflict?: Maybe<Team_On_Conflict>;
};

export type Team_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Team_Bool_Exp>>>;
  _not?: Maybe<Team_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Team_Bool_Exp>>>;
  code?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  members?: Maybe<Member_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  owner?: Maybe<User_Bool_Exp>;
  owner_id?: Maybe<Uuid_Comparison_Exp>;
};

export enum Team_Constraint {
  TeamCodeKey = 'team_code_key',
  TeamOwnerIdKey = 'team_owner_id_key',
  TeamPkey = 'team_pkey'
}

export type Team_Insert_Input = {
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  members?: Maybe<Member_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<User_Obj_Rel_Insert_Input>;
  owner_id?: Maybe<Scalars['uuid']>;
};

export type Team_Max_Fields = {
   __typename?: 'team_max_fields';
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Team_Max_Order_By = {
  code?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export type Team_Min_Fields = {
   __typename?: 'team_min_fields';
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Team_Min_Order_By = {
  code?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export type Team_Mutation_Response = {
   __typename?: 'team_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Team>;
};

export type Team_Obj_Rel_Insert_Input = {
  data: Team_Insert_Input;
  on_conflict?: Maybe<Team_On_Conflict>;
};

export type Team_On_Conflict = {
  constraint: Team_Constraint;
  update_columns: Array<Team_Update_Column>;
  where?: Maybe<Team_Bool_Exp>;
};

export type Team_Order_By = {
  code?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  members_aggregate?: Maybe<Member_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  owner?: Maybe<User_Order_By>;
  owner_id?: Maybe<Order_By>;
};

export enum Team_Select_Column {
  Code = 'code',
  Id = 'id',
  Name = 'name',
  OwnerId = 'owner_id'
}

export type Team_Set_Input = {
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['uuid']>;
};

export enum Team_Update_Column {
  Code = 'code',
  Id = 'id',
  Name = 'name',
  OwnerId = 'owner_id'
}


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
  challenge_completitions: Array<Challenge_Assignment>;
  challenge_completitions_aggregate: Challenge_Assignment_Aggregate;
  id: Scalars['uuid'];
  membership?: Maybe<Member>;
  name: Scalars['String'];
  owned_team?: Maybe<Team>;
};


export type UserChallenge_CompletitionsArgs = {
  distinct_on?: Maybe<Array<Challenge_Assignment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Assignment_Order_By>>;
  where?: Maybe<Challenge_Assignment_Bool_Exp>;
};


export type UserChallenge_Completitions_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Assignment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Assignment_Order_By>>;
  where?: Maybe<Challenge_Assignment_Bool_Exp>;
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
  challenge_completitions?: Maybe<Challenge_Assignment_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  membership?: Maybe<Member_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  owned_team?: Maybe<Team_Bool_Exp>;
};

export enum User_Constraint {
  UserPkey = 'user_pkey'
}

export type User_Insert_Input = {
  avatar?: Maybe<Scalars['String']>;
  challenge_completitions?: Maybe<Challenge_Assignment_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  membership?: Maybe<Member_Obj_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  owned_team?: Maybe<Team_Obj_Rel_Insert_Input>;
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
  challenge_completitions_aggregate?: Maybe<Challenge_Assignment_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  membership?: Maybe<Member_Order_By>;
  name?: Maybe<Order_By>;
  owned_team?: Maybe<Team_Order_By>;
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

export type AcceptChallengeMutationVariables = {
  challenge_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


export type AcceptChallengeMutation = (
  { __typename?: 'mutation_root' }
  & { insert_challenge_assignment?: Maybe<(
    { __typename?: 'challenge_assignment_mutation_response' }
    & Pick<Challenge_Assignment_Mutation_Response, 'affected_rows'>
  )> }
);

export type CompleteChallengeMutationVariables = {
  assignment_id: Scalars['uuid'];
  completed_at: Scalars['timestamptz'];
  mood: Mood_Enum;
  note?: Maybe<Scalars['String']>;
};


export type CompleteChallengeMutation = (
  { __typename?: 'mutation_root' }
  & { update_challenge_assignment?: Maybe<(
    { __typename?: 'challenge_assignment_mutation_response' }
    & Pick<Challenge_Assignment_Mutation_Response, 'affected_rows'>
  )> }
);

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
    & { challenge_assignments: Array<(
      { __typename?: 'challenge_assignment' }
      & Pick<Challenge_Assignment, 'id' | 'assigned_at' | 'completed_at' | 'mood' | 'note'>
    )> }
  )> }
);

export type AcceptedChallengesQueryVariables = {
  user_id: Scalars['uuid'];
};


export type AcceptedChallengesQuery = (
  { __typename?: 'query_root' }
  & { challenge_assignment: Array<(
    { __typename?: 'challenge_assignment' }
    & { challenge: (
      { __typename?: 'challenge' }
      & Pick<Challenge, 'id' | 'category' | 'description' | 'name'>
    ) }
  )> }
);

export type CompletedChallengesQueryVariables = {
  user_id: Scalars['uuid'];
};


export type CompletedChallengesQuery = (
  { __typename?: 'query_root' }
  & { challenge_assignment: Array<(
    { __typename?: 'challenge_assignment' }
    & { challenge: (
      { __typename?: 'challenge' }
      & Pick<Challenge, 'id' | 'category' | 'description' | 'name'>
    ) }
  )> }
);

export type ChallengeCategoriesQueryVariables = {};


export type ChallengeCategoriesQuery = (
  { __typename?: 'query_root' }
  & { category: Array<(
    { __typename?: 'category' }
    & Pick<Category, 'value'>
  )> }
);

export type ChallengesByCategoryQueryVariables = {
  category: Scalars['String'];
  user_id: Scalars['uuid'];
};


export type ChallengesByCategoryQuery = (
  { __typename?: 'query_root' }
  & { category_by_pk?: Maybe<(
    { __typename?: 'category' }
    & { challenges: Array<(
      { __typename?: 'challenge' }
      & Pick<Challenge, 'id' | 'name' | 'description'>
    )> }
  )> }
);


export const AcceptChallengeDocument = gql`
    mutation AcceptChallenge($challenge_id: uuid!, $user_id: uuid!) {
  insert_challenge_assignment(objects: {challenge_id: $challenge_id, user_id: $user_id}) {
    affected_rows
  }
}
    `;
export type AcceptChallengeMutationFn = ApolloReactCommon.MutationFunction<AcceptChallengeMutation, AcceptChallengeMutationVariables>;
export type AcceptChallengeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AcceptChallengeMutation, AcceptChallengeMutationVariables>, 'mutation'>;

    export const AcceptChallengeComponent = (props: AcceptChallengeComponentProps) => (
      <ApolloReactComponents.Mutation<AcceptChallengeMutation, AcceptChallengeMutationVariables> mutation={AcceptChallengeDocument} {...props} />
    );
    

/**
 * __useAcceptChallengeMutation__
 *
 * To run a mutation, you first call `useAcceptChallengeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcceptChallengeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acceptChallengeMutation, { data, loading, error }] = useAcceptChallengeMutation({
 *   variables: {
 *      challenge_id: // value for 'challenge_id'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useAcceptChallengeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AcceptChallengeMutation, AcceptChallengeMutationVariables>) {
        return ApolloReactHooks.useMutation<AcceptChallengeMutation, AcceptChallengeMutationVariables>(AcceptChallengeDocument, baseOptions);
      }
export type AcceptChallengeMutationHookResult = ReturnType<typeof useAcceptChallengeMutation>;
export type AcceptChallengeMutationResult = ApolloReactCommon.MutationResult<AcceptChallengeMutation>;
export type AcceptChallengeMutationOptions = ApolloReactCommon.BaseMutationOptions<AcceptChallengeMutation, AcceptChallengeMutationVariables>;
export const CompleteChallengeDocument = gql`
    mutation CompleteChallenge($assignment_id: uuid!, $completed_at: timestamptz!, $mood: mood_enum!, $note: String) {
  update_challenge_assignment(where: {id: {_eq: $assignment_id}}, _set: {completed_at: $completed_at, mood: $mood, note: $note}) {
    affected_rows
  }
}
    `;
export type CompleteChallengeMutationFn = ApolloReactCommon.MutationFunction<CompleteChallengeMutation, CompleteChallengeMutationVariables>;
export type CompleteChallengeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CompleteChallengeMutation, CompleteChallengeMutationVariables>, 'mutation'>;

    export const CompleteChallengeComponent = (props: CompleteChallengeComponentProps) => (
      <ApolloReactComponents.Mutation<CompleteChallengeMutation, CompleteChallengeMutationVariables> mutation={CompleteChallengeDocument} {...props} />
    );
    

/**
 * __useCompleteChallengeMutation__
 *
 * To run a mutation, you first call `useCompleteChallengeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompleteChallengeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completeChallengeMutation, { data, loading, error }] = useCompleteChallengeMutation({
 *   variables: {
 *      assignment_id: // value for 'assignment_id'
 *      completed_at: // value for 'completed_at'
 *      mood: // value for 'mood'
 *      note: // value for 'note'
 *   },
 * });
 */
export function useCompleteChallengeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CompleteChallengeMutation, CompleteChallengeMutationVariables>) {
        return ApolloReactHooks.useMutation<CompleteChallengeMutation, CompleteChallengeMutationVariables>(CompleteChallengeDocument, baseOptions);
      }
export type CompleteChallengeMutationHookResult = ReturnType<typeof useCompleteChallengeMutation>;
export type CompleteChallengeMutationResult = ApolloReactCommon.MutationResult<CompleteChallengeMutation>;
export type CompleteChallengeMutationOptions = ApolloReactCommon.BaseMutationOptions<CompleteChallengeMutation, CompleteChallengeMutationVariables>;
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
    challenge_assignments {
      id
      assigned_at
      completed_at
      mood
      note
    }
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
export const AcceptedChallengesDocument = gql`
    query AcceptedChallenges($user_id: uuid!) {
  challenge_assignment(where: {user_id: {_eq: $user_id}, completed_at: {_is_null: true}}, order_by: {assigned_at: desc}) {
    challenge {
      id
      category
      description
      name
    }
  }
}
    `;
export type AcceptedChallengesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AcceptedChallengesQuery, AcceptedChallengesQueryVariables>, 'query'> & ({ variables: AcceptedChallengesQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const AcceptedChallengesComponent = (props: AcceptedChallengesComponentProps) => (
      <ApolloReactComponents.Query<AcceptedChallengesQuery, AcceptedChallengesQueryVariables> query={AcceptedChallengesDocument} {...props} />
    );
    

/**
 * __useAcceptedChallengesQuery__
 *
 * To run a query within a React component, call `useAcceptedChallengesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAcceptedChallengesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAcceptedChallengesQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useAcceptedChallengesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AcceptedChallengesQuery, AcceptedChallengesQueryVariables>) {
        return ApolloReactHooks.useQuery<AcceptedChallengesQuery, AcceptedChallengesQueryVariables>(AcceptedChallengesDocument, baseOptions);
      }
export function useAcceptedChallengesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AcceptedChallengesQuery, AcceptedChallengesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AcceptedChallengesQuery, AcceptedChallengesQueryVariables>(AcceptedChallengesDocument, baseOptions);
        }
export type AcceptedChallengesQueryHookResult = ReturnType<typeof useAcceptedChallengesQuery>;
export type AcceptedChallengesLazyQueryHookResult = ReturnType<typeof useAcceptedChallengesLazyQuery>;
export type AcceptedChallengesQueryResult = ApolloReactCommon.QueryResult<AcceptedChallengesQuery, AcceptedChallengesQueryVariables>;
export const CompletedChallengesDocument = gql`
    query CompletedChallenges($user_id: uuid!) {
  challenge_assignment(where: {user_id: {_eq: $user_id}, completed_at: {_is_null: false}}, order_by: {completed_at: desc}) {
    challenge {
      id
      category
      description
      name
    }
  }
}
    `;
export type CompletedChallengesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CompletedChallengesQuery, CompletedChallengesQueryVariables>, 'query'> & ({ variables: CompletedChallengesQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const CompletedChallengesComponent = (props: CompletedChallengesComponentProps) => (
      <ApolloReactComponents.Query<CompletedChallengesQuery, CompletedChallengesQueryVariables> query={CompletedChallengesDocument} {...props} />
    );
    

/**
 * __useCompletedChallengesQuery__
 *
 * To run a query within a React component, call `useCompletedChallengesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompletedChallengesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompletedChallengesQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useCompletedChallengesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CompletedChallengesQuery, CompletedChallengesQueryVariables>) {
        return ApolloReactHooks.useQuery<CompletedChallengesQuery, CompletedChallengesQueryVariables>(CompletedChallengesDocument, baseOptions);
      }
export function useCompletedChallengesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CompletedChallengesQuery, CompletedChallengesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CompletedChallengesQuery, CompletedChallengesQueryVariables>(CompletedChallengesDocument, baseOptions);
        }
export type CompletedChallengesQueryHookResult = ReturnType<typeof useCompletedChallengesQuery>;
export type CompletedChallengesLazyQueryHookResult = ReturnType<typeof useCompletedChallengesLazyQuery>;
export type CompletedChallengesQueryResult = ApolloReactCommon.QueryResult<CompletedChallengesQuery, CompletedChallengesQueryVariables>;
export const ChallengeCategoriesDocument = gql`
    query ChallengeCategories {
  category {
    value
  }
}
    `;
export type ChallengeCategoriesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ChallengeCategoriesQuery, ChallengeCategoriesQueryVariables>, 'query'>;

    export const ChallengeCategoriesComponent = (props: ChallengeCategoriesComponentProps) => (
      <ApolloReactComponents.Query<ChallengeCategoriesQuery, ChallengeCategoriesQueryVariables> query={ChallengeCategoriesDocument} {...props} />
    );
    

/**
 * __useChallengeCategoriesQuery__
 *
 * To run a query within a React component, call `useChallengeCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useChallengeCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChallengeCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useChallengeCategoriesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ChallengeCategoriesQuery, ChallengeCategoriesQueryVariables>) {
        return ApolloReactHooks.useQuery<ChallengeCategoriesQuery, ChallengeCategoriesQueryVariables>(ChallengeCategoriesDocument, baseOptions);
      }
export function useChallengeCategoriesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ChallengeCategoriesQuery, ChallengeCategoriesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ChallengeCategoriesQuery, ChallengeCategoriesQueryVariables>(ChallengeCategoriesDocument, baseOptions);
        }
export type ChallengeCategoriesQueryHookResult = ReturnType<typeof useChallengeCategoriesQuery>;
export type ChallengeCategoriesLazyQueryHookResult = ReturnType<typeof useChallengeCategoriesLazyQuery>;
export type ChallengeCategoriesQueryResult = ApolloReactCommon.QueryResult<ChallengeCategoriesQuery, ChallengeCategoriesQueryVariables>;
export const ChallengesByCategoryDocument = gql`
    query ChallengesByCategory($category: String!, $user_id: uuid!) {
  category_by_pk(value: $category) {
    challenges(where: {_not: {challenge_assignments: {user_id: {_eq: $user_id}}}}) {
      id
      name
      description
    }
  }
}
    `;
export type ChallengesByCategoryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ChallengesByCategoryQuery, ChallengesByCategoryQueryVariables>, 'query'> & ({ variables: ChallengesByCategoryQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ChallengesByCategoryComponent = (props: ChallengesByCategoryComponentProps) => (
      <ApolloReactComponents.Query<ChallengesByCategoryQuery, ChallengesByCategoryQueryVariables> query={ChallengesByCategoryDocument} {...props} />
    );
    

/**
 * __useChallengesByCategoryQuery__
 *
 * To run a query within a React component, call `useChallengesByCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useChallengesByCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChallengesByCategoryQuery({
 *   variables: {
 *      category: // value for 'category'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useChallengesByCategoryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ChallengesByCategoryQuery, ChallengesByCategoryQueryVariables>) {
        return ApolloReactHooks.useQuery<ChallengesByCategoryQuery, ChallengesByCategoryQueryVariables>(ChallengesByCategoryDocument, baseOptions);
      }
export function useChallengesByCategoryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ChallengesByCategoryQuery, ChallengesByCategoryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ChallengesByCategoryQuery, ChallengesByCategoryQueryVariables>(ChallengesByCategoryDocument, baseOptions);
        }
export type ChallengesByCategoryQueryHookResult = ReturnType<typeof useChallengesByCategoryQuery>;
export type ChallengesByCategoryLazyQueryHookResult = ReturnType<typeof useChallengesByCategoryLazyQuery>;
export type ChallengesByCategoryQueryResult = ApolloReactCommon.QueryResult<ChallengesByCategoryQuery, ChallengesByCategoryQueryVariables>;