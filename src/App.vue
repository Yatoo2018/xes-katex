<template>
  <div id="app">
      <textarea class="latex-textarea" v-model="latex"></textarea>
      <!-- <button class="latex-resolve" @click="toResolve">解析</button> -->
      <div class="row">
          <label>解析：</label>
          <div v-katex="latex"></div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'App',
    data () {
        return {
            latex:'先化简，再求值：$$\\frac{a}{a-b}\\left( \\frac{1}{b}-\\frac{1}{a} \\right)+\\frac{a-1}{b}$$，其中$$a=2$$，$$b=\\frac{1}{3}$$．  <br>',
            flag:'$$',
        }
    },
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
.row{
    padding-top: 20px;
    display: flex;
    width: 600px;
    margin: 0 auto;
    line-height: 40px;
}
.row label{
    width: 80px;
}
</style>