<script>
import axios from 'axios';

export default {
    data() {
        return {
            count: 0,  
            m: [],
            n: [],
            search: {
                lang: [],
                tools: [],
                role: '',
                level: ''
            }
        }
    },
    async mounted() {
        let list = await axios.get('https://63aaa3b8fdc006ba6047ae79.mockapi.io/table');
        this.m=list.data;

    },
    methods: {

        func(el, e) {
            this.count++;
            if (e == 'role') {
                this.search.role = el;
            } else if (e == 'level') {
                this.search.level = el;
            } else if (e == 'lang') {
                this.search.lang = this.search.lang.filter(t => t != el);

                this.search.lang.push(el);
            } else if (e == 'tool') {
                this.search.tools = this.search.tools.filter(t => t != el);
                this.search.tools.push(el);
            }

        },
        clear() {
            this.count = 0;
            this.search.lang = [];
            this.search.role = '';
            this.search.level = '';
            this.search.tools = [];
        },
        cross(s, e) {
            this.count--;
            if (e == 'role') {
                this.search.role = '';
            } else if (e == 'level') {
                this.search.level = '';
            } else if (e == 'lang') {
                this.search.lang = this.search.lang.filter(t => t != s);

            } else if (e == 'tool') {
                this.search.tools = this.search.tools.filter(t => t != s);
            }
        },
        
    },
    watch: {
        count(newSearch) {   this.n=[];
            console.log("i am watching the search bar")
            if ( this.search.role != ''   ) {
                console.log('i am if ')
                for (let i = 0; i < this.m.length; i++) {
                    if ( this.m[i].role == this.search.role) {
                       this.n.push(this.m[i]);
                    }
                }
                console.log(this.m)
               
                console.log(this.n);
                if ( this.search.level != ''   ) {
                    console.log("i am level")
                  this.n= this.n.filter( t => t.level== this.search.level)
                  if ( this.search.lang != []   ){
                //   this.n= this.n.filter( t => t.level== this.search.level)
                //  for (let i = 0; i < this.n.length; i++) {
                    // let intersection = this.n.lang.filter( (x)=> this.search.lang.includes(x))   
                //   this.n =this.n.filter(intersection == this.search.lang)   
                                
                //  }
                  }
                }
            }   
            if ( this.search.level != ''   ) {  this.n=[];
                console.log('i am if ')
                for (let i = 0; i < this.m.length; i++) {
                    if ( this.m[i].level == this.search.level) {
                       this.n.push(this.m[i]);
                    }
                }
                console.log(this.m)
                
                console.log(this.n);
                if ( this.search.role != ''   ) {
                    console.log("i am level")
                  this.n= this.n.filter( t => t.role== this.search.role)
                //   if ( this.n.lang != [ ]   ){  
                //   this.n= this.n.( t => t.lang== this.search.lang)
                //  for (let i = 0; i < this.n.length; i++) {
                    // let intersection = this.n.lang.filter( (x)=> this.search.lang.includes(x))   
                    console.log(this.m.languages)
                //   this.n =this.n.filter(intersection == this.search.lang)   
                                
                //  }
                //   }
                }
            }
            // if ( this.search.level != '' ) {
            //     console.log('i am if ')
            //     for (let i = 0; i < this.m.length; i++) {
            //         if ( this.m[i].level == this.search.level) {
            //            this.n.push(this.m[i]);
            //         }
            //     } 
            //     console.log(this.m)
            //     // this.n = this.m.filter(t => console.log(t.isRT));
            //     console.log(this.n);
            // }   
        }
        
    },
}
</script>

<template>
<div class="container">
    <div class="search">
        <div class="spa">
            <span v-for="s in search.lang">{{ s }}
                <font-awesome-icon class="icon" @click="cross(s,'lang')" icon="fa-solid fa-times" />
            </span>
            <span v-for="s in search.tools">{{ s }}
                <font-awesome-icon class="icon" @click="cross(s,'tool')" icon="fa-solid fa-times" />
            </span>
            <span v-if="this.search.level!=''">{{ this.search.level }}
                <font-awesome-icon class="icon" @click="cross(s,'level')" icon="fa-solid fa-times" />
            </span>
            <span v-if="this.search.role!=''">{{ this.search.role }}
                <font-awesome-icon class="icon" @click="cross(s,'role')" icon="fa-solid fa-times" />
            </span>
        </div>
        <div class="btn"> <button @click="clear()">clear</button></div>
    </div>
    <div class="data">
        <div class="inner" v-if="count==0" v-for="item in m" :key="item.id">
            <div class="i"><img v-bind:src=item.logo>
                <div class="d">
                    <div>{{ item.company }} <button v-if="item.new">new!</button><button v-if="item.featured">featured</button></div>
                    <h1>{{ item.position }}</h1>
                    <ul class="ul">
                        <li>{{ item.postedAt }}</li>
                        <li>{{ item.contract }}</li>
                        <li>{{ item.location }}</li>
                    </ul>
                </div>
            </div>
            <div class="list">
                <button @click="func(item.role,'role')">{{ item.role }}</button>
                <button @click="func(item.level,'level')">{{ item.level }}</button>
                <button v-for="lang in item.languages" @click="func(lang,'lang')">{{ lang }}</button>
                <button v-for="t in item.tools" @click="func(t,'tool')">{{t}}</button>

            </div>
        </div>
        <div class="inner" v-if="count!=0" v-for="im in n">
            <div class="i"><img v-bind:src=im.logo>
                <div class="d">
                    <div>{{ im.company }} <button v-if="im.new">new!</button><button v-if="im.featured">featured</button></div>
                    <h1>{{ im.position }}</h1>
                    <ul class="ul">
                        <li>{{ im.postedAt }}</li>
                        <li>{{ im.contract }}</li>
                        <li>{{ im.location }}</li>
                    </ul>
                </div>
            </div>
            <div class="list">
                <button @click="func(im.role,'role')">{{ im.role }}</button>
                <button @click="func(im.level,'level')">{{ im.level }}</button>
                <button v-for="lang in im.languages" @click="func(lang,'lang')">{{ lang }}</button>
                <button v-for="t in im.tools" @click="func(t,'tool')">{{t}}</button>

            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.data {
    display: flex;
    max-width: 1000px;
    width: 100%;
    gap: 3rem;
    margin: 30px auto;
    padding: 10px;
    min-height: 150px;
    flex-direction: column;
}

