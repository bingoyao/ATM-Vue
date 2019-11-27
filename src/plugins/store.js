/**
 * 集中保存应用程序的数据
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    account: {
      pin: '',
      number: '',
      name: '',
      balances: 0,
      telephone: '',
      credits: 0
    },
    systemLog: [{
      time: '2019-11-27 11:11',
      accountNumber: '9090909090909090909',
      transactionType: 'SHORT TERM-12', 
      amount: '5000', 
      transTo: '8080808080808080808'
    }]

  },
  mutations: {
    pushPin(state, num) {
      if (state.account.pin.length < 6) {
        state.account.pin += num;
      }
    },
    popPin(state) {
      if (state.account.pin.length > 0) {
        let oldPin = new String(state.account.pin)
        state.account.pin = oldPin.substring(0, oldPin.length - 1);
      }
    },
    setPin(state, pin) {
      state.account.pin = pin;
    },
    clearPin(state) {
      state.account.pin = '';
    },
    setAccountNo(state, num) {
      state.account.number = num
    },
    clearAccountNo(state) {
      state.account.number = '';
    },
    setAccount(state, acnt) {
      state.account.balances = acnt.balances;
      state.account.name = acnt.name;
      state.account.telephone = acnt.telephone;
      state.account.number = acnt.number;
      state.account.credits = acnt.credits;
    },
    clearAccount(state) {
      state.account = {
        pin: '',
        number: '',
        name: '',
        balances: 0,
        telephone: '',
        credits: 0
      };
    },
    pushSystemLog(state, record) {
      state.systemLog.push(record);
    },
    reduceBalances(state,a){
      let amount = parseInt(a);
      let current = parseInt(state.account.balances);
      state.account.balances = current - amount;
    },
    increaseBalances(state,a){
      let amount = parseInt(a);
      let current = parseInt(state.account.balances);
      state.account.balances = current + amount;
    }
  },
  actions: {
    ejectCard({ commit }) {
      commit('clearAccount');
    }
  }
})