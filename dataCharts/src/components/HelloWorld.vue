<template>
  <div>
    <el-button @click="visible = true">Button</el-button>
    <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="el-icon-delete"></i>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
    <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
    <el-dialog :visible.sync="visible" title="Hello world">
      <p>Try Element</p>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      visible: false,
      num1:1
    }
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
  }
}

//es6 面向对象
{
  (function(root){
    let a=Symbol ();
    class person{
      static staticName="人";
      constructor (id){
        this[a]="自己可用"
        this.id=id;
        console.log(id)
      }
      say(str=this.str){
        console.log(this[a]);
        console.log(this.id+"说了："+str);
      }
    }

    class worker extends person{
      constructor(){
        super("老师");
        this.str="都过来吧";
      }
      //静态方法
      static normal(text){
        console.log(text)
      }
      nameSay(name,str=this.str){
        console.log(name+this.id+"说了:"+str)
      }
    }
    root.person=person;
    root.worker=worker;
  })(window);
  

  worker.normal("不绕弯子我直说"); //无需实例化即可调用静态方法
  console.log(worker.staticName); //无需实例化即可调用静态属性
  try {
    console.log(zhangsan[a]);//私有变量无法调用，会报错
  } catch (error) {
    console.log(error)
  }
  var zhangsan=new worker();
  zhangsan.say(); //继承自person类的方法
  zhangsan.nameSay("李铁柱")
  zhangsan.nameSay("李铁柱","那你就不用过来了");
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
