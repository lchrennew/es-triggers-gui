import Home from "../pages/Home.vue";
import Listeners from '../pages/Listeners.vue'
import TargetSystems from '../pages/TargetSystems.vue'
import Triggers from '../pages/Triggers.vue'
import SourceInterceptor from '../pages/SourceInterceptors.vue'
import TargetInterceptor from '../pages/TargetInterceptors.vue'
import Bindings from '../pages/Bindings.vue'
import Templates from '../pages/Templates.vue'

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
        path: '/source-interceptors/',
        component: SourceInterceptor,
    },
    {
        name: '输出拦截',
        path: '/target-interceptors/',
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
