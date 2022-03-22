<script>
import axios from "axios";
export default {
 data(){
  return{
   name:"",
   comment:"",
   posts:[]
  };
 },
 created(){
  axios.get(
   "/comments"
  ).then(response=>{
   this.posts = response.data.documents;
   console.log(response.data.documents);
  });
 },
 methods:{
  createComment(){
   axios.post("/comments",
  {
   fields:{
   name: {
    stringValue: this.name
   },
   comment:{
    stringValue: this.comment
   }
  }
 }).then(response => {
  console.log(response);
 }).catch(error => {
  console.log(error);
 });
   this.name="";
   this.comment="";
  }
 }
}
</script>