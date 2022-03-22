<template>
  <div>
    <h2>自己分析サイト</h2>
    <input v-model="Address" placeholder="メールアドレス">
    <input v-model="passwordss" placeholder="パスワード">
    <v-btn @click="SignIn">ログイン</v-btn>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
export default {
  data () {
    return {
      Address: '',
      passwordss: '',
    }
  },
  methods: {
    SignIn () {
      try {
        const auth = getAuth();

        signInWithEmailAndPassword(auth, this.Address, this.passwordss)
          .then(() => {
            console.log('ログイン成功')
          })
          .catch((error) => {
            console.error(error)
          })
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<!-- <script>
// import axios from "axios";
// export default {
//  data(){
//   return{
//    name:"",
//    comment:"",
//    posts:[]
//   };
//  },
//  created(){
//   axios.get(
//    "/comments"
//   ).then(response=>{
//    this.posts = response.data.documents;
//    console.log(response.data.documents);
//   });
//  },
//  methods:{
//   createComment(){
//    axios.post("/comments",
//   {
//    fields:{
//    name: {
//     stringValue: this.name
//    },
//    comment:{
//     stringValue: this.comment
//    }
//   }
//  }).then(response => {
//   console.log(response);
//  }).catch(error => {
//   console.log(error);
//  });
//    this.name="";
//    this.comment="";
//   }
//  }
// }
</script> -->
