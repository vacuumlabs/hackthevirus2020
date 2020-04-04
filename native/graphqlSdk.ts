import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
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

export type Assignment_Status = {
   __typename?: 'assignment_status';
  value: Scalars['String'];
};

export type Assignment_Status_Aggregate = {
   __typename?: 'assignment_status_aggregate';
  aggregate?: Maybe<Assignment_Status_Aggregate_Fields>;
  nodes: Array<Assignment_Status>;
};

export type Assignment_Status_Aggregate_Fields = {
   __typename?: 'assignment_status_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Assignment_Status_Max_Fields>;
  min?: Maybe<Assignment_Status_Min_Fields>;
};


export type Assignment_Status_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Assignment_Status_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Assignment_Status_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Assignment_Status_Max_Order_By>;
  min?: Maybe<Assignment_Status_Min_Order_By>;
};

export type Assignment_Status_Arr_Rel_Insert_Input = {
  data: Array<Assignment_Status_Insert_Input>;
  on_conflict?: Maybe<Assignment_Status_On_Conflict>;
};

export type Assignment_Status_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Assignment_Status_Bool_Exp>>>;
  _not?: Maybe<Assignment_Status_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Assignment_Status_Bool_Exp>>>;
  value?: Maybe<String_Comparison_Exp>;
};

export enum Assignment_Status_Constraint {
  AssignmentStatusPkey = 'assignment_status_pkey'
}

export enum Assignment_Status_Enum {
  Accepted = 'ACCEPTED',
  Completed = 'COMPLETED',
  Declined = 'DECLINED'
}

export type Assignment_Status_Enum_Comparison_Exp = {
  _eq?: Maybe<Assignment_Status_Enum>;
  _in?: Maybe<Array<Assignment_Status_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Assignment_Status_Enum>;
  _nin?: Maybe<Array<Assignment_Status_Enum>>;
};

export type Assignment_Status_Insert_Input = {
  value?: Maybe<Scalars['String']>;
};

export type Assignment_Status_Max_Fields = {
   __typename?: 'assignment_status_max_fields';
  value?: Maybe<Scalars['String']>;
};

export type Assignment_Status_Max_Order_By = {
  value?: Maybe<Order_By>;
};

export type Assignment_Status_Min_Fields = {
   __typename?: 'assignment_status_min_fields';
  value?: Maybe<Scalars['String']>;
};

export type Assignment_Status_Min_Order_By = {
  value?: Maybe<Order_By>;
};

export type Assignment_Status_Mutation_Response = {
   __typename?: 'assignment_status_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Assignment_Status>;
};

export type Assignment_Status_Obj_Rel_Insert_Input = {
  data: Assignment_Status_Insert_Input;
  on_conflict?: Maybe<Assignment_Status_On_Conflict>;
};

export type Assignment_Status_On_Conflict = {
  constraint: Assignment_Status_Constraint;
  update_columns: Array<Assignment_Status_Update_Column>;
  where?: Maybe<Assignment_Status_Bool_Exp>;
};

export type Assignment_Status_Order_By = {
  value?: Maybe<Order_By>;
};

export enum Assignment_Status_Select_Column {
  Value = 'value'
}

export type Assignment_Status_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

export enum Assignment_Status_Update_Column {
  Value = 'value'
}


export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
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
  assignments: Array<Challenge_Assignment>;
  assignments_aggregate: Challenge_Assignment_Aggregate;
  challenger: User;
  challenger_id: Scalars['uuid'];
  end?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  start: Scalars['timestamptz'];
  team: Team;
  team_id: Scalars['uuid'];
  template: Challenge_Template;
  template_id: Scalars['uuid'];
};


export type ChallengeAssignmentsArgs = {
  distinct_on?: Maybe<Array<Challenge_Assignment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Assignment_Order_By>>;
  where?: Maybe<Challenge_Assignment_Bool_Exp>;
};


export type ChallengeAssignments_AggregateArgs = {
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
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Challenge_Max_Fields>;
  min?: Maybe<Challenge_Min_Fields>;
};


export type Challenge_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Challenge_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Challenge_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Challenge_Max_Order_By>;
  min?: Maybe<Challenge_Min_Order_By>;
};

export type Challenge_Arr_Rel_Insert_Input = {
  data: Array<Challenge_Insert_Input>;
  on_conflict?: Maybe<Challenge_On_Conflict>;
};

