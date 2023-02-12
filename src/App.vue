<script>
import axios from 'axios';
export default {
  data( ) {
    return {
        m:[]
    }
  },
  async mounted() {
    let list = await axios.get('https://63aaa3b8fdc006ba6047ae79.mockapi.io/table') ;
    this.m=list.data;
    
    
  },
  methods: {
    search(){
      console.log("i am search bar")
    }
  },
}

</script>

<template>
  <div class="container"   >
  <div class="search" @click="search()"><button>clear</button></div>
  <div class="data" >
    <div class="inner" v-for="item in m"> 
    <div class="i"><img v-bind:src=item.logo >
   <div class="d"> 
   <div>{{ item.company }} <button   v-if="item.new">new!</button><button v-if="item.featured">featured</button></div>
    <h1>{{ item.position }}</h1>
    <ul class="ul">
      <li>{{ item.postedAt }}</li>
      <li>{{ item.contract }}</li>
      <li>{{ item.location }}</li>
    </ul> 
     </div></div>
    <div class="list">
    <button>{{ item.role }}</button>
    <button>{{ item.level }}</button>
    <button v-for="lang in item.languages" >{{ lang }}</button>
    <button v-for="t in item.tools" >{{ t }}</button>
    
    </div>
  </div>
  </div>
  </div>
</template>

<style scoped>

.data{
  display: flex;
  max-width: 1000px;
  width: 100%;  gap: 3rem;
  margin: 0 auto;   
  padding: 10px;
  min-height:150px ;
  flex-direction: column;
}
.i img{
  width: 100%;
  max-width: 130px;
}
.i{
  display: flex;   padding: 10px;
  max-width: 450px; width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
   flex: 1 1 auto;
  }
.inner{
  display: flex; max-width: 1000px; width: 100%;
  justify-content: space-between; 
  background-color: #ffff; padding: 10px 10px 15px 10px;
  align-items: center;  
  border-radius: 0px 5px 5px;
  border-left: 5px solid hsl(180, 29%, 50%);
  box-shadow: 15px 15px 8px hsl(180, 31%, 95%);
  min-height: 150px;
  /* flex-wrap: wrap; */
}

.search{
  max-width: 980px;  border-radius: 5px;
  width: 100%;   margin: 0 auto;
  height: 70px;   position: relative;
  box-shadow: 15px 15px 8px hsl(180, 31%, 95%);
  background: #ffff;  
}
.search button{
     color: hsl(180, 8%, 52%);
     font-weight: 500;
   font-size: 17px;   position: absolute;  right: 20px; top: 20px;
   /* border-radius: 3px; */ 
}
.search button:active{
  transform: scale(0.98); transition: transform 0.5s  ease;
}
.search button:hover{
  color: hsl(180, 29%, 50%); 
  border-bottom: 2px solid  hsl(180, 8%, 52%); transition:  0.2s all ease;  
}
.d{
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
   max-width: 300px;
   width:100%;  min-height: 130px;
   color: hsl(180, 29%, 50%); 
   font-weight: 500; 
}
.d button{
  color: #ffff;
  background: hsl(180, 29%, 50%);
  padding: 2px 10px;
  margin: 5px; border-radius: 15px;
  text-transform: capitalize;
}
.d button:nth-child(2){
  
  background: hsl(180, 14%, 20%);
  
}
.ul{
  max-width: 300px;
  width:100%;
  display: flex; gap:2rem;
  justify-content: flex-start;
  align-items: center;
  list-style: square;
}
.ul li:nth-child(1){
  
  list-style: none;
}
.ul li{
    color: hsl(180, 8%, 52%);
}
.container{
  /* background-color: ; */
  min-height: 100vh;
  max-width: 1440px; 
  padding: 155px 10px 10px 10px;
  background:  url('./bg-header-desktop.svg') no-repeat  top center  ;
}
.list{
  max-width: 450px;
  gap: 1rem;   max-height: 100px;
  width: 100%; 
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  
  align-items: flex-start ;

  flex: 1 1 auto;
  margin: 0 auto;
}
.container .d h1{
   color: black;
  }
.list button{
   color: hsl(180, 29%, 50%); 
   background-color: hsl(180, 31%, 95%);
   padding: 5px;
   font-weight: 500;
   height: 30px;
   box-sizing: border-box;
   /* text-align:; */
   font-size: 15px;
   border-radius: 3px;
}
.list button:active{
  transform: scale(0.92); transition: transform 0.5s  ease;
}
.list button:hover{
   color: white ;
   background: hsl(180, 29%, 50%) ;
   transition: 0.5s ease;
}
.i h1{
  color: hsl(180, 29%, 50%);
  font-weight: 700;
}
@media (max-width:690px){
  .inner{
    gap: 0rem;
  }
}
@media (max-width:700px){
  .inner{
       gap: 1rem;
  }
  .list{
    justify-content: flex-start;
  }
}
@media (max-width:884px) and (min-width: 610px){
  .d button{
   font-size: 8px;
}
.ul{
  gap: 1.5rem;
}
.i img{
  width: 80px;
 
}
.list button{
  font-size:10px;
}
.container{
  font-size: 12px;
}
}
@media (max-width:610px)
{
  .inner{
    gap: 2rem;
    flex-wrap: wrap;
  }
  .i{
    border-bottom: 3px solid hsl(180, 8%, 52%);
  }
}
@media (max-width:500px){
  .data{

    gap: 3rem;  
  }

  .inner{
    position: relative;
  }
  .inner img{
    position: absolute;
    width: 70px;
    top: -40px;
  }
}
@media (max-width:640px){
  .container{
    display: flex; flex-direction: column;
    gap: 3rem;
  }
  
  .inner{
    position: relative;
  }
  .inner img{
    position: absolute;
    width: 70px;
    top: -40px;
  }
}
@media (max-width: 400px){
  .container{
  background:  url('./bg-header-mobile.svg') no-repeat  top center  ;  background-size: contain;
    font-size: 12px;
  }
}
@media (max-width: 710px){
  .ul{
    font-size: 10px;
  }
}
</style>
