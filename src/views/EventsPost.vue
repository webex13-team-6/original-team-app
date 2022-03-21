<template>
  <div>
    <input type="text" v-model="inputText" />
    <button v-on:click="postTweet" v-bind:disabled="disableButton()">
      ツイート
    </button>
    <input
      type="radio"
      id="like"
      name="choises"
      value="好き"
      v-model="checkMark"
      checked
    />
    <label for="like">好き</label>
    <input
      type="radio"
      id="dislike"
      name="choises"
      value="嫌い"
      v-model="checkMark"
      checked
    />
    <label for="dislike">嫌い</label>
    <input
      type="radio"
      id="goodAt"
      name="choises"
      value="得意"
      v-model="checkMark"
      checked
    />
    <label for="goodAt">得意</label>
    <input
      type="radio"
      id="weakPoint"
      name="choises"
      value="苦手"
      v-model="checkMark"
      checked
    />
    <label for="weakPoint">苦手</label>

    <div>
      <p v-for="tweet in tweets" :key="tweet.id">
        {{ tweet.text }} {{ tweet.emotion }}
      </p>
    </div>
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
      checkMark: "",
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
