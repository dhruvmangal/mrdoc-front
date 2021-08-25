<template>
    <div class="container-fluid edit">
        <div class="row">
            <div class="col-md-12">
                <div class="edit-panel">
                    <div class="header">
                        <div class="close" @click="()=>{return this.$emit('closeEdit')}">
                            &times;
                        </div>
                    </div>                    
                    <div class="body">
                        <center><h4>Edit Meeting</h4></center>
                        <form @submit="submit">
                            <div class="form-item">
                                <label for=""> Title </label>
                                <input type="text" class="form-control" v-model="title"/>
                            </div>
                            <div class="form-item">
                                <label for="">Description</label>
                                <textarea class="form-control" v-model="description"></textarea>
                            </div>
                            <div class="form-item">
                                <br/>
                                <input type="submit" class="form-control btn btn-primary" value="Edit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.edit{
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(35,35,35,0.5);
    z-index: 1000;
    padding: 10% 10%;
}
.edit-panel{
    width: 100%;
    height: auto;
    background-color: white;
    border-radius: 5px;
    margin-top: 20%;
}
.header{
    padding: 10px;
}
.body{
    padding: 10px;
}
.form-item{
    margin: 10px 0px;
}
</style>

<script>
export default {
    name: 'EditMeeting',
    data(){
        return{
            title: null,
            description: null
        }
    },
    methods:{
        submit(){
            event.preventDefault();
            let val = {};
            if(this.title!=null){
                val.title= this.title
            }
            if(this.description!=null){
                val.description= this.description
            }
            return this.$emit('submitEdit', val);
        }
    }
}
</script>