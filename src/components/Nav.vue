<template>
    <div class="nav" :class="{'active': nav}">
        <div class="nav-container">
            <div class="nav-header">
                <span class="close" @click="closeNav()">&times;</span>
            </div>
            <div class="nav-body">
                <div class="nav-menu">
                    <i class="fa fa-info-circle"></i>
                    <span>About Us</span>
                </div>
                <div class="nav-menu">
                    <i class="fa fa-file"></i>
                    <span>Terms & Condiitions</span>
                </div>
                <div class="nav-menu">
                    <i class="fa fa-lock"></i>
                    <span>Privacy Policy</span>
                </div>
                
                <div class="nav-menu" @click="logout()">
                    <i class="fa fa-lock"></i>
                    <span>Logout</span>
                </div>
                
            </div>
        </div>
    </div>    
</template>

<style scoped>
    .nav{
        position: fixed;
        top: 0px;
        left:0px;
        width: 100%;
        height: 100%;
        z-index: 2;
        background-color: rgba(35,35,35,0.5);
        display: none;
    }
    .active{
        display: block !important;
    }
    .nav-container{
        width: 300px;
        height: 100%;
        background-color: white;
    }
    .nav-header{
        background-color: #68BB59;
        height: 50px;
    }
    .close{
        font-size: 30px;
        float: right;
        margin: 10px;
    }
    .nav-body{
        padding: 10px; 
    }
    .nav-menu{
        border-bottom: 1px solid #f1f1f1;
        padding: 10px;
        color: black;
    }
    .nav-menu span{
        margin: 0px 20px;
    }
</style>

<script>
export default {
    name: 'Nav',
    props:{
        nav: Boolean
    },
    methods:{
        closeNav(){
            return this.$emit('closeNav', false);
        },
        logout(){
            localStorage.removeItem('token');
            this.$router.push('/login');
        }
    }    
}
</script>