<template>
  <div class="Resister">
    <input type="text" class="name2" />
    <input type="text" class="password2" />
    <input type="text" class="repassword2" />
    <input type="button" value="登録" class="resister" />
  </div>
  <div>
    <v-btn @click="SignUp">ユーザー作成</v-btn>
  </div>
</template>
<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

export default {
  data() {
    return {
      emailAddress: "",
      password: "",
    }
  },
  methods: {
    SignUp() {
      const auth = getAuth()
      createUserWithEmailAndPassword(auth, this.emailAddress, this.password)
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
