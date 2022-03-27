<template>
  <div class="appName">Visual Diary</div>
  <div class="appDescription">
    日々の出来事を記録<br />そして自己理解を深めよう
  </div>
  <button class="registerbutton" v-on:click="SignUp">
    <router-link to="/EventsPost"> アカウントを作成</router-link>
  </button>
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
    <div>
      <input
        class="passwordconfirm"
        v-model="passwords"
        placeholder="パスワード（確認用）"
      />
    </div>
  </div>
  <!-- <div>
    <v-btn elevation="2" @click="SignUp">ユーザー作成</v-btn>
  </div> -->
</template>
<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

export default {
  data() {
    return {
      address: "",
      password: "",
      passwords: "",
    }
  },
  methods: {
    SignUp() {
      const auth = getAuth()
      createUserWithEmailAndPassword(auth, this.address, this.password)
        .then(() => {
          console.log("user created")
        })
        .catch((error) => {
          alert(error.message)
          console.error(error)
        })
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

.mailaddress {
  width: 400px;
  height: 50px;
  border-radius: 7px;
  border-color: #ffffff;
}
.password {
  width: 400px;
  height: 50px;
  border-radius: 7px;
  border-color: #ffffff;
}
.passwordconfirm {
  width: 400px;
  height: 50px;
  border-radius: 7px;
  border-color: #ffffff;
}
.registerbutton {
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
  top: 574px;
  position: absolute;
  width: 409px;
  height: 55px;
  left: 552px;
  top: 689px;

  background: rgba(0, 137, 245, 0.7);
  border-radius: 25px;
}
</style>
