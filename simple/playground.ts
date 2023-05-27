import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { ExprLexer } from "./ExprLexer";
import { ExprParser } from "./ExprParser";

// Create the lexer and parser
let inputStream = new ANTLRInputStream("1+2*3\n");
let lexer = new ExprLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new ExprParser(tokenStream);

let tree = parser.prog();
console.log(tree);
