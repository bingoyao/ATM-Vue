/**
 * 配置应用的页面路由信息
 * ！：使用异步加载来缩小单个文件的体积
 */
import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      name: 'unavailable',
      path: '/',
      component: () => import('@/views/operator/UnavailablePanel')
    }, {
      name: 'idle',
      path: '/idle',
      component: () => import('@/views/IdlePanel')
    }, {
      name: 'auth',
      path: '/auth',
      component: () => import('@/views/customer/AuthPanel')      
    }, {
      name: 'configure',
      path: '/configure',
      component: () => import('@/views/operator/ConfigurePanel')
    }, {
      name: 'transaction',
      path: '/transaction',
      component: () => import('@/views/customer/TransactionPanel'),
      children: [
        {
          path: '',
          redirect: 'select'
        }, {
          name: 'transaction-select',
          path: 'select',
          component: () => import('@/views/customer/transaction/SelectPanel')
        }, {
          name: 'withdrawal',
          path: 'withdrawal',
          component: () => import('@/views/customer/transaction/Withdrawal')
        }, {
          name: 'deposit',
          path: 'deposit',
          component: () => import('@/views/customer/transaction/Deposit')
        }, {
          name: 'transfer',
          path: 'transfer',
          component: () => import('@/views/customer/transaction/Transfer')
        }, {
          name: 'loan',
          path: 'loan',
          component: () => import('@/views/customer/transaction/Loan')
        }, {
          name: 'payback',
          path: 'payback',
          component: () => import('@/views/customer/transaction/Payback')
        }, {
          name: 'inquiry',
          path: 'inquiry',
          component: () => import('@/views/customer/transaction/Inquiry')
        }, {
          name: 'change-pin',
          path: 'pin',
          component: () => import('@/views/customer/transaction/ChangePin')
        }
      ]
    }
  ]
})