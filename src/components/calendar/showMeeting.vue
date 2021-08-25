<template>
    <div class="container-fluid meeting">
        <div class="row">
            <div class="col-md-12">
                <div class="title">
                    {{data.title}}    
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
                    {{data.meeting_status}}
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
            <update-meeting-status :meeting_status="data.meeting_status" @closeStatus="closeStatus($event)"></update-meeting-status>
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
span{
    font-size: 15px;
    color: black;
    font-weight: bold;
}
</style>


<script>
import moment from 'moment';
import UpdateMeetingStatus from '@/components/calendar/UpdateStatus.vue';
export default {
    name: 'ShowMeeting',
    components:{
        'update-meeting-status': UpdateMeetingStatus
    },
    data(){
        return {
            data: null,
            id: null,
            err: null,
            showStatus: false
        }
    },
    mounted(){
        this.id = this.$route.params.id;
        this.showMeeting();
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
        openStatus(){
            this.showStatus = true;
        },
        closeStatus(x) {
            this.showStatus = x;
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