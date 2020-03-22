---
title: '脱lodash　(foo||[]).map()'
date: 2020-01-28T14:20:55.446Z
description: 脱lodash。ライブラリに依存しない書き方。
---
## 概要
`null`や`undefined`を想定する書き方。

## やりたいこと
```javascript
foo.map(()=>{})
```
このとき`foo`が必ず配列なら問題ないが、場合によって`null`や`undefined`といった配列以外になるとエラーになっちゃいます。
```javascript
import {map} from 'lodash'
    
map(foo, ()=>{})
```
こういった場合にlodashといったライブラリを使用すれば`null`や`undefined`でもエラーになりづらくなる。
でも必ずlodashを使用して良いかというとそうでもない。ときにはlodashの使用が許されない場合もある。

なのでプラグインに依存しない書き方も知っておいたほうが忍者レベルも高くなるはずです。

## やりかた
```javascript
(foo||[]).map(()=>{})
```
ショートカット演算子を使用してfooが`null`や`undefined`といったfalsyな値の場合は空の配列に対してmapを実行すればエラーにならなくなると思います。
