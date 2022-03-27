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
  <div class="tweetinfo">
    <input
      type="text"
      v-model="inputText"
      placeholder="今日経験した出来事を記入しましょう"
      class="eventmemo"
    />
    <div class="emotions">
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
    </div>

    <button
      v-on:click="postTweet"
      v-bind:disabled="disableButton()"
      class="tweetbtn"
    >
      出来事を記録する
    </button>
  </div>
  <div class="line"></div>
  <div v-for="tweet in tweets" :key="tweet.id" class="tweets">
    {{ tweet.emotion }} <br />{{ tweet.text }}
  </div>
</template>

<script>
import { collection, addDoc, getDocs } from "firebase/firestore"
import { db } from "@/firebase"

export default {
  data() {
    return {
      inputText: "",
      tweets: [],
      checkMark: false,
      frustrationPoint: 0,
      effortPoint: 0,
      abandonPoint: 0,
      embarrassingPoint: 0,
      angerPoint: 0,
      criedPoint: 0,
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

      console.log(tweet.emotion)

      if (tweet.emotion === "挫折した経験") {
        this.frustrationPoint = Number(localStorage.getItem("frustrationPoint"))
        this.frustrationPoint++
        console.log("挫折した経験", this.frustrationPoint)
        localStorage.setItem(
          "frustrationPoint",
          this.frustrationPoint.toString()
        )
      } else if (tweet.emotion === "頑張った経験") {
        this.effortPoint = Number(localStorage.getItem("effortPoint"))
        this.effortPoint++
        console.log("頑張った経験", this.effortPoint)
        localStorage.setItem("effortPoint", this.effortPoint.toString())
      } else if (tweet.emotion === "投げ出した経験") {
        this.abandonPoint = Number(localStorage.getItem("abandonPoint"))
        this.abandonPoint++
        console.log("投げ出した経験", this.abandonPoint)
        localStorage.setItem("abandonPoint", this.abandonPoint.toString())
      } else if (tweet.emotion === "恥ずかしい経験") {
        this.embarrassingPoint = Number(
          localStorage.getItem("embarrassingPoint")
        )
        this.embarrassingPoint++
        console.log("恥ずかしい経験", this.embarrassingPoint)
        localStorage.setItem(
          "embarrassingPoint",
          this.embarrassingPoint.toString()
        )
      } else if (tweet.emotion === "怒った経験") {
        this.angerPoint = Number(localStorage.getItem("angerPoint"))
        this.angerPoint++
        console.log("怒った経験", this.angerPoint)
        localStorage.setItem("angerPoint", this.angerPoint.toString())
      } else if (tweet.emotion === "泣いた経験") {
        this.criedPoint = Number(localStorage.getItem("criedPoint"))
        this.criedPoint++
        console.log("泣いた経験", this.criedPoint)
        localStorage.setItem("criedPoint", this.criedPoint.toString())
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
      this.countEmotion()
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

<style>
body {
  position: absolute;
  width: 100%;
  height: 1000px;
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

.tweetinfo {
  position: absolute;
  width: 1400px;
  height: 286px;
  margin-top: 60px;
  margin-left: 21px;
  margin-bottom: 21px;
  background: rgba(246, 251, 255, 0.5);
  border: 1px solid #c8cdcf;
  box-sizing: border-box;
  border-radius: 7px;
}
.tweetinfo .eventmemo {
  position: absolute;
  width: 674px;
  height: 244px;
  left: 28px;
  margin-top: 21px;

  background: rgba(246, 251, 255, 0.6);
  border: 1px solid #c8cdcf;
  box-sizing: border-box;
  border-radius: 7px;
}

.tweetinfo .emotions {
  position: absolute;
  width: 640px;
  height: 187px;
  left: 730px;
  margin-top: 21px;
  margin-right: 21px;

  background: rgba(246, 251, 255, 0.6);
  border: 1px solid #c8cdcf;
  box-sizing: border-box;
  border-radius: 7px;
}
.tweetinfo .tweetbtn {
  position: absolute;
  width: 640px;
  height: 36px;
  left: 730px;
  margin-top: 230px;
}
.line {
  position: absolute;
  width: 1398px;
  height: 0px;
  left: 21px;
  top: 440px;

  border: 1px solid #c8cdcf;
}
.tweets {
  position: absolute;
  width: 1395px;
  height: 244px;
  left: 21px;
  top: 480px;

  background: rgba(246, 251, 255, 0.6);
  border: 1px solid #c8cdcf;
  box-sizing: border-box;
  border-radius: 7px;
}
</style>
