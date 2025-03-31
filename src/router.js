import { createRouter , createWebHistory} from 'vue-router';
import HomeWeb from './components/HomeWeb.vue'
import pingPong from './components/pingpong/PingPong.vue'
import clubSports from './components/clubsports/clubSports.vue'


class routeObj{
    
    constructor(myPath , myComponent){
        
        this.path=myPath
        this.component=myComponent
        this.children
    }
    
}


const routes=[];
routes.push(new routeObj('/' , HomeWeb ));
routes.push(new routeObj('/pingpong' , pingPong ));
routes.push(new routeObj('/clubsports' , clubSports));

const router=createRouter({
    routes,
    history:createWebHistory()
})

export default router;