.i img {
    width: 100%;
    max-width: 130px;
}

.i {
    display: flex;
    padding: 10px;
    max-width: 450px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    flex: 1 1 auto;
}

.inner {
    display: flex;
    max-width: 1000px;
    width: 100%;
    justify-content: space-between;
    background-color: #ffff;
    padding: 10px 10px 15px 10px;
    align-items: center;
    border-radius: 0px 5px 5px;
    border-left: 5px solid hsl(180, 29%, 50%);
    box-shadow: 15px 15px 8px hsl(180, 31%, 95%);
    min-height: 150px;
}

.search span {
    background-color: hsl(180, 31%, 95%);
    color: hsl(180, 29%, 50%);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 0px 0px 7px;
    font-weight: 700;
    border-radius: 3px;
}

.btn {
    max-width: 50px;
    width: 100%;
    border: none;
}

.spa {
    max-width: 800px;
    width: 100%;
    min-height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    padding: 10px;
    flex-wrap: wrap;
}

.search {
    max-width: 980px;
    border-radius: 5px;
    width: 100%;
    margin: 0 auto;
    /* position: relative; */
    min-height: 80px;
    box-shadow: 15px 15px 50px hsl(180, 31%, 95%);
    background: #ffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: -webkit-sticky;
    gap: 1rem;
    position: sticky;
    top: 5%;
}

.icon {
    color: #ffff;
    padding: 5px;
    margin-left: 5px;
    background-color: hsl(180, 29%, 50%);
}

.icon:hover {
    background-color: hsl(180, 14%, 20%);
    transition: 0.2s all ease;
}

.search button {
    color: hsl(180, 8%, 52%);
    font-weight: 500;
    font-size: 17px;
    position: absolute;
    right: 2%;
    top: 40%;
}

.search button:active {
    transform: scale(0.98);
    transition: transform 0.5s ease;
}

.search button:hover {
    color: hsl(180, 29%, 50%);
    border-bottom: 2px solid hsl(180, 8%, 52%);
    transition: 0.2s all ease;
}

.icon:active {
    transform: scale(0.92);
    transition: transform 0.5s ease;
}

.d {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    max-width: 300px;
    width: 100%;
    min-height: 130px;
    color: hsl(180, 29%, 50%);
    font-weight: 500;
}

.d button {
    color: #ffff;
    background: hsl(180, 29%, 50%);
    padding: 2px 10px;
    margin: 5px;
    border-radius: 15px;
    text-transform: capitalize;
}

.d button:nth-child(2) {

    background: hsl(180, 14%, 20%);

}

.ul {
    max-width: 300px;
    width: 100%;
    display: flex;
    gap: 2rem;
    justify-content: flex-start;
    align-items: center;
    list-style: square;
}

.ul li:nth-child(1) {

    list-style: none;
}

.ul li {
    color: hsl(180, 8%, 52%);
}

.container {

    min-height: 100vh;
    max-width: 1440px;
    background-size: contain;
    padding: 155px 10px 10px 10px;
    background: url('./bg-header-desktop.svg') no-repeat top center;
}

.list {
    max-width: 450px;
    gap: 1rem;
    max-height: 100px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;

    align-items: flex-start;

    flex: 1 1 auto;
    margin: 0 auto;
}

.container .d h1 {
    color: hsl(180, 14%, 20%);
    cursor: pointer;
}

.container .d h1:hover {
    color: hsl(180, 29%, 50%);
    ;
}

.list button {
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

.list button:active {
    transform: scale(0.92);
    transition: transform 0.5s ease;
}

.list button:hover {
    color: white;
    background: hsl(180, 29%, 50%);
    transition: 0.5s ease;
}

.i h1 {
    color: hsl(180, 29%, 50%);
    font-weight: 700;
}

@media (max-width:690px) {
    .inner {
        gap: 0rem;
    }
}

@media (max-width:700px) {
    .inner {
        gap: 1rem;
    }

    .list {
        justify-content: flex-start;
    }
}

@media (max-width:884px) and (min-width: 610px) {
    .d button {
        font-size: 8px;
    }

    .ul {
        gap: 1.5rem;
    }

    .i img {
        width: 80px;

    }

    .list button {
        font-size: 10px;
    }

    .container {
        font-size: 12px;
    }
}

@media (max-width:610px) {
    .inner {
        gap: 2rem;
        flex-wrap: wrap;
    }

    .i {
        border-bottom: 3px solid hsl(180, 8%, 52%);
    }
}

@media (max-width:500px) {
    .data {

        gap: 3rem;
    }

    .inner {
        position: relative;
    }

    .inner img {
        position: absolute;
        width: 70px;
        top: -40px;
    }
}

@media (max-width:640px) {
    .container {
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }

    .inner {
        position: relative;
    }

    .inner img {
        position: absolute;
        width: 70px;
        top: -40px;
    }
}

@media (max-width: 400px) {
    .container {
        background: url('./bg-header-mobile.svg') no-repeat top center;
        background-size: contain;
        font-size: 12px;
    }
}

@media (max-width: 710px) {
    .ul {
        font-size: 10px;
    }
}
</style>
