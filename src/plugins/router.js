/**
 * 配置应用的页面路由信息
 */
import Vue from 'vue'

import VueRouter from 'vue-router'

import IdlePanel from '@/views/IdlePanel'

import UnavailablePanel from '@/views/operator/UnavailablePanel'

import TransactionPanel from '@/views/customer/TransactionPanel'
import AuthPanel from '@/views/customer/AuthPanel'
import SelectPanel from '@/views/customer/transaction/SelectPanel'
import Withdrawal from '@/views/customer/transaction/Withdrawal'
import Deposit from '@/views/customer/transaction/Deposit'
import Inquiry from '@/views/customer/transaction/Inquiry'
import ChangePin from '@/views/customer/transaction/ChangePin'
import Loan from '@/views/customer/transaction/Loan'
import Payback from '@/views/customer/transaction/Payback'
import Transfer from '@/views/customer/transaction/Transfer'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'unavailable',
      path: '/',
      component: UnavailablePanel
    }, {
      name: 'idle',
      path: '/idle',
      component: IdlePanel
    }, {
      name: 'auth',
      path: '/auth',
      component: AuthPanel      
    }, {
      name: 'transaction',
      path: '/transaction',
      component: TransactionPanel,
      children: [
        {
          path: '',
          redirect: 'select'
        }, {
          name: 'transaction-select',
          path: 'select',
          component: SelectPanel
        }, {
          name: 'withdrawal',
          path: 'withdrawal',
          component: Withdrawal
        }, {
          name: 'deposit',
          path: 'deposit',
          component: Deposit
        }, {
          name: 'transfer',
          path: 'transfer',
          component: Transfer
        }, {
          name: 'loan',
          path: 'loan',
          component: Loan
        }, {
          name: 'payback',
          path: 'payback',
          component: Payback
        }, {
          name: 'inquiry',
          path: 'inquiry',
          component: Inquiry
        }, {
          name: 'change-pin',
          path: 'pin',
          component: ChangePin
        }
      ]
    }
  ]
})