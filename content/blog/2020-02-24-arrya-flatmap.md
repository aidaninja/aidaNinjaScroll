---
title: Arrya.flat()
date: 2020-02-24T12:40:15.466Z
description: Arrya.flatについて。
---
## 概要

配列のネストをなくす。 Array.flat

## やりたいこと

所得したデータが配列のネストになっていてまとめて処理したいときに扱いづらい。
```javascript
const nested = [['🔥','🔥','🔥'],['⚡️','⚡️','⚡️'],['💧','💧','💧']]
```
単純にmapとかforEachしたいときに扱いづらい。
```javascript
const flatted1 = [...nested[0], ...nested[1], ...nested[2]]
// ["🔥", "🔥", "🔥", "⚡️", "⚡️", "⚡️", "💧", "💧", "💧"]
```
新しい配列を作ってもいいけど書き方が何だか冗長。nestedの要素数が多いともう終わり。

もっと簡単に配列のネストをなくしたい。

## やりかた

Array.flatを使えば簡単にネストをなくせる。
```javascript
nested.flat()
// ["🔥", "🔥", "🔥", "⚡️", "⚡️", "⚡️", "💧", "💧", "💧"]
```

余談ですが、Array.flatMapというのもあるみたいです。

これはmapとflatが一緒になったやつみたいですね。
```javascript
const ninja = [
    	{name: 'ninjirou', jutsu : ["🔥", "⚡️",]},
    	{name: 'ninko', jutsu:['💧']}
]
    
ninja.map(ninja => ninja.jutsu)
// [["🔥", "⚡️",], ['💧']]
    
ninja.flatMap(ninja => ninja.jutsu)
// ["🔥", "⚡️",'💧']
```
