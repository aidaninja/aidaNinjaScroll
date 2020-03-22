---
title: styled components コンポーネントの拡張
date: 2020-03-18T11:34:22.334Z
description: styled components コンポーネントの拡張
---
## 概要

styled componentsでコンポーネントを拡張したけどスタイルが反映されなくて焦った話。

## 困っていること

styled componentsで既存のコンポーネントのスタイルに

新しいスタイルを追加したけど反映されない。
```javascript
//例
//ベースになるコンポーネント
const Button = props => {
    const {onClick, children} = props
    return <button onClicl={onClick}>{children}</button>
}

//スタイルを拡張したButtonを使用したいコンポーネント 
const NewComponent = props => {
    return <StyledButton>忍法</StyledButton>
}
    
const StyledButton =  styled(Button)`
    &&{
    	color: #fff;
    	border: 1px solid #000;
    }
   `
```
## 解決方法

styled componentsでのコンポーネントの拡張はそもそも拡張したいコンポーネントに

styleのpropsを指定しないといけません。

なので指定しましょう。ドキュメント読みましょう。

ノリと勢いはやめましょう。ノリと勢いだけでは忍者レベルが上がりづらいです。
```javascript
//ベースになるコンポーネント
const Button = props => {
    const {onClick, style ,children} = props
    return <button style={style} onClick={onClick}>
                  {children}
               </button>
}
```
