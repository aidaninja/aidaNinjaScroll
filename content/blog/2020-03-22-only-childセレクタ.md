---
title: ':only-childセレクタ'
date: 2020-03-22T14:12:38.169Z
description: ':only-childセレクタ。要素が一つの時のみスタイルを適用させたい。'
---
## 概要

`:only-childセレクタ`。要素が一つの時のみスタイルを適用させたい。

## やりたいこと

リストなどで項目が一つのときのみのスタイルを指定したい。
```html
<ul>
    <li></li>
    <li></li>
</ul>
```    
このときのみ適用されるスタイルを指定したい
```html
<ul>
    <li></li>
</ul>
```
## やりかた
 `:only-childセレクタ`を使用する。
```css
li:only-child{
    color: blue;
}
```css
または`:first-child`と`:last-child`を組み合わせる。
```css
li:first-child:last-child{
    color: green;
}
```
二つの違いは詳細度に出てきます。

もし両方指定した場合は`:first-child:last-child`が優先されます。
