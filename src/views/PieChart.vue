<template>
  <header id="header">
    <div class="visual-diary">Visual Diary</div>
    <div class="events">
      <router-link to="/EventsPost">出来事一覧</router-link>
    </div>
    <div class="emotions-rate">
      <router-link to="/PieChart">感情割合</router-link>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      frustrationPoint: 0,
      effortPoint: 0,
      abandonPoint: 0,
      embarrassingPoint: 0,
      angerPoint: 0,
      criedPoint: 0,
    }
  },
  created() {
    this.frustrationPoint = localStorage.getItem("frustrationPoint")
    console.log(this.frustrationPoint)
  },
}
</script>

<style>
body {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 1px;

  background: rgba(245, 246, 245, 0.9);
}
header {
  /* 要素を横並びにしてくれる */
  display: flex;
  position: fixed;
  width: 100%;
  height: 110px;
  left: 0px;
  top: 0px;

  background: rgba(112, 112, 112, 0.315);
  z-index: 30;
}

.visual-diary {
  position: fixed;
  width: 350px;
  height: 72px;
  left: 56px;
  top: 19px;

  font-family: "SF Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 72px;
  /* identical to box height */

  text-align: center;

  color: #010409;

  color: #000000;
}

.events {
  position: fixed;
  width: 100px;
  height: 24px;
  left: 1044px;
  top: 43px;

  font-family: "SF Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  text-align: center;

  color: #010409;
}

.events:hover {
  color: cornflowerblue;
}

.emotions-rate {
  position: fixed;
  width: 100px;
  height: 24px;
  left: 1200px;
  top: 43px;

  font-family: "SF Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  text-align: center;

  color: #010409;
}

.emotions-rate:hover {
  color: cornflowerblue;
}
</style>
