// 페이지를 구성해주는 구성파일

import { createRouter, createWebHashHistory} from 'vue-router'
import Home from './Home'
import About from './About'

export default createRouter({
    // 함수안에 객체 데이터를 넣기

    // Hash , HISTORY
    history: createWebHashHistory(),
    // 페이지 구분, page
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        }
    ]

})