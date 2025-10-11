import { createRouter , createWebHistory} from 'vue-router';
import HomeWeb from './components/HomeWeb.vue'
import pingpong from './components/pingpong/PingPong.vue'
import clubsports from './components/clubsports/clubSports.vue'
import billiards from './components/biliards/billiardsSnooker.vue'


class routeObj{
    
    constructor(myPath , myComponent){
        
        this.path=myPath
        this.component=myComponent
        this.children
    }
    
}


const routes=[];
routes.push(new routeObj('/' , HomeWeb ));
routes.push(new routeObj('/pingpong' , pingpong ));
routes.push(new routeObj('/clubsports' , clubsports));
routes.push(new routeObj('/billiards' , billiards));

const router=createRouter({
    routes,
    history:createWebHistory()
})

export default router;