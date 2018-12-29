<template>
  <div id="app">
      <textarea class="latex-textarea" v-model="latex"></textarea>
      <button class="latex-resolve" @click="toResolve">解析</button>
      <!-- <div @click.stop v-for="item in list" :key="Math.random()+item"> -->
          <div @click="dianji" v-katex="context"></div>
      <!-- </div> -->
  </div>
</template>

<script>
export default {
    name: 'App',
    data () {
        return {
            latex:'先化简，再求值：$$\\frac{a}{a-b}\\left( \\frac{1}{b}-\\frac{1}{a} \\right)+\\frac{a-1}{b}$$，其中$$a=2$$，$$b=\\frac{1}{3}$$．  <br>',
            context:'先化简，再求值：$$\\frac{a}{a-b}\\left( \\frac{1}{b}-\\frac{1}{a} \\right)+\\frac{a-1}{b}$$，其中$$a=2$$，$$b=\\frac{1}{3}$$．  <br>',
            list:[1,2,3,4,5,6]
        }
    },
    methods: {
        toResolve(){
            this.context = this.latex
        },
        dianji(){
            console.log('点击');
            
        }
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.latex-textarea{
    width: 600px;
    height: 300px;
    display: block;
    margin: 0 auto;
}
.latex-resolve{
    width: 80px;
    height: 30px;
    display: block;
    margin: 50px auto;
}
</style>