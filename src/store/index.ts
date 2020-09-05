import Vue from 'vue';
import Vuex, { Commit } from 'vuex';
import RunescapeAccount from '@/classes/RunescapeAccount';
import Team from '@/classes/Team';
import Boss from '@/classes/Boss';
import bosses from '@/assets/bosses';
import AccountType from '@/classes/AccountType';
import UserMessage from '@/classes/UserMessage';
import User from '@/classes/User';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bosses: Array<Boss>(...bosses),
    favouriteBosses: Array<string>(),
    user: localStorage.user
      ? (JSON.parse(localStorage.user) as User)
      : new User(),
    currentAccountIndex: localStorage.currentAccountIndex
      ? localStorage.currentAccountIndex
      : null,
    teams: Array<Team>(),
    accountTypes: Array<AccountType>(
      new AccountType('Main', '$vuetify.icons.runescape'),
      new AccountType('Ironman', '$vuetify.icons.ironman'),
      new AccountType('Hardcore Ironman', '$vuetify.icons.hardcore_ironman')
    ),
    userMessages: Array<UserMessage>()
  },
  getters: {
    accounts: (state: any) => {
      return state.user.accounts;
    },
    currentAccount: (state: any) => {
      return state.currentAccountIndex !== null
        ? state.user.accounts[state.currentAccountIndex]
        : null;
    },
    unreadMessages: (state: any) => {
      return (
        state.user.userMessages.reduce(
          (total: number, current: UserMessage) => (total += current.unread),
          0
        ) || 0
      );
    }
  },
  mutations: {
    addAccount(state, account: RunescapeAccount) {
      state.user.accounts.push(account);
      localStorage.user = JSON.stringify(state.user);
    },
    selectAccount(state, accountIndex: number) {
      state.currentAccountIndex = accountIndex;
      localStorage.currentAccountIndex = accountIndex;
    },
    selectNewestAccount(state) {
      state.currentAccountIndex = state.user.accounts.length - 1;
      localStorage.currentAccountIndex = state.user.accounts.length - 1;
    },
    createTeam(state, team: Team) {
      state.teams.push(team);
    },
    toggleFavouriteBoss(state, bossId: string) {
      if (state.favouriteBosses.includes(bossId)) {
        state.favouriteBosses = state.favouriteBosses.filter(
          (b) => b !== bossId
        );
      } else {
        state.favouriteBosses.push(bossId);
      }
    },
    addUserMessage(state, userMessage: UserMessage) {
      state.user.userMessages.push(userMessage);
    },
    deleteUserMessage(state, index: number) {
      state.user.userMessages.splice(index, 1);
    }
  },
  actions: {
    createConceptMessage(context, user) {
      if (!context.state.user.userMessages.some((um: UserMessage) => um.user === user)) {
        context.commit('addUserMessage', new UserMessage(user));
      }

    }
  },
  modules: {}
});
        // !state.user.userMessages.some((um: UserMessage) => um.user === user)
