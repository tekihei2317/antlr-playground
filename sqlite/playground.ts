import * as fs from "node:fs/promises";
import * as path from "node:path";
import { CharStream, CommonTokenStream, ParseTreeWalker } from "antlr4";
import SQLiteLexer from "./SQLiteLexer";
import SQLiteParser, {
  Column_defContext,
  Create_table_stmtContext,
} from "./SQLiteParser";
import SQLiteListener from "./SQLiteParserListener";

const columnTypes = ["INT", "INTEGER", "TEXT", "REAL", "BLOB", "ANY"] as const;
type ColumnType = (typeof columnTypes)[number];

function toColumnType(type: string): ColumnType {
  const types: readonly string[] = columnTypes;
  if (types.includes(type.toUpperCase())) {
    return type.toUpperCase() as ColumnType;
  }
  return "ANY";
}

type ColumnDefinition = {
  name: string;
  type: ColumnType;
  nullable: boolean;
  hasDefault: boolean;
};

type ConstraintType = "PRIMARY" | "UNIQUE";

type TableConstraint = {
  type: ConstraintType;
  columns: string[]; // カラムのインデックス（添字）の方がいいかも
};

type RelationDefinition = {
  fromTable: string;
  fromColumns: string[];
  toTable: string;
  toColumns: string[];
};

type TableDefinition = {
  name: string;
  columns: ColumnDefinition[];
  // constraints: TableConstraint[];
  // relations: RelationDefinition[];
};

const tables: TableDefinition[] = [];

class MyTreeWalker extends SQLiteListener {
  enterCreate_table_stmt = (ctx: Create_table_stmtContext) => {
    for (const column of ctx.column_def_list()) {
      const constraints = column.column_constraint_list();
      for (const constraint of constraints) {
        console.log(constraint.getText());
      }
    }

    const columns: ColumnDefinition[] = ctx
      .column_def_list()
      .map((columnCtx) => {
        const constraintTexts = columnCtx
          .column_constraint_list()
          .map((constraintCtx) => constraintCtx.getText());
        const nullable =
          constraintTexts.find((text) => text.toUpperCase() === "NOTNULL") ===
          undefined;

        // TODO: INTEGERでPRIMARY KEYの場合はAUTO_INCREMENTになるので、省略可能
        // TODO: tableの制約でPRIMARY KEYが指定されている場合も考慮する
        const hasDefault =
          constraintTexts.find((text) =>
            text.toUpperCase().startsWith("DEFAULT")
          ) !== undefined;

        const column: ColumnDefinition = {
          name: columnCtx.column_name().getText(),
          type: toColumnType(columnCtx.type_name().getText()),
          nullable,
          hasDefault,
        };
        return column;
      });

    tables.push({
      name: ctx.table_name().getText(),
      columns,
    });
  };
}

// CREATE TABLE文のASTから、上記の情報を取得したい
async function main() {
  const schema = await fs.readFile(path.join(__dirname, "schema.sql"), {
    encoding: "utf-8",
  });
  let inputStream = new CharStream(schema);
  let lexer = new SQLiteLexer(inputStream);
  let tokenStream = new CommonTokenStream(lexer);
  let parser = new SQLiteParser(tokenStream);

  const tree = parser.parse();
  const listener = new MyTreeWalker();
  ParseTreeWalker.DEFAULT.walk(listener, tree);

  console.log(JSON.stringify(tables, null, 2));
}

main();
