<template>
  <div class="appName">Visual Diary</div>
  <div class="appDescription">
    日々の出来事を記録<br />そして自己理解を深めよう
  </div>
  <button class="registerbtn">
    <router-link to="/Resister">アカウントを作成</router-link>
  </button>
  <button class="loginbtn">
    <router-link to="/Login">ログイン</router-link>
  </button>
</template>

<style>
body {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 1px;

  background: rgba(245, 246, 245, 0.9);
}
.appName {
  position: absolute;
  width: 350px;
  height: 72px;
  left: 39.2857142857143%;
  top: 38.2892057026477%;

  font-family: "SF Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 72px;
  /* identical to box height */

  text-align: center;

  color: #010409;
}

.appDescription {
  position: absolute;
  width: 204px;
  height: 43px;
  left: 654px;
  top: 471px;

  font-family: "SF Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  text-align: center;

  color: #757c80;
}

.registerbtn {
  position: absolute;
  width: 159px;
  height: 22px;
  left: 677px;
  top: 591px;

  font-family: "SF Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 23px;
  text-align: center;

  color: #ffffff;
  position: absolute;
  width: 409px;
  height: 55px;
  left: 552px;
  top: 574px;
  position: absolute;
  width: 409px;
  height: 55px;
  left: 552px;
  top: 574px;

  background: rgba(0, 137, 245, 0.7);
  border-radius: 25px;
}

.loginbtn {
  position: absolute;
  width: 159px;
  height: 22px;
  left: 677px;
  top: 706px;

  font-family: "SF Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 23px;
  text-align: center;

  color: #ffffff;

  position: absolute;
  width: 409px;
  height: 55px;
  left: 552px;
  top: 689px;

  background: #b6b2af;
  border-radius: 25px;
}
</style>
