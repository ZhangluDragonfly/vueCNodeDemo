import * as types from '../mutation-types'
import topicApi from '../../api/topics'

// initial state
const state = {
	all: []
}

// getters
const getters = {
	allTopics: state => state.all,
	topicLength: state => state.all.length
}

// actions
const actions = {
	getAllTopics ({commit, getters}, params) {
		if(getters.topicLength === 0) {
			topicApi.getTopics(topicData => {
				commit(types.RECEIVE_TOPICS, topicData)
			}, params)
		}	
	}
}

// mutations
const mutations = {
	[types.RECEIVE_TOPICS] (state, topics) {
		state.all = topics;
	}
}
export default {
  state,
  getters,
  actions,
  mutations
}