<template>
    <div class="container-fluid dashboard">
        <div class="row">
            <div class="col-md-12">
                <div class="dashboard-panel">
                    <div class="header">
                        Today's Meetings
                    </div>
                    <div class="body">
                        <div class="meeting-box">
                            <div class="meeting-head">
                                <span> <i class="fa fa-calendar"></i></span>
                                Title
                            </div>
                            <div class="meeting-body">
                                blah ba;h b;ah
                                <br/>

                                <div class="status">
                                    <i class="fa fa-circle scheduled"></i>
                                    Scheduled
                                </div>

                                <div class="status">
                                    <i class="fa fa-circle started"></i>
                                    Started
                                </div>
                                <div class="status">
                                    <i class="fa fa-circle finished"></i>
                                    Finished
                                </div>
                                <div class="status">
                                    <i class="fa fa-circle canceled"></i>
                                    Canceled
                                </div>
                                <button class="btn btn-success form-control">Update Status</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.dashboard{
    padding-top: 80px;
    width: 100%;

}
.meeting-box{
    margin: 10px;
    border:1px solid #f1f1f1;
    border-radius: 5px;
}
.meeting-head{
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid #f1f1f1;
}
.meeting-head span{
    float: left;
    
}
.meeting-body{
    padding: 10px;
}
.meeting-body button{
    margin-top: 20px;
}
.scheduled{
    color: gray;
}
.started{
    color: green;
}
.finished{
    color: blue;
}
.canceled{
    color: red;   
}
</style>

<script>
export default {
    name: "Dashboard",
}
</script>