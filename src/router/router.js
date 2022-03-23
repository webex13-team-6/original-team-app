import Vue from 'vue';
import Router from 'vue';
import 


  <script src="https://www.gstatic.com/firebasejs/5.3.1/firebase.js"></script>
  <script>
  // Initialize Firebase
    var config = {apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>",      
   };
  firebase.initializeApp(config);
 </script>

 <script type="text/javascript">
            var ui = new firebaseui.auth.AuthUI(firebase.auth());

            var uiConfig = {
              callbacks: {
                signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                  return true;
                },
                uiShown: function() {
                  document.getElementById('loader').style.display = 'none';
                }
              },
              signInFlow: 'popup',
              signInSuccessUrl: './success.html',
              signInOptions: [
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
              ],
            };
            ui.start('#firebaseui-auth-container', uiConfig);
        </script>



