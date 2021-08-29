<template>
    <div class="form-control request">
        <div class="row">
            <div class="col-md-12">
                <div class="blank">

                </div>
                <div class="filled">
                    <div class="header">
                        
                        <div class="close" @click="()=>{return this.$emit('closeRequest')}">&times;</div>
                        <center><h5>Request meeting</h5></center>
                    </div>
                    <div class="body">
                        <form @submit="submit()">
                            <label for="message">Message</label>
                            <textarea class="form-control" v-model="message"></textarea>
                            <br/>
                            <input type="submit" class="form-control btn btn-success" value="Confirm Request" required/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.request{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background-color: rgba(35,35,35,0.5);
    z-index: 1000;
    padding: 0px;
}
.blank{
    width: 100%;
    height: 60vh;

}
.filled{
    width: 100%;
    height: 40vh;
    background-color: white;
    margin: 0px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.header{
    width: 100%;
    padding: 10px;
}
.body{
    padding: 10px;
}
</style>

<script>
export default {
    name: 'RequestMeeting',
    data(){
        return{
            message: ''
        }
    },
    methods:{
        submit(){
            return this.$emit('submit', this.message);
        }
    }
}
</script>