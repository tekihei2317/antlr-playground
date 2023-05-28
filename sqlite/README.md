# sqlite

antlr4tsは、lexerのcaseInsensitiveオプションに対応していない。caseInsensitiveはantlr4.10で追加されて、antlr4tsは4.9を使っているため。

[caseInsensitive lexer rule option not yet supported · Issue #177 · mike-lischke/vscode-antlr4](https://github.com/mike-lischke/vscode-antlr4/issues/177)

sqlcは、A: [aA]のように定義することで、caseInsensitiveオプションを使わずに実現していた。

公式のランタイムからTypeScriptのコードを生成すればできると思うので、次のドキュメントを参考にしてやってみる。

## TypeScriptのコードを生成する

```bash
# CLIのインストール
pip install antlr4-tools

# java11のインストール(省略)

# パーサーの生成
antlr4 -Dlanguage=TypeScript SQLiteLexer.g4 SQLiteParser.g4
```

antlr4パッケージに型定義ファイルが入っているものの、設定がうまくいっていないみたいでコンパイルエラーになった（こちらのtsconfig.jsonにも問題はありそう）。

"moduleResolution": "node"にするととりあえず動いた。

antrl4のエントリーポイントがmjsになっているので、使用側もESModulesにしたらちゃんと動くかもしれない。この辺りはよくわかっていないので調べたい。

```ts
$ ts-node --transpileOnly sqlite/playground.ts
User
[ 'id', 'email', 'name' ]
[ 'INTEGER', 'TEXT', 'TEXT' ]
Post
[ 'id', 'authorId', 'title', 'published' ]
[ 'INTEGER', 'INTEGER', 'TEXT', 'integer' ]
```

## 仕上げ
