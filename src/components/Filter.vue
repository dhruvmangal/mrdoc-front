<template>
    <div class="filter-panel">
        <div class="filter">
            <div class="filter-head">
                <div class="close" @click="closeFilter()">&times;</div>    
                <div class="text">Filter</div>
            </div>                  
        </div>
    </div>
    
</template>

<style scoped>
    .filter-panel{
        position: fixed;
        top:0%;
        left:0px;
        width:100%;
        height: 100%;
        background-color: rgba(35,35,35,0.5);
        z-index:4;
        
    }
    .filter{
        
        width: 100%;
        height:60%;
        position: relative;
        top:40%;        
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-top: 1px solid gray;
        background-color: white;
    }
    .filter-head{
        width:100%;
        height: 50px;
        padding: 10px;
    }
    .close{
        float: right;
        font-size:25px;
        
    }
    .text{
        text-align: center;
        font-size: 20px;       
    }
    .active{
        display: block;

    }
</style>

<script>
export default {
    name: 'Filter',
    props:{
        filter: Boolean
    },
    methods:{
        closeFilter(){
            return this.$emit('closeFilter', false);
        }
    }
}
</script>