export type Challenge_Assignment = {
   __typename?: 'challenge_assignment';
  assigned: Scalars['timestamptz'];
  assignment_status: Assignment_Status_Enum;
  challenge: Challenge;
  challenge_id: Scalars['uuid'];
  id: Scalars['uuid'];
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
  assigned?: Maybe<Timestamptz_Comparison_Exp>;
  assignment_status?: Maybe<Assignment_Status_Enum_Comparison_Exp>;
  challenge?: Maybe<Challenge_Bool_Exp>;
  challenge_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

export enum Challenge_Assignment_Constraint {
  ChallengeAsignmentPkey = 'challenge_asignment_pkey'
}

export type Challenge_Assignment_Insert_Input = {
  assigned?: Maybe<Scalars['timestamptz']>;
  assignment_status?: Maybe<Assignment_Status_Enum>;
  challenge?: Maybe<Challenge_Obj_Rel_Insert_Input>;
  challenge_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

export type Challenge_Assignment_Max_Fields = {
   __typename?: 'challenge_assignment_max_fields';
  assigned?: Maybe<Scalars['timestamptz']>;
};

export type Challenge_Assignment_Max_Order_By = {
  assigned?: Maybe<Order_By>;
};

export type Challenge_Assignment_Min_Fields = {
   __typename?: 'challenge_assignment_min_fields';
  assigned?: Maybe<Scalars['timestamptz']>;
};

export type Challenge_Assignment_Min_Order_By = {
  assigned?: Maybe<Order_By>;
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
  assigned?: Maybe<Order_By>;
  assignment_status?: Maybe<Order_By>;
  challenge?: Maybe<Challenge_Order_By>;
  challenge_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
};

export enum Challenge_Assignment_Select_Column {
  Assigned = 'assigned',
  AssignmentStatus = 'assignment_status',
  ChallengeId = 'challenge_id',
  Id = 'id',
  UserId = 'user_id'
}

export type Challenge_Assignment_Set_Input = {
  assigned?: Maybe<Scalars['timestamptz']>;
  assignment_status?: Maybe<Assignment_Status_Enum>;
  challenge_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

export enum Challenge_Assignment_Update_Column {
  Assigned = 'assigned',
  AssignmentStatus = 'assignment_status',
  ChallengeId = 'challenge_id',
  Id = 'id',
  UserId = 'user_id'
}

export type Challenge_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Challenge_Bool_Exp>>>;
  _not?: Maybe<Challenge_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Challenge_Bool_Exp>>>;
  assignments?: Maybe<Challenge_Assignment_Bool_Exp>;
  challenger?: Maybe<User_Bool_Exp>;
  challenger_id?: Maybe<Uuid_Comparison_Exp>;
  end?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  start?: Maybe<Timestamptz_Comparison_Exp>;
  team?: Maybe<Team_Bool_Exp>;
  team_id?: Maybe<Uuid_Comparison_Exp>;
  template?: Maybe<Challenge_Template_Bool_Exp>;
  template_id?: Maybe<Uuid_Comparison_Exp>;
};

export enum Challenge_Constraint {
  ChallengePkey = 'challenge_pkey'
}

export type Challenge_Insert_Input = {
  assignments?: Maybe<Challenge_Assignment_Arr_Rel_Insert_Input>;
  challenger?: Maybe<User_Obj_Rel_Insert_Input>;
  challenger_id?: Maybe<Scalars['uuid']>;
  end?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  start?: Maybe<Scalars['timestamptz']>;
  team?: Maybe<Team_Obj_Rel_Insert_Input>;
  team_id?: Maybe<Scalars['uuid']>;
  template?: Maybe<Challenge_Template_Obj_Rel_Insert_Input>;
  template_id?: Maybe<Scalars['uuid']>;
};

export type Challenge_Max_Fields = {
   __typename?: 'challenge_max_fields';
  end?: Maybe<Scalars['timestamptz']>;
  start?: Maybe<Scalars['timestamptz']>;
};

export type Challenge_Max_Order_By = {
  end?: Maybe<Order_By>;
  start?: Maybe<Order_By>;
};

export type Challenge_Min_Fields = {
   __typename?: 'challenge_min_fields';
  end?: Maybe<Scalars['timestamptz']>;
  start?: Maybe<Scalars['timestamptz']>;
};

export type Challenge_Min_Order_By = {
  end?: Maybe<Order_By>;
  start?: Maybe<Order_By>;
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
  assignments_aggregate?: Maybe<Challenge_Assignment_Aggregate_Order_By>;
  challenger?: Maybe<User_Order_By>;
  challenger_id?: Maybe<Order_By>;
  end?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  start?: Maybe<Order_By>;
  team?: Maybe<Team_Order_By>;
  team_id?: Maybe<Order_By>;
  template?: Maybe<Challenge_Template_Order_By>;
  template_id?: Maybe<Order_By>;
};

export enum Challenge_Select_Column {
  ChallengerId = 'challenger_id',
  End = 'end',
  Id = 'id',
  Start = 'start',
  TeamId = 'team_id',
  TemplateId = 'template_id'
}

export type Challenge_Set_Input = {
  challenger_id?: Maybe<Scalars['uuid']>;
  end?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  start?: Maybe<Scalars['timestamptz']>;
  team_id?: Maybe<Scalars['uuid']>;
  template_id?: Maybe<Scalars['uuid']>;
};

export type Challenge_Template = {
   __typename?: 'challenge_template';
  challenges: Array<Challenge>;
  challenges_aggregate: Challenge_Aggregate;
  description?: Maybe<Multilanguage_String>;
  description_id?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
  name: Multilanguage_String;
  name_id: Scalars['uuid'];
  period: Period_Enum;
  points: Scalars['Int'];
};


export type Challenge_TemplateChallengesArgs = {
  distinct_on?: Maybe<Array<Challenge_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Order_By>>;
  where?: Maybe<Challenge_Bool_Exp>;
};


export type Challenge_TemplateChallenges_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Order_By>>;
  where?: Maybe<Challenge_Bool_Exp>;
};

export type Challenge_Template_Aggregate = {
   __typename?: 'challenge_template_aggregate';
  aggregate?: Maybe<Challenge_Template_Aggregate_Fields>;
  nodes: Array<Challenge_Template>;
};

export type Challenge_Template_Aggregate_Fields = {
   __typename?: 'challenge_template_aggregate_fields';
  avg?: Maybe<Challenge_Template_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Challenge_Template_Max_Fields>;
  min?: Maybe<Challenge_Template_Min_Fields>;
  stddev?: Maybe<Challenge_Template_Stddev_Fields>;
  stddev_pop?: Maybe<Challenge_Template_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Challenge_Template_Stddev_Samp_Fields>;
  sum?: Maybe<Challenge_Template_Sum_Fields>;
  var_pop?: Maybe<Challenge_Template_Var_Pop_Fields>;
  var_samp?: Maybe<Challenge_Template_Var_Samp_Fields>;
  variance?: Maybe<Challenge_Template_Variance_Fields>;
};


export type Challenge_Template_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Challenge_Template_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Challenge_Template_Aggregate_Order_By = {
  avg?: Maybe<Challenge_Template_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Challenge_Template_Max_Order_By>;
  min?: Maybe<Challenge_Template_Min_Order_By>;
  stddev?: Maybe<Challenge_Template_Stddev_Order_By>;
  stddev_pop?: Maybe<Challenge_Template_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Challenge_Template_Stddev_Samp_Order_By>;
  sum?: Maybe<Challenge_Template_Sum_Order_By>;
  var_pop?: Maybe<Challenge_Template_Var_Pop_Order_By>;
  var_samp?: Maybe<Challenge_Template_Var_Samp_Order_By>;
  variance?: Maybe<Challenge_Template_Variance_Order_By>;
};

export type Challenge_Template_Arr_Rel_Insert_Input = {
  data: Array<Challenge_Template_Insert_Input>;
  on_conflict?: Maybe<Challenge_Template_On_Conflict>;
};

export type Challenge_Template_Avg_Fields = {
   __typename?: 'challenge_template_avg_fields';
  points?: Maybe<Scalars['Float']>;
};

export type Challenge_Template_Avg_Order_By = {
  points?: Maybe<Order_By>;
};

export type Challenge_Template_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Challenge_Template_Bool_Exp>>>;
  _not?: Maybe<Challenge_Template_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Challenge_Template_Bool_Exp>>>;
  challenges?: Maybe<Challenge_Bool_Exp>;
  description?: Maybe<Multilanguage_String_Bool_Exp>;
  description_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<Multilanguage_String_Bool_Exp>;
  name_id?: Maybe<Uuid_Comparison_Exp>;
  period?: Maybe<Period_Enum_Comparison_Exp>;
  points?: Maybe<Int_Comparison_Exp>;
};

export enum Challenge_Template_Constraint {
  ChallengeTemplatePkey = 'challenge_template_pkey'
}

export type Challenge_Template_Inc_Input = {
  points?: Maybe<Scalars['Int']>;
};

export type Challenge_Template_Insert_Input = {
  challenges?: Maybe<Challenge_Arr_Rel_Insert_Input>;
  description?: Maybe<Multilanguage_String_Obj_Rel_Insert_Input>;
  description_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Multilanguage_String_Obj_Rel_Insert_Input>;
  name_id?: Maybe<Scalars['uuid']>;
  period?: Maybe<Period_Enum>;
  points?: Maybe<Scalars['Int']>;
};

export type Challenge_Template_Max_Fields = {
   __typename?: 'challenge_template_max_fields';
  points?: Maybe<Scalars['Int']>;
};

export type Challenge_Template_Max_Order_By = {
  points?: Maybe<Order_By>;
};

export type Challenge_Template_Min_Fields = {
   __typename?: 'challenge_template_min_fields';
  points?: Maybe<Scalars['Int']>;
};

export type Challenge_Template_Min_Order_By = {
  points?: Maybe<Order_By>;
};

export type Challenge_Template_Mutation_Response = {
   __typename?: 'challenge_template_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Challenge_Template>;
};

export type Challenge_Template_Obj_Rel_Insert_Input = {
  data: Challenge_Template_Insert_Input;
  on_conflict?: Maybe<Challenge_Template_On_Conflict>;
};

export type Challenge_Template_On_Conflict = {
  constraint: Challenge_Template_Constraint;
  update_columns: Array<Challenge_Template_Update_Column>;
  where?: Maybe<Challenge_Template_Bool_Exp>;
};

export type Challenge_Template_Order_By = {
  challenges_aggregate?: Maybe<Challenge_Aggregate_Order_By>;
  description?: Maybe<Multilanguage_String_Order_By>;
  description_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Multilanguage_String_Order_By>;
  name_id?: Maybe<Order_By>;
  period?: Maybe<Order_By>;
  points?: Maybe<Order_By>;
};

export enum Challenge_Template_Select_Column {
  DescriptionId = 'description_id',
  Id = 'id',
  NameId = 'name_id',
  Period = 'period',
  Points = 'points'
}

export type Challenge_Template_Set_Input = {
  description_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name_id?: Maybe<Scalars['uuid']>;
  period?: Maybe<Period_Enum>;
  points?: Maybe<Scalars['Int']>;
};

export type Challenge_Template_Stddev_Fields = {
   __typename?: 'challenge_template_stddev_fields';
  points?: Maybe<Scalars['Float']>;
};

export type Challenge_Template_Stddev_Order_By = {
  points?: Maybe<Order_By>;
};

export type Challenge_Template_Stddev_Pop_Fields = {
   __typename?: 'challenge_template_stddev_pop_fields';
  points?: Maybe<Scalars['Float']>;
};

export type Challenge_Template_Stddev_Pop_Order_By = {
  points?: Maybe<Order_By>;
};

export type Challenge_Template_Stddev_Samp_Fields = {
   __typename?: 'challenge_template_stddev_samp_fields';
  points?: Maybe<Scalars['Float']>;
};

export type Challenge_Template_Stddev_Samp_Order_By = {
  points?: Maybe<Order_By>;
};

export type Challenge_Template_Sum_Fields = {
   __typename?: 'challenge_template_sum_fields';
  points?: Maybe<Scalars['Int']>;
};

export type Challenge_Template_Sum_Order_By = {
  points?: Maybe<Order_By>;
};

export enum Challenge_Template_Update_Column {
  DescriptionId = 'description_id',
  Id = 'id',
  NameId = 'name_id',
  Period = 'period',
  Points = 'points'
}

export type Challenge_Template_Var_Pop_Fields = {
   __typename?: 'challenge_template_var_pop_fields';
  points?: Maybe<Scalars['Float']>;
};

