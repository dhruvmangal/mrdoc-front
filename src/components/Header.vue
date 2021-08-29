<template>
    <div class="container-fluid header">
        <div class="row">
            <div class="col-md-12">

                <div class="menu-icon" @click="activeNav()" v-if="$route.name !=='CalendarAdd' && $route.name !== 'ShowMeeting' && $route.name !== 'ShowDoctor'">&#x2630;</div>
                <div class="menu-icon" v-if="$route.name =='CalendarAdd' || $route.name =='ShowMeeting' || $route.name =='ShowDoctor'"><i class="fa fa-angle-left" @click="()=>{this.$router.back()}"></i></div>
                <div class="profile-icon"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .header{
        background-color: #68BB59;
        height: 50px;
        width: 100%;
        position: fixed;
        z-index: 2;
    }
    .menu-icon{
        margin: 5px;
        color: white;
        font-size: 25px;
        width: 35px;
        padding: 0px 5px;
        border-radius: 5px;
        cursor: pointer;
        float: left;
    }
    .profile-icon{
        width: 30px;
        height: 30px;
        background-color: grey;
        border-radius: 50%;
        float: right;
        margin: 10px 5px;
        border: 1px solid green;
    }
</style>

<script>
export default {
    name: 'Header',
    props:{
        nav: Boolean
    },
    methods:{
        activeNav(){
            this.$emit('activeNav', !this.nav);
        }
    }
}
</script>