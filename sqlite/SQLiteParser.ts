// Generated from sqlite/SQLiteParser.g4 by ANTLR 4.13.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import SQLiteParserListener from "./SQLiteParserListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class SQLiteParser extends Parser {
	public static readonly SCOL = 1;
	public static readonly DOT = 2;
	public static readonly OPEN_PAR = 3;
	public static readonly CLOSE_PAR = 4;
	public static readonly COMMA = 5;
	public static readonly ASSIGN = 6;
	public static readonly STAR = 7;
	public static readonly PLUS = 8;
	public static readonly MINUS = 9;
	public static readonly TILDE = 10;
	public static readonly PIPE2 = 11;
	public static readonly DIV = 12;
	public static readonly MOD = 13;
	public static readonly LT2 = 14;
	public static readonly GT2 = 15;
	public static readonly AMP = 16;
	public static readonly PIPE = 17;
	public static readonly LT = 18;
	public static readonly LT_EQ = 19;
	public static readonly GT = 20;
	public static readonly GT_EQ = 21;
	public static readonly EQ = 22;
	public static readonly NOT_EQ1 = 23;
	public static readonly NOT_EQ2 = 24;
	public static readonly ABORT_ = 25;
	public static readonly ACTION_ = 26;
	public static readonly ADD_ = 27;
	public static readonly AFTER_ = 28;
	public static readonly ALL_ = 29;
	public static readonly ALTER_ = 30;
	public static readonly ANALYZE_ = 31;
	public static readonly AND_ = 32;
	public static readonly AS_ = 33;
	public static readonly ASC_ = 34;
	public static readonly ATTACH_ = 35;
	public static readonly AUTOINCREMENT_ = 36;
	public static readonly BEFORE_ = 37;
	public static readonly BEGIN_ = 38;
	public static readonly BETWEEN_ = 39;
	public static readonly BY_ = 40;
	public static readonly CASCADE_ = 41;
	public static readonly CASE_ = 42;
	public static readonly CAST_ = 43;
	public static readonly CHECK_ = 44;
	public static readonly COLLATE_ = 45;
	public static readonly COLUMN_ = 46;
	public static readonly COMMIT_ = 47;
	public static readonly CONFLICT_ = 48;
	public static readonly CONSTRAINT_ = 49;
	public static readonly CREATE_ = 50;
	public static readonly CROSS_ = 51;
	public static readonly CURRENT_DATE_ = 52;
	public static readonly CURRENT_TIME_ = 53;
	public static readonly CURRENT_TIMESTAMP_ = 54;
	public static readonly DATABASE_ = 55;
	public static readonly DEFAULT_ = 56;
	public static readonly DEFERRABLE_ = 57;
	public static readonly DEFERRED_ = 58;
	public static readonly DELETE_ = 59;
	public static readonly DESC_ = 60;
	public static readonly DETACH_ = 61;
	public static readonly DISTINCT_ = 62;
	public static readonly DROP_ = 63;
	public static readonly EACH_ = 64;
	public static readonly ELSE_ = 65;
	public static readonly END_ = 66;
	public static readonly ESCAPE_ = 67;
	public static readonly EXCEPT_ = 68;
	public static readonly EXCLUSIVE_ = 69;
	public static readonly EXISTS_ = 70;
	public static readonly EXPLAIN_ = 71;
	public static readonly FAIL_ = 72;
	public static readonly FOR_ = 73;
	public static readonly FOREIGN_ = 74;
	public static readonly FROM_ = 75;
	public static readonly FULL_ = 76;
	public static readonly GLOB_ = 77;
	public static readonly GROUP_ = 78;
	public static readonly HAVING_ = 79;
	public static readonly IF_ = 80;
	public static readonly IGNORE_ = 81;
	public static readonly IMMEDIATE_ = 82;
	public static readonly IN_ = 83;
	public static readonly INDEX_ = 84;
	public static readonly INDEXED_ = 85;
	public static readonly INITIALLY_ = 86;
	public static readonly INNER_ = 87;
	public static readonly INSERT_ = 88;
	public static readonly INSTEAD_ = 89;
	public static readonly INTERSECT_ = 90;
	public static readonly INTO_ = 91;
	public static readonly IS_ = 92;
	public static readonly ISNULL_ = 93;
	public static readonly JOIN_ = 94;
	public static readonly KEY_ = 95;
	public static readonly LEFT_ = 96;
	public static readonly LIKE_ = 97;
	public static readonly LIMIT_ = 98;
	public static readonly MATCH_ = 99;
	public static readonly NATURAL_ = 100;
	public static readonly NO_ = 101;
	public static readonly NOT_ = 102;
	public static readonly NOTNULL_ = 103;
	public static readonly NULL_ = 104;
	public static readonly OF_ = 105;
	public static readonly OFFSET_ = 106;
	public static readonly ON_ = 107;
	public static readonly OR_ = 108;
	public static readonly ORDER_ = 109;
	public static readonly OUTER_ = 110;
	public static readonly PLAN_ = 111;
	public static readonly PRAGMA_ = 112;
	public static readonly PRIMARY_ = 113;
	public static readonly QUERY_ = 114;
	public static readonly RAISE_ = 115;
	public static readonly RECURSIVE_ = 116;
	public static readonly REFERENCES_ = 117;
	public static readonly REGEXP_ = 118;
	public static readonly REINDEX_ = 119;
	public static readonly RELEASE_ = 120;
	public static readonly RENAME_ = 121;
	public static readonly REPLACE_ = 122;
	public static readonly RESTRICT_ = 123;
	public static readonly RETURNING_ = 124;
	public static readonly RIGHT_ = 125;
	public static readonly ROLLBACK_ = 126;
	public static readonly ROW_ = 127;
	public static readonly ROWS_ = 128;
	public static readonly SAVEPOINT_ = 129;
	public static readonly SELECT_ = 130;
	public static readonly SET_ = 131;
	public static readonly TABLE_ = 132;
	public static readonly TEMP_ = 133;
	public static readonly TEMPORARY_ = 134;
	public static readonly THEN_ = 135;
	public static readonly TO_ = 136;
	public static readonly TRANSACTION_ = 137;
	public static readonly TRIGGER_ = 138;
	public static readonly UNION_ = 139;
	public static readonly UNIQUE_ = 140;
	public static readonly UPDATE_ = 141;
	public static readonly USING_ = 142;
	public static readonly VACUUM_ = 143;
	public static readonly VALUES_ = 144;
	public static readonly VIEW_ = 145;
	public static readonly VIRTUAL_ = 146;
	public static readonly WHEN_ = 147;
	public static readonly WHERE_ = 148;
	public static readonly WITH_ = 149;
	public static readonly WITHOUT_ = 150;
	public static readonly FIRST_VALUE_ = 151;
	public static readonly OVER_ = 152;
	public static readonly PARTITION_ = 153;
	public static readonly RANGE_ = 154;
	public static readonly PRECEDING_ = 155;
	public static readonly UNBOUNDED_ = 156;
	public static readonly CURRENT_ = 157;
	public static readonly FOLLOWING_ = 158;
	public static readonly CUME_DIST_ = 159;
	public static readonly DENSE_RANK_ = 160;
	public static readonly LAG_ = 161;
	public static readonly LAST_VALUE_ = 162;
	public static readonly LEAD_ = 163;
	public static readonly NTH_VALUE_ = 164;
	public static readonly NTILE_ = 165;
	public static readonly PERCENT_RANK_ = 166;
	public static readonly RANK_ = 167;
	public static readonly ROW_NUMBER_ = 168;
	public static readonly GENERATED_ = 169;
	public static readonly ALWAYS_ = 170;
	public static readonly STORED_ = 171;
	public static readonly TRUE_ = 172;
	public static readonly FALSE_ = 173;
	public static readonly WINDOW_ = 174;
	public static readonly NULLS_ = 175;
	public static readonly FIRST_ = 176;
	public static readonly LAST_ = 177;
	public static readonly FILTER_ = 178;
	public static readonly GROUPS_ = 179;
	public static readonly EXCLUDE_ = 180;
	public static readonly TIES_ = 181;
	public static readonly OTHERS_ = 182;
	public static readonly DO_ = 183;
	public static readonly NOTHING_ = 184;
	public static readonly IDENTIFIER = 185;
	public static readonly NUMERIC_LITERAL = 186;
	public static readonly BIND_PARAMETER = 187;
	public static readonly STRING_LITERAL = 188;
	public static readonly BLOB_LITERAL = 189;
	public static readonly SINGLE_LINE_COMMENT = 190;
	public static readonly MULTILINE_COMMENT = 191;
	public static readonly SPACES = 192;
	public static readonly UNEXPECTED_CHAR = 193;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_parse = 0;
	public static readonly RULE_sql_stmt_list = 1;
	public static readonly RULE_sql_stmt = 2;
	public static readonly RULE_alter_table_stmt = 3;
	public static readonly RULE_analyze_stmt = 4;
	public static readonly RULE_attach_stmt = 5;
	public static readonly RULE_begin_stmt = 6;
	public static readonly RULE_commit_stmt = 7;
	public static readonly RULE_rollback_stmt = 8;
	public static readonly RULE_savepoint_stmt = 9;
	public static readonly RULE_release_stmt = 10;
	public static readonly RULE_create_index_stmt = 11;
	public static readonly RULE_indexed_column = 12;
	public static readonly RULE_create_table_stmt = 13;
	public static readonly RULE_column_def = 14;
	public static readonly RULE_type_name = 15;
	public static readonly RULE_column_constraint = 16;
	public static readonly RULE_signed_number = 17;
	public static readonly RULE_table_constraint = 18;
	public static readonly RULE_foreign_key_clause = 19;
	public static readonly RULE_conflict_clause = 20;
	public static readonly RULE_create_trigger_stmt = 21;
	public static readonly RULE_create_view_stmt = 22;
	public static readonly RULE_create_virtual_table_stmt = 23;
	public static readonly RULE_with_clause = 24;
	public static readonly RULE_cte_table_name = 25;
	public static readonly RULE_recursive_cte = 26;
	public static readonly RULE_common_table_expression = 27;
	public static readonly RULE_delete_stmt = 28;
	public static readonly RULE_delete_stmt_limited = 29;
	public static readonly RULE_detach_stmt = 30;
	public static readonly RULE_drop_stmt = 31;
	public static readonly RULE_expr = 32;
	public static readonly RULE_raise_function = 33;
	public static readonly RULE_literal_value = 34;
	public static readonly RULE_value_row = 35;
	public static readonly RULE_values_clause = 36;
	public static readonly RULE_insert_stmt = 37;
	public static readonly RULE_returning_clause = 38;
	public static readonly RULE_upsert_clause = 39;
	public static readonly RULE_pragma_stmt = 40;
	public static readonly RULE_pragma_value = 41;
	public static readonly RULE_reindex_stmt = 42;
	public static readonly RULE_select_stmt = 43;
	public static readonly RULE_join_clause = 44;
	public static readonly RULE_select_core = 45;
	public static readonly RULE_factored_select_stmt = 46;
	public static readonly RULE_simple_select_stmt = 47;
	public static readonly RULE_compound_select_stmt = 48;
	public static readonly RULE_table_or_subquery = 49;
	public static readonly RULE_result_column = 50;
	public static readonly RULE_join_operator = 51;
	public static readonly RULE_join_constraint = 52;
	public static readonly RULE_compound_operator = 53;
	public static readonly RULE_update_stmt = 54;
	public static readonly RULE_column_name_list = 55;
	public static readonly RULE_update_stmt_limited = 56;
	public static readonly RULE_qualified_table_name = 57;
	public static readonly RULE_vacuum_stmt = 58;
	public static readonly RULE_filter_clause = 59;
	public static readonly RULE_window_defn = 60;
	public static readonly RULE_over_clause = 61;
	public static readonly RULE_frame_spec = 62;
	public static readonly RULE_frame_clause = 63;
	public static readonly RULE_simple_function_invocation = 64;
	public static readonly RULE_aggregate_function_invocation = 65;
	public static readonly RULE_window_function_invocation = 66;
	public static readonly RULE_common_table_stmt = 67;
	public static readonly RULE_order_by_stmt = 68;
	public static readonly RULE_limit_stmt = 69;
	public static readonly RULE_ordering_term = 70;
	public static readonly RULE_asc_desc = 71;
	public static readonly RULE_frame_left = 72;
	public static readonly RULE_frame_right = 73;
	public static readonly RULE_frame_single = 74;
	public static readonly RULE_window_function = 75;
	public static readonly RULE_offset = 76;
	public static readonly RULE_default_value = 77;
	public static readonly RULE_partition_by = 78;
	public static readonly RULE_order_by_expr = 79;
	public static readonly RULE_order_by_expr_asc_desc = 80;
	public static readonly RULE_expr_asc_desc = 81;
	public static readonly RULE_initial_select = 82;
	public static readonly RULE_recursive_select = 83;
	public static readonly RULE_unary_operator = 84;
	public static readonly RULE_error_message = 85;
	public static readonly RULE_module_argument = 86;
	public static readonly RULE_column_alias = 87;
	public static readonly RULE_keyword = 88;
	public static readonly RULE_name = 89;
	public static readonly RULE_function_name = 90;
	public static readonly RULE_schema_name = 91;
	public static readonly RULE_table_name = 92;
	public static readonly RULE_table_or_index_name = 93;
	public static readonly RULE_column_name = 94;
	public static readonly RULE_collation_name = 95;
	public static readonly RULE_foreign_table = 96;
	public static readonly RULE_index_name = 97;
	public static readonly RULE_trigger_name = 98;
	public static readonly RULE_view_name = 99;
	public static readonly RULE_module_name = 100;
	public static readonly RULE_pragma_name = 101;
	public static readonly RULE_savepoint_name = 102;
	public static readonly RULE_table_alias = 103;
	public static readonly RULE_transaction_name = 104;
	public static readonly RULE_window_name = 105;
	public static readonly RULE_alias = 106;
	public static readonly RULE_filename = 107;
	public static readonly RULE_base_window_name = 108;
	public static readonly RULE_simple_func = 109;
	public static readonly RULE_aggregate_func = 110;
	public static readonly RULE_table_function_name = 111;
	public static readonly RULE_any_name = 112;
	public static readonly literalNames: (string | null)[] = [ null, "';'", 
                                                            "'.'", "'('", 
                                                            "')'", "','", 
                                                            "'='", "'*'", 
                                                            "'+'", "'-'", 
                                                            "'~'", "'||'", 
                                                            "'/'", "'%'", 
                                                            "'<<'", "'>>'", 
                                                            "'&'", "'|'", 
                                                            "'<'", "'<='", 
                                                            "'>'", "'>='", 
                                                            "'=='", "'!='", 
                                                            "'<>'", "'ABORT'", 
                                                            "'ACTION'", 
                                                            "'ADD'", "'AFTER'", 
                                                            "'ALL'", "'ALTER'", 
                                                            "'ANALYZE'", 
                                                            "'AND'", "'AS'", 
                                                            "'ASC'", "'ATTACH'", 
                                                            "'AUTOINCREMENT'", 
                                                            "'BEFORE'", 
                                                            "'BEGIN'", "'BETWEEN'", 
                                                            "'BY'", "'CASCADE'", 
                                                            "'CASE'", "'CAST'", 
                                                            "'CHECK'", "'COLLATE'", 
                                                            "'COLUMN'", 
                                                            "'COMMIT'", 
                                                            "'CONFLICT'", 
                                                            "'CONSTRAINT'", 
                                                            "'CREATE'", 
                                                            "'CROSS'", "'CURRENT_DATE'", 
                                                            "'CURRENT_TIME'", 
                                                            "'CURRENT_TIMESTAMP'", 
                                                            "'DATABASE'", 
                                                            "'DEFAULT'", 
                                                            "'DEFERRABLE'", 
                                                            "'DEFERRED'", 
                                                            "'DELETE'", 
                                                            "'DESC'", "'DETACH'", 
                                                            "'DISTINCT'", 
                                                            "'DROP'", "'EACH'", 
                                                            "'ELSE'", "'END'", 
                                                            "'ESCAPE'", 
                                                            "'EXCEPT'", 
                                                            "'EXCLUSIVE'", 
                                                            "'EXISTS'", 
                                                            "'EXPLAIN'", 
                                                            "'FAIL'", "'FOR'", 
                                                            "'FOREIGN'", 
                                                            "'FROM'", "'FULL'", 
                                                            "'GLOB'", "'GROUP'", 
                                                            "'HAVING'", 
                                                            "'IF'", "'IGNORE'", 
                                                            "'IMMEDIATE'", 
                                                            "'IN'", "'INDEX'", 
                                                            "'INDEXED'", 
                                                            "'INITIALLY'", 
                                                            "'INNER'", "'INSERT'", 
                                                            "'INSTEAD'", 
                                                            "'INTERSECT'", 
                                                            "'INTO'", "'IS'", 
                                                            "'ISNULL'", 
                                                            "'JOIN'", "'KEY'", 
                                                            "'LEFT'", "'LIKE'", 
                                                            "'LIMIT'", "'MATCH'", 
                                                            "'NATURAL'", 
                                                            "'NO'", "'NOT'", 
                                                            "'NOTNULL'", 
                                                            "'NULL'", "'OF'", 
                                                            "'OFFSET'", 
                                                            "'ON'", "'OR'", 
                                                            "'ORDER'", "'OUTER'", 
                                                            "'PLAN'", "'PRAGMA'", 
                                                            "'PRIMARY'", 
                                                            "'QUERY'", "'RAISE'", 
                                                            "'RECURSIVE'", 
                                                            "'REFERENCES'", 
                                                            "'REGEXP'", 
                                                            "'REINDEX'", 
                                                            "'RELEASE'", 
                                                            "'RENAME'", 
                                                            "'REPLACE'", 
                                                            "'RESTRICT'", 
                                                            "'RETURNING'", 
                                                            "'RIGHT'", "'ROLLBACK'", 
                                                            "'ROW'", "'ROWS'", 
                                                            "'SAVEPOINT'", 
                                                            "'SELECT'", 
                                                            "'SET'", "'TABLE'", 
                                                            "'TEMP'", "'TEMPORARY'", 
                                                            "'THEN'", "'TO'", 
                                                            "'TRANSACTION'", 
                                                            "'TRIGGER'", 
                                                            "'UNION'", "'UNIQUE'", 
                                                            "'UPDATE'", 
                                                            "'USING'", "'VACUUM'", 
                                                            "'VALUES'", 
                                                            "'VIEW'", "'VIRTUAL'", 
                                                            "'WHEN'", "'WHERE'", 
                                                            "'WITH'", "'WITHOUT'", 
                                                            "'FIRST_VALUE'", 
                                                            "'OVER'", "'PARTITION'", 
                                                            "'RANGE'", "'PRECEDING'", 
                                                            "'UNBOUNDED'", 
                                                            "'CURRENT'", 
                                                            "'FOLLOWING'", 
                                                            "'CUME_DIST'", 
                                                            "'DENSE_RANK'", 
                                                            "'LAG'", "'LAST_VALUE'", 
                                                            "'LEAD'", "'NTH_VALUE'", 
                                                            "'NTILE'", "'PERCENT_RANK'", 
                                                            "'RANK'", "'ROW_NUMBER'", 
                                                            "'GENERATED'", 
                                                            "'ALWAYS'", 
                                                            "'STORED'", 
                                                            "'TRUE'", "'FALSE'", 
                                                            "'WINDOW'", 
                                                            "'NULLS'", "'FIRST'", 
                                                            "'LAST'", "'FILTER'", 
                                                            "'GROUPS'", 
                                                            "'EXCLUDE'", 
                                                            "'TIES'", "'OTHERS'", 
                                                            "'DO'", "'NOTHING'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "SCOL", 
                                                             "DOT", "OPEN_PAR", 
                                                             "CLOSE_PAR", 
                                                             "COMMA", "ASSIGN", 
                                                             "STAR", "PLUS", 
                                                             "MINUS", "TILDE", 
                                                             "PIPE2", "DIV", 
                                                             "MOD", "LT2", 
                                                             "GT2", "AMP", 
                                                             "PIPE", "LT", 
                                                             "LT_EQ", "GT", 
                                                             "GT_EQ", "EQ", 
                                                             "NOT_EQ1", 
                                                             "NOT_EQ2", 
                                                             "ABORT_", "ACTION_", 
                                                             "ADD_", "AFTER_", 
                                                             "ALL_", "ALTER_", 
                                                             "ANALYZE_", 
                                                             "AND_", "AS_", 
                                                             "ASC_", "ATTACH_", 
                                                             "AUTOINCREMENT_", 
                                                             "BEFORE_", 
                                                             "BEGIN_", "BETWEEN_", 
                                                             "BY_", "CASCADE_", 
                                                             "CASE_", "CAST_", 
                                                             "CHECK_", "COLLATE_", 
                                                             "COLUMN_", 
                                                             "COMMIT_", 
                                                             "CONFLICT_", 
                                                             "CONSTRAINT_", 
                                                             "CREATE_", 
                                                             "CROSS_", "CURRENT_DATE_", 
                                                             "CURRENT_TIME_", 
                                                             "CURRENT_TIMESTAMP_", 
                                                             "DATABASE_", 
                                                             "DEFAULT_", 
                                                             "DEFERRABLE_", 
                                                             "DEFERRED_", 
                                                             "DELETE_", 
                                                             "DESC_", "DETACH_", 
                                                             "DISTINCT_", 
                                                             "DROP_", "EACH_", 
                                                             "ELSE_", "END_", 
                                                             "ESCAPE_", 
                                                             "EXCEPT_", 
                                                             "EXCLUSIVE_", 
                                                             "EXISTS_", 
                                                             "EXPLAIN_", 
                                                             "FAIL_", "FOR_", 
                                                             "FOREIGN_", 
                                                             "FROM_", "FULL_", 
                                                             "GLOB_", "GROUP_", 
                                                             "HAVING_", 
                                                             "IF_", "IGNORE_", 
                                                             "IMMEDIATE_", 
                                                             "IN_", "INDEX_", 
                                                             "INDEXED_", 
                                                             "INITIALLY_", 
                                                             "INNER_", "INSERT_", 
                                                             "INSTEAD_", 
                                                             "INTERSECT_", 
                                                             "INTO_", "IS_", 
                                                             "ISNULL_", 
                                                             "JOIN_", "KEY_", 
                                                             "LEFT_", "LIKE_", 
                                                             "LIMIT_", "MATCH_", 
                                                             "NATURAL_", 
                                                             "NO_", "NOT_", 
                                                             "NOTNULL_", 
                                                             "NULL_", "OF_", 
                                                             "OFFSET_", 
                                                             "ON_", "OR_", 
                                                             "ORDER_", "OUTER_", 
                                                             "PLAN_", "PRAGMA_", 
                                                             "PRIMARY_", 
                                                             "QUERY_", "RAISE_", 
                                                             "RECURSIVE_", 
                                                             "REFERENCES_", 
                                                             "REGEXP_", 
                                                             "REINDEX_", 
                                                             "RELEASE_", 
                                                             "RENAME_", 
                                                             "REPLACE_", 
                                                             "RESTRICT_", 
                                                             "RETURNING_", 
                                                             "RIGHT_", "ROLLBACK_", 
                                                             "ROW_", "ROWS_", 
                                                             "SAVEPOINT_", 
                                                             "SELECT_", 
                                                             "SET_", "TABLE_", 
                                                             "TEMP_", "TEMPORARY_", 
                                                             "THEN_", "TO_", 
                                                             "TRANSACTION_", 
                                                             "TRIGGER_", 
                                                             "UNION_", "UNIQUE_", 
                                                             "UPDATE_", 
                                                             "USING_", "VACUUM_", 
                                                             "VALUES_", 
                                                             "VIEW_", "VIRTUAL_", 
                                                             "WHEN_", "WHERE_", 
                                                             "WITH_", "WITHOUT_", 
                                                             "FIRST_VALUE_", 
                                                             "OVER_", "PARTITION_", 
                                                             "RANGE_", "PRECEDING_", 
                                                             "UNBOUNDED_", 
                                                             "CURRENT_", 
                                                             "FOLLOWING_", 
                                                             "CUME_DIST_", 
                                                             "DENSE_RANK_", 
                                                             "LAG_", "LAST_VALUE_", 
                                                             "LEAD_", "NTH_VALUE_", 
                                                             "NTILE_", "PERCENT_RANK_", 
                                                             "RANK_", "ROW_NUMBER_", 
                                                             "GENERATED_", 
                                                             "ALWAYS_", 
                                                             "STORED_", 
                                                             "TRUE_", "FALSE_", 
                                                             "WINDOW_", 
                                                             "NULLS_", "FIRST_", 
                                                             "LAST_", "FILTER_", 
                                                             "GROUPS_", 
                                                             "EXCLUDE_", 
                                                             "TIES_", "OTHERS_", 
                                                             "DO_", "NOTHING_", 
                                                             "IDENTIFIER", 
                                                             "NUMERIC_LITERAL", 
                                                             "BIND_PARAMETER", 
                                                             "STRING_LITERAL", 
                                                             "BLOB_LITERAL", 
                                                             "SINGLE_LINE_COMMENT", 
                                                             "MULTILINE_COMMENT", 
                                                             "SPACES", "UNEXPECTED_CHAR" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"parse", "sql_stmt_list", "sql_stmt", "alter_table_stmt", "analyze_stmt", 
		"attach_stmt", "begin_stmt", "commit_stmt", "rollback_stmt", "savepoint_stmt", 
		"release_stmt", "create_index_stmt", "indexed_column", "create_table_stmt", 
		"column_def", "type_name", "column_constraint", "signed_number", "table_constraint", 
		"foreign_key_clause", "conflict_clause", "create_trigger_stmt", "create_view_stmt", 
		"create_virtual_table_stmt", "with_clause", "cte_table_name", "recursive_cte", 
		"common_table_expression", "delete_stmt", "delete_stmt_limited", "detach_stmt", 
		"drop_stmt", "expr", "raise_function", "literal_value", "value_row", "values_clause", 
		"insert_stmt", "returning_clause", "upsert_clause", "pragma_stmt", "pragma_value", 
		"reindex_stmt", "select_stmt", "join_clause", "select_core", "factored_select_stmt", 
		"simple_select_stmt", "compound_select_stmt", "table_or_subquery", "result_column", 
		"join_operator", "join_constraint", "compound_operator", "update_stmt", 
		"column_name_list", "update_stmt_limited", "qualified_table_name", "vacuum_stmt", 
		"filter_clause", "window_defn", "over_clause", "frame_spec", "frame_clause", 
		"simple_function_invocation", "aggregate_function_invocation", "window_function_invocation", 
		"common_table_stmt", "order_by_stmt", "limit_stmt", "ordering_term", "asc_desc", 
		"frame_left", "frame_right", "frame_single", "window_function", "offset", 
		"default_value", "partition_by", "order_by_expr", "order_by_expr_asc_desc", 
		"expr_asc_desc", "initial_select", "recursive_select", "unary_operator", 
		"error_message", "module_argument", "column_alias", "keyword", "name", 
		"function_name", "schema_name", "table_name", "table_or_index_name", "column_name", 
		"collation_name", "foreign_table", "index_name", "trigger_name", "view_name", 
		"module_name", "pragma_name", "savepoint_name", "table_alias", "transaction_name", 
		"window_name", "alias", "filename", "base_window_name", "simple_func", 
		"aggregate_func", "table_function_name", "any_name",
	];
	public get grammarFileName(): string { return "SQLiteParser.g4"; }
	public get literalNames(): (string | null)[] { return SQLiteParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return SQLiteParser.symbolicNames; }
	public get ruleNames(): string[] { return SQLiteParser.ruleNames; }
	public get serializedATN(): number[] { return SQLiteParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, SQLiteParser._ATN, SQLiteParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public parse(): ParseContext {
		let localctx: ParseContext = new ParseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, SQLiteParser.RULE_parse);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 229;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3221225474) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 2499842057) !== 0) || _la===71 || _la===88 || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 2684765569) !== 0) || _la===144 || _la===149) {
				{
				{
				this.state = 226;
				this.sql_stmt_list();
				}
				}
				this.state = 231;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 232;
			this.match(SQLiteParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sql_stmt_list(): Sql_stmt_listContext {
		let localctx: Sql_stmt_listContext = new Sql_stmt_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, SQLiteParser.RULE_sql_stmt_list);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 237;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 234;
				this.match(SQLiteParser.SCOL);
				}
				}
				this.state = 239;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 240;
			this.sql_stmt();
			this.state = 249;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 242;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 241;
						this.match(SQLiteParser.SCOL);
						}
						}
						this.state = 244;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la===1);
					this.state = 246;
					this.sql_stmt();
					}
					}
				}
				this.state = 251;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			}
			this.state = 255;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 252;
					this.match(SQLiteParser.SCOL);
					}
					}
				}
				this.state = 257;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sql_stmt(): Sql_stmtContext {
		let localctx: Sql_stmtContext = new Sql_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, SQLiteParser.RULE_sql_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 263;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===71) {
				{
				this.state = 258;
				this.match(SQLiteParser.EXPLAIN_);
				this.state = 261;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===114) {
					{
					this.state = 259;
					this.match(SQLiteParser.QUERY_);
					this.state = 260;
					this.match(SQLiteParser.PLAN_);
					}
				}

				}
			}

			this.state = 289;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 265;
				this.alter_table_stmt();
				}
				break;
			case 2:
				{
				this.state = 266;
				this.analyze_stmt();
				}
				break;
			case 3:
				{
				this.state = 267;
				this.attach_stmt();
				}
				break;
			case 4:
				{
				this.state = 268;
				this.begin_stmt();
				}
				break;
			case 5:
				{
				this.state = 269;
				this.commit_stmt();
				}
				break;
			case 6:
				{
				this.state = 270;
				this.create_index_stmt();
				}
				break;
			case 7:
				{
				this.state = 271;
				this.create_table_stmt();
				}
				break;
			case 8:
				{
				this.state = 272;
				this.create_trigger_stmt();
				}
				break;
			case 9:
				{
				this.state = 273;
				this.create_view_stmt();
				}
				break;
			case 10:
				{
				this.state = 274;
				this.create_virtual_table_stmt();
				}
				break;
			case 11:
				{
				this.state = 275;
				this.delete_stmt();
				}
				break;
			case 12:
				{
				this.state = 276;
				this.delete_stmt_limited();
				}
				break;
			case 13:
				{
				this.state = 277;
				this.detach_stmt();
				}
				break;
			case 14:
				{
				this.state = 278;
				this.drop_stmt();
				}
				break;
			case 15:
				{
				this.state = 279;
				this.insert_stmt();
				}
				break;
			case 16:
				{
				this.state = 280;
				this.pragma_stmt();
				}
				break;
			case 17:
				{
				this.state = 281;
				this.reindex_stmt();
				}
				break;
			case 18:
				{
				this.state = 282;
				this.release_stmt();
				}
				break;
			case 19:
				{
				this.state = 283;
				this.rollback_stmt();
				}
				break;
			case 20:
				{
				this.state = 284;
				this.savepoint_stmt();
				}
				break;
			case 21:
				{
				this.state = 285;
				this.select_stmt();
				}
				break;
			case 22:
				{
				this.state = 286;
				this.update_stmt();
				}
				break;
			case 23:
				{
				this.state = 287;
				this.update_stmt_limited();
				}
				break;
			case 24:
				{
				this.state = 288;
				this.vacuum_stmt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public alter_table_stmt(): Alter_table_stmtContext {
		let localctx: Alter_table_stmtContext = new Alter_table_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, SQLiteParser.RULE_alter_table_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 291;
			this.match(SQLiteParser.ALTER_);
			this.state = 292;
			this.match(SQLiteParser.TABLE_);
			this.state = 296;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 293;
				this.schema_name();
				this.state = 294;
				this.match(SQLiteParser.DOT);
				}
				break;
			}
			this.state = 298;
			this.table_name();
			this.state = 321;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 121:
				{
				this.state = 299;
				this.match(SQLiteParser.RENAME_);
				this.state = 309;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
				case 1:
					{
					this.state = 300;
					this.match(SQLiteParser.TO_);
					this.state = 301;
					localctx._new_table_name = this.table_name();
					}
					break;
				case 2:
					{
					this.state = 303;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
					case 1:
						{
						this.state = 302;
						this.match(SQLiteParser.COLUMN_);
						}
						break;
					}
					this.state = 305;
					localctx._old_column_name = this.column_name();
					this.state = 306;
					this.match(SQLiteParser.TO_);
					this.state = 307;
					localctx._new_column_name = this.column_name();
					}
					break;
				}
				}
				break;
			case 27:
				{
				this.state = 311;
				this.match(SQLiteParser.ADD_);
				this.state = 313;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
				case 1:
					{
					this.state = 312;
					this.match(SQLiteParser.COLUMN_);
					}
					break;
				}
				this.state = 315;
				this.column_def();
				}
				break;
			case 63:
				{
				this.state = 316;
				this.match(SQLiteParser.DROP_);
				this.state = 318;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
				case 1:
					{
					this.state = 317;
					this.match(SQLiteParser.COLUMN_);
					}
					break;
				}
				this.state = 320;
				this.column_name();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public analyze_stmt(): Analyze_stmtContext {
		let localctx: Analyze_stmtContext = new Analyze_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, SQLiteParser.RULE_analyze_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 323;
			this.match(SQLiteParser.ANALYZE_);
			this.state = 331;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 324;
				this.schema_name();
				}
				break;
			case 2:
				{
				this.state = 328;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
				case 1:
					{
					this.state = 325;
					this.schema_name();
					this.state = 326;
					this.match(SQLiteParser.DOT);
					}
					break;
				}
				this.state = 330;
				this.table_or_index_name();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public attach_stmt(): Attach_stmtContext {
		let localctx: Attach_stmtContext = new Attach_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, SQLiteParser.RULE_attach_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 333;
			this.match(SQLiteParser.ATTACH_);
			this.state = 335;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 334;
				this.match(SQLiteParser.DATABASE_);
				}
				break;
			}
			this.state = 337;
			this.expr(0);
			this.state = 338;
			this.match(SQLiteParser.AS_);
			this.state = 339;
			this.schema_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public begin_stmt(): Begin_stmtContext {
		let localctx: Begin_stmtContext = new Begin_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, SQLiteParser.RULE_begin_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 341;
			this.match(SQLiteParser.BEGIN_);
			this.state = 343;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & 16779265) !== 0)) {
				{
				this.state = 342;
				_la = this._input.LA(1);
				if(!(((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & 16779265) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 349;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===137) {
				{
				this.state = 345;
				this.match(SQLiteParser.TRANSACTION_);
				this.state = 347;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
				case 1:
					{
					this.state = 346;
					this.transaction_name();
					}
					break;
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public commit_stmt(): Commit_stmtContext {
		let localctx: Commit_stmtContext = new Commit_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, SQLiteParser.RULE_commit_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 351;
			_la = this._input.LA(1);
			if(!(_la===47 || _la===66)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 353;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===137) {
				{
				this.state = 352;
				this.match(SQLiteParser.TRANSACTION_);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rollback_stmt(): Rollback_stmtContext {
		let localctx: Rollback_stmtContext = new Rollback_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, SQLiteParser.RULE_rollback_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 355;
			this.match(SQLiteParser.ROLLBACK_);
			this.state = 357;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===137) {
				{
				this.state = 356;
				this.match(SQLiteParser.TRANSACTION_);
				}
			}

			this.state = 364;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===136) {
				{
				this.state = 359;
				this.match(SQLiteParser.TO_);
				this.state = 361;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 22, this._ctx) ) {
				case 1:
					{
					this.state = 360;
					this.match(SQLiteParser.SAVEPOINT_);
					}
					break;
				}
				this.state = 363;
				this.savepoint_name();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public savepoint_stmt(): Savepoint_stmtContext {
		let localctx: Savepoint_stmtContext = new Savepoint_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, SQLiteParser.RULE_savepoint_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 366;
			this.match(SQLiteParser.SAVEPOINT_);
			this.state = 367;
			this.savepoint_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public release_stmt(): Release_stmtContext {
		let localctx: Release_stmtContext = new Release_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, SQLiteParser.RULE_release_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 369;
			this.match(SQLiteParser.RELEASE_);
			this.state = 371;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				{
				this.state = 370;
				this.match(SQLiteParser.SAVEPOINT_);
				}
				break;
			}
			this.state = 373;
			this.savepoint_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public create_index_stmt(): Create_index_stmtContext {
		let localctx: Create_index_stmtContext = new Create_index_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, SQLiteParser.RULE_create_index_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 375;
			this.match(SQLiteParser.CREATE_);
			this.state = 377;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===140) {
				{
				this.state = 376;
				this.match(SQLiteParser.UNIQUE_);
				}
			}

			this.state = 379;
			this.match(SQLiteParser.INDEX_);
			this.state = 383;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				{
				this.state = 380;
				this.match(SQLiteParser.IF_);
				this.state = 381;
				this.match(SQLiteParser.NOT_);
				this.state = 382;
				this.match(SQLiteParser.EXISTS_);
				}
				break;
			}
			this.state = 388;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				this.state = 385;
				this.schema_name();
				this.state = 386;
				this.match(SQLiteParser.DOT);
				}
				break;
			}
			this.state = 390;
			this.index_name();
			this.state = 391;
			this.match(SQLiteParser.ON_);
			this.state = 392;
			this.table_name();
			this.state = 393;
			this.match(SQLiteParser.OPEN_PAR);
			this.state = 394;
			this.indexed_column();
			this.state = 399;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5) {
				{
				{
				this.state = 395;
				this.match(SQLiteParser.COMMA);
				this.state = 396;
				this.indexed_column();
				}
				}
				this.state = 401;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 402;
			this.match(SQLiteParser.CLOSE_PAR);
			this.state = 405;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===148) {
				{
				this.state = 403;
				this.match(SQLiteParser.WHERE_);
				this.state = 404;
				this.expr(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public indexed_column(): Indexed_columnContext {
		let localctx: Indexed_columnContext = new Indexed_columnContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, SQLiteParser.RULE_indexed_column);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 409;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 407;
				this.column_name();
				}
				break;
			case 2:
				{
				this.state = 408;
				this.expr(0);
				}
				break;
			}
			this.state = 413;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===45) {
				{
				this.state = 411;
				this.match(SQLiteParser.COLLATE_);
				this.state = 412;
				this.collation_name();
				}
			}

			this.state = 416;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===34 || _la===60) {
				{
				this.state = 415;
				this.asc_desc();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public create_table_stmt(): Create_table_stmtContext {
		let localctx: Create_table_stmtContext = new Create_table_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, SQLiteParser.RULE_create_table_stmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 418;
			this.match(SQLiteParser.CREATE_);
			this.state = 420;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===133 || _la===134) {
				{
				this.state = 419;
				_la = this._input.LA(1);
				if(!(_la===133 || _la===134)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 422;
			this.match(SQLiteParser.TABLE_);
			this.state = 426;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 423;
				this.match(SQLiteParser.IF_);
				this.state = 424;
				this.match(SQLiteParser.NOT_);
				this.state = 425;
				this.match(SQLiteParser.EXISTS_);
				}
				break;
			}
			this.state = 431;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				this.state = 428;
				this.schema_name();
				this.state = 429;
				this.match(SQLiteParser.DOT);
				}
				break;
			}
			this.state = 433;
			this.table_name();
			this.state = 457;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
				{
				this.state = 434;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 435;
				this.column_def();
				this.state = 440;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 36, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 436;
						this.match(SQLiteParser.COMMA);
						this.state = 437;
						this.column_def();
						}
						}
					}
					this.state = 442;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 36, this._ctx);
				}
				this.state = 447;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===5) {
					{
					{
					this.state = 443;
					this.match(SQLiteParser.COMMA);
					this.state = 444;
					this.table_constraint();
					}
					}
					this.state = 449;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 450;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 453;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===150) {
					{
					this.state = 451;
					this.match(SQLiteParser.WITHOUT_);
					this.state = 452;
					localctx._row_ROW_ID = this.match(SQLiteParser.IDENTIFIER);
					}
				}

				}
				break;
			case 33:
				{
				this.state = 455;
				this.match(SQLiteParser.AS_);
				this.state = 456;
				this.select_stmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public column_def(): Column_defContext {
		let localctx: Column_defContext = new Column_defContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, SQLiteParser.RULE_column_def);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 459;
			this.column_name();
			this.state = 461;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				{
				this.state = 460;
				this.type_name();
				}
				break;
			}
			this.state = 466;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 8460289) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 34821) !== 0) || _la===140 || _la===169) {
				{
				{
				this.state = 463;
				this.column_constraint();
				}
				}
				this.state = 468;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public type_name(): Type_nameContext {
		let localctx: Type_nameContext = new Type_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, SQLiteParser.RULE_type_name);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 470;
			this._errHandler.sync(this);
			_alt = 1 + 1;
			do {
				switch (_alt) {
				case 1 + 1:
					{
					{
					this.state = 469;
					this.name();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 472;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 42, this._ctx);
			} while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 484;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				{
				this.state = 474;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 475;
				this.signed_number();
				this.state = 476;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			case 2:
				{
				this.state = 478;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 479;
				this.signed_number();
				this.state = 480;
				this.match(SQLiteParser.COMMA);
				this.state = 481;
				this.signed_number();
				this.state = 482;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public column_constraint(): Column_constraintContext {
		let localctx: Column_constraintContext = new Column_constraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, SQLiteParser.RULE_column_constraint);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 488;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===49) {
				{
				this.state = 486;
				this.match(SQLiteParser.CONSTRAINT_);
				this.state = 487;
				this.name();
				}
			}

			this.state = 539;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 113:
				{
				{
				this.state = 490;
				this.match(SQLiteParser.PRIMARY_);
				this.state = 491;
				this.match(SQLiteParser.KEY_);
				this.state = 493;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===34 || _la===60) {
					{
					this.state = 492;
					this.asc_desc();
					}
				}

				this.state = 496;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===107) {
					{
					this.state = 495;
					this.conflict_clause();
					}
				}

				this.state = 499;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===36) {
					{
					this.state = 498;
					this.match(SQLiteParser.AUTOINCREMENT_);
					}
				}

				}
				}
				break;
			case 102:
			case 104:
			case 140:
				{
				this.state = 506;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 102:
				case 104:
					{
					this.state = 502;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===102) {
						{
						this.state = 501;
						this.match(SQLiteParser.NOT_);
						}
					}

					this.state = 504;
					this.match(SQLiteParser.NULL_);
					}
					break;
				case 140:
					{
					this.state = 505;
					this.match(SQLiteParser.UNIQUE_);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 509;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===107) {
					{
					this.state = 508;
					this.conflict_clause();
					}
				}

				}
				break;
			case 44:
				{
				this.state = 511;
				this.match(SQLiteParser.CHECK_);
				this.state = 512;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 513;
				this.expr(0);
				this.state = 514;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			case 56:
				{
				this.state = 516;
				this.match(SQLiteParser.DEFAULT_);
				this.state = 523;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 51, this._ctx) ) {
				case 1:
					{
					this.state = 517;
					this.signed_number();
					}
					break;
				case 2:
					{
					this.state = 518;
					this.literal_value();
					}
					break;
				case 3:
					{
					this.state = 519;
					this.match(SQLiteParser.OPEN_PAR);
					this.state = 520;
					this.expr(0);
					this.state = 521;
					this.match(SQLiteParser.CLOSE_PAR);
					}
					break;
				}
				}
				break;
			case 45:
				{
				this.state = 525;
				this.match(SQLiteParser.COLLATE_);
				this.state = 526;
				this.collation_name();
				}
				break;
			case 117:
				{
				this.state = 527;
				this.foreign_key_clause();
				}
				break;
			case 33:
			case 169:
				{
				this.state = 530;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===169) {
					{
					this.state = 528;
					this.match(SQLiteParser.GENERATED_);
					this.state = 529;
					this.match(SQLiteParser.ALWAYS_);
					}
				}

				this.state = 532;
				this.match(SQLiteParser.AS_);
				this.state = 533;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 534;
				this.expr(0);
				this.state = 535;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 537;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===146 || _la===171) {
					{
					this.state = 536;
					_la = this._input.LA(1);
					if(!(_la===146 || _la===171)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public signed_number(): Signed_numberContext {
		let localctx: Signed_numberContext = new Signed_numberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, SQLiteParser.RULE_signed_number);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 542;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8 || _la===9) {
				{
				this.state = 541;
				_la = this._input.LA(1);
				if(!(_la===8 || _la===9)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 544;
			this.match(SQLiteParser.NUMERIC_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public table_constraint(): Table_constraintContext {
		let localctx: Table_constraintContext = new Table_constraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, SQLiteParser.RULE_table_constraint);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 548;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===49) {
				{
				this.state = 546;
				this.match(SQLiteParser.CONSTRAINT_);
				this.state = 547;
				this.name();
				}
			}

			this.state = 587;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 113:
			case 140:
				{
				this.state = 553;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 113:
					{
					this.state = 550;
					this.match(SQLiteParser.PRIMARY_);
					this.state = 551;
					this.match(SQLiteParser.KEY_);
					}
					break;
				case 140:
					{
					this.state = 552;
					this.match(SQLiteParser.UNIQUE_);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 555;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 556;
				this.indexed_column();
				this.state = 561;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===5) {
					{
					{
					this.state = 557;
					this.match(SQLiteParser.COMMA);
					this.state = 558;
					this.indexed_column();
					}
					}
					this.state = 563;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 564;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 566;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===107) {
					{
					this.state = 565;
					this.conflict_clause();
					}
				}

				}
				break;
			case 44:
				{
				this.state = 568;
				this.match(SQLiteParser.CHECK_);
				this.state = 569;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 570;
				this.expr(0);
				this.state = 571;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			case 74:
				{
				this.state = 573;
				this.match(SQLiteParser.FOREIGN_);
				this.state = 574;
				this.match(SQLiteParser.KEY_);
				this.state = 575;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 576;
				this.column_name();
				this.state = 581;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===5) {
					{
					{
					this.state = 577;
					this.match(SQLiteParser.COMMA);
					this.state = 578;
					this.column_name();
					}
					}
					this.state = 583;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 584;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 585;
				this.foreign_key_clause();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public foreign_key_clause(): Foreign_key_clauseContext {
		let localctx: Foreign_key_clauseContext = new Foreign_key_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, SQLiteParser.RULE_foreign_key_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 589;
			this.match(SQLiteParser.REFERENCES_);
			this.state = 590;
			this.foreign_table();
			this.state = 602;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===3) {
				{
				this.state = 591;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 592;
				this.column_name();
				this.state = 597;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===5) {
					{
					{
					this.state = 593;
					this.match(SQLiteParser.COMMA);
					this.state = 594;
					this.column_name();
					}
					}
					this.state = 599;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 600;
				this.match(SQLiteParser.CLOSE_PAR);
				}
			}

			this.state = 618;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===99 || _la===107) {
				{
				this.state = 616;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 107:
					{
					this.state = 604;
					this.match(SQLiteParser.ON_);
					this.state = 605;
					_la = this._input.LA(1);
					if(!(_la===59 || _la===141)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 612;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 131:
						{
						this.state = 606;
						this.match(SQLiteParser.SET_);
						this.state = 607;
						_la = this._input.LA(1);
						if(!(_la===56 || _la===104)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						}
						break;
					case 41:
						{
						this.state = 608;
						this.match(SQLiteParser.CASCADE_);
						}
						break;
					case 123:
						{
						this.state = 609;
						this.match(SQLiteParser.RESTRICT_);
						}
						break;
					case 101:
						{
						this.state = 610;
						this.match(SQLiteParser.NO_);
						this.state = 611;
						this.match(SQLiteParser.ACTION_);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				case 99:
					{
					this.state = 614;
					this.match(SQLiteParser.MATCH_);
					this.state = 615;
					this.name();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 620;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 629;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				{
				this.state = 622;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===102) {
					{
					this.state = 621;
					this.match(SQLiteParser.NOT_);
					}
				}

				this.state = 624;
				this.match(SQLiteParser.DEFERRABLE_);
				this.state = 627;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===86) {
					{
					this.state = 625;
					this.match(SQLiteParser.INITIALLY_);
					this.state = 626;
					_la = this._input.LA(1);
					if(!(_la===58 || _la===82)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public conflict_clause(): Conflict_clauseContext {
		let localctx: Conflict_clauseContext = new Conflict_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, SQLiteParser.RULE_conflict_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 631;
			this.match(SQLiteParser.ON_);
			this.state = 632;
			this.match(SQLiteParser.CONFLICT_);
			this.state = 633;
			_la = this._input.LA(1);
			if(!(_la===25 || _la===72 || _la===81 || _la===122 || _la===126)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public create_trigger_stmt(): Create_trigger_stmtContext {
		let localctx: Create_trigger_stmtContext = new Create_trigger_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, SQLiteParser.RULE_create_trigger_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 635;
			this.match(SQLiteParser.CREATE_);
			this.state = 637;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===133 || _la===134) {
				{
				this.state = 636;
				_la = this._input.LA(1);
				if(!(_la===133 || _la===134)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 639;
			this.match(SQLiteParser.TRIGGER_);
			this.state = 643;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				{
				this.state = 640;
				this.match(SQLiteParser.IF_);
				this.state = 641;
				this.match(SQLiteParser.NOT_);
				this.state = 642;
				this.match(SQLiteParser.EXISTS_);
				}
				break;
			}
			this.state = 648;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				{
				this.state = 645;
				this.schema_name();
				this.state = 646;
				this.match(SQLiteParser.DOT);
				}
				break;
			}
			this.state = 650;
			this.trigger_name();
			this.state = 655;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 37:
				{
				this.state = 651;
				this.match(SQLiteParser.BEFORE_);
				}
				break;
			case 28:
				{
				this.state = 652;
				this.match(SQLiteParser.AFTER_);
				}
				break;
			case 89:
				{
				this.state = 653;
				this.match(SQLiteParser.INSTEAD_);
				this.state = 654;
				this.match(SQLiteParser.OF_);
				}
				break;
			case 59:
			case 88:
			case 141:
				break;
			default:
				break;
			}
			this.state = 671;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 59:
				{
				this.state = 657;
				this.match(SQLiteParser.DELETE_);
				}
				break;
			case 88:
				{
				this.state = 658;
				this.match(SQLiteParser.INSERT_);
				}
				break;
			case 141:
				{
				this.state = 659;
				this.match(SQLiteParser.UPDATE_);
				this.state = 669;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===105) {
					{
					this.state = 660;
					this.match(SQLiteParser.OF_);
					this.state = 661;
					this.column_name();
					this.state = 666;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===5) {
						{
						{
						this.state = 662;
						this.match(SQLiteParser.COMMA);
						this.state = 663;
						this.column_name();
						}
						}
						this.state = 668;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 673;
			this.match(SQLiteParser.ON_);
			this.state = 674;
			this.table_name();
			this.state = 678;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===73) {
				{
				this.state = 675;
				this.match(SQLiteParser.FOR_);
				this.state = 676;
				this.match(SQLiteParser.EACH_);
				this.state = 677;
				this.match(SQLiteParser.ROW_);
				}
			}

			this.state = 682;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===147) {
				{
				this.state = 680;
				this.match(SQLiteParser.WHEN_);
				this.state = 681;
				this.expr(0);
				}
			}

			this.state = 684;
			this.match(SQLiteParser.BEGIN_);
			this.state = 693;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 689;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 79, this._ctx) ) {
				case 1:
					{
					this.state = 685;
					this.update_stmt();
					}
					break;
				case 2:
					{
					this.state = 686;
					this.insert_stmt();
					}
					break;
				case 3:
					{
					this.state = 687;
					this.delete_stmt();
					}
					break;
				case 4:
					{
					this.state = 688;
					this.select_stmt();
					}
					break;
				}
				this.state = 691;
				this.match(SQLiteParser.SCOL);
				}
				}
				this.state = 695;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===59 || _la===88 || ((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & 138936577) !== 0));
			this.state = 697;
			this.match(SQLiteParser.END_);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public create_view_stmt(): Create_view_stmtContext {
		let localctx: Create_view_stmtContext = new Create_view_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, SQLiteParser.RULE_create_view_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 699;
			this.match(SQLiteParser.CREATE_);
			this.state = 701;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===133 || _la===134) {
				{
				this.state = 700;
				_la = this._input.LA(1);
				if(!(_la===133 || _la===134)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 703;
			this.match(SQLiteParser.VIEW_);
			this.state = 707;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 82, this._ctx) ) {
			case 1:
				{
				this.state = 704;
				this.match(SQLiteParser.IF_);
				this.state = 705;
				this.match(SQLiteParser.NOT_);
				this.state = 706;
				this.match(SQLiteParser.EXISTS_);
				}
				break;
			}
			this.state = 712;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				{
				this.state = 709;
				this.schema_name();
				this.state = 710;
				this.match(SQLiteParser.DOT);
				}
				break;
			}
			this.state = 714;
			this.view_name();
			this.state = 726;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===3) {
				{
				this.state = 715;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 716;
				this.column_name();
				this.state = 721;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===5) {
					{
					{
					this.state = 717;
					this.match(SQLiteParser.COMMA);
					this.state = 718;
					this.column_name();
					}
					}
					this.state = 723;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 724;
				this.match(SQLiteParser.CLOSE_PAR);
				}
			}

			this.state = 728;
			this.match(SQLiteParser.AS_);
			this.state = 729;
			this.select_stmt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public create_virtual_table_stmt(): Create_virtual_table_stmtContext {
		let localctx: Create_virtual_table_stmtContext = new Create_virtual_table_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, SQLiteParser.RULE_create_virtual_table_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 731;
			this.match(SQLiteParser.CREATE_);
			this.state = 732;
			this.match(SQLiteParser.VIRTUAL_);
			this.state = 733;
			this.match(SQLiteParser.TABLE_);
			this.state = 737;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 86, this._ctx) ) {
			case 1:
				{
				this.state = 734;
				this.match(SQLiteParser.IF_);
				this.state = 735;
				this.match(SQLiteParser.NOT_);
				this.state = 736;
				this.match(SQLiteParser.EXISTS_);
				}
				break;
			}
			this.state = 742;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 87, this._ctx) ) {
			case 1:
				{
				this.state = 739;
				this.schema_name();
				this.state = 740;
				this.match(SQLiteParser.DOT);
				}
				break;
			}
			this.state = 744;
			this.table_name();
			this.state = 745;
			this.match(SQLiteParser.USING_);
			this.state = 746;
			this.module_name();
			this.state = 758;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===3) {
				{
				this.state = 747;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 748;
				this.module_argument();
				this.state = 753;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===5) {
					{
					{
					this.state = 749;
					this.match(SQLiteParser.COMMA);
					this.state = 750;
					this.module_argument();
					}
					}
					this.state = 755;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 756;
				this.match(SQLiteParser.CLOSE_PAR);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public with_clause(): With_clauseContext {
		let localctx: With_clauseContext = new With_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, SQLiteParser.RULE_with_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 760;
			this.match(SQLiteParser.WITH_);
			this.state = 762;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				{
				this.state = 761;
				this.match(SQLiteParser.RECURSIVE_);
				}
				break;
			}
			this.state = 764;
			this.cte_table_name();
			this.state = 765;
			this.match(SQLiteParser.AS_);
			this.state = 766;
			this.match(SQLiteParser.OPEN_PAR);
			this.state = 767;
			this.select_stmt();
			this.state = 768;
			this.match(SQLiteParser.CLOSE_PAR);
			this.state = 778;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5) {
				{
				{
				this.state = 769;
				this.match(SQLiteParser.COMMA);
				this.state = 770;
				this.cte_table_name();
				this.state = 771;
				this.match(SQLiteParser.AS_);
				this.state = 772;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 773;
				this.select_stmt();
				this.state = 774;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				}
				this.state = 780;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public cte_table_name(): Cte_table_nameContext {
		let localctx: Cte_table_nameContext = new Cte_table_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, SQLiteParser.RULE_cte_table_name);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 781;
			this.table_name();
			this.state = 793;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===3) {
				{
				this.state = 782;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 783;
				this.column_name();
				this.state = 788;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===5) {
					{
					{
					this.state = 784;
					this.match(SQLiteParser.COMMA);
					this.state = 785;
					this.column_name();
					}
					}
					this.state = 790;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 791;
				this.match(SQLiteParser.CLOSE_PAR);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public recursive_cte(): Recursive_cteContext {
		let localctx: Recursive_cteContext = new Recursive_cteContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, SQLiteParser.RULE_recursive_cte);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 795;
			this.cte_table_name();
			this.state = 796;
			this.match(SQLiteParser.AS_);
			this.state = 797;
			this.match(SQLiteParser.OPEN_PAR);
			this.state = 798;
			this.initial_select();
			this.state = 799;
			this.match(SQLiteParser.UNION_);
			this.state = 801;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===29) {
				{
				this.state = 800;
				this.match(SQLiteParser.ALL_);
				}
			}

			this.state = 803;
			this.recursive_select();
			this.state = 804;
			this.match(SQLiteParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public common_table_expression(): Common_table_expressionContext {
		let localctx: Common_table_expressionContext = new Common_table_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, SQLiteParser.RULE_common_table_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 806;
			this.table_name();
			this.state = 818;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===3) {
				{
				this.state = 807;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 808;
				this.column_name();
				this.state = 813;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===5) {
					{
					{
					this.state = 809;
					this.match(SQLiteParser.COMMA);
					this.state = 810;
					this.column_name();
					}
					}
					this.state = 815;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 816;
				this.match(SQLiteParser.CLOSE_PAR);
				}
			}

			this.state = 820;
			this.match(SQLiteParser.AS_);
			this.state = 821;
			this.match(SQLiteParser.OPEN_PAR);
			this.state = 822;
			this.select_stmt();
			this.state = 823;
			this.match(SQLiteParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public delete_stmt(): Delete_stmtContext {
		let localctx: Delete_stmtContext = new Delete_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, SQLiteParser.RULE_delete_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 826;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===149) {
				{
				this.state = 825;
				this.with_clause();
				}
			}

			this.state = 828;
			this.match(SQLiteParser.DELETE_);
			this.state = 829;
			this.match(SQLiteParser.FROM_);
			this.state = 830;
			this.qualified_table_name();
			this.state = 833;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===148) {
				{
				this.state = 831;
				this.match(SQLiteParser.WHERE_);
				this.state = 832;
				this.expr(0);
				}
			}

			this.state = 836;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===124) {
				{
				this.state = 835;
				this.returning_clause();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public delete_stmt_limited(): Delete_stmt_limitedContext {
		let localctx: Delete_stmt_limitedContext = new Delete_stmt_limitedContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, SQLiteParser.RULE_delete_stmt_limited);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 839;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===149) {
				{
				this.state = 838;
				this.with_clause();
				}
			}

			this.state = 841;
			this.match(SQLiteParser.DELETE_);
			this.state = 842;
			this.match(SQLiteParser.FROM_);
			this.state = 843;
			this.qualified_table_name();
			this.state = 846;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===148) {
				{
				this.state = 844;
				this.match(SQLiteParser.WHERE_);
				this.state = 845;
				this.expr(0);
				}
			}

			this.state = 849;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===124) {
				{
				this.state = 848;
				this.returning_clause();
				}
			}

			this.state = 855;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===98 || _la===109) {
				{
				this.state = 852;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===109) {
					{
					this.state = 851;
					this.order_by_stmt();
					}
				}

				this.state = 854;
				this.limit_stmt();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public detach_stmt(): Detach_stmtContext {
		let localctx: Detach_stmtContext = new Detach_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, SQLiteParser.RULE_detach_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 857;
			this.match(SQLiteParser.DETACH_);
			this.state = 859;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 105, this._ctx) ) {
			case 1:
				{
				this.state = 858;
				this.match(SQLiteParser.DATABASE_);
				}
				break;
			}
			this.state = 861;
			this.schema_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public drop_stmt(): Drop_stmtContext {
		let localctx: Drop_stmtContext = new Drop_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, SQLiteParser.RULE_drop_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 863;
			this.match(SQLiteParser.DROP_);
			this.state = 864;
			localctx._object = this._input.LT(1);
			_la = this._input.LA(1);
			if(!(_la===84 || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & 8257) !== 0))) {
			    localctx._object = this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 867;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 106, this._ctx) ) {
			case 1:
				{
				this.state = 865;
				this.match(SQLiteParser.IF_);
				this.state = 866;
				this.match(SQLiteParser.EXISTS_);
				}
				break;
			}
			this.state = 872;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 107, this._ctx) ) {
			case 1:
				{
				this.state = 869;
				this.schema_name();
				this.state = 870;
				this.match(SQLiteParser.DOT);
				}
				break;
			}
			this.state = 874;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExprContext = new ExprContext(this, this._ctx, _parentState);
		let _prevctx: ExprContext = localctx;
		let _startState: number = 64;
		this.enterRecursionRule(localctx, 64, SQLiteParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 964;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 121, this._ctx) ) {
			case 1:
				{
				this.state = 877;
				this.literal_value();
				}
				break;
			case 2:
				{
				this.state = 878;
				this.match(SQLiteParser.BIND_PARAMETER);
				}
				break;
			case 3:
				{
				this.state = 887;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 109, this._ctx) ) {
				case 1:
					{
					this.state = 882;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 108, this._ctx) ) {
					case 1:
						{
						this.state = 879;
						this.schema_name();
						this.state = 880;
						this.match(SQLiteParser.DOT);
						}
						break;
					}
					this.state = 884;
					this.table_name();
					this.state = 885;
					this.match(SQLiteParser.DOT);
					}
					break;
				}
				this.state = 889;
				this.column_name();
				}
				break;
			case 4:
				{
				this.state = 890;
				this.unary_operator();
				this.state = 891;
				this.expr(21);
				}
				break;
			case 5:
				{
				this.state = 893;
				this.function_name();
				this.state = 894;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 907;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 3:
				case 8:
				case 9:
				case 10:
				case 25:
				case 26:
				case 27:
				case 28:
				case 29:
				case 30:
				case 31:
				case 32:
				case 33:
				case 34:
				case 35:
				case 36:
				case 37:
				case 38:
				case 39:
				case 40:
				case 41:
				case 42:
				case 43:
				case 44:
				case 45:
				case 46:
				case 47:
				case 48:
				case 49:
				case 50:
				case 51:
				case 52:
				case 53:
				case 54:
				case 55:
				case 56:
				case 57:
				case 58:
				case 59:
				case 60:
				case 61:
				case 62:
				case 63:
				case 64:
				case 65:
				case 66:
				case 67:
				case 68:
				case 69:
				case 70:
				case 71:
				case 72:
				case 73:
				case 74:
				case 75:
				case 76:
				case 77:
				case 78:
				case 79:
				case 80:
				case 81:
				case 82:
				case 83:
				case 84:
				case 85:
				case 86:
				case 87:
				case 88:
				case 89:
				case 90:
				case 91:
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
				case 99:
				case 100:
				case 101:
				case 102:
				case 103:
				case 104:
				case 105:
				case 106:
				case 107:
				case 108:
				case 109:
				case 110:
				case 111:
				case 112:
				case 113:
				case 114:
				case 115:
				case 116:
				case 117:
				case 118:
				case 119:
				case 120:
				case 121:
				case 122:
				case 123:
				case 125:
				case 126:
				case 127:
				case 128:
				case 129:
				case 130:
				case 131:
				case 132:
				case 133:
				case 134:
				case 135:
				case 136:
				case 137:
				case 138:
				case 139:
				case 140:
				case 141:
				case 142:
				case 143:
				case 144:
				case 145:
				case 146:
				case 147:
				case 148:
				case 149:
				case 150:
				case 151:
				case 152:
				case 153:
				case 154:
				case 155:
				case 156:
				case 157:
				case 158:
				case 159:
				case 160:
				case 161:
				case 162:
				case 163:
				case 164:
				case 165:
				case 166:
				case 167:
				case 168:
				case 169:
				case 170:
				case 171:
				case 172:
				case 173:
				case 174:
				case 175:
				case 176:
				case 177:
				case 178:
				case 179:
				case 180:
				case 185:
				case 186:
				case 187:
				case 188:
				case 189:
					{
					{
					this.state = 896;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 110, this._ctx) ) {
					case 1:
						{
						this.state = 895;
						this.match(SQLiteParser.DISTINCT_);
						}
						break;
					}
					this.state = 898;
					this.expr(0);
					this.state = 903;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===5) {
						{
						{
						this.state = 899;
						this.match(SQLiteParser.COMMA);
						this.state = 900;
						this.expr(0);
						}
						}
						this.state = 905;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					break;
				case 7:
					{
					this.state = 906;
					this.match(SQLiteParser.STAR);
					}
					break;
				case 4:
					break;
				default:
					break;
				}
				this.state = 909;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 911;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 113, this._ctx) ) {
				case 1:
					{
					this.state = 910;
					this.filter_clause();
					}
					break;
				}
				this.state = 914;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 114, this._ctx) ) {
				case 1:
					{
					this.state = 913;
					this.over_clause();
					}
					break;
				}
				}
				break;
			case 6:
				{
				this.state = 916;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 917;
				this.expr(0);
				this.state = 922;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===5) {
					{
					{
					this.state = 918;
					this.match(SQLiteParser.COMMA);
					this.state = 919;
					this.expr(0);
					}
					}
					this.state = 924;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 925;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			case 7:
				{
				this.state = 927;
				this.match(SQLiteParser.CAST_);
				this.state = 928;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 929;
				this.expr(0);
				this.state = 930;
				this.match(SQLiteParser.AS_);
				this.state = 931;
				this.type_name();
				this.state = 932;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			case 8:
				{
				this.state = 938;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===70 || _la===102) {
					{
					this.state = 935;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===102) {
						{
						this.state = 934;
						this.match(SQLiteParser.NOT_);
						}
					}

					this.state = 937;
					this.match(SQLiteParser.EXISTS_);
					}
				}

				this.state = 940;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 941;
				this.select_stmt();
				this.state = 942;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			case 9:
				{
				this.state = 944;
				this.match(SQLiteParser.CASE_);
				this.state = 946;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 118, this._ctx) ) {
				case 1:
					{
					this.state = 945;
					this.expr(0);
					}
					break;
				}
				this.state = 953;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 948;
					this.match(SQLiteParser.WHEN_);
					this.state = 949;
					this.expr(0);
					this.state = 950;
					this.match(SQLiteParser.THEN_);
					this.state = 951;
					this.expr(0);
					}
					}
					this.state = 955;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===147);
				this.state = 959;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===65) {
					{
					this.state = 957;
					this.match(SQLiteParser.ELSE_);
					this.state = 958;
					this.expr(0);
					}
				}

				this.state = 961;
				this.match(SQLiteParser.END_);
				}
				break;
			case 10:
				{
				this.state = 963;
				this.raise_function();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1085;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 137, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1083;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 136, this._ctx) ) {
					case 1:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 966;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 967;
						this.match(SQLiteParser.PIPE2);
						this.state = 968;
						this.expr(21);
						}
						break;
					case 2:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 969;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 970;
						_la = this._input.LA(1);
						if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 12416) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 971;
						this.expr(20);
						}
						break;
					case 3:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 972;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 973;
						_la = this._input.LA(1);
						if(!(_la===8 || _la===9)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 974;
						this.expr(19);
						}
						break;
					case 4:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 975;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 976;
						_la = this._input.LA(1);
						if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 245760) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 977;
						this.expr(18);
						}
						break;
					case 5:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 978;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 979;
						_la = this._input.LA(1);
						if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 3932160) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 980;
						this.expr(17);
						}
						break;
					case 6:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 981;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 994;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 122, this._ctx) ) {
						case 1:
							{
							this.state = 982;
							this.match(SQLiteParser.ASSIGN);
							}
							break;
						case 2:
							{
							this.state = 983;
							this.match(SQLiteParser.EQ);
							}
							break;
						case 3:
							{
							this.state = 984;
							this.match(SQLiteParser.NOT_EQ1);
							}
							break;
						case 4:
							{
							this.state = 985;
							this.match(SQLiteParser.NOT_EQ2);
							}
							break;
						case 5:
							{
							this.state = 986;
							this.match(SQLiteParser.IS_);
							}
							break;
						case 6:
							{
							this.state = 987;
							this.match(SQLiteParser.IS_);
							this.state = 988;
							this.match(SQLiteParser.NOT_);
							}
							break;
						case 7:
							{
							this.state = 989;
							this.match(SQLiteParser.IN_);
							}
							break;
						case 8:
							{
							this.state = 990;
							this.match(SQLiteParser.LIKE_);
							}
							break;
						case 9:
							{
							this.state = 991;
							this.match(SQLiteParser.GLOB_);
							}
							break;
						case 10:
							{
							this.state = 992;
							this.match(SQLiteParser.MATCH_);
							}
							break;
						case 11:
							{
							this.state = 993;
							this.match(SQLiteParser.REGEXP_);
							}
							break;
						}
						this.state = 996;
						this.expr(16);
						}
						break;
					case 7:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 997;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 998;
						this.match(SQLiteParser.AND_);
						this.state = 999;
						this.expr(15);
						}
						break;
					case 8:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 1000;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 1001;
						this.match(SQLiteParser.OR_);
						this.state = 1002;
						this.expr(14);
						}
						break;
					case 9:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 1003;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 1004;
						this.match(SQLiteParser.IS_);
						this.state = 1006;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 123, this._ctx) ) {
						case 1:
							{
							this.state = 1005;
							this.match(SQLiteParser.NOT_);
							}
							break;
						}
						this.state = 1008;
						this.expr(7);
						}
						break;
					case 10:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 1009;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1011;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===102) {
							{
							this.state = 1010;
							this.match(SQLiteParser.NOT_);
							}
						}

						this.state = 1013;
						this.match(SQLiteParser.BETWEEN_);
						this.state = 1014;
						this.expr(0);
						this.state = 1015;
						this.match(SQLiteParser.AND_);
						this.state = 1016;
						this.expr(6);
						}
						break;
					case 11:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 1018;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 1019;
						this.match(SQLiteParser.COLLATE_);
						this.state = 1020;
						this.collation_name();
						}
						break;
					case 12:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 1021;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 1023;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===102) {
							{
							this.state = 1022;
							this.match(SQLiteParser.NOT_);
							}
						}

						this.state = 1025;
						_la = this._input.LA(1);
						if(!(((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & 5242881) !== 0) || _la===118)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1026;
						this.expr(0);
						this.state = 1029;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 126, this._ctx) ) {
						case 1:
							{
							this.state = 1027;
							this.match(SQLiteParser.ESCAPE_);
							this.state = 1028;
							this.expr(0);
							}
							break;
						}
						}
						break;
					case 13:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 1031;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 1036;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case 93:
							{
							this.state = 1032;
							this.match(SQLiteParser.ISNULL_);
							}
							break;
						case 103:
							{
							this.state = 1033;
							this.match(SQLiteParser.NOTNULL_);
							}
							break;
						case 102:
							{
							this.state = 1034;
							this.match(SQLiteParser.NOT_);
							this.state = 1035;
							this.match(SQLiteParser.NULL_);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						break;
					case 14:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, SQLiteParser.RULE_expr);
						this.state = 1038;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1040;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===102) {
							{
							this.state = 1039;
							this.match(SQLiteParser.NOT_);
							}
						}

						this.state = 1042;
						this.match(SQLiteParser.IN_);
						this.state = 1081;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 135, this._ctx) ) {
						case 1:
							{
							this.state = 1043;
							this.match(SQLiteParser.OPEN_PAR);
							this.state = 1053;
							this._errHandler.sync(this);
							switch ( this._interp.adaptivePredict(this._input, 130, this._ctx) ) {
							case 1:
								{
								this.state = 1044;
								this.select_stmt();
								}
								break;
							case 2:
								{
								this.state = 1045;
								this.expr(0);
								this.state = 1050;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								while (_la===5) {
									{
									{
									this.state = 1046;
									this.match(SQLiteParser.COMMA);
									this.state = 1047;
									this.expr(0);
									}
									}
									this.state = 1052;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
								}
								}
								break;
							}
							this.state = 1055;
							this.match(SQLiteParser.CLOSE_PAR);
							}
							break;
						case 2:
							{
							this.state = 1059;
							this._errHandler.sync(this);
							switch ( this._interp.adaptivePredict(this._input, 131, this._ctx) ) {
							case 1:
								{
								this.state = 1056;
								this.schema_name();
								this.state = 1057;
								this.match(SQLiteParser.DOT);
								}
								break;
							}
							this.state = 1061;
							this.table_name();
							}
							break;
						case 3:
							{
							this.state = 1065;
							this._errHandler.sync(this);
							switch ( this._interp.adaptivePredict(this._input, 132, this._ctx) ) {
							case 1:
								{
								this.state = 1062;
								this.schema_name();
								this.state = 1063;
								this.match(SQLiteParser.DOT);
								}
								break;
							}
							this.state = 1067;
							this.table_function_name();
							this.state = 1068;
							this.match(SQLiteParser.OPEN_PAR);
							this.state = 1077;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4261414664) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4026531839) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967295) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 1042284543) !== 0)) {
								{
								this.state = 1069;
								this.expr(0);
								this.state = 1074;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								while (_la===5) {
									{
									{
									this.state = 1070;
									this.match(SQLiteParser.COMMA);
									this.state = 1071;
									this.expr(0);
									}
									}
									this.state = 1076;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
								}
								}
							}

							this.state = 1079;
							this.match(SQLiteParser.CLOSE_PAR);
							}
							break;
						}
						}
						break;
					}
					}
				}
				this.state = 1087;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 137, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public raise_function(): Raise_functionContext {
		let localctx: Raise_functionContext = new Raise_functionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, SQLiteParser.RULE_raise_function);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1088;
			this.match(SQLiteParser.RAISE_);
			this.state = 1089;
			this.match(SQLiteParser.OPEN_PAR);
			this.state = 1094;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 81:
				{
				this.state = 1090;
				this.match(SQLiteParser.IGNORE_);
				}
				break;
			case 25:
			case 72:
			case 126:
				{
				this.state = 1091;
				_la = this._input.LA(1);
				if(!(_la===25 || _la===72 || _la===126)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1092;
				this.match(SQLiteParser.COMMA);
				this.state = 1093;
				this.error_message();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1096;
			this.match(SQLiteParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public literal_value(): Literal_valueContext {
		let localctx: Literal_valueContext = new Literal_valueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, SQLiteParser.RULE_literal_value);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1098;
			_la = this._input.LA(1);
			if(!(((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & 7) !== 0) || _la===104 || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 212995) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public value_row(): Value_rowContext {
		let localctx: Value_rowContext = new Value_rowContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, SQLiteParser.RULE_value_row);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1100;
			this.match(SQLiteParser.OPEN_PAR);
			this.state = 1101;
			this.expr(0);
			this.state = 1106;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5) {
				{
				{
				this.state = 1102;
				this.match(SQLiteParser.COMMA);
				this.state = 1103;
				this.expr(0);
				}
				}
				this.state = 1108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1109;
			this.match(SQLiteParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public values_clause(): Values_clauseContext {
		let localctx: Values_clauseContext = new Values_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, SQLiteParser.RULE_values_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1111;
			this.match(SQLiteParser.VALUES_);
			this.state = 1112;
			this.value_row();
			this.state = 1117;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5) {
				{
				{
				this.state = 1113;
				this.match(SQLiteParser.COMMA);
				this.state = 1114;
				this.value_row();
				}
				}
				this.state = 1119;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public insert_stmt(): Insert_stmtContext {
		let localctx: Insert_stmtContext = new Insert_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, SQLiteParser.RULE_insert_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===149) {
				{
				this.state = 1120;
				this.with_clause();
				}
			}

			this.state = 1128;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 142, this._ctx) ) {
			case 1:
				{
				this.state = 1123;
				this.match(SQLiteParser.INSERT_);
				}
				break;
			case 2:
				{
				this.state = 1124;
				this.match(SQLiteParser.REPLACE_);
				}
				break;
			case 3:
				{
				this.state = 1125;
				this.match(SQLiteParser.INSERT_);
				this.state = 1126;
				this.match(SQLiteParser.OR_);
				this.state = 1127;
				_la = this._input.LA(1);
				if(!(_la===25 || _la===72 || _la===81 || _la===122 || _la===126)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			}
			this.state = 1130;
			this.match(SQLiteParser.INTO_);
			this.state = 1134;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 143, this._ctx) ) {
			case 1:
				{
				this.state = 1131;
				this.schema_name();
				this.state = 1132;
				this.match(SQLiteParser.DOT);
				}
				break;
			}
			this.state = 1136;
			this.table_name();
			this.state = 1139;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===33) {
				{
				this.state = 1137;
				this.match(SQLiteParser.AS_);
				this.state = 1138;
				this.table_alias();
				}
			}

			this.state = 1152;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===3) {
				{
				this.state = 1141;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1142;
				this.column_name();
				this.state = 1147;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===5) {
					{
					{
					this.state = 1143;
					this.match(SQLiteParser.COMMA);
					this.state = 1144;
					this.column_name();
					}
					}
					this.state = 1149;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1150;
				this.match(SQLiteParser.CLOSE_PAR);
				}
			}

			this.state = 1163;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 130:
			case 144:
			case 149:
				{
				{
				this.state = 1156;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 147, this._ctx) ) {
				case 1:
					{
					this.state = 1154;
					this.values_clause();
					}
					break;
				case 2:
					{
					this.state = 1155;
					this.select_stmt();
					}
					break;
				}
				this.state = 1159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===107) {
					{
					this.state = 1158;
					this.upsert_clause();
					}
				}

				}
				}
				break;
			case 56:
				{
				this.state = 1161;
				this.match(SQLiteParser.DEFAULT_);
				this.state = 1162;
				this.match(SQLiteParser.VALUES_);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1166;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===124) {
				{
				this.state = 1165;
				this.returning_clause();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public returning_clause(): Returning_clauseContext {
		let localctx: Returning_clauseContext = new Returning_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, SQLiteParser.RULE_returning_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1168;
			this.match(SQLiteParser.RETURNING_);
			this.state = 1169;
			this.result_column();
			this.state = 1174;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5) {
				{
				{
				this.state = 1170;
				this.match(SQLiteParser.COMMA);
				this.state = 1171;
				this.result_column();
				}
				}
				this.state = 1176;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public upsert_clause(): Upsert_clauseContext {
		let localctx: Upsert_clauseContext = new Upsert_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, SQLiteParser.RULE_upsert_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1177;
			this.match(SQLiteParser.ON_);
			this.state = 1178;
			this.match(SQLiteParser.CONFLICT_);
			this.state = 1193;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===3) {
				{
				this.state = 1179;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1180;
				this.indexed_column();
				this.state = 1185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===5) {
					{
					{
					this.state = 1181;
					this.match(SQLiteParser.COMMA);
					this.state = 1182;
					this.indexed_column();
					}
					}
					this.state = 1187;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1188;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 1191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===148) {
					{
					this.state = 1189;
					this.match(SQLiteParser.WHERE_);
					this.state = 1190;
					this.expr(0);
					}
				}

				}
			}

			this.state = 1195;
			this.match(SQLiteParser.DO_);
			this.state = 1222;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 184:
				{
				this.state = 1196;
				this.match(SQLiteParser.NOTHING_);
				}
				break;
			case 141:
				{
				this.state = 1197;
				this.match(SQLiteParser.UPDATE_);
				this.state = 1198;
				this.match(SQLiteParser.SET_);
				{
				this.state = 1201;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 155, this._ctx) ) {
				case 1:
					{
					this.state = 1199;
					this.column_name();
					}
					break;
				case 2:
					{
					this.state = 1200;
					this.column_name_list();
					}
					break;
				}
				this.state = 1203;
				this.match(SQLiteParser.ASSIGN);
				this.state = 1204;
				this.expr(0);
				this.state = 1215;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===5) {
					{
					{
					this.state = 1205;
					this.match(SQLiteParser.COMMA);
					this.state = 1208;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 156, this._ctx) ) {
					case 1:
						{
						this.state = 1206;
						this.column_name();
						}
						break;
					case 2:
						{
						this.state = 1207;
						this.column_name_list();
						}
						break;
					}
					this.state = 1210;
					this.match(SQLiteParser.ASSIGN);
					this.state = 1211;
					this.expr(0);
					}
					}
					this.state = 1217;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1220;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===148) {
					{
					this.state = 1218;
					this.match(SQLiteParser.WHERE_);
					this.state = 1219;
					this.expr(0);
					}
				}

				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pragma_stmt(): Pragma_stmtContext {
		let localctx: Pragma_stmtContext = new Pragma_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, SQLiteParser.RULE_pragma_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1224;
			this.match(SQLiteParser.PRAGMA_);
			this.state = 1228;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 160, this._ctx) ) {
			case 1:
				{
				this.state = 1225;
				this.schema_name();
				this.state = 1226;
				this.match(SQLiteParser.DOT);
				}
				break;
			}
			this.state = 1230;
			this.pragma_name();
			this.state = 1237;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 6:
				{
				this.state = 1231;
				this.match(SQLiteParser.ASSIGN);
				this.state = 1232;
				this.pragma_value();
				}
				break;
			case 3:
				{
				this.state = 1233;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1234;
				this.pragma_value();
				this.state = 1235;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			case -1:
			case 1:
			case 30:
			case 31:
			case 35:
			case 38:
			case 47:
			case 50:
			case 59:
			case 61:
			case 63:
			case 66:
			case 71:
			case 88:
			case 112:
			case 119:
			case 120:
			case 122:
			case 126:
			case 129:
			case 130:
			case 141:
			case 143:
			case 144:
			case 149:
				break;
			default:
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pragma_value(): Pragma_valueContext {
		let localctx: Pragma_valueContext = new Pragma_valueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, SQLiteParser.RULE_pragma_value);
		try {
			this.state = 1242;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 162, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1239;
				this.signed_number();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1240;
				this.name();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1241;
				this.match(SQLiteParser.STRING_LITERAL);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public reindex_stmt(): Reindex_stmtContext {
		let localctx: Reindex_stmtContext = new Reindex_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, SQLiteParser.RULE_reindex_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1244;
			this.match(SQLiteParser.REINDEX_);
			this.state = 1255;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 165, this._ctx) ) {
			case 1:
				{
				this.state = 1245;
				this.collation_name();
				}
				break;
			case 2:
				{
				this.state = 1249;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 163, this._ctx) ) {
				case 1:
					{
					this.state = 1246;
					this.schema_name();
					this.state = 1247;
					this.match(SQLiteParser.DOT);
					}
					break;
				}
				this.state = 1253;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 164, this._ctx) ) {
				case 1:
					{
					this.state = 1251;
					this.table_name();
					}
					break;
				case 2:
					{
					this.state = 1252;
					this.index_name();
					}
					break;
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public select_stmt(): Select_stmtContext {
		let localctx: Select_stmtContext = new Select_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, SQLiteParser.RULE_select_stmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1258;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===149) {
				{
				this.state = 1257;
				this.common_table_stmt();
				}
			}

			this.state = 1260;
			this.select_core();
			this.state = 1266;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 167, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1261;
					this.compound_operator();
					this.state = 1262;
					this.select_core();
					}
					}
				}
				this.state = 1268;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 167, this._ctx);
			}
			this.state = 1270;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===109) {
				{
				this.state = 1269;
				this.order_by_stmt();
				}
			}

			this.state = 1273;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===98) {
				{
				this.state = 1272;
				this.limit_stmt();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public join_clause(): Join_clauseContext {
		let localctx: Join_clauseContext = new Join_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, SQLiteParser.RULE_join_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1275;
			this.table_or_subquery();
			this.state = 1283;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5 || _la===51 || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & 8833) !== 0)) {
				{
				{
				this.state = 1276;
				this.join_operator();
				this.state = 1277;
				this.table_or_subquery();
				this.state = 1279;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 170, this._ctx) ) {
				case 1:
					{
					this.state = 1278;
					this.join_constraint();
					}
					break;
				}
				}
				}
				this.state = 1285;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public select_core(): Select_coreContext {
		let localctx: Select_coreContext = new Select_coreContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, SQLiteParser.RULE_select_core);
		let _la: number;
		try {
			this.state = 1349;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 130:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 1286;
				this.match(SQLiteParser.SELECT_);
				this.state = 1288;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 172, this._ctx) ) {
				case 1:
					{
					this.state = 1287;
					_la = this._input.LA(1);
					if(!(_la===29 || _la===62)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					break;
				}
				this.state = 1290;
				this.result_column();
				this.state = 1295;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===5) {
					{
					{
					this.state = 1291;
					this.match(SQLiteParser.COMMA);
					this.state = 1292;
					this.result_column();
					}
					}
					this.state = 1297;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1310;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===75) {
					{
					this.state = 1298;
					this.match(SQLiteParser.FROM_);
					this.state = 1308;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 175, this._ctx) ) {
					case 1:
						{
						this.state = 1299;
						this.table_or_subquery();
						this.state = 1304;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la===5) {
							{
							{
							this.state = 1300;
							this.match(SQLiteParser.COMMA);
							this.state = 1301;
							this.table_or_subquery();
							}
							}
							this.state = 1306;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						}
						break;
					case 2:
						{
						this.state = 1307;
						this.join_clause();
						}
						break;
					}
					}
				}

				this.state = 1314;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===148) {
					{
					this.state = 1312;
					this.match(SQLiteParser.WHERE_);
					this.state = 1313;
					localctx._whereExpr = this.expr(0);
					}
				}

				this.state = 1330;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===78) {
					{
					this.state = 1316;
					this.match(SQLiteParser.GROUP_);
					this.state = 1317;
					this.match(SQLiteParser.BY_);
					this.state = 1318;
					localctx._expr = this.expr(0);
					localctx._groupByExpr.push(localctx._expr);
					this.state = 1323;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===5) {
						{
						{
						this.state = 1319;
						this.match(SQLiteParser.COMMA);
						this.state = 1320;
						localctx._expr = this.expr(0);
						localctx._groupByExpr.push(localctx._expr);
						}
						}
						this.state = 1325;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1328;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===79) {
						{
						this.state = 1326;
						this.match(SQLiteParser.HAVING_);
						this.state = 1327;
						localctx._havingExpr = this.expr(0);
						}
					}

					}
				}

				this.state = 1346;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===174) {
					{
					this.state = 1332;
					this.match(SQLiteParser.WINDOW_);
					this.state = 1333;
					this.window_name();
					this.state = 1334;
					this.match(SQLiteParser.AS_);
					this.state = 1335;
					this.window_defn();
					this.state = 1343;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===5) {
						{
						{
						this.state = 1336;
						this.match(SQLiteParser.COMMA);
						this.state = 1337;
						this.window_name();
						this.state = 1338;
						this.match(SQLiteParser.AS_);
						this.state = 1339;
						this.window_defn();
						}
						}
						this.state = 1345;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				}
				}
				break;
			case 144:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1348;
				this.values_clause();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public factored_select_stmt(): Factored_select_stmtContext {
		let localctx: Factored_select_stmtContext = new Factored_select_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, SQLiteParser.RULE_factored_select_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1351;
			this.select_stmt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public simple_select_stmt(): Simple_select_stmtContext {
		let localctx: Simple_select_stmtContext = new Simple_select_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, SQLiteParser.RULE_simple_select_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1354;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===149) {
				{
				this.state = 1353;
				this.common_table_stmt();
				}
			}

			this.state = 1356;
			this.select_core();
			this.state = 1358;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===109) {
				{
				this.state = 1357;
				this.order_by_stmt();
				}
			}

			this.state = 1361;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===98) {
				{
				this.state = 1360;
				this.limit_stmt();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public compound_select_stmt(): Compound_select_stmtContext {
		let localctx: Compound_select_stmtContext = new Compound_select_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, SQLiteParser.RULE_compound_select_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1364;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===149) {
				{
				this.state = 1363;
				this.common_table_stmt();
				}
			}

			this.state = 1366;
			this.select_core();
			this.state = 1376;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1373;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 139:
					{
					this.state = 1367;
					this.match(SQLiteParser.UNION_);
					this.state = 1369;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===29) {
						{
						this.state = 1368;
						this.match(SQLiteParser.ALL_);
						}
					}

					}
					break;
				case 90:
					{
					this.state = 1371;
					this.match(SQLiteParser.INTERSECT_);
					}
					break;
				case 68:
					{
					this.state = 1372;
					this.match(SQLiteParser.EXCEPT_);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1375;
				this.select_core();
				}
				}
				this.state = 1378;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===68 || _la===90 || _la===139);
			this.state = 1381;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===109) {
				{
				this.state = 1380;
				this.order_by_stmt();
				}
			}

			this.state = 1384;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===98) {
				{
				this.state = 1383;
				this.limit_stmt();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public table_or_subquery(): Table_or_subqueryContext {
		let localctx: Table_or_subqueryContext = new Table_or_subqueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, SQLiteParser.RULE_table_or_subquery);
		let _la: number;
		try {
			this.state = 1450;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 205, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 1389;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 193, this._ctx) ) {
				case 1:
					{
					this.state = 1386;
					this.schema_name();
					this.state = 1387;
					this.match(SQLiteParser.DOT);
					}
					break;
				}
				this.state = 1391;
				this.table_name();
				this.state = 1396;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 195, this._ctx) ) {
				case 1:
					{
					this.state = 1393;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 194, this._ctx) ) {
					case 1:
						{
						this.state = 1392;
						this.match(SQLiteParser.AS_);
						}
						break;
					}
					this.state = 1395;
					this.table_alias();
					}
					break;
				}
				this.state = 1403;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 85:
					{
					this.state = 1398;
					this.match(SQLiteParser.INDEXED_);
					this.state = 1399;
					this.match(SQLiteParser.BY_);
					this.state = 1400;
					this.index_name();
					}
					break;
				case 102:
					{
					this.state = 1401;
					this.match(SQLiteParser.NOT_);
					this.state = 1402;
					this.match(SQLiteParser.INDEXED_);
					}
					break;
				case -1:
				case 1:
				case 4:
				case 5:
				case 30:
				case 31:
				case 35:
				case 38:
				case 47:
				case 50:
				case 51:
				case 59:
				case 61:
				case 63:
				case 66:
				case 68:
				case 71:
				case 78:
				case 87:
				case 88:
				case 90:
				case 94:
				case 96:
				case 98:
				case 100:
				case 107:
				case 109:
				case 112:
				case 119:
				case 120:
				case 122:
				case 124:
				case 126:
				case 129:
				case 130:
				case 139:
				case 141:
				case 142:
				case 143:
				case 144:
				case 148:
				case 149:
				case 174:
					break;
				default:
					break;
				}
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1408;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 197, this._ctx) ) {
				case 1:
					{
					this.state = 1405;
					this.schema_name();
					this.state = 1406;
					this.match(SQLiteParser.DOT);
					}
					break;
				}
				this.state = 1410;
				this.table_function_name();
				this.state = 1411;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1412;
				this.expr(0);
				this.state = 1417;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===5) {
					{
					{
					this.state = 1413;
					this.match(SQLiteParser.COMMA);
					this.state = 1414;
					this.expr(0);
					}
					}
					this.state = 1419;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1420;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 1425;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 200, this._ctx) ) {
				case 1:
					{
					this.state = 1422;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 199, this._ctx) ) {
					case 1:
						{
						this.state = 1421;
						this.match(SQLiteParser.AS_);
						}
						break;
					}
					this.state = 1424;
					this.table_alias();
					}
					break;
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1427;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1437;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 202, this._ctx) ) {
				case 1:
					{
					this.state = 1428;
					this.table_or_subquery();
					this.state = 1433;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===5) {
						{
						{
						this.state = 1429;
						this.match(SQLiteParser.COMMA);
						this.state = 1430;
						this.table_or_subquery();
						}
						}
						this.state = 1435;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				case 2:
					{
					this.state = 1436;
					this.join_clause();
					}
					break;
				}
				this.state = 1439;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1441;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1442;
				this.select_stmt();
				this.state = 1443;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 1448;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 204, this._ctx) ) {
				case 1:
					{
					this.state = 1445;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 203, this._ctx) ) {
					case 1:
						{
						this.state = 1444;
						this.match(SQLiteParser.AS_);
						}
						break;
					}
					this.state = 1447;
					this.table_alias();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public result_column(): Result_columnContext {
		let localctx: Result_columnContext = new Result_columnContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, SQLiteParser.RULE_result_column);
		let _la: number;
		try {
			this.state = 1464;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 208, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1452;
				this.match(SQLiteParser.STAR);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1453;
				this.table_name();
				this.state = 1454;
				this.match(SQLiteParser.DOT);
				this.state = 1455;
				this.match(SQLiteParser.STAR);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1457;
				this.expr(0);
				this.state = 1462;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===33 || _la===185 || _la===188) {
					{
					this.state = 1459;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===33) {
						{
						this.state = 1458;
						this.match(SQLiteParser.AS_);
						}
					}

					this.state = 1461;
					this.column_alias();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public join_operator(): Join_operatorContext {
		let localctx: Join_operatorContext = new Join_operatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, SQLiteParser.RULE_join_operator);
		let _la: number;
		try {
			this.state = 1479;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1466;
				this.match(SQLiteParser.COMMA);
				}
				break;
			case 51:
			case 87:
			case 94:
			case 96:
			case 100:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1468;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===100) {
					{
					this.state = 1467;
					this.match(SQLiteParser.NATURAL_);
					}
				}

				this.state = 1476;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 96:
					{
					this.state = 1470;
					this.match(SQLiteParser.LEFT_);
					this.state = 1472;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===110) {
						{
						this.state = 1471;
						this.match(SQLiteParser.OUTER_);
						}
					}

					}
					break;
				case 87:
					{
					this.state = 1474;
					this.match(SQLiteParser.INNER_);
					}
					break;
				case 51:
					{
					this.state = 1475;
					this.match(SQLiteParser.CROSS_);
					}
					break;
				case 94:
					break;
				default:
					break;
				}
				this.state = 1478;
				this.match(SQLiteParser.JOIN_);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public join_constraint(): Join_constraintContext {
		let localctx: Join_constraintContext = new Join_constraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, SQLiteParser.RULE_join_constraint);
		let _la: number;
		try {
			this.state = 1495;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 107:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1481;
				this.match(SQLiteParser.ON_);
				this.state = 1482;
				this.expr(0);
				}
				break;
			case 142:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1483;
				this.match(SQLiteParser.USING_);
				this.state = 1484;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1485;
				this.column_name();
				this.state = 1490;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===5) {
					{
					{
					this.state = 1486;
					this.match(SQLiteParser.COMMA);
					this.state = 1487;
					this.column_name();
					}
					}
					this.state = 1492;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1493;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public compound_operator(): Compound_operatorContext {
		let localctx: Compound_operatorContext = new Compound_operatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, SQLiteParser.RULE_compound_operator);
		let _la: number;
		try {
			this.state = 1503;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 139:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1497;
				this.match(SQLiteParser.UNION_);
				this.state = 1499;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===29) {
					{
					this.state = 1498;
					this.match(SQLiteParser.ALL_);
					}
				}

				}
				break;
			case 90:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1501;
				this.match(SQLiteParser.INTERSECT_);
				}
				break;
			case 68:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1502;
				this.match(SQLiteParser.EXCEPT_);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public update_stmt(): Update_stmtContext {
		let localctx: Update_stmtContext = new Update_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, SQLiteParser.RULE_update_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1506;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===149) {
				{
				this.state = 1505;
				this.with_clause();
				}
			}

			this.state = 1508;
			this.match(SQLiteParser.UPDATE_);
			this.state = 1511;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 218, this._ctx) ) {
			case 1:
				{
				this.state = 1509;
				this.match(SQLiteParser.OR_);
				this.state = 1510;
				_la = this._input.LA(1);
				if(!(_la===25 || _la===72 || _la===81 || _la===122 || _la===126)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			}
			this.state = 1513;
			this.qualified_table_name();
			this.state = 1514;
			this.match(SQLiteParser.SET_);
			this.state = 1517;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 219, this._ctx) ) {
			case 1:
				{
				this.state = 1515;
				this.column_name();
				}
				break;
			case 2:
				{
				this.state = 1516;
				this.column_name_list();
				}
				break;
			}
			this.state = 1519;
			this.match(SQLiteParser.ASSIGN);
			this.state = 1520;
			this.expr(0);
			this.state = 1531;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5) {
				{
				{
				this.state = 1521;
				this.match(SQLiteParser.COMMA);
				this.state = 1524;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 220, this._ctx) ) {
				case 1:
					{
					this.state = 1522;
					this.column_name();
					}
					break;
				case 2:
					{
					this.state = 1523;
					this.column_name_list();
					}
					break;
				}
				this.state = 1526;
				this.match(SQLiteParser.ASSIGN);
				this.state = 1527;
				this.expr(0);
				}
				}
				this.state = 1533;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1546;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===75) {
				{
				this.state = 1534;
				this.match(SQLiteParser.FROM_);
				this.state = 1544;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 223, this._ctx) ) {
				case 1:
					{
					this.state = 1535;
					this.table_or_subquery();
					this.state = 1540;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===5) {
						{
						{
						this.state = 1536;
						this.match(SQLiteParser.COMMA);
						this.state = 1537;
						this.table_or_subquery();
						}
						}
						this.state = 1542;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				case 2:
					{
					this.state = 1543;
					this.join_clause();
					}
					break;
				}
				}
			}

			this.state = 1550;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===148) {
				{
				this.state = 1548;
				this.match(SQLiteParser.WHERE_);
				this.state = 1549;
				this.expr(0);
				}
			}

			this.state = 1553;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===124) {
				{
				this.state = 1552;
				this.returning_clause();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public column_name_list(): Column_name_listContext {
		let localctx: Column_name_listContext = new Column_name_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, SQLiteParser.RULE_column_name_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1555;
			this.match(SQLiteParser.OPEN_PAR);
			this.state = 1556;
			this.column_name();
			this.state = 1561;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5) {
				{
				{
				this.state = 1557;
				this.match(SQLiteParser.COMMA);
				this.state = 1558;
				this.column_name();
				}
				}
				this.state = 1563;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1564;
			this.match(SQLiteParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public update_stmt_limited(): Update_stmt_limitedContext {
		let localctx: Update_stmt_limitedContext = new Update_stmt_limitedContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, SQLiteParser.RULE_update_stmt_limited);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1567;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===149) {
				{
				this.state = 1566;
				this.with_clause();
				}
			}

			this.state = 1569;
			this.match(SQLiteParser.UPDATE_);
			this.state = 1572;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 229, this._ctx) ) {
			case 1:
				{
				this.state = 1570;
				this.match(SQLiteParser.OR_);
				this.state = 1571;
				_la = this._input.LA(1);
				if(!(_la===25 || _la===72 || _la===81 || _la===122 || _la===126)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			}
			this.state = 1574;
			this.qualified_table_name();
			this.state = 1575;
			this.match(SQLiteParser.SET_);
			this.state = 1578;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 230, this._ctx) ) {
			case 1:
				{
				this.state = 1576;
				this.column_name();
				}
				break;
			case 2:
				{
				this.state = 1577;
				this.column_name_list();
				}
				break;
			}
			this.state = 1580;
			this.match(SQLiteParser.ASSIGN);
			this.state = 1581;
			this.expr(0);
			this.state = 1592;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5) {
				{
				{
				this.state = 1582;
				this.match(SQLiteParser.COMMA);
				this.state = 1585;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 231, this._ctx) ) {
				case 1:
					{
					this.state = 1583;
					this.column_name();
					}
					break;
				case 2:
					{
					this.state = 1584;
					this.column_name_list();
					}
					break;
				}
				this.state = 1587;
				this.match(SQLiteParser.ASSIGN);
				this.state = 1588;
				this.expr(0);
				}
				}
				this.state = 1594;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1597;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===148) {
				{
				this.state = 1595;
				this.match(SQLiteParser.WHERE_);
				this.state = 1596;
				this.expr(0);
				}
			}

			this.state = 1600;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===124) {
				{
				this.state = 1599;
				this.returning_clause();
				}
			}

			this.state = 1606;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===98 || _la===109) {
				{
				this.state = 1603;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===109) {
					{
					this.state = 1602;
					this.order_by_stmt();
					}
				}

				this.state = 1605;
				this.limit_stmt();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public qualified_table_name(): Qualified_table_nameContext {
		let localctx: Qualified_table_nameContext = new Qualified_table_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, SQLiteParser.RULE_qualified_table_name);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1611;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 237, this._ctx) ) {
			case 1:
				{
				this.state = 1608;
				this.schema_name();
				this.state = 1609;
				this.match(SQLiteParser.DOT);
				}
				break;
			}
			this.state = 1613;
			this.table_name();
			this.state = 1616;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===33) {
				{
				this.state = 1614;
				this.match(SQLiteParser.AS_);
				this.state = 1615;
				this.alias();
				}
			}

			this.state = 1623;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 85:
				{
				this.state = 1618;
				this.match(SQLiteParser.INDEXED_);
				this.state = 1619;
				this.match(SQLiteParser.BY_);
				this.state = 1620;
				this.index_name();
				}
				break;
			case 102:
				{
				this.state = 1621;
				this.match(SQLiteParser.NOT_);
				this.state = 1622;
				this.match(SQLiteParser.INDEXED_);
				}
				break;
			case -1:
			case 1:
			case 30:
			case 31:
			case 35:
			case 38:
			case 47:
			case 50:
			case 59:
			case 61:
			case 63:
			case 66:
			case 71:
			case 88:
			case 98:
			case 109:
			case 112:
			case 119:
			case 120:
			case 122:
			case 124:
			case 126:
			case 129:
			case 130:
			case 131:
			case 141:
			case 143:
			case 144:
			case 148:
			case 149:
				break;
			default:
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public vacuum_stmt(): Vacuum_stmtContext {
		let localctx: Vacuum_stmtContext = new Vacuum_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, SQLiteParser.RULE_vacuum_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1625;
			this.match(SQLiteParser.VACUUM_);
			this.state = 1627;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 240, this._ctx) ) {
			case 1:
				{
				this.state = 1626;
				this.schema_name();
				}
				break;
			}
			this.state = 1631;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===91) {
				{
				this.state = 1629;
				this.match(SQLiteParser.INTO_);
				this.state = 1630;
				this.filename();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public filter_clause(): Filter_clauseContext {
		let localctx: Filter_clauseContext = new Filter_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, SQLiteParser.RULE_filter_clause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1633;
			this.match(SQLiteParser.FILTER_);
			this.state = 1634;
			this.match(SQLiteParser.OPEN_PAR);
			this.state = 1635;
			this.match(SQLiteParser.WHERE_);
			this.state = 1636;
			this.expr(0);
			this.state = 1637;
			this.match(SQLiteParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public window_defn(): Window_defnContext {
		let localctx: Window_defnContext = new Window_defnContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, SQLiteParser.RULE_window_defn);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1639;
			this.match(SQLiteParser.OPEN_PAR);
			this.state = 1641;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 242, this._ctx) ) {
			case 1:
				{
				this.state = 1640;
				this.base_window_name();
				}
				break;
			}
			this.state = 1653;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===153) {
				{
				this.state = 1643;
				this.match(SQLiteParser.PARTITION_);
				this.state = 1644;
				this.match(SQLiteParser.BY_);
				this.state = 1645;
				this.expr(0);
				this.state = 1650;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===5) {
					{
					{
					this.state = 1646;
					this.match(SQLiteParser.COMMA);
					this.state = 1647;
					this.expr(0);
					}
					}
					this.state = 1652;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			{
			this.state = 1655;
			this.match(SQLiteParser.ORDER_);
			this.state = 1656;
			this.match(SQLiteParser.BY_);
			this.state = 1657;
			this.ordering_term();
			this.state = 1662;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5) {
				{
				{
				this.state = 1658;
				this.match(SQLiteParser.COMMA);
				this.state = 1659;
				this.ordering_term();
				}
				}
				this.state = 1664;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			this.state = 1666;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===128 || _la===154 || _la===179) {
				{
				this.state = 1665;
				this.frame_spec();
				}
			}

			this.state = 1668;
			this.match(SQLiteParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public over_clause(): Over_clauseContext {
		let localctx: Over_clauseContext = new Over_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, SQLiteParser.RULE_over_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1670;
			this.match(SQLiteParser.OVER_);
			this.state = 1704;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 253, this._ctx) ) {
			case 1:
				{
				this.state = 1671;
				this.window_name();
				}
				break;
			case 2:
				{
				this.state = 1672;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1674;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 247, this._ctx) ) {
				case 1:
					{
					this.state = 1673;
					this.base_window_name();
					}
					break;
				}
				this.state = 1686;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===153) {
					{
					this.state = 1676;
					this.match(SQLiteParser.PARTITION_);
					this.state = 1677;
					this.match(SQLiteParser.BY_);
					this.state = 1678;
					this.expr(0);
					this.state = 1683;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===5) {
						{
						{
						this.state = 1679;
						this.match(SQLiteParser.COMMA);
						this.state = 1680;
						this.expr(0);
						}
						}
						this.state = 1685;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1698;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===109) {
					{
					this.state = 1688;
					this.match(SQLiteParser.ORDER_);
					this.state = 1689;
					this.match(SQLiteParser.BY_);
					this.state = 1690;
					this.ordering_term();
					this.state = 1695;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===5) {
						{
						{
						this.state = 1691;
						this.match(SQLiteParser.COMMA);
						this.state = 1692;
						this.ordering_term();
						}
						}
						this.state = 1697;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1701;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===128 || _la===154 || _la===179) {
					{
					this.state = 1700;
					this.frame_spec();
					}
				}

				this.state = 1703;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public frame_spec(): Frame_specContext {
		let localctx: Frame_specContext = new Frame_specContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, SQLiteParser.RULE_frame_spec);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1706;
			this.frame_clause();
			this.state = 1716;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===180) {
				{
				this.state = 1707;
				this.match(SQLiteParser.EXCLUDE_);
				this.state = 1714;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 101:
					{
					this.state = 1708;
					this.match(SQLiteParser.NO_);
					this.state = 1709;
					this.match(SQLiteParser.OTHERS_);
					}
					break;
				case 157:
					{
					this.state = 1710;
					this.match(SQLiteParser.CURRENT_);
					this.state = 1711;
					this.match(SQLiteParser.ROW_);
					}
					break;
				case 78:
					{
					this.state = 1712;
					this.match(SQLiteParser.GROUP_);
					}
					break;
				case 181:
					{
					this.state = 1713;
					this.match(SQLiteParser.TIES_);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public frame_clause(): Frame_clauseContext {
		let localctx: Frame_clauseContext = new Frame_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, SQLiteParser.RULE_frame_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1718;
			_la = this._input.LA(1);
			if(!(_la===128 || _la===154 || _la===179)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1725;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 256, this._ctx) ) {
			case 1:
				{
				this.state = 1719;
				this.frame_single();
				}
				break;
			case 2:
				{
				this.state = 1720;
				this.match(SQLiteParser.BETWEEN_);
				this.state = 1721;
				this.frame_left();
				this.state = 1722;
				this.match(SQLiteParser.AND_);
				this.state = 1723;
				this.frame_right();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public simple_function_invocation(): Simple_function_invocationContext {
		let localctx: Simple_function_invocationContext = new Simple_function_invocationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, SQLiteParser.RULE_simple_function_invocation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1727;
			this.simple_func();
			this.state = 1728;
			this.match(SQLiteParser.OPEN_PAR);
			this.state = 1738;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
			case 8:
			case 9:
			case 10:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 40:
			case 41:
			case 42:
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 122:
			case 123:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 137:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 151:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 158:
			case 159:
			case 160:
			case 161:
			case 162:
			case 163:
			case 164:
			case 165:
			case 166:
			case 167:
			case 168:
			case 169:
			case 170:
			case 171:
			case 172:
			case 173:
			case 174:
			case 175:
			case 176:
			case 177:
			case 178:
			case 179:
			case 180:
			case 185:
			case 186:
			case 187:
			case 188:
			case 189:
				{
				this.state = 1729;
				this.expr(0);
				this.state = 1734;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===5) {
					{
					{
					this.state = 1730;
					this.match(SQLiteParser.COMMA);
					this.state = 1731;
					this.expr(0);
					}
					}
					this.state = 1736;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 7:
				{
				this.state = 1737;
				this.match(SQLiteParser.STAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1740;
			this.match(SQLiteParser.CLOSE_PAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public aggregate_function_invocation(): Aggregate_function_invocationContext {
		let localctx: Aggregate_function_invocationContext = new Aggregate_function_invocationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, SQLiteParser.RULE_aggregate_function_invocation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1742;
			this.aggregate_func();
			this.state = 1743;
			this.match(SQLiteParser.OPEN_PAR);
			this.state = 1756;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
			case 8:
			case 9:
			case 10:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 40:
			case 41:
			case 42:
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 122:
			case 123:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 137:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 151:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 158:
			case 159:
			case 160:
			case 161:
			case 162:
			case 163:
			case 164:
			case 165:
			case 166:
			case 167:
			case 168:
			case 169:
			case 170:
			case 171:
			case 172:
			case 173:
			case 174:
			case 175:
			case 176:
			case 177:
			case 178:
			case 179:
			case 180:
			case 185:
			case 186:
			case 187:
			case 188:
			case 189:
				{
				this.state = 1745;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 259, this._ctx) ) {
				case 1:
					{
					this.state = 1744;
					this.match(SQLiteParser.DISTINCT_);
					}
					break;
				}
				this.state = 1747;
				this.expr(0);
				this.state = 1752;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===5) {
					{
					{
					this.state = 1748;
					this.match(SQLiteParser.COMMA);
					this.state = 1749;
					this.expr(0);
					}
					}
					this.state = 1754;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 7:
				{
				this.state = 1755;
				this.match(SQLiteParser.STAR);
				}
				break;
			case 4:
				break;
			default:
				break;
			}
			this.state = 1758;
			this.match(SQLiteParser.CLOSE_PAR);
			this.state = 1760;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===178) {
				{
				this.state = 1759;
				this.filter_clause();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public window_function_invocation(): Window_function_invocationContext {
		let localctx: Window_function_invocationContext = new Window_function_invocationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, SQLiteParser.RULE_window_function_invocation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1762;
			this.window_function();
			this.state = 1763;
			this.match(SQLiteParser.OPEN_PAR);
			this.state = 1773;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
			case 8:
			case 9:
			case 10:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 40:
			case 41:
			case 42:
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 122:
			case 123:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 137:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 151:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 158:
			case 159:
			case 160:
			case 161:
			case 162:
			case 163:
			case 164:
			case 165:
			case 166:
			case 167:
			case 168:
			case 169:
			case 170:
			case 171:
			case 172:
			case 173:
			case 174:
			case 175:
			case 176:
			case 177:
			case 178:
			case 179:
			case 180:
			case 185:
			case 186:
			case 187:
			case 188:
			case 189:
				{
				this.state = 1764;
				this.expr(0);
				this.state = 1769;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===5) {
					{
					{
					this.state = 1765;
					this.match(SQLiteParser.COMMA);
					this.state = 1766;
					this.expr(0);
					}
					}
					this.state = 1771;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 7:
				{
				this.state = 1772;
				this.match(SQLiteParser.STAR);
				}
				break;
			case 4:
				break;
			default:
				break;
			}
			this.state = 1775;
			this.match(SQLiteParser.CLOSE_PAR);
			this.state = 1777;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===178) {
				{
				this.state = 1776;
				this.filter_clause();
				}
			}

			this.state = 1779;
			this.match(SQLiteParser.OVER_);
			this.state = 1782;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 266, this._ctx) ) {
			case 1:
				{
				this.state = 1780;
				this.window_defn();
				}
				break;
			case 2:
				{
				this.state = 1781;
				this.window_name();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public common_table_stmt(): Common_table_stmtContext {
		let localctx: Common_table_stmtContext = new Common_table_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, SQLiteParser.RULE_common_table_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1784;
			this.match(SQLiteParser.WITH_);
			this.state = 1786;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 267, this._ctx) ) {
			case 1:
				{
				this.state = 1785;
				this.match(SQLiteParser.RECURSIVE_);
				}
				break;
			}
			this.state = 1788;
			this.common_table_expression();
			this.state = 1793;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5) {
				{
				{
				this.state = 1789;
				this.match(SQLiteParser.COMMA);
				this.state = 1790;
				this.common_table_expression();
				}
				}
				this.state = 1795;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public order_by_stmt(): Order_by_stmtContext {
		let localctx: Order_by_stmtContext = new Order_by_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 136, SQLiteParser.RULE_order_by_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1796;
			this.match(SQLiteParser.ORDER_);
			this.state = 1797;
			this.match(SQLiteParser.BY_);
			this.state = 1798;
			this.ordering_term();
			this.state = 1803;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5) {
				{
				{
				this.state = 1799;
				this.match(SQLiteParser.COMMA);
				this.state = 1800;
				this.ordering_term();
				}
				}
				this.state = 1805;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public limit_stmt(): Limit_stmtContext {
		let localctx: Limit_stmtContext = new Limit_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, SQLiteParser.RULE_limit_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1806;
			this.match(SQLiteParser.LIMIT_);
			this.state = 1807;
			this.expr(0);
			this.state = 1810;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===5 || _la===106) {
				{
				this.state = 1808;
				_la = this._input.LA(1);
				if(!(_la===5 || _la===106)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1809;
				this.expr(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ordering_term(): Ordering_termContext {
		let localctx: Ordering_termContext = new Ordering_termContext(this, this._ctx, this.state);
		this.enterRule(localctx, 140, SQLiteParser.RULE_ordering_term);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1812;
			this.expr(0);
			this.state = 1815;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===45) {
				{
				this.state = 1813;
				this.match(SQLiteParser.COLLATE_);
				this.state = 1814;
				this.collation_name();
				}
			}

			this.state = 1818;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===34 || _la===60) {
				{
				this.state = 1817;
				this.asc_desc();
				}
			}

			this.state = 1822;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===175) {
				{
				this.state = 1820;
				this.match(SQLiteParser.NULLS_);
				this.state = 1821;
				_la = this._input.LA(1);
				if(!(_la===176 || _la===177)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public asc_desc(): Asc_descContext {
		let localctx: Asc_descContext = new Asc_descContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, SQLiteParser.RULE_asc_desc);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1824;
			_la = this._input.LA(1);
			if(!(_la===34 || _la===60)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public frame_left(): Frame_leftContext {
		let localctx: Frame_leftContext = new Frame_leftContext(this, this._ctx, this.state);
		this.enterRule(localctx, 144, SQLiteParser.RULE_frame_left);
		try {
			this.state = 1836;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 274, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1826;
				this.expr(0);
				this.state = 1827;
				this.match(SQLiteParser.PRECEDING_);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1829;
				this.expr(0);
				this.state = 1830;
				this.match(SQLiteParser.FOLLOWING_);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1832;
				this.match(SQLiteParser.CURRENT_);
				this.state = 1833;
				this.match(SQLiteParser.ROW_);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1834;
				this.match(SQLiteParser.UNBOUNDED_);
				this.state = 1835;
				this.match(SQLiteParser.PRECEDING_);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public frame_right(): Frame_rightContext {
		let localctx: Frame_rightContext = new Frame_rightContext(this, this._ctx, this.state);
		this.enterRule(localctx, 146, SQLiteParser.RULE_frame_right);
		try {
			this.state = 1848;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 275, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1838;
				this.expr(0);
				this.state = 1839;
				this.match(SQLiteParser.PRECEDING_);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1841;
				this.expr(0);
				this.state = 1842;
				this.match(SQLiteParser.FOLLOWING_);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1844;
				this.match(SQLiteParser.CURRENT_);
				this.state = 1845;
				this.match(SQLiteParser.ROW_);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1846;
				this.match(SQLiteParser.UNBOUNDED_);
				this.state = 1847;
				this.match(SQLiteParser.FOLLOWING_);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public frame_single(): Frame_singleContext {
		let localctx: Frame_singleContext = new Frame_singleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 148, SQLiteParser.RULE_frame_single);
		try {
			this.state = 1857;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 276, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1850;
				this.expr(0);
				this.state = 1851;
				this.match(SQLiteParser.PRECEDING_);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1853;
				this.match(SQLiteParser.UNBOUNDED_);
				this.state = 1854;
				this.match(SQLiteParser.PRECEDING_);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1855;
				this.match(SQLiteParser.CURRENT_);
				this.state = 1856;
				this.match(SQLiteParser.ROW_);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public window_function(): Window_functionContext {
		let localctx: Window_functionContext = new Window_functionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 150, SQLiteParser.RULE_window_function);
		let _la: number;
		try {
			this.state = 1944;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 151:
			case 162:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1859;
				_la = this._input.LA(1);
				if(!(_la===151 || _la===162)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1860;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1861;
				this.expr(0);
				this.state = 1862;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 1863;
				this.match(SQLiteParser.OVER_);
				this.state = 1864;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1866;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===153) {
					{
					this.state = 1865;
					this.partition_by();
					}
				}

				this.state = 1868;
				this.order_by_expr_asc_desc();
				this.state = 1870;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===128 || _la===154 || _la===179) {
					{
					this.state = 1869;
					this.frame_clause();
					}
				}

				this.state = 1872;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			case 159:
			case 166:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1874;
				_la = this._input.LA(1);
				if(!(_la===159 || _la===166)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1875;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1876;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 1877;
				this.match(SQLiteParser.OVER_);
				this.state = 1878;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1880;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===153) {
					{
					this.state = 1879;
					this.partition_by();
					}
				}

				this.state = 1883;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===109) {
					{
					this.state = 1882;
					this.order_by_expr();
					}
				}

				this.state = 1885;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			case 160:
			case 167:
			case 168:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1886;
				_la = this._input.LA(1);
				if(!(((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 385) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1887;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1888;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 1889;
				this.match(SQLiteParser.OVER_);
				this.state = 1890;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1892;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===153) {
					{
					this.state = 1891;
					this.partition_by();
					}
				}

				this.state = 1894;
				this.order_by_expr_asc_desc();
				this.state = 1895;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			case 161:
			case 163:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1897;
				_la = this._input.LA(1);
				if(!(_la===161 || _la===163)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1898;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1899;
				this.expr(0);
				this.state = 1901;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 282, this._ctx) ) {
				case 1:
					{
					this.state = 1900;
					this.offset();
					}
					break;
				}
				this.state = 1904;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===5) {
					{
					this.state = 1903;
					this.default_value();
					}
				}

				this.state = 1906;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 1907;
				this.match(SQLiteParser.OVER_);
				this.state = 1908;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1910;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===153) {
					{
					this.state = 1909;
					this.partition_by();
					}
				}

				this.state = 1912;
				this.order_by_expr_asc_desc();
				this.state = 1913;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			case 164:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1915;
				this.match(SQLiteParser.NTH_VALUE_);
				this.state = 1916;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1917;
				this.expr(0);
				this.state = 1918;
				this.match(SQLiteParser.COMMA);
				this.state = 1919;
				this.signed_number();
				this.state = 1920;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 1921;
				this.match(SQLiteParser.OVER_);
				this.state = 1922;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1924;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===153) {
					{
					this.state = 1923;
					this.partition_by();
					}
				}

				this.state = 1926;
				this.order_by_expr_asc_desc();
				this.state = 1928;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===128 || _la===154 || _la===179) {
					{
					this.state = 1927;
					this.frame_clause();
					}
				}

				this.state = 1930;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			case 165:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1932;
				this.match(SQLiteParser.NTILE_);
				this.state = 1933;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1934;
				this.expr(0);
				this.state = 1935;
				this.match(SQLiteParser.CLOSE_PAR);
				this.state = 1936;
				this.match(SQLiteParser.OVER_);
				this.state = 1937;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 1939;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===153) {
					{
					this.state = 1938;
					this.partition_by();
					}
				}

				this.state = 1941;
				this.order_by_expr_asc_desc();
				this.state = 1942;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public offset(): OffsetContext {
		let localctx: OffsetContext = new OffsetContext(this, this._ctx, this.state);
		this.enterRule(localctx, 152, SQLiteParser.RULE_offset);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1946;
			this.match(SQLiteParser.COMMA);
			this.state = 1947;
			this.signed_number();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public default_value(): Default_valueContext {
		let localctx: Default_valueContext = new Default_valueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 154, SQLiteParser.RULE_default_value);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1949;
			this.match(SQLiteParser.COMMA);
			this.state = 1950;
			this.signed_number();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public partition_by(): Partition_byContext {
		let localctx: Partition_byContext = new Partition_byContext(this, this._ctx, this.state);
		this.enterRule(localctx, 156, SQLiteParser.RULE_partition_by);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1952;
			this.match(SQLiteParser.PARTITION_);
			this.state = 1953;
			this.match(SQLiteParser.BY_);
			this.state = 1955;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1954;
					this.expr(0);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1957;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 289, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public order_by_expr(): Order_by_exprContext {
		let localctx: Order_by_exprContext = new Order_by_exprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 158, SQLiteParser.RULE_order_by_expr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1959;
			this.match(SQLiteParser.ORDER_);
			this.state = 1960;
			this.match(SQLiteParser.BY_);
			this.state = 1962;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1961;
				this.expr(0);
				}
				}
				this.state = 1964;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4261414664) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4026531839) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967295) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 1042284543) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public order_by_expr_asc_desc(): Order_by_expr_asc_descContext {
		let localctx: Order_by_expr_asc_descContext = new Order_by_expr_asc_descContext(this, this._ctx, this.state);
		this.enterRule(localctx, 160, SQLiteParser.RULE_order_by_expr_asc_desc);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1966;
			this.match(SQLiteParser.ORDER_);
			this.state = 1967;
			this.match(SQLiteParser.BY_);
			this.state = 1968;
			this.expr_asc_desc();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expr_asc_desc(): Expr_asc_descContext {
		let localctx: Expr_asc_descContext = new Expr_asc_descContext(this, this._ctx, this.state);
		this.enterRule(localctx, 162, SQLiteParser.RULE_expr_asc_desc);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1970;
			this.expr(0);
			this.state = 1972;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===34 || _la===60) {
				{
				this.state = 1971;
				this.asc_desc();
				}
			}

			this.state = 1981;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5) {
				{
				{
				this.state = 1974;
				this.match(SQLiteParser.COMMA);
				this.state = 1975;
				this.expr(0);
				this.state = 1977;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===34 || _la===60) {
					{
					this.state = 1976;
					this.asc_desc();
					}
				}

				}
				}
				this.state = 1983;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public initial_select(): Initial_selectContext {
		let localctx: Initial_selectContext = new Initial_selectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 164, SQLiteParser.RULE_initial_select);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1984;
			this.select_stmt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public recursive_select(): Recursive_selectContext {
		let localctx: Recursive_selectContext = new Recursive_selectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 166, SQLiteParser.RULE_recursive_select);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1986;
			this.select_stmt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unary_operator(): Unary_operatorContext {
		let localctx: Unary_operatorContext = new Unary_operatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 168, SQLiteParser.RULE_unary_operator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1988;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1792) !== 0) || _la===102)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public error_message(): Error_messageContext {
		let localctx: Error_messageContext = new Error_messageContext(this, this._ctx, this.state);
		this.enterRule(localctx, 170, SQLiteParser.RULE_error_message);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1990;
			this.match(SQLiteParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public module_argument(): Module_argumentContext {
		let localctx: Module_argumentContext = new Module_argumentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 172, SQLiteParser.RULE_module_argument);
		try {
			this.state = 1994;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 294, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1992;
				this.expr(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1993;
				this.column_def();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public column_alias(): Column_aliasContext {
		let localctx: Column_aliasContext = new Column_aliasContext(this, this._ctx, this.state);
		this.enterRule(localctx, 174, SQLiteParser.RULE_column_alias);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1996;
			_la = this._input.LA(1);
			if(!(_la===185 || _la===188)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public keyword(): KeywordContext {
		let localctx: KeywordContext = new KeywordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 176, SQLiteParser.RULE_keyword);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1998;
			_la = this._input.LA(1);
			if(!(((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & 4294967295) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 4294967295) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 4294967295) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & 4294967287) !== 0) || ((((_la - 153)) & ~0x1F) === 0 && ((1 << (_la - 153)) & 268435455) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public name(): NameContext {
		let localctx: NameContext = new NameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 178, SQLiteParser.RULE_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2000;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public function_name(): Function_nameContext {
		let localctx: Function_nameContext = new Function_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 180, SQLiteParser.RULE_function_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2002;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public schema_name(): Schema_nameContext {
		let localctx: Schema_nameContext = new Schema_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 182, SQLiteParser.RULE_schema_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2004;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public table_name(): Table_nameContext {
		let localctx: Table_nameContext = new Table_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 184, SQLiteParser.RULE_table_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2006;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public table_or_index_name(): Table_or_index_nameContext {
		let localctx: Table_or_index_nameContext = new Table_or_index_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 186, SQLiteParser.RULE_table_or_index_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2008;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public column_name(): Column_nameContext {
		let localctx: Column_nameContext = new Column_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 188, SQLiteParser.RULE_column_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2010;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public collation_name(): Collation_nameContext {
		let localctx: Collation_nameContext = new Collation_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 190, SQLiteParser.RULE_collation_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2012;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public foreign_table(): Foreign_tableContext {
		let localctx: Foreign_tableContext = new Foreign_tableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 192, SQLiteParser.RULE_foreign_table);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2014;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public index_name(): Index_nameContext {
		let localctx: Index_nameContext = new Index_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 194, SQLiteParser.RULE_index_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2016;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public trigger_name(): Trigger_nameContext {
		let localctx: Trigger_nameContext = new Trigger_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 196, SQLiteParser.RULE_trigger_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2018;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public view_name(): View_nameContext {
		let localctx: View_nameContext = new View_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 198, SQLiteParser.RULE_view_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2020;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public module_name(): Module_nameContext {
		let localctx: Module_nameContext = new Module_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 200, SQLiteParser.RULE_module_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2022;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pragma_name(): Pragma_nameContext {
		let localctx: Pragma_nameContext = new Pragma_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 202, SQLiteParser.RULE_pragma_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2024;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public savepoint_name(): Savepoint_nameContext {
		let localctx: Savepoint_nameContext = new Savepoint_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 204, SQLiteParser.RULE_savepoint_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2026;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public table_alias(): Table_aliasContext {
		let localctx: Table_aliasContext = new Table_aliasContext(this, this._ctx, this.state);
		this.enterRule(localctx, 206, SQLiteParser.RULE_table_alias);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2028;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public transaction_name(): Transaction_nameContext {
		let localctx: Transaction_nameContext = new Transaction_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 208, SQLiteParser.RULE_transaction_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2030;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public window_name(): Window_nameContext {
		let localctx: Window_nameContext = new Window_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 210, SQLiteParser.RULE_window_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2032;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public alias(): AliasContext {
		let localctx: AliasContext = new AliasContext(this, this._ctx, this.state);
		this.enterRule(localctx, 212, SQLiteParser.RULE_alias);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2034;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public filename(): FilenameContext {
		let localctx: FilenameContext = new FilenameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 214, SQLiteParser.RULE_filename);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2036;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public base_window_name(): Base_window_nameContext {
		let localctx: Base_window_nameContext = new Base_window_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 216, SQLiteParser.RULE_base_window_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2038;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public simple_func(): Simple_funcContext {
		let localctx: Simple_funcContext = new Simple_funcContext(this, this._ctx, this.state);
		this.enterRule(localctx, 218, SQLiteParser.RULE_simple_func);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2040;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public aggregate_func(): Aggregate_funcContext {
		let localctx: Aggregate_funcContext = new Aggregate_funcContext(this, this._ctx, this.state);
		this.enterRule(localctx, 220, SQLiteParser.RULE_aggregate_func);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2042;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public table_function_name(): Table_function_nameContext {
		let localctx: Table_function_nameContext = new Table_function_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 222, SQLiteParser.RULE_table_function_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2044;
			this.any_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public any_name(): Any_nameContext {
		let localctx: Any_nameContext = new Any_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 224, SQLiteParser.RULE_any_name);
		try {
			this.state = 2053;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 185:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2046;
				this.match(SQLiteParser.IDENTIFIER);
				}
				break;
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 40:
			case 41:
			case 42:
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 122:
			case 123:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 137:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 151:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 158:
			case 159:
			case 160:
			case 161:
			case 162:
			case 163:
			case 164:
			case 165:
			case 166:
			case 167:
			case 168:
			case 169:
			case 170:
			case 171:
			case 172:
			case 173:
			case 174:
			case 175:
			case 176:
			case 177:
			case 178:
			case 179:
			case 180:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2047;
				this.keyword();
				}
				break;
			case 188:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2048;
				this.match(SQLiteParser.STRING_LITERAL);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2049;
				this.match(SQLiteParser.OPEN_PAR);
				this.state = 2050;
				this.any_name();
				this.state = 2051;
				this.match(SQLiteParser.CLOSE_PAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 32:
			return this.expr_sempred(localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 20);
		case 1:
			return this.precpred(this._ctx, 19);
		case 2:
			return this.precpred(this._ctx, 18);
		case 3:
			return this.precpred(this._ctx, 17);
		case 4:
			return this.precpred(this._ctx, 16);
		case 5:
			return this.precpred(this._ctx, 15);
		case 6:
			return this.precpred(this._ctx, 14);
		case 7:
			return this.precpred(this._ctx, 13);
		case 8:
			return this.precpred(this._ctx, 6);
		case 9:
			return this.precpred(this._ctx, 5);
		case 10:
			return this.precpred(this._ctx, 9);
		case 11:
			return this.precpred(this._ctx, 8);
		case 12:
			return this.precpred(this._ctx, 7);
		case 13:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,193,2056,2,0,7,0,
	2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,
	2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,
	17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,
	7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
	31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
	2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
	46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,
	7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,
	60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,
	2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,
	75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,
	7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,
	89,2,90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,
	2,97,7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,
	7,103,2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,2,109,
	7,109,2,110,7,110,2,111,7,111,2,112,7,112,1,0,5,0,228,8,0,10,0,12,0,231,
	9,0,1,0,1,0,1,1,5,1,236,8,1,10,1,12,1,239,9,1,1,1,1,1,4,1,243,8,1,11,1,
	12,1,244,1,1,5,1,248,8,1,10,1,12,1,251,9,1,1,1,5,1,254,8,1,10,1,12,1,257,
	9,1,1,2,1,2,1,2,3,2,262,8,2,3,2,264,8,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
	1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,290,
	8,2,1,3,1,3,1,3,1,3,1,3,3,3,297,8,3,1,3,1,3,1,3,1,3,1,3,3,3,304,8,3,1,3,
	1,3,1,3,1,3,3,3,310,8,3,1,3,1,3,3,3,314,8,3,1,3,1,3,1,3,3,3,319,8,3,1,3,
	3,3,322,8,3,1,4,1,4,1,4,1,4,1,4,3,4,329,8,4,1,4,3,4,332,8,4,1,5,1,5,3,5,
	336,8,5,1,5,1,5,1,5,1,5,1,6,1,6,3,6,344,8,6,1,6,1,6,3,6,348,8,6,3,6,350,
	8,6,1,7,1,7,3,7,354,8,7,1,8,1,8,3,8,358,8,8,1,8,1,8,3,8,362,8,8,1,8,3,8,
	365,8,8,1,9,1,9,1,9,1,10,1,10,3,10,372,8,10,1,10,1,10,1,11,1,11,3,11,378,
	8,11,1,11,1,11,1,11,1,11,3,11,384,8,11,1,11,1,11,1,11,3,11,389,8,11,1,11,
	1,11,1,11,1,11,1,11,1,11,1,11,5,11,398,8,11,10,11,12,11,401,9,11,1,11,1,
	11,1,11,3,11,406,8,11,1,12,1,12,3,12,410,8,12,1,12,1,12,3,12,414,8,12,1,
	12,3,12,417,8,12,1,13,1,13,3,13,421,8,13,1,13,1,13,1,13,1,13,3,13,427,8,
	13,1,13,1,13,1,13,3,13,432,8,13,1,13,1,13,1,13,1,13,1,13,5,13,439,8,13,
	10,13,12,13,442,9,13,1,13,1,13,5,13,446,8,13,10,13,12,13,449,9,13,1,13,
	1,13,1,13,3,13,454,8,13,1,13,1,13,3,13,458,8,13,1,14,1,14,3,14,462,8,14,
	1,14,5,14,465,8,14,10,14,12,14,468,9,14,1,15,4,15,471,8,15,11,15,12,15,
	472,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,3,15,485,8,15,1,16,
	1,16,3,16,489,8,16,1,16,1,16,1,16,3,16,494,8,16,1,16,3,16,497,8,16,1,16,
	3,16,500,8,16,1,16,3,16,503,8,16,1,16,1,16,3,16,507,8,16,1,16,3,16,510,
	8,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,524,
	8,16,1,16,1,16,1,16,1,16,1,16,3,16,531,8,16,1,16,1,16,1,16,1,16,1,16,3,
	16,538,8,16,3,16,540,8,16,1,17,3,17,543,8,17,1,17,1,17,1,18,1,18,3,18,549,
	8,18,1,18,1,18,1,18,3,18,554,8,18,1,18,1,18,1,18,1,18,5,18,560,8,18,10,
	18,12,18,563,9,18,1,18,1,18,3,18,567,8,18,1,18,1,18,1,18,1,18,1,18,1,18,
	1,18,1,18,1,18,1,18,1,18,5,18,580,8,18,10,18,12,18,583,9,18,1,18,1,18,1,
	18,3,18,588,8,18,1,19,1,19,1,19,1,19,1,19,1,19,5,19,596,8,19,10,19,12,19,
	599,9,19,1,19,1,19,3,19,603,8,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,
	3,19,613,8,19,1,19,1,19,5,19,617,8,19,10,19,12,19,620,9,19,1,19,3,19,623,
	8,19,1,19,1,19,1,19,3,19,628,8,19,3,19,630,8,19,1,20,1,20,1,20,1,20,1,21,
	1,21,3,21,638,8,21,1,21,1,21,1,21,1,21,3,21,644,8,21,1,21,1,21,1,21,3,21,
	649,8,21,1,21,1,21,1,21,1,21,1,21,3,21,656,8,21,1,21,1,21,1,21,1,21,1,21,
	1,21,1,21,5,21,665,8,21,10,21,12,21,668,9,21,3,21,670,8,21,3,21,672,8,21,
	1,21,1,21,1,21,1,21,1,21,3,21,679,8,21,1,21,1,21,3,21,683,8,21,1,21,1,21,
	1,21,1,21,1,21,3,21,690,8,21,1,21,1,21,4,21,694,8,21,11,21,12,21,695,1,
	21,1,21,1,22,1,22,3,22,702,8,22,1,22,1,22,1,22,1,22,3,22,708,8,22,1,22,
	1,22,1,22,3,22,713,8,22,1,22,1,22,1,22,1,22,1,22,5,22,720,8,22,10,22,12,
	22,723,9,22,1,22,1,22,3,22,727,8,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,
	1,23,1,23,3,23,738,8,23,1,23,1,23,1,23,3,23,743,8,23,1,23,1,23,1,23,1,23,
	1,23,1,23,1,23,5,23,752,8,23,10,23,12,23,755,9,23,1,23,1,23,3,23,759,8,
	23,1,24,1,24,3,24,763,8,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,
	1,24,1,24,1,24,5,24,777,8,24,10,24,12,24,780,9,24,1,25,1,25,1,25,1,25,1,
	25,5,25,787,8,25,10,25,12,25,790,9,25,1,25,1,25,3,25,794,8,25,1,26,1,26,
	1,26,1,26,1,26,1,26,3,26,802,8,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,
	27,5,27,812,8,27,10,27,12,27,815,9,27,1,27,1,27,3,27,819,8,27,1,27,1,27,
	1,27,1,27,1,27,1,28,3,28,827,8,28,1,28,1,28,1,28,1,28,1,28,3,28,834,8,28,
	1,28,3,28,837,8,28,1,29,3,29,840,8,29,1,29,1,29,1,29,1,29,1,29,3,29,847,
	8,29,1,29,3,29,850,8,29,1,29,3,29,853,8,29,1,29,3,29,856,8,29,1,30,1,30,
	3,30,860,8,30,1,30,1,30,1,31,1,31,1,31,1,31,3,31,868,8,31,1,31,1,31,1,31,
	3,31,873,8,31,1,31,1,31,1,32,1,32,1,32,1,32,1,32,1,32,3,32,883,8,32,1,32,
	1,32,1,32,3,32,888,8,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,3,32,897,8,32,
	1,32,1,32,1,32,5,32,902,8,32,10,32,12,32,905,9,32,1,32,3,32,908,8,32,1,
	32,1,32,3,32,912,8,32,1,32,3,32,915,8,32,1,32,1,32,1,32,1,32,5,32,921,8,
	32,10,32,12,32,924,9,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,
	32,3,32,936,8,32,1,32,3,32,939,8,32,1,32,1,32,1,32,1,32,1,32,1,32,3,32,
	947,8,32,1,32,1,32,1,32,1,32,1,32,4,32,954,8,32,11,32,12,32,955,1,32,1,
	32,3,32,960,8,32,1,32,1,32,1,32,3,32,965,8,32,1,32,1,32,1,32,1,32,1,32,
	1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,
	32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,3,32,995,8,32,1,32,1,32,1,32,
	1,32,1,32,1,32,1,32,1,32,1,32,1,32,3,32,1007,8,32,1,32,1,32,1,32,3,32,1012,
	8,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,3,32,1024,8,32,1,
	32,1,32,1,32,1,32,3,32,1030,8,32,1,32,1,32,1,32,1,32,1,32,3,32,1037,8,32,
	1,32,1,32,3,32,1041,8,32,1,32,1,32,1,32,1,32,1,32,1,32,5,32,1049,8,32,10,
	32,12,32,1052,9,32,3,32,1054,8,32,1,32,1,32,1,32,1,32,3,32,1060,8,32,1,
	32,1,32,1,32,1,32,3,32,1066,8,32,1,32,1,32,1,32,1,32,1,32,5,32,1073,8,32,
	10,32,12,32,1076,9,32,3,32,1078,8,32,1,32,1,32,3,32,1082,8,32,5,32,1084,
	8,32,10,32,12,32,1087,9,32,1,33,1,33,1,33,1,33,1,33,1,33,3,33,1095,8,33,
	1,33,1,33,1,34,1,34,1,35,1,35,1,35,1,35,5,35,1105,8,35,10,35,12,35,1108,
	9,35,1,35,1,35,1,36,1,36,1,36,1,36,5,36,1116,8,36,10,36,12,36,1119,9,36,
	1,37,3,37,1122,8,37,1,37,1,37,1,37,1,37,1,37,3,37,1129,8,37,1,37,1,37,1,
	37,1,37,3,37,1135,8,37,1,37,1,37,1,37,3,37,1140,8,37,1,37,1,37,1,37,1,37,
	5,37,1146,8,37,10,37,12,37,1149,9,37,1,37,1,37,3,37,1153,8,37,1,37,1,37,
	3,37,1157,8,37,1,37,3,37,1160,8,37,1,37,1,37,3,37,1164,8,37,1,37,3,37,1167,
	8,37,1,38,1,38,1,38,1,38,5,38,1173,8,38,10,38,12,38,1176,9,38,1,39,1,39,
	1,39,1,39,1,39,1,39,5,39,1184,8,39,10,39,12,39,1187,9,39,1,39,1,39,1,39,
	3,39,1192,8,39,3,39,1194,8,39,1,39,1,39,1,39,1,39,1,39,1,39,3,39,1202,8,
	39,1,39,1,39,1,39,1,39,1,39,3,39,1209,8,39,1,39,1,39,1,39,5,39,1214,8,39,
	10,39,12,39,1217,9,39,1,39,1,39,3,39,1221,8,39,3,39,1223,8,39,1,40,1,40,
	1,40,1,40,3,40,1229,8,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,3,40,1238,8,
	40,1,41,1,41,1,41,3,41,1243,8,41,1,42,1,42,1,42,1,42,1,42,3,42,1250,8,42,
	1,42,1,42,3,42,1254,8,42,3,42,1256,8,42,1,43,3,43,1259,8,43,1,43,1,43,1,
	43,1,43,5,43,1265,8,43,10,43,12,43,1268,9,43,1,43,3,43,1271,8,43,1,43,3,
	43,1274,8,43,1,44,1,44,1,44,1,44,3,44,1280,8,44,5,44,1282,8,44,10,44,12,
	44,1285,9,44,1,45,1,45,3,45,1289,8,45,1,45,1,45,1,45,5,45,1294,8,45,10,
	45,12,45,1297,9,45,1,45,1,45,1,45,1,45,5,45,1303,8,45,10,45,12,45,1306,
	9,45,1,45,3,45,1309,8,45,3,45,1311,8,45,1,45,1,45,3,45,1315,8,45,1,45,1,
	45,1,45,1,45,1,45,5,45,1322,8,45,10,45,12,45,1325,9,45,1,45,1,45,3,45,1329,
	8,45,3,45,1331,8,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,5,45,1342,
	8,45,10,45,12,45,1345,9,45,3,45,1347,8,45,1,45,3,45,1350,8,45,1,46,1,46,
	1,47,3,47,1355,8,47,1,47,1,47,3,47,1359,8,47,1,47,3,47,1362,8,47,1,48,3,
	48,1365,8,48,1,48,1,48,1,48,3,48,1370,8,48,1,48,1,48,3,48,1374,8,48,1,48,
	4,48,1377,8,48,11,48,12,48,1378,1,48,3,48,1382,8,48,1,48,3,48,1385,8,48,
	1,49,1,49,1,49,3,49,1390,8,49,1,49,1,49,3,49,1394,8,49,1,49,3,49,1397,8,
	49,1,49,1,49,1,49,1,49,1,49,3,49,1404,8,49,1,49,1,49,1,49,3,49,1409,8,49,
	1,49,1,49,1,49,1,49,1,49,5,49,1416,8,49,10,49,12,49,1419,9,49,1,49,1,49,
	3,49,1423,8,49,1,49,3,49,1426,8,49,1,49,1,49,1,49,1,49,5,49,1432,8,49,10,
	49,12,49,1435,9,49,1,49,3,49,1438,8,49,1,49,1,49,1,49,1,49,1,49,1,49,3,
	49,1446,8,49,1,49,3,49,1449,8,49,3,49,1451,8,49,1,50,1,50,1,50,1,50,1,50,
	1,50,1,50,3,50,1460,8,50,1,50,3,50,1463,8,50,3,50,1465,8,50,1,51,1,51,3,
	51,1469,8,51,1,51,1,51,3,51,1473,8,51,1,51,1,51,3,51,1477,8,51,1,51,3,51,
	1480,8,51,1,52,1,52,1,52,1,52,1,52,1,52,1,52,5,52,1489,8,52,10,52,12,52,
	1492,9,52,1,52,1,52,3,52,1496,8,52,1,53,1,53,3,53,1500,8,53,1,53,1,53,3,
	53,1504,8,53,1,54,3,54,1507,8,54,1,54,1,54,1,54,3,54,1512,8,54,1,54,1,54,
	1,54,1,54,3,54,1518,8,54,1,54,1,54,1,54,1,54,1,54,3,54,1525,8,54,1,54,1,
	54,1,54,5,54,1530,8,54,10,54,12,54,1533,9,54,1,54,1,54,1,54,1,54,5,54,1539,
	8,54,10,54,12,54,1542,9,54,1,54,3,54,1545,8,54,3,54,1547,8,54,1,54,1,54,
	3,54,1551,8,54,1,54,3,54,1554,8,54,1,55,1,55,1,55,1,55,5,55,1560,8,55,10,
	55,12,55,1563,9,55,1,55,1,55,1,56,3,56,1568,8,56,1,56,1,56,1,56,3,56,1573,
	8,56,1,56,1,56,1,56,1,56,3,56,1579,8,56,1,56,1,56,1,56,1,56,1,56,3,56,1586,
	8,56,1,56,1,56,1,56,5,56,1591,8,56,10,56,12,56,1594,9,56,1,56,1,56,3,56,
	1598,8,56,1,56,3,56,1601,8,56,1,56,3,56,1604,8,56,1,56,3,56,1607,8,56,1,
	57,1,57,1,57,3,57,1612,8,57,1,57,1,57,1,57,3,57,1617,8,57,1,57,1,57,1,57,
	1,57,1,57,3,57,1624,8,57,1,58,1,58,3,58,1628,8,58,1,58,1,58,3,58,1632,8,
	58,1,59,1,59,1,59,1,59,1,59,1,59,1,60,1,60,3,60,1642,8,60,1,60,1,60,1,60,
	1,60,1,60,5,60,1649,8,60,10,60,12,60,1652,9,60,3,60,1654,8,60,1,60,1,60,
	1,60,1,60,1,60,5,60,1661,8,60,10,60,12,60,1664,9,60,1,60,3,60,1667,8,60,
	1,60,1,60,1,61,1,61,1,61,1,61,3,61,1675,8,61,1,61,1,61,1,61,1,61,1,61,5,
	61,1682,8,61,10,61,12,61,1685,9,61,3,61,1687,8,61,1,61,1,61,1,61,1,61,1,
	61,5,61,1694,8,61,10,61,12,61,1697,9,61,3,61,1699,8,61,1,61,3,61,1702,8,
	61,1,61,3,61,1705,8,61,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,3,62,1715,
	8,62,3,62,1717,8,62,1,63,1,63,1,63,1,63,1,63,1,63,1,63,3,63,1726,8,63,1,
	64,1,64,1,64,1,64,1,64,5,64,1733,8,64,10,64,12,64,1736,9,64,1,64,3,64,1739,
	8,64,1,64,1,64,1,65,1,65,1,65,3,65,1746,8,65,1,65,1,65,1,65,5,65,1751,8,
	65,10,65,12,65,1754,9,65,1,65,3,65,1757,8,65,1,65,1,65,3,65,1761,8,65,1,
	66,1,66,1,66,1,66,1,66,5,66,1768,8,66,10,66,12,66,1771,9,66,1,66,3,66,1774,
	8,66,1,66,1,66,3,66,1778,8,66,1,66,1,66,1,66,3,66,1783,8,66,1,67,1,67,3,
	67,1787,8,67,1,67,1,67,1,67,5,67,1792,8,67,10,67,12,67,1795,9,67,1,68,1,
	68,1,68,1,68,1,68,5,68,1802,8,68,10,68,12,68,1805,9,68,1,69,1,69,1,69,1,
	69,3,69,1811,8,69,1,70,1,70,1,70,3,70,1816,8,70,1,70,3,70,1819,8,70,1,70,
	1,70,3,70,1823,8,70,1,71,1,71,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,
	72,1,72,3,72,1837,8,72,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,
	3,73,1849,8,73,1,74,1,74,1,74,1,74,1,74,1,74,1,74,3,74,1858,8,74,1,75,1,
	75,1,75,1,75,1,75,1,75,1,75,3,75,1867,8,75,1,75,1,75,3,75,1871,8,75,1,75,
	1,75,1,75,1,75,1,75,1,75,1,75,1,75,3,75,1881,8,75,1,75,3,75,1884,8,75,1,
	75,1,75,1,75,1,75,1,75,1,75,1,75,3,75,1893,8,75,1,75,1,75,1,75,1,75,1,75,
	1,75,1,75,3,75,1902,8,75,1,75,3,75,1905,8,75,1,75,1,75,1,75,1,75,3,75,1911,
	8,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,3,75,1925,
	8,75,1,75,1,75,3,75,1929,8,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,
	75,3,75,1940,8,75,1,75,1,75,1,75,3,75,1945,8,75,1,76,1,76,1,76,1,77,1,77,
	1,77,1,78,1,78,1,78,4,78,1956,8,78,11,78,12,78,1957,1,79,1,79,1,79,4,79,
	1963,8,79,11,79,12,79,1964,1,80,1,80,1,80,1,80,1,81,1,81,3,81,1973,8,81,
	1,81,1,81,1,81,3,81,1978,8,81,5,81,1980,8,81,10,81,12,81,1983,9,81,1,82,
	1,82,1,83,1,83,1,84,1,84,1,85,1,85,1,86,1,86,3,86,1995,8,86,1,87,1,87,1,
	88,1,88,1,89,1,89,1,90,1,90,1,91,1,91,1,92,1,92,1,93,1,93,1,94,1,94,1,95,
	1,95,1,96,1,96,1,97,1,97,1,98,1,98,1,99,1,99,1,100,1,100,1,101,1,101,1,
	102,1,102,1,103,1,103,1,104,1,104,1,105,1,105,1,106,1,106,1,107,1,107,1,
	108,1,108,1,109,1,109,1,110,1,110,1,111,1,111,1,112,1,112,1,112,1,112,1,
	112,1,112,1,112,3,112,2054,8,112,1,112,2,440,472,1,64,113,0,2,4,6,8,10,
	12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,
	60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,
	106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,
	142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,
	178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,
	214,216,218,220,222,224,0,28,3,0,58,58,69,69,82,82,2,0,47,47,66,66,1,0,
	133,134,2,0,146,146,171,171,1,0,8,9,2,0,59,59,141,141,2,0,56,56,104,104,
	2,0,58,58,82,82,5,0,25,25,72,72,81,81,122,122,126,126,4,0,84,84,132,132,
	138,138,145,145,2,0,7,7,12,13,1,0,14,17,1,0,18,21,4,0,77,77,97,97,99,99,
	118,118,3,0,25,25,72,72,126,126,5,0,52,54,104,104,172,173,186,186,188,189,
	2,0,29,29,62,62,3,0,128,128,154,154,179,179,2,0,5,5,106,106,1,0,176,177,
	2,0,34,34,60,60,2,0,151,151,162,162,2,0,159,159,166,166,2,0,160,160,167,
	168,2,0,161,161,163,163,2,0,8,10,102,102,2,0,185,185,188,188,2,0,25,123,
	125,180,2338,0,229,1,0,0,0,2,237,1,0,0,0,4,263,1,0,0,0,6,291,1,0,0,0,8,
	323,1,0,0,0,10,333,1,0,0,0,12,341,1,0,0,0,14,351,1,0,0,0,16,355,1,0,0,0,
	18,366,1,0,0,0,20,369,1,0,0,0,22,375,1,0,0,0,24,409,1,0,0,0,26,418,1,0,
	0,0,28,459,1,0,0,0,30,470,1,0,0,0,32,488,1,0,0,0,34,542,1,0,0,0,36,548,
	1,0,0,0,38,589,1,0,0,0,40,631,1,0,0,0,42,635,1,0,0,0,44,699,1,0,0,0,46,
	731,1,0,0,0,48,760,1,0,0,0,50,781,1,0,0,0,52,795,1,0,0,0,54,806,1,0,0,0,
	56,826,1,0,0,0,58,839,1,0,0,0,60,857,1,0,0,0,62,863,1,0,0,0,64,964,1,0,
	0,0,66,1088,1,0,0,0,68,1098,1,0,0,0,70,1100,1,0,0,0,72,1111,1,0,0,0,74,
	1121,1,0,0,0,76,1168,1,0,0,0,78,1177,1,0,0,0,80,1224,1,0,0,0,82,1242,1,
	0,0,0,84,1244,1,0,0,0,86,1258,1,0,0,0,88,1275,1,0,0,0,90,1349,1,0,0,0,92,
	1351,1,0,0,0,94,1354,1,0,0,0,96,1364,1,0,0,0,98,1450,1,0,0,0,100,1464,1,
	0,0,0,102,1479,1,0,0,0,104,1495,1,0,0,0,106,1503,1,0,0,0,108,1506,1,0,0,
	0,110,1555,1,0,0,0,112,1567,1,0,0,0,114,1611,1,0,0,0,116,1625,1,0,0,0,118,
	1633,1,0,0,0,120,1639,1,0,0,0,122,1670,1,0,0,0,124,1706,1,0,0,0,126,1718,
	1,0,0,0,128,1727,1,0,0,0,130,1742,1,0,0,0,132,1762,1,0,0,0,134,1784,1,0,
	0,0,136,1796,1,0,0,0,138,1806,1,0,0,0,140,1812,1,0,0,0,142,1824,1,0,0,0,
	144,1836,1,0,0,0,146,1848,1,0,0,0,148,1857,1,0,0,0,150,1944,1,0,0,0,152,
	1946,1,0,0,0,154,1949,1,0,0,0,156,1952,1,0,0,0,158,1959,1,0,0,0,160,1966,
	1,0,0,0,162,1970,1,0,0,0,164,1984,1,0,0,0,166,1986,1,0,0,0,168,1988,1,0,
	0,0,170,1990,1,0,0,0,172,1994,1,0,0,0,174,1996,1,0,0,0,176,1998,1,0,0,0,
	178,2000,1,0,0,0,180,2002,1,0,0,0,182,2004,1,0,0,0,184,2006,1,0,0,0,186,
	2008,1,0,0,0,188,2010,1,0,0,0,190,2012,1,0,0,0,192,2014,1,0,0,0,194,2016,
	1,0,0,0,196,2018,1,0,0,0,198,2020,1,0,0,0,200,2022,1,0,0,0,202,2024,1,0,
	0,0,204,2026,1,0,0,0,206,2028,1,0,0,0,208,2030,1,0,0,0,210,2032,1,0,0,0,
	212,2034,1,0,0,0,214,2036,1,0,0,0,216,2038,1,0,0,0,218,2040,1,0,0,0,220,
	2042,1,0,0,0,222,2044,1,0,0,0,224,2053,1,0,0,0,226,228,3,2,1,0,227,226,
	1,0,0,0,228,231,1,0,0,0,229,227,1,0,0,0,229,230,1,0,0,0,230,232,1,0,0,0,
	231,229,1,0,0,0,232,233,5,0,0,1,233,1,1,0,0,0,234,236,5,1,0,0,235,234,1,
	0,0,0,236,239,1,0,0,0,237,235,1,0,0,0,237,238,1,0,0,0,238,240,1,0,0,0,239,
	237,1,0,0,0,240,249,3,4,2,0,241,243,5,1,0,0,242,241,1,0,0,0,243,244,1,0,
	0,0,244,242,1,0,0,0,244,245,1,0,0,0,245,246,1,0,0,0,246,248,3,4,2,0,247,
	242,1,0,0,0,248,251,1,0,0,0,249,247,1,0,0,0,249,250,1,0,0,0,250,255,1,0,
	0,0,251,249,1,0,0,0,252,254,5,1,0,0,253,252,1,0,0,0,254,257,1,0,0,0,255,
	253,1,0,0,0,255,256,1,0,0,0,256,3,1,0,0,0,257,255,1,0,0,0,258,261,5,71,
	0,0,259,260,5,114,0,0,260,262,5,111,0,0,261,259,1,0,0,0,261,262,1,0,0,0,
	262,264,1,0,0,0,263,258,1,0,0,0,263,264,1,0,0,0,264,289,1,0,0,0,265,290,
	3,6,3,0,266,290,3,8,4,0,267,290,3,10,5,0,268,290,3,12,6,0,269,290,3,14,
	7,0,270,290,3,22,11,0,271,290,3,26,13,0,272,290,3,42,21,0,273,290,3,44,
	22,0,274,290,3,46,23,0,275,290,3,56,28,0,276,290,3,58,29,0,277,290,3,60,
	30,0,278,290,3,62,31,0,279,290,3,74,37,0,280,290,3,80,40,0,281,290,3,84,
	42,0,282,290,3,20,10,0,283,290,3,16,8,0,284,290,3,18,9,0,285,290,3,86,43,
	0,286,290,3,108,54,0,287,290,3,112,56,0,288,290,3,116,58,0,289,265,1,0,
	0,0,289,266,1,0,0,0,289,267,1,0,0,0,289,268,1,0,0,0,289,269,1,0,0,0,289,
	270,1,0,0,0,289,271,1,0,0,0,289,272,1,0,0,0,289,273,1,0,0,0,289,274,1,0,
	0,0,289,275,1,0,0,0,289,276,1,0,0,0,289,277,1,0,0,0,289,278,1,0,0,0,289,
	279,1,0,0,0,289,280,1,0,0,0,289,281,1,0,0,0,289,282,1,0,0,0,289,283,1,0,
	0,0,289,284,1,0,0,0,289,285,1,0,0,0,289,286,1,0,0,0,289,287,1,0,0,0,289,
	288,1,0,0,0,290,5,1,0,0,0,291,292,5,30,0,0,292,296,5,132,0,0,293,294,3,
	182,91,0,294,295,5,2,0,0,295,297,1,0,0,0,296,293,1,0,0,0,296,297,1,0,0,
	0,297,298,1,0,0,0,298,321,3,184,92,0,299,309,5,121,0,0,300,301,5,136,0,
	0,301,310,3,184,92,0,302,304,5,46,0,0,303,302,1,0,0,0,303,304,1,0,0,0,304,
	305,1,0,0,0,305,306,3,188,94,0,306,307,5,136,0,0,307,308,3,188,94,0,308,
	310,1,0,0,0,309,300,1,0,0,0,309,303,1,0,0,0,310,322,1,0,0,0,311,313,5,27,
	0,0,312,314,5,46,0,0,313,312,1,0,0,0,313,314,1,0,0,0,314,315,1,0,0,0,315,
	322,3,28,14,0,316,318,5,63,0,0,317,319,5,46,0,0,318,317,1,0,0,0,318,319,
	1,0,0,0,319,320,1,0,0,0,320,322,3,188,94,0,321,299,1,0,0,0,321,311,1,0,
	0,0,321,316,1,0,0,0,322,7,1,0,0,0,323,331,5,31,0,0,324,332,3,182,91,0,325,
	326,3,182,91,0,326,327,5,2,0,0,327,329,1,0,0,0,328,325,1,0,0,0,328,329,
	1,0,0,0,329,330,1,0,0,0,330,332,3,186,93,0,331,324,1,0,0,0,331,328,1,0,
	0,0,331,332,1,0,0,0,332,9,1,0,0,0,333,335,5,35,0,0,334,336,5,55,0,0,335,
	334,1,0,0,0,335,336,1,0,0,0,336,337,1,0,0,0,337,338,3,64,32,0,338,339,5,
	33,0,0,339,340,3,182,91,0,340,11,1,0,0,0,341,343,5,38,0,0,342,344,7,0,0,
	0,343,342,1,0,0,0,343,344,1,0,0,0,344,349,1,0,0,0,345,347,5,137,0,0,346,
	348,3,208,104,0,347,346,1,0,0,0,347,348,1,0,0,0,348,350,1,0,0,0,349,345,
	1,0,0,0,349,350,1,0,0,0,350,13,1,0,0,0,351,353,7,1,0,0,352,354,5,137,0,
	0,353,352,1,0,0,0,353,354,1,0,0,0,354,15,1,0,0,0,355,357,5,126,0,0,356,
	358,5,137,0,0,357,356,1,0,0,0,357,358,1,0,0,0,358,364,1,0,0,0,359,361,5,
	136,0,0,360,362,5,129,0,0,361,360,1,0,0,0,361,362,1,0,0,0,362,363,1,0,0,
	0,363,365,3,204,102,0,364,359,1,0,0,0,364,365,1,0,0,0,365,17,1,0,0,0,366,
	367,5,129,0,0,367,368,3,204,102,0,368,19,1,0,0,0,369,371,5,120,0,0,370,
	372,5,129,0,0,371,370,1,0,0,0,371,372,1,0,0,0,372,373,1,0,0,0,373,374,3,
	204,102,0,374,21,1,0,0,0,375,377,5,50,0,0,376,378,5,140,0,0,377,376,1,0,
	0,0,377,378,1,0,0,0,378,379,1,0,0,0,379,383,5,84,0,0,380,381,5,80,0,0,381,
	382,5,102,0,0,382,384,5,70,0,0,383,380,1,0,0,0,383,384,1,0,0,0,384,388,
	1,0,0,0,385,386,3,182,91,0,386,387,5,2,0,0,387,389,1,0,0,0,388,385,1,0,
	0,0,388,389,1,0,0,0,389,390,1,0,0,0,390,391,3,194,97,0,391,392,5,107,0,
	0,392,393,3,184,92,0,393,394,5,3,0,0,394,399,3,24,12,0,395,396,5,5,0,0,
	396,398,3,24,12,0,397,395,1,0,0,0,398,401,1,0,0,0,399,397,1,0,0,0,399,400,
	1,0,0,0,400,402,1,0,0,0,401,399,1,0,0,0,402,405,5,4,0,0,403,404,5,148,0,
	0,404,406,3,64,32,0,405,403,1,0,0,0,405,406,1,0,0,0,406,23,1,0,0,0,407,
	410,3,188,94,0,408,410,3,64,32,0,409,407,1,0,0,0,409,408,1,0,0,0,410,413,
	1,0,0,0,411,412,5,45,0,0,412,414,3,190,95,0,413,411,1,0,0,0,413,414,1,0,
	0,0,414,416,1,0,0,0,415,417,3,142,71,0,416,415,1,0,0,0,416,417,1,0,0,0,
	417,25,1,0,0,0,418,420,5,50,0,0,419,421,7,2,0,0,420,419,1,0,0,0,420,421,
	1,0,0,0,421,422,1,0,0,0,422,426,5,132,0,0,423,424,5,80,0,0,424,425,5,102,
	0,0,425,427,5,70,0,0,426,423,1,0,0,0,426,427,1,0,0,0,427,431,1,0,0,0,428,
	429,3,182,91,0,429,430,5,2,0,0,430,432,1,0,0,0,431,428,1,0,0,0,431,432,
	1,0,0,0,432,433,1,0,0,0,433,457,3,184,92,0,434,435,5,3,0,0,435,440,3,28,
	14,0,436,437,5,5,0,0,437,439,3,28,14,0,438,436,1,0,0,0,439,442,1,0,0,0,
	440,441,1,0,0,0,440,438,1,0,0,0,441,447,1,0,0,0,442,440,1,0,0,0,443,444,
	5,5,0,0,444,446,3,36,18,0,445,443,1,0,0,0,446,449,1,0,0,0,447,445,1,0,0,
	0,447,448,1,0,0,0,448,450,1,0,0,0,449,447,1,0,0,0,450,453,5,4,0,0,451,452,
	5,150,0,0,452,454,5,185,0,0,453,451,1,0,0,0,453,454,1,0,0,0,454,458,1,0,
	0,0,455,456,5,33,0,0,456,458,3,86,43,0,457,434,1,0,0,0,457,455,1,0,0,0,
	458,27,1,0,0,0,459,461,3,188,94,0,460,462,3,30,15,0,461,460,1,0,0,0,461,
	462,1,0,0,0,462,466,1,0,0,0,463,465,3,32,16,0,464,463,1,0,0,0,465,468,1,
	0,0,0,466,464,1,0,0,0,466,467,1,0,0,0,467,29,1,0,0,0,468,466,1,0,0,0,469,
	471,3,178,89,0,470,469,1,0,0,0,471,472,1,0,0,0,472,473,1,0,0,0,472,470,
	1,0,0,0,473,484,1,0,0,0,474,475,5,3,0,0,475,476,3,34,17,0,476,477,5,4,0,
	0,477,485,1,0,0,0,478,479,5,3,0,0,479,480,3,34,17,0,480,481,5,5,0,0,481,
	482,3,34,17,0,482,483,5,4,0,0,483,485,1,0,0,0,484,474,1,0,0,0,484,478,1,
	0,0,0,484,485,1,0,0,0,485,31,1,0,0,0,486,487,5,49,0,0,487,489,3,178,89,
	0,488,486,1,0,0,0,488,489,1,0,0,0,489,539,1,0,0,0,490,491,5,113,0,0,491,
	493,5,95,0,0,492,494,3,142,71,0,493,492,1,0,0,0,493,494,1,0,0,0,494,496,
	1,0,0,0,495,497,3,40,20,0,496,495,1,0,0,0,496,497,1,0,0,0,497,499,1,0,0,
	0,498,500,5,36,0,0,499,498,1,0,0,0,499,500,1,0,0,0,500,540,1,0,0,0,501,
	503,5,102,0,0,502,501,1,0,0,0,502,503,1,0,0,0,503,504,1,0,0,0,504,507,5,
	104,0,0,505,507,5,140,0,0,506,502,1,0,0,0,506,505,1,0,0,0,507,509,1,0,0,
	0,508,510,3,40,20,0,509,508,1,0,0,0,509,510,1,0,0,0,510,540,1,0,0,0,511,
	512,5,44,0,0,512,513,5,3,0,0,513,514,3,64,32,0,514,515,5,4,0,0,515,540,
	1,0,0,0,516,523,5,56,0,0,517,524,3,34,17,0,518,524,3,68,34,0,519,520,5,
	3,0,0,520,521,3,64,32,0,521,522,5,4,0,0,522,524,1,0,0,0,523,517,1,0,0,0,
	523,518,1,0,0,0,523,519,1,0,0,0,524,540,1,0,0,0,525,526,5,45,0,0,526,540,
	3,190,95,0,527,540,3,38,19,0,528,529,5,169,0,0,529,531,5,170,0,0,530,528,
	1,0,0,0,530,531,1,0,0,0,531,532,1,0,0,0,532,533,5,33,0,0,533,534,5,3,0,
	0,534,535,3,64,32,0,535,537,5,4,0,0,536,538,7,3,0,0,537,536,1,0,0,0,537,
	538,1,0,0,0,538,540,1,0,0,0,539,490,1,0,0,0,539,506,1,0,0,0,539,511,1,0,
	0,0,539,516,1,0,0,0,539,525,1,0,0,0,539,527,1,0,0,0,539,530,1,0,0,0,540,
	33,1,0,0,0,541,543,7,4,0,0,542,541,1,0,0,0,542,543,1,0,0,0,543,544,1,0,
	0,0,544,545,5,186,0,0,545,35,1,0,0,0,546,547,5,49,0,0,547,549,3,178,89,
	0,548,546,1,0,0,0,548,549,1,0,0,0,549,587,1,0,0,0,550,551,5,113,0,0,551,
	554,5,95,0,0,552,554,5,140,0,0,553,550,1,0,0,0,553,552,1,0,0,0,554,555,
	1,0,0,0,555,556,5,3,0,0,556,561,3,24,12,0,557,558,5,5,0,0,558,560,3,24,
	12,0,559,557,1,0,0,0,560,563,1,0,0,0,561,559,1,0,0,0,561,562,1,0,0,0,562,
	564,1,0,0,0,563,561,1,0,0,0,564,566,5,4,0,0,565,567,3,40,20,0,566,565,1,
	0,0,0,566,567,1,0,0,0,567,588,1,0,0,0,568,569,5,44,0,0,569,570,5,3,0,0,
	570,571,3,64,32,0,571,572,5,4,0,0,572,588,1,0,0,0,573,574,5,74,0,0,574,
	575,5,95,0,0,575,576,5,3,0,0,576,581,3,188,94,0,577,578,5,5,0,0,578,580,
	3,188,94,0,579,577,1,0,0,0,580,583,1,0,0,0,581,579,1,0,0,0,581,582,1,0,
	0,0,582,584,1,0,0,0,583,581,1,0,0,0,584,585,5,4,0,0,585,586,3,38,19,0,586,
	588,1,0,0,0,587,553,1,0,0,0,587,568,1,0,0,0,587,573,1,0,0,0,588,37,1,0,
	0,0,589,590,5,117,0,0,590,602,3,192,96,0,591,592,5,3,0,0,592,597,3,188,
	94,0,593,594,5,5,0,0,594,596,3,188,94,0,595,593,1,0,0,0,596,599,1,0,0,0,
	597,595,1,0,0,0,597,598,1,0,0,0,598,600,1,0,0,0,599,597,1,0,0,0,600,601,
	5,4,0,0,601,603,1,0,0,0,602,591,1,0,0,0,602,603,1,0,0,0,603,618,1,0,0,0,
	604,605,5,107,0,0,605,612,7,5,0,0,606,607,5,131,0,0,607,613,7,6,0,0,608,
	613,5,41,0,0,609,613,5,123,0,0,610,611,5,101,0,0,611,613,5,26,0,0,612,606,
	1,0,0,0,612,608,1,0,0,0,612,609,1,0,0,0,612,610,1,0,0,0,613,617,1,0,0,0,
	614,615,5,99,0,0,615,617,3,178,89,0,616,604,1,0,0,0,616,614,1,0,0,0,617,
	620,1,0,0,0,618,616,1,0,0,0,618,619,1,0,0,0,619,629,1,0,0,0,620,618,1,0,
	0,0,621,623,5,102,0,0,622,621,1,0,0,0,622,623,1,0,0,0,623,624,1,0,0,0,624,
	627,5,57,0,0,625,626,5,86,0,0,626,628,7,7,0,0,627,625,1,0,0,0,627,628,1,
	0,0,0,628,630,1,0,0,0,629,622,1,0,0,0,629,630,1,0,0,0,630,39,1,0,0,0,631,
	632,5,107,0,0,632,633,5,48,0,0,633,634,7,8,0,0,634,41,1,0,0,0,635,637,5,
	50,0,0,636,638,7,2,0,0,637,636,1,0,0,0,637,638,1,0,0,0,638,639,1,0,0,0,
	639,643,5,138,0,0,640,641,5,80,0,0,641,642,5,102,0,0,642,644,5,70,0,0,643,
	640,1,0,0,0,643,644,1,0,0,0,644,648,1,0,0,0,645,646,3,182,91,0,646,647,
	5,2,0,0,647,649,1,0,0,0,648,645,1,0,0,0,648,649,1,0,0,0,649,650,1,0,0,0,
	650,655,3,196,98,0,651,656,5,37,0,0,652,656,5,28,0,0,653,654,5,89,0,0,654,
	656,5,105,0,0,655,651,1,0,0,0,655,652,1,0,0,0,655,653,1,0,0,0,655,656,1,
	0,0,0,656,671,1,0,0,0,657,672,5,59,0,0,658,672,5,88,0,0,659,669,5,141,0,
	0,660,661,5,105,0,0,661,666,3,188,94,0,662,663,5,5,0,0,663,665,3,188,94,
	0,664,662,1,0,0,0,665,668,1,0,0,0,666,664,1,0,0,0,666,667,1,0,0,0,667,670,
	1,0,0,0,668,666,1,0,0,0,669,660,1,0,0,0,669,670,1,0,0,0,670,672,1,0,0,0,
	671,657,1,0,0,0,671,658,1,0,0,0,671,659,1,0,0,0,672,673,1,0,0,0,673,674,
	5,107,0,0,674,678,3,184,92,0,675,676,5,73,0,0,676,677,5,64,0,0,677,679,
	5,127,0,0,678,675,1,0,0,0,678,679,1,0,0,0,679,682,1,0,0,0,680,681,5,147,
	0,0,681,683,3,64,32,0,682,680,1,0,0,0,682,683,1,0,0,0,683,684,1,0,0,0,684,
	693,5,38,0,0,685,690,3,108,54,0,686,690,3,74,37,0,687,690,3,56,28,0,688,
	690,3,86,43,0,689,685,1,0,0,0,689,686,1,0,0,0,689,687,1,0,0,0,689,688,1,
	0,0,0,690,691,1,0,0,0,691,692,5,1,0,0,692,694,1,0,0,0,693,689,1,0,0,0,694,
	695,1,0,0,0,695,693,1,0,0,0,695,696,1,0,0,0,696,697,1,0,0,0,697,698,5,66,
	0,0,698,43,1,0,0,0,699,701,5,50,0,0,700,702,7,2,0,0,701,700,1,0,0,0,701,
	702,1,0,0,0,702,703,1,0,0,0,703,707,5,145,0,0,704,705,5,80,0,0,705,706,
	5,102,0,0,706,708,5,70,0,0,707,704,1,0,0,0,707,708,1,0,0,0,708,712,1,0,
	0,0,709,710,3,182,91,0,710,711,5,2,0,0,711,713,1,0,0,0,712,709,1,0,0,0,
	712,713,1,0,0,0,713,714,1,0,0,0,714,726,3,198,99,0,715,716,5,3,0,0,716,
	721,3,188,94,0,717,718,5,5,0,0,718,720,3,188,94,0,719,717,1,0,0,0,720,723,
	1,0,0,0,721,719,1,0,0,0,721,722,1,0,0,0,722,724,1,0,0,0,723,721,1,0,0,0,
	724,725,5,4,0,0,725,727,1,0,0,0,726,715,1,0,0,0,726,727,1,0,0,0,727,728,
	1,0,0,0,728,729,5,33,0,0,729,730,3,86,43,0,730,45,1,0,0,0,731,732,5,50,
	0,0,732,733,5,146,0,0,733,737,5,132,0,0,734,735,5,80,0,0,735,736,5,102,
	0,0,736,738,5,70,0,0,737,734,1,0,0,0,737,738,1,0,0,0,738,742,1,0,0,0,739,
	740,3,182,91,0,740,741,5,2,0,0,741,743,1,0,0,0,742,739,1,0,0,0,742,743,
	1,0,0,0,743,744,1,0,0,0,744,745,3,184,92,0,745,746,5,142,0,0,746,758,3,
	200,100,0,747,748,5,3,0,0,748,753,3,172,86,0,749,750,5,5,0,0,750,752,3,
	172,86,0,751,749,1,0,0,0,752,755,1,0,0,0,753,751,1,0,0,0,753,754,1,0,0,
	0,754,756,1,0,0,0,755,753,1,0,0,0,756,757,5,4,0,0,757,759,1,0,0,0,758,747,
	1,0,0,0,758,759,1,0,0,0,759,47,1,0,0,0,760,762,5,149,0,0,761,763,5,116,
	0,0,762,761,1,0,0,0,762,763,1,0,0,0,763,764,1,0,0,0,764,765,3,50,25,0,765,
	766,5,33,0,0,766,767,5,3,0,0,767,768,3,86,43,0,768,778,5,4,0,0,769,770,
	5,5,0,0,770,771,3,50,25,0,771,772,5,33,0,0,772,773,5,3,0,0,773,774,3,86,
	43,0,774,775,5,4,0,0,775,777,1,0,0,0,776,769,1,0,0,0,777,780,1,0,0,0,778,
	776,1,0,0,0,778,779,1,0,0,0,779,49,1,0,0,0,780,778,1,0,0,0,781,793,3,184,
	92,0,782,783,5,3,0,0,783,788,3,188,94,0,784,785,5,5,0,0,785,787,3,188,94,
	0,786,784,1,0,0,0,787,790,1,0,0,0,788,786,1,0,0,0,788,789,1,0,0,0,789,791,
	1,0,0,0,790,788,1,0,0,0,791,792,5,4,0,0,792,794,1,0,0,0,793,782,1,0,0,0,
	793,794,1,0,0,0,794,51,1,0,0,0,795,796,3,50,25,0,796,797,5,33,0,0,797,798,
	5,3,0,0,798,799,3,164,82,0,799,801,5,139,0,0,800,802,5,29,0,0,801,800,1,
	0,0,0,801,802,1,0,0,0,802,803,1,0,0,0,803,804,3,166,83,0,804,805,5,4,0,
	0,805,53,1,0,0,0,806,818,3,184,92,0,807,808,5,3,0,0,808,813,3,188,94,0,
	809,810,5,5,0,0,810,812,3,188,94,0,811,809,1,0,0,0,812,815,1,0,0,0,813,
	811,1,0,0,0,813,814,1,0,0,0,814,816,1,0,0,0,815,813,1,0,0,0,816,817,5,4,
	0,0,817,819,1,0,0,0,818,807,1,0,0,0,818,819,1,0,0,0,819,820,1,0,0,0,820,
	821,5,33,0,0,821,822,5,3,0,0,822,823,3,86,43,0,823,824,5,4,0,0,824,55,1,
	0,0,0,825,827,3,48,24,0,826,825,1,0,0,0,826,827,1,0,0,0,827,828,1,0,0,0,
	828,829,5,59,0,0,829,830,5,75,0,0,830,833,3,114,57,0,831,832,5,148,0,0,
	832,834,3,64,32,0,833,831,1,0,0,0,833,834,1,0,0,0,834,836,1,0,0,0,835,837,
	3,76,38,0,836,835,1,0,0,0,836,837,1,0,0,0,837,57,1,0,0,0,838,840,3,48,24,
	0,839,838,1,0,0,0,839,840,1,0,0,0,840,841,1,0,0,0,841,842,5,59,0,0,842,
	843,5,75,0,0,843,846,3,114,57,0,844,845,5,148,0,0,845,847,3,64,32,0,846,
	844,1,0,0,0,846,847,1,0,0,0,847,849,1,0,0,0,848,850,3,76,38,0,849,848,1,
	0,0,0,849,850,1,0,0,0,850,855,1,0,0,0,851,853,3,136,68,0,852,851,1,0,0,
	0,852,853,1,0,0,0,853,854,1,0,0,0,854,856,3,138,69,0,855,852,1,0,0,0,855,
	856,1,0,0,0,856,59,1,0,0,0,857,859,5,61,0,0,858,860,5,55,0,0,859,858,1,
	0,0,0,859,860,1,0,0,0,860,861,1,0,0,0,861,862,3,182,91,0,862,61,1,0,0,0,
	863,864,5,63,0,0,864,867,7,9,0,0,865,866,5,80,0,0,866,868,5,70,0,0,867,
	865,1,0,0,0,867,868,1,0,0,0,868,872,1,0,0,0,869,870,3,182,91,0,870,871,
	5,2,0,0,871,873,1,0,0,0,872,869,1,0,0,0,872,873,1,0,0,0,873,874,1,0,0,0,
	874,875,3,224,112,0,875,63,1,0,0,0,876,877,6,32,-1,0,877,965,3,68,34,0,
	878,965,5,187,0,0,879,880,3,182,91,0,880,881,5,2,0,0,881,883,1,0,0,0,882,
	879,1,0,0,0,882,883,1,0,0,0,883,884,1,0,0,0,884,885,3,184,92,0,885,886,
	5,2,0,0,886,888,1,0,0,0,887,882,1,0,0,0,887,888,1,0,0,0,888,889,1,0,0,0,
	889,965,3,188,94,0,890,891,3,168,84,0,891,892,3,64,32,21,892,965,1,0,0,
	0,893,894,3,180,90,0,894,907,5,3,0,0,895,897,5,62,0,0,896,895,1,0,0,0,896,
	897,1,0,0,0,897,898,1,0,0,0,898,903,3,64,32,0,899,900,5,5,0,0,900,902,3,
	64,32,0,901,899,1,0,0,0,902,905,1,0,0,0,903,901,1,0,0,0,903,904,1,0,0,0,
	904,908,1,0,0,0,905,903,1,0,0,0,906,908,5,7,0,0,907,896,1,0,0,0,907,906,
	1,0,0,0,907,908,1,0,0,0,908,909,1,0,0,0,909,911,5,4,0,0,910,912,3,118,59,
	0,911,910,1,0,0,0,911,912,1,0,0,0,912,914,1,0,0,0,913,915,3,122,61,0,914,
	913,1,0,0,0,914,915,1,0,0,0,915,965,1,0,0,0,916,917,5,3,0,0,917,922,3,64,
	32,0,918,919,5,5,0,0,919,921,3,64,32,0,920,918,1,0,0,0,921,924,1,0,0,0,
	922,920,1,0,0,0,922,923,1,0,0,0,923,925,1,0,0,0,924,922,1,0,0,0,925,926,
	5,4,0,0,926,965,1,0,0,0,927,928,5,43,0,0,928,929,5,3,0,0,929,930,3,64,32,
	0,930,931,5,33,0,0,931,932,3,30,15,0,932,933,5,4,0,0,933,965,1,0,0,0,934,
	936,5,102,0,0,935,934,1,0,0,0,935,936,1,0,0,0,936,937,1,0,0,0,937,939,5,
	70,0,0,938,935,1,0,0,0,938,939,1,0,0,0,939,940,1,0,0,0,940,941,5,3,0,0,
	941,942,3,86,43,0,942,943,5,4,0,0,943,965,1,0,0,0,944,946,5,42,0,0,945,
	947,3,64,32,0,946,945,1,0,0,0,946,947,1,0,0,0,947,953,1,0,0,0,948,949,5,
	147,0,0,949,950,3,64,32,0,950,951,5,135,0,0,951,952,3,64,32,0,952,954,1,
	0,0,0,953,948,1,0,0,0,954,955,1,0,0,0,955,953,1,0,0,0,955,956,1,0,0,0,956,
	959,1,0,0,0,957,958,5,65,0,0,958,960,3,64,32,0,959,957,1,0,0,0,959,960,
	1,0,0,0,960,961,1,0,0,0,961,962,5,66,0,0,962,965,1,0,0,0,963,965,3,66,33,
	0,964,876,1,0,0,0,964,878,1,0,0,0,964,887,1,0,0,0,964,890,1,0,0,0,964,893,
	1,0,0,0,964,916,1,0,0,0,964,927,1,0,0,0,964,938,1,0,0,0,964,944,1,0,0,0,
	964,963,1,0,0,0,965,1085,1,0,0,0,966,967,10,20,0,0,967,968,5,11,0,0,968,
	1084,3,64,32,21,969,970,10,19,0,0,970,971,7,10,0,0,971,1084,3,64,32,20,
	972,973,10,18,0,0,973,974,7,4,0,0,974,1084,3,64,32,19,975,976,10,17,0,0,
	976,977,7,11,0,0,977,1084,3,64,32,18,978,979,10,16,0,0,979,980,7,12,0,0,
	980,1084,3,64,32,17,981,994,10,15,0,0,982,995,5,6,0,0,983,995,5,22,0,0,
	984,995,5,23,0,0,985,995,5,24,0,0,986,995,5,92,0,0,987,988,5,92,0,0,988,
	995,5,102,0,0,989,995,5,83,0,0,990,995,5,97,0,0,991,995,5,77,0,0,992,995,
	5,99,0,0,993,995,5,118,0,0,994,982,1,0,0,0,994,983,1,0,0,0,994,984,1,0,
	0,0,994,985,1,0,0,0,994,986,1,0,0,0,994,987,1,0,0,0,994,989,1,0,0,0,994,
	990,1,0,0,0,994,991,1,0,0,0,994,992,1,0,0,0,994,993,1,0,0,0,995,996,1,0,
	0,0,996,1084,3,64,32,16,997,998,10,14,0,0,998,999,5,32,0,0,999,1084,3,64,
	32,15,1000,1001,10,13,0,0,1001,1002,5,108,0,0,1002,1084,3,64,32,14,1003,
	1004,10,6,0,0,1004,1006,5,92,0,0,1005,1007,5,102,0,0,1006,1005,1,0,0,0,
	1006,1007,1,0,0,0,1007,1008,1,0,0,0,1008,1084,3,64,32,7,1009,1011,10,5,
	0,0,1010,1012,5,102,0,0,1011,1010,1,0,0,0,1011,1012,1,0,0,0,1012,1013,1,
	0,0,0,1013,1014,5,39,0,0,1014,1015,3,64,32,0,1015,1016,5,32,0,0,1016,1017,
	3,64,32,6,1017,1084,1,0,0,0,1018,1019,10,9,0,0,1019,1020,5,45,0,0,1020,
	1084,3,190,95,0,1021,1023,10,8,0,0,1022,1024,5,102,0,0,1023,1022,1,0,0,
	0,1023,1024,1,0,0,0,1024,1025,1,0,0,0,1025,1026,7,13,0,0,1026,1029,3,64,
	32,0,1027,1028,5,67,0,0,1028,1030,3,64,32,0,1029,1027,1,0,0,0,1029,1030,
	1,0,0,0,1030,1084,1,0,0,0,1031,1036,10,7,0,0,1032,1037,5,93,0,0,1033,1037,
	5,103,0,0,1034,1035,5,102,0,0,1035,1037,5,104,0,0,1036,1032,1,0,0,0,1036,
	1033,1,0,0,0,1036,1034,1,0,0,0,1037,1084,1,0,0,0,1038,1040,10,4,0,0,1039,
	1041,5,102,0,0,1040,1039,1,0,0,0,1040,1041,1,0,0,0,1041,1042,1,0,0,0,1042,
	1081,5,83,0,0,1043,1053,5,3,0,0,1044,1054,3,86,43,0,1045,1050,3,64,32,0,
	1046,1047,5,5,0,0,1047,1049,3,64,32,0,1048,1046,1,0,0,0,1049,1052,1,0,0,
	0,1050,1048,1,0,0,0,1050,1051,1,0,0,0,1051,1054,1,0,0,0,1052,1050,1,0,0,
	0,1053,1044,1,0,0,0,1053,1045,1,0,0,0,1053,1054,1,0,0,0,1054,1055,1,0,0,
	0,1055,1082,5,4,0,0,1056,1057,3,182,91,0,1057,1058,5,2,0,0,1058,1060,1,
	0,0,0,1059,1056,1,0,0,0,1059,1060,1,0,0,0,1060,1061,1,0,0,0,1061,1082,3,
	184,92,0,1062,1063,3,182,91,0,1063,1064,5,2,0,0,1064,1066,1,0,0,0,1065,
	1062,1,0,0,0,1065,1066,1,0,0,0,1066,1067,1,0,0,0,1067,1068,3,222,111,0,
	1068,1077,5,3,0,0,1069,1074,3,64,32,0,1070,1071,5,5,0,0,1071,1073,3,64,
	32,0,1072,1070,1,0,0,0,1073,1076,1,0,0,0,1074,1072,1,0,0,0,1074,1075,1,
	0,0,0,1075,1078,1,0,0,0,1076,1074,1,0,0,0,1077,1069,1,0,0,0,1077,1078,1,
	0,0,0,1078,1079,1,0,0,0,1079,1080,5,4,0,0,1080,1082,1,0,0,0,1081,1043,1,
	0,0,0,1081,1059,1,0,0,0,1081,1065,1,0,0,0,1082,1084,1,0,0,0,1083,966,1,
	0,0,0,1083,969,1,0,0,0,1083,972,1,0,0,0,1083,975,1,0,0,0,1083,978,1,0,0,
	0,1083,981,1,0,0,0,1083,997,1,0,0,0,1083,1000,1,0,0,0,1083,1003,1,0,0,0,
	1083,1009,1,0,0,0,1083,1018,1,0,0,0,1083,1021,1,0,0,0,1083,1031,1,0,0,0,
	1083,1038,1,0,0,0,1084,1087,1,0,0,0,1085,1083,1,0,0,0,1085,1086,1,0,0,0,
	1086,65,1,0,0,0,1087,1085,1,0,0,0,1088,1089,5,115,0,0,1089,1094,5,3,0,0,
	1090,1095,5,81,0,0,1091,1092,7,14,0,0,1092,1093,5,5,0,0,1093,1095,3,170,
	85,0,1094,1090,1,0,0,0,1094,1091,1,0,0,0,1095,1096,1,0,0,0,1096,1097,5,
	4,0,0,1097,67,1,0,0,0,1098,1099,7,15,0,0,1099,69,1,0,0,0,1100,1101,5,3,
	0,0,1101,1106,3,64,32,0,1102,1103,5,5,0,0,1103,1105,3,64,32,0,1104,1102,
	1,0,0,0,1105,1108,1,0,0,0,1106,1104,1,0,0,0,1106,1107,1,0,0,0,1107,1109,
	1,0,0,0,1108,1106,1,0,0,0,1109,1110,5,4,0,0,1110,71,1,0,0,0,1111,1112,5,
	144,0,0,1112,1117,3,70,35,0,1113,1114,5,5,0,0,1114,1116,3,70,35,0,1115,
	1113,1,0,0,0,1116,1119,1,0,0,0,1117,1115,1,0,0,0,1117,1118,1,0,0,0,1118,
	73,1,0,0,0,1119,1117,1,0,0,0,1120,1122,3,48,24,0,1121,1120,1,0,0,0,1121,
	1122,1,0,0,0,1122,1128,1,0,0,0,1123,1129,5,88,0,0,1124,1129,5,122,0,0,1125,
	1126,5,88,0,0,1126,1127,5,108,0,0,1127,1129,7,8,0,0,1128,1123,1,0,0,0,1128,
	1124,1,0,0,0,1128,1125,1,0,0,0,1129,1130,1,0,0,0,1130,1134,5,91,0,0,1131,
	1132,3,182,91,0,1132,1133,5,2,0,0,1133,1135,1,0,0,0,1134,1131,1,0,0,0,1134,
	1135,1,0,0,0,1135,1136,1,0,0,0,1136,1139,3,184,92,0,1137,1138,5,33,0,0,
	1138,1140,3,206,103,0,1139,1137,1,0,0,0,1139,1140,1,0,0,0,1140,1152,1,0,
	0,0,1141,1142,5,3,0,0,1142,1147,3,188,94,0,1143,1144,5,5,0,0,1144,1146,
	3,188,94,0,1145,1143,1,0,0,0,1146,1149,1,0,0,0,1147,1145,1,0,0,0,1147,1148,
	1,0,0,0,1148,1150,1,0,0,0,1149,1147,1,0,0,0,1150,1151,5,4,0,0,1151,1153,
	1,0,0,0,1152,1141,1,0,0,0,1152,1153,1,0,0,0,1153,1163,1,0,0,0,1154,1157,
	3,72,36,0,1155,1157,3,86,43,0,1156,1154,1,0,0,0,1156,1155,1,0,0,0,1157,
	1159,1,0,0,0,1158,1160,3,78,39,0,1159,1158,1,0,0,0,1159,1160,1,0,0,0,1160,
	1164,1,0,0,0,1161,1162,5,56,0,0,1162,1164,5,144,0,0,1163,1156,1,0,0,0,1163,
	1161,1,0,0,0,1164,1166,1,0,0,0,1165,1167,3,76,38,0,1166,1165,1,0,0,0,1166,
	1167,1,0,0,0,1167,75,1,0,0,0,1168,1169,5,124,0,0,1169,1174,3,100,50,0,1170,
	1171,5,5,0,0,1171,1173,3,100,50,0,1172,1170,1,0,0,0,1173,1176,1,0,0,0,1174,
	1172,1,0,0,0,1174,1175,1,0,0,0,1175,77,1,0,0,0,1176,1174,1,0,0,0,1177,1178,
	5,107,0,0,1178,1193,5,48,0,0,1179,1180,5,3,0,0,1180,1185,3,24,12,0,1181,
	1182,5,5,0,0,1182,1184,3,24,12,0,1183,1181,1,0,0,0,1184,1187,1,0,0,0,1185,
	1183,1,0,0,0,1185,1186,1,0,0,0,1186,1188,1,0,0,0,1187,1185,1,0,0,0,1188,
	1191,5,4,0,0,1189,1190,5,148,0,0,1190,1192,3,64,32,0,1191,1189,1,0,0,0,
	1191,1192,1,0,0,0,1192,1194,1,0,0,0,1193,1179,1,0,0,0,1193,1194,1,0,0,0,
	1194,1195,1,0,0,0,1195,1222,5,183,0,0,1196,1223,5,184,0,0,1197,1198,5,141,
	0,0,1198,1201,5,131,0,0,1199,1202,3,188,94,0,1200,1202,3,110,55,0,1201,
	1199,1,0,0,0,1201,1200,1,0,0,0,1202,1203,1,0,0,0,1203,1204,5,6,0,0,1204,
	1215,3,64,32,0,1205,1208,5,5,0,0,1206,1209,3,188,94,0,1207,1209,3,110,55,
	0,1208,1206,1,0,0,0,1208,1207,1,0,0,0,1209,1210,1,0,0,0,1210,1211,5,6,0,
	0,1211,1212,3,64,32,0,1212,1214,1,0,0,0,1213,1205,1,0,0,0,1214,1217,1,0,
	0,0,1215,1213,1,0,0,0,1215,1216,1,0,0,0,1216,1220,1,0,0,0,1217,1215,1,0,
	0,0,1218,1219,5,148,0,0,1219,1221,3,64,32,0,1220,1218,1,0,0,0,1220,1221,
	1,0,0,0,1221,1223,1,0,0,0,1222,1196,1,0,0,0,1222,1197,1,0,0,0,1223,79,1,
	0,0,0,1224,1228,5,112,0,0,1225,1226,3,182,91,0,1226,1227,5,2,0,0,1227,1229,
	1,0,0,0,1228,1225,1,0,0,0,1228,1229,1,0,0,0,1229,1230,1,0,0,0,1230,1237,
	3,202,101,0,1231,1232,5,6,0,0,1232,1238,3,82,41,0,1233,1234,5,3,0,0,1234,
	1235,3,82,41,0,1235,1236,5,4,0,0,1236,1238,1,0,0,0,1237,1231,1,0,0,0,1237,
	1233,1,0,0,0,1237,1238,1,0,0,0,1238,81,1,0,0,0,1239,1243,3,34,17,0,1240,
	1243,3,178,89,0,1241,1243,5,188,0,0,1242,1239,1,0,0,0,1242,1240,1,0,0,0,
	1242,1241,1,0,0,0,1243,83,1,0,0,0,1244,1255,5,119,0,0,1245,1256,3,190,95,
	0,1246,1247,3,182,91,0,1247,1248,5,2,0,0,1248,1250,1,0,0,0,1249,1246,1,
	0,0,0,1249,1250,1,0,0,0,1250,1253,1,0,0,0,1251,1254,3,184,92,0,1252,1254,
	3,194,97,0,1253,1251,1,0,0,0,1253,1252,1,0,0,0,1254,1256,1,0,0,0,1255,1245,
	1,0,0,0,1255,1249,1,0,0,0,1255,1256,1,0,0,0,1256,85,1,0,0,0,1257,1259,3,
	134,67,0,1258,1257,1,0,0,0,1258,1259,1,0,0,0,1259,1260,1,0,0,0,1260,1266,
	3,90,45,0,1261,1262,3,106,53,0,1262,1263,3,90,45,0,1263,1265,1,0,0,0,1264,
	1261,1,0,0,0,1265,1268,1,0,0,0,1266,1264,1,0,0,0,1266,1267,1,0,0,0,1267,
	1270,1,0,0,0,1268,1266,1,0,0,0,1269,1271,3,136,68,0,1270,1269,1,0,0,0,1270,
	1271,1,0,0,0,1271,1273,1,0,0,0,1272,1274,3,138,69,0,1273,1272,1,0,0,0,1273,
	1274,1,0,0,0,1274,87,1,0,0,0,1275,1283,3,98,49,0,1276,1277,3,102,51,0,1277,
	1279,3,98,49,0,1278,1280,3,104,52,0,1279,1278,1,0,0,0,1279,1280,1,0,0,0,
	1280,1282,1,0,0,0,1281,1276,1,0,0,0,1282,1285,1,0,0,0,1283,1281,1,0,0,0,
	1283,1284,1,0,0,0,1284,89,1,0,0,0,1285,1283,1,0,0,0,1286,1288,5,130,0,0,
	1287,1289,7,16,0,0,1288,1287,1,0,0,0,1288,1289,1,0,0,0,1289,1290,1,0,0,
	0,1290,1295,3,100,50,0,1291,1292,5,5,0,0,1292,1294,3,100,50,0,1293,1291,
	1,0,0,0,1294,1297,1,0,0,0,1295,1293,1,0,0,0,1295,1296,1,0,0,0,1296,1310,
	1,0,0,0,1297,1295,1,0,0,0,1298,1308,5,75,0,0,1299,1304,3,98,49,0,1300,1301,
	5,5,0,0,1301,1303,3,98,49,0,1302,1300,1,0,0,0,1303,1306,1,0,0,0,1304,1302,
	1,0,0,0,1304,1305,1,0,0,0,1305,1309,1,0,0,0,1306,1304,1,0,0,0,1307,1309,
	3,88,44,0,1308,1299,1,0,0,0,1308,1307,1,0,0,0,1309,1311,1,0,0,0,1310,1298,
	1,0,0,0,1310,1311,1,0,0,0,1311,1314,1,0,0,0,1312,1313,5,148,0,0,1313,1315,
	3,64,32,0,1314,1312,1,0,0,0,1314,1315,1,0,0,0,1315,1330,1,0,0,0,1316,1317,
	5,78,0,0,1317,1318,5,40,0,0,1318,1323,3,64,32,0,1319,1320,5,5,0,0,1320,
	1322,3,64,32,0,1321,1319,1,0,0,0,1322,1325,1,0,0,0,1323,1321,1,0,0,0,1323,
	1324,1,0,0,0,1324,1328,1,0,0,0,1325,1323,1,0,0,0,1326,1327,5,79,0,0,1327,
	1329,3,64,32,0,1328,1326,1,0,0,0,1328,1329,1,0,0,0,1329,1331,1,0,0,0,1330,
	1316,1,0,0,0,1330,1331,1,0,0,0,1331,1346,1,0,0,0,1332,1333,5,174,0,0,1333,
	1334,3,210,105,0,1334,1335,5,33,0,0,1335,1343,3,120,60,0,1336,1337,5,5,
	0,0,1337,1338,3,210,105,0,1338,1339,5,33,0,0,1339,1340,3,120,60,0,1340,
	1342,1,0,0,0,1341,1336,1,0,0,0,1342,1345,1,0,0,0,1343,1341,1,0,0,0,1343,
	1344,1,0,0,0,1344,1347,1,0,0,0,1345,1343,1,0,0,0,1346,1332,1,0,0,0,1346,
	1347,1,0,0,0,1347,1350,1,0,0,0,1348,1350,3,72,36,0,1349,1286,1,0,0,0,1349,
	1348,1,0,0,0,1350,91,1,0,0,0,1351,1352,3,86,43,0,1352,93,1,0,0,0,1353,1355,
	3,134,67,0,1354,1353,1,0,0,0,1354,1355,1,0,0,0,1355,1356,1,0,0,0,1356,1358,
	3,90,45,0,1357,1359,3,136,68,0,1358,1357,1,0,0,0,1358,1359,1,0,0,0,1359,
	1361,1,0,0,0,1360,1362,3,138,69,0,1361,1360,1,0,0,0,1361,1362,1,0,0,0,1362,
	95,1,0,0,0,1363,1365,3,134,67,0,1364,1363,1,0,0,0,1364,1365,1,0,0,0,1365,
	1366,1,0,0,0,1366,1376,3,90,45,0,1367,1369,5,139,0,0,1368,1370,5,29,0,0,
	1369,1368,1,0,0,0,1369,1370,1,0,0,0,1370,1374,1,0,0,0,1371,1374,5,90,0,
	0,1372,1374,5,68,0,0,1373,1367,1,0,0,0,1373,1371,1,0,0,0,1373,1372,1,0,
	0,0,1374,1375,1,0,0,0,1375,1377,3,90,45,0,1376,1373,1,0,0,0,1377,1378,1,
	0,0,0,1378,1376,1,0,0,0,1378,1379,1,0,0,0,1379,1381,1,0,0,0,1380,1382,3,
	136,68,0,1381,1380,1,0,0,0,1381,1382,1,0,0,0,1382,1384,1,0,0,0,1383,1385,
	3,138,69,0,1384,1383,1,0,0,0,1384,1385,1,0,0,0,1385,97,1,0,0,0,1386,1387,
	3,182,91,0,1387,1388,5,2,0,0,1388,1390,1,0,0,0,1389,1386,1,0,0,0,1389,1390,
	1,0,0,0,1390,1391,1,0,0,0,1391,1396,3,184,92,0,1392,1394,5,33,0,0,1393,
	1392,1,0,0,0,1393,1394,1,0,0,0,1394,1395,1,0,0,0,1395,1397,3,206,103,0,
	1396,1393,1,0,0,0,1396,1397,1,0,0,0,1397,1403,1,0,0,0,1398,1399,5,85,0,
	0,1399,1400,5,40,0,0,1400,1404,3,194,97,0,1401,1402,5,102,0,0,1402,1404,
	5,85,0,0,1403,1398,1,0,0,0,1403,1401,1,0,0,0,1403,1404,1,0,0,0,1404,1451,
	1,0,0,0,1405,1406,3,182,91,0,1406,1407,5,2,0,0,1407,1409,1,0,0,0,1408,1405,
	1,0,0,0,1408,1409,1,0,0,0,1409,1410,1,0,0,0,1410,1411,3,222,111,0,1411,
	1412,5,3,0,0,1412,1417,3,64,32,0,1413,1414,5,5,0,0,1414,1416,3,64,32,0,
	1415,1413,1,0,0,0,1416,1419,1,0,0,0,1417,1415,1,0,0,0,1417,1418,1,0,0,0,
	1418,1420,1,0,0,0,1419,1417,1,0,0,0,1420,1425,5,4,0,0,1421,1423,5,33,0,
	0,1422,1421,1,0,0,0,1422,1423,1,0,0,0,1423,1424,1,0,0,0,1424,1426,3,206,
	103,0,1425,1422,1,0,0,0,1425,1426,1,0,0,0,1426,1451,1,0,0,0,1427,1437,5,
	3,0,0,1428,1433,3,98,49,0,1429,1430,5,5,0,0,1430,1432,3,98,49,0,1431,1429,
	1,0,0,0,1432,1435,1,0,0,0,1433,1431,1,0,0,0,1433,1434,1,0,0,0,1434,1438,
	1,0,0,0,1435,1433,1,0,0,0,1436,1438,3,88,44,0,1437,1428,1,0,0,0,1437,1436,
	1,0,0,0,1438,1439,1,0,0,0,1439,1440,5,4,0,0,1440,1451,1,0,0,0,1441,1442,
	5,3,0,0,1442,1443,3,86,43,0,1443,1448,5,4,0,0,1444,1446,5,33,0,0,1445,1444,
	1,0,0,0,1445,1446,1,0,0,0,1446,1447,1,0,0,0,1447,1449,3,206,103,0,1448,
	1445,1,0,0,0,1448,1449,1,0,0,0,1449,1451,1,0,0,0,1450,1389,1,0,0,0,1450,
	1408,1,0,0,0,1450,1427,1,0,0,0,1450,1441,1,0,0,0,1451,99,1,0,0,0,1452,1465,
	5,7,0,0,1453,1454,3,184,92,0,1454,1455,5,2,0,0,1455,1456,5,7,0,0,1456,1465,
	1,0,0,0,1457,1462,3,64,32,0,1458,1460,5,33,0,0,1459,1458,1,0,0,0,1459,1460,
	1,0,0,0,1460,1461,1,0,0,0,1461,1463,3,174,87,0,1462,1459,1,0,0,0,1462,1463,
	1,0,0,0,1463,1465,1,0,0,0,1464,1452,1,0,0,0,1464,1453,1,0,0,0,1464,1457,
	1,0,0,0,1465,101,1,0,0,0,1466,1480,5,5,0,0,1467,1469,5,100,0,0,1468,1467,
	1,0,0,0,1468,1469,1,0,0,0,1469,1476,1,0,0,0,1470,1472,5,96,0,0,1471,1473,
	5,110,0,0,1472,1471,1,0,0,0,1472,1473,1,0,0,0,1473,1477,1,0,0,0,1474,1477,
	5,87,0,0,1475,1477,5,51,0,0,1476,1470,1,0,0,0,1476,1474,1,0,0,0,1476,1475,
	1,0,0,0,1476,1477,1,0,0,0,1477,1478,1,0,0,0,1478,1480,5,94,0,0,1479,1466,
	1,0,0,0,1479,1468,1,0,0,0,1480,103,1,0,0,0,1481,1482,5,107,0,0,1482,1496,
	3,64,32,0,1483,1484,5,142,0,0,1484,1485,5,3,0,0,1485,1490,3,188,94,0,1486,
	1487,5,5,0,0,1487,1489,3,188,94,0,1488,1486,1,0,0,0,1489,1492,1,0,0,0,1490,
	1488,1,0,0,0,1490,1491,1,0,0,0,1491,1493,1,0,0,0,1492,1490,1,0,0,0,1493,
	1494,5,4,0,0,1494,1496,1,0,0,0,1495,1481,1,0,0,0,1495,1483,1,0,0,0,1496,
	105,1,0,0,0,1497,1499,5,139,0,0,1498,1500,5,29,0,0,1499,1498,1,0,0,0,1499,
	1500,1,0,0,0,1500,1504,1,0,0,0,1501,1504,5,90,0,0,1502,1504,5,68,0,0,1503,
	1497,1,0,0,0,1503,1501,1,0,0,0,1503,1502,1,0,0,0,1504,107,1,0,0,0,1505,
	1507,3,48,24,0,1506,1505,1,0,0,0,1506,1507,1,0,0,0,1507,1508,1,0,0,0,1508,
	1511,5,141,0,0,1509,1510,5,108,0,0,1510,1512,7,8,0,0,1511,1509,1,0,0,0,
	1511,1512,1,0,0,0,1512,1513,1,0,0,0,1513,1514,3,114,57,0,1514,1517,5,131,
	0,0,1515,1518,3,188,94,0,1516,1518,3,110,55,0,1517,1515,1,0,0,0,1517,1516,
	1,0,0,0,1518,1519,1,0,0,0,1519,1520,5,6,0,0,1520,1531,3,64,32,0,1521,1524,
	5,5,0,0,1522,1525,3,188,94,0,1523,1525,3,110,55,0,1524,1522,1,0,0,0,1524,
	1523,1,0,0,0,1525,1526,1,0,0,0,1526,1527,5,6,0,0,1527,1528,3,64,32,0,1528,
	1530,1,0,0,0,1529,1521,1,0,0,0,1530,1533,1,0,0,0,1531,1529,1,0,0,0,1531,
	1532,1,0,0,0,1532,1546,1,0,0,0,1533,1531,1,0,0,0,1534,1544,5,75,0,0,1535,
	1540,3,98,49,0,1536,1537,5,5,0,0,1537,1539,3,98,49,0,1538,1536,1,0,0,0,
	1539,1542,1,0,0,0,1540,1538,1,0,0,0,1540,1541,1,0,0,0,1541,1545,1,0,0,0,
	1542,1540,1,0,0,0,1543,1545,3,88,44,0,1544,1535,1,0,0,0,1544,1543,1,0,0,
	0,1545,1547,1,0,0,0,1546,1534,1,0,0,0,1546,1547,1,0,0,0,1547,1550,1,0,0,
	0,1548,1549,5,148,0,0,1549,1551,3,64,32,0,1550,1548,1,0,0,0,1550,1551,1,
	0,0,0,1551,1553,1,0,0,0,1552,1554,3,76,38,0,1553,1552,1,0,0,0,1553,1554,
	1,0,0,0,1554,109,1,0,0,0,1555,1556,5,3,0,0,1556,1561,3,188,94,0,1557,1558,
	5,5,0,0,1558,1560,3,188,94,0,1559,1557,1,0,0,0,1560,1563,1,0,0,0,1561,1559,
	1,0,0,0,1561,1562,1,0,0,0,1562,1564,1,0,0,0,1563,1561,1,0,0,0,1564,1565,
	5,4,0,0,1565,111,1,0,0,0,1566,1568,3,48,24,0,1567,1566,1,0,0,0,1567,1568,
	1,0,0,0,1568,1569,1,0,0,0,1569,1572,5,141,0,0,1570,1571,5,108,0,0,1571,
	1573,7,8,0,0,1572,1570,1,0,0,0,1572,1573,1,0,0,0,1573,1574,1,0,0,0,1574,
	1575,3,114,57,0,1575,1578,5,131,0,0,1576,1579,3,188,94,0,1577,1579,3,110,
	55,0,1578,1576,1,0,0,0,1578,1577,1,0,0,0,1579,1580,1,0,0,0,1580,1581,5,
	6,0,0,1581,1592,3,64,32,0,1582,1585,5,5,0,0,1583,1586,3,188,94,0,1584,1586,
	3,110,55,0,1585,1583,1,0,0,0,1585,1584,1,0,0,0,1586,1587,1,0,0,0,1587,1588,
	5,6,0,0,1588,1589,3,64,32,0,1589,1591,1,0,0,0,1590,1582,1,0,0,0,1591,1594,
	1,0,0,0,1592,1590,1,0,0,0,1592,1593,1,0,0,0,1593,1597,1,0,0,0,1594,1592,
	1,0,0,0,1595,1596,5,148,0,0,1596,1598,3,64,32,0,1597,1595,1,0,0,0,1597,
	1598,1,0,0,0,1598,1600,1,0,0,0,1599,1601,3,76,38,0,1600,1599,1,0,0,0,1600,
	1601,1,0,0,0,1601,1606,1,0,0,0,1602,1604,3,136,68,0,1603,1602,1,0,0,0,1603,
	1604,1,0,0,0,1604,1605,1,0,0,0,1605,1607,3,138,69,0,1606,1603,1,0,0,0,1606,
	1607,1,0,0,0,1607,113,1,0,0,0,1608,1609,3,182,91,0,1609,1610,5,2,0,0,1610,
	1612,1,0,0,0,1611,1608,1,0,0,0,1611,1612,1,0,0,0,1612,1613,1,0,0,0,1613,
	1616,3,184,92,0,1614,1615,5,33,0,0,1615,1617,3,212,106,0,1616,1614,1,0,
	0,0,1616,1617,1,0,0,0,1617,1623,1,0,0,0,1618,1619,5,85,0,0,1619,1620,5,
	40,0,0,1620,1624,3,194,97,0,1621,1622,5,102,0,0,1622,1624,5,85,0,0,1623,
	1618,1,0,0,0,1623,1621,1,0,0,0,1623,1624,1,0,0,0,1624,115,1,0,0,0,1625,
	1627,5,143,0,0,1626,1628,3,182,91,0,1627,1626,1,0,0,0,1627,1628,1,0,0,0,
	1628,1631,1,0,0,0,1629,1630,5,91,0,0,1630,1632,3,214,107,0,1631,1629,1,
	0,0,0,1631,1632,1,0,0,0,1632,117,1,0,0,0,1633,1634,5,178,0,0,1634,1635,
	5,3,0,0,1635,1636,5,148,0,0,1636,1637,3,64,32,0,1637,1638,5,4,0,0,1638,
	119,1,0,0,0,1639,1641,5,3,0,0,1640,1642,3,216,108,0,1641,1640,1,0,0,0,1641,
	1642,1,0,0,0,1642,1653,1,0,0,0,1643,1644,5,153,0,0,1644,1645,5,40,0,0,1645,
	1650,3,64,32,0,1646,1647,5,5,0,0,1647,1649,3,64,32,0,1648,1646,1,0,0,0,
	1649,1652,1,0,0,0,1650,1648,1,0,0,0,1650,1651,1,0,0,0,1651,1654,1,0,0,0,
	1652,1650,1,0,0,0,1653,1643,1,0,0,0,1653,1654,1,0,0,0,1654,1655,1,0,0,0,
	1655,1656,5,109,0,0,1656,1657,5,40,0,0,1657,1662,3,140,70,0,1658,1659,5,
	5,0,0,1659,1661,3,140,70,0,1660,1658,1,0,0,0,1661,1664,1,0,0,0,1662,1660,
	1,0,0,0,1662,1663,1,0,0,0,1663,1666,1,0,0,0,1664,1662,1,0,0,0,1665,1667,
	3,124,62,0,1666,1665,1,0,0,0,1666,1667,1,0,0,0,1667,1668,1,0,0,0,1668,1669,
	5,4,0,0,1669,121,1,0,0,0,1670,1704,5,152,0,0,1671,1705,3,210,105,0,1672,
	1674,5,3,0,0,1673,1675,3,216,108,0,1674,1673,1,0,0,0,1674,1675,1,0,0,0,
	1675,1686,1,0,0,0,1676,1677,5,153,0,0,1677,1678,5,40,0,0,1678,1683,3,64,
	32,0,1679,1680,5,5,0,0,1680,1682,3,64,32,0,1681,1679,1,0,0,0,1682,1685,
	1,0,0,0,1683,1681,1,0,0,0,1683,1684,1,0,0,0,1684,1687,1,0,0,0,1685,1683,
	1,0,0,0,1686,1676,1,0,0,0,1686,1687,1,0,0,0,1687,1698,1,0,0,0,1688,1689,
	5,109,0,0,1689,1690,5,40,0,0,1690,1695,3,140,70,0,1691,1692,5,5,0,0,1692,
	1694,3,140,70,0,1693,1691,1,0,0,0,1694,1697,1,0,0,0,1695,1693,1,0,0,0,1695,
	1696,1,0,0,0,1696,1699,1,0,0,0,1697,1695,1,0,0,0,1698,1688,1,0,0,0,1698,
	1699,1,0,0,0,1699,1701,1,0,0,0,1700,1702,3,124,62,0,1701,1700,1,0,0,0,1701,
	1702,1,0,0,0,1702,1703,1,0,0,0,1703,1705,5,4,0,0,1704,1671,1,0,0,0,1704,
	1672,1,0,0,0,1705,123,1,0,0,0,1706,1716,3,126,63,0,1707,1714,5,180,0,0,
	1708,1709,5,101,0,0,1709,1715,5,182,0,0,1710,1711,5,157,0,0,1711,1715,5,
	127,0,0,1712,1715,5,78,0,0,1713,1715,5,181,0,0,1714,1708,1,0,0,0,1714,1710,
	1,0,0,0,1714,1712,1,0,0,0,1714,1713,1,0,0,0,1715,1717,1,0,0,0,1716,1707,
	1,0,0,0,1716,1717,1,0,0,0,1717,125,1,0,0,0,1718,1725,7,17,0,0,1719,1726,
	3,148,74,0,1720,1721,5,39,0,0,1721,1722,3,144,72,0,1722,1723,5,32,0,0,1723,
	1724,3,146,73,0,1724,1726,1,0,0,0,1725,1719,1,0,0,0,1725,1720,1,0,0,0,1726,
	127,1,0,0,0,1727,1728,3,218,109,0,1728,1738,5,3,0,0,1729,1734,3,64,32,0,
	1730,1731,5,5,0,0,1731,1733,3,64,32,0,1732,1730,1,0,0,0,1733,1736,1,0,0,
	0,1734,1732,1,0,0,0,1734,1735,1,0,0,0,1735,1739,1,0,0,0,1736,1734,1,0,0,
	0,1737,1739,5,7,0,0,1738,1729,1,0,0,0,1738,1737,1,0,0,0,1739,1740,1,0,0,
	0,1740,1741,5,4,0,0,1741,129,1,0,0,0,1742,1743,3,220,110,0,1743,1756,5,
	3,0,0,1744,1746,5,62,0,0,1745,1744,1,0,0,0,1745,1746,1,0,0,0,1746,1747,
	1,0,0,0,1747,1752,3,64,32,0,1748,1749,5,5,0,0,1749,1751,3,64,32,0,1750,
	1748,1,0,0,0,1751,1754,1,0,0,0,1752,1750,1,0,0,0,1752,1753,1,0,0,0,1753,
	1757,1,0,0,0,1754,1752,1,0,0,0,1755,1757,5,7,0,0,1756,1745,1,0,0,0,1756,
	1755,1,0,0,0,1756,1757,1,0,0,0,1757,1758,1,0,0,0,1758,1760,5,4,0,0,1759,
	1761,3,118,59,0,1760,1759,1,0,0,0,1760,1761,1,0,0,0,1761,131,1,0,0,0,1762,
	1763,3,150,75,0,1763,1773,5,3,0,0,1764,1769,3,64,32,0,1765,1766,5,5,0,0,
	1766,1768,3,64,32,0,1767,1765,1,0,0,0,1768,1771,1,0,0,0,1769,1767,1,0,0,
	0,1769,1770,1,0,0,0,1770,1774,1,0,0,0,1771,1769,1,0,0,0,1772,1774,5,7,0,
	0,1773,1764,1,0,0,0,1773,1772,1,0,0,0,1773,1774,1,0,0,0,1774,1775,1,0,0,
	0,1775,1777,5,4,0,0,1776,1778,3,118,59,0,1777,1776,1,0,0,0,1777,1778,1,
	0,0,0,1778,1779,1,0,0,0,1779,1782,5,152,0,0,1780,1783,3,120,60,0,1781,1783,
	3,210,105,0,1782,1780,1,0,0,0,1782,1781,1,0,0,0,1783,133,1,0,0,0,1784,1786,
	5,149,0,0,1785,1787,5,116,0,0,1786,1785,1,0,0,0,1786,1787,1,0,0,0,1787,
	1788,1,0,0,0,1788,1793,3,54,27,0,1789,1790,5,5,0,0,1790,1792,3,54,27,0,
	1791,1789,1,0,0,0,1792,1795,1,0,0,0,1793,1791,1,0,0,0,1793,1794,1,0,0,0,
	1794,135,1,0,0,0,1795,1793,1,0,0,0,1796,1797,5,109,0,0,1797,1798,5,40,0,
	0,1798,1803,3,140,70,0,1799,1800,5,5,0,0,1800,1802,3,140,70,0,1801,1799,
	1,0,0,0,1802,1805,1,0,0,0,1803,1801,1,0,0,0,1803,1804,1,0,0,0,1804,137,
	1,0,0,0,1805,1803,1,0,0,0,1806,1807,5,98,0,0,1807,1810,3,64,32,0,1808,1809,
	7,18,0,0,1809,1811,3,64,32,0,1810,1808,1,0,0,0,1810,1811,1,0,0,0,1811,139,
	1,0,0,0,1812,1815,3,64,32,0,1813,1814,5,45,0,0,1814,1816,3,190,95,0,1815,
	1813,1,0,0,0,1815,1816,1,0,0,0,1816,1818,1,0,0,0,1817,1819,3,142,71,0,1818,
	1817,1,0,0,0,1818,1819,1,0,0,0,1819,1822,1,0,0,0,1820,1821,5,175,0,0,1821,
	1823,7,19,0,0,1822,1820,1,0,0,0,1822,1823,1,0,0,0,1823,141,1,0,0,0,1824,
	1825,7,20,0,0,1825,143,1,0,0,0,1826,1827,3,64,32,0,1827,1828,5,155,0,0,
	1828,1837,1,0,0,0,1829,1830,3,64,32,0,1830,1831,5,158,0,0,1831,1837,1,0,
	0,0,1832,1833,5,157,0,0,1833,1837,5,127,0,0,1834,1835,5,156,0,0,1835,1837,
	5,155,0,0,1836,1826,1,0,0,0,1836,1829,1,0,0,0,1836,1832,1,0,0,0,1836,1834,
	1,0,0,0,1837,145,1,0,0,0,1838,1839,3,64,32,0,1839,1840,5,155,0,0,1840,1849,
	1,0,0,0,1841,1842,3,64,32,0,1842,1843,5,158,0,0,1843,1849,1,0,0,0,1844,
	1845,5,157,0,0,1845,1849,5,127,0,0,1846,1847,5,156,0,0,1847,1849,5,158,
	0,0,1848,1838,1,0,0,0,1848,1841,1,0,0,0,1848,1844,1,0,0,0,1848,1846,1,0,
	0,0,1849,147,1,0,0,0,1850,1851,3,64,32,0,1851,1852,5,155,0,0,1852,1858,
	1,0,0,0,1853,1854,5,156,0,0,1854,1858,5,155,0,0,1855,1856,5,157,0,0,1856,
	1858,5,127,0,0,1857,1850,1,0,0,0,1857,1853,1,0,0,0,1857,1855,1,0,0,0,1858,
	149,1,0,0,0,1859,1860,7,21,0,0,1860,1861,5,3,0,0,1861,1862,3,64,32,0,1862,
	1863,5,4,0,0,1863,1864,5,152,0,0,1864,1866,5,3,0,0,1865,1867,3,156,78,0,
	1866,1865,1,0,0,0,1866,1867,1,0,0,0,1867,1868,1,0,0,0,1868,1870,3,160,80,
	0,1869,1871,3,126,63,0,1870,1869,1,0,0,0,1870,1871,1,0,0,0,1871,1872,1,
	0,0,0,1872,1873,5,4,0,0,1873,1945,1,0,0,0,1874,1875,7,22,0,0,1875,1876,
	5,3,0,0,1876,1877,5,4,0,0,1877,1878,5,152,0,0,1878,1880,5,3,0,0,1879,1881,
	3,156,78,0,1880,1879,1,0,0,0,1880,1881,1,0,0,0,1881,1883,1,0,0,0,1882,1884,
	3,158,79,0,1883,1882,1,0,0,0,1883,1884,1,0,0,0,1884,1885,1,0,0,0,1885,1945,
	5,4,0,0,1886,1887,7,23,0,0,1887,1888,5,3,0,0,1888,1889,5,4,0,0,1889,1890,
	5,152,0,0,1890,1892,5,3,0,0,1891,1893,3,156,78,0,1892,1891,1,0,0,0,1892,
	1893,1,0,0,0,1893,1894,1,0,0,0,1894,1895,3,160,80,0,1895,1896,5,4,0,0,1896,
	1945,1,0,0,0,1897,1898,7,24,0,0,1898,1899,5,3,0,0,1899,1901,3,64,32,0,1900,
	1902,3,152,76,0,1901,1900,1,0,0,0,1901,1902,1,0,0,0,1902,1904,1,0,0,0,1903,
	1905,3,154,77,0,1904,1903,1,0,0,0,1904,1905,1,0,0,0,1905,1906,1,0,0,0,1906,
	1907,5,4,0,0,1907,1908,5,152,0,0,1908,1910,5,3,0,0,1909,1911,3,156,78,0,
	1910,1909,1,0,0,0,1910,1911,1,0,0,0,1911,1912,1,0,0,0,1912,1913,3,160,80,
	0,1913,1914,5,4,0,0,1914,1945,1,0,0,0,1915,1916,5,164,0,0,1916,1917,5,3,
	0,0,1917,1918,3,64,32,0,1918,1919,5,5,0,0,1919,1920,3,34,17,0,1920,1921,
	5,4,0,0,1921,1922,5,152,0,0,1922,1924,5,3,0,0,1923,1925,3,156,78,0,1924,
	1923,1,0,0,0,1924,1925,1,0,0,0,1925,1926,1,0,0,0,1926,1928,3,160,80,0,1927,
	1929,3,126,63,0,1928,1927,1,0,0,0,1928,1929,1,0,0,0,1929,1930,1,0,0,0,1930,
	1931,5,4,0,0,1931,1945,1,0,0,0,1932,1933,5,165,0,0,1933,1934,5,3,0,0,1934,
	1935,3,64,32,0,1935,1936,5,4,0,0,1936,1937,5,152,0,0,1937,1939,5,3,0,0,
	1938,1940,3,156,78,0,1939,1938,1,0,0,0,1939,1940,1,0,0,0,1940,1941,1,0,
	0,0,1941,1942,3,160,80,0,1942,1943,5,4,0,0,1943,1945,1,0,0,0,1944,1859,
	1,0,0,0,1944,1874,1,0,0,0,1944,1886,1,0,0,0,1944,1897,1,0,0,0,1944,1915,
	1,0,0,0,1944,1932,1,0,0,0,1945,151,1,0,0,0,1946,1947,5,5,0,0,1947,1948,
	3,34,17,0,1948,153,1,0,0,0,1949,1950,5,5,0,0,1950,1951,3,34,17,0,1951,155,
	1,0,0,0,1952,1953,5,153,0,0,1953,1955,5,40,0,0,1954,1956,3,64,32,0,1955,
	1954,1,0,0,0,1956,1957,1,0,0,0,1957,1955,1,0,0,0,1957,1958,1,0,0,0,1958,
	157,1,0,0,0,1959,1960,5,109,0,0,1960,1962,5,40,0,0,1961,1963,3,64,32,0,
	1962,1961,1,0,0,0,1963,1964,1,0,0,0,1964,1962,1,0,0,0,1964,1965,1,0,0,0,
	1965,159,1,0,0,0,1966,1967,5,109,0,0,1967,1968,5,40,0,0,1968,1969,3,162,
	81,0,1969,161,1,0,0,0,1970,1972,3,64,32,0,1971,1973,3,142,71,0,1972,1971,
	1,0,0,0,1972,1973,1,0,0,0,1973,1981,1,0,0,0,1974,1975,5,5,0,0,1975,1977,
	3,64,32,0,1976,1978,3,142,71,0,1977,1976,1,0,0,0,1977,1978,1,0,0,0,1978,
	1980,1,0,0,0,1979,1974,1,0,0,0,1980,1983,1,0,0,0,1981,1979,1,0,0,0,1981,
	1982,1,0,0,0,1982,163,1,0,0,0,1983,1981,1,0,0,0,1984,1985,3,86,43,0,1985,
	165,1,0,0,0,1986,1987,3,86,43,0,1987,167,1,0,0,0,1988,1989,7,25,0,0,1989,
	169,1,0,0,0,1990,1991,5,188,0,0,1991,171,1,0,0,0,1992,1995,3,64,32,0,1993,
	1995,3,28,14,0,1994,1992,1,0,0,0,1994,1993,1,0,0,0,1995,173,1,0,0,0,1996,
	1997,7,26,0,0,1997,175,1,0,0,0,1998,1999,7,27,0,0,1999,177,1,0,0,0,2000,
	2001,3,224,112,0,2001,179,1,0,0,0,2002,2003,3,224,112,0,2003,181,1,0,0,
	0,2004,2005,3,224,112,0,2005,183,1,0,0,0,2006,2007,3,224,112,0,2007,185,
	1,0,0,0,2008,2009,3,224,112,0,2009,187,1,0,0,0,2010,2011,3,224,112,0,2011,
	189,1,0,0,0,2012,2013,3,224,112,0,2013,191,1,0,0,0,2014,2015,3,224,112,
	0,2015,193,1,0,0,0,2016,2017,3,224,112,0,2017,195,1,0,0,0,2018,2019,3,224,
	112,0,2019,197,1,0,0,0,2020,2021,3,224,112,0,2021,199,1,0,0,0,2022,2023,
	3,224,112,0,2023,201,1,0,0,0,2024,2025,3,224,112,0,2025,203,1,0,0,0,2026,
	2027,3,224,112,0,2027,205,1,0,0,0,2028,2029,3,224,112,0,2029,207,1,0,0,
	0,2030,2031,3,224,112,0,2031,209,1,0,0,0,2032,2033,3,224,112,0,2033,211,
	1,0,0,0,2034,2035,3,224,112,0,2035,213,1,0,0,0,2036,2037,3,224,112,0,2037,
	215,1,0,0,0,2038,2039,3,224,112,0,2039,217,1,0,0,0,2040,2041,3,224,112,
	0,2041,219,1,0,0,0,2042,2043,3,224,112,0,2043,221,1,0,0,0,2044,2045,3,224,
	112,0,2045,223,1,0,0,0,2046,2054,5,185,0,0,2047,2054,3,176,88,0,2048,2054,
	5,188,0,0,2049,2050,5,3,0,0,2050,2051,3,224,112,0,2051,2052,5,4,0,0,2052,
	2054,1,0,0,0,2053,2046,1,0,0,0,2053,2047,1,0,0,0,2053,2048,1,0,0,0,2053,
	2049,1,0,0,0,2054,225,1,0,0,0,296,229,237,244,249,255,261,263,289,296,303,
	309,313,318,321,328,331,335,343,347,349,353,357,361,364,371,377,383,388,
	399,405,409,413,416,420,426,431,440,447,453,457,461,466,472,484,488,493,
	496,499,502,506,509,523,530,537,539,542,548,553,561,566,581,587,597,602,
	612,616,618,622,627,629,637,643,648,655,666,669,671,678,682,689,695,701,
	707,712,721,726,737,742,753,758,762,778,788,793,801,813,818,826,833,836,
	839,846,849,852,855,859,867,872,882,887,896,903,907,911,914,922,935,938,
	946,955,959,964,994,1006,1011,1023,1029,1036,1040,1050,1053,1059,1065,1074,
	1077,1081,1083,1085,1094,1106,1117,1121,1128,1134,1139,1147,1152,1156,1159,
	1163,1166,1174,1185,1191,1193,1201,1208,1215,1220,1222,1228,1237,1242,1249,
	1253,1255,1258,1266,1270,1273,1279,1283,1288,1295,1304,1308,1310,1314,1323,
	1328,1330,1343,1346,1349,1354,1358,1361,1364,1369,1373,1378,1381,1384,1389,
	1393,1396,1403,1408,1417,1422,1425,1433,1437,1445,1448,1450,1459,1462,1464,
	1468,1472,1476,1479,1490,1495,1499,1503,1506,1511,1517,1524,1531,1540,1544,
	1546,1550,1553,1561,1567,1572,1578,1585,1592,1597,1600,1603,1606,1611,1616,
	1623,1627,1631,1641,1650,1653,1662,1666,1674,1683,1686,1695,1698,1701,1704,
	1714,1716,1725,1734,1738,1745,1752,1756,1760,1769,1773,1777,1782,1786,1793,
	1803,1810,1815,1818,1822,1836,1848,1857,1866,1870,1880,1883,1892,1901,1904,
	1910,1924,1928,1939,1944,1957,1964,1972,1977,1981,1994,2053];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SQLiteParser.__ATN) {
			SQLiteParser.__ATN = new ATNDeserializer().deserialize(SQLiteParser._serializedATN);
		}

		return SQLiteParser.__ATN;
	}


	static DecisionsToDFA = SQLiteParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ParseContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(SQLiteParser.EOF, 0);
	}
	public sql_stmt_list_list(): Sql_stmt_listContext[] {
		return this.getTypedRuleContexts(Sql_stmt_listContext) as Sql_stmt_listContext[];
	}
	public sql_stmt_list(i: number): Sql_stmt_listContext {
		return this.getTypedRuleContext(Sql_stmt_listContext, i) as Sql_stmt_listContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_parse;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterParse) {
	 		listener.enterParse(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitParse) {
	 		listener.exitParse(this);
		}
	}
}


export class Sql_stmt_listContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public sql_stmt_list(): Sql_stmtContext[] {
		return this.getTypedRuleContexts(Sql_stmtContext) as Sql_stmtContext[];
	}
	public sql_stmt(i: number): Sql_stmtContext {
		return this.getTypedRuleContext(Sql_stmtContext, i) as Sql_stmtContext;
	}
	public SCOL_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.SCOL);
	}
	public SCOL(i: number): TerminalNode {
		return this.getToken(SQLiteParser.SCOL, i);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_sql_stmt_list;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterSql_stmt_list) {
	 		listener.enterSql_stmt_list(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitSql_stmt_list) {
	 		listener.exitSql_stmt_list(this);
		}
	}
}


export class Sql_stmtContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public alter_table_stmt(): Alter_table_stmtContext {
		return this.getTypedRuleContext(Alter_table_stmtContext, 0) as Alter_table_stmtContext;
	}
	public analyze_stmt(): Analyze_stmtContext {
		return this.getTypedRuleContext(Analyze_stmtContext, 0) as Analyze_stmtContext;
	}
	public attach_stmt(): Attach_stmtContext {
		return this.getTypedRuleContext(Attach_stmtContext, 0) as Attach_stmtContext;
	}
	public begin_stmt(): Begin_stmtContext {
		return this.getTypedRuleContext(Begin_stmtContext, 0) as Begin_stmtContext;
	}
	public commit_stmt(): Commit_stmtContext {
		return this.getTypedRuleContext(Commit_stmtContext, 0) as Commit_stmtContext;
	}
	public create_index_stmt(): Create_index_stmtContext {
		return this.getTypedRuleContext(Create_index_stmtContext, 0) as Create_index_stmtContext;
	}
	public create_table_stmt(): Create_table_stmtContext {
		return this.getTypedRuleContext(Create_table_stmtContext, 0) as Create_table_stmtContext;
	}
	public create_trigger_stmt(): Create_trigger_stmtContext {
		return this.getTypedRuleContext(Create_trigger_stmtContext, 0) as Create_trigger_stmtContext;
	}
	public create_view_stmt(): Create_view_stmtContext {
		return this.getTypedRuleContext(Create_view_stmtContext, 0) as Create_view_stmtContext;
	}
	public create_virtual_table_stmt(): Create_virtual_table_stmtContext {
		return this.getTypedRuleContext(Create_virtual_table_stmtContext, 0) as Create_virtual_table_stmtContext;
	}
	public delete_stmt(): Delete_stmtContext {
		return this.getTypedRuleContext(Delete_stmtContext, 0) as Delete_stmtContext;
	}
	public delete_stmt_limited(): Delete_stmt_limitedContext {
		return this.getTypedRuleContext(Delete_stmt_limitedContext, 0) as Delete_stmt_limitedContext;
	}
	public detach_stmt(): Detach_stmtContext {
		return this.getTypedRuleContext(Detach_stmtContext, 0) as Detach_stmtContext;
	}
	public drop_stmt(): Drop_stmtContext {
		return this.getTypedRuleContext(Drop_stmtContext, 0) as Drop_stmtContext;
	}
	public insert_stmt(): Insert_stmtContext {
		return this.getTypedRuleContext(Insert_stmtContext, 0) as Insert_stmtContext;
	}
	public pragma_stmt(): Pragma_stmtContext {
		return this.getTypedRuleContext(Pragma_stmtContext, 0) as Pragma_stmtContext;
	}
	public reindex_stmt(): Reindex_stmtContext {
		return this.getTypedRuleContext(Reindex_stmtContext, 0) as Reindex_stmtContext;
	}
	public release_stmt(): Release_stmtContext {
		return this.getTypedRuleContext(Release_stmtContext, 0) as Release_stmtContext;
	}
	public rollback_stmt(): Rollback_stmtContext {
		return this.getTypedRuleContext(Rollback_stmtContext, 0) as Rollback_stmtContext;
	}
	public savepoint_stmt(): Savepoint_stmtContext {
		return this.getTypedRuleContext(Savepoint_stmtContext, 0) as Savepoint_stmtContext;
	}
	public select_stmt(): Select_stmtContext {
		return this.getTypedRuleContext(Select_stmtContext, 0) as Select_stmtContext;
	}
	public update_stmt(): Update_stmtContext {
		return this.getTypedRuleContext(Update_stmtContext, 0) as Update_stmtContext;
	}
	public update_stmt_limited(): Update_stmt_limitedContext {
		return this.getTypedRuleContext(Update_stmt_limitedContext, 0) as Update_stmt_limitedContext;
	}
	public vacuum_stmt(): Vacuum_stmtContext {
		return this.getTypedRuleContext(Vacuum_stmtContext, 0) as Vacuum_stmtContext;
	}
	public EXPLAIN_(): TerminalNode {
		return this.getToken(SQLiteParser.EXPLAIN_, 0);
	}
	public QUERY_(): TerminalNode {
		return this.getToken(SQLiteParser.QUERY_, 0);
	}
	public PLAN_(): TerminalNode {
		return this.getToken(SQLiteParser.PLAN_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_sql_stmt;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterSql_stmt) {
	 		listener.enterSql_stmt(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitSql_stmt) {
	 		listener.exitSql_stmt(this);
		}
	}
}


export class Alter_table_stmtContext extends ParserRuleContext {
	public _new_table_name!: Table_nameContext;
	public _old_column_name!: Column_nameContext;
	public _new_column_name!: Column_nameContext;
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ALTER_(): TerminalNode {
		return this.getToken(SQLiteParser.ALTER_, 0);
	}
	public TABLE_(): TerminalNode {
		return this.getToken(SQLiteParser.TABLE_, 0);
	}
	public table_name_list(): Table_nameContext[] {
		return this.getTypedRuleContexts(Table_nameContext) as Table_nameContext[];
	}
	public table_name(i: number): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, i) as Table_nameContext;
	}
	public RENAME_(): TerminalNode {
		return this.getToken(SQLiteParser.RENAME_, 0);
	}
	public ADD_(): TerminalNode {
		return this.getToken(SQLiteParser.ADD_, 0);
	}
	public column_def(): Column_defContext {
		return this.getTypedRuleContext(Column_defContext, 0) as Column_defContext;
	}
	public DROP_(): TerminalNode {
		return this.getToken(SQLiteParser.DROP_, 0);
	}
	public column_name_list(): Column_nameContext[] {
		return this.getTypedRuleContexts(Column_nameContext) as Column_nameContext[];
	}
	public column_name(i: number): Column_nameContext {
		return this.getTypedRuleContext(Column_nameContext, i) as Column_nameContext;
	}
	public schema_name(): Schema_nameContext {
		return this.getTypedRuleContext(Schema_nameContext, 0) as Schema_nameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(SQLiteParser.DOT, 0);
	}
	public TO_(): TerminalNode {
		return this.getToken(SQLiteParser.TO_, 0);
	}
	public COLUMN_(): TerminalNode {
		return this.getToken(SQLiteParser.COLUMN_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_alter_table_stmt;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterAlter_table_stmt) {
	 		listener.enterAlter_table_stmt(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitAlter_table_stmt) {
	 		listener.exitAlter_table_stmt(this);
		}
	}
}


export class Analyze_stmtContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ANALYZE_(): TerminalNode {
		return this.getToken(SQLiteParser.ANALYZE_, 0);
	}
	public schema_name(): Schema_nameContext {
		return this.getTypedRuleContext(Schema_nameContext, 0) as Schema_nameContext;
	}
	public table_or_index_name(): Table_or_index_nameContext {
		return this.getTypedRuleContext(Table_or_index_nameContext, 0) as Table_or_index_nameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(SQLiteParser.DOT, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_analyze_stmt;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterAnalyze_stmt) {
	 		listener.enterAnalyze_stmt(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitAnalyze_stmt) {
	 		listener.exitAnalyze_stmt(this);
		}
	}
}


export class Attach_stmtContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ATTACH_(): TerminalNode {
		return this.getToken(SQLiteParser.ATTACH_, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public AS_(): TerminalNode {
		return this.getToken(SQLiteParser.AS_, 0);
	}
	public schema_name(): Schema_nameContext {
		return this.getTypedRuleContext(Schema_nameContext, 0) as Schema_nameContext;
	}
	public DATABASE_(): TerminalNode {
		return this.getToken(SQLiteParser.DATABASE_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_attach_stmt;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterAttach_stmt) {
	 		listener.enterAttach_stmt(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitAttach_stmt) {
	 		listener.exitAttach_stmt(this);
		}
	}
}


export class Begin_stmtContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BEGIN_(): TerminalNode {
		return this.getToken(SQLiteParser.BEGIN_, 0);
	}
	public TRANSACTION_(): TerminalNode {
		return this.getToken(SQLiteParser.TRANSACTION_, 0);
	}
	public DEFERRED_(): TerminalNode {
		return this.getToken(SQLiteParser.DEFERRED_, 0);
	}
	public IMMEDIATE_(): TerminalNode {
		return this.getToken(SQLiteParser.IMMEDIATE_, 0);
	}
	public EXCLUSIVE_(): TerminalNode {
		return this.getToken(SQLiteParser.EXCLUSIVE_, 0);
	}
	public transaction_name(): Transaction_nameContext {
		return this.getTypedRuleContext(Transaction_nameContext, 0) as Transaction_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_begin_stmt;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterBegin_stmt) {
	 		listener.enterBegin_stmt(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitBegin_stmt) {
	 		listener.exitBegin_stmt(this);
		}
	}
}


export class Commit_stmtContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COMMIT_(): TerminalNode {
		return this.getToken(SQLiteParser.COMMIT_, 0);
	}
	public END_(): TerminalNode {
		return this.getToken(SQLiteParser.END_, 0);
	}
	public TRANSACTION_(): TerminalNode {
		return this.getToken(SQLiteParser.TRANSACTION_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_commit_stmt;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterCommit_stmt) {
	 		listener.enterCommit_stmt(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitCommit_stmt) {
	 		listener.exitCommit_stmt(this);
		}
	}
}


export class Rollback_stmtContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ROLLBACK_(): TerminalNode {
		return this.getToken(SQLiteParser.ROLLBACK_, 0);
	}
	public TRANSACTION_(): TerminalNode {
		return this.getToken(SQLiteParser.TRANSACTION_, 0);
	}
	public TO_(): TerminalNode {
		return this.getToken(SQLiteParser.TO_, 0);
	}
	public savepoint_name(): Savepoint_nameContext {
		return this.getTypedRuleContext(Savepoint_nameContext, 0) as Savepoint_nameContext;
	}
	public SAVEPOINT_(): TerminalNode {
		return this.getToken(SQLiteParser.SAVEPOINT_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_rollback_stmt;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterRollback_stmt) {
	 		listener.enterRollback_stmt(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitRollback_stmt) {
	 		listener.exitRollback_stmt(this);
		}
	}
}


export class Savepoint_stmtContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SAVEPOINT_(): TerminalNode {
		return this.getToken(SQLiteParser.SAVEPOINT_, 0);
	}
	public savepoint_name(): Savepoint_nameContext {
		return this.getTypedRuleContext(Savepoint_nameContext, 0) as Savepoint_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_savepoint_stmt;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterSavepoint_stmt) {
	 		listener.enterSavepoint_stmt(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitSavepoint_stmt) {
	 		listener.exitSavepoint_stmt(this);
		}
	}
}


export class Release_stmtContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RELEASE_(): TerminalNode {
		return this.getToken(SQLiteParser.RELEASE_, 0);
	}
	public savepoint_name(): Savepoint_nameContext {
		return this.getTypedRuleContext(Savepoint_nameContext, 0) as Savepoint_nameContext;
	}
	public SAVEPOINT_(): TerminalNode {
		return this.getToken(SQLiteParser.SAVEPOINT_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_release_stmt;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterRelease_stmt) {
	 		listener.enterRelease_stmt(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitRelease_stmt) {
	 		listener.exitRelease_stmt(this);
		}
	}
}


export class Create_index_stmtContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE_(): TerminalNode {
		return this.getToken(SQLiteParser.CREATE_, 0);
	}
	public INDEX_(): TerminalNode {
		return this.getToken(SQLiteParser.INDEX_, 0);
	}
	public index_name(): Index_nameContext {
		return this.getTypedRuleContext(Index_nameContext, 0) as Index_nameContext;
	}
	public ON_(): TerminalNode {
		return this.getToken(SQLiteParser.ON_, 0);
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public indexed_column_list(): Indexed_columnContext[] {
		return this.getTypedRuleContexts(Indexed_columnContext) as Indexed_columnContext[];
	}
	public indexed_column(i: number): Indexed_columnContext {
		return this.getTypedRuleContext(Indexed_columnContext, i) as Indexed_columnContext;
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public UNIQUE_(): TerminalNode {
		return this.getToken(SQLiteParser.UNIQUE_, 0);
	}
	public IF_(): TerminalNode {
		return this.getToken(SQLiteParser.IF_, 0);
	}
	public NOT_(): TerminalNode {
		return this.getToken(SQLiteParser.NOT_, 0);
	}
	public EXISTS_(): TerminalNode {
		return this.getToken(SQLiteParser.EXISTS_, 0);
	}
	public schema_name(): Schema_nameContext {
		return this.getTypedRuleContext(Schema_nameContext, 0) as Schema_nameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(SQLiteParser.DOT, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
	public WHERE_(): TerminalNode {
		return this.getToken(SQLiteParser.WHERE_, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_create_index_stmt;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterCreate_index_stmt) {
	 		listener.enterCreate_index_stmt(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitCreate_index_stmt) {
	 		listener.exitCreate_index_stmt(this);
		}
	}
}


export class Indexed_columnContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public column_name(): Column_nameContext {
		return this.getTypedRuleContext(Column_nameContext, 0) as Column_nameContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public COLLATE_(): TerminalNode {
		return this.getToken(SQLiteParser.COLLATE_, 0);
	}
	public collation_name(): Collation_nameContext {
		return this.getTypedRuleContext(Collation_nameContext, 0) as Collation_nameContext;
	}
	public asc_desc(): Asc_descContext {
		return this.getTypedRuleContext(Asc_descContext, 0) as Asc_descContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_indexed_column;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterIndexed_column) {
	 		listener.enterIndexed_column(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitIndexed_column) {
	 		listener.exitIndexed_column(this);
		}
	}
}


export class Create_table_stmtContext extends ParserRuleContext {
	public _row_ROW_ID!: Token;
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE_(): TerminalNode {
		return this.getToken(SQLiteParser.CREATE_, 0);
	}
	public TABLE_(): TerminalNode {
		return this.getToken(SQLiteParser.TABLE_, 0);
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public column_def_list(): Column_defContext[] {
		return this.getTypedRuleContexts(Column_defContext) as Column_defContext[];
	}
	public column_def(i: number): Column_defContext {
		return this.getTypedRuleContext(Column_defContext, i) as Column_defContext;
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public AS_(): TerminalNode {
		return this.getToken(SQLiteParser.AS_, 0);
	}
	public select_stmt(): Select_stmtContext {
		return this.getTypedRuleContext(Select_stmtContext, 0) as Select_stmtContext;
	}
	public IF_(): TerminalNode {
		return this.getToken(SQLiteParser.IF_, 0);
	}
	public NOT_(): TerminalNode {
		return this.getToken(SQLiteParser.NOT_, 0);
	}
	public EXISTS_(): TerminalNode {
		return this.getToken(SQLiteParser.EXISTS_, 0);
	}
	public schema_name(): Schema_nameContext {
		return this.getTypedRuleContext(Schema_nameContext, 0) as Schema_nameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(SQLiteParser.DOT, 0);
	}
	public TEMP_(): TerminalNode {
		return this.getToken(SQLiteParser.TEMP_, 0);
	}
	public TEMPORARY_(): TerminalNode {
		return this.getToken(SQLiteParser.TEMPORARY_, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
	public table_constraint_list(): Table_constraintContext[] {
		return this.getTypedRuleContexts(Table_constraintContext) as Table_constraintContext[];
	}
	public table_constraint(i: number): Table_constraintContext {
		return this.getTypedRuleContext(Table_constraintContext, i) as Table_constraintContext;
	}
	public WITHOUT_(): TerminalNode {
		return this.getToken(SQLiteParser.WITHOUT_, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(SQLiteParser.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_create_table_stmt;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterCreate_table_stmt) {
	 		listener.enterCreate_table_stmt(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitCreate_table_stmt) {
	 		listener.exitCreate_table_stmt(this);
		}
	}
}


export class Column_defContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public column_name(): Column_nameContext {
		return this.getTypedRuleContext(Column_nameContext, 0) as Column_nameContext;
	}
	public type_name(): Type_nameContext {
		return this.getTypedRuleContext(Type_nameContext, 0) as Type_nameContext;
	}
	public column_constraint_list(): Column_constraintContext[] {
		return this.getTypedRuleContexts(Column_constraintContext) as Column_constraintContext[];
	}
	public column_constraint(i: number): Column_constraintContext {
		return this.getTypedRuleContext(Column_constraintContext, i) as Column_constraintContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_column_def;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterColumn_def) {
	 		listener.enterColumn_def(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitColumn_def) {
	 		listener.exitColumn_def(this);
		}
	}
}


export class Type_nameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public name_list(): NameContext[] {
		return this.getTypedRuleContexts(NameContext) as NameContext[];
	}
	public name(i: number): NameContext {
		return this.getTypedRuleContext(NameContext, i) as NameContext;
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public signed_number_list(): Signed_numberContext[] {
		return this.getTypedRuleContexts(Signed_numberContext) as Signed_numberContext[];
	}
	public signed_number(i: number): Signed_numberContext {
		return this.getTypedRuleContext(Signed_numberContext, i) as Signed_numberContext;
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_type_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterType_name) {
	 		listener.enterType_name(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitType_name) {
	 		listener.exitType_name(this);
		}
	}
}


export class Column_constraintContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHECK_(): TerminalNode {
		return this.getToken(SQLiteParser.CHECK_, 0);
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public DEFAULT_(): TerminalNode {
		return this.getToken(SQLiteParser.DEFAULT_, 0);
	}
	public COLLATE_(): TerminalNode {
		return this.getToken(SQLiteParser.COLLATE_, 0);
	}
	public collation_name(): Collation_nameContext {
		return this.getTypedRuleContext(Collation_nameContext, 0) as Collation_nameContext;
	}
	public foreign_key_clause(): Foreign_key_clauseContext {
		return this.getTypedRuleContext(Foreign_key_clauseContext, 0) as Foreign_key_clauseContext;
	}
	public AS_(): TerminalNode {
		return this.getToken(SQLiteParser.AS_, 0);
	}
	public CONSTRAINT_(): TerminalNode {
		return this.getToken(SQLiteParser.CONSTRAINT_, 0);
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
	public PRIMARY_(): TerminalNode {
		return this.getToken(SQLiteParser.PRIMARY_, 0);
	}
	public KEY_(): TerminalNode {
		return this.getToken(SQLiteParser.KEY_, 0);
	}
	public NULL_(): TerminalNode {
		return this.getToken(SQLiteParser.NULL_, 0);
	}
	public UNIQUE_(): TerminalNode {
		return this.getToken(SQLiteParser.UNIQUE_, 0);
	}
	public signed_number(): Signed_numberContext {
		return this.getTypedRuleContext(Signed_numberContext, 0) as Signed_numberContext;
	}
	public literal_value(): Literal_valueContext {
		return this.getTypedRuleContext(Literal_valueContext, 0) as Literal_valueContext;
	}
	public conflict_clause(): Conflict_clauseContext {
		return this.getTypedRuleContext(Conflict_clauseContext, 0) as Conflict_clauseContext;
	}
	public GENERATED_(): TerminalNode {
		return this.getToken(SQLiteParser.GENERATED_, 0);
	}
	public ALWAYS_(): TerminalNode {
		return this.getToken(SQLiteParser.ALWAYS_, 0);
	}
	public STORED_(): TerminalNode {
		return this.getToken(SQLiteParser.STORED_, 0);
	}
	public VIRTUAL_(): TerminalNode {
		return this.getToken(SQLiteParser.VIRTUAL_, 0);
	}
	public asc_desc(): Asc_descContext {
		return this.getTypedRuleContext(Asc_descContext, 0) as Asc_descContext;
	}
	public AUTOINCREMENT_(): TerminalNode {
		return this.getToken(SQLiteParser.AUTOINCREMENT_, 0);
	}
	public NOT_(): TerminalNode {
		return this.getToken(SQLiteParser.NOT_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_column_constraint;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterColumn_constraint) {
	 		listener.enterColumn_constraint(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitColumn_constraint) {
	 		listener.exitColumn_constraint(this);
		}
	}
}


export class Signed_numberContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NUMERIC_LITERAL(): TerminalNode {
		return this.getToken(SQLiteParser.NUMERIC_LITERAL, 0);
	}
	public PLUS(): TerminalNode {
		return this.getToken(SQLiteParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(SQLiteParser.MINUS, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_signed_number;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterSigned_number) {
	 		listener.enterSigned_number(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitSigned_number) {
	 		listener.exitSigned_number(this);
		}
	}
}


export class Table_constraintContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public indexed_column_list(): Indexed_columnContext[] {
		return this.getTypedRuleContexts(Indexed_columnContext) as Indexed_columnContext[];
	}
	public indexed_column(i: number): Indexed_columnContext {
		return this.getTypedRuleContext(Indexed_columnContext, i) as Indexed_columnContext;
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public CHECK_(): TerminalNode {
		return this.getToken(SQLiteParser.CHECK_, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public FOREIGN_(): TerminalNode {
		return this.getToken(SQLiteParser.FOREIGN_, 0);
	}
	public KEY_(): TerminalNode {
		return this.getToken(SQLiteParser.KEY_, 0);
	}
	public column_name_list(): Column_nameContext[] {
		return this.getTypedRuleContexts(Column_nameContext) as Column_nameContext[];
	}
	public column_name(i: number): Column_nameContext {
		return this.getTypedRuleContext(Column_nameContext, i) as Column_nameContext;
	}
	public foreign_key_clause(): Foreign_key_clauseContext {
		return this.getTypedRuleContext(Foreign_key_clauseContext, 0) as Foreign_key_clauseContext;
	}
	public CONSTRAINT_(): TerminalNode {
		return this.getToken(SQLiteParser.CONSTRAINT_, 0);
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
	public PRIMARY_(): TerminalNode {
		return this.getToken(SQLiteParser.PRIMARY_, 0);
	}
	public UNIQUE_(): TerminalNode {
		return this.getToken(SQLiteParser.UNIQUE_, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
	public conflict_clause(): Conflict_clauseContext {
		return this.getTypedRuleContext(Conflict_clauseContext, 0) as Conflict_clauseContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_table_constraint;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterTable_constraint) {
	 		listener.enterTable_constraint(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitTable_constraint) {
	 		listener.exitTable_constraint(this);
		}
	}
}


export class Foreign_key_clauseContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public REFERENCES_(): TerminalNode {
		return this.getToken(SQLiteParser.REFERENCES_, 0);
	}
	public foreign_table(): Foreign_tableContext {
		return this.getTypedRuleContext(Foreign_tableContext, 0) as Foreign_tableContext;
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public column_name_list(): Column_nameContext[] {
		return this.getTypedRuleContexts(Column_nameContext) as Column_nameContext[];
	}
	public column_name(i: number): Column_nameContext {
		return this.getTypedRuleContext(Column_nameContext, i) as Column_nameContext;
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public ON__list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.ON_);
	}
	public ON_(i: number): TerminalNode {
		return this.getToken(SQLiteParser.ON_, i);
	}
	public MATCH__list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.MATCH_);
	}
	public MATCH_(i: number): TerminalNode {
		return this.getToken(SQLiteParser.MATCH_, i);
	}
	public name_list(): NameContext[] {
		return this.getTypedRuleContexts(NameContext) as NameContext[];
	}
	public name(i: number): NameContext {
		return this.getTypedRuleContext(NameContext, i) as NameContext;
	}
	public DEFERRABLE_(): TerminalNode {
		return this.getToken(SQLiteParser.DEFERRABLE_, 0);
	}
	public DELETE__list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.DELETE_);
	}
	public DELETE_(i: number): TerminalNode {
		return this.getToken(SQLiteParser.DELETE_, i);
	}
	public UPDATE__list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.UPDATE_);
	}
	public UPDATE_(i: number): TerminalNode {
		return this.getToken(SQLiteParser.UPDATE_, i);
	}
	public SET__list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.SET_);
	}
	public SET_(i: number): TerminalNode {
		return this.getToken(SQLiteParser.SET_, i);
	}
	public CASCADE__list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.CASCADE_);
	}
	public CASCADE_(i: number): TerminalNode {
		return this.getToken(SQLiteParser.CASCADE_, i);
	}
	public RESTRICT__list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.RESTRICT_);
	}
	public RESTRICT_(i: number): TerminalNode {
		return this.getToken(SQLiteParser.RESTRICT_, i);
	}
	public NO__list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.NO_);
	}
	public NO_(i: number): TerminalNode {
		return this.getToken(SQLiteParser.NO_, i);
	}
	public ACTION__list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.ACTION_);
	}
	public ACTION_(i: number): TerminalNode {
		return this.getToken(SQLiteParser.ACTION_, i);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
	public NULL__list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.NULL_);
	}
	public NULL_(i: number): TerminalNode {
		return this.getToken(SQLiteParser.NULL_, i);
	}
	public DEFAULT__list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.DEFAULT_);
	}
	public DEFAULT_(i: number): TerminalNode {
		return this.getToken(SQLiteParser.DEFAULT_, i);
	}
	public NOT_(): TerminalNode {
		return this.getToken(SQLiteParser.NOT_, 0);
	}
	public INITIALLY_(): TerminalNode {
		return this.getToken(SQLiteParser.INITIALLY_, 0);
	}
	public DEFERRED_(): TerminalNode {
		return this.getToken(SQLiteParser.DEFERRED_, 0);
	}
	public IMMEDIATE_(): TerminalNode {
		return this.getToken(SQLiteParser.IMMEDIATE_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_foreign_key_clause;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterForeign_key_clause) {
	 		listener.enterForeign_key_clause(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitForeign_key_clause) {
	 		listener.exitForeign_key_clause(this);
		}
	}
}


export class Conflict_clauseContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ON_(): TerminalNode {
		return this.getToken(SQLiteParser.ON_, 0);
	}
	public CONFLICT_(): TerminalNode {
		return this.getToken(SQLiteParser.CONFLICT_, 0);
	}
	public ROLLBACK_(): TerminalNode {
		return this.getToken(SQLiteParser.ROLLBACK_, 0);
	}
	public ABORT_(): TerminalNode {
		return this.getToken(SQLiteParser.ABORT_, 0);
	}
	public FAIL_(): TerminalNode {
		return this.getToken(SQLiteParser.FAIL_, 0);
	}
	public IGNORE_(): TerminalNode {
		return this.getToken(SQLiteParser.IGNORE_, 0);
	}
	public REPLACE_(): TerminalNode {
		return this.getToken(SQLiteParser.REPLACE_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_conflict_clause;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterConflict_clause) {
	 		listener.enterConflict_clause(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitConflict_clause) {
	 		listener.exitConflict_clause(this);
		}
	}
}


export class Create_trigger_stmtContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE_(): TerminalNode {
		return this.getToken(SQLiteParser.CREATE_, 0);
	}
	public TRIGGER_(): TerminalNode {
		return this.getToken(SQLiteParser.TRIGGER_, 0);
	}
	public trigger_name(): Trigger_nameContext {
		return this.getTypedRuleContext(Trigger_nameContext, 0) as Trigger_nameContext;
	}
	public ON_(): TerminalNode {
		return this.getToken(SQLiteParser.ON_, 0);
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public BEGIN_(): TerminalNode {
		return this.getToken(SQLiteParser.BEGIN_, 0);
	}
	public END_(): TerminalNode {
		return this.getToken(SQLiteParser.END_, 0);
	}
	public DELETE_(): TerminalNode {
		return this.getToken(SQLiteParser.DELETE_, 0);
	}
	public INSERT_(): TerminalNode {
		return this.getToken(SQLiteParser.INSERT_, 0);
	}
	public UPDATE_(): TerminalNode {
		return this.getToken(SQLiteParser.UPDATE_, 0);
	}
	public IF_(): TerminalNode {
		return this.getToken(SQLiteParser.IF_, 0);
	}
	public NOT_(): TerminalNode {
		return this.getToken(SQLiteParser.NOT_, 0);
	}
	public EXISTS_(): TerminalNode {
		return this.getToken(SQLiteParser.EXISTS_, 0);
	}
	public schema_name(): Schema_nameContext {
		return this.getTypedRuleContext(Schema_nameContext, 0) as Schema_nameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(SQLiteParser.DOT, 0);
	}
	public BEFORE_(): TerminalNode {
		return this.getToken(SQLiteParser.BEFORE_, 0);
	}
	public AFTER_(): TerminalNode {
		return this.getToken(SQLiteParser.AFTER_, 0);
	}
	public INSTEAD_(): TerminalNode {
		return this.getToken(SQLiteParser.INSTEAD_, 0);
	}
	public OF__list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.OF_);
	}
	public OF_(i: number): TerminalNode {
		return this.getToken(SQLiteParser.OF_, i);
	}
	public FOR_(): TerminalNode {
		return this.getToken(SQLiteParser.FOR_, 0);
	}
	public EACH_(): TerminalNode {
		return this.getToken(SQLiteParser.EACH_, 0);
	}
	public ROW_(): TerminalNode {
		return this.getToken(SQLiteParser.ROW_, 0);
	}
	public WHEN_(): TerminalNode {
		return this.getToken(SQLiteParser.WHEN_, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public SCOL_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.SCOL);
	}
	public SCOL(i: number): TerminalNode {
		return this.getToken(SQLiteParser.SCOL, i);
	}
	public TEMP_(): TerminalNode {
		return this.getToken(SQLiteParser.TEMP_, 0);
	}
	public TEMPORARY_(): TerminalNode {
		return this.getToken(SQLiteParser.TEMPORARY_, 0);
	}
	public column_name_list(): Column_nameContext[] {
		return this.getTypedRuleContexts(Column_nameContext) as Column_nameContext[];
	}
	public column_name(i: number): Column_nameContext {
		return this.getTypedRuleContext(Column_nameContext, i) as Column_nameContext;
	}
	public update_stmt_list(): Update_stmtContext[] {
		return this.getTypedRuleContexts(Update_stmtContext) as Update_stmtContext[];
	}
	public update_stmt(i: number): Update_stmtContext {
		return this.getTypedRuleContext(Update_stmtContext, i) as Update_stmtContext;
	}
	public insert_stmt_list(): Insert_stmtContext[] {
		return this.getTypedRuleContexts(Insert_stmtContext) as Insert_stmtContext[];
	}
	public insert_stmt(i: number): Insert_stmtContext {
		return this.getTypedRuleContext(Insert_stmtContext, i) as Insert_stmtContext;
	}
	public delete_stmt_list(): Delete_stmtContext[] {
		return this.getTypedRuleContexts(Delete_stmtContext) as Delete_stmtContext[];
	}
	public delete_stmt(i: number): Delete_stmtContext {
		return this.getTypedRuleContext(Delete_stmtContext, i) as Delete_stmtContext;
	}
	public select_stmt_list(): Select_stmtContext[] {
		return this.getTypedRuleContexts(Select_stmtContext) as Select_stmtContext[];
	}
	public select_stmt(i: number): Select_stmtContext {
		return this.getTypedRuleContext(Select_stmtContext, i) as Select_stmtContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_create_trigger_stmt;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterCreate_trigger_stmt) {
	 		listener.enterCreate_trigger_stmt(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitCreate_trigger_stmt) {
	 		listener.exitCreate_trigger_stmt(this);
		}
	}
}


export class Create_view_stmtContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE_(): TerminalNode {
		return this.getToken(SQLiteParser.CREATE_, 0);
	}
	public VIEW_(): TerminalNode {
		return this.getToken(SQLiteParser.VIEW_, 0);
	}
	public view_name(): View_nameContext {
		return this.getTypedRuleContext(View_nameContext, 0) as View_nameContext;
	}
	public AS_(): TerminalNode {
		return this.getToken(SQLiteParser.AS_, 0);
	}
	public select_stmt(): Select_stmtContext {
		return this.getTypedRuleContext(Select_stmtContext, 0) as Select_stmtContext;
	}
	public IF_(): TerminalNode {
		return this.getToken(SQLiteParser.IF_, 0);
	}
	public NOT_(): TerminalNode {
		return this.getToken(SQLiteParser.NOT_, 0);
	}
	public EXISTS_(): TerminalNode {
		return this.getToken(SQLiteParser.EXISTS_, 0);
	}
	public schema_name(): Schema_nameContext {
		return this.getTypedRuleContext(Schema_nameContext, 0) as Schema_nameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(SQLiteParser.DOT, 0);
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public column_name_list(): Column_nameContext[] {
		return this.getTypedRuleContexts(Column_nameContext) as Column_nameContext[];
	}
	public column_name(i: number): Column_nameContext {
		return this.getTypedRuleContext(Column_nameContext, i) as Column_nameContext;
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public TEMP_(): TerminalNode {
		return this.getToken(SQLiteParser.TEMP_, 0);
	}
	public TEMPORARY_(): TerminalNode {
		return this.getToken(SQLiteParser.TEMPORARY_, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_create_view_stmt;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterCreate_view_stmt) {
	 		listener.enterCreate_view_stmt(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitCreate_view_stmt) {
	 		listener.exitCreate_view_stmt(this);
		}
	}
}


export class Create_virtual_table_stmtContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE_(): TerminalNode {
		return this.getToken(SQLiteParser.CREATE_, 0);
	}
	public VIRTUAL_(): TerminalNode {
		return this.getToken(SQLiteParser.VIRTUAL_, 0);
	}
	public TABLE_(): TerminalNode {
		return this.getToken(SQLiteParser.TABLE_, 0);
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public USING_(): TerminalNode {
		return this.getToken(SQLiteParser.USING_, 0);
	}
	public module_name(): Module_nameContext {
		return this.getTypedRuleContext(Module_nameContext, 0) as Module_nameContext;
	}
	public IF_(): TerminalNode {
		return this.getToken(SQLiteParser.IF_, 0);
	}
	public NOT_(): TerminalNode {
		return this.getToken(SQLiteParser.NOT_, 0);
	}
	public EXISTS_(): TerminalNode {
		return this.getToken(SQLiteParser.EXISTS_, 0);
	}
	public schema_name(): Schema_nameContext {
		return this.getTypedRuleContext(Schema_nameContext, 0) as Schema_nameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(SQLiteParser.DOT, 0);
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public module_argument_list(): Module_argumentContext[] {
		return this.getTypedRuleContexts(Module_argumentContext) as Module_argumentContext[];
	}
	public module_argument(i: number): Module_argumentContext {
		return this.getTypedRuleContext(Module_argumentContext, i) as Module_argumentContext;
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_create_virtual_table_stmt;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterCreate_virtual_table_stmt) {
	 		listener.enterCreate_virtual_table_stmt(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitCreate_virtual_table_stmt) {
	 		listener.exitCreate_virtual_table_stmt(this);
		}
	}
}


export class With_clauseContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WITH_(): TerminalNode {
		return this.getToken(SQLiteParser.WITH_, 0);
	}
	public cte_table_name_list(): Cte_table_nameContext[] {
		return this.getTypedRuleContexts(Cte_table_nameContext) as Cte_table_nameContext[];
	}
	public cte_table_name(i: number): Cte_table_nameContext {
		return this.getTypedRuleContext(Cte_table_nameContext, i) as Cte_table_nameContext;
	}
	public AS__list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.AS_);
	}
	public AS_(i: number): TerminalNode {
		return this.getToken(SQLiteParser.AS_, i);
	}
	public OPEN_PAR_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.OPEN_PAR);
	}
	public OPEN_PAR(i: number): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, i);
	}
	public select_stmt_list(): Select_stmtContext[] {
		return this.getTypedRuleContexts(Select_stmtContext) as Select_stmtContext[];
	}
	public select_stmt(i: number): Select_stmtContext {
		return this.getTypedRuleContext(Select_stmtContext, i) as Select_stmtContext;
	}
	public CLOSE_PAR_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.CLOSE_PAR);
	}
	public CLOSE_PAR(i: number): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, i);
	}
	public RECURSIVE_(): TerminalNode {
		return this.getToken(SQLiteParser.RECURSIVE_, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_with_clause;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterWith_clause) {
	 		listener.enterWith_clause(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitWith_clause) {
	 		listener.exitWith_clause(this);
		}
	}
}


export class Cte_table_nameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public column_name_list(): Column_nameContext[] {
		return this.getTypedRuleContexts(Column_nameContext) as Column_nameContext[];
	}
	public column_name(i: number): Column_nameContext {
		return this.getTypedRuleContext(Column_nameContext, i) as Column_nameContext;
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_cte_table_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterCte_table_name) {
	 		listener.enterCte_table_name(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitCte_table_name) {
	 		listener.exitCte_table_name(this);
		}
	}
}


export class Recursive_cteContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public cte_table_name(): Cte_table_nameContext {
		return this.getTypedRuleContext(Cte_table_nameContext, 0) as Cte_table_nameContext;
	}
	public AS_(): TerminalNode {
		return this.getToken(SQLiteParser.AS_, 0);
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public initial_select(): Initial_selectContext {
		return this.getTypedRuleContext(Initial_selectContext, 0) as Initial_selectContext;
	}
	public UNION_(): TerminalNode {
		return this.getToken(SQLiteParser.UNION_, 0);
	}
	public recursive_select(): Recursive_selectContext {
		return this.getTypedRuleContext(Recursive_selectContext, 0) as Recursive_selectContext;
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public ALL_(): TerminalNode {
		return this.getToken(SQLiteParser.ALL_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_recursive_cte;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterRecursive_cte) {
	 		listener.enterRecursive_cte(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitRecursive_cte) {
	 		listener.exitRecursive_cte(this);
		}
	}
}


export class Common_table_expressionContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public AS_(): TerminalNode {
		return this.getToken(SQLiteParser.AS_, 0);
	}
	public OPEN_PAR_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.OPEN_PAR);
	}
	public OPEN_PAR(i: number): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, i);
	}
	public select_stmt(): Select_stmtContext {
		return this.getTypedRuleContext(Select_stmtContext, 0) as Select_stmtContext;
	}
	public CLOSE_PAR_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.CLOSE_PAR);
	}
	public CLOSE_PAR(i: number): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, i);
	}
	public column_name_list(): Column_nameContext[] {
		return this.getTypedRuleContexts(Column_nameContext) as Column_nameContext[];
	}
	public column_name(i: number): Column_nameContext {
		return this.getTypedRuleContext(Column_nameContext, i) as Column_nameContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_common_table_expression;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterCommon_table_expression) {
	 		listener.enterCommon_table_expression(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitCommon_table_expression) {
	 		listener.exitCommon_table_expression(this);
		}
	}
}


export class Delete_stmtContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DELETE_(): TerminalNode {
		return this.getToken(SQLiteParser.DELETE_, 0);
	}
	public FROM_(): TerminalNode {
		return this.getToken(SQLiteParser.FROM_, 0);
	}
	public qualified_table_name(): Qualified_table_nameContext {
		return this.getTypedRuleContext(Qualified_table_nameContext, 0) as Qualified_table_nameContext;
	}
	public with_clause(): With_clauseContext {
		return this.getTypedRuleContext(With_clauseContext, 0) as With_clauseContext;
	}
	public WHERE_(): TerminalNode {
		return this.getToken(SQLiteParser.WHERE_, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public returning_clause(): Returning_clauseContext {
		return this.getTypedRuleContext(Returning_clauseContext, 0) as Returning_clauseContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_delete_stmt;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterDelete_stmt) {
	 		listener.enterDelete_stmt(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitDelete_stmt) {
	 		listener.exitDelete_stmt(this);
		}
	}
}


export class Delete_stmt_limitedContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DELETE_(): TerminalNode {
		return this.getToken(SQLiteParser.DELETE_, 0);
	}
	public FROM_(): TerminalNode {
		return this.getToken(SQLiteParser.FROM_, 0);
	}
	public qualified_table_name(): Qualified_table_nameContext {
		return this.getTypedRuleContext(Qualified_table_nameContext, 0) as Qualified_table_nameContext;
	}
	public with_clause(): With_clauseContext {
		return this.getTypedRuleContext(With_clauseContext, 0) as With_clauseContext;
	}
	public WHERE_(): TerminalNode {
		return this.getToken(SQLiteParser.WHERE_, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public returning_clause(): Returning_clauseContext {
		return this.getTypedRuleContext(Returning_clauseContext, 0) as Returning_clauseContext;
	}
	public limit_stmt(): Limit_stmtContext {
		return this.getTypedRuleContext(Limit_stmtContext, 0) as Limit_stmtContext;
	}
	public order_by_stmt(): Order_by_stmtContext {
		return this.getTypedRuleContext(Order_by_stmtContext, 0) as Order_by_stmtContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_delete_stmt_limited;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterDelete_stmt_limited) {
	 		listener.enterDelete_stmt_limited(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitDelete_stmt_limited) {
	 		listener.exitDelete_stmt_limited(this);
		}
	}
}


export class Detach_stmtContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DETACH_(): TerminalNode {
		return this.getToken(SQLiteParser.DETACH_, 0);
	}
	public schema_name(): Schema_nameContext {
		return this.getTypedRuleContext(Schema_nameContext, 0) as Schema_nameContext;
	}
	public DATABASE_(): TerminalNode {
		return this.getToken(SQLiteParser.DATABASE_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_detach_stmt;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterDetach_stmt) {
	 		listener.enterDetach_stmt(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitDetach_stmt) {
	 		listener.exitDetach_stmt(this);
		}
	}
}


export class Drop_stmtContext extends ParserRuleContext {
	public _object!: Token;
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DROP_(): TerminalNode {
		return this.getToken(SQLiteParser.DROP_, 0);
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
	public INDEX_(): TerminalNode {
		return this.getToken(SQLiteParser.INDEX_, 0);
	}
	public TABLE_(): TerminalNode {
		return this.getToken(SQLiteParser.TABLE_, 0);
	}
	public TRIGGER_(): TerminalNode {
		return this.getToken(SQLiteParser.TRIGGER_, 0);
	}
	public VIEW_(): TerminalNode {
		return this.getToken(SQLiteParser.VIEW_, 0);
	}
	public IF_(): TerminalNode {
		return this.getToken(SQLiteParser.IF_, 0);
	}
	public EXISTS_(): TerminalNode {
		return this.getToken(SQLiteParser.EXISTS_, 0);
	}
	public schema_name(): Schema_nameContext {
		return this.getTypedRuleContext(Schema_nameContext, 0) as Schema_nameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(SQLiteParser.DOT, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_drop_stmt;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterDrop_stmt) {
	 		listener.enterDrop_stmt(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitDrop_stmt) {
	 		listener.exitDrop_stmt(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public literal_value(): Literal_valueContext {
		return this.getTypedRuleContext(Literal_valueContext, 0) as Literal_valueContext;
	}
	public BIND_PARAMETER(): TerminalNode {
		return this.getToken(SQLiteParser.BIND_PARAMETER, 0);
	}
	public column_name(): Column_nameContext {
		return this.getTypedRuleContext(Column_nameContext, 0) as Column_nameContext;
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(SQLiteParser.DOT, i);
	}
	public schema_name(): Schema_nameContext {
		return this.getTypedRuleContext(Schema_nameContext, 0) as Schema_nameContext;
	}
	public unary_operator(): Unary_operatorContext {
		return this.getTypedRuleContext(Unary_operatorContext, 0) as Unary_operatorContext;
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public function_name(): Function_nameContext {
		return this.getTypedRuleContext(Function_nameContext, 0) as Function_nameContext;
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public STAR(): TerminalNode {
		return this.getToken(SQLiteParser.STAR, 0);
	}
	public filter_clause(): Filter_clauseContext {
		return this.getTypedRuleContext(Filter_clauseContext, 0) as Filter_clauseContext;
	}
	public over_clause(): Over_clauseContext {
		return this.getTypedRuleContext(Over_clauseContext, 0) as Over_clauseContext;
	}
	public DISTINCT_(): TerminalNode {
		return this.getToken(SQLiteParser.DISTINCT_, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
	public CAST_(): TerminalNode {
		return this.getToken(SQLiteParser.CAST_, 0);
	}
	public AS_(): TerminalNode {
		return this.getToken(SQLiteParser.AS_, 0);
	}
	public type_name(): Type_nameContext {
		return this.getTypedRuleContext(Type_nameContext, 0) as Type_nameContext;
	}
	public select_stmt(): Select_stmtContext {
		return this.getTypedRuleContext(Select_stmtContext, 0) as Select_stmtContext;
	}
	public EXISTS_(): TerminalNode {
		return this.getToken(SQLiteParser.EXISTS_, 0);
	}
	public NOT_(): TerminalNode {
		return this.getToken(SQLiteParser.NOT_, 0);
	}
	public CASE_(): TerminalNode {
		return this.getToken(SQLiteParser.CASE_, 0);
	}
	public END_(): TerminalNode {
		return this.getToken(SQLiteParser.END_, 0);
	}
	public WHEN__list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.WHEN_);
	}
	public WHEN_(i: number): TerminalNode {
		return this.getToken(SQLiteParser.WHEN_, i);
	}
	public THEN__list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.THEN_);
	}
	public THEN_(i: number): TerminalNode {
		return this.getToken(SQLiteParser.THEN_, i);
	}
	public ELSE_(): TerminalNode {
		return this.getToken(SQLiteParser.ELSE_, 0);
	}
	public raise_function(): Raise_functionContext {
		return this.getTypedRuleContext(Raise_functionContext, 0) as Raise_functionContext;
	}
	public PIPE2(): TerminalNode {
		return this.getToken(SQLiteParser.PIPE2, 0);
	}
	public DIV(): TerminalNode {
		return this.getToken(SQLiteParser.DIV, 0);
	}
	public MOD(): TerminalNode {
		return this.getToken(SQLiteParser.MOD, 0);
	}
	public PLUS(): TerminalNode {
		return this.getToken(SQLiteParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(SQLiteParser.MINUS, 0);
	}
	public LT2(): TerminalNode {
		return this.getToken(SQLiteParser.LT2, 0);
	}
	public GT2(): TerminalNode {
		return this.getToken(SQLiteParser.GT2, 0);
	}
	public AMP(): TerminalNode {
		return this.getToken(SQLiteParser.AMP, 0);
	}
	public PIPE(): TerminalNode {
		return this.getToken(SQLiteParser.PIPE, 0);
	}
	public LT(): TerminalNode {
		return this.getToken(SQLiteParser.LT, 0);
	}
	public LT_EQ(): TerminalNode {
		return this.getToken(SQLiteParser.LT_EQ, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(SQLiteParser.GT, 0);
	}
	public GT_EQ(): TerminalNode {
		return this.getToken(SQLiteParser.GT_EQ, 0);
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(SQLiteParser.ASSIGN, 0);
	}
	public EQ(): TerminalNode {
		return this.getToken(SQLiteParser.EQ, 0);
	}
	public NOT_EQ1(): TerminalNode {
		return this.getToken(SQLiteParser.NOT_EQ1, 0);
	}
	public NOT_EQ2(): TerminalNode {
		return this.getToken(SQLiteParser.NOT_EQ2, 0);
	}
	public IS_(): TerminalNode {
		return this.getToken(SQLiteParser.IS_, 0);
	}
	public IN_(): TerminalNode {
		return this.getToken(SQLiteParser.IN_, 0);
	}
	public LIKE_(): TerminalNode {
		return this.getToken(SQLiteParser.LIKE_, 0);
	}
	public GLOB_(): TerminalNode {
		return this.getToken(SQLiteParser.GLOB_, 0);
	}
	public MATCH_(): TerminalNode {
		return this.getToken(SQLiteParser.MATCH_, 0);
	}
	public REGEXP_(): TerminalNode {
		return this.getToken(SQLiteParser.REGEXP_, 0);
	}
	public AND_(): TerminalNode {
		return this.getToken(SQLiteParser.AND_, 0);
	}
	public OR_(): TerminalNode {
		return this.getToken(SQLiteParser.OR_, 0);
	}
	public BETWEEN_(): TerminalNode {
		return this.getToken(SQLiteParser.BETWEEN_, 0);
	}
	public COLLATE_(): TerminalNode {
		return this.getToken(SQLiteParser.COLLATE_, 0);
	}
	public collation_name(): Collation_nameContext {
		return this.getTypedRuleContext(Collation_nameContext, 0) as Collation_nameContext;
	}
	public ESCAPE_(): TerminalNode {
		return this.getToken(SQLiteParser.ESCAPE_, 0);
	}
	public ISNULL_(): TerminalNode {
		return this.getToken(SQLiteParser.ISNULL_, 0);
	}
	public NOTNULL_(): TerminalNode {
		return this.getToken(SQLiteParser.NOTNULL_, 0);
	}
	public NULL_(): TerminalNode {
		return this.getToken(SQLiteParser.NULL_, 0);
	}
	public table_function_name(): Table_function_nameContext {
		return this.getTypedRuleContext(Table_function_nameContext, 0) as Table_function_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_expr;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterExpr) {
	 		listener.enterExpr(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitExpr) {
	 		listener.exitExpr(this);
		}
	}
}


export class Raise_functionContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RAISE_(): TerminalNode {
		return this.getToken(SQLiteParser.RAISE_, 0);
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public IGNORE_(): TerminalNode {
		return this.getToken(SQLiteParser.IGNORE_, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, 0);
	}
	public error_message(): Error_messageContext {
		return this.getTypedRuleContext(Error_messageContext, 0) as Error_messageContext;
	}
	public ROLLBACK_(): TerminalNode {
		return this.getToken(SQLiteParser.ROLLBACK_, 0);
	}
	public ABORT_(): TerminalNode {
		return this.getToken(SQLiteParser.ABORT_, 0);
	}
	public FAIL_(): TerminalNode {
		return this.getToken(SQLiteParser.FAIL_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_raise_function;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterRaise_function) {
	 		listener.enterRaise_function(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitRaise_function) {
	 		listener.exitRaise_function(this);
		}
	}
}


export class Literal_valueContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NUMERIC_LITERAL(): TerminalNode {
		return this.getToken(SQLiteParser.NUMERIC_LITERAL, 0);
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(SQLiteParser.STRING_LITERAL, 0);
	}
	public BLOB_LITERAL(): TerminalNode {
		return this.getToken(SQLiteParser.BLOB_LITERAL, 0);
	}
	public NULL_(): TerminalNode {
		return this.getToken(SQLiteParser.NULL_, 0);
	}
	public TRUE_(): TerminalNode {
		return this.getToken(SQLiteParser.TRUE_, 0);
	}
	public FALSE_(): TerminalNode {
		return this.getToken(SQLiteParser.FALSE_, 0);
	}
	public CURRENT_TIME_(): TerminalNode {
		return this.getToken(SQLiteParser.CURRENT_TIME_, 0);
	}
	public CURRENT_DATE_(): TerminalNode {
		return this.getToken(SQLiteParser.CURRENT_DATE_, 0);
	}
	public CURRENT_TIMESTAMP_(): TerminalNode {
		return this.getToken(SQLiteParser.CURRENT_TIMESTAMP_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_literal_value;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterLiteral_value) {
	 		listener.enterLiteral_value(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitLiteral_value) {
	 		listener.exitLiteral_value(this);
		}
	}
}


export class Value_rowContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_value_row;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterValue_row) {
	 		listener.enterValue_row(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitValue_row) {
	 		listener.exitValue_row(this);
		}
	}
}


export class Values_clauseContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VALUES_(): TerminalNode {
		return this.getToken(SQLiteParser.VALUES_, 0);
	}
	public value_row_list(): Value_rowContext[] {
		return this.getTypedRuleContexts(Value_rowContext) as Value_rowContext[];
	}
	public value_row(i: number): Value_rowContext {
		return this.getTypedRuleContext(Value_rowContext, i) as Value_rowContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_values_clause;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterValues_clause) {
	 		listener.enterValues_clause(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitValues_clause) {
	 		listener.exitValues_clause(this);
		}
	}
}


export class Insert_stmtContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INTO_(): TerminalNode {
		return this.getToken(SQLiteParser.INTO_, 0);
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public INSERT_(): TerminalNode {
		return this.getToken(SQLiteParser.INSERT_, 0);
	}
	public REPLACE_(): TerminalNode {
		return this.getToken(SQLiteParser.REPLACE_, 0);
	}
	public OR_(): TerminalNode {
		return this.getToken(SQLiteParser.OR_, 0);
	}
	public DEFAULT_(): TerminalNode {
		return this.getToken(SQLiteParser.DEFAULT_, 0);
	}
	public VALUES_(): TerminalNode {
		return this.getToken(SQLiteParser.VALUES_, 0);
	}
	public with_clause(): With_clauseContext {
		return this.getTypedRuleContext(With_clauseContext, 0) as With_clauseContext;
	}
	public ROLLBACK_(): TerminalNode {
		return this.getToken(SQLiteParser.ROLLBACK_, 0);
	}
	public ABORT_(): TerminalNode {
		return this.getToken(SQLiteParser.ABORT_, 0);
	}
	public FAIL_(): TerminalNode {
		return this.getToken(SQLiteParser.FAIL_, 0);
	}
	public IGNORE_(): TerminalNode {
		return this.getToken(SQLiteParser.IGNORE_, 0);
	}
	public schema_name(): Schema_nameContext {
		return this.getTypedRuleContext(Schema_nameContext, 0) as Schema_nameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(SQLiteParser.DOT, 0);
	}
	public AS_(): TerminalNode {
		return this.getToken(SQLiteParser.AS_, 0);
	}
	public table_alias(): Table_aliasContext {
		return this.getTypedRuleContext(Table_aliasContext, 0) as Table_aliasContext;
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public column_name_list(): Column_nameContext[] {
		return this.getTypedRuleContexts(Column_nameContext) as Column_nameContext[];
	}
	public column_name(i: number): Column_nameContext {
		return this.getTypedRuleContext(Column_nameContext, i) as Column_nameContext;
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public returning_clause(): Returning_clauseContext {
		return this.getTypedRuleContext(Returning_clauseContext, 0) as Returning_clauseContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
	public values_clause(): Values_clauseContext {
		return this.getTypedRuleContext(Values_clauseContext, 0) as Values_clauseContext;
	}
	public select_stmt(): Select_stmtContext {
		return this.getTypedRuleContext(Select_stmtContext, 0) as Select_stmtContext;
	}
	public upsert_clause(): Upsert_clauseContext {
		return this.getTypedRuleContext(Upsert_clauseContext, 0) as Upsert_clauseContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_insert_stmt;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterInsert_stmt) {
	 		listener.enterInsert_stmt(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitInsert_stmt) {
	 		listener.exitInsert_stmt(this);
		}
	}
}


export class Returning_clauseContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RETURNING_(): TerminalNode {
		return this.getToken(SQLiteParser.RETURNING_, 0);
	}
	public result_column_list(): Result_columnContext[] {
		return this.getTypedRuleContexts(Result_columnContext) as Result_columnContext[];
	}
	public result_column(i: number): Result_columnContext {
		return this.getTypedRuleContext(Result_columnContext, i) as Result_columnContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_returning_clause;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterReturning_clause) {
	 		listener.enterReturning_clause(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitReturning_clause) {
	 		listener.exitReturning_clause(this);
		}
	}
}


export class Upsert_clauseContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ON_(): TerminalNode {
		return this.getToken(SQLiteParser.ON_, 0);
	}
	public CONFLICT_(): TerminalNode {
		return this.getToken(SQLiteParser.CONFLICT_, 0);
	}
	public DO_(): TerminalNode {
		return this.getToken(SQLiteParser.DO_, 0);
	}
	public NOTHING_(): TerminalNode {
		return this.getToken(SQLiteParser.NOTHING_, 0);
	}
	public UPDATE_(): TerminalNode {
		return this.getToken(SQLiteParser.UPDATE_, 0);
	}
	public SET_(): TerminalNode {
		return this.getToken(SQLiteParser.SET_, 0);
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public indexed_column_list(): Indexed_columnContext[] {
		return this.getTypedRuleContexts(Indexed_columnContext) as Indexed_columnContext[];
	}
	public indexed_column(i: number): Indexed_columnContext {
		return this.getTypedRuleContext(Indexed_columnContext, i) as Indexed_columnContext;
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public ASSIGN_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.ASSIGN);
	}
	public ASSIGN(i: number): TerminalNode {
		return this.getToken(SQLiteParser.ASSIGN, i);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
	public WHERE__list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.WHERE_);
	}
	public WHERE_(i: number): TerminalNode {
		return this.getToken(SQLiteParser.WHERE_, i);
	}
	public column_name_list(): Column_nameContext[] {
		return this.getTypedRuleContexts(Column_nameContext) as Column_nameContext[];
	}
	public column_name(i: number): Column_nameContext {
		return this.getTypedRuleContext(Column_nameContext, i) as Column_nameContext;
	}
	public column_name_list_list(): Column_name_listContext[] {
		return this.getTypedRuleContexts(Column_name_listContext) as Column_name_listContext[];
	}
	public column_name_list(i: number): Column_name_listContext {
		return this.getTypedRuleContext(Column_name_listContext, i) as Column_name_listContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_upsert_clause;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterUpsert_clause) {
	 		listener.enterUpsert_clause(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitUpsert_clause) {
	 		listener.exitUpsert_clause(this);
		}
	}
}


export class Pragma_stmtContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PRAGMA_(): TerminalNode {
		return this.getToken(SQLiteParser.PRAGMA_, 0);
	}
	public pragma_name(): Pragma_nameContext {
		return this.getTypedRuleContext(Pragma_nameContext, 0) as Pragma_nameContext;
	}
	public schema_name(): Schema_nameContext {
		return this.getTypedRuleContext(Schema_nameContext, 0) as Schema_nameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(SQLiteParser.DOT, 0);
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(SQLiteParser.ASSIGN, 0);
	}
	public pragma_value(): Pragma_valueContext {
		return this.getTypedRuleContext(Pragma_valueContext, 0) as Pragma_valueContext;
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_pragma_stmt;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterPragma_stmt) {
	 		listener.enterPragma_stmt(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitPragma_stmt) {
	 		listener.exitPragma_stmt(this);
		}
	}
}


export class Pragma_valueContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public signed_number(): Signed_numberContext {
		return this.getTypedRuleContext(Signed_numberContext, 0) as Signed_numberContext;
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(SQLiteParser.STRING_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_pragma_value;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterPragma_value) {
	 		listener.enterPragma_value(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitPragma_value) {
	 		listener.exitPragma_value(this);
		}
	}
}


export class Reindex_stmtContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public REINDEX_(): TerminalNode {
		return this.getToken(SQLiteParser.REINDEX_, 0);
	}
	public collation_name(): Collation_nameContext {
		return this.getTypedRuleContext(Collation_nameContext, 0) as Collation_nameContext;
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public index_name(): Index_nameContext {
		return this.getTypedRuleContext(Index_nameContext, 0) as Index_nameContext;
	}
	public schema_name(): Schema_nameContext {
		return this.getTypedRuleContext(Schema_nameContext, 0) as Schema_nameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(SQLiteParser.DOT, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_reindex_stmt;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterReindex_stmt) {
	 		listener.enterReindex_stmt(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitReindex_stmt) {
	 		listener.exitReindex_stmt(this);
		}
	}
}


export class Select_stmtContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public select_core_list(): Select_coreContext[] {
		return this.getTypedRuleContexts(Select_coreContext) as Select_coreContext[];
	}
	public select_core(i: number): Select_coreContext {
		return this.getTypedRuleContext(Select_coreContext, i) as Select_coreContext;
	}
	public common_table_stmt(): Common_table_stmtContext {
		return this.getTypedRuleContext(Common_table_stmtContext, 0) as Common_table_stmtContext;
	}
	public compound_operator_list(): Compound_operatorContext[] {
		return this.getTypedRuleContexts(Compound_operatorContext) as Compound_operatorContext[];
	}
	public compound_operator(i: number): Compound_operatorContext {
		return this.getTypedRuleContext(Compound_operatorContext, i) as Compound_operatorContext;
	}
	public order_by_stmt(): Order_by_stmtContext {
		return this.getTypedRuleContext(Order_by_stmtContext, 0) as Order_by_stmtContext;
	}
	public limit_stmt(): Limit_stmtContext {
		return this.getTypedRuleContext(Limit_stmtContext, 0) as Limit_stmtContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_select_stmt;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterSelect_stmt) {
	 		listener.enterSelect_stmt(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitSelect_stmt) {
	 		listener.exitSelect_stmt(this);
		}
	}
}


export class Join_clauseContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public table_or_subquery_list(): Table_or_subqueryContext[] {
		return this.getTypedRuleContexts(Table_or_subqueryContext) as Table_or_subqueryContext[];
	}
	public table_or_subquery(i: number): Table_or_subqueryContext {
		return this.getTypedRuleContext(Table_or_subqueryContext, i) as Table_or_subqueryContext;
	}
	public join_operator_list(): Join_operatorContext[] {
		return this.getTypedRuleContexts(Join_operatorContext) as Join_operatorContext[];
	}
	public join_operator(i: number): Join_operatorContext {
		return this.getTypedRuleContext(Join_operatorContext, i) as Join_operatorContext;
	}
	public join_constraint_list(): Join_constraintContext[] {
		return this.getTypedRuleContexts(Join_constraintContext) as Join_constraintContext[];
	}
	public join_constraint(i: number): Join_constraintContext {
		return this.getTypedRuleContext(Join_constraintContext, i) as Join_constraintContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_join_clause;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterJoin_clause) {
	 		listener.enterJoin_clause(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitJoin_clause) {
	 		listener.exitJoin_clause(this);
		}
	}
}


export class Select_coreContext extends ParserRuleContext {
	public _whereExpr!: ExprContext;
	public _expr!: ExprContext;
	public _groupByExpr: ExprContext[] = [];
	public _havingExpr!: ExprContext;
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SELECT_(): TerminalNode {
		return this.getToken(SQLiteParser.SELECT_, 0);
	}
	public result_column_list(): Result_columnContext[] {
		return this.getTypedRuleContexts(Result_columnContext) as Result_columnContext[];
	}
	public result_column(i: number): Result_columnContext {
		return this.getTypedRuleContext(Result_columnContext, i) as Result_columnContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
	public FROM_(): TerminalNode {
		return this.getToken(SQLiteParser.FROM_, 0);
	}
	public WHERE_(): TerminalNode {
		return this.getToken(SQLiteParser.WHERE_, 0);
	}
	public GROUP_(): TerminalNode {
		return this.getToken(SQLiteParser.GROUP_, 0);
	}
	public BY_(): TerminalNode {
		return this.getToken(SQLiteParser.BY_, 0);
	}
	public WINDOW_(): TerminalNode {
		return this.getToken(SQLiteParser.WINDOW_, 0);
	}
	public window_name_list(): Window_nameContext[] {
		return this.getTypedRuleContexts(Window_nameContext) as Window_nameContext[];
	}
	public window_name(i: number): Window_nameContext {
		return this.getTypedRuleContext(Window_nameContext, i) as Window_nameContext;
	}
	public AS__list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.AS_);
	}
	public AS_(i: number): TerminalNode {
		return this.getToken(SQLiteParser.AS_, i);
	}
	public window_defn_list(): Window_defnContext[] {
		return this.getTypedRuleContexts(Window_defnContext) as Window_defnContext[];
	}
	public window_defn(i: number): Window_defnContext {
		return this.getTypedRuleContext(Window_defnContext, i) as Window_defnContext;
	}
	public DISTINCT_(): TerminalNode {
		return this.getToken(SQLiteParser.DISTINCT_, 0);
	}
	public ALL_(): TerminalNode {
		return this.getToken(SQLiteParser.ALL_, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public table_or_subquery_list(): Table_or_subqueryContext[] {
		return this.getTypedRuleContexts(Table_or_subqueryContext) as Table_or_subqueryContext[];
	}
	public table_or_subquery(i: number): Table_or_subqueryContext {
		return this.getTypedRuleContext(Table_or_subqueryContext, i) as Table_or_subqueryContext;
	}
	public join_clause(): Join_clauseContext {
		return this.getTypedRuleContext(Join_clauseContext, 0) as Join_clauseContext;
	}
	public HAVING_(): TerminalNode {
		return this.getToken(SQLiteParser.HAVING_, 0);
	}
	public values_clause(): Values_clauseContext {
		return this.getTypedRuleContext(Values_clauseContext, 0) as Values_clauseContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_select_core;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterSelect_core) {
	 		listener.enterSelect_core(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitSelect_core) {
	 		listener.exitSelect_core(this);
		}
	}
}


export class Factored_select_stmtContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public select_stmt(): Select_stmtContext {
		return this.getTypedRuleContext(Select_stmtContext, 0) as Select_stmtContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_factored_select_stmt;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterFactored_select_stmt) {
	 		listener.enterFactored_select_stmt(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitFactored_select_stmt) {
	 		listener.exitFactored_select_stmt(this);
		}
	}
}


export class Simple_select_stmtContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public select_core(): Select_coreContext {
		return this.getTypedRuleContext(Select_coreContext, 0) as Select_coreContext;
	}
	public common_table_stmt(): Common_table_stmtContext {
		return this.getTypedRuleContext(Common_table_stmtContext, 0) as Common_table_stmtContext;
	}
	public order_by_stmt(): Order_by_stmtContext {
		return this.getTypedRuleContext(Order_by_stmtContext, 0) as Order_by_stmtContext;
	}
	public limit_stmt(): Limit_stmtContext {
		return this.getTypedRuleContext(Limit_stmtContext, 0) as Limit_stmtContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_simple_select_stmt;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterSimple_select_stmt) {
	 		listener.enterSimple_select_stmt(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitSimple_select_stmt) {
	 		listener.exitSimple_select_stmt(this);
		}
	}
}


export class Compound_select_stmtContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public select_core_list(): Select_coreContext[] {
		return this.getTypedRuleContexts(Select_coreContext) as Select_coreContext[];
	}
	public select_core(i: number): Select_coreContext {
		return this.getTypedRuleContext(Select_coreContext, i) as Select_coreContext;
	}
	public common_table_stmt(): Common_table_stmtContext {
		return this.getTypedRuleContext(Common_table_stmtContext, 0) as Common_table_stmtContext;
	}
	public order_by_stmt(): Order_by_stmtContext {
		return this.getTypedRuleContext(Order_by_stmtContext, 0) as Order_by_stmtContext;
	}
	public limit_stmt(): Limit_stmtContext {
		return this.getTypedRuleContext(Limit_stmtContext, 0) as Limit_stmtContext;
	}
	public UNION__list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.UNION_);
	}
	public UNION_(i: number): TerminalNode {
		return this.getToken(SQLiteParser.UNION_, i);
	}
	public INTERSECT__list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.INTERSECT_);
	}
	public INTERSECT_(i: number): TerminalNode {
		return this.getToken(SQLiteParser.INTERSECT_, i);
	}
	public EXCEPT__list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.EXCEPT_);
	}
	public EXCEPT_(i: number): TerminalNode {
		return this.getToken(SQLiteParser.EXCEPT_, i);
	}
	public ALL__list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.ALL_);
	}
	public ALL_(i: number): TerminalNode {
		return this.getToken(SQLiteParser.ALL_, i);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_compound_select_stmt;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterCompound_select_stmt) {
	 		listener.enterCompound_select_stmt(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitCompound_select_stmt) {
	 		listener.exitCompound_select_stmt(this);
		}
	}
}


export class Table_or_subqueryContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public schema_name(): Schema_nameContext {
		return this.getTypedRuleContext(Schema_nameContext, 0) as Schema_nameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(SQLiteParser.DOT, 0);
	}
	public table_alias(): Table_aliasContext {
		return this.getTypedRuleContext(Table_aliasContext, 0) as Table_aliasContext;
	}
	public INDEXED_(): TerminalNode {
		return this.getToken(SQLiteParser.INDEXED_, 0);
	}
	public BY_(): TerminalNode {
		return this.getToken(SQLiteParser.BY_, 0);
	}
	public index_name(): Index_nameContext {
		return this.getTypedRuleContext(Index_nameContext, 0) as Index_nameContext;
	}
	public NOT_(): TerminalNode {
		return this.getToken(SQLiteParser.NOT_, 0);
	}
	public AS_(): TerminalNode {
		return this.getToken(SQLiteParser.AS_, 0);
	}
	public table_function_name(): Table_function_nameContext {
		return this.getTypedRuleContext(Table_function_nameContext, 0) as Table_function_nameContext;
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
	public table_or_subquery_list(): Table_or_subqueryContext[] {
		return this.getTypedRuleContexts(Table_or_subqueryContext) as Table_or_subqueryContext[];
	}
	public table_or_subquery(i: number): Table_or_subqueryContext {
		return this.getTypedRuleContext(Table_or_subqueryContext, i) as Table_or_subqueryContext;
	}
	public join_clause(): Join_clauseContext {
		return this.getTypedRuleContext(Join_clauseContext, 0) as Join_clauseContext;
	}
	public select_stmt(): Select_stmtContext {
		return this.getTypedRuleContext(Select_stmtContext, 0) as Select_stmtContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_table_or_subquery;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterTable_or_subquery) {
	 		listener.enterTable_or_subquery(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitTable_or_subquery) {
	 		listener.exitTable_or_subquery(this);
		}
	}
}


export class Result_columnContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STAR(): TerminalNode {
		return this.getToken(SQLiteParser.STAR, 0);
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(SQLiteParser.DOT, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public column_alias(): Column_aliasContext {
		return this.getTypedRuleContext(Column_aliasContext, 0) as Column_aliasContext;
	}
	public AS_(): TerminalNode {
		return this.getToken(SQLiteParser.AS_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_result_column;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterResult_column) {
	 		listener.enterResult_column(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitResult_column) {
	 		listener.exitResult_column(this);
		}
	}
}


export class Join_operatorContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COMMA(): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, 0);
	}
	public JOIN_(): TerminalNode {
		return this.getToken(SQLiteParser.JOIN_, 0);
	}
	public NATURAL_(): TerminalNode {
		return this.getToken(SQLiteParser.NATURAL_, 0);
	}
	public LEFT_(): TerminalNode {
		return this.getToken(SQLiteParser.LEFT_, 0);
	}
	public INNER_(): TerminalNode {
		return this.getToken(SQLiteParser.INNER_, 0);
	}
	public CROSS_(): TerminalNode {
		return this.getToken(SQLiteParser.CROSS_, 0);
	}
	public OUTER_(): TerminalNode {
		return this.getToken(SQLiteParser.OUTER_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_join_operator;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterJoin_operator) {
	 		listener.enterJoin_operator(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitJoin_operator) {
	 		listener.exitJoin_operator(this);
		}
	}
}


export class Join_constraintContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ON_(): TerminalNode {
		return this.getToken(SQLiteParser.ON_, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public USING_(): TerminalNode {
		return this.getToken(SQLiteParser.USING_, 0);
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public column_name_list(): Column_nameContext[] {
		return this.getTypedRuleContexts(Column_nameContext) as Column_nameContext[];
	}
	public column_name(i: number): Column_nameContext {
		return this.getTypedRuleContext(Column_nameContext, i) as Column_nameContext;
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_join_constraint;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterJoin_constraint) {
	 		listener.enterJoin_constraint(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitJoin_constraint) {
	 		listener.exitJoin_constraint(this);
		}
	}
}


export class Compound_operatorContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public UNION_(): TerminalNode {
		return this.getToken(SQLiteParser.UNION_, 0);
	}
	public ALL_(): TerminalNode {
		return this.getToken(SQLiteParser.ALL_, 0);
	}
	public INTERSECT_(): TerminalNode {
		return this.getToken(SQLiteParser.INTERSECT_, 0);
	}
	public EXCEPT_(): TerminalNode {
		return this.getToken(SQLiteParser.EXCEPT_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_compound_operator;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterCompound_operator) {
	 		listener.enterCompound_operator(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitCompound_operator) {
	 		listener.exitCompound_operator(this);
		}
	}
}


export class Update_stmtContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public UPDATE_(): TerminalNode {
		return this.getToken(SQLiteParser.UPDATE_, 0);
	}
	public qualified_table_name(): Qualified_table_nameContext {
		return this.getTypedRuleContext(Qualified_table_nameContext, 0) as Qualified_table_nameContext;
	}
	public SET_(): TerminalNode {
		return this.getToken(SQLiteParser.SET_, 0);
	}
	public ASSIGN_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.ASSIGN);
	}
	public ASSIGN(i: number): TerminalNode {
		return this.getToken(SQLiteParser.ASSIGN, i);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public column_name_list(): Column_nameContext[] {
		return this.getTypedRuleContexts(Column_nameContext) as Column_nameContext[];
	}
	public column_name(i: number): Column_nameContext {
		return this.getTypedRuleContext(Column_nameContext, i) as Column_nameContext;
	}
	public column_name_list_list(): Column_name_listContext[] {
		return this.getTypedRuleContexts(Column_name_listContext) as Column_name_listContext[];
	}
	public column_name_list(i: number): Column_name_listContext {
		return this.getTypedRuleContext(Column_name_listContext, i) as Column_name_listContext;
	}
	public with_clause(): With_clauseContext {
		return this.getTypedRuleContext(With_clauseContext, 0) as With_clauseContext;
	}
	public OR_(): TerminalNode {
		return this.getToken(SQLiteParser.OR_, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
	public FROM_(): TerminalNode {
		return this.getToken(SQLiteParser.FROM_, 0);
	}
	public WHERE_(): TerminalNode {
		return this.getToken(SQLiteParser.WHERE_, 0);
	}
	public returning_clause(): Returning_clauseContext {
		return this.getTypedRuleContext(Returning_clauseContext, 0) as Returning_clauseContext;
	}
	public ROLLBACK_(): TerminalNode {
		return this.getToken(SQLiteParser.ROLLBACK_, 0);
	}
	public ABORT_(): TerminalNode {
		return this.getToken(SQLiteParser.ABORT_, 0);
	}
	public REPLACE_(): TerminalNode {
		return this.getToken(SQLiteParser.REPLACE_, 0);
	}
	public FAIL_(): TerminalNode {
		return this.getToken(SQLiteParser.FAIL_, 0);
	}
	public IGNORE_(): TerminalNode {
		return this.getToken(SQLiteParser.IGNORE_, 0);
	}
	public table_or_subquery_list(): Table_or_subqueryContext[] {
		return this.getTypedRuleContexts(Table_or_subqueryContext) as Table_or_subqueryContext[];
	}
	public table_or_subquery(i: number): Table_or_subqueryContext {
		return this.getTypedRuleContext(Table_or_subqueryContext, i) as Table_or_subqueryContext;
	}
	public join_clause(): Join_clauseContext {
		return this.getTypedRuleContext(Join_clauseContext, 0) as Join_clauseContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_update_stmt;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterUpdate_stmt) {
	 		listener.enterUpdate_stmt(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitUpdate_stmt) {
	 		listener.exitUpdate_stmt(this);
		}
	}
}


export class Column_name_listContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public column_name_list(): Column_nameContext[] {
		return this.getTypedRuleContexts(Column_nameContext) as Column_nameContext[];
	}
	public column_name(i: number): Column_nameContext {
		return this.getTypedRuleContext(Column_nameContext, i) as Column_nameContext;
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_column_name_list;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterColumn_name_list) {
	 		listener.enterColumn_name_list(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitColumn_name_list) {
	 		listener.exitColumn_name_list(this);
		}
	}
}


export class Update_stmt_limitedContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public UPDATE_(): TerminalNode {
		return this.getToken(SQLiteParser.UPDATE_, 0);
	}
	public qualified_table_name(): Qualified_table_nameContext {
		return this.getTypedRuleContext(Qualified_table_nameContext, 0) as Qualified_table_nameContext;
	}
	public SET_(): TerminalNode {
		return this.getToken(SQLiteParser.SET_, 0);
	}
	public ASSIGN_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.ASSIGN);
	}
	public ASSIGN(i: number): TerminalNode {
		return this.getToken(SQLiteParser.ASSIGN, i);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public column_name_list(): Column_nameContext[] {
		return this.getTypedRuleContexts(Column_nameContext) as Column_nameContext[];
	}
	public column_name(i: number): Column_nameContext {
		return this.getTypedRuleContext(Column_nameContext, i) as Column_nameContext;
	}
	public column_name_list_list(): Column_name_listContext[] {
		return this.getTypedRuleContexts(Column_name_listContext) as Column_name_listContext[];
	}
	public column_name_list(i: number): Column_name_listContext {
		return this.getTypedRuleContext(Column_name_listContext, i) as Column_name_listContext;
	}
	public with_clause(): With_clauseContext {
		return this.getTypedRuleContext(With_clauseContext, 0) as With_clauseContext;
	}
	public OR_(): TerminalNode {
		return this.getToken(SQLiteParser.OR_, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
	public WHERE_(): TerminalNode {
		return this.getToken(SQLiteParser.WHERE_, 0);
	}
	public returning_clause(): Returning_clauseContext {
		return this.getTypedRuleContext(Returning_clauseContext, 0) as Returning_clauseContext;
	}
	public limit_stmt(): Limit_stmtContext {
		return this.getTypedRuleContext(Limit_stmtContext, 0) as Limit_stmtContext;
	}
	public ROLLBACK_(): TerminalNode {
		return this.getToken(SQLiteParser.ROLLBACK_, 0);
	}
	public ABORT_(): TerminalNode {
		return this.getToken(SQLiteParser.ABORT_, 0);
	}
	public REPLACE_(): TerminalNode {
		return this.getToken(SQLiteParser.REPLACE_, 0);
	}
	public FAIL_(): TerminalNode {
		return this.getToken(SQLiteParser.FAIL_, 0);
	}
	public IGNORE_(): TerminalNode {
		return this.getToken(SQLiteParser.IGNORE_, 0);
	}
	public order_by_stmt(): Order_by_stmtContext {
		return this.getTypedRuleContext(Order_by_stmtContext, 0) as Order_by_stmtContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_update_stmt_limited;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterUpdate_stmt_limited) {
	 		listener.enterUpdate_stmt_limited(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitUpdate_stmt_limited) {
	 		listener.exitUpdate_stmt_limited(this);
		}
	}
}


export class Qualified_table_nameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public table_name(): Table_nameContext {
		return this.getTypedRuleContext(Table_nameContext, 0) as Table_nameContext;
	}
	public schema_name(): Schema_nameContext {
		return this.getTypedRuleContext(Schema_nameContext, 0) as Schema_nameContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(SQLiteParser.DOT, 0);
	}
	public AS_(): TerminalNode {
		return this.getToken(SQLiteParser.AS_, 0);
	}
	public alias(): AliasContext {
		return this.getTypedRuleContext(AliasContext, 0) as AliasContext;
	}
	public INDEXED_(): TerminalNode {
		return this.getToken(SQLiteParser.INDEXED_, 0);
	}
	public BY_(): TerminalNode {
		return this.getToken(SQLiteParser.BY_, 0);
	}
	public index_name(): Index_nameContext {
		return this.getTypedRuleContext(Index_nameContext, 0) as Index_nameContext;
	}
	public NOT_(): TerminalNode {
		return this.getToken(SQLiteParser.NOT_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_qualified_table_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterQualified_table_name) {
	 		listener.enterQualified_table_name(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitQualified_table_name) {
	 		listener.exitQualified_table_name(this);
		}
	}
}


export class Vacuum_stmtContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VACUUM_(): TerminalNode {
		return this.getToken(SQLiteParser.VACUUM_, 0);
	}
	public schema_name(): Schema_nameContext {
		return this.getTypedRuleContext(Schema_nameContext, 0) as Schema_nameContext;
	}
	public INTO_(): TerminalNode {
		return this.getToken(SQLiteParser.INTO_, 0);
	}
	public filename(): FilenameContext {
		return this.getTypedRuleContext(FilenameContext, 0) as FilenameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_vacuum_stmt;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterVacuum_stmt) {
	 		listener.enterVacuum_stmt(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitVacuum_stmt) {
	 		listener.exitVacuum_stmt(this);
		}
	}
}


export class Filter_clauseContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FILTER_(): TerminalNode {
		return this.getToken(SQLiteParser.FILTER_, 0);
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public WHERE_(): TerminalNode {
		return this.getToken(SQLiteParser.WHERE_, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_filter_clause;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterFilter_clause) {
	 		listener.enterFilter_clause(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitFilter_clause) {
	 		listener.exitFilter_clause(this);
		}
	}
}


export class Window_defnContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public ORDER_(): TerminalNode {
		return this.getToken(SQLiteParser.ORDER_, 0);
	}
	public BY__list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.BY_);
	}
	public BY_(i: number): TerminalNode {
		return this.getToken(SQLiteParser.BY_, i);
	}
	public ordering_term_list(): Ordering_termContext[] {
		return this.getTypedRuleContexts(Ordering_termContext) as Ordering_termContext[];
	}
	public ordering_term(i: number): Ordering_termContext {
		return this.getTypedRuleContext(Ordering_termContext, i) as Ordering_termContext;
	}
	public base_window_name(): Base_window_nameContext {
		return this.getTypedRuleContext(Base_window_nameContext, 0) as Base_window_nameContext;
	}
	public PARTITION_(): TerminalNode {
		return this.getToken(SQLiteParser.PARTITION_, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public frame_spec(): Frame_specContext {
		return this.getTypedRuleContext(Frame_specContext, 0) as Frame_specContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_window_defn;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterWindow_defn) {
	 		listener.enterWindow_defn(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitWindow_defn) {
	 		listener.exitWindow_defn(this);
		}
	}
}


export class Over_clauseContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OVER_(): TerminalNode {
		return this.getToken(SQLiteParser.OVER_, 0);
	}
	public window_name(): Window_nameContext {
		return this.getTypedRuleContext(Window_nameContext, 0) as Window_nameContext;
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public base_window_name(): Base_window_nameContext {
		return this.getTypedRuleContext(Base_window_nameContext, 0) as Base_window_nameContext;
	}
	public PARTITION_(): TerminalNode {
		return this.getToken(SQLiteParser.PARTITION_, 0);
	}
	public BY__list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.BY_);
	}
	public BY_(i: number): TerminalNode {
		return this.getToken(SQLiteParser.BY_, i);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public ORDER_(): TerminalNode {
		return this.getToken(SQLiteParser.ORDER_, 0);
	}
	public ordering_term_list(): Ordering_termContext[] {
		return this.getTypedRuleContexts(Ordering_termContext) as Ordering_termContext[];
	}
	public ordering_term(i: number): Ordering_termContext {
		return this.getTypedRuleContext(Ordering_termContext, i) as Ordering_termContext;
	}
	public frame_spec(): Frame_specContext {
		return this.getTypedRuleContext(Frame_specContext, 0) as Frame_specContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_over_clause;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterOver_clause) {
	 		listener.enterOver_clause(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitOver_clause) {
	 		listener.exitOver_clause(this);
		}
	}
}


export class Frame_specContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public frame_clause(): Frame_clauseContext {
		return this.getTypedRuleContext(Frame_clauseContext, 0) as Frame_clauseContext;
	}
	public EXCLUDE_(): TerminalNode {
		return this.getToken(SQLiteParser.EXCLUDE_, 0);
	}
	public NO_(): TerminalNode {
		return this.getToken(SQLiteParser.NO_, 0);
	}
	public OTHERS_(): TerminalNode {
		return this.getToken(SQLiteParser.OTHERS_, 0);
	}
	public CURRENT_(): TerminalNode {
		return this.getToken(SQLiteParser.CURRENT_, 0);
	}
	public ROW_(): TerminalNode {
		return this.getToken(SQLiteParser.ROW_, 0);
	}
	public GROUP_(): TerminalNode {
		return this.getToken(SQLiteParser.GROUP_, 0);
	}
	public TIES_(): TerminalNode {
		return this.getToken(SQLiteParser.TIES_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_frame_spec;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterFrame_spec) {
	 		listener.enterFrame_spec(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitFrame_spec) {
	 		listener.exitFrame_spec(this);
		}
	}
}


export class Frame_clauseContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RANGE_(): TerminalNode {
		return this.getToken(SQLiteParser.RANGE_, 0);
	}
	public ROWS_(): TerminalNode {
		return this.getToken(SQLiteParser.ROWS_, 0);
	}
	public GROUPS_(): TerminalNode {
		return this.getToken(SQLiteParser.GROUPS_, 0);
	}
	public frame_single(): Frame_singleContext {
		return this.getTypedRuleContext(Frame_singleContext, 0) as Frame_singleContext;
	}
	public BETWEEN_(): TerminalNode {
		return this.getToken(SQLiteParser.BETWEEN_, 0);
	}
	public frame_left(): Frame_leftContext {
		return this.getTypedRuleContext(Frame_leftContext, 0) as Frame_leftContext;
	}
	public AND_(): TerminalNode {
		return this.getToken(SQLiteParser.AND_, 0);
	}
	public frame_right(): Frame_rightContext {
		return this.getTypedRuleContext(Frame_rightContext, 0) as Frame_rightContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_frame_clause;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterFrame_clause) {
	 		listener.enterFrame_clause(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitFrame_clause) {
	 		listener.exitFrame_clause(this);
		}
	}
}


export class Simple_function_invocationContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public simple_func(): Simple_funcContext {
		return this.getTypedRuleContext(Simple_funcContext, 0) as Simple_funcContext;
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public STAR(): TerminalNode {
		return this.getToken(SQLiteParser.STAR, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_simple_function_invocation;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterSimple_function_invocation) {
	 		listener.enterSimple_function_invocation(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitSimple_function_invocation) {
	 		listener.exitSimple_function_invocation(this);
		}
	}
}


export class Aggregate_function_invocationContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public aggregate_func(): Aggregate_funcContext {
		return this.getTypedRuleContext(Aggregate_funcContext, 0) as Aggregate_funcContext;
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public STAR(): TerminalNode {
		return this.getToken(SQLiteParser.STAR, 0);
	}
	public filter_clause(): Filter_clauseContext {
		return this.getTypedRuleContext(Filter_clauseContext, 0) as Filter_clauseContext;
	}
	public DISTINCT_(): TerminalNode {
		return this.getToken(SQLiteParser.DISTINCT_, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_aggregate_function_invocation;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterAggregate_function_invocation) {
	 		listener.enterAggregate_function_invocation(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitAggregate_function_invocation) {
	 		listener.exitAggregate_function_invocation(this);
		}
	}
}


export class Window_function_invocationContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public window_function(): Window_functionContext {
		return this.getTypedRuleContext(Window_functionContext, 0) as Window_functionContext;
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
	public OVER_(): TerminalNode {
		return this.getToken(SQLiteParser.OVER_, 0);
	}
	public window_defn(): Window_defnContext {
		return this.getTypedRuleContext(Window_defnContext, 0) as Window_defnContext;
	}
	public window_name(): Window_nameContext {
		return this.getTypedRuleContext(Window_nameContext, 0) as Window_nameContext;
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public STAR(): TerminalNode {
		return this.getToken(SQLiteParser.STAR, 0);
	}
	public filter_clause(): Filter_clauseContext {
		return this.getTypedRuleContext(Filter_clauseContext, 0) as Filter_clauseContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_window_function_invocation;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterWindow_function_invocation) {
	 		listener.enterWindow_function_invocation(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitWindow_function_invocation) {
	 		listener.exitWindow_function_invocation(this);
		}
	}
}


export class Common_table_stmtContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WITH_(): TerminalNode {
		return this.getToken(SQLiteParser.WITH_, 0);
	}
	public common_table_expression_list(): Common_table_expressionContext[] {
		return this.getTypedRuleContexts(Common_table_expressionContext) as Common_table_expressionContext[];
	}
	public common_table_expression(i: number): Common_table_expressionContext {
		return this.getTypedRuleContext(Common_table_expressionContext, i) as Common_table_expressionContext;
	}
	public RECURSIVE_(): TerminalNode {
		return this.getToken(SQLiteParser.RECURSIVE_, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_common_table_stmt;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterCommon_table_stmt) {
	 		listener.enterCommon_table_stmt(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitCommon_table_stmt) {
	 		listener.exitCommon_table_stmt(this);
		}
	}
}


export class Order_by_stmtContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ORDER_(): TerminalNode {
		return this.getToken(SQLiteParser.ORDER_, 0);
	}
	public BY_(): TerminalNode {
		return this.getToken(SQLiteParser.BY_, 0);
	}
	public ordering_term_list(): Ordering_termContext[] {
		return this.getTypedRuleContexts(Ordering_termContext) as Ordering_termContext[];
	}
	public ordering_term(i: number): Ordering_termContext {
		return this.getTypedRuleContext(Ordering_termContext, i) as Ordering_termContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_order_by_stmt;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterOrder_by_stmt) {
	 		listener.enterOrder_by_stmt(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitOrder_by_stmt) {
	 		listener.exitOrder_by_stmt(this);
		}
	}
}


export class Limit_stmtContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LIMIT_(): TerminalNode {
		return this.getToken(SQLiteParser.LIMIT_, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public OFFSET_(): TerminalNode {
		return this.getToken(SQLiteParser.OFFSET_, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_limit_stmt;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterLimit_stmt) {
	 		listener.enterLimit_stmt(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitLimit_stmt) {
	 		listener.exitLimit_stmt(this);
		}
	}
}


export class Ordering_termContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public COLLATE_(): TerminalNode {
		return this.getToken(SQLiteParser.COLLATE_, 0);
	}
	public collation_name(): Collation_nameContext {
		return this.getTypedRuleContext(Collation_nameContext, 0) as Collation_nameContext;
	}
	public asc_desc(): Asc_descContext {
		return this.getTypedRuleContext(Asc_descContext, 0) as Asc_descContext;
	}
	public NULLS_(): TerminalNode {
		return this.getToken(SQLiteParser.NULLS_, 0);
	}
	public FIRST_(): TerminalNode {
		return this.getToken(SQLiteParser.FIRST_, 0);
	}
	public LAST_(): TerminalNode {
		return this.getToken(SQLiteParser.LAST_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_ordering_term;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterOrdering_term) {
	 		listener.enterOrdering_term(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitOrdering_term) {
	 		listener.exitOrdering_term(this);
		}
	}
}


export class Asc_descContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ASC_(): TerminalNode {
		return this.getToken(SQLiteParser.ASC_, 0);
	}
	public DESC_(): TerminalNode {
		return this.getToken(SQLiteParser.DESC_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_asc_desc;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterAsc_desc) {
	 		listener.enterAsc_desc(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitAsc_desc) {
	 		listener.exitAsc_desc(this);
		}
	}
}


export class Frame_leftContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public PRECEDING_(): TerminalNode {
		return this.getToken(SQLiteParser.PRECEDING_, 0);
	}
	public FOLLOWING_(): TerminalNode {
		return this.getToken(SQLiteParser.FOLLOWING_, 0);
	}
	public CURRENT_(): TerminalNode {
		return this.getToken(SQLiteParser.CURRENT_, 0);
	}
	public ROW_(): TerminalNode {
		return this.getToken(SQLiteParser.ROW_, 0);
	}
	public UNBOUNDED_(): TerminalNode {
		return this.getToken(SQLiteParser.UNBOUNDED_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_frame_left;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterFrame_left) {
	 		listener.enterFrame_left(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitFrame_left) {
	 		listener.exitFrame_left(this);
		}
	}
}


export class Frame_rightContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public PRECEDING_(): TerminalNode {
		return this.getToken(SQLiteParser.PRECEDING_, 0);
	}
	public FOLLOWING_(): TerminalNode {
		return this.getToken(SQLiteParser.FOLLOWING_, 0);
	}
	public CURRENT_(): TerminalNode {
		return this.getToken(SQLiteParser.CURRENT_, 0);
	}
	public ROW_(): TerminalNode {
		return this.getToken(SQLiteParser.ROW_, 0);
	}
	public UNBOUNDED_(): TerminalNode {
		return this.getToken(SQLiteParser.UNBOUNDED_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_frame_right;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterFrame_right) {
	 		listener.enterFrame_right(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitFrame_right) {
	 		listener.exitFrame_right(this);
		}
	}
}


export class Frame_singleContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public PRECEDING_(): TerminalNode {
		return this.getToken(SQLiteParser.PRECEDING_, 0);
	}
	public UNBOUNDED_(): TerminalNode {
		return this.getToken(SQLiteParser.UNBOUNDED_, 0);
	}
	public CURRENT_(): TerminalNode {
		return this.getToken(SQLiteParser.CURRENT_, 0);
	}
	public ROW_(): TerminalNode {
		return this.getToken(SQLiteParser.ROW_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_frame_single;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterFrame_single) {
	 		listener.enterFrame_single(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitFrame_single) {
	 		listener.exitFrame_single(this);
		}
	}
}


export class Window_functionContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_PAR_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.OPEN_PAR);
	}
	public OPEN_PAR(i: number): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, i);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public CLOSE_PAR_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.CLOSE_PAR);
	}
	public CLOSE_PAR(i: number): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, i);
	}
	public OVER_(): TerminalNode {
		return this.getToken(SQLiteParser.OVER_, 0);
	}
	public order_by_expr_asc_desc(): Order_by_expr_asc_descContext {
		return this.getTypedRuleContext(Order_by_expr_asc_descContext, 0) as Order_by_expr_asc_descContext;
	}
	public FIRST_VALUE_(): TerminalNode {
		return this.getToken(SQLiteParser.FIRST_VALUE_, 0);
	}
	public LAST_VALUE_(): TerminalNode {
		return this.getToken(SQLiteParser.LAST_VALUE_, 0);
	}
	public partition_by(): Partition_byContext {
		return this.getTypedRuleContext(Partition_byContext, 0) as Partition_byContext;
	}
	public frame_clause(): Frame_clauseContext {
		return this.getTypedRuleContext(Frame_clauseContext, 0) as Frame_clauseContext;
	}
	public CUME_DIST_(): TerminalNode {
		return this.getToken(SQLiteParser.CUME_DIST_, 0);
	}
	public PERCENT_RANK_(): TerminalNode {
		return this.getToken(SQLiteParser.PERCENT_RANK_, 0);
	}
	public order_by_expr(): Order_by_exprContext {
		return this.getTypedRuleContext(Order_by_exprContext, 0) as Order_by_exprContext;
	}
	public DENSE_RANK_(): TerminalNode {
		return this.getToken(SQLiteParser.DENSE_RANK_, 0);
	}
	public RANK_(): TerminalNode {
		return this.getToken(SQLiteParser.RANK_, 0);
	}
	public ROW_NUMBER_(): TerminalNode {
		return this.getToken(SQLiteParser.ROW_NUMBER_, 0);
	}
	public LAG_(): TerminalNode {
		return this.getToken(SQLiteParser.LAG_, 0);
	}
	public LEAD_(): TerminalNode {
		return this.getToken(SQLiteParser.LEAD_, 0);
	}
	public offset(): OffsetContext {
		return this.getTypedRuleContext(OffsetContext, 0) as OffsetContext;
	}
	public default_value(): Default_valueContext {
		return this.getTypedRuleContext(Default_valueContext, 0) as Default_valueContext;
	}
	public NTH_VALUE_(): TerminalNode {
		return this.getToken(SQLiteParser.NTH_VALUE_, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, 0);
	}
	public signed_number(): Signed_numberContext {
		return this.getTypedRuleContext(Signed_numberContext, 0) as Signed_numberContext;
	}
	public NTILE_(): TerminalNode {
		return this.getToken(SQLiteParser.NTILE_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_window_function;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterWindow_function) {
	 		listener.enterWindow_function(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitWindow_function) {
	 		listener.exitWindow_function(this);
		}
	}
}


export class OffsetContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COMMA(): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, 0);
	}
	public signed_number(): Signed_numberContext {
		return this.getTypedRuleContext(Signed_numberContext, 0) as Signed_numberContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_offset;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterOffset) {
	 		listener.enterOffset(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitOffset) {
	 		listener.exitOffset(this);
		}
	}
}


export class Default_valueContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COMMA(): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, 0);
	}
	public signed_number(): Signed_numberContext {
		return this.getTypedRuleContext(Signed_numberContext, 0) as Signed_numberContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_default_value;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterDefault_value) {
	 		listener.enterDefault_value(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitDefault_value) {
	 		listener.exitDefault_value(this);
		}
	}
}


export class Partition_byContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PARTITION_(): TerminalNode {
		return this.getToken(SQLiteParser.PARTITION_, 0);
	}
	public BY_(): TerminalNode {
		return this.getToken(SQLiteParser.BY_, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_partition_by;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterPartition_by) {
	 		listener.enterPartition_by(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitPartition_by) {
	 		listener.exitPartition_by(this);
		}
	}
}


export class Order_by_exprContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ORDER_(): TerminalNode {
		return this.getToken(SQLiteParser.ORDER_, 0);
	}
	public BY_(): TerminalNode {
		return this.getToken(SQLiteParser.BY_, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_order_by_expr;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterOrder_by_expr) {
	 		listener.enterOrder_by_expr(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitOrder_by_expr) {
	 		listener.exitOrder_by_expr(this);
		}
	}
}


export class Order_by_expr_asc_descContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ORDER_(): TerminalNode {
		return this.getToken(SQLiteParser.ORDER_, 0);
	}
	public BY_(): TerminalNode {
		return this.getToken(SQLiteParser.BY_, 0);
	}
	public expr_asc_desc(): Expr_asc_descContext {
		return this.getTypedRuleContext(Expr_asc_descContext, 0) as Expr_asc_descContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_order_by_expr_asc_desc;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterOrder_by_expr_asc_desc) {
	 		listener.enterOrder_by_expr_asc_desc(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitOrder_by_expr_asc_desc) {
	 		listener.exitOrder_by_expr_asc_desc(this);
		}
	}
}


export class Expr_asc_descContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public asc_desc_list(): Asc_descContext[] {
		return this.getTypedRuleContexts(Asc_descContext) as Asc_descContext[];
	}
	public asc_desc(i: number): Asc_descContext {
		return this.getTypedRuleContext(Asc_descContext, i) as Asc_descContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SQLiteParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SQLiteParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_expr_asc_desc;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterExpr_asc_desc) {
	 		listener.enterExpr_asc_desc(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitExpr_asc_desc) {
	 		listener.exitExpr_asc_desc(this);
		}
	}
}


export class Initial_selectContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public select_stmt(): Select_stmtContext {
		return this.getTypedRuleContext(Select_stmtContext, 0) as Select_stmtContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_initial_select;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterInitial_select) {
	 		listener.enterInitial_select(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitInitial_select) {
	 		listener.exitInitial_select(this);
		}
	}
}


export class Recursive_selectContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public select_stmt(): Select_stmtContext {
		return this.getTypedRuleContext(Select_stmtContext, 0) as Select_stmtContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_recursive_select;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterRecursive_select) {
	 		listener.enterRecursive_select(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitRecursive_select) {
	 		listener.exitRecursive_select(this);
		}
	}
}


export class Unary_operatorContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MINUS(): TerminalNode {
		return this.getToken(SQLiteParser.MINUS, 0);
	}
	public PLUS(): TerminalNode {
		return this.getToken(SQLiteParser.PLUS, 0);
	}
	public TILDE(): TerminalNode {
		return this.getToken(SQLiteParser.TILDE, 0);
	}
	public NOT_(): TerminalNode {
		return this.getToken(SQLiteParser.NOT_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_unary_operator;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterUnary_operator) {
	 		listener.enterUnary_operator(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitUnary_operator) {
	 		listener.exitUnary_operator(this);
		}
	}
}


export class Error_messageContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(SQLiteParser.STRING_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_error_message;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterError_message) {
	 		listener.enterError_message(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitError_message) {
	 		listener.exitError_message(this);
		}
	}
}


export class Module_argumentContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public column_def(): Column_defContext {
		return this.getTypedRuleContext(Column_defContext, 0) as Column_defContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_module_argument;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterModule_argument) {
	 		listener.enterModule_argument(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitModule_argument) {
	 		listener.exitModule_argument(this);
		}
	}
}


export class Column_aliasContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(SQLiteParser.IDENTIFIER, 0);
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(SQLiteParser.STRING_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_column_alias;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterColumn_alias) {
	 		listener.enterColumn_alias(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitColumn_alias) {
	 		listener.exitColumn_alias(this);
		}
	}
}


export class KeywordContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ABORT_(): TerminalNode {
		return this.getToken(SQLiteParser.ABORT_, 0);
	}
	public ACTION_(): TerminalNode {
		return this.getToken(SQLiteParser.ACTION_, 0);
	}
	public ADD_(): TerminalNode {
		return this.getToken(SQLiteParser.ADD_, 0);
	}
	public AFTER_(): TerminalNode {
		return this.getToken(SQLiteParser.AFTER_, 0);
	}
	public ALL_(): TerminalNode {
		return this.getToken(SQLiteParser.ALL_, 0);
	}
	public ALTER_(): TerminalNode {
		return this.getToken(SQLiteParser.ALTER_, 0);
	}
	public ANALYZE_(): TerminalNode {
		return this.getToken(SQLiteParser.ANALYZE_, 0);
	}
	public AND_(): TerminalNode {
		return this.getToken(SQLiteParser.AND_, 0);
	}
	public AS_(): TerminalNode {
		return this.getToken(SQLiteParser.AS_, 0);
	}
	public ASC_(): TerminalNode {
		return this.getToken(SQLiteParser.ASC_, 0);
	}
	public ATTACH_(): TerminalNode {
		return this.getToken(SQLiteParser.ATTACH_, 0);
	}
	public AUTOINCREMENT_(): TerminalNode {
		return this.getToken(SQLiteParser.AUTOINCREMENT_, 0);
	}
	public BEFORE_(): TerminalNode {
		return this.getToken(SQLiteParser.BEFORE_, 0);
	}
	public BEGIN_(): TerminalNode {
		return this.getToken(SQLiteParser.BEGIN_, 0);
	}
	public BETWEEN_(): TerminalNode {
		return this.getToken(SQLiteParser.BETWEEN_, 0);
	}
	public BY_(): TerminalNode {
		return this.getToken(SQLiteParser.BY_, 0);
	}
	public CASCADE_(): TerminalNode {
		return this.getToken(SQLiteParser.CASCADE_, 0);
	}
	public CASE_(): TerminalNode {
		return this.getToken(SQLiteParser.CASE_, 0);
	}
	public CAST_(): TerminalNode {
		return this.getToken(SQLiteParser.CAST_, 0);
	}
	public CHECK_(): TerminalNode {
		return this.getToken(SQLiteParser.CHECK_, 0);
	}
	public COLLATE_(): TerminalNode {
		return this.getToken(SQLiteParser.COLLATE_, 0);
	}
	public COLUMN_(): TerminalNode {
		return this.getToken(SQLiteParser.COLUMN_, 0);
	}
	public COMMIT_(): TerminalNode {
		return this.getToken(SQLiteParser.COMMIT_, 0);
	}
	public CONFLICT_(): TerminalNode {
		return this.getToken(SQLiteParser.CONFLICT_, 0);
	}
	public CONSTRAINT_(): TerminalNode {
		return this.getToken(SQLiteParser.CONSTRAINT_, 0);
	}
	public CREATE_(): TerminalNode {
		return this.getToken(SQLiteParser.CREATE_, 0);
	}
	public CROSS_(): TerminalNode {
		return this.getToken(SQLiteParser.CROSS_, 0);
	}
	public CURRENT_DATE_(): TerminalNode {
		return this.getToken(SQLiteParser.CURRENT_DATE_, 0);
	}
	public CURRENT_TIME_(): TerminalNode {
		return this.getToken(SQLiteParser.CURRENT_TIME_, 0);
	}
	public CURRENT_TIMESTAMP_(): TerminalNode {
		return this.getToken(SQLiteParser.CURRENT_TIMESTAMP_, 0);
	}
	public DATABASE_(): TerminalNode {
		return this.getToken(SQLiteParser.DATABASE_, 0);
	}
	public DEFAULT_(): TerminalNode {
		return this.getToken(SQLiteParser.DEFAULT_, 0);
	}
	public DEFERRABLE_(): TerminalNode {
		return this.getToken(SQLiteParser.DEFERRABLE_, 0);
	}
	public DEFERRED_(): TerminalNode {
		return this.getToken(SQLiteParser.DEFERRED_, 0);
	}
	public DELETE_(): TerminalNode {
		return this.getToken(SQLiteParser.DELETE_, 0);
	}
	public DESC_(): TerminalNode {
		return this.getToken(SQLiteParser.DESC_, 0);
	}
	public DETACH_(): TerminalNode {
		return this.getToken(SQLiteParser.DETACH_, 0);
	}
	public DISTINCT_(): TerminalNode {
		return this.getToken(SQLiteParser.DISTINCT_, 0);
	}
	public DROP_(): TerminalNode {
		return this.getToken(SQLiteParser.DROP_, 0);
	}
	public EACH_(): TerminalNode {
		return this.getToken(SQLiteParser.EACH_, 0);
	}
	public ELSE_(): TerminalNode {
		return this.getToken(SQLiteParser.ELSE_, 0);
	}
	public END_(): TerminalNode {
		return this.getToken(SQLiteParser.END_, 0);
	}
	public ESCAPE_(): TerminalNode {
		return this.getToken(SQLiteParser.ESCAPE_, 0);
	}
	public EXCEPT_(): TerminalNode {
		return this.getToken(SQLiteParser.EXCEPT_, 0);
	}
	public EXCLUSIVE_(): TerminalNode {
		return this.getToken(SQLiteParser.EXCLUSIVE_, 0);
	}
	public EXISTS_(): TerminalNode {
		return this.getToken(SQLiteParser.EXISTS_, 0);
	}
	public EXPLAIN_(): TerminalNode {
		return this.getToken(SQLiteParser.EXPLAIN_, 0);
	}
	public FAIL_(): TerminalNode {
		return this.getToken(SQLiteParser.FAIL_, 0);
	}
	public FOR_(): TerminalNode {
		return this.getToken(SQLiteParser.FOR_, 0);
	}
	public FOREIGN_(): TerminalNode {
		return this.getToken(SQLiteParser.FOREIGN_, 0);
	}
	public FROM_(): TerminalNode {
		return this.getToken(SQLiteParser.FROM_, 0);
	}
	public FULL_(): TerminalNode {
		return this.getToken(SQLiteParser.FULL_, 0);
	}
	public GLOB_(): TerminalNode {
		return this.getToken(SQLiteParser.GLOB_, 0);
	}
	public GROUP_(): TerminalNode {
		return this.getToken(SQLiteParser.GROUP_, 0);
	}
	public HAVING_(): TerminalNode {
		return this.getToken(SQLiteParser.HAVING_, 0);
	}
	public IF_(): TerminalNode {
		return this.getToken(SQLiteParser.IF_, 0);
	}
	public IGNORE_(): TerminalNode {
		return this.getToken(SQLiteParser.IGNORE_, 0);
	}
	public IMMEDIATE_(): TerminalNode {
		return this.getToken(SQLiteParser.IMMEDIATE_, 0);
	}
	public IN_(): TerminalNode {
		return this.getToken(SQLiteParser.IN_, 0);
	}
	public INDEX_(): TerminalNode {
		return this.getToken(SQLiteParser.INDEX_, 0);
	}
	public INDEXED_(): TerminalNode {
		return this.getToken(SQLiteParser.INDEXED_, 0);
	}
	public INITIALLY_(): TerminalNode {
		return this.getToken(SQLiteParser.INITIALLY_, 0);
	}
	public INNER_(): TerminalNode {
		return this.getToken(SQLiteParser.INNER_, 0);
	}
	public INSERT_(): TerminalNode {
		return this.getToken(SQLiteParser.INSERT_, 0);
	}
	public INSTEAD_(): TerminalNode {
		return this.getToken(SQLiteParser.INSTEAD_, 0);
	}
	public INTERSECT_(): TerminalNode {
		return this.getToken(SQLiteParser.INTERSECT_, 0);
	}
	public INTO_(): TerminalNode {
		return this.getToken(SQLiteParser.INTO_, 0);
	}
	public IS_(): TerminalNode {
		return this.getToken(SQLiteParser.IS_, 0);
	}
	public ISNULL_(): TerminalNode {
		return this.getToken(SQLiteParser.ISNULL_, 0);
	}
	public JOIN_(): TerminalNode {
		return this.getToken(SQLiteParser.JOIN_, 0);
	}
	public KEY_(): TerminalNode {
		return this.getToken(SQLiteParser.KEY_, 0);
	}
	public LEFT_(): TerminalNode {
		return this.getToken(SQLiteParser.LEFT_, 0);
	}
	public LIKE_(): TerminalNode {
		return this.getToken(SQLiteParser.LIKE_, 0);
	}
	public LIMIT_(): TerminalNode {
		return this.getToken(SQLiteParser.LIMIT_, 0);
	}
	public MATCH_(): TerminalNode {
		return this.getToken(SQLiteParser.MATCH_, 0);
	}
	public NATURAL_(): TerminalNode {
		return this.getToken(SQLiteParser.NATURAL_, 0);
	}
	public NO_(): TerminalNode {
		return this.getToken(SQLiteParser.NO_, 0);
	}
	public NOT_(): TerminalNode {
		return this.getToken(SQLiteParser.NOT_, 0);
	}
	public NOTNULL_(): TerminalNode {
		return this.getToken(SQLiteParser.NOTNULL_, 0);
	}
	public NULL_(): TerminalNode {
		return this.getToken(SQLiteParser.NULL_, 0);
	}
	public OF_(): TerminalNode {
		return this.getToken(SQLiteParser.OF_, 0);
	}
	public OFFSET_(): TerminalNode {
		return this.getToken(SQLiteParser.OFFSET_, 0);
	}
	public ON_(): TerminalNode {
		return this.getToken(SQLiteParser.ON_, 0);
	}
	public OR_(): TerminalNode {
		return this.getToken(SQLiteParser.OR_, 0);
	}
	public ORDER_(): TerminalNode {
		return this.getToken(SQLiteParser.ORDER_, 0);
	}
	public OUTER_(): TerminalNode {
		return this.getToken(SQLiteParser.OUTER_, 0);
	}
	public PLAN_(): TerminalNode {
		return this.getToken(SQLiteParser.PLAN_, 0);
	}
	public PRAGMA_(): TerminalNode {
		return this.getToken(SQLiteParser.PRAGMA_, 0);
	}
	public PRIMARY_(): TerminalNode {
		return this.getToken(SQLiteParser.PRIMARY_, 0);
	}
	public QUERY_(): TerminalNode {
		return this.getToken(SQLiteParser.QUERY_, 0);
	}
	public RAISE_(): TerminalNode {
		return this.getToken(SQLiteParser.RAISE_, 0);
	}
	public RECURSIVE_(): TerminalNode {
		return this.getToken(SQLiteParser.RECURSIVE_, 0);
	}
	public REFERENCES_(): TerminalNode {
		return this.getToken(SQLiteParser.REFERENCES_, 0);
	}
	public REGEXP_(): TerminalNode {
		return this.getToken(SQLiteParser.REGEXP_, 0);
	}
	public REINDEX_(): TerminalNode {
		return this.getToken(SQLiteParser.REINDEX_, 0);
	}
	public RELEASE_(): TerminalNode {
		return this.getToken(SQLiteParser.RELEASE_, 0);
	}
	public RENAME_(): TerminalNode {
		return this.getToken(SQLiteParser.RENAME_, 0);
	}
	public REPLACE_(): TerminalNode {
		return this.getToken(SQLiteParser.REPLACE_, 0);
	}
	public RESTRICT_(): TerminalNode {
		return this.getToken(SQLiteParser.RESTRICT_, 0);
	}
	public RIGHT_(): TerminalNode {
		return this.getToken(SQLiteParser.RIGHT_, 0);
	}
	public ROLLBACK_(): TerminalNode {
		return this.getToken(SQLiteParser.ROLLBACK_, 0);
	}
	public ROW_(): TerminalNode {
		return this.getToken(SQLiteParser.ROW_, 0);
	}
	public ROWS_(): TerminalNode {
		return this.getToken(SQLiteParser.ROWS_, 0);
	}
	public SAVEPOINT_(): TerminalNode {
		return this.getToken(SQLiteParser.SAVEPOINT_, 0);
	}
	public SELECT_(): TerminalNode {
		return this.getToken(SQLiteParser.SELECT_, 0);
	}
	public SET_(): TerminalNode {
		return this.getToken(SQLiteParser.SET_, 0);
	}
	public TABLE_(): TerminalNode {
		return this.getToken(SQLiteParser.TABLE_, 0);
	}
	public TEMP_(): TerminalNode {
		return this.getToken(SQLiteParser.TEMP_, 0);
	}
	public TEMPORARY_(): TerminalNode {
		return this.getToken(SQLiteParser.TEMPORARY_, 0);
	}
	public THEN_(): TerminalNode {
		return this.getToken(SQLiteParser.THEN_, 0);
	}
	public TO_(): TerminalNode {
		return this.getToken(SQLiteParser.TO_, 0);
	}
	public TRANSACTION_(): TerminalNode {
		return this.getToken(SQLiteParser.TRANSACTION_, 0);
	}
	public TRIGGER_(): TerminalNode {
		return this.getToken(SQLiteParser.TRIGGER_, 0);
	}
	public UNION_(): TerminalNode {
		return this.getToken(SQLiteParser.UNION_, 0);
	}
	public UNIQUE_(): TerminalNode {
		return this.getToken(SQLiteParser.UNIQUE_, 0);
	}
	public UPDATE_(): TerminalNode {
		return this.getToken(SQLiteParser.UPDATE_, 0);
	}
	public USING_(): TerminalNode {
		return this.getToken(SQLiteParser.USING_, 0);
	}
	public VACUUM_(): TerminalNode {
		return this.getToken(SQLiteParser.VACUUM_, 0);
	}
	public VALUES_(): TerminalNode {
		return this.getToken(SQLiteParser.VALUES_, 0);
	}
	public VIEW_(): TerminalNode {
		return this.getToken(SQLiteParser.VIEW_, 0);
	}
	public VIRTUAL_(): TerminalNode {
		return this.getToken(SQLiteParser.VIRTUAL_, 0);
	}
	public WHEN_(): TerminalNode {
		return this.getToken(SQLiteParser.WHEN_, 0);
	}
	public WHERE_(): TerminalNode {
		return this.getToken(SQLiteParser.WHERE_, 0);
	}
	public WITH_(): TerminalNode {
		return this.getToken(SQLiteParser.WITH_, 0);
	}
	public WITHOUT_(): TerminalNode {
		return this.getToken(SQLiteParser.WITHOUT_, 0);
	}
	public FIRST_VALUE_(): TerminalNode {
		return this.getToken(SQLiteParser.FIRST_VALUE_, 0);
	}
	public OVER_(): TerminalNode {
		return this.getToken(SQLiteParser.OVER_, 0);
	}
	public PARTITION_(): TerminalNode {
		return this.getToken(SQLiteParser.PARTITION_, 0);
	}
	public RANGE_(): TerminalNode {
		return this.getToken(SQLiteParser.RANGE_, 0);
	}
	public PRECEDING_(): TerminalNode {
		return this.getToken(SQLiteParser.PRECEDING_, 0);
	}
	public UNBOUNDED_(): TerminalNode {
		return this.getToken(SQLiteParser.UNBOUNDED_, 0);
	}
	public CURRENT_(): TerminalNode {
		return this.getToken(SQLiteParser.CURRENT_, 0);
	}
	public FOLLOWING_(): TerminalNode {
		return this.getToken(SQLiteParser.FOLLOWING_, 0);
	}
	public CUME_DIST_(): TerminalNode {
		return this.getToken(SQLiteParser.CUME_DIST_, 0);
	}
	public DENSE_RANK_(): TerminalNode {
		return this.getToken(SQLiteParser.DENSE_RANK_, 0);
	}
	public LAG_(): TerminalNode {
		return this.getToken(SQLiteParser.LAG_, 0);
	}
	public LAST_VALUE_(): TerminalNode {
		return this.getToken(SQLiteParser.LAST_VALUE_, 0);
	}
	public LEAD_(): TerminalNode {
		return this.getToken(SQLiteParser.LEAD_, 0);
	}
	public NTH_VALUE_(): TerminalNode {
		return this.getToken(SQLiteParser.NTH_VALUE_, 0);
	}
	public NTILE_(): TerminalNode {
		return this.getToken(SQLiteParser.NTILE_, 0);
	}
	public PERCENT_RANK_(): TerminalNode {
		return this.getToken(SQLiteParser.PERCENT_RANK_, 0);
	}
	public RANK_(): TerminalNode {
		return this.getToken(SQLiteParser.RANK_, 0);
	}
	public ROW_NUMBER_(): TerminalNode {
		return this.getToken(SQLiteParser.ROW_NUMBER_, 0);
	}
	public GENERATED_(): TerminalNode {
		return this.getToken(SQLiteParser.GENERATED_, 0);
	}
	public ALWAYS_(): TerminalNode {
		return this.getToken(SQLiteParser.ALWAYS_, 0);
	}
	public STORED_(): TerminalNode {
		return this.getToken(SQLiteParser.STORED_, 0);
	}
	public TRUE_(): TerminalNode {
		return this.getToken(SQLiteParser.TRUE_, 0);
	}
	public FALSE_(): TerminalNode {
		return this.getToken(SQLiteParser.FALSE_, 0);
	}
	public WINDOW_(): TerminalNode {
		return this.getToken(SQLiteParser.WINDOW_, 0);
	}
	public NULLS_(): TerminalNode {
		return this.getToken(SQLiteParser.NULLS_, 0);
	}
	public FIRST_(): TerminalNode {
		return this.getToken(SQLiteParser.FIRST_, 0);
	}
	public LAST_(): TerminalNode {
		return this.getToken(SQLiteParser.LAST_, 0);
	}
	public FILTER_(): TerminalNode {
		return this.getToken(SQLiteParser.FILTER_, 0);
	}
	public GROUPS_(): TerminalNode {
		return this.getToken(SQLiteParser.GROUPS_, 0);
	}
	public EXCLUDE_(): TerminalNode {
		return this.getToken(SQLiteParser.EXCLUDE_, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_keyword;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterKeyword) {
	 		listener.enterKeyword(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitKeyword) {
	 		listener.exitKeyword(this);
		}
	}
}


export class NameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterName) {
	 		listener.enterName(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitName) {
	 		listener.exitName(this);
		}
	}
}


export class Function_nameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_function_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterFunction_name) {
	 		listener.enterFunction_name(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitFunction_name) {
	 		listener.exitFunction_name(this);
		}
	}
}


export class Schema_nameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_schema_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterSchema_name) {
	 		listener.enterSchema_name(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitSchema_name) {
	 		listener.exitSchema_name(this);
		}
	}
}


export class Table_nameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_table_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterTable_name) {
	 		listener.enterTable_name(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitTable_name) {
	 		listener.exitTable_name(this);
		}
	}
}


export class Table_or_index_nameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_table_or_index_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterTable_or_index_name) {
	 		listener.enterTable_or_index_name(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitTable_or_index_name) {
	 		listener.exitTable_or_index_name(this);
		}
	}
}


export class Column_nameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_column_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterColumn_name) {
	 		listener.enterColumn_name(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitColumn_name) {
	 		listener.exitColumn_name(this);
		}
	}
}


export class Collation_nameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_collation_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterCollation_name) {
	 		listener.enterCollation_name(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitCollation_name) {
	 		listener.exitCollation_name(this);
		}
	}
}


export class Foreign_tableContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_foreign_table;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterForeign_table) {
	 		listener.enterForeign_table(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitForeign_table) {
	 		listener.exitForeign_table(this);
		}
	}
}


export class Index_nameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_index_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterIndex_name) {
	 		listener.enterIndex_name(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitIndex_name) {
	 		listener.exitIndex_name(this);
		}
	}
}


export class Trigger_nameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_trigger_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterTrigger_name) {
	 		listener.enterTrigger_name(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitTrigger_name) {
	 		listener.exitTrigger_name(this);
		}
	}
}


export class View_nameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_view_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterView_name) {
	 		listener.enterView_name(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitView_name) {
	 		listener.exitView_name(this);
		}
	}
}


export class Module_nameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_module_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterModule_name) {
	 		listener.enterModule_name(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitModule_name) {
	 		listener.exitModule_name(this);
		}
	}
}


export class Pragma_nameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_pragma_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterPragma_name) {
	 		listener.enterPragma_name(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitPragma_name) {
	 		listener.exitPragma_name(this);
		}
	}
}


export class Savepoint_nameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_savepoint_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterSavepoint_name) {
	 		listener.enterSavepoint_name(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitSavepoint_name) {
	 		listener.exitSavepoint_name(this);
		}
	}
}


export class Table_aliasContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_table_alias;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterTable_alias) {
	 		listener.enterTable_alias(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitTable_alias) {
	 		listener.exitTable_alias(this);
		}
	}
}


export class Transaction_nameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_transaction_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterTransaction_name) {
	 		listener.enterTransaction_name(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitTransaction_name) {
	 		listener.exitTransaction_name(this);
		}
	}
}


export class Window_nameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_window_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterWindow_name) {
	 		listener.enterWindow_name(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitWindow_name) {
	 		listener.exitWindow_name(this);
		}
	}
}


export class AliasContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_alias;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterAlias) {
	 		listener.enterAlias(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitAlias) {
	 		listener.exitAlias(this);
		}
	}
}


export class FilenameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_filename;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterFilename) {
	 		listener.enterFilename(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitFilename) {
	 		listener.exitFilename(this);
		}
	}
}


export class Base_window_nameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_base_window_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterBase_window_name) {
	 		listener.enterBase_window_name(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitBase_window_name) {
	 		listener.exitBase_window_name(this);
		}
	}
}


export class Simple_funcContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_simple_func;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterSimple_func) {
	 		listener.enterSimple_func(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitSimple_func) {
	 		listener.exitSimple_func(this);
		}
	}
}


export class Aggregate_funcContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_aggregate_func;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterAggregate_func) {
	 		listener.enterAggregate_func(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitAggregate_func) {
	 		listener.exitAggregate_func(this);
		}
	}
}


export class Table_function_nameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_table_function_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterTable_function_name) {
	 		listener.enterTable_function_name(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitTable_function_name) {
	 		listener.exitTable_function_name(this);
		}
	}
}


export class Any_nameContext extends ParserRuleContext {
	constructor(parser?: SQLiteParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(SQLiteParser.IDENTIFIER, 0);
	}
	public keyword(): KeywordContext {
		return this.getTypedRuleContext(KeywordContext, 0) as KeywordContext;
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(SQLiteParser.STRING_LITERAL, 0);
	}
	public OPEN_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.OPEN_PAR, 0);
	}
	public any_name(): Any_nameContext {
		return this.getTypedRuleContext(Any_nameContext, 0) as Any_nameContext;
	}
	public CLOSE_PAR(): TerminalNode {
		return this.getToken(SQLiteParser.CLOSE_PAR, 0);
	}
    public get ruleIndex(): number {
    	return SQLiteParser.RULE_any_name;
	}
	public enterRule(listener: SQLiteParserListener): void {
	    if(listener.enterAny_name) {
	 		listener.enterAny_name(this);
		}
	}
	public exitRule(listener: SQLiteParserListener): void {
	    if(listener.exitAny_name) {
	 		listener.exitAny_name(this);
		}
	}
}
