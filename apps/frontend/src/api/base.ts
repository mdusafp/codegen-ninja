/*
 * ----------------------------------------------------------------------------
 * IMPORTANT: THIS IS AN AUTO_GENERATED FILE. PLEASE DO NOT MODIFY IT DIRECTLY.
 * ----------------------------------------------------------------------------
 */

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Subject: { input: any; output: any };
  timestamp: { input: any; output: any };
  timestamptz: { input: any; output: any };
};

/** columns and relationships of "Bujinkan" */
export type Bujinkan = {
  __typename?: 'Bujinkan';
  /** An array relationship */
  Lessons: Array<Lesson>;
  /** An aggregate relationship */
  Lessons_aggregate: Lesson_Aggregate;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

/** columns and relationships of "Bujinkan" */
export type BujinkanLessonsArgs = {
  distinct_on?: InputMaybe<Array<Lesson_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lesson_Order_By>>;
  where?: InputMaybe<Lesson_Bool_Exp>;
};

/** columns and relationships of "Bujinkan" */
export type BujinkanLessons_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Lesson_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lesson_Order_By>>;
  where?: InputMaybe<Lesson_Bool_Exp>;
};

/** aggregated selection of "Bujinkan" */
export type Bujinkan_Aggregate = {
  __typename?: 'Bujinkan_aggregate';
  aggregate?: Maybe<Bujinkan_Aggregate_Fields>;
  nodes: Array<Bujinkan>;
};

/** aggregate fields of "Bujinkan" */
export type Bujinkan_Aggregate_Fields = {
  __typename?: 'Bujinkan_aggregate_fields';
  avg?: Maybe<Bujinkan_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Bujinkan_Max_Fields>;
  min?: Maybe<Bujinkan_Min_Fields>;
  stddev?: Maybe<Bujinkan_Stddev_Fields>;
  stddev_pop?: Maybe<Bujinkan_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bujinkan_Stddev_Samp_Fields>;
  sum?: Maybe<Bujinkan_Sum_Fields>;
  var_pop?: Maybe<Bujinkan_Var_Pop_Fields>;
  var_samp?: Maybe<Bujinkan_Var_Samp_Fields>;
  variance?: Maybe<Bujinkan_Variance_Fields>;
};

