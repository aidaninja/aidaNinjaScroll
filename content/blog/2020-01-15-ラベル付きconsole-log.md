---
title: ラベル付きconsole.log
date: 2020-01-14T18:05:22.060Z
description: ラベル付きconsole.log
---
## 概要
他人のコードを読んでいたり、自分で何かコードを書いていたりするときに変数の中身がどうなっているのかを知りたい。こういった場合大抵、console.logで確認していく。しかし普通にconsole.log(foo)とやるとconsoleには値しか表示されない。複数の変数の値をconsoleで確認しようとすると表示結果が何の変数の値なのかよく分からなくなってくる。そういう時はconsole.log({foo})で変数名と値を同時に確認できる。

## 困っていること
複数の変数の値をconsoleで確認しようとすると値しか表示されないから結局何の変数の値なのかよく分からない。console.log(`foo ${foo}`)で解決するけど、こういう場合って大抵3以上同時にconsoleに表示させている場合が多いい。console.log(`foo ${foo}, bar ${bar}, baz ${baz}`)。consoleで値を確認するためだけに変数名を2回ずつタイプしたくないですね。

## 実現方法

```
console.log({foo})
```
ES6のObject Destructuringで{foo}は{foo: foo}と同じ意味になって,こうするとconsoleで"変数名：値"の形で確認することができる。やったね。
