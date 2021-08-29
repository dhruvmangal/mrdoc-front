<template>
    <div class="container-fluid reschedule">
        <div class="row">
            <div class="col-md-12">
                <div class="re-panel">
                    <div class="header">

                        <div class="close" @click="()=>{this.$emit('closeReschedule')}">&times;</div>
                    </div>
                    <div class="body">
                        <center><h4>Reschedule</h4></center>
                        <form @submit="submit">
                            <div class="form-item">
                                <label for="">Date</label>
                                <v-date-picker v-model="date">
                                    <template v-slot="{ inputValue, inputEvents }">
                                        <input
                                        class="form-control "
                                        :value="inputValue"
                                        v-on="inputEvents"
                                        />
                                    </template>
                                </v-date-picker>
                            </div>
                            <div class="form-item">
                                <label>Time</label>
                                <input type="time" class="form-control" v-model="time"/>
                            </div>
                            <div class="form-item">
                                <br/>
                                <input type="submit" class="form-control btn btn-primary" value="Reschedule" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.reschedule{
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(35,35,35,0.5);
    z-index: 1000;
    padding: 10% 10%;
}
.re-panel{
    width: 100%;
    height: 310px;
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
    name: "Reschedule",
    data(){
        return {
            date: null,
            time: null
        }
    },
    methods:{
        submit(){
            event.preventDefault();
            return this.$emit('submitReschedule', {date: this.date, time: this.time})
        }
    }
}
</script>