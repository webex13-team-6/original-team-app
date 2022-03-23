<template>
  <div class="Resister">
    <input v-model="address" placeholder="メールアドレス">
    <input v-model="password" placeholder="パスワード">
    <input v-model="passwords" placeholder="パスワード（確認用）">
  </div>
  <div>
    <v-btn elevation="2" @click="SignUp">ユーザー作成</v-btn>
  </div>
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
