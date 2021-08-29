<template>
    <div class="container-fluid delete">
        <div class="row">
            <div class="col-md-12">
                <div class="delete-panel">
                    <div class="header">
                        <div class="close" @click="()=>{return this.$emit('closeDel')}">&times;</div>
                    </div>
                    <div class="body">
                        <center>Are you confirm?</center>
                        <center><h2><i class="fa fa-trash"></i></h2></center>
                        
                    </div>
                    <div class="bottom">
                        <div class="left">
                            <button class="btn btn-cancel" @click="()=>{return this.$emit('closeDel')}"> <i class="fa fa-times"></i> Cancel</button>
                        </div>
                        <div class="right">
                            <button class="btn btn-confirm" @click="()=>{return this.$emit('confirmDel')}"> <i class="fa fa-trash"></i> Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.delete{
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: rgba(35,35,35,0.5);
    padding: 10% 10%;
}
.delete-panel{
    width:100%;
    height: 300px;
    background-color: white;
    border-radius: 5px;
    margin-top: 20%;
}
.header{
    padding: 10px;
}
.body{
    
    padding: 10px 0px;
}
h2{
    font-size: 45px;
    padding:60px 0px;
}
.bottom{
    margin: 6px 0px;

}
.left{
    width: 50%;
    height: 60px;
    float: left;
}
.right{
    width:50%;
    height: 60px;
    float:left;
}
.btn-confirm{
    color: red;
    width: 100%;
    height: 50px;
    border: 1px solid #c1c1c1;
    border-radius:0px;
    border-bottom-right-radius: 5px;
}
.btn-cancel{
    
    color: gray;
    width: 100%;
    height: 50px;
    border-radius:0px;
    border-bottom-left-radius: 5px;
    border: 1px solid #c1c1c1;
}
</style>

<script>
export default {
    name: 'DeleteMeeting'
}
</script>