export type Challenge_Template_Var_Pop_Order_By = {
  points?: Maybe<Order_By>;
};

export type Challenge_Template_Var_Samp_Fields = {
   __typename?: 'challenge_template_var_samp_fields';
  points?: Maybe<Scalars['Float']>;
};

export type Challenge_Template_Var_Samp_Order_By = {
  points?: Maybe<Order_By>;
};

export type Challenge_Template_Variance_Fields = {
   __typename?: 'challenge_template_variance_fields';
  points?: Maybe<Scalars['Float']>;
};

export type Challenge_Template_Variance_Order_By = {
  points?: Maybe<Order_By>;
};

export enum Challenge_Update_Column {
  ChallengerId = 'challenger_id',
  End = 'end',
  Id = 'id',
  Start = 'start',
  TeamId = 'team_id',
  TemplateId = 'template_id'
}

export type Emoji = {
   __typename?: 'emoji';
  value: Scalars['String'];
};

export type Emoji_Aggregate = {
   __typename?: 'emoji_aggregate';
  aggregate?: Maybe<Emoji_Aggregate_Fields>;
  nodes: Array<Emoji>;
};

export type Emoji_Aggregate_Fields = {
   __typename?: 'emoji_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Emoji_Max_Fields>;
  min?: Maybe<Emoji_Min_Fields>;
};


export type Emoji_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Emoji_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Emoji_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Emoji_Max_Order_By>;
  min?: Maybe<Emoji_Min_Order_By>;
};

export type Emoji_Arr_Rel_Insert_Input = {
  data: Array<Emoji_Insert_Input>;
  on_conflict?: Maybe<Emoji_On_Conflict>;
};

export type Emoji_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Emoji_Bool_Exp>>>;
  _not?: Maybe<Emoji_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Emoji_Bool_Exp>>>;
  value?: Maybe<String_Comparison_Exp>;
};

export enum Emoji_Constraint {
  EmojiPkey = 'emoji_pkey'
}

export type Emoji_Insert_Input = {
  value?: Maybe<Scalars['String']>;
};

export type Emoji_Max_Fields = {
   __typename?: 'emoji_max_fields';
  value?: Maybe<Scalars['String']>;
};

export type Emoji_Max_Order_By = {
  value?: Maybe<Order_By>;
};

export type Emoji_Min_Fields = {
   __typename?: 'emoji_min_fields';
  value?: Maybe<Scalars['String']>;
};

export type Emoji_Min_Order_By = {
  value?: Maybe<Order_By>;
};

export type Emoji_Mutation_Response = {
   __typename?: 'emoji_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Emoji>;
};

export type Emoji_Obj_Rel_Insert_Input = {
  data: Emoji_Insert_Input;
  on_conflict?: Maybe<Emoji_On_Conflict>;
};

export type Emoji_On_Conflict = {
  constraint: Emoji_Constraint;
  update_columns: Array<Emoji_Update_Column>;
  where?: Maybe<Emoji_Bool_Exp>;
};

export type Emoji_Order_By = {
  value?: Maybe<Order_By>;
};

export enum Emoji_Select_Column {
  Value = 'value'
}

export type Emoji_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

export enum Emoji_Update_Column {
  Value = 'value'
}

