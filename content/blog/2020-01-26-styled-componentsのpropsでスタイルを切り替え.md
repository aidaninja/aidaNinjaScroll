---
title: styled-componentsでのスタイルの切り替え
date: 2020-01-26T13:05:10.683Z
description: ' styled components で動的にスタイルを切り替える方法。'
---
## 概要

styled components で動的にスタイルを切り替える方法。

## やりたいこと

cssでクラスを複数指定して要素の見た目を切り替えるみたいなことをstyled componentsを使ってやりたい。
```html
<div class="button red">赤忍法</div>
<div class="button blue">青忍法</div>
```
```css
.button{
    padding: 5px 10px;
    font-size: 10px;
}
.red {
    color: red;
}
.blue {
    color: blue;
}
```
## やりかた

styled componentsではpropsに見た目を切り替えるための値を指定できるみたいです。
```javascript
import styled, {css} from 'styled-components'
    
const Button = props => {
    const { color ,disabled,  children } = props 
    return <StyledButton color={color} disabled={disabled}>
                   {children}
               </StyledButton>
    }
    
export default Button
    
const colorSelector = (props)=> {
    switch(props.color){
    	case 'red':
    	    return css`
    						color: red;
    					`
    	case 'blue':
    	    return css`
    						 color: blue;
    					 `
    	default
    	}
   }
    
const StyledButton = styled.div`
    	 &&{
    		padding: 5px 10px;
    		font-size: 10px;
    		${props => colorSelector(props)}
    		color: ${props => props.disabled ? `#fff` : `#000`}
    	 }
    `
```

色などの状態が複数ある場合は指定したpropsの値に応じて

switch文でスタイルを切り替えられます。

今回の場合はpropsのcolorの値で切り替えています。

活性非活性などの2種類しかない場合は

三項演算子を使うことでも実現できます。

だいぶ分かりにくいので慣れるまで違和感が物凄いですが、

慣れるとあまり気にならなくなります。
