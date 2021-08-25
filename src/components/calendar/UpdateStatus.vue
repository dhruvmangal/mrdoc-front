<template>
    <div class="container-fluid status">
        <div class="row">
            <div class="col-md-12">
                <div class="blank">

                </div>
                <div class="fill">
                    <div class="header">
                        <div class="close" @click="closeStatus()">&times;</div>
                        <center><span>Update Status</span></center>
                    </div>
                    <div class="body">
                        <select class="form-control" v-model="status">
                            <option value="scheduled">Scheduled</option>
                            <option value="started">Started</option>
                            <option value="finished">finished</option>
                            <option value="canceled">Canceled</option>
                            <option value="rescheduled">Rescheduled</option>
                            <option :value="other">Other</option>
                        </select>
                        <div class="other" v-if="status==null">
                            <br/>
                            <label>Enter Status</label>
                            <input type="text" class="form-control"/>
                        </div>
                        <div class="form-item">
                            <br/>
                            <label>Enter Message</label>
                            <textarea class="form-control"></textarea>
                        </div>
                        <div class="form-item">
                            <br/>
                            <input type="submit" class="btn btn-primary form-control" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .status{
        z-index: 10000;
        position: fixed;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
        background-color: rgba(35,35,35,0.5);
        margin:0px;
        padding:0px;
    }
    .blank{
        
        height:40vh;
        width:100%;
    }.fill{
        width: 100%;
        height: 60vh;
        background-color: white;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        padding: 10px;
    }
    .close{
        
        color: black;
    }
    .header{
        padding: 10px;
        font-size:18px;
    }
</style>

<script>
export default {
    name: 'UpdateMeetingStatus',
    props:{
        meeting_status: String
    },
    data(){
        return {
            other: null,
            status: this.meeting_status
        }
    },
    methods:{
        closeStatus(){
            return this.$emit('closeStatus', false);
        }
    }
}
</script>