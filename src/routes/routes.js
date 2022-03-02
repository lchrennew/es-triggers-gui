import Home from "../pages/Home.vue";
import Listeners from '../pages/listeners/Index.vue'
import TargetSystems from '../pages/target-systems/Index.vue'
import Triggers from '../pages/triggers/Index.vue'
import SourceInterceptor from '../pages/source-interceptors/Index.vue'
import TargetInterceptor from '../pages/target-interceptors/Index.vue'
import Bindings from '../pages/bindings/Index.vue'
import Templates from '../pages/templates/Index.vue'

export default [
    {
        name: '首页',
        path: '/',
        component: Home,
    },
    {
        name: '网络监听',
        path: '/listeners/',
        component: Listeners,
    },
    {
        name: '输出目标',
        path: '/target-systems/',
        component: TargetSystems,
    },
    {
        name: '请求转化',
        path: '/triggers/',
        component: Triggers,
    },
    {
        name: '输入拦截',
        path: '/source-interceptor/',
        component: SourceInterceptor,
    },
    {
        name: '输出拦截',
        path: '/target-interceptor/',
        component: TargetInterceptor,
    },
    {
        name: '数据绑定',
        path: '/bindings/',
        component: Bindings,
    },
    {
        name: '输出模版',
        path: '/templates/',
        component: Templates,
    }
]
