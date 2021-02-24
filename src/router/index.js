import {
    createRouter,
    createWebHistory
} from 'vue-router'

const Home = () =>
    import ( /* webpackChunkName: "group-foo" */ '../components/home.vue')
const About = () =>
    import ( /* webpackChunkName: "group-foo" */ '../components/about.vue')
const HomeNews = () =>
    import ( /* webpackChunkName: "group-foo" */ '../components/homeNews.vue')
const User = () =>
    import ( /* webpackChunkName: "group-foo" */ '../components/user.vue')
const HomeMessages = () =>
    import ( /* webpackChunkName: "group-foo" */ '../components/homeMessages.vue')
const Profile = () =>
    import ( /* webpackChunkName: "group-foo" */ '../components/profile.vue')

const routes = [{
        path: '',
        redirect: 'Home'
    },
    {
        path: '/About',
        name: 'About',
        component: About,
        meta: {
            title: '关于'
        }
    },
    {
        path: '/Home',
        component: Home,
        children: [{
                path: '',
                component: HomeNews
            }, {
                path: 'news',
                component: HomeNews
            },
            {
                path: 'messages',
                component: HomeMessages
            },

        ],
        meta: {
            title: '首页'
        }
    },
    {
        // 动态绑定userId
        path: '/User/:userId',
        component: User,
        meta: {
            title: '用户'
        }

    },
    {
        path: '/Profile',
        component: Profile,
        meta: {
            title: 'profile'
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
    next()
    document.title = to.matched[0].meta.title
})


export default router