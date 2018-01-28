<template>
  <div class="wrap">
    <h3>{{ msg }}</h3>
    <h2>基础组件</h2>
    <h4>按钮</h4>
    <yu-button title="点我弹框">普通</yu-button>
    <yu-button type="primary" @click="btnClick" icon="yu__icon--checked" >主要</yu-button>
    <yu-button type="error" icon="yu__icon--checked" ></yu-button>
    <yu-button type="warning" disabled>禁止</yu-button>
    <yu-button plain>简约</yu-button>
    <yu-button type="text" icon="yu__icon--checked">文字</yu-button>
    <yu-button loading type="success">loading状态</yu-button>
    <yu-button bg-color="#fc0" color="#e0439a" border-color="#fc0">自定义颜色</yu-button>
    <br/><br/>
    <yu-button bg-color="#fcb" color="#e0439a" border-color="#fcb" block no-radius class="btn__block">无圆角块状</yu-button>
    <br/>
    <yu-button round long>100%宽圆角</yu-button>
    <br/><br/>

    <h2>弹出层</h2>
    <h4>Modal</h4>
    <yu-button type="primary" @click="modalClick2">自定义内容confirm</yu-button>
    <yu-modal type="confirm" dialog-title="填写资料" :visible="modalVisible2" @close="modalClose2" @confirm="modalOk2" color="#19be6b" :z-index="zIndex">
      <yu-input max="10" placeholder="请输入用户名" ></yu-input>
    </yu-modal>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: `yuui - 基于vue2.x，可复用UI组件`,
      modalVisible2: false,
      zIndex: 1000
    };
  },
  methods: {
    btnClick() {
      alert("不要点人家啦");
    },
    modalClick2(e) {
      this.modalVisible2 = true;
      this.zIndex++;
    },
    modalClose2 (e) {
      this.modalVisible2 = false
    },
    modalOk2(){
      this.modalVisible2 = false
    }
  },
  mounted: () => {}
};
</script>

<style scoped lang="scss">
#demo-wrap {
  margin: 10px auto;
}
.wrap {
  margin: 10px;
}
h1,
h3 {
  margin: 0;
}
h3 {
  font-weight: normal;
  font-size: 16px;
}
h4 {
  font-weight: normal;
  font-size: 14px;
  text-align: left;
  background-color: #e9e9e9;
  padding: 10px;
}
h2 {
  text-align: left;
  width: 100%;
  border-bottom: 1px dashed #ededed;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  text-indent: 10px;
  margin-top: 30px;
  margin-bottom: 0;
}

.btn__block {
  margin: 0 auto !important;
}
.yu__btn,
.yu__tag {
  margin-bottom: 10px;
}
</style>

