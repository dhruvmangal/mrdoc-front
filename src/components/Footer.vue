<template>
    <div class="footer">
        <router-link to="/dashboard">
            <div class="icon">
                <div class="footer-icon" :class="{'active': active.home}" @click="()=>{allFalse(); this.activeState.home=true; revert()}">         
                    <i class="fa fa-home"></i>
                </div>
                
            </div>
        </router-link>
        <router-link to="/search">
            <div class="icon">
                <div class="footer-icon" :class="{'active': active.search}" @click="()=>{allFalse(); activeState.search=true; revert()}">
                    <i class="fa fa-search footer-icon"></i>
                </div>
                
            </div>
        </router-link>
        <router-link to="/calendar">
            <div class="icon">
                <div class="footer-icon" :class="{'active': active.calender}" @click="()=>{allFalse(); activeState.calender=true; revert()}">
                    <i class="fa fa-calendar"></i>
                </div>
                
            </div>
        </router-link>
        <router-link to="/notification">
            <div class="icon">
                <div class="footer-icon" :class="{'active': active.notification}" @click="()=>{allFalse(); activeState.notification=true; revert()}">
                    <i class="fa fa-bell"></i>
                </div>
                
            </div>
        </router-link>
        
        <router-link to="/profile">
            <div class="icon">
                <div class="footer-icon" :class="{'active': active.profile}" @click="()=>{allFalse(); activeState.profile=true; revert()}">
                    <i class="fa fa-user-circle"></i>
                </div>
                
            </div>
        </router-link>
    </div>
</template>

<style scoped>
    .footer{
        position: fixed;
        bottom: 0px;
        left:0px;
        width: 100%;
        height: 50px;
        background-color: honeydew;
        -webkit-box-shadow: 0px -1px 3px 0px rgba(207,207,207,1);
        -moz-box-shadow: 0px -1px 3px 0px rgba(207,207,207,1);
        box-shadow: 0px -1px 3px 0px rgba(207,207,207,1);
        z-index: 100;
    }
    .icon{
        font-size: 20px;
        padding: 5px;
        width: 20%;
        text-align: center;
        display: flex;
        justify-content: center;
        color: gray;
        float: left;
    }
    .footer-icon{
        width: 40px;
        height: 40px;
        padding: 3px;
    }
    .active{
        color: #3A3A3A !important;
        border-radius: 50%;
        background-color: white;   
    }
</style>

<script>
export default {
    name: 'Footer',
    props:{
        active: {
            type: Object,
            default: function(){
                return {message: "hello"}
            }
        }
    },
    data(){
        return{
            activeState: this.active
        }
    },
    mounted(){
        console.log(this.activeState);
    },
    methods:{
        allFalse(){
            this.activeState.home = false;
            this.activeState.search = false;
            this.activeState.calender = false;
            this.activeState.notification = false;
            this.activeState.profile = false;
        },
        revert(){
            return this.$emit("activeMethod", this.activeState);
        }
    }
}
</script>