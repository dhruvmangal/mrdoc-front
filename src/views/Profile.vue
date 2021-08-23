<template>
    <div class="profile">
        <div class="profile-pic">
            <div class="circle"></div>
            <div class="edit"><i class="fa fa-pen"></i></div>
        </div>
        <div class="profile-details">
            <form action="">
                <div class="form-item">
                    <label for="comapny">Comapny Name</label>
                    <input type="text" class="form-control" v-model="profileData.company"/>
                </div>

                <div class="form-item">
                    <label for="name">Full Name</label>
                    <input type="text" class="form-control" v-model="profileData.name"/>
                </div>

                
                <div class="form-item">
                    <label for="phone">Phone No</label>
                    <span class="phone-front">+91</span>
                    <input type="number" class="form-control phone-input" maxlength="10" v-model="profileData.phone"/>
                </div>
                

                <div class="form-item">
                    <label for="address">Address</label>
                    <textarea class="form-control" :value="profileData.address"></textarea>
                </div>

                <div class="form-item">
                    <label for="address">City</label>
                    <select class="form-control" :value ="profileData.city">
                        <option :value="profileData.city">{{profileData.city}}</option>
                    </select>
                </div>

                <div class="form-item">
                    <label for="state">State</label>
                    <select class="form-control" :value="profileData.state">
                        <option :value="profileData.state">{{profileData.state}}</option>
                    </select>
                </div>

                

            </form>

            <div class="form-item">
                <button class="form-control btn btn-success" @click="showFilter()"> Filters</button>
            </div>
        </div>
        <div v-if="filter">
            <profile-filter v-bind:filter="filter" @closeFilter="closeFilter($event)"></profile-filter>
        </div>
        
    </div>    
    
</template>

<style scoped>
.profile{
    padding: 50px 20px;
    
}
.profile-pic{
    display: flex;
    justify-content: center;
    margin: 20px;
}
.circle{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: darkseagreen;
}
.edit{
    position: relative;
    bottom: -70px;
    right: 35px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    box-shadow: 1px 2px 2px #f1f1f1;
    background-color: white;
    padding: 5px 7px;
    z-index: 1; 
}
.form-item{
    margin: 20px 0px;
}
input, textarea, select{
    outline: none !important;
    box-shadow: none;
}
input:focus, textarea:focus, select:focus{
    outline: none !important;
    box-shadow: none;
    border:1px solid darkseagreen;
}
.phone-front{
    border-right: 0.05rem solid gray;
    position: relative;
    bottom: -40px;
    left: -65px;
    padding: 9px;
}
.phone-input{
    text-indent: 60px;
}
</style>

<script>
import Filter from '@/components/Filter.vue'
export default {
  
    name: 'Profile',
    components:{
        'profile-filter': Filter
    },
    props:{
        profile: Boolean
    },
    data(){
        return{
            filter: false,
            profileData: null

        };
        

    },
    methods:{
        showFilter(){
            this.filter = !this.filter;
        },
        closeFilter(val){
            this.filter= val;
        },
        getProfile(){
            this.axios.get('http://localhost:3000/mr', {
                headers:{
                     token: localStorage.token
                }
            }).then((res)=>{
                console.log(res.data[0]);
                this.profileData = res.data[0];
            });  
        },

        // updateProfile(variable, value){

        // }

    },
    mounted(){
        this.getProfile();
    }
}
</script>