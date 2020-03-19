---
title: ラベル付きconsole.log
date: 2020-01-14T18:05:22.060Z
description: ラベル付きconsole.log
---

## 概要

他人のコードを読んでいたり、自分で何かコードを書いていたりするときに変数の中身がどうなっているのかを知りたい。こういった場合大抵、`console.log`で確認していく。しかし普通に`console.log(foo)`とやると`console`には値しか表示されない。複数の変数の値を`console`で確認しようとすると表示結果が何の変数の値なのかよく分からなくなってくる。そういう時は`console.log({foo})`で変数名と値を同時に確認できる。

## 困っていること

複数の変数の値を console で確認しようとすると値しか表示されないから結局何の変数の値なのかよく分からない。console.log(\`foo \${foo}\`)で解決するけど、こういう場合って大抵 3 以上同時に`console`に表示させている場合が多いい。console.log(\`foo ${foo}, bar ${bar}, baz \${baz}\`)。`console`で値を確認するためだけに変数名を 2 回ずつタイプしたくないですね。

## 実現方法

```javascript
console.log({ foo })
```

ES6 の Object Destructuring で`{foo}`は`{foo: foo}`と同じ意味になって,こうすると`console`で"変数名：値"の形で確認することができる。やったね。
