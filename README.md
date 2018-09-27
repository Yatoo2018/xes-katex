# xes-katex


### Foreword
在学而思网校各个项目中有大量的latex公式需要解析，它们和普通文本混合在一起，比如下面这段话：  
'先化简，再求值：$$\\frac{a}{a-b}\\left( \\frac{1}{b}-\\frac{1}{a} \\right)+\\frac{a-1}{b}$$，其中$$a=2$$，$$b=\\frac{1}{3}$$．'  
相比MathJax，Katex的解析速度更快，但是从已知的资料来看Katex并不能解析上面的混合文本，为了满足项目需求，我们开发了xes-katex

### Installation
```
npm install xes-katex
```

### Usage
```
import XesKatex from 'xes-katex'

Vue.use(XesKatex)
```
* 在您的html代码中使用（不要忘记转义所有反斜杠）
```
<div v-katex="'其中$$b=\\frac{1}{3}$$．'"></div>
```
* 如果您需要其他分隔符，比如&&
```
<div v-katex:&&="'其中&&b=\\frac{1}{3}&&．'"></div>
```
* 如果您需要修改katex的选项配置
```
<div v-katex="{content:'其中&&b=\\frac{1}{3}&&．',options:{throwOnError: false}}"></div>
```

* 具体参数请参考[katex](https://katex.org/)官方文档