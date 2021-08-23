<template>
    <div class="container-fluid add">
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <div class="add-date">
                    <div class="title">
                        <span @click="()=>{return this.$emit('closeAdd')}">&times;</span>
                        Add Date
                    </div>
                    <div class="body">
                        <form action="" @submit="submit()">
                            <div class="form-item">
                                <label> Date</label>
                                <input type="text" :value="selectedDate" class="form-control" readonly>
                            </div>
                            <div class="form-item">
                                <label>Time</label>
                                <input type="time" class="form-control" v-model="time" required>
                            </div>
                            <div class="form-item">
                                <label>Title</label>
                                <input type="text" class="form-control" v-model="title" required>    
                            </div>                        

                            <div class="form-item">
                                <label>Description</label>
                                <textarea class="form-control" v-model="description"></textarea>
                            </div>
                            <div class="form-item">
                                <input type="submit" class="form-control btn btn-primary"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-4"></div>
        </div>
    </div>
</template>

<style scoped>
.add{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(35,35,35,0.5);
    z-index: 100;
}
.add-date{
    margin-top: 50px;
    width: 100%;
    height: 500px;
    max-height: 700px;
    background-color: white;
    border-radius: 5px;
    position: relative;
}
.title{
     padding: 10px;
}
.title span{
    float: right;
    font-size: 20px;
}
.body{
    padding: 10px;
    overflow-y: scroll ;
    height: 700px;
    max-height: 500px;
}
.form-item{
    margin: 20px 0px;
}
</style>

<script>
export default {
    name: 'AddDate',
    props:{
        selectedDate: String
    },
    data(){
        return{
            date: this.selectedDate,
            time: '',
            title: '',
            description: ''
        }
    },
    methods:{
        submit(){
            event.preventDefault();
            return this.$emit('submitAdd', {dates: this.date, time: this.time, key: this.title, description: this.description});
        }
    }
}
</script>