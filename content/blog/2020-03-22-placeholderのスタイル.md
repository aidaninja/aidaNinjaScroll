---
title: placeholderのスタイル
date: 2020-03-22T14:07:47.147Z
description: text fieldなどの入力欄のplaceholderにスタイルを適用する方法。
---
## 概要

text fieldなどの入力欄のplaceholderにスタイルを適用する方法。

## やりたいこと

text fieldなどの入力欄のplaceholderにスタイルを変更したい。

## やりかた

::placeholderセレクタに指定。

HTML
```html
<input type="text" placeholder="忍法を入力">
```
css
```css
::placeholder {
    color: blue;
}
```
最新のブラウザでは対応しているはずですが、

幅広くブラウザ対応する場合はVender Prefixesが必要。
```css
/* WebKit, Edge */
::-webkit-input-placeholder {
    color: blue;
}
/* Firefox 4-18 */
:-moz-placeholder {
    color: blue;
    opacity: 1;
}
/* Firefox 19+ */
::-moz-placeholder {
    color: blue;
    opacity: 1;
}
/* IE 10-11 */
:-ms-input-placeholder {
    color: blue;
}
/* Edge */
::-ms-input-placeholder {
    color: blue;
}
```
毎回調べるのでまとめましたが、また調べそうです。
