<template>
    <div class="search">
        <div class="search-tool">
            <button class="btn sort"><i class="fa fa-sort"></i></button>
            <form>
                
                <input type="text" name="search" class="form-control search-input" placeholder="Search Doctors">
                <span class="btn search-icon"><i class="fa fa-search"></i></span>
            </form>
            <button class="btn filter"><i class="fa fa-filter"></i></button>
        </div>
        <div class="search-result">
            <div class="result"></div>
            <div class="search-result-card" v-for="item in doctors" :key="item.id">
                <div class="profile-pic-panel">
                    <div class="profile-pic"></div>
                    <div class="name">{{item.name}}</div>
                    
                </div>
                <div class="profile-body">
                    <div class="beacon"> <i class="fa fa-first-aid"></i> {{item.disease}}</div>
                    <div class="beacon"> <i class="fa fa-briefcase"></i> {{item.work}}</div>
                    <div class="beacon"> <i class="fa fa-map-marker"></i> {{item.location}}</div>
                </div>
                <button class="btn btn-primary btn-more"> <i class="fa fa-info-circle"></i> More</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.search{
    padding: 60px 20px;
}
.search-tool{
    width:100%;
    height: 70px;
}
.sort, .filter{
    border:1px solid  #f1f1f1;
    width:14%;
    float: left;
    margin:0px 1%;
    color: gray;
}

.search-input{
    float: left;
    width:55%;
    margin:0px 1%;
    margin-right:0px;
    outline: none;
    border-color: #f1f1f1;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-right: 0px;
}
.search-input:focus, .search-icon{
    outline: none;
    box-shadow: none;
    
}
.search-input::placeholder{
    color: #c1c1c1;
}
.search-icon{
    float: left;
    border-color: #f1f1f1;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-left: 0px;
    width:10%;
    color: gray;
    padding-left: 5px;
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
.profile-body{
    padding: 10px;
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
    margin: 20px 0px;
    margin-left: 80px;
}
.btn-more{
    width: 100%;
}
</style>

<script>
export default {
    name: 'Search',
    data(){
        return{
            doctors:[{
                'id': '1',
                'name': 'Dr Ravindra Gupta',
                'work': 'SDH Healthcare',
                'location': 'Mansarovar, Jaipur',
                'disease': 'General Disease'
            },
            {
                'id': '2',
                'name': 'Dr Ajay Sharma',
                'work': 'SDH Healthcare',
                'location': 'Mansarovar, Jaipur',
                'disease': 'General Disease'
            },
            {
                'id': '3',
                'name': 'Dr Deepak singh',
                'work': 'SDH Healthcare',
                'location': 'Mansarovar, Jaipur',
                'disease': 'General Disease'
            }]
        }
    }
}
</script>