export type Member = {
   __typename?: 'member';
  scoring?: Maybe<Member_Scoring>;
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
  scoring?: Maybe<Member_Scoring_Bool_Exp>;
  team?: Maybe<Team_Bool_Exp>;
  team_id?: Maybe<Uuid_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

export enum Member_Constraint {
  MemberPkey = 'member_pkey'
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
  scoring?: Maybe<Member_Scoring_Order_By>;
  team?: Maybe<Team_Order_By>;
  team_id?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Member_Scoring = {
   __typename?: 'member_scoring';
  points?: Maybe<Scalars['bigint']>;
  team_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

export type Member_Scoring_Aggregate = {
   __typename?: 'member_scoring_aggregate';
  aggregate?: Maybe<Member_Scoring_Aggregate_Fields>;
  nodes: Array<Member_Scoring>;
};

export type Member_Scoring_Aggregate_Fields = {
   __typename?: 'member_scoring_aggregate_fields';
  avg?: Maybe<Member_Scoring_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Member_Scoring_Max_Fields>;
  min?: Maybe<Member_Scoring_Min_Fields>;
  stddev?: Maybe<Member_Scoring_Stddev_Fields>;
  stddev_pop?: Maybe<Member_Scoring_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Member_Scoring_Stddev_Samp_Fields>;
  sum?: Maybe<Member_Scoring_Sum_Fields>;
  var_pop?: Maybe<Member_Scoring_Var_Pop_Fields>;
  var_samp?: Maybe<Member_Scoring_Var_Samp_Fields>;
  variance?: Maybe<Member_Scoring_Variance_Fields>;
};


export type Member_Scoring_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Member_Scoring_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Member_Scoring_Aggregate_Order_By = {
  avg?: Maybe<Member_Scoring_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Member_Scoring_Max_Order_By>;
  min?: Maybe<Member_Scoring_Min_Order_By>;
  stddev?: Maybe<Member_Scoring_Stddev_Order_By>;
  stddev_pop?: Maybe<Member_Scoring_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Member_Scoring_Stddev_Samp_Order_By>;
  sum?: Maybe<Member_Scoring_Sum_Order_By>;
  var_pop?: Maybe<Member_Scoring_Var_Pop_Order_By>;
  var_samp?: Maybe<Member_Scoring_Var_Samp_Order_By>;
  variance?: Maybe<Member_Scoring_Variance_Order_By>;
};

export type Member_Scoring_Avg_Fields = {
   __typename?: 'member_scoring_avg_fields';
  points?: Maybe<Scalars['Float']>;
};

export type Member_Scoring_Avg_Order_By = {
  points?: Maybe<Order_By>;
};

export type Member_Scoring_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Member_Scoring_Bool_Exp>>>;
  _not?: Maybe<Member_Scoring_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Member_Scoring_Bool_Exp>>>;
  points?: Maybe<Bigint_Comparison_Exp>;
  team_id?: Maybe<Uuid_Comparison_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

export type Member_Scoring_Max_Fields = {
   __typename?: 'member_scoring_max_fields';
  points?: Maybe<Scalars['bigint']>;
};

export type Member_Scoring_Max_Order_By = {
  points?: Maybe<Order_By>;
};

export type Member_Scoring_Min_Fields = {
   __typename?: 'member_scoring_min_fields';
  points?: Maybe<Scalars['bigint']>;
};

export type Member_Scoring_Min_Order_By = {
  points?: Maybe<Order_By>;
};

export type Member_Scoring_Order_By = {
  points?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export enum Member_Scoring_Select_Column {
  Points = 'points',
  TeamId = 'team_id',
  UserId = 'user_id'
}

export type Member_Scoring_Stddev_Fields = {
   __typename?: 'member_scoring_stddev_fields';
  points?: Maybe<Scalars['Float']>;
};

export type Member_Scoring_Stddev_Order_By = {
  points?: Maybe<Order_By>;
};

export type Member_Scoring_Stddev_Pop_Fields = {
   __typename?: 'member_scoring_stddev_pop_fields';
  points?: Maybe<Scalars['Float']>;
};

export type Member_Scoring_Stddev_Pop_Order_By = {
  points?: Maybe<Order_By>;
};

export type Member_Scoring_Stddev_Samp_Fields = {
   __typename?: 'member_scoring_stddev_samp_fields';
  points?: Maybe<Scalars['Float']>;
};

export type Member_Scoring_Stddev_Samp_Order_By = {
  points?: Maybe<Order_By>;
};

export type Member_Scoring_Sum_Fields = {
   __typename?: 'member_scoring_sum_fields';
  points?: Maybe<Scalars['bigint']>;
};

export type Member_Scoring_Sum_Order_By = {
  points?: Maybe<Order_By>;
};

export type Member_Scoring_Var_Pop_Fields = {
   __typename?: 'member_scoring_var_pop_fields';
  points?: Maybe<Scalars['Float']>;
};

export type Member_Scoring_Var_Pop_Order_By = {
  points?: Maybe<Order_By>;
};

export type Member_Scoring_Var_Samp_Fields = {
   __typename?: 'member_scoring_var_samp_fields';
  points?: Maybe<Scalars['Float']>;
};

export type Member_Scoring_Var_Samp_Order_By = {
  points?: Maybe<Order_By>;
};

export type Member_Scoring_Variance_Fields = {
   __typename?: 'member_scoring_variance_fields';
  points?: Maybe<Scalars['Float']>;
};

export type Member_Scoring_Variance_Order_By = {
  points?: Maybe<Order_By>;
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

export type Multilanguage_String = {
   __typename?: 'multilanguage_string';
  en: Scalars['String'];
  hu?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  sk?: Maybe<Scalars['String']>;
};

export type Multilanguage_String_Aggregate = {
   __typename?: 'multilanguage_string_aggregate';
  aggregate?: Maybe<Multilanguage_String_Aggregate_Fields>;
  nodes: Array<Multilanguage_String>;
};

export type Multilanguage_String_Aggregate_Fields = {
   __typename?: 'multilanguage_string_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Multilanguage_String_Max_Fields>;
  min?: Maybe<Multilanguage_String_Min_Fields>;
};


export type Multilanguage_String_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Multilanguage_String_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Multilanguage_String_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Multilanguage_String_Max_Order_By>;
  min?: Maybe<Multilanguage_String_Min_Order_By>;
};

export type Multilanguage_String_Arr_Rel_Insert_Input = {
  data: Array<Multilanguage_String_Insert_Input>;
  on_conflict?: Maybe<Multilanguage_String_On_Conflict>;
};

export type Multilanguage_String_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Multilanguage_String_Bool_Exp>>>;
  _not?: Maybe<Multilanguage_String_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Multilanguage_String_Bool_Exp>>>;
  en?: Maybe<String_Comparison_Exp>;
  hu?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  sk?: Maybe<String_Comparison_Exp>;
};

export enum Multilanguage_String_Constraint {
  MultilanguageStringPkey = 'multilanguage_string_pkey'
}

export type Multilanguage_String_Insert_Input = {
  en?: Maybe<Scalars['String']>;
  hu?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  sk?: Maybe<Scalars['String']>;
};

export type Multilanguage_String_Max_Fields = {
   __typename?: 'multilanguage_string_max_fields';
  en?: Maybe<Scalars['String']>;
  hu?: Maybe<Scalars['String']>;
  sk?: Maybe<Scalars['String']>;
};

export type Multilanguage_String_Max_Order_By = {
  en?: Maybe<Order_By>;
  hu?: Maybe<Order_By>;
  sk?: Maybe<Order_By>;
};

export type Multilanguage_String_Min_Fields = {
   __typename?: 'multilanguage_string_min_fields';
  en?: Maybe<Scalars['String']>;
  hu?: Maybe<Scalars['String']>;
  sk?: Maybe<Scalars['String']>;
};

export type Multilanguage_String_Min_Order_By = {
  en?: Maybe<Order_By>;
  hu?: Maybe<Order_By>;
  sk?: Maybe<Order_By>;
};

export type Multilanguage_String_Mutation_Response = {
   __typename?: 'multilanguage_string_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Multilanguage_String>;
};

export type Multilanguage_String_Obj_Rel_Insert_Input = {
  data: Multilanguage_String_Insert_Input;
  on_conflict?: Maybe<Multilanguage_String_On_Conflict>;
};

export type Multilanguage_String_On_Conflict = {
  constraint: Multilanguage_String_Constraint;
  update_columns: Array<Multilanguage_String_Update_Column>;
  where?: Maybe<Multilanguage_String_Bool_Exp>;
};

export type Multilanguage_String_Order_By = {
  en?: Maybe<Order_By>;
  hu?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sk?: Maybe<Order_By>;
};

export enum Multilanguage_String_Select_Column {
  En = 'en',
  Hu = 'hu',
  Id = 'id',
  Sk = 'sk'
}

export type Multilanguage_String_Set_Input = {
  en?: Maybe<Scalars['String']>;
  hu?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  sk?: Maybe<Scalars['String']>;
};

export enum Multilanguage_String_Update_Column {
  En = 'en',
  Hu = 'hu',
  Id = 'id',
  Sk = 'sk'
}

export type Mutation_Root = {
   __typename?: 'mutation_root';
  delete_assignment_status?: Maybe<Assignment_Status_Mutation_Response>;
  delete_category?: Maybe<Category_Mutation_Response>;
  delete_challenge?: Maybe<Challenge_Mutation_Response>;
  delete_challenge_assignment?: Maybe<Challenge_Assignment_Mutation_Response>;
  delete_challenge_template?: Maybe<Challenge_Template_Mutation_Response>;
  delete_emoji?: Maybe<Emoji_Mutation_Response>;
  delete_member?: Maybe<Member_Mutation_Response>;
  delete_multilanguage_string?: Maybe<Multilanguage_String_Mutation_Response>;
  delete_period?: Maybe<Period_Mutation_Response>;
  delete_proof?: Maybe<Proof_Mutation_Response>;
  delete_proof_type?: Maybe<Proof_Type_Mutation_Response>;
  delete_reaction?: Maybe<Reaction_Mutation_Response>;
  delete_team?: Maybe<Team_Mutation_Response>;
  delete_user?: Maybe<User_Mutation_Response>;
  insert_assignment_status?: Maybe<Assignment_Status_Mutation_Response>;
  insert_category?: Maybe<Category_Mutation_Response>;
  insert_challenge?: Maybe<Challenge_Mutation_Response>;
  insert_challenge_assignment?: Maybe<Challenge_Assignment_Mutation_Response>;
  insert_challenge_template?: Maybe<Challenge_Template_Mutation_Response>;
  insert_emoji?: Maybe<Emoji_Mutation_Response>;
  insert_member?: Maybe<Member_Mutation_Response>;
  insert_multilanguage_string?: Maybe<Multilanguage_String_Mutation_Response>;
  insert_period?: Maybe<Period_Mutation_Response>;
  insert_proof?: Maybe<Proof_Mutation_Response>;
  insert_proof_type?: Maybe<Proof_Type_Mutation_Response>;
  insert_reaction?: Maybe<Reaction_Mutation_Response>;
  insert_team?: Maybe<Team_Mutation_Response>;
  insert_user?: Maybe<User_Mutation_Response>;
  update_assignment_status?: Maybe<Assignment_Status_Mutation_Response>;
  update_category?: Maybe<Category_Mutation_Response>;
  update_challenge?: Maybe<Challenge_Mutation_Response>;
  update_challenge_assignment?: Maybe<Challenge_Assignment_Mutation_Response>;
  update_challenge_template?: Maybe<Challenge_Template_Mutation_Response>;
  update_emoji?: Maybe<Emoji_Mutation_Response>;
  update_member?: Maybe<Member_Mutation_Response>;
  update_multilanguage_string?: Maybe<Multilanguage_String_Mutation_Response>;
  update_period?: Maybe<Period_Mutation_Response>;
  update_proof?: Maybe<Proof_Mutation_Response>;
  update_proof_type?: Maybe<Proof_Type_Mutation_Response>;
  update_reaction?: Maybe<Reaction_Mutation_Response>;
  update_team?: Maybe<Team_Mutation_Response>;
  update_user?: Maybe<User_Mutation_Response>;
};


export type Mutation_RootDelete_Assignment_StatusArgs = {
  where: Assignment_Status_Bool_Exp;
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


export type Mutation_RootDelete_Challenge_TemplateArgs = {
  where: Challenge_Template_Bool_Exp;
};


export type Mutation_RootDelete_EmojiArgs = {
  where: Emoji_Bool_Exp;
};


export type Mutation_RootDelete_MemberArgs = {
  where: Member_Bool_Exp;
};


export type Mutation_RootDelete_Multilanguage_StringArgs = {
  where: Multilanguage_String_Bool_Exp;
};


export type Mutation_RootDelete_PeriodArgs = {
  where: Period_Bool_Exp;
};


export type Mutation_RootDelete_ProofArgs = {
  where: Proof_Bool_Exp;
};


export type Mutation_RootDelete_Proof_TypeArgs = {
  where: Proof_Type_Bool_Exp;
};


export type Mutation_RootDelete_ReactionArgs = {
  where: Reaction_Bool_Exp;
};


export type Mutation_RootDelete_TeamArgs = {
  where: Team_Bool_Exp;
};


export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


export type Mutation_RootInsert_Assignment_StatusArgs = {
  objects: Array<Assignment_Status_Insert_Input>;
  on_conflict?: Maybe<Assignment_Status_On_Conflict>;
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


export type Mutation_RootInsert_Challenge_TemplateArgs = {
  objects: Array<Challenge_Template_Insert_Input>;
  on_conflict?: Maybe<Challenge_Template_On_Conflict>;
};


export type Mutation_RootInsert_EmojiArgs = {
  objects: Array<Emoji_Insert_Input>;
  on_conflict?: Maybe<Emoji_On_Conflict>;
};


export type Mutation_RootInsert_MemberArgs = {
  objects: Array<Member_Insert_Input>;
  on_conflict?: Maybe<Member_On_Conflict>;
};


export type Mutation_RootInsert_Multilanguage_StringArgs = {
  objects: Array<Multilanguage_String_Insert_Input>;
  on_conflict?: Maybe<Multilanguage_String_On_Conflict>;
};


export type Mutation_RootInsert_PeriodArgs = {
  objects: Array<Period_Insert_Input>;
  on_conflict?: Maybe<Period_On_Conflict>;
};


export type Mutation_RootInsert_ProofArgs = {
  objects: Array<Proof_Insert_Input>;
  on_conflict?: Maybe<Proof_On_Conflict>;
};


export type Mutation_RootInsert_Proof_TypeArgs = {
  objects: Array<Proof_Type_Insert_Input>;
  on_conflict?: Maybe<Proof_Type_On_Conflict>;
};


export type Mutation_RootInsert_ReactionArgs = {
  objects: Array<Reaction_Insert_Input>;
  on_conflict?: Maybe<Reaction_On_Conflict>;
};


export type Mutation_RootInsert_TeamArgs = {
  objects: Array<Team_Insert_Input>;
  on_conflict?: Maybe<Team_On_Conflict>;
};


export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};


export type Mutation_RootUpdate_Assignment_StatusArgs = {
  _set?: Maybe<Assignment_Status_Set_Input>;
  where: Assignment_Status_Bool_Exp;
};


export type Mutation_RootUpdate_CategoryArgs = {
  _set?: Maybe<Category_Set_Input>;
  where: Category_Bool_Exp;
};


export type Mutation_RootUpdate_ChallengeArgs = {
  _set?: Maybe<Challenge_Set_Input>;
  where: Challenge_Bool_Exp;
};


export type Mutation_RootUpdate_Challenge_AssignmentArgs = {
  _set?: Maybe<Challenge_Assignment_Set_Input>;
  where: Challenge_Assignment_Bool_Exp;
};


export type Mutation_RootUpdate_Challenge_TemplateArgs = {
  _inc?: Maybe<Challenge_Template_Inc_Input>;
  _set?: Maybe<Challenge_Template_Set_Input>;
  where: Challenge_Template_Bool_Exp;
};


export type Mutation_RootUpdate_EmojiArgs = {
  _set?: Maybe<Emoji_Set_Input>;
  where: Emoji_Bool_Exp;
};


export type Mutation_RootUpdate_MemberArgs = {
  _set?: Maybe<Member_Set_Input>;
  where: Member_Bool_Exp;
};


export type Mutation_RootUpdate_Multilanguage_StringArgs = {
  _set?: Maybe<Multilanguage_String_Set_Input>;
  where: Multilanguage_String_Bool_Exp;
};


export type Mutation_RootUpdate_PeriodArgs = {
  _set?: Maybe<Period_Set_Input>;
  where: Period_Bool_Exp;
};


export type Mutation_RootUpdate_ProofArgs = {
  _set?: Maybe<Proof_Set_Input>;
  where: Proof_Bool_Exp;
};


export type Mutation_RootUpdate_Proof_TypeArgs = {
  _set?: Maybe<Proof_Type_Set_Input>;
  where: Proof_Type_Bool_Exp;
};


export type Mutation_RootUpdate_ReactionArgs = {
  _set?: Maybe<Reaction_Set_Input>;
  where: Reaction_Bool_Exp;
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

export type Period = {
   __typename?: 'period';
  value: Scalars['String'];
};

export type Period_Aggregate = {
   __typename?: 'period_aggregate';
  aggregate?: Maybe<Period_Aggregate_Fields>;
  nodes: Array<Period>;
};

export type Period_Aggregate_Fields = {
   __typename?: 'period_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Period_Max_Fields>;
  min?: Maybe<Period_Min_Fields>;
};


export type Period_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Period_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Period_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Period_Max_Order_By>;
  min?: Maybe<Period_Min_Order_By>;
};

export type Period_Arr_Rel_Insert_Input = {
  data: Array<Period_Insert_Input>;
  on_conflict?: Maybe<Period_On_Conflict>;
};

export type Period_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Period_Bool_Exp>>>;
  _not?: Maybe<Period_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Period_Bool_Exp>>>;
  value?: Maybe<String_Comparison_Exp>;
};

export enum Period_Constraint {
  PeriodPkey = 'period_pkey'
}

export enum Period_Enum {
  Daily = 'DAILY',
  Once = 'ONCE',
  Weekly = 'WEEKLY'
}

export type Period_Enum_Comparison_Exp = {
  _eq?: Maybe<Period_Enum>;
  _in?: Maybe<Array<Period_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Period_Enum>;
  _nin?: Maybe<Array<Period_Enum>>;
};

export type Period_Insert_Input = {
  value?: Maybe<Scalars['String']>;
};

export type Period_Max_Fields = {
   __typename?: 'period_max_fields';
  value?: Maybe<Scalars['String']>;
};

export type Period_Max_Order_By = {
  value?: Maybe<Order_By>;
};

export type Period_Min_Fields = {
   __typename?: 'period_min_fields';
  value?: Maybe<Scalars['String']>;
};

export type Period_Min_Order_By = {
  value?: Maybe<Order_By>;
};

export type Period_Mutation_Response = {
   __typename?: 'period_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Period>;
};

export type Period_Obj_Rel_Insert_Input = {
  data: Period_Insert_Input;
  on_conflict?: Maybe<Period_On_Conflict>;
};

export type Period_On_Conflict = {
  constraint: Period_Constraint;
  update_columns: Array<Period_Update_Column>;
  where?: Maybe<Period_Bool_Exp>;
};

export type Period_Order_By = {
  value?: Maybe<Order_By>;
};

export enum Period_Select_Column {
  Value = 'value'
}

export type Period_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

export enum Period_Update_Column {
  Value = 'value'
}

export type Proof = {
   __typename?: 'proof';
  assignment_id: Scalars['uuid'];
  proved: Scalars['timestamptz'];
  reactions: Array<Reaction>;
  reactions_aggregate: Reaction_Aggregate;
  type: Proof_Type_Enum;
  value: Scalars['String'];
};


export type ProofReactionsArgs = {
  distinct_on?: Maybe<Array<Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reaction_Order_By>>;
  where?: Maybe<Reaction_Bool_Exp>;
};


export type ProofReactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reaction_Order_By>>;
  where?: Maybe<Reaction_Bool_Exp>;
};

export type Proof_Aggregate = {
   __typename?: 'proof_aggregate';
  aggregate?: Maybe<Proof_Aggregate_Fields>;
  nodes: Array<Proof>;
};

export type Proof_Aggregate_Fields = {
   __typename?: 'proof_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Proof_Max_Fields>;
  min?: Maybe<Proof_Min_Fields>;
};


export type Proof_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Proof_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Proof_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Proof_Max_Order_By>;
  min?: Maybe<Proof_Min_Order_By>;
};

export type Proof_Arr_Rel_Insert_Input = {
  data: Array<Proof_Insert_Input>;
  on_conflict?: Maybe<Proof_On_Conflict>;
};

export type Proof_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Proof_Bool_Exp>>>;
  _not?: Maybe<Proof_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Proof_Bool_Exp>>>;
  assignment_id?: Maybe<Uuid_Comparison_Exp>;
  proved?: Maybe<Timestamptz_Comparison_Exp>;
  reactions?: Maybe<Reaction_Bool_Exp>;
  type?: Maybe<Proof_Type_Enum_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

export enum Proof_Constraint {
  ProofPkey = 'proof_pkey'
}

export type Proof_Insert_Input = {
  assignment_id?: Maybe<Scalars['uuid']>;
  proved?: Maybe<Scalars['timestamptz']>;
  reactions?: Maybe<Reaction_Arr_Rel_Insert_Input>;
  type?: Maybe<Proof_Type_Enum>;
  value?: Maybe<Scalars['String']>;
};

export type Proof_Max_Fields = {
   __typename?: 'proof_max_fields';
  proved?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

export type Proof_Max_Order_By = {
  proved?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

export type Proof_Min_Fields = {
   __typename?: 'proof_min_fields';
  proved?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

export type Proof_Min_Order_By = {
  proved?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

export type Proof_Mutation_Response = {
   __typename?: 'proof_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Proof>;
};

export type Proof_Obj_Rel_Insert_Input = {
  data: Proof_Insert_Input;
  on_conflict?: Maybe<Proof_On_Conflict>;
};

export type Proof_On_Conflict = {
  constraint: Proof_Constraint;
  update_columns: Array<Proof_Update_Column>;
  where?: Maybe<Proof_Bool_Exp>;
};

export type Proof_Order_By = {
  assignment_id?: Maybe<Order_By>;
  proved?: Maybe<Order_By>;
  reactions_aggregate?: Maybe<Reaction_Aggregate_Order_By>;
  type?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

export enum Proof_Select_Column {
  AssignmentId = 'assignment_id',
  Proved = 'proved',
  Type = 'type',
  Value = 'value'
}

export type Proof_Set_Input = {
  assignment_id?: Maybe<Scalars['uuid']>;
  proved?: Maybe<Scalars['timestamptz']>;
  type?: Maybe<Proof_Type_Enum>;
  value?: Maybe<Scalars['String']>;
};

export type Proof_Type = {
   __typename?: 'proof_type';
  value: Scalars['String'];
};

export type Proof_Type_Aggregate = {
   __typename?: 'proof_type_aggregate';
  aggregate?: Maybe<Proof_Type_Aggregate_Fields>;
  nodes: Array<Proof_Type>;
};

export type Proof_Type_Aggregate_Fields = {
   __typename?: 'proof_type_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Proof_Type_Max_Fields>;
  min?: Maybe<Proof_Type_Min_Fields>;
};


export type Proof_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Proof_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Proof_Type_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Proof_Type_Max_Order_By>;
  min?: Maybe<Proof_Type_Min_Order_By>;
};

export type Proof_Type_Arr_Rel_Insert_Input = {
  data: Array<Proof_Type_Insert_Input>;
  on_conflict?: Maybe<Proof_Type_On_Conflict>;
};

export type Proof_Type_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Proof_Type_Bool_Exp>>>;
  _not?: Maybe<Proof_Type_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Proof_Type_Bool_Exp>>>;
  value?: Maybe<String_Comparison_Exp>;
};

export enum Proof_Type_Constraint {
  ProofTypePkey = 'proof_type_pkey'
}

export enum Proof_Type_Enum {
  External = 'EXTERNAL',
  Image = 'IMAGE'
}

export type Proof_Type_Enum_Comparison_Exp = {
  _eq?: Maybe<Proof_Type_Enum>;
  _in?: Maybe<Array<Proof_Type_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Proof_Type_Enum>;
  _nin?: Maybe<Array<Proof_Type_Enum>>;
};

export type Proof_Type_Insert_Input = {
  value?: Maybe<Scalars['String']>;
};

export type Proof_Type_Max_Fields = {
   __typename?: 'proof_type_max_fields';
  value?: Maybe<Scalars['String']>;
};

export type Proof_Type_Max_Order_By = {
  value?: Maybe<Order_By>;
};

export type Proof_Type_Min_Fields = {
   __typename?: 'proof_type_min_fields';
  value?: Maybe<Scalars['String']>;
};

export type Proof_Type_Min_Order_By = {
  value?: Maybe<Order_By>;
};

export type Proof_Type_Mutation_Response = {
   __typename?: 'proof_type_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Proof_Type>;
};

export type Proof_Type_Obj_Rel_Insert_Input = {
  data: Proof_Type_Insert_Input;
  on_conflict?: Maybe<Proof_Type_On_Conflict>;
};

export type Proof_Type_On_Conflict = {
  constraint: Proof_Type_Constraint;
  update_columns: Array<Proof_Type_Update_Column>;
  where?: Maybe<Proof_Type_Bool_Exp>;
};

export type Proof_Type_Order_By = {
  value?: Maybe<Order_By>;
};

export enum Proof_Type_Select_Column {
  Value = 'value'
}

export type Proof_Type_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

export enum Proof_Type_Update_Column {
  Value = 'value'
}

export enum Proof_Update_Column {
  AssignmentId = 'assignment_id',
  Proved = 'proved',
  Type = 'type',
  Value = 'value'
}

export type Query_Root = {
   __typename?: 'query_root';
  assignment_status: Array<Assignment_Status>;
  assignment_status_aggregate: Assignment_Status_Aggregate;
  assignment_status_by_pk?: Maybe<Assignment_Status>;
  category: Array<Category>;
  category_aggregate: Category_Aggregate;
  category_by_pk?: Maybe<Category>;
  challenge: Array<Challenge>;
  challenge_aggregate: Challenge_Aggregate;
  challenge_assignment: Array<Challenge_Assignment>;
  challenge_assignment_aggregate: Challenge_Assignment_Aggregate;
  challenge_assignment_by_pk?: Maybe<Challenge_Assignment>;
  challenge_by_pk?: Maybe<Challenge>;
  challenge_template: Array<Challenge_Template>;
  challenge_template_aggregate: Challenge_Template_Aggregate;
  challenge_template_by_pk?: Maybe<Challenge_Template>;
  emoji: Array<Emoji>;
  emoji_aggregate: Emoji_Aggregate;
  emoji_by_pk?: Maybe<Emoji>;
  member: Array<Member>;
  member_aggregate: Member_Aggregate;
  member_by_pk?: Maybe<Member>;
  member_scoring: Array<Member_Scoring>;
  member_scoring_aggregate: Member_Scoring_Aggregate;
  multilanguage_string: Array<Multilanguage_String>;
  multilanguage_string_aggregate: Multilanguage_String_Aggregate;
  multilanguage_string_by_pk?: Maybe<Multilanguage_String>;
  period: Array<Period>;
  period_aggregate: Period_Aggregate;
  period_by_pk?: Maybe<Period>;
  proof: Array<Proof>;
  proof_aggregate: Proof_Aggregate;
  proof_by_pk?: Maybe<Proof>;
  proof_type: Array<Proof_Type>;
  proof_type_aggregate: Proof_Type_Aggregate;
  proof_type_by_pk?: Maybe<Proof_Type>;
  reaction: Array<Reaction>;
  reaction_aggregate: Reaction_Aggregate;
  reaction_by_pk?: Maybe<Reaction>;
  team: Array<Team>;
  team_aggregate: Team_Aggregate;
  team_by_pk?: Maybe<Team>;
  user: Array<User>;
  user_aggregate: User_Aggregate;
  user_by_pk?: Maybe<User>;
};


export type Query_RootAssignment_StatusArgs = {
  distinct_on?: Maybe<Array<Assignment_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Assignment_Status_Order_By>>;
  where?: Maybe<Assignment_Status_Bool_Exp>;
};


export type Query_RootAssignment_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Assignment_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Assignment_Status_Order_By>>;
  where?: Maybe<Assignment_Status_Bool_Exp>;
};


export type Query_RootAssignment_Status_By_PkArgs = {
  value: Scalars['String'];
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


export type Query_RootChallenge_TemplateArgs = {
  distinct_on?: Maybe<Array<Challenge_Template_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Template_Order_By>>;
  where?: Maybe<Challenge_Template_Bool_Exp>;
};


export type Query_RootChallenge_Template_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Template_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Template_Order_By>>;
  where?: Maybe<Challenge_Template_Bool_Exp>;
};


export type Query_RootChallenge_Template_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootEmojiArgs = {
  distinct_on?: Maybe<Array<Emoji_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Emoji_Order_By>>;
  where?: Maybe<Emoji_Bool_Exp>;
};


export type Query_RootEmoji_AggregateArgs = {
  distinct_on?: Maybe<Array<Emoji_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Emoji_Order_By>>;
  where?: Maybe<Emoji_Bool_Exp>;
};


export type Query_RootEmoji_By_PkArgs = {
  value: Scalars['String'];
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


export type Query_RootMember_ScoringArgs = {
  distinct_on?: Maybe<Array<Member_Scoring_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Member_Scoring_Order_By>>;
  where?: Maybe<Member_Scoring_Bool_Exp>;
};


export type Query_RootMember_Scoring_AggregateArgs = {
  distinct_on?: Maybe<Array<Member_Scoring_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Member_Scoring_Order_By>>;
  where?: Maybe<Member_Scoring_Bool_Exp>;
};


export type Query_RootMultilanguage_StringArgs = {
  distinct_on?: Maybe<Array<Multilanguage_String_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Multilanguage_String_Order_By>>;
  where?: Maybe<Multilanguage_String_Bool_Exp>;
};


export type Query_RootMultilanguage_String_AggregateArgs = {
  distinct_on?: Maybe<Array<Multilanguage_String_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Multilanguage_String_Order_By>>;
  where?: Maybe<Multilanguage_String_Bool_Exp>;
};


export type Query_RootMultilanguage_String_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPeriodArgs = {
  distinct_on?: Maybe<Array<Period_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Period_Order_By>>;
  where?: Maybe<Period_Bool_Exp>;
};


export type Query_RootPeriod_AggregateArgs = {
  distinct_on?: Maybe<Array<Period_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Period_Order_By>>;
  where?: Maybe<Period_Bool_Exp>;
};


export type Query_RootPeriod_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootProofArgs = {
  distinct_on?: Maybe<Array<Proof_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proof_Order_By>>;
  where?: Maybe<Proof_Bool_Exp>;
};


export type Query_RootProof_AggregateArgs = {
  distinct_on?: Maybe<Array<Proof_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proof_Order_By>>;
  where?: Maybe<Proof_Bool_Exp>;
};


export type Query_RootProof_By_PkArgs = {
  assignment_id: Scalars['uuid'];
};


export type Query_RootProof_TypeArgs = {
  distinct_on?: Maybe<Array<Proof_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proof_Type_Order_By>>;
  where?: Maybe<Proof_Type_Bool_Exp>;
};


export type Query_RootProof_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Proof_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proof_Type_Order_By>>;
  where?: Maybe<Proof_Type_Bool_Exp>;
};


export type Query_RootProof_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootReactionArgs = {
  distinct_on?: Maybe<Array<Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reaction_Order_By>>;
  where?: Maybe<Reaction_Bool_Exp>;
};


export type Query_RootReaction_AggregateArgs = {
  distinct_on?: Maybe<Array<Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reaction_Order_By>>;
  where?: Maybe<Reaction_Bool_Exp>;
};


export type Query_RootReaction_By_PkArgs = {
  assignment_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
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

export type Reaction = {
   __typename?: 'reaction';
  assignment_id: Scalars['uuid'];
  emoji: Scalars['String'];
  proof: Proof;
  user: User;
  user_id: Scalars['uuid'];
};

export type Reaction_Aggregate = {
   __typename?: 'reaction_aggregate';
  aggregate?: Maybe<Reaction_Aggregate_Fields>;
  nodes: Array<Reaction>;
};

export type Reaction_Aggregate_Fields = {
   __typename?: 'reaction_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Reaction_Max_Fields>;
  min?: Maybe<Reaction_Min_Fields>;
};


export type Reaction_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Reaction_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Reaction_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Reaction_Max_Order_By>;
  min?: Maybe<Reaction_Min_Order_By>;
};

export type Reaction_Arr_Rel_Insert_Input = {
  data: Array<Reaction_Insert_Input>;
  on_conflict?: Maybe<Reaction_On_Conflict>;
};

export type Reaction_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Reaction_Bool_Exp>>>;
  _not?: Maybe<Reaction_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Reaction_Bool_Exp>>>;
  assignment_id?: Maybe<Uuid_Comparison_Exp>;
  emoji?: Maybe<String_Comparison_Exp>;
  proof?: Maybe<Proof_Bool_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

export enum Reaction_Constraint {
  ReactionPkey = 'reaction_pkey',
  ReactionUserIdProofIdKey = 'reaction_user_id_proof_id_key'
}

export type Reaction_Insert_Input = {
  assignment_id?: Maybe<Scalars['uuid']>;
  emoji?: Maybe<Scalars['String']>;
  proof?: Maybe<Proof_Obj_Rel_Insert_Input>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

export type Reaction_Max_Fields = {
   __typename?: 'reaction_max_fields';
  emoji?: Maybe<Scalars['String']>;
};

export type Reaction_Max_Order_By = {
  emoji?: Maybe<Order_By>;
};

export type Reaction_Min_Fields = {
   __typename?: 'reaction_min_fields';
  emoji?: Maybe<Scalars['String']>;
};

export type Reaction_Min_Order_By = {
  emoji?: Maybe<Order_By>;
};

export type Reaction_Mutation_Response = {
   __typename?: 'reaction_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Reaction>;
};

export type Reaction_Obj_Rel_Insert_Input = {
  data: Reaction_Insert_Input;
  on_conflict?: Maybe<Reaction_On_Conflict>;
};

export type Reaction_On_Conflict = {
  constraint: Reaction_Constraint;
  update_columns: Array<Reaction_Update_Column>;
  where?: Maybe<Reaction_Bool_Exp>;
};

export type Reaction_Order_By = {
  assignment_id?: Maybe<Order_By>;
  emoji?: Maybe<Order_By>;
  proof?: Maybe<Proof_Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
};

export enum Reaction_Select_Column {
  AssignmentId = 'assignment_id',
  Emoji = 'emoji',
  UserId = 'user_id'
}

export type Reaction_Set_Input = {
  assignment_id?: Maybe<Scalars['uuid']>;
  emoji?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

export enum Reaction_Update_Column {
  AssignmentId = 'assignment_id',
  Emoji = 'emoji',
  UserId = 'user_id'
}

export type Subscription_Root = {
   __typename?: 'subscription_root';
  assignment_status: Array<Assignment_Status>;
  assignment_status_aggregate: Assignment_Status_Aggregate;
  assignment_status_by_pk?: Maybe<Assignment_Status>;
  category: Array<Category>;
  category_aggregate: Category_Aggregate;
  category_by_pk?: Maybe<Category>;
  challenge: Array<Challenge>;
  challenge_aggregate: Challenge_Aggregate;
  challenge_assignment: Array<Challenge_Assignment>;
  challenge_assignment_aggregate: Challenge_Assignment_Aggregate;
  challenge_assignment_by_pk?: Maybe<Challenge_Assignment>;
  challenge_by_pk?: Maybe<Challenge>;
  challenge_template: Array<Challenge_Template>;
  challenge_template_aggregate: Challenge_Template_Aggregate;
  challenge_template_by_pk?: Maybe<Challenge_Template>;
  emoji: Array<Emoji>;
  emoji_aggregate: Emoji_Aggregate;
  emoji_by_pk?: Maybe<Emoji>;
  member: Array<Member>;
  member_aggregate: Member_Aggregate;
  member_by_pk?: Maybe<Member>;
  member_scoring: Array<Member_Scoring>;
  member_scoring_aggregate: Member_Scoring_Aggregate;
  multilanguage_string: Array<Multilanguage_String>;
  multilanguage_string_aggregate: Multilanguage_String_Aggregate;
  multilanguage_string_by_pk?: Maybe<Multilanguage_String>;
  period: Array<Period>;
  period_aggregate: Period_Aggregate;
  period_by_pk?: Maybe<Period>;
  proof: Array<Proof>;
  proof_aggregate: Proof_Aggregate;
  proof_by_pk?: Maybe<Proof>;
  proof_type: Array<Proof_Type>;
  proof_type_aggregate: Proof_Type_Aggregate;
  proof_type_by_pk?: Maybe<Proof_Type>;
  reaction: Array<Reaction>;
  reaction_aggregate: Reaction_Aggregate;
  reaction_by_pk?: Maybe<Reaction>;
  team: Array<Team>;
  team_aggregate: Team_Aggregate;
  team_by_pk?: Maybe<Team>;
  user: Array<User>;
  user_aggregate: User_Aggregate;
  user_by_pk?: Maybe<User>;
};


export type Subscription_RootAssignment_StatusArgs = {
  distinct_on?: Maybe<Array<Assignment_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Assignment_Status_Order_By>>;
  where?: Maybe<Assignment_Status_Bool_Exp>;
};


export type Subscription_RootAssignment_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Assignment_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Assignment_Status_Order_By>>;
  where?: Maybe<Assignment_Status_Bool_Exp>;
};


export type Subscription_RootAssignment_Status_By_PkArgs = {
  value: Scalars['String'];
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


export type Subscription_RootChallenge_TemplateArgs = {
  distinct_on?: Maybe<Array<Challenge_Template_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Template_Order_By>>;
  where?: Maybe<Challenge_Template_Bool_Exp>;
};


export type Subscription_RootChallenge_Template_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Template_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Template_Order_By>>;
  where?: Maybe<Challenge_Template_Bool_Exp>;
};


export type Subscription_RootChallenge_Template_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootEmojiArgs = {
  distinct_on?: Maybe<Array<Emoji_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Emoji_Order_By>>;
  where?: Maybe<Emoji_Bool_Exp>;
};


export type Subscription_RootEmoji_AggregateArgs = {
  distinct_on?: Maybe<Array<Emoji_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Emoji_Order_By>>;
  where?: Maybe<Emoji_Bool_Exp>;
};


export type Subscription_RootEmoji_By_PkArgs = {
  value: Scalars['String'];
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


export type Subscription_RootMember_ScoringArgs = {
  distinct_on?: Maybe<Array<Member_Scoring_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Member_Scoring_Order_By>>;
  where?: Maybe<Member_Scoring_Bool_Exp>;
};


export type Subscription_RootMember_Scoring_AggregateArgs = {
  distinct_on?: Maybe<Array<Member_Scoring_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Member_Scoring_Order_By>>;
  where?: Maybe<Member_Scoring_Bool_Exp>;
};


export type Subscription_RootMultilanguage_StringArgs = {
  distinct_on?: Maybe<Array<Multilanguage_String_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Multilanguage_String_Order_By>>;
  where?: Maybe<Multilanguage_String_Bool_Exp>;
};


export type Subscription_RootMultilanguage_String_AggregateArgs = {
  distinct_on?: Maybe<Array<Multilanguage_String_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Multilanguage_String_Order_By>>;
  where?: Maybe<Multilanguage_String_Bool_Exp>;
};


export type Subscription_RootMultilanguage_String_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPeriodArgs = {
  distinct_on?: Maybe<Array<Period_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Period_Order_By>>;
  where?: Maybe<Period_Bool_Exp>;
};


export type Subscription_RootPeriod_AggregateArgs = {
  distinct_on?: Maybe<Array<Period_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Period_Order_By>>;
  where?: Maybe<Period_Bool_Exp>;
};


export type Subscription_RootPeriod_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootProofArgs = {
  distinct_on?: Maybe<Array<Proof_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proof_Order_By>>;
  where?: Maybe<Proof_Bool_Exp>;
};


export type Subscription_RootProof_AggregateArgs = {
  distinct_on?: Maybe<Array<Proof_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proof_Order_By>>;
  where?: Maybe<Proof_Bool_Exp>;
};


export type Subscription_RootProof_By_PkArgs = {
  assignment_id: Scalars['uuid'];
};


export type Subscription_RootProof_TypeArgs = {
  distinct_on?: Maybe<Array<Proof_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proof_Type_Order_By>>;
  where?: Maybe<Proof_Type_Bool_Exp>;
};


export type Subscription_RootProof_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Proof_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proof_Type_Order_By>>;
  where?: Maybe<Proof_Type_Bool_Exp>;
};


export type Subscription_RootProof_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootReactionArgs = {
  distinct_on?: Maybe<Array<Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reaction_Order_By>>;
  where?: Maybe<Reaction_Bool_Exp>;
};


export type Subscription_RootReaction_AggregateArgs = {
  distinct_on?: Maybe<Array<Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reaction_Order_By>>;
  where?: Maybe<Reaction_Bool_Exp>;
};


export type Subscription_RootReaction_By_PkArgs = {
  assignment_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
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
  challenges: Array<Challenge>;
  challenges_aggregate: Challenge_Aggregate;
  code: Scalars['String'];
  id: Scalars['uuid'];
  members: Array<Member>;
  members_aggregate: Member_Aggregate;
  name: Scalars['String'];
};


export type TeamChallengesArgs = {
  distinct_on?: Maybe<Array<Challenge_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Order_By>>;
  where?: Maybe<Challenge_Bool_Exp>;
};


export type TeamChallenges_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Order_By>>;
  where?: Maybe<Challenge_Bool_Exp>;
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
  challenges?: Maybe<Challenge_Bool_Exp>;
  code?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  members?: Maybe<Member_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

export enum Team_Constraint {
  TeamCodeKey = 'team_code_key',
  TeamPkey = 'team_pkey'
}

export type Team_Insert_Input = {
  challenges?: Maybe<Challenge_Arr_Rel_Insert_Input>;
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  members?: Maybe<Member_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
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
  challenges_aggregate?: Maybe<Challenge_Aggregate_Order_By>;
  code?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  members_aggregate?: Maybe<Member_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
};

export enum Team_Select_Column {
  Code = 'code',
  Id = 'id',
  Name = 'name'
}

export type Team_Set_Input = {
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

export enum Team_Update_Column {
  Code = 'code',
  Id = 'id',
  Name = 'name'
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
  assignments: Array<Challenge_Assignment>;
  assignments_aggregate: Challenge_Assignment_Aggregate;
  challenges: Array<Challenge>;
  challenges_aggregate: Challenge_Aggregate;
  email: Scalars['String'];
  id: Scalars['uuid'];
  memberships: Array<Member>;
  memberships_aggregate: Member_Aggregate;
  password: Scalars['String'];
  reactions: Array<Reaction>;
  reactions_aggregate: Reaction_Aggregate;
};


export type UserAssignmentsArgs = {
  distinct_on?: Maybe<Array<Challenge_Assignment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Assignment_Order_By>>;
  where?: Maybe<Challenge_Assignment_Bool_Exp>;
};


export type UserAssignments_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Assignment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Assignment_Order_By>>;
  where?: Maybe<Challenge_Assignment_Bool_Exp>;
};


export type UserChallengesArgs = {
  distinct_on?: Maybe<Array<Challenge_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Order_By>>;
  where?: Maybe<Challenge_Bool_Exp>;
};


export type UserChallenges_AggregateArgs = {
  distinct_on?: Maybe<Array<Challenge_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Challenge_Order_By>>;
  where?: Maybe<Challenge_Bool_Exp>;
};


export type UserMembershipsArgs = {
  distinct_on?: Maybe<Array<Member_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Member_Order_By>>;
  where?: Maybe<Member_Bool_Exp>;
};


export type UserMemberships_AggregateArgs = {
  distinct_on?: Maybe<Array<Member_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Member_Order_By>>;
  where?: Maybe<Member_Bool_Exp>;
};


export type UserReactionsArgs = {
  distinct_on?: Maybe<Array<Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reaction_Order_By>>;
  where?: Maybe<Reaction_Bool_Exp>;
};


export type UserReactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reaction_Order_By>>;
  where?: Maybe<Reaction_Bool_Exp>;
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
  assignments?: Maybe<Challenge_Assignment_Bool_Exp>;
  challenges?: Maybe<Challenge_Bool_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  memberships?: Maybe<Member_Bool_Exp>;
  password?: Maybe<String_Comparison_Exp>;
  reactions?: Maybe<Reaction_Bool_Exp>;
};

export enum User_Constraint {
  UserEmailKey = 'user_email_key',
  UserPkey = 'user_pkey'
}

export type User_Insert_Input = {
  assignments?: Maybe<Challenge_Assignment_Arr_Rel_Insert_Input>;
  challenges?: Maybe<Challenge_Arr_Rel_Insert_Input>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  memberships?: Maybe<Member_Arr_Rel_Insert_Input>;
  password?: Maybe<Scalars['String']>;
  reactions?: Maybe<Reaction_Arr_Rel_Insert_Input>;
};

export type User_Max_Fields = {
   __typename?: 'user_max_fields';
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type User_Max_Order_By = {
  email?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
};

export type User_Min_Fields = {
   __typename?: 'user_min_fields';
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type User_Min_Order_By = {
  email?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
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
  assignments_aggregate?: Maybe<Challenge_Assignment_Aggregate_Order_By>;
  challenges_aggregate?: Maybe<Challenge_Aggregate_Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  memberships_aggregate?: Maybe<Member_Aggregate_Order_By>;
  password?: Maybe<Order_By>;
  reactions_aggregate?: Maybe<Reaction_Aggregate_Order_By>;
};

export enum User_Select_Column {
  Email = 'email',
  Id = 'id',
  Password = 'password'
}

export type User_Set_Input = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
};

export enum User_Update_Column {
  Email = 'email',
  Id = 'id',
  Password = 'password'
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

export type ExampleQueryQueryVariables = {};


export type ExampleQueryQuery = (
  { __typename?: 'query_root' }
  & { challenge: Array<(
    { __typename?: 'challenge' }
    & Pick<Challenge, 'challenger_id' | 'end' | 'id' | 'start'>
  )> }
);


export const ExampleQueryDocument = gql`
    query ExampleQuery {
  challenge {
    challenger_id
    end
    id
    start
  }
}
    `;
export function getSdk(client: GraphQLClient) {
  return {
    ExampleQuery(variables?: ExampleQueryQueryVariables): Promise<ExampleQueryQuery> {
      return client.request<ExampleQueryQuery>(print(ExampleQueryDocument), variables);
    }
  };
}