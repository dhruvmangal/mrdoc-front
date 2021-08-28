<template>
    <div class="container-fluid meeting">
        <div class="row">
            <div class="col-md-12">
                <div class="title">
                    {{data.title}}
                    <div class="edit-panel">
                        <span class="edit"><i class="fa fa-pen"></i></span>    
                        <div class="hover-panel">
                            <ul>
                                <li @click="edit()"> <i class="fa fa-pen"></i> Edit</li>
                                <li @click="reschedule()"> <i class="fa fa-calendar"></i> Reschedule</li>
                                <li @click="del()"> <i class="fa fa-trash"></i> Delete</li>
                            </ul>
                        </div>
                    
                    </div>
                </div>
                
                <div class="block">
                    <span>Description:</span>
                    <br/>
                    {{data.description}}
                </div>                
                <div class="block">
                    <span>Meeting Date</span>
                    <br/>
                    {{meetingDate}}
                </div>
                <div class="block">
                    <span>Meeting Time</span>
                    <br/>
                    {{data.meeting_time}}
                </div>
                <div class="block">
                    <span>Creation Date</span>
                    <br/>
                    {{creationDate}}
                </div>

                <div class="block">
                    <span>staus</span>
                    <br/>
                    <div clss="status-panel" v-for="st in status" :key="st.id">
                        <div class="dot"></div>
                        <div class="line"></div>
                        <div class="status-info">
                            {{st.status}}
                            <br/>
                            {{ISOToDate(st.date)}} , {{st.time}}
                            <br/>
                            {{st.message}}
                        </div>
                        
                    </div>
                    
                </div>
                <div class="block">
                    <button class="btn btn-success form-control" @click="openStatus()">Update Status</button>
                </div>
                <div class="block">
                    <button class="btn btn-danger form-control"><i class="fa fa-trash"></i> Delete</button>
                </div>
            </div>
        </div>
        <div v-if="showStatus==true">
            <update-meeting-status :meeting_status="data.meeting_status" :id="id" @closeStatus="closeStatus($event)" @updateStatus="updateStatus($event)"></update-meeting-status>
        </div>
        <div v-if="showDel==true">
            <del-meeting @closeDel="del()" @confirmDel="confirmDel()"></del-meeting>
        </div>
        <div v-if="showReschedule==true">
            <re-schedule @closeReschedule="()=>{showReschedule= false}" @submitReschedule="submitReschedule($event)"></re-schedule>
        </div>
        <div v-if="showEdit==true">
            <edit-meeting @closeEdit="edit()" @submitEdit="submitEdit($event)"></edit-meeting>
        </div>
    </div>
</template>

<style scoped>
.meeting{
    padding-top: 60px;
}
.title{
    font-size: 20px;
    padding: 10px 0px;
    border-bottom: 1px solid #c3c3c3;
}
.block{
    font-size: 18px;
    padding: 10px 0px;
}
.edit-panel{
    float: right;
}
span{
    font-size: 15px;
    color: black;
    font-weight: bold;
}
.dot{
    width:20px;
    height: 20px;
    border-radius: 50%;
    background-color: #0677B3;
    float: left;
}
.status-info{
    padding: 0px 20px;
    margin: 10px;
    height: 140px;
}
.line{
    float: left;
    height: 150px;
    width: 2px;
    background-color: #0677B3;
    position: absolute;
    left: 25px;
    z-index:0;
    
 }
.status-panel{
    width:100% !important;
    height: 150px;
    border:1px   solid #f1f1f1;
}
.edit:hover+ .hover-panel{
    display: block;
}
.hover-panel:hover{
    display: block;
}
.hover-panel{
    display: none;
    position: absolute;
    top:10;
    right: 5px;
    border: 1px solid #c3c3c3;
    padding: 0px 0px;
    z-index: 100;
    background-color: white;
    width: 180px;
    height: auto;
    border-radius: 5px;
    box-shadow: 1px 2px 1px #f1f1f1;
    text-align: left;
}
ul{
    list-style-type: none;
    margin: 0px;
    padding: 0px 0px;
}
li{
    padding: 10px 15px;
    border-bottom: 1px solid #c3c3c3;
    font-size: 15px;
}

</style>


<script>
import moment from 'moment';
import UpdateMeetingStatus from '@/components/calendar/UpdateStatus.vue';
import DeleteMeeting from '@/components/calendar/del.vue';
import Reschedule from '@/components/calendar/Reschedule';
import EditMeeting from '@/components/calendar/Edit.vue';

export default {
    name: 'ShowMeeting',
    components:{
        'update-meeting-status': UpdateMeetingStatus,
        'del-meeting': DeleteMeeting,
        're-schedule': Reschedule,
        'edit-meeting': EditMeeting
    },
    data(){
        return {
            data: null,
            status: null,
            id: null,
            err: null,
            showStatus: false,
            showDel: false,
            showReschedule: false,
            showEdit: false
        }
    },
    mounted(){
        this.id = this.$route.params.id;
        this.showMeeting();
        this.showStatusInfo();
    },
    methods:{
        showMeeting(){
            try{
                this.axios.get('http://localhost:3000/mr/calander/'+this.id, {
                    headers:{ token: localStorage.token},
                    
                }).then(res=>{
                    this.data = res.data[0];
                }).catch(e=>{
                    this.err= e;
                })
            }
            catch(e){
                this.err = e;

            }
        },
        showStatusInfo(){
            try{
                this.axios.get('http://localhost:3000/mr/calander/status/'+this.id, {
                    headers: {token: localStorage.getItem('token')}
                }).then(res=>{
                    if(res.data.length>0){
                        this.status = res.data;
                    }
                }).catch(e=>{
                    this.err = e;
                })
            }
            catch(e){
                this.err = e;
            }
        },
        openStatus(){
            this.showStatus = true;
        },
        closeStatus(x) {
            this.showStatus = x;
        },
        updateStatus(){
            this.showStatusInfo();
            this.showStatus = false;
        },
        ISOToDate(date){
            return moment(date).format("YYYY-MM-DD");
        },
        edit(){
            this.showEdit = !this.showEdit;
        },
        submitEdit(val){
            try{
                this.axios.put('http://localhost:3000/mr/calander/'+this.id,{
                    val
                },{
                    headers:{token: localStorage.getItem('token')}
                }).then(res=>{
                    if(res.data.flag==true){
                        this.showMeeting();
                        this.showEdit = false;
                    }
                    
                }).catch(e=>{
                    this.err= e;
                })
            }
            catch(e){
                this.err =e;
            }
        },
        reschedule(){
            this.showReschedule = !this.showReschedule;
        },
        submitReschedule(val){
            try{
                this.axios.put('http://localhost:3000/mr/calander/'+this.id, {
                    val
                },{
                    headers:{token: localStorage.getItem('token')}
                }).then(res=>{
                    if(res.data.flag==true){
                        this.$router.back();
                    }
                }).catch(e=>{
                    this.err =e;
                })
            }catch(e){
                this.err = e;
            }
        },
        del(){
            console.log('hey'); 
            this.showDel = !this.showDel;
        },
        confirmDel(){
            try{
                this.axios.delete('http://localhost:3000/mr/calander/'+this.id, {
                    headers:{token: localStorage.token}
                }).then(res=>{
                    if(res.data.flag==true){
                        this.$router.back();
                    }
                })
            }
            catch(e){
                this.err= e;
            }
        }
    },

    computed: {
        meetingDate:function(){
            return moment(this.data.meeting_date).format("YYYY-MM-DD");
        },
        creationDate: function(){
            return moment(this.data.date).format("YYYY-MM-DD");
        }
    }
}
</script>