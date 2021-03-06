import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        dayValue: '0',
        lastWeekValues: [],
        days: []
    },
    mutations: {
        newDayValue(state, value) {
            state.dayValue = value
        },
        newHistoricalValues(state, values) {
            state.lastWeekValues = values
        },
        daysChange(state, keys) {
            state.days = keys
        }
    }
})

export default store