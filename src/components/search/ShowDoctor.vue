<template>
    <div class="container-fluid doctor">
        <div class="row">
            <div class="col-md-12">
                <div class="search-result-card">
                    <div class="profile-pic-panel">
                        <div class="profile-pic"></div>
                        <div class="name">{{doctor.name}}</div>
                        <div class="favorite" @click="favorite()"><i class="fa fa-heart" :class="{'heart-o': doctor.favorite, 'heart': !doctor.favorite}"></i></div>
                    </div>
                    <div class="profile-body">
                        <div class="beacon"> <i class="fa fa-first-aid"></i> Specialist</div>
                        <div class="beacon-description"> {{doctor.category}} </div>
                        <div class="beacon"> <i class="fa fa-briefcase"></i> Clinic</div>
                        <div class="beacon-description">{{doctor.clinic}}</div>
                        <div class="beacon"> <i class="fa fa-map-marker"></i> Address</div>
                        <div class="beacon-description">{{doctor.address}}</div>
                        <div class="beacon"> <i class="fa fa-map-marker"></i> State</div>
                        <div class="beacon-description">{{doctor.state}}</div>
                        <div class="beacon"> <i class="fa fa-map-marker"></i> City</div>
                        <div class="beacon-description">{{doctor.city}}</div>
                    </div>
                    <div class="request-panel">
                        <button class="request-btn btn btn-success form-control" @click="toggleRequest()" :disabled="isDisable">  {{requestBtnHtml}} <i class="fa fa-angle-right"></i> <i class="fa fa-angle-right"></i> </button>
                    </div>
                </div>
            </div>
        </div>
        <request-meeting v-if="requestParam==true" @closeRequest="toggleRequest()" @submit="submitRequest($event)"></request-meeting>
    </div>
</template>

<style scoped>
.doctor{
    padding-top: 60px;

}
.search-result-card{
    width:100%;
    height:auto;
    border:1px solid #f1f1f1;
    border-radius: 5px;
    margin: 10px 0;
    padding: 10px;
}
.profile-pic-panel{
    width: 100%;
    height:70;
    float: left;
}
.profile-pic{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: darkseagreen;
    margin: 10px 10px;
    float: left;
}
.favorite{
    float: right;
    padding: 8px;
    font-size: 20px;
}
.heart{
    color: gray;
}
.heart-o{
    color: red !important;
}
.profile-body{
    padding: 20px;
    margin-top: 25px;
}
.profile-pic-panel{
    border-bottom: 1px solid #f1f1f1;
    padding: 10px 0px;
    margin-bottom: 10px;
}
.profile-pic-panel p{
    margin-left: 80px;
    
}
.name{
    margin: 20px 20px;
    font-size: 20px;
    float: left;
}
.beacon{
    margin: 20px 10px;
    font-size: 16px !important;
}
.beacon-description{
    color: gray;
    font-size: 18px;
    margin: 10px 20px;
}
.request-panel{
    position: fixed;
    bottom: 60px;
    left:0px;
    width: 100%;
    padding: 0px 20px;
}

.request-btn{
    height: 45px;
}
</style>

<script>
import Request from '@/components/search/Request';
export default {
    name: 'ShowDoctor',
    components:{
        'request-meeting': Request
    },
    data(){
        return{
            id: null,
            err: null,
            doctor: null,
            requestParam:false,
            requestBtnHtml:  'Request Meeting',
            isDisable: true
        }
    },
    mounted(){
        this.id = this.$route.params.id;
        this.getDoctor();
    },
    methods:{
        getDoctor(){
            try{
                this.axios.get('http://localhost:3000/mr/doctor/'+this.id, {
                    headers: {token: localStorage.getItem('token')}
                }).then((res)=>{
                    if(res.data.length>0){
                        this.doctor = this.setFavorite(res.data[0]);
                    }
                }).catch(e=>{
                    this.err= e;
                })
            }
            catch(e){
                this.err= e;
            }
        },
        setFavorite(data){
         
            if(data.favorite==null){
                data.favorite  = false
            }else{
                data.favorite  = true;
            }
             
            return data;
        },
        favorite(){
            let operation;
            if(this.doctor.favorite==false){
                operation = this.axios.post;    
            }else{
                operation = this.axios.delete;
            }
            
            try{
                operation('http://localhost:3000/mr/doctor/favorite/'+this.id,{headers: {token: localStorage.getItem('token')}  }, {
                 headers: {token: localStorage.getItem('token')}   
                }).then(res=>{
                    if(res.data.flag==true){
                        this.doctor.favorite = !this.doctor.favorite;
                        this.message = "Favorite Added";
                    }else{
                        this.err = res.data.message;
                    }         
                }).catch(e=>{
                    this.err = e;
                })
            }
            catch(e){
                this.err= e;
            }
            
        },
        toggleRequest(){
            if(this.requestBtnHtml == 'Request Meeting'){
                this.requestParam = !this.requestParam;
            }
            
        },
        submitRequest(val){
            event.preventDefault();

            try{
                this.axios.post('http://localhost:3000/mr/request', {
                    message: val,
                    doctor_id : this.id
                },{
                    headers: {token: localStorage.getItem('token')}
                }).then((res)=>{
                    if(res.data.flag==true){
                        this.toggleRequest();
                        this.requestBtnHtml = 'Request Submitted';
                        this.isDisable = false;
                    }
                }).catch(e=>{
                    this.err = e;
                })
            }
            catch(e){
                this.err =e;
            }
        }

    }
}
</script>