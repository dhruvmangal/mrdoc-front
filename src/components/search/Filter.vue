<template>
    <div class="container-fluid filter-search">
        <div class="row">
            <div class="col-md-12">
                <div class="blank"></div>
                <div class="fill">
                    <div class="header">
                        
                        <div class="close" @click="()=>{return this.$emit('toggleFilter')}"> &times;</div>    
                        <center><p>Filters</p></center>
                    </div>
                    <div class="body">
                        <div class="item">
                            <label>Category</label>    
                            
                        </div>
                        <div class="item-form">
                            <form>
                                <div class="form-item" v-for="cat in category" :key="cat.id">
                                    <label><i class="fa fa-list gray"></i> {{cat.category}}</label>
                                    <input type="checkbox" class="category-radio"/>    
                                </div>
                                
                            </form>
                        </div>
                        <div class="item">
                            <label>City</label>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.gray{
    color: gray;
}
.filter-search{
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100%;
    background-color: rgba(35,35,35,0.5);
    z-index: 100;
    margin:0px;
    padding: 0px;
}
.blank{
    width: 100%;
    height: 40vh;
}
.fill{
    width: 100%;
    height: 60vh;
    background-color: white;
    margin: 0px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    overflow-y: scroll;
}
.header{
    padding: 10px;
    color: black;
    font-size: 18px;
}
.body{
    color: black;
    padding: 10px;
}
.item{
    margin-top: 20px;
}
.item label{
    font-size: 18px;
}
.item-form{
    border-bottom: 1px solid #f1f1f1;
}
.item-form label{
    float: left;
}
.form-item {
    width: 100%;
    height: 40px;
    font-size: 15px;
    padding: 5px;
    
}
.category-radio{
    float: right;
}
</style>

<script>
export default {
    name: 'FilterSearch',
    data(){
        return {
            category: null
        }
    },
    mounted(){
        this.getCategory()
    },
    methods:{
        getCategory(){
            try{
                this.axios.get('http://localhost:3000/mr/category', {
                    headers:{token: localStorage.getItem('token')}
                }).then((res)=>{
                    console.log(res.data);
                    this.category = res.data;
                    localStorage.setItem('category', res.data);
                    this.category.map((cat)=>{
                        cat.selected= null
                    })
                }).catch(e=>{
                    this.err = e;
                })
            }catch(e){
                this.err =e;
            }
        }
    }
}
</script>