/** aggregate fields of "Bujinkan" */
export type Bujinkan_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bujinkan_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Bujinkan_Avg_Fields = {
  __typename?: 'Bujinkan_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "Bujinkan". All fields are combined with a logical 'AND'. */
export type Bujinkan_Bool_Exp = {
  Lessons?: InputMaybe<Lesson_Bool_Exp>;
  Lessons_aggregate?: InputMaybe<Lesson_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Bujinkan_Bool_Exp>>;
  _not?: InputMaybe<Bujinkan_Bool_Exp>;
  _or?: InputMaybe<Array<Bujinkan_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Bujinkan" */
export enum Bujinkan_Constraint {
  /** unique or primary key constraint on columns "id" */
  BujinkanPkey = 'Bujinkan_pkey',
}

/** input type for incrementing numeric columns in table "Bujinkan" */
export type Bujinkan_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Bujinkan" */
export type Bujinkan_Insert_Input = {
  Lessons?: InputMaybe<Lesson_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Bujinkan_Max_Fields = {
  __typename?: 'Bujinkan_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Bujinkan_Min_Fields = {
  __typename?: 'Bujinkan_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "Bujinkan" */
export type Bujinkan_Mutation_Response = {
  __typename?: 'Bujinkan_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Bujinkan>;
};

/** input type for inserting object relation for remote table "Bujinkan" */
export type Bujinkan_Obj_Rel_Insert_Input = {
  data: Bujinkan_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Bujinkan_On_Conflict>;
};

/** on_conflict condition type for table "Bujinkan" */
export type Bujinkan_On_Conflict = {
  constraint: Bujinkan_Constraint;
  update_columns?: Array<Bujinkan_Update_Column>;
  where?: InputMaybe<Bujinkan_Bool_Exp>;
};

/** Ordering options when selecting data from "Bujinkan". */
export type Bujinkan_Order_By = {
  Lessons_aggregate?: InputMaybe<Lesson_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Bujinkan */
export type Bujinkan_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Bujinkan" */
export enum Bujinkan_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "Bujinkan" */
export type Bujinkan_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Bujinkan_Stddev_Fields = {
  __typename?: 'Bujinkan_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Bujinkan_Stddev_Pop_Fields = {
  __typename?: 'Bujinkan_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Bujinkan_Stddev_Samp_Fields = {
  __typename?: 'Bujinkan_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "Bujinkan" */
export type Bujinkan_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Bujinkan_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Bujinkan_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Bujinkan_Sum_Fields = {
  __typename?: 'Bujinkan_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "Bujinkan" */
export enum Bujinkan_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

export type Bujinkan_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Bujinkan_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Bujinkan_Set_Input>;
  /** filter the rows which have to be updated */
  where: Bujinkan_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Bujinkan_Var_Pop_Fields = {
  __typename?: 'Bujinkan_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Bujinkan_Var_Samp_Fields = {
  __typename?: 'Bujinkan_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Bujinkan_Variance_Fields = {
  __typename?: 'Bujinkan_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** columns and relationships of "Lesson" */
export type Lesson = {
  __typename?: 'Lesson';
  /** An object relationship */
  Bujinkan: Bujinkan;
  /** An array relationship */
  PadowanToLessons: Array<PadowanToLesson>;
  /** An aggregate relationship */
  PadowanToLessons_aggregate: PadowanToLesson_Aggregate;
  /** An object relationship */
  Sensei: Sensei;
  bujinkanId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  lessonTime: Scalars['timestamp']['output'];
  senseiId: Scalars['Int']['output'];
  subject: Scalars['Subject']['output'];
};

/** columns and relationships of "Lesson" */
export type LessonPadowanToLessonsArgs = {
  distinct_on?: InputMaybe<Array<PadowanToLesson_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PadowanToLesson_Order_By>>;
  where?: InputMaybe<PadowanToLesson_Bool_Exp>;
};

/** columns and relationships of "Lesson" */
export type LessonPadowanToLessons_AggregateArgs = {
  distinct_on?: InputMaybe<Array<PadowanToLesson_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PadowanToLesson_Order_By>>;
  where?: InputMaybe<PadowanToLesson_Bool_Exp>;
};

/** aggregated selection of "Lesson" */
export type Lesson_Aggregate = {
  __typename?: 'Lesson_aggregate';
  aggregate?: Maybe<Lesson_Aggregate_Fields>;
  nodes: Array<Lesson>;
};

export type Lesson_Aggregate_Bool_Exp = {
  count?: InputMaybe<Lesson_Aggregate_Bool_Exp_Count>;
};

export type Lesson_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Lesson_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Lesson_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "Lesson" */
export type Lesson_Aggregate_Fields = {
  __typename?: 'Lesson_aggregate_fields';
  avg?: Maybe<Lesson_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Lesson_Max_Fields>;
  min?: Maybe<Lesson_Min_Fields>;
  stddev?: Maybe<Lesson_Stddev_Fields>;
  stddev_pop?: Maybe<Lesson_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Lesson_Stddev_Samp_Fields>;
  sum?: Maybe<Lesson_Sum_Fields>;
  var_pop?: Maybe<Lesson_Var_Pop_Fields>;
  var_samp?: Maybe<Lesson_Var_Samp_Fields>;
  variance?: Maybe<Lesson_Variance_Fields>;
};

/** aggregate fields of "Lesson" */
export type Lesson_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Lesson_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "Lesson" */
export type Lesson_Aggregate_Order_By = {
  avg?: InputMaybe<Lesson_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Lesson_Max_Order_By>;
  min?: InputMaybe<Lesson_Min_Order_By>;
  stddev?: InputMaybe<Lesson_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Lesson_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Lesson_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Lesson_Sum_Order_By>;
  var_pop?: InputMaybe<Lesson_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Lesson_Var_Samp_Order_By>;
  variance?: InputMaybe<Lesson_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Lesson" */
export type Lesson_Arr_Rel_Insert_Input = {
  data: Array<Lesson_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Lesson_On_Conflict>;
};

/** aggregate avg on columns */
export type Lesson_Avg_Fields = {
  __typename?: 'Lesson_avg_fields';
  bujinkanId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  senseiId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "Lesson" */
export type Lesson_Avg_Order_By = {
  bujinkanId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  senseiId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Lesson". All fields are combined with a logical 'AND'. */
export type Lesson_Bool_Exp = {
  Bujinkan?: InputMaybe<Bujinkan_Bool_Exp>;
  PadowanToLessons?: InputMaybe<PadowanToLesson_Bool_Exp>;
  PadowanToLessons_aggregate?: InputMaybe<PadowanToLesson_Aggregate_Bool_Exp>;
  Sensei?: InputMaybe<Sensei_Bool_Exp>;
  _and?: InputMaybe<Array<Lesson_Bool_Exp>>;
  _not?: InputMaybe<Lesson_Bool_Exp>;
  _or?: InputMaybe<Array<Lesson_Bool_Exp>>;
  bujinkanId?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  lessonTime?: InputMaybe<Timestamp_Comparison_Exp>;
  senseiId?: InputMaybe<Int_Comparison_Exp>;
  subject?: InputMaybe<Subject_Comparison_Exp>;
};

/** unique or primary key constraints on table "Lesson" */
export enum Lesson_Constraint {
  /** unique or primary key constraint on columns "id" */
  LessonPkey = 'Lesson_pkey',
}

/** input type for incrementing numeric columns in table "Lesson" */
export type Lesson_Inc_Input = {
  bujinkanId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  senseiId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Lesson" */
export type Lesson_Insert_Input = {
  Bujinkan?: InputMaybe<Bujinkan_Obj_Rel_Insert_Input>;
  PadowanToLessons?: InputMaybe<PadowanToLesson_Arr_Rel_Insert_Input>;
  Sensei?: InputMaybe<Sensei_Obj_Rel_Insert_Input>;
  bujinkanId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  lessonTime?: InputMaybe<Scalars['timestamp']['input']>;
  senseiId?: InputMaybe<Scalars['Int']['input']>;
  subject?: InputMaybe<Scalars['Subject']['input']>;
};

/** aggregate max on columns */
export type Lesson_Max_Fields = {
  __typename?: 'Lesson_max_fields';
  bujinkanId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lessonTime?: Maybe<Scalars['timestamp']['output']>;
  senseiId?: Maybe<Scalars['Int']['output']>;
  subject?: Maybe<Scalars['Subject']['output']>;
};

/** order by max() on columns of table "Lesson" */
export type Lesson_Max_Order_By = {
  bujinkanId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lessonTime?: InputMaybe<Order_By>;
  senseiId?: InputMaybe<Order_By>;
  subject?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Lesson_Min_Fields = {
  __typename?: 'Lesson_min_fields';
  bujinkanId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lessonTime?: Maybe<Scalars['timestamp']['output']>;
  senseiId?: Maybe<Scalars['Int']['output']>;
  subject?: Maybe<Scalars['Subject']['output']>;
};

/** order by min() on columns of table "Lesson" */
export type Lesson_Min_Order_By = {
  bujinkanId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lessonTime?: InputMaybe<Order_By>;
  senseiId?: InputMaybe<Order_By>;
  subject?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Lesson" */
export type Lesson_Mutation_Response = {
  __typename?: 'Lesson_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Lesson>;
};

/** input type for inserting object relation for remote table "Lesson" */
export type Lesson_Obj_Rel_Insert_Input = {
  data: Lesson_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Lesson_On_Conflict>;
};

/** on_conflict condition type for table "Lesson" */
export type Lesson_On_Conflict = {
  constraint: Lesson_Constraint;
  update_columns?: Array<Lesson_Update_Column>;
  where?: InputMaybe<Lesson_Bool_Exp>;
};

/** Ordering options when selecting data from "Lesson". */
export type Lesson_Order_By = {
  Bujinkan?: InputMaybe<Bujinkan_Order_By>;
  PadowanToLessons_aggregate?: InputMaybe<PadowanToLesson_Aggregate_Order_By>;
  Sensei?: InputMaybe<Sensei_Order_By>;
  bujinkanId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lessonTime?: InputMaybe<Order_By>;
  senseiId?: InputMaybe<Order_By>;
  subject?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Lesson */
export type Lesson_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Lesson" */
export enum Lesson_Select_Column {
  /** column name */
  BujinkanId = 'bujinkanId',
  /** column name */
  Id = 'id',
  /** column name */
  LessonTime = 'lessonTime',
  /** column name */
  SenseiId = 'senseiId',
  /** column name */
  Subject = 'subject',
}

/** input type for updating data in table "Lesson" */
export type Lesson_Set_Input = {
  bujinkanId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  lessonTime?: InputMaybe<Scalars['timestamp']['input']>;
  senseiId?: InputMaybe<Scalars['Int']['input']>;
  subject?: InputMaybe<Scalars['Subject']['input']>;
};

/** aggregate stddev on columns */
export type Lesson_Stddev_Fields = {
  __typename?: 'Lesson_stddev_fields';
  bujinkanId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  senseiId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "Lesson" */
export type Lesson_Stddev_Order_By = {
  bujinkanId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  senseiId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Lesson_Stddev_Pop_Fields = {
  __typename?: 'Lesson_stddev_pop_fields';
  bujinkanId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  senseiId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "Lesson" */
export type Lesson_Stddev_Pop_Order_By = {
  bujinkanId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  senseiId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Lesson_Stddev_Samp_Fields = {
  __typename?: 'Lesson_stddev_samp_fields';
  bujinkanId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  senseiId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "Lesson" */
export type Lesson_Stddev_Samp_Order_By = {
  bujinkanId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  senseiId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Lesson" */
export type Lesson_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Lesson_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Lesson_Stream_Cursor_Value_Input = {
  bujinkanId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  lessonTime?: InputMaybe<Scalars['timestamp']['input']>;
  senseiId?: InputMaybe<Scalars['Int']['input']>;
  subject?: InputMaybe<Scalars['Subject']['input']>;
};

/** aggregate sum on columns */
export type Lesson_Sum_Fields = {
  __typename?: 'Lesson_sum_fields';
  bujinkanId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  senseiId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "Lesson" */
export type Lesson_Sum_Order_By = {
  bujinkanId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  senseiId?: InputMaybe<Order_By>;
};

/** update columns of table "Lesson" */
export enum Lesson_Update_Column {
  /** column name */
  BujinkanId = 'bujinkanId',
  /** column name */
  Id = 'id',
  /** column name */
  LessonTime = 'lessonTime',
  /** column name */
  SenseiId = 'senseiId',
  /** column name */
  Subject = 'subject',
}

export type Lesson_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Lesson_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Lesson_Set_Input>;
  /** filter the rows which have to be updated */
  where: Lesson_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Lesson_Var_Pop_Fields = {
  __typename?: 'Lesson_var_pop_fields';
  bujinkanId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  senseiId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "Lesson" */
export type Lesson_Var_Pop_Order_By = {
  bujinkanId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  senseiId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Lesson_Var_Samp_Fields = {
  __typename?: 'Lesson_var_samp_fields';
  bujinkanId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  senseiId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "Lesson" */
export type Lesson_Var_Samp_Order_By = {
  bujinkanId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  senseiId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Lesson_Variance_Fields = {
  __typename?: 'Lesson_variance_fields';
  bujinkanId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  senseiId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "Lesson" */
export type Lesson_Variance_Order_By = {
  bujinkanId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  senseiId?: InputMaybe<Order_By>;
};

/** columns and relationships of "Padowan" */
export type Padowan = {
  __typename?: 'Padowan';
  /** An array relationship */
  PadowanToLessons: Array<PadowanToLesson>;
  /** An aggregate relationship */
  PadowanToLessons_aggregate: PadowanToLesson_Aggregate;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

/** columns and relationships of "Padowan" */
export type PadowanPadowanToLessonsArgs = {
  distinct_on?: InputMaybe<Array<PadowanToLesson_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PadowanToLesson_Order_By>>;
  where?: InputMaybe<PadowanToLesson_Bool_Exp>;
};

/** columns and relationships of "Padowan" */
export type PadowanPadowanToLessons_AggregateArgs = {
  distinct_on?: InputMaybe<Array<PadowanToLesson_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PadowanToLesson_Order_By>>;
  where?: InputMaybe<PadowanToLesson_Bool_Exp>;
};

/** columns and relationships of "PadowanToLesson" */
export type PadowanToLesson = {
  __typename?: 'PadowanToLesson';
  /** An object relationship */
  Lesson: Lesson;
  /** An object relationship */
  Padowan: Padowan;
  assignedAt: Scalars['timestamp']['output'];
  lessonId: Scalars['Int']['output'];
  padowanId: Scalars['Int']['output'];
};

/** aggregated selection of "PadowanToLesson" */
export type PadowanToLesson_Aggregate = {
  __typename?: 'PadowanToLesson_aggregate';
  aggregate?: Maybe<PadowanToLesson_Aggregate_Fields>;
  nodes: Array<PadowanToLesson>;
};

export type PadowanToLesson_Aggregate_Bool_Exp = {
  count?: InputMaybe<PadowanToLesson_Aggregate_Bool_Exp_Count>;
};

export type PadowanToLesson_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<PadowanToLesson_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PadowanToLesson_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "PadowanToLesson" */
export type PadowanToLesson_Aggregate_Fields = {
  __typename?: 'PadowanToLesson_aggregate_fields';
  avg?: Maybe<PadowanToLesson_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<PadowanToLesson_Max_Fields>;
  min?: Maybe<PadowanToLesson_Min_Fields>;
  stddev?: Maybe<PadowanToLesson_Stddev_Fields>;
  stddev_pop?: Maybe<PadowanToLesson_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<PadowanToLesson_Stddev_Samp_Fields>;
  sum?: Maybe<PadowanToLesson_Sum_Fields>;
  var_pop?: Maybe<PadowanToLesson_Var_Pop_Fields>;
  var_samp?: Maybe<PadowanToLesson_Var_Samp_Fields>;
  variance?: Maybe<PadowanToLesson_Variance_Fields>;
};

/** aggregate fields of "PadowanToLesson" */
export type PadowanToLesson_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<PadowanToLesson_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "PadowanToLesson" */
export type PadowanToLesson_Aggregate_Order_By = {
  avg?: InputMaybe<PadowanToLesson_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<PadowanToLesson_Max_Order_By>;
  min?: InputMaybe<PadowanToLesson_Min_Order_By>;
  stddev?: InputMaybe<PadowanToLesson_Stddev_Order_By>;
  stddev_pop?: InputMaybe<PadowanToLesson_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<PadowanToLesson_Stddev_Samp_Order_By>;
  sum?: InputMaybe<PadowanToLesson_Sum_Order_By>;
  var_pop?: InputMaybe<PadowanToLesson_Var_Pop_Order_By>;
  var_samp?: InputMaybe<PadowanToLesson_Var_Samp_Order_By>;
  variance?: InputMaybe<PadowanToLesson_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "PadowanToLesson" */
export type PadowanToLesson_Arr_Rel_Insert_Input = {
  data: Array<PadowanToLesson_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<PadowanToLesson_On_Conflict>;
};

/** aggregate avg on columns */
export type PadowanToLesson_Avg_Fields = {
  __typename?: 'PadowanToLesson_avg_fields';
  lessonId?: Maybe<Scalars['Float']['output']>;
  padowanId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "PadowanToLesson" */
export type PadowanToLesson_Avg_Order_By = {
  lessonId?: InputMaybe<Order_By>;
  padowanId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "PadowanToLesson". All fields are combined with a logical 'AND'. */
export type PadowanToLesson_Bool_Exp = {
  Lesson?: InputMaybe<Lesson_Bool_Exp>;
  Padowan?: InputMaybe<Padowan_Bool_Exp>;
  _and?: InputMaybe<Array<PadowanToLesson_Bool_Exp>>;
  _not?: InputMaybe<PadowanToLesson_Bool_Exp>;
  _or?: InputMaybe<Array<PadowanToLesson_Bool_Exp>>;
  assignedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  lessonId?: InputMaybe<Int_Comparison_Exp>;
  padowanId?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "PadowanToLesson" */
export enum PadowanToLesson_Constraint {
  /** unique or primary key constraint on columns "lessonId", "padowanId" */
  PadowanToLessonPkey = 'PadowanToLesson_pkey',
}

/** input type for incrementing numeric columns in table "PadowanToLesson" */
export type PadowanToLesson_Inc_Input = {
  lessonId?: InputMaybe<Scalars['Int']['input']>;
  padowanId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "PadowanToLesson" */
export type PadowanToLesson_Insert_Input = {
  Lesson?: InputMaybe<Lesson_Obj_Rel_Insert_Input>;
  Padowan?: InputMaybe<Padowan_Obj_Rel_Insert_Input>;
  assignedAt?: InputMaybe<Scalars['timestamp']['input']>;
  lessonId?: InputMaybe<Scalars['Int']['input']>;
  padowanId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type PadowanToLesson_Max_Fields = {
  __typename?: 'PadowanToLesson_max_fields';
  assignedAt?: Maybe<Scalars['timestamp']['output']>;
  lessonId?: Maybe<Scalars['Int']['output']>;
  padowanId?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "PadowanToLesson" */
export type PadowanToLesson_Max_Order_By = {
  assignedAt?: InputMaybe<Order_By>;
  lessonId?: InputMaybe<Order_By>;
  padowanId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type PadowanToLesson_Min_Fields = {
  __typename?: 'PadowanToLesson_min_fields';
  assignedAt?: Maybe<Scalars['timestamp']['output']>;
  lessonId?: Maybe<Scalars['Int']['output']>;
  padowanId?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "PadowanToLesson" */
export type PadowanToLesson_Min_Order_By = {
  assignedAt?: InputMaybe<Order_By>;
  lessonId?: InputMaybe<Order_By>;
  padowanId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "PadowanToLesson" */
export type PadowanToLesson_Mutation_Response = {
  __typename?: 'PadowanToLesson_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<PadowanToLesson>;
};

/** on_conflict condition type for table "PadowanToLesson" */
export type PadowanToLesson_On_Conflict = {
  constraint: PadowanToLesson_Constraint;
  update_columns?: Array<PadowanToLesson_Update_Column>;
  where?: InputMaybe<PadowanToLesson_Bool_Exp>;
};

/** Ordering options when selecting data from "PadowanToLesson". */
export type PadowanToLesson_Order_By = {
  Lesson?: InputMaybe<Lesson_Order_By>;
  Padowan?: InputMaybe<Padowan_Order_By>;
  assignedAt?: InputMaybe<Order_By>;
  lessonId?: InputMaybe<Order_By>;
  padowanId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: PadowanToLesson */
export type PadowanToLesson_Pk_Columns_Input = {
  lessonId: Scalars['Int']['input'];
  padowanId: Scalars['Int']['input'];
};

/** select columns of table "PadowanToLesson" */
export enum PadowanToLesson_Select_Column {
  /** column name */
  AssignedAt = 'assignedAt',
  /** column name */
  LessonId = 'lessonId',
  /** column name */
  PadowanId = 'padowanId',
}

/** input type for updating data in table "PadowanToLesson" */
export type PadowanToLesson_Set_Input = {
  assignedAt?: InputMaybe<Scalars['timestamp']['input']>;
  lessonId?: InputMaybe<Scalars['Int']['input']>;
  padowanId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type PadowanToLesson_Stddev_Fields = {
  __typename?: 'PadowanToLesson_stddev_fields';
  lessonId?: Maybe<Scalars['Float']['output']>;
  padowanId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "PadowanToLesson" */
export type PadowanToLesson_Stddev_Order_By = {
  lessonId?: InputMaybe<Order_By>;
  padowanId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type PadowanToLesson_Stddev_Pop_Fields = {
  __typename?: 'PadowanToLesson_stddev_pop_fields';
  lessonId?: Maybe<Scalars['Float']['output']>;
  padowanId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "PadowanToLesson" */
export type PadowanToLesson_Stddev_Pop_Order_By = {
  lessonId?: InputMaybe<Order_By>;
  padowanId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type PadowanToLesson_Stddev_Samp_Fields = {
  __typename?: 'PadowanToLesson_stddev_samp_fields';
  lessonId?: Maybe<Scalars['Float']['output']>;
  padowanId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "PadowanToLesson" */
export type PadowanToLesson_Stddev_Samp_Order_By = {
  lessonId?: InputMaybe<Order_By>;
  padowanId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "PadowanToLesson" */
export type PadowanToLesson_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: PadowanToLesson_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type PadowanToLesson_Stream_Cursor_Value_Input = {
  assignedAt?: InputMaybe<Scalars['timestamp']['input']>;
  lessonId?: InputMaybe<Scalars['Int']['input']>;
  padowanId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type PadowanToLesson_Sum_Fields = {
  __typename?: 'PadowanToLesson_sum_fields';
  lessonId?: Maybe<Scalars['Int']['output']>;
  padowanId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "PadowanToLesson" */
export type PadowanToLesson_Sum_Order_By = {
  lessonId?: InputMaybe<Order_By>;
  padowanId?: InputMaybe<Order_By>;
};

/** update columns of table "PadowanToLesson" */
export enum PadowanToLesson_Update_Column {
  /** column name */
  AssignedAt = 'assignedAt',
  /** column name */
  LessonId = 'lessonId',
  /** column name */
  PadowanId = 'padowanId',
}

export type PadowanToLesson_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<PadowanToLesson_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PadowanToLesson_Set_Input>;
  /** filter the rows which have to be updated */
  where: PadowanToLesson_Bool_Exp;
};

/** aggregate var_pop on columns */
export type PadowanToLesson_Var_Pop_Fields = {
  __typename?: 'PadowanToLesson_var_pop_fields';
  lessonId?: Maybe<Scalars['Float']['output']>;
  padowanId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "PadowanToLesson" */
export type PadowanToLesson_Var_Pop_Order_By = {
  lessonId?: InputMaybe<Order_By>;
  padowanId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type PadowanToLesson_Var_Samp_Fields = {
  __typename?: 'PadowanToLesson_var_samp_fields';
  lessonId?: Maybe<Scalars['Float']['output']>;
  padowanId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "PadowanToLesson" */
export type PadowanToLesson_Var_Samp_Order_By = {
  lessonId?: InputMaybe<Order_By>;
  padowanId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type PadowanToLesson_Variance_Fields = {
  __typename?: 'PadowanToLesson_variance_fields';
  lessonId?: Maybe<Scalars['Float']['output']>;
  padowanId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "PadowanToLesson" */
export type PadowanToLesson_Variance_Order_By = {
  lessonId?: InputMaybe<Order_By>;
  padowanId?: InputMaybe<Order_By>;
};

/** aggregated selection of "Padowan" */
export type Padowan_Aggregate = {
  __typename?: 'Padowan_aggregate';
  aggregate?: Maybe<Padowan_Aggregate_Fields>;
  nodes: Array<Padowan>;
};

/** aggregate fields of "Padowan" */
export type Padowan_Aggregate_Fields = {
  __typename?: 'Padowan_aggregate_fields';
  avg?: Maybe<Padowan_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Padowan_Max_Fields>;
  min?: Maybe<Padowan_Min_Fields>;
  stddev?: Maybe<Padowan_Stddev_Fields>;
  stddev_pop?: Maybe<Padowan_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Padowan_Stddev_Samp_Fields>;
  sum?: Maybe<Padowan_Sum_Fields>;
  var_pop?: Maybe<Padowan_Var_Pop_Fields>;
  var_samp?: Maybe<Padowan_Var_Samp_Fields>;
  variance?: Maybe<Padowan_Variance_Fields>;
};

/** aggregate fields of "Padowan" */
export type Padowan_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Padowan_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Padowan_Avg_Fields = {
  __typename?: 'Padowan_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "Padowan". All fields are combined with a logical 'AND'. */
export type Padowan_Bool_Exp = {
  PadowanToLessons?: InputMaybe<PadowanToLesson_Bool_Exp>;
  PadowanToLessons_aggregate?: InputMaybe<PadowanToLesson_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Padowan_Bool_Exp>>;
  _not?: InputMaybe<Padowan_Bool_Exp>;
  _or?: InputMaybe<Array<Padowan_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Padowan" */
export enum Padowan_Constraint {
  /** unique or primary key constraint on columns "id" */
  PadowanPkey = 'Padowan_pkey',
}

/** input type for incrementing numeric columns in table "Padowan" */
export type Padowan_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Padowan" */
export type Padowan_Insert_Input = {
  PadowanToLessons?: InputMaybe<PadowanToLesson_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Padowan_Max_Fields = {
  __typename?: 'Padowan_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Padowan_Min_Fields = {
  __typename?: 'Padowan_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "Padowan" */
export type Padowan_Mutation_Response = {
  __typename?: 'Padowan_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Padowan>;
};

/** input type for inserting object relation for remote table "Padowan" */
export type Padowan_Obj_Rel_Insert_Input = {
  data: Padowan_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Padowan_On_Conflict>;
};

/** on_conflict condition type for table "Padowan" */
export type Padowan_On_Conflict = {
  constraint: Padowan_Constraint;
  update_columns?: Array<Padowan_Update_Column>;
  where?: InputMaybe<Padowan_Bool_Exp>;
};

/** Ordering options when selecting data from "Padowan". */
export type Padowan_Order_By = {
  PadowanToLessons_aggregate?: InputMaybe<PadowanToLesson_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Padowan */
export type Padowan_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Padowan" */
export enum Padowan_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "Padowan" */
export type Padowan_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Padowan_Stddev_Fields = {
  __typename?: 'Padowan_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Padowan_Stddev_Pop_Fields = {
  __typename?: 'Padowan_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Padowan_Stddev_Samp_Fields = {
  __typename?: 'Padowan_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "Padowan" */
export type Padowan_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Padowan_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Padowan_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Padowan_Sum_Fields = {
  __typename?: 'Padowan_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "Padowan" */
export enum Padowan_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

export type Padowan_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Padowan_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Padowan_Set_Input>;
  /** filter the rows which have to be updated */
  where: Padowan_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Padowan_Var_Pop_Fields = {
  __typename?: 'Padowan_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Padowan_Var_Samp_Fields = {
  __typename?: 'Padowan_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Padowan_Variance_Fields = {
  __typename?: 'Padowan_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "Sensei" */
export type Sensei = {
  __typename?: 'Sensei';
  /** An array relationship */
  Lessons: Array<Lesson>;
  /** An aggregate relationship */
  Lessons_aggregate: Lesson_Aggregate;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

/** columns and relationships of "Sensei" */
export type SenseiLessonsArgs = {
  distinct_on?: InputMaybe<Array<Lesson_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lesson_Order_By>>;
  where?: InputMaybe<Lesson_Bool_Exp>;
};

/** columns and relationships of "Sensei" */
export type SenseiLessons_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Lesson_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lesson_Order_By>>;
  where?: InputMaybe<Lesson_Bool_Exp>;
};

/** aggregated selection of "Sensei" */
export type Sensei_Aggregate = {
  __typename?: 'Sensei_aggregate';
  aggregate?: Maybe<Sensei_Aggregate_Fields>;
  nodes: Array<Sensei>;
};

/** aggregate fields of "Sensei" */
export type Sensei_Aggregate_Fields = {
  __typename?: 'Sensei_aggregate_fields';
  avg?: Maybe<Sensei_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Sensei_Max_Fields>;
  min?: Maybe<Sensei_Min_Fields>;
  stddev?: Maybe<Sensei_Stddev_Fields>;
  stddev_pop?: Maybe<Sensei_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Sensei_Stddev_Samp_Fields>;
  sum?: Maybe<Sensei_Sum_Fields>;
  var_pop?: Maybe<Sensei_Var_Pop_Fields>;
  var_samp?: Maybe<Sensei_Var_Samp_Fields>;
  variance?: Maybe<Sensei_Variance_Fields>;
};

/** aggregate fields of "Sensei" */
export type Sensei_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Sensei_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Sensei_Avg_Fields = {
  __typename?: 'Sensei_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "Sensei". All fields are combined with a logical 'AND'. */
export type Sensei_Bool_Exp = {
  Lessons?: InputMaybe<Lesson_Bool_Exp>;
  Lessons_aggregate?: InputMaybe<Lesson_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Sensei_Bool_Exp>>;
  _not?: InputMaybe<Sensei_Bool_Exp>;
  _or?: InputMaybe<Array<Sensei_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Sensei" */
export enum Sensei_Constraint {
  /** unique or primary key constraint on columns "id" */
  SenseiPkey = 'Sensei_pkey',
}

/** input type for incrementing numeric columns in table "Sensei" */
export type Sensei_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Sensei" */
export type Sensei_Insert_Input = {
  Lessons?: InputMaybe<Lesson_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Sensei_Max_Fields = {
  __typename?: 'Sensei_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Sensei_Min_Fields = {
  __typename?: 'Sensei_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "Sensei" */
export type Sensei_Mutation_Response = {
  __typename?: 'Sensei_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Sensei>;
};

/** input type for inserting object relation for remote table "Sensei" */
export type Sensei_Obj_Rel_Insert_Input = {
  data: Sensei_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Sensei_On_Conflict>;
};

/** on_conflict condition type for table "Sensei" */
export type Sensei_On_Conflict = {
  constraint: Sensei_Constraint;
  update_columns?: Array<Sensei_Update_Column>;
  where?: InputMaybe<Sensei_Bool_Exp>;
};

/** Ordering options when selecting data from "Sensei". */
export type Sensei_Order_By = {
  Lessons_aggregate?: InputMaybe<Lesson_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Sensei */
export type Sensei_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Sensei" */
export enum Sensei_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "Sensei" */
export type Sensei_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Sensei_Stddev_Fields = {
  __typename?: 'Sensei_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Sensei_Stddev_Pop_Fields = {
  __typename?: 'Sensei_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Sensei_Stddev_Samp_Fields = {
  __typename?: 'Sensei_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "Sensei" */
export type Sensei_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Sensei_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Sensei_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Sensei_Sum_Fields = {
  __typename?: 'Sensei_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "Sensei" */
export enum Sensei_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

export type Sensei_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Sensei_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Sensei_Set_Input>;
  /** filter the rows which have to be updated */
  where: Sensei_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Sensei_Var_Pop_Fields = {
  __typename?: 'Sensei_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Sensei_Var_Samp_Fields = {
  __typename?: 'Sensei_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Sensei_Variance_Fields = {
  __typename?: 'Sensei_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "Subject". All fields are combined with logical 'AND'. */
export type Subject_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Subject']['input']>;
  _gt?: InputMaybe<Scalars['Subject']['input']>;
  _gte?: InputMaybe<Scalars['Subject']['input']>;
  _in?: InputMaybe<Array<Scalars['Subject']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Subject']['input']>;
  _lte?: InputMaybe<Scalars['Subject']['input']>;
  _neq?: InputMaybe<Scalars['Subject']['input']>;
  _nin?: InputMaybe<Array<Scalars['Subject']['input']>>;
};

/** columns and relationships of "_prisma_migrations" */
export type _Prisma_Migrations = {
  __typename?: '_prisma_migrations';
  applied_steps_count: Scalars['Int']['output'];
  checksum: Scalars['String']['output'];
  finished_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['String']['output'];
  logs?: Maybe<Scalars['String']['output']>;
  migration_name: Scalars['String']['output'];
  rolled_back_at?: Maybe<Scalars['timestamptz']['output']>;
  started_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "_prisma_migrations" */
export type _Prisma_Migrations_Aggregate = {
  __typename?: '_prisma_migrations_aggregate';
  aggregate?: Maybe<_Prisma_Migrations_Aggregate_Fields>;
  nodes: Array<_Prisma_Migrations>;
};

/** aggregate fields of "_prisma_migrations" */
export type _Prisma_Migrations_Aggregate_Fields = {
  __typename?: '_prisma_migrations_aggregate_fields';
  avg?: Maybe<_Prisma_Migrations_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<_Prisma_Migrations_Max_Fields>;
  min?: Maybe<_Prisma_Migrations_Min_Fields>;
  stddev?: Maybe<_Prisma_Migrations_Stddev_Fields>;
  stddev_pop?: Maybe<_Prisma_Migrations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<_Prisma_Migrations_Stddev_Samp_Fields>;
  sum?: Maybe<_Prisma_Migrations_Sum_Fields>;
  var_pop?: Maybe<_Prisma_Migrations_Var_Pop_Fields>;
  var_samp?: Maybe<_Prisma_Migrations_Var_Samp_Fields>;
  variance?: Maybe<_Prisma_Migrations_Variance_Fields>;
};

/** aggregate fields of "_prisma_migrations" */
export type _Prisma_Migrations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<_Prisma_Migrations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type _Prisma_Migrations_Avg_Fields = {
  __typename?: '_prisma_migrations_avg_fields';
  applied_steps_count?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "_prisma_migrations". All fields are combined with a logical 'AND'. */
export type _Prisma_Migrations_Bool_Exp = {
  _and?: InputMaybe<Array<_Prisma_Migrations_Bool_Exp>>;
  _not?: InputMaybe<_Prisma_Migrations_Bool_Exp>;
  _or?: InputMaybe<Array<_Prisma_Migrations_Bool_Exp>>;
  applied_steps_count?: InputMaybe<Int_Comparison_Exp>;
  checksum?: InputMaybe<String_Comparison_Exp>;
  finished_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  logs?: InputMaybe<String_Comparison_Exp>;
  migration_name?: InputMaybe<String_Comparison_Exp>;
  rolled_back_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  started_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "_prisma_migrations" */
export enum _Prisma_Migrations_Constraint {
  /** unique or primary key constraint on columns "id" */
  PrismaMigrationsPkey = '_prisma_migrations_pkey',
}

/** input type for incrementing numeric columns in table "_prisma_migrations" */
export type _Prisma_Migrations_Inc_Input = {
  applied_steps_count?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "_prisma_migrations" */
export type _Prisma_Migrations_Insert_Input = {
  applied_steps_count?: InputMaybe<Scalars['Int']['input']>;
  checksum?: InputMaybe<Scalars['String']['input']>;
  finished_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  logs?: InputMaybe<Scalars['String']['input']>;
  migration_name?: InputMaybe<Scalars['String']['input']>;
  rolled_back_at?: InputMaybe<Scalars['timestamptz']['input']>;
  started_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type _Prisma_Migrations_Max_Fields = {
  __typename?: '_prisma_migrations_max_fields';
  applied_steps_count?: Maybe<Scalars['Int']['output']>;
  checksum?: Maybe<Scalars['String']['output']>;
  finished_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  logs?: Maybe<Scalars['String']['output']>;
  migration_name?: Maybe<Scalars['String']['output']>;
  rolled_back_at?: Maybe<Scalars['timestamptz']['output']>;
  started_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type _Prisma_Migrations_Min_Fields = {
  __typename?: '_prisma_migrations_min_fields';
  applied_steps_count?: Maybe<Scalars['Int']['output']>;
  checksum?: Maybe<Scalars['String']['output']>;
  finished_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  logs?: Maybe<Scalars['String']['output']>;
  migration_name?: Maybe<Scalars['String']['output']>;
  rolled_back_at?: Maybe<Scalars['timestamptz']['output']>;
  started_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "_prisma_migrations" */
export type _Prisma_Migrations_Mutation_Response = {
  __typename?: '_prisma_migrations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<_Prisma_Migrations>;
};

/** on_conflict condition type for table "_prisma_migrations" */
export type _Prisma_Migrations_On_Conflict = {
  constraint: _Prisma_Migrations_Constraint;
  update_columns?: Array<_Prisma_Migrations_Update_Column>;
  where?: InputMaybe<_Prisma_Migrations_Bool_Exp>;
};

/** Ordering options when selecting data from "_prisma_migrations". */
export type _Prisma_Migrations_Order_By = {
  applied_steps_count?: InputMaybe<Order_By>;
  checksum?: InputMaybe<Order_By>;
  finished_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  logs?: InputMaybe<Order_By>;
  migration_name?: InputMaybe<Order_By>;
  rolled_back_at?: InputMaybe<Order_By>;
  started_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: _prisma_migrations */
export type _Prisma_Migrations_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "_prisma_migrations" */
export enum _Prisma_Migrations_Select_Column {
  /** column name */
  AppliedStepsCount = 'applied_steps_count',
  /** column name */
  Checksum = 'checksum',
  /** column name */
  FinishedAt = 'finished_at',
  /** column name */
  Id = 'id',
  /** column name */
  Logs = 'logs',
  /** column name */
  MigrationName = 'migration_name',
  /** column name */
  RolledBackAt = 'rolled_back_at',
  /** column name */
  StartedAt = 'started_at',
}

/** input type for updating data in table "_prisma_migrations" */
export type _Prisma_Migrations_Set_Input = {
  applied_steps_count?: InputMaybe<Scalars['Int']['input']>;
  checksum?: InputMaybe<Scalars['String']['input']>;
  finished_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  logs?: InputMaybe<Scalars['String']['input']>;
  migration_name?: InputMaybe<Scalars['String']['input']>;
  rolled_back_at?: InputMaybe<Scalars['timestamptz']['input']>;
  started_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type _Prisma_Migrations_Stddev_Fields = {
  __typename?: '_prisma_migrations_stddev_fields';
  applied_steps_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type _Prisma_Migrations_Stddev_Pop_Fields = {
  __typename?: '_prisma_migrations_stddev_pop_fields';
  applied_steps_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type _Prisma_Migrations_Stddev_Samp_Fields = {
  __typename?: '_prisma_migrations_stddev_samp_fields';
  applied_steps_count?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "_prisma_migrations" */
export type _Prisma_Migrations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: _Prisma_Migrations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type _Prisma_Migrations_Stream_Cursor_Value_Input = {
  applied_steps_count?: InputMaybe<Scalars['Int']['input']>;
  checksum?: InputMaybe<Scalars['String']['input']>;
  finished_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  logs?: InputMaybe<Scalars['String']['input']>;
  migration_name?: InputMaybe<Scalars['String']['input']>;
  rolled_back_at?: InputMaybe<Scalars['timestamptz']['input']>;
  started_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type _Prisma_Migrations_Sum_Fields = {
  __typename?: '_prisma_migrations_sum_fields';
  applied_steps_count?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "_prisma_migrations" */
export enum _Prisma_Migrations_Update_Column {
  /** column name */
  AppliedStepsCount = 'applied_steps_count',
  /** column name */
  Checksum = 'checksum',
  /** column name */
  FinishedAt = 'finished_at',
  /** column name */
  Id = 'id',
  /** column name */
  Logs = 'logs',
  /** column name */
  MigrationName = 'migration_name',
  /** column name */
  RolledBackAt = 'rolled_back_at',
  /** column name */
  StartedAt = 'started_at',
}

export type _Prisma_Migrations_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<_Prisma_Migrations_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<_Prisma_Migrations_Set_Input>;
  /** filter the rows which have to be updated */
  where: _Prisma_Migrations_Bool_Exp;
};

/** aggregate var_pop on columns */
export type _Prisma_Migrations_Var_Pop_Fields = {
  __typename?: '_prisma_migrations_var_pop_fields';
  applied_steps_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type _Prisma_Migrations_Var_Samp_Fields = {
  __typename?: '_prisma_migrations_var_samp_fields';
  applied_steps_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type _Prisma_Migrations_Variance_Fields = {
  __typename?: '_prisma_migrations_variance_fields';
  applied_steps_count?: Maybe<Scalars['Float']['output']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC',
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  ninjas?: Maybe<Ninjas_Mutation_Frontend>;
};

export type Ninjas_Mutation_Frontend = {
  __typename?: 'ninjas_mutation_frontend';
  /** delete data from the table: "Bujinkan" */
  delete_Bujinkan?: Maybe<Bujinkan_Mutation_Response>;
  /** delete single row from the table: "Bujinkan" */
  delete_Bujinkan_by_pk?: Maybe<Bujinkan>;
  /** delete data from the table: "Lesson" */
  delete_Lesson?: Maybe<Lesson_Mutation_Response>;
  /** delete single row from the table: "Lesson" */
  delete_Lesson_by_pk?: Maybe<Lesson>;
  /** delete data from the table: "Padowan" */
  delete_Padowan?: Maybe<Padowan_Mutation_Response>;
  /** delete data from the table: "PadowanToLesson" */
  delete_PadowanToLesson?: Maybe<PadowanToLesson_Mutation_Response>;
  /** delete single row from the table: "PadowanToLesson" */
  delete_PadowanToLesson_by_pk?: Maybe<PadowanToLesson>;
  /** delete single row from the table: "Padowan" */
  delete_Padowan_by_pk?: Maybe<Padowan>;
  /** delete data from the table: "Sensei" */
  delete_Sensei?: Maybe<Sensei_Mutation_Response>;
  /** delete single row from the table: "Sensei" */
  delete_Sensei_by_pk?: Maybe<Sensei>;
  /** delete data from the table: "_prisma_migrations" */
  delete__prisma_migrations?: Maybe<_Prisma_Migrations_Mutation_Response>;
  /** delete single row from the table: "_prisma_migrations" */
  delete__prisma_migrations_by_pk?: Maybe<_Prisma_Migrations>;
  /** insert data into the table: "Bujinkan" */
  insert_Bujinkan?: Maybe<Bujinkan_Mutation_Response>;
  /** insert a single row into the table: "Bujinkan" */
  insert_Bujinkan_one?: Maybe<Bujinkan>;
  /** insert data into the table: "Lesson" */
  insert_Lesson?: Maybe<Lesson_Mutation_Response>;
  /** insert a single row into the table: "Lesson" */
  insert_Lesson_one?: Maybe<Lesson>;
  /** insert data into the table: "Padowan" */
  insert_Padowan?: Maybe<Padowan_Mutation_Response>;
  /** insert data into the table: "PadowanToLesson" */
  insert_PadowanToLesson?: Maybe<PadowanToLesson_Mutation_Response>;
  /** insert a single row into the table: "PadowanToLesson" */
  insert_PadowanToLesson_one?: Maybe<PadowanToLesson>;
  /** insert a single row into the table: "Padowan" */
  insert_Padowan_one?: Maybe<Padowan>;
  /** insert data into the table: "Sensei" */
  insert_Sensei?: Maybe<Sensei_Mutation_Response>;
  /** insert a single row into the table: "Sensei" */
  insert_Sensei_one?: Maybe<Sensei>;
  /** insert data into the table: "_prisma_migrations" */
  insert__prisma_migrations?: Maybe<_Prisma_Migrations_Mutation_Response>;
  /** insert a single row into the table: "_prisma_migrations" */
  insert__prisma_migrations_one?: Maybe<_Prisma_Migrations>;
  /** update data of the table: "Bujinkan" */
  update_Bujinkan?: Maybe<Bujinkan_Mutation_Response>;
  /** update single row of the table: "Bujinkan" */
  update_Bujinkan_by_pk?: Maybe<Bujinkan>;
  /** update multiples rows of table: "Bujinkan" */
  update_Bujinkan_many?: Maybe<Array<Maybe<Bujinkan_Mutation_Response>>>;
  /** update data of the table: "Lesson" */
  update_Lesson?: Maybe<Lesson_Mutation_Response>;
  /** update single row of the table: "Lesson" */
  update_Lesson_by_pk?: Maybe<Lesson>;
  /** update multiples rows of table: "Lesson" */
  update_Lesson_many?: Maybe<Array<Maybe<Lesson_Mutation_Response>>>;
  /** update data of the table: "Padowan" */
  update_Padowan?: Maybe<Padowan_Mutation_Response>;
  /** update data of the table: "PadowanToLesson" */
  update_PadowanToLesson?: Maybe<PadowanToLesson_Mutation_Response>;
  /** update single row of the table: "PadowanToLesson" */
  update_PadowanToLesson_by_pk?: Maybe<PadowanToLesson>;
  /** update multiples rows of table: "PadowanToLesson" */
  update_PadowanToLesson_many?: Maybe<
    Array<Maybe<PadowanToLesson_Mutation_Response>>
  >;
  /** update single row of the table: "Padowan" */
  update_Padowan_by_pk?: Maybe<Padowan>;
  /** update multiples rows of table: "Padowan" */
  update_Padowan_many?: Maybe<Array<Maybe<Padowan_Mutation_Response>>>;
  /** update data of the table: "Sensei" */
  update_Sensei?: Maybe<Sensei_Mutation_Response>;
  /** update single row of the table: "Sensei" */
  update_Sensei_by_pk?: Maybe<Sensei>;
  /** update multiples rows of table: "Sensei" */
  update_Sensei_many?: Maybe<Array<Maybe<Sensei_Mutation_Response>>>;
  /** update data of the table: "_prisma_migrations" */
  update__prisma_migrations?: Maybe<_Prisma_Migrations_Mutation_Response>;
  /** update single row of the table: "_prisma_migrations" */
  update__prisma_migrations_by_pk?: Maybe<_Prisma_Migrations>;
  /** update multiples rows of table: "_prisma_migrations" */
  update__prisma_migrations_many?: Maybe<
    Array<Maybe<_Prisma_Migrations_Mutation_Response>>
  >;
};

export type Ninjas_Mutation_FrontendDelete_BujinkanArgs = {
  where: Bujinkan_Bool_Exp;
};

export type Ninjas_Mutation_FrontendDelete_Bujinkan_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Ninjas_Mutation_FrontendDelete_LessonArgs = {
  where: Lesson_Bool_Exp;
};

export type Ninjas_Mutation_FrontendDelete_Lesson_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Ninjas_Mutation_FrontendDelete_PadowanArgs = {
  where: Padowan_Bool_Exp;
};

export type Ninjas_Mutation_FrontendDelete_PadowanToLessonArgs = {
  where: PadowanToLesson_Bool_Exp;
};

export type Ninjas_Mutation_FrontendDelete_PadowanToLesson_By_PkArgs = {
  lessonId: Scalars['Int']['input'];
  padowanId: Scalars['Int']['input'];
};

export type Ninjas_Mutation_FrontendDelete_Padowan_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Ninjas_Mutation_FrontendDelete_SenseiArgs = {
  where: Sensei_Bool_Exp;
};

export type Ninjas_Mutation_FrontendDelete_Sensei_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Ninjas_Mutation_FrontendDelete__Prisma_MigrationsArgs = {
  where: _Prisma_Migrations_Bool_Exp;
};

export type Ninjas_Mutation_FrontendDelete__Prisma_Migrations_By_PkArgs = {
  id: Scalars['String']['input'];
};

export type Ninjas_Mutation_FrontendInsert_BujinkanArgs = {
  objects: Array<Bujinkan_Insert_Input>;
  on_conflict?: InputMaybe<Bujinkan_On_Conflict>;
};

export type Ninjas_Mutation_FrontendInsert_Bujinkan_OneArgs = {
  object: Bujinkan_Insert_Input;
  on_conflict?: InputMaybe<Bujinkan_On_Conflict>;
};

export type Ninjas_Mutation_FrontendInsert_LessonArgs = {
  objects: Array<Lesson_Insert_Input>;
  on_conflict?: InputMaybe<Lesson_On_Conflict>;
};

export type Ninjas_Mutation_FrontendInsert_Lesson_OneArgs = {
  object: Lesson_Insert_Input;
  on_conflict?: InputMaybe<Lesson_On_Conflict>;
};

export type Ninjas_Mutation_FrontendInsert_PadowanArgs = {
  objects: Array<Padowan_Insert_Input>;
  on_conflict?: InputMaybe<Padowan_On_Conflict>;
};

export type Ninjas_Mutation_FrontendInsert_PadowanToLessonArgs = {
  objects: Array<PadowanToLesson_Insert_Input>;
  on_conflict?: InputMaybe<PadowanToLesson_On_Conflict>;
};

export type Ninjas_Mutation_FrontendInsert_PadowanToLesson_OneArgs = {
  object: PadowanToLesson_Insert_Input;
  on_conflict?: InputMaybe<PadowanToLesson_On_Conflict>;
};

export type Ninjas_Mutation_FrontendInsert_Padowan_OneArgs = {
  object: Padowan_Insert_Input;
  on_conflict?: InputMaybe<Padowan_On_Conflict>;
};

export type Ninjas_Mutation_FrontendInsert_SenseiArgs = {
  objects: Array<Sensei_Insert_Input>;
  on_conflict?: InputMaybe<Sensei_On_Conflict>;
};

export type Ninjas_Mutation_FrontendInsert_Sensei_OneArgs = {
  object: Sensei_Insert_Input;
  on_conflict?: InputMaybe<Sensei_On_Conflict>;
};

export type Ninjas_Mutation_FrontendInsert__Prisma_MigrationsArgs = {
  objects: Array<_Prisma_Migrations_Insert_Input>;
  on_conflict?: InputMaybe<_Prisma_Migrations_On_Conflict>;
};

export type Ninjas_Mutation_FrontendInsert__Prisma_Migrations_OneArgs = {
  object: _Prisma_Migrations_Insert_Input;
  on_conflict?: InputMaybe<_Prisma_Migrations_On_Conflict>;
};

export type Ninjas_Mutation_FrontendUpdate_BujinkanArgs = {
  _inc?: InputMaybe<Bujinkan_Inc_Input>;
  _set?: InputMaybe<Bujinkan_Set_Input>;
  where: Bujinkan_Bool_Exp;
};

export type Ninjas_Mutation_FrontendUpdate_Bujinkan_By_PkArgs = {
  _inc?: InputMaybe<Bujinkan_Inc_Input>;
  _set?: InputMaybe<Bujinkan_Set_Input>;
  pk_columns: Bujinkan_Pk_Columns_Input;
};

export type Ninjas_Mutation_FrontendUpdate_Bujinkan_ManyArgs = {
  updates: Array<Bujinkan_Updates>;
};

export type Ninjas_Mutation_FrontendUpdate_LessonArgs = {
  _inc?: InputMaybe<Lesson_Inc_Input>;
  _set?: InputMaybe<Lesson_Set_Input>;
  where: Lesson_Bool_Exp;
};

export type Ninjas_Mutation_FrontendUpdate_Lesson_By_PkArgs = {
  _inc?: InputMaybe<Lesson_Inc_Input>;
  _set?: InputMaybe<Lesson_Set_Input>;
  pk_columns: Lesson_Pk_Columns_Input;
};

export type Ninjas_Mutation_FrontendUpdate_Lesson_ManyArgs = {
  updates: Array<Lesson_Updates>;
};

export type Ninjas_Mutation_FrontendUpdate_PadowanArgs = {
  _inc?: InputMaybe<Padowan_Inc_Input>;
  _set?: InputMaybe<Padowan_Set_Input>;
  where: Padowan_Bool_Exp;
};

export type Ninjas_Mutation_FrontendUpdate_PadowanToLessonArgs = {
  _inc?: InputMaybe<PadowanToLesson_Inc_Input>;
  _set?: InputMaybe<PadowanToLesson_Set_Input>;
  where: PadowanToLesson_Bool_Exp;
};

export type Ninjas_Mutation_FrontendUpdate_PadowanToLesson_By_PkArgs = {
  _inc?: InputMaybe<PadowanToLesson_Inc_Input>;
  _set?: InputMaybe<PadowanToLesson_Set_Input>;
  pk_columns: PadowanToLesson_Pk_Columns_Input;
};

export type Ninjas_Mutation_FrontendUpdate_PadowanToLesson_ManyArgs = {
  updates: Array<PadowanToLesson_Updates>;
};

export type Ninjas_Mutation_FrontendUpdate_Padowan_By_PkArgs = {
  _inc?: InputMaybe<Padowan_Inc_Input>;
  _set?: InputMaybe<Padowan_Set_Input>;
  pk_columns: Padowan_Pk_Columns_Input;
};

export type Ninjas_Mutation_FrontendUpdate_Padowan_ManyArgs = {
  updates: Array<Padowan_Updates>;
};

export type Ninjas_Mutation_FrontendUpdate_SenseiArgs = {
  _inc?: InputMaybe<Sensei_Inc_Input>;
  _set?: InputMaybe<Sensei_Set_Input>;
  where: Sensei_Bool_Exp;
};

export type Ninjas_Mutation_FrontendUpdate_Sensei_By_PkArgs = {
  _inc?: InputMaybe<Sensei_Inc_Input>;
  _set?: InputMaybe<Sensei_Set_Input>;
  pk_columns: Sensei_Pk_Columns_Input;
};

export type Ninjas_Mutation_FrontendUpdate_Sensei_ManyArgs = {
  updates: Array<Sensei_Updates>;
};

export type Ninjas_Mutation_FrontendUpdate__Prisma_MigrationsArgs = {
  _inc?: InputMaybe<_Prisma_Migrations_Inc_Input>;
  _set?: InputMaybe<_Prisma_Migrations_Set_Input>;
  where: _Prisma_Migrations_Bool_Exp;
};

export type Ninjas_Mutation_FrontendUpdate__Prisma_Migrations_By_PkArgs = {
  _inc?: InputMaybe<_Prisma_Migrations_Inc_Input>;
  _set?: InputMaybe<_Prisma_Migrations_Set_Input>;
  pk_columns: _Prisma_Migrations_Pk_Columns_Input;
};

export type Ninjas_Mutation_FrontendUpdate__Prisma_Migrations_ManyArgs = {
  updates: Array<_Prisma_Migrations_Updates>;
};

export type Ninjas_Query = {
  __typename?: 'ninjas_query';
  /** fetch data from the table: "Bujinkan" */
  Bujinkan: Array<Bujinkan>;
  /** fetch aggregated fields from the table: "Bujinkan" */
  Bujinkan_aggregate: Bujinkan_Aggregate;
  /** fetch data from the table: "Bujinkan" using primary key columns */
  Bujinkan_by_pk?: Maybe<Bujinkan>;
  /** fetch data from the table: "Lesson" */
  Lesson: Array<Lesson>;
  /** fetch aggregated fields from the table: "Lesson" */
  Lesson_aggregate: Lesson_Aggregate;
  /** fetch data from the table: "Lesson" using primary key columns */
  Lesson_by_pk?: Maybe<Lesson>;
  /** fetch data from the table: "Padowan" */
  Padowan: Array<Padowan>;
  /** fetch data from the table: "PadowanToLesson" */
  PadowanToLesson: Array<PadowanToLesson>;
  /** fetch aggregated fields from the table: "PadowanToLesson" */
  PadowanToLesson_aggregate: PadowanToLesson_Aggregate;
  /** fetch data from the table: "PadowanToLesson" using primary key columns */
  PadowanToLesson_by_pk?: Maybe<PadowanToLesson>;
  /** fetch aggregated fields from the table: "Padowan" */
  Padowan_aggregate: Padowan_Aggregate;
  /** fetch data from the table: "Padowan" using primary key columns */
  Padowan_by_pk?: Maybe<Padowan>;
  /** fetch data from the table: "Sensei" */
  Sensei: Array<Sensei>;
  /** fetch aggregated fields from the table: "Sensei" */
  Sensei_aggregate: Sensei_Aggregate;
  /** fetch data from the table: "Sensei" using primary key columns */
  Sensei_by_pk?: Maybe<Sensei>;
  /** fetch data from the table: "_prisma_migrations" */
  _prisma_migrations: Array<_Prisma_Migrations>;
  /** fetch aggregated fields from the table: "_prisma_migrations" */
  _prisma_migrations_aggregate: _Prisma_Migrations_Aggregate;
  /** fetch data from the table: "_prisma_migrations" using primary key columns */
  _prisma_migrations_by_pk?: Maybe<_Prisma_Migrations>;
};

export type Ninjas_QueryBujinkanArgs = {
  distinct_on?: InputMaybe<Array<Bujinkan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bujinkan_Order_By>>;
  where?: InputMaybe<Bujinkan_Bool_Exp>;
};

export type Ninjas_QueryBujinkan_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bujinkan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bujinkan_Order_By>>;
  where?: InputMaybe<Bujinkan_Bool_Exp>;
};

export type Ninjas_QueryBujinkan_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Ninjas_QueryLessonArgs = {
  distinct_on?: InputMaybe<Array<Lesson_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lesson_Order_By>>;
  where?: InputMaybe<Lesson_Bool_Exp>;
};

export type Ninjas_QueryLesson_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Lesson_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lesson_Order_By>>;
  where?: InputMaybe<Lesson_Bool_Exp>;
};

export type Ninjas_QueryLesson_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Ninjas_QueryPadowanArgs = {
  distinct_on?: InputMaybe<Array<Padowan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Padowan_Order_By>>;
  where?: InputMaybe<Padowan_Bool_Exp>;
};

export type Ninjas_QueryPadowanToLessonArgs = {
  distinct_on?: InputMaybe<Array<PadowanToLesson_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PadowanToLesson_Order_By>>;
  where?: InputMaybe<PadowanToLesson_Bool_Exp>;
};

export type Ninjas_QueryPadowanToLesson_AggregateArgs = {
  distinct_on?: InputMaybe<Array<PadowanToLesson_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PadowanToLesson_Order_By>>;
  where?: InputMaybe<PadowanToLesson_Bool_Exp>;
};

export type Ninjas_QueryPadowanToLesson_By_PkArgs = {
  lessonId: Scalars['Int']['input'];
  padowanId: Scalars['Int']['input'];
};

export type Ninjas_QueryPadowan_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Padowan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Padowan_Order_By>>;
  where?: InputMaybe<Padowan_Bool_Exp>;
};

export type Ninjas_QueryPadowan_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Ninjas_QuerySenseiArgs = {
  distinct_on?: InputMaybe<Array<Sensei_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sensei_Order_By>>;
  where?: InputMaybe<Sensei_Bool_Exp>;
};

export type Ninjas_QuerySensei_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sensei_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sensei_Order_By>>;
  where?: InputMaybe<Sensei_Bool_Exp>;
};

export type Ninjas_QuerySensei_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Ninjas_Query_Prisma_MigrationsArgs = {
  distinct_on?: InputMaybe<Array<_Prisma_Migrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Prisma_Migrations_Order_By>>;
  where?: InputMaybe<_Prisma_Migrations_Bool_Exp>;
};

export type Ninjas_Query_Prisma_Migrations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_Prisma_Migrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Prisma_Migrations_Order_By>>;
  where?: InputMaybe<_Prisma_Migrations_Bool_Exp>;
};

export type Ninjas_Query_Prisma_Migrations_By_PkArgs = {
  id: Scalars['String']['input'];
};

export type Ninjas_Subscription = {
  __typename?: 'ninjas_subscription';
  /** fetch data from the table: "Bujinkan" */
  Bujinkan: Array<Bujinkan>;
  /** fetch aggregated fields from the table: "Bujinkan" */
  Bujinkan_aggregate: Bujinkan_Aggregate;
  /** fetch data from the table: "Bujinkan" using primary key columns */
  Bujinkan_by_pk?: Maybe<Bujinkan>;
  /** fetch data from the table in a streaming manner: "Bujinkan" */
  Bujinkan_stream: Array<Bujinkan>;
  /** fetch data from the table: "Lesson" */
  Lesson: Array<Lesson>;
  /** fetch aggregated fields from the table: "Lesson" */
  Lesson_aggregate: Lesson_Aggregate;
  /** fetch data from the table: "Lesson" using primary key columns */
  Lesson_by_pk?: Maybe<Lesson>;
  /** fetch data from the table in a streaming manner: "Lesson" */
  Lesson_stream: Array<Lesson>;
  /** fetch data from the table: "Padowan" */
  Padowan: Array<Padowan>;
  /** fetch data from the table: "PadowanToLesson" */
  PadowanToLesson: Array<PadowanToLesson>;
  /** fetch aggregated fields from the table: "PadowanToLesson" */
  PadowanToLesson_aggregate: PadowanToLesson_Aggregate;
  /** fetch data from the table: "PadowanToLesson" using primary key columns */
  PadowanToLesson_by_pk?: Maybe<PadowanToLesson>;
  /** fetch data from the table in a streaming manner: "PadowanToLesson" */
  PadowanToLesson_stream: Array<PadowanToLesson>;
  /** fetch aggregated fields from the table: "Padowan" */
  Padowan_aggregate: Padowan_Aggregate;
  /** fetch data from the table: "Padowan" using primary key columns */
  Padowan_by_pk?: Maybe<Padowan>;
  /** fetch data from the table in a streaming manner: "Padowan" */
  Padowan_stream: Array<Padowan>;
  /** fetch data from the table: "Sensei" */
  Sensei: Array<Sensei>;
  /** fetch aggregated fields from the table: "Sensei" */
  Sensei_aggregate: Sensei_Aggregate;
  /** fetch data from the table: "Sensei" using primary key columns */
  Sensei_by_pk?: Maybe<Sensei>;
  /** fetch data from the table in a streaming manner: "Sensei" */
  Sensei_stream: Array<Sensei>;
  /** fetch data from the table: "_prisma_migrations" */
  _prisma_migrations: Array<_Prisma_Migrations>;
  /** fetch aggregated fields from the table: "_prisma_migrations" */
  _prisma_migrations_aggregate: _Prisma_Migrations_Aggregate;
  /** fetch data from the table: "_prisma_migrations" using primary key columns */
  _prisma_migrations_by_pk?: Maybe<_Prisma_Migrations>;
  /** fetch data from the table in a streaming manner: "_prisma_migrations" */
  _prisma_migrations_stream: Array<_Prisma_Migrations>;
};

export type Ninjas_SubscriptionBujinkanArgs = {
  distinct_on?: InputMaybe<Array<Bujinkan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bujinkan_Order_By>>;
  where?: InputMaybe<Bujinkan_Bool_Exp>;
};

export type Ninjas_SubscriptionBujinkan_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bujinkan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bujinkan_Order_By>>;
  where?: InputMaybe<Bujinkan_Bool_Exp>;
};

export type Ninjas_SubscriptionBujinkan_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Ninjas_SubscriptionBujinkan_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Bujinkan_Stream_Cursor_Input>>;
  where?: InputMaybe<Bujinkan_Bool_Exp>;
};

export type Ninjas_SubscriptionLessonArgs = {
  distinct_on?: InputMaybe<Array<Lesson_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lesson_Order_By>>;
  where?: InputMaybe<Lesson_Bool_Exp>;
};

export type Ninjas_SubscriptionLesson_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Lesson_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lesson_Order_By>>;
  where?: InputMaybe<Lesson_Bool_Exp>;
};

export type Ninjas_SubscriptionLesson_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Ninjas_SubscriptionLesson_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Lesson_Stream_Cursor_Input>>;
  where?: InputMaybe<Lesson_Bool_Exp>;
};

export type Ninjas_SubscriptionPadowanArgs = {
  distinct_on?: InputMaybe<Array<Padowan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Padowan_Order_By>>;
  where?: InputMaybe<Padowan_Bool_Exp>;
};

export type Ninjas_SubscriptionPadowanToLessonArgs = {
  distinct_on?: InputMaybe<Array<PadowanToLesson_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PadowanToLesson_Order_By>>;
  where?: InputMaybe<PadowanToLesson_Bool_Exp>;
};

export type Ninjas_SubscriptionPadowanToLesson_AggregateArgs = {
  distinct_on?: InputMaybe<Array<PadowanToLesson_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PadowanToLesson_Order_By>>;
  where?: InputMaybe<PadowanToLesson_Bool_Exp>;
};

export type Ninjas_SubscriptionPadowanToLesson_By_PkArgs = {
  lessonId: Scalars['Int']['input'];
  padowanId: Scalars['Int']['input'];
};

export type Ninjas_SubscriptionPadowanToLesson_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<PadowanToLesson_Stream_Cursor_Input>>;
  where?: InputMaybe<PadowanToLesson_Bool_Exp>;
};

export type Ninjas_SubscriptionPadowan_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Padowan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Padowan_Order_By>>;
  where?: InputMaybe<Padowan_Bool_Exp>;
};

export type Ninjas_SubscriptionPadowan_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Ninjas_SubscriptionPadowan_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Padowan_Stream_Cursor_Input>>;
  where?: InputMaybe<Padowan_Bool_Exp>;
};

export type Ninjas_SubscriptionSenseiArgs = {
  distinct_on?: InputMaybe<Array<Sensei_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sensei_Order_By>>;
  where?: InputMaybe<Sensei_Bool_Exp>;
};

export type Ninjas_SubscriptionSensei_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sensei_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sensei_Order_By>>;
  where?: InputMaybe<Sensei_Bool_Exp>;
};

export type Ninjas_SubscriptionSensei_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Ninjas_SubscriptionSensei_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Sensei_Stream_Cursor_Input>>;
  where?: InputMaybe<Sensei_Bool_Exp>;
};

export type Ninjas_Subscription_Prisma_MigrationsArgs = {
  distinct_on?: InputMaybe<Array<_Prisma_Migrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Prisma_Migrations_Order_By>>;
  where?: InputMaybe<_Prisma_Migrations_Bool_Exp>;
};

export type Ninjas_Subscription_Prisma_Migrations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_Prisma_Migrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<_Prisma_Migrations_Order_By>>;
  where?: InputMaybe<_Prisma_Migrations_Bool_Exp>;
};

export type Ninjas_Subscription_Prisma_Migrations_By_PkArgs = {
  id: Scalars['String']['input'];
};

export type Ninjas_Subscription_Prisma_Migrations_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<_Prisma_Migrations_Stream_Cursor_Input>>;
  where?: InputMaybe<_Prisma_Migrations_Bool_Exp>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

export type Query_Root = {
  __typename?: 'query_root';
  ninjas?: Maybe<Ninjas_Query>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  ninjas?: Maybe<Ninjas_Subscription>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};
