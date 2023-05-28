import * as fs from "node:fs/promises";
import * as path from "node:path";
import { CharStream, CommonTokenStream, ParseTreeWalker } from "antlr4";
import SQLiteLexer from "./SQLiteLexer";
import SQLiteParser, {
  Column_defContext,
  Create_table_stmtContext,
} from "./SQLiteParser";
import SQLiteListener from "./SQLiteParserListener";

type ColumnType = "INTEGER" | "TEXT" | "REAL" | "BLOB";

type ColumnDefinition = {
  name: string;
  type: ColumnType;
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
  // columns: ColumnDefinition[];
  // constraints: TableConstraint[];
  // relations: RelationDefinition[];
};

class MyTreeWalker extends SQLiteListener {
  enterCreate_table_stmt = (ctx: Create_table_stmtContext) => {
    console.log(ctx.table_name().getText());
    console.log(
      ctx.column_def_list().map((column) => column.column_name().getText())
    );
    console.log(
      ctx.column_def_list().map((column) => column.type_name().getText())
    );
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
}

main();
