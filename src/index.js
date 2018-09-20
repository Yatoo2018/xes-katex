import katex from "katex"
import './katex/katex.css'

function HTMLDecode(text) {    
    var temp = document.createElement("div")
    temp.innerHTML = text
    var output = temp.innerText || temp.textContent
    temp = null
    return output
}

export default {
    install: function (Vue, options) {
        Vue.directive("katex",{
            bind(el,binding,vnode){
                vnode.key = Math.random()
                var flag = binding.arg || '$$'
                if(typeof binding.value == "string"){
                    var txt = binding.value
                    var options = {}
                }else{
                    var txt = binding.value.content
                    var options = binding.value.options || {}
                    flag = binding.value.flag ? binding.value.flag : flag
                }
                options = Object.assign({displayMode:true},options)
                var arr = txt.split(flag)
                arr.forEach((item,index)=>{
                    if(index%2 == 1){
                        arr[index] = katex.renderToString(HTMLDecode(item),options);
                    }
                })
                txt = arr.join('')
                vnode.elm.innerHTML = txt
            }
        })
    }
}