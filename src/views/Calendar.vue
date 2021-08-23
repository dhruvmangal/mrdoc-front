<template>
    <div class="container-fluid calendar">
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
                <div class="show-dates">
                    <div class="header">
                        This Months Schedule
                    </div>
                    <div class="body">

                    </div>
                </div>
            </div>
        </div>
        <add-date @closeAdd="closeAdd($event)" @submitAdd="addDate($event)" v-if="addState==true" :selectedDate= "selectedDate"></add-date>
    </div>
</template>

<style scoped>
.calendar{
    padding-top: 80px;
}
</style>

<script>
import AddDate from '@/components/calendar/AddDate'
export default {
    name: 'Calendar',
    components:{
        'add-date': AddDate
    },
    data(){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = yyyy + '/' + mm + '/' + dd;
        return{
            addState: false,
            selectedDate: null,
            attributes: [
                {
                    key: 'today',        
                    highlight: true,
                    dates: today,
                },
                {
                    key: 'tomorrow',        
                    highlight: true,
                    bar: true,
                    dates: '2021/07/21',
                }
            ]
        }
    },

    methods:{
        dayClicked(day){
            this.selectedDate = day.id;
            
            this.addState = true;
        },
        closeAdd(){
            this.addState = false;
        },
        addDate(val){
            val.highlight = true,
            this.attributes.push(val);
            console.log(this.attributes);
            this.addState = false;
        }

    }
}
</script>