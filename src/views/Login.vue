<template>
  <div class="appName">Visual Diary</div>
  <div class="appDescription">
    日々の出来事を記録<br />そして自己理解を深めよう
  </div>
  <div class="inputarea">
    <div>
      <input
        class="mailaddress"
        v-model="Address"
        placeholder="メールアドレス"
      />
    </div>
    <div>
      <input class="password" v-model="passwordss" placeholder="パスワード" />
    </div>
  </div>
  <button v-on:click="SignIn" class="loginbtn">
    <router-link to="/EventsPost">ログイン</router-link>
  </button>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
export default {
  data() {
    return {
      Address: "",
      passwordss: "",
    }
  },
  methods: {
    SignIn() {
      try {
        const auth = getAuth()

        signInWithEmailAndPassword(auth, this.Address, this.passwordss)
          .then(() => {
            console.log("ログイン成功")
          })
          .catch((error) => {
            console.error(error)
          })
      } catch (e) {
        console.error(e)
      }
    },
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
  top: 400px;

  font-family: "SF Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  text-align: center;

  color: #757c80;
}
.inputarea {
  position: absolute;
  width: 409px;
  height: 150px;
  left: 552px;
  top: 500px;

  box-sizing: border-box;
  border-radius: 7px;
}

.mailaddress {
  width: 400px;
  height: 75px;
  border-radius: 7px;
  border-color: #ffffff;
}
.password {
  width: 400px;
  height: 75px;
  border-radius: 7px;
  border-color: #ffffff;
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
