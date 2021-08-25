<template>
    <div class="container-fluid calander">
        <div class="row">
            <div class="col-md-12">
                <v-calendar
                    disable-page-swipe
                    is-expanded 
                    :attributes='attributes'
                    @dayclick='dayClicked'
                />
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <form action="" @submit="submitForm()">
                    <input type="hidden" name="date" :value="selectedDate"/>
                    <div class="form-item">
                        <label for="">Time</label>
                        <input type="time" class="form-control" name="time" v-model="time">
                    </div>
                    <div class="form-item">
                        <label>Title</label>
                        <input type="text" class="form-control" name="title" v-model="title"/>
                    </div>
                    <div class="form-item">
                        <label for="">Description</label>
                        <textarea name="description" class="form-control" v-model="descripiton"></textarea>    
                    </div>
                    <div class="form-item">
                        <input type="submit" class="form-control btn btn-primary" value= " ADD"/>
                    </div>                
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .calander{
        padding-top: 60px;
    }
    .form-item{
        margin-top: 20px;
    }
</style>

<script>
export default {
    name: 'CalenderAdd',
    data(){
        return {
            selectedDate: null,
            title: null,
            descripiton: null,
            time: null,
            attributes:[],
            err: null
        }
    },
    methods:{
        dayClicked(day){
            this.selectedDate = day.id;
            let val = {};
            val.key = "random Date";
            val.dates = day.id;
            val.highlight = true;
            this.attributes = [];
            this.attributes.push(val);

        },
        submitForm(){
            event.preventDefault();
            if(
                this.selectedDate == null &&
                this.time == null &&
                this.title == null &&
                this.descripiton == null
            ){
                this.err = "Please fill all the fields before submitting"
            }else{

                try{
                    this.axios.post('http://localhost:3000/mr/calander',{
                        val:{
                            key: this.title,
                            description: this.descripiton,
                            time: this.time,
                            dates: this.selectedDate
                        }
                    }, {
                        headers:{
                            token: localStorage.token
                        }
                    }).then(res=>{
                        if(res.data.flag==true && res.data.id>0){
                            this.$router.back();
                        }else{
                            this.err = "Something went wrong please try again";
                        }
                        
                        
                    }).catch(err=> {
                        console.log(err);
                        this.err = err;
                    })
                }
                catch (err){
                    this.err = err;
                }
            }
        }
    }
}
</script>