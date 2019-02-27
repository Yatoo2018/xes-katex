import katex from "katex"
import './katex/katex.css'

function HTMLDecode(text) {    
    var temp = document.createElement("div")
    temp.innerHTML = text
    var output = temp.innerText || temp.textContent
    temp = null
    return output
}
function avoidXSS(val){
    if(typeof val == 'undefined') return ''
    val = String(val)
    var reg = /(onabort|onactivate|onafterprint|onafterupdate|onbeforeactivate|onbeforecopy|onbeforecut|onbeforedeactivate|onbeforeeditfocus|onbeforepaste|onbeforeprint|onbeforeunload|onbeforeupdate|onblur|onbounce|oncellchange|onchange|onclick|oncontextmenu|oncontrolselect|oncopy|oncut|ondataavailable|ondatasetchanged|ondatasetcompvare|ondblclick|ondeactivate|ondrag|ondragend|ondragenter|ondragleave|ondragover|ondragstart|ondrop|onerror|onerrorupdate|onfilterchange|onfinish|onfocus|onfocusin|onfocusout|onhelp|onkeydown|onkeypress|onkeyup|onlayoutcompvare|onload|onlosecapture|onmousedown|onmouseenter|onmouseleave|onmousemove|onmouseout|onmouseover|onmouseup|onmousewheel|onmove|onmoveend|onmovestart|onpaste|onpropertychange|onreadystatechange|onreset|onresize|onresizeend|onresizestart|onrowenter|onrowexit|onrowsdevare|onrowsinserted|onscroll|onselect|onselectionchange|onselectstart|onstart|onstop|onsubmit|onunload)/gi
    val = val.replace(reg, `'$1'`)
    val = val.replace(/\<(script.*?|\/script)\>/gm, `&lt;$1&gt;`)
    return val
}
function decode(el,binding,vnode,opt){
    binding.value?binding.value:''
    var flag = opt&&opt.flag ? opt.flag : '$$'
    flag = binding.arg || flag
    if(typeof binding.value == "string"){
        var txt = binding.value
        var options = {}
    }else{
        var txt = binding.value.content
        var options = binding.value.options || {}
        flag = binding.value.flag ? binding.value.flag : flag
    }
    flag = flag.replace(/([\*\.\?\+\$\^\[\]\(\)\{\}\|\\\/])/g,`\\$1`)
    var reg = new RegExp(`${flag}(.*?)${flag}+?`)
    
    txt = avoidXSS(txt)
    options = Object.assign({displayMode:true,throwOnError:true},options)
    var arr = txt.split(reg)
    arr.forEach((item,index)=>{
        if(index%2 == 1){
            try {
                arr[index] = katex.renderToString(HTMLDecode(item),options);
            } catch (err) {
                console.log(err)
            }
        }
    })
    txt = arr.join('')
    vnode.elm.innerHTML = txt
}
export default {
    install: function (Vue, options) {
        Vue.directive("katex",{
            bind(el,binding,vnode){
                decode(el,binding,vnode,options)
            },
            update(el,binding,vnode){
                decode(el,binding,vnode,options)
            }
        })
    }
}