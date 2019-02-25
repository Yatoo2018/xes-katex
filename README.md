# xes-katex


### Foreword
相比MathJax，Katex的解析速度更快，但是从已知的资料来看Katex并不能解析上面的混合文本，为了满足项目需求，我们开发了xes-katex
举个例子：
'先化简，再求值：$$\\frac{a}{a-b}\\left( \\frac{1}{b}-\\frac{1}{a} \\right)+\\frac{a-1}{b}$$，其中$$a=2$$，$$b=\\frac{1}{3}$$．'  

### Installation

```
npm install xes-katex
```

### Usage

```
import XesKatex from 'xes-katex'
import 'xes-katex/dist/katex.css'

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
或者全局配置
```
Vue.use(xesKatex,{flag:'$$'})
```

* 如果您需要修改katex的选项配置

```
<div v-katex="{content:'其中&&b=\\frac{1}{3}&&．',options:{throwOnError: false}}"></div>
```

* 具体参数请参考[katex](https://katex.org/)官方文档