<template>
  <div>
    <input type="text" v-model="inputText" />
    <button v-on:click="postTweet" v-bind:disabled="disableButton()">
      ツイート
    </button>
    <input
      type="radio"
      id="frustration"
      name="choises"
      value="挫折した経験"
      v-model="checkMark"
    />
    <label for="frustration">挫折した経験</label>
    <input
      type="radio"
      id="effort"
      name="choises"
      value="頑張った経験"
      v-model="checkMark"
    />
    <label for="effort">頑張った経験</label>
    <input
      type="radio"
      id="abandon"
      name="choises"
      value="投げ出した経験"
      v-model="checkMark"
    />
    <label for="abandon">投げ出した経験</label>
    <input
      type="radio"
      id="embarrassing"
      name="choises"
      value="恥ずかしい経験"
      v-model="checkMark"
    />
    <label for="embarrassing">恥ずかしい経験</label>
    <input
      type="radio"
      id="anger"
      name="choises"
      value="怒った経験"
      v-model="checkMark"
    />
    <label for="anger">怒った経験</label>
    <input
      type="radio"
      id="cried"
      name="choises"
      value="泣いた経験"
      v-model="checkMark"
    />
    <label for="cried">泣いた経験</label>
    <div>
      <p v-for="tweet in tweets" :key="tweet.id">
        {{ tweet.text }} {{ tweet.emotion }}
      </p>
    </div>
    <div></div>
  </div>
</template>

<script>
import { collection, addDoc, getDocs } from "firebase/firestore"
// firebase.js で db として export したものを import
import { db } from "@/firebase"

export default {
  data() {
    return {
      inputText: "",
      tweets: [
        {
          // id: "0GwoGZuhTNhqHQDBeiVW",
          // text: "こんにちは、ツイートの本文です。",
        },
      ],
      checkMark: false,
    }
  },
  methods: {
    disableButton() {
      if (this.inputText == "" && this.checkMark == false) {
        return true
      } else if (this.inputText == "" || this.checkMark == false) {
        return true
      }
    },
    postTweet() {
      const tweet = {
        text: this.inputText,
        emotion: this.checkMark,
      }
      addDoc(collection(db, "tweets"), tweet).then((ref) => {
        this.tweets.push({
          id: ref.id,
          ...tweet,
        })
      })
      this.inputText = ""
      this.disableButton()
      this.checkMark = false
    },
  },
  created() {
    getDocs(collection(db, "tweets")).then((snapshot) => {
      snapshot.forEach((doc) => {
        this.tweets.push({
          id: doc.id,
          ...doc.data(),
        })
      })
    })
  },
}
</script>
