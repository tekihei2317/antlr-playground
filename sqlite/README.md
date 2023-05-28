# sqlite

antlr4tsは、lexerのcaseInsensitiveオプションに対応していない。caseInsensitiveはantlr4.10で追加されて、antlr4tsは4.9を使っているため。

[caseInsensitive lexer rule option not yet supported · Issue #177 · mike-lischke/vscode-antlr4](https://github.com/mike-lischke/vscode-antlr4/issues/177)

sqlcは、A: [aA]のように定義することで、caseInsensitiveオプションを使わずに実現していた。

公式のランタイムからTypeScriptのコードを生成すればできると思うので、次のドキュメントを参考にしてやってみる。

## TypeScriptのコードを生成する
