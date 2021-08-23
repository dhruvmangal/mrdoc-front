<template>
    <div class="notification">
        <div class="notification-item">
            <div class="notification-icon"><i class="fa fa-bell"></i></div>
            <div class="notification-body"> this is a notification</div>
        </div>
        <div class="notification-item">
            <div class="notification-icon"><i class="fa fa-bell"></i></div>
            <div class="notification-body"> this is a notification</div>
        </div>
        <div class="notification-item">
            <div class="notification-icon"><i class="fa fa-bell"></i></div>
            <div class="notification-body"> this is a notification</div>
        </div>
    </div>    
</template>

<style scoped>
    .notification{
        padding: 50px 10px;
    }
    .notification-item{
        margin: 10px 0px;
        width: 100%;
        height: 100px;
        border-radius: 5px;
        border: 1px solid #f1f1f1;

    }
    .notification-icon{
        width: 20%;
        height: 100%;
        border-right: 1px solid #f1f1f1;
        padding: 40px 0px;
        float: left;
        display: flex;
        justify-content: center;

    }
    .notification-body{
        padding: 30px 20px;
        float: left;
        width: 80%;
        height: 100%;
    }


</style>

<script>
export default {
    name: 'Notification'
}
</script>