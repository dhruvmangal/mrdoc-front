<template>
    <div class="search">
        <div class="search-tool">
            <button class="btn sort"><i class="fa fa-sort"></i></button>
            <form>
                
                <input type="text" name="search" class="form-control search-input" placeholder="Search Doctors">
                <span class="btn search-icon"><i class="fa fa-search"></i></span>
            </form>
            <button class="btn filter" @click="toggleFilter()"><i class="fa fa-filter"></i></button>
        </div>
        <div class="search-result">
            <div class="result"></div>
            <div class="search-0-result" v-if="doctors.length==0">
                Not Found. Please search with different filters
            </div>
            <div class="search-result-card" v-for="item in doctors" :key="item.id">
                <div class="profile-pic-panel">
                    <div class="profile-pic" v-if="item.profile==null"></div>
                    <div class="name">{{item.name}}</div>
                    
                </div>
                <div class="profile-body">
                    <div class="beacon"> <i class="fa fa-first-aid"></i> {{item.category}}</div>
                    <div class="beacon"> <i class="fa fa-briefcase"></i> {{item.clinic}}</div>
                    <div class="beacon"> <i class="fa fa-map-marker"></i> {{item.city}}</div>
                </div>
                
            </div>
        </div>
        <filter-search v-if="filterFlag==true" @toggleFilter="toggleFilter"></filter-search>
    </div>
</template>

<style scoped>
.search{
    padding: 60px 20px;
}
.search-tool{
    width:100%;
    height: 70px;
}
.sort, .filter{
    border:1px solid  #f1f1f1;
    width:14%;
    float: left;
    margin:0px 1%;
    color: gray;
}

.search-input{
    float: left;
    width:55%;
    margin:0px 1%;
    margin-right:0px;
    outline: none;
    border-color: #f1f1f1;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-right: 0px;
}
.search-input:focus, .search-icon{
    outline: none;
    box-shadow: none;
    
}
.search-input::placeholder{
    color: #c1c1c1;
}
.search-icon{
    float: left;
    border-color: #f1f1f1;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-left: 0px;
    width:10%;
    color: gray;
    padding-left: 5px;
}
.search-result-card{
    width:100%;
    height:auto;
    border:1px solid #f1f1f1;
    border-radius: 5px;
    margin: 10px 0;
    padding: 10px;
}
.profile-pic-panel{
    width: 100%;
    height:70;
    float: left;
}
.profile-pic{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: darkseagreen;
    margin: 10px 10px;
    float: left;
}
.profile-body{
    padding: 10px;
}
.profile-pic-panel p{
    margin-left: 80px;
}
.name{
    margin: 20px 20px;
    font-size: 20px;
    float: left;
}
.beacon{
    margin: 20px 0px;
    margin-left: 80px;
}
.btn-more{
    width: 100%;
}
</style>

<script>
import FilterSearch from '@/components/search/Filter.vue';
export default {
    name: 'Search',
    components:{
        'filter-search': FilterSearch
    },
    data(){
        return{
            err: null,
            doctors:null,
            filterFlag: false
        }
    },
    mounted(){
        this.getDoctors();
    },
    methods:{
        getDoctors(){
            try{
                this.axios.get('http://localhost:3000/mr/doctor', {
                    headers: {token: localStorage.getItem('token')},
                    params:{}
                }).then(res=>{
                    if(res.data.length>0){
                        this.doctors= res.data
                    }
                }).catch(e=>{
                    this.err = e;
                })
            }catch(e){
                this.err = e;
            }
        },
        toggleFilter(){
            this.filterFlag = !this.filterFlag;
        }
    }
}
</script>