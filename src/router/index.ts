import Vue from 'vue';
import VueRouter, { RouteConfig, Route } from 'vue-router';
import store from '@/store/index';
import RunescapeAccount from '@/classes/RunescapeAccount';

Vue.use(VueRouter);

function hasAccount(to: any, from: any, next: any) {
  if (!store.state.user.accounts.length) {
    return next({ name: 'start' });
  } else {
    return next();
  }
}

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'start',
    beforeEnter: (to, from, next) => {
      if (store.state.user.accounts.length > 0) {
        return next({ name: 'find.boss.selection' });
      } else {
        return next();
      }
    },
    props: (route) => ({
      step: Number(route.query.s) || 1
    }),
    component: () => import(/* webpackChunkName: "start" */ '../views/Start.vue')
  },
  {
    path: '/messages',
    name: 'messages',
    component: () =>
      import(
        /* webpackChunkName: "messages" */ '../components/MessageCard.vue'
      )
  },
  {
    path: '/profile',
    name: 'profile',
    component: () =>
      import(
        /* webpackChunkName: "profile" */ '../views/Profile.vue'
      ),
    children: [
      {
        path: 'accounts',
        name: 'profile.accounts',
        component: () =>
          import(
            /* webpackChunkName: "profile.accounts" */ '../views/profile/Accounts.vue'
          ),
      },
      {
        path: 'messages',
        name: 'profile.messages',
        component: () =>
          import(
            /* webpackChunkName: "profile.messages" */ '../views/profile/Messages.vue'
          ),
      },
      {
        path: 'settings',
        name: 'profile.settings',
        component: () =>
          import(
            /* webpackChunkName: "profile.settings" */ '../views/profile/Settings.vue'
          ),
      },
      {
        path: 'achievements',
        name: 'profile.achievements',
        component: () =>
          import(
            /* webpackChunkName: "profile.achievements" */ '../views/profile/Achievements.vue'
          ),
      },
    ]
  },
  {
    path: '/u/:username',
    name: 'public.profile',
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "public.profile" */ '../views/PublicProfile.vue'
      ),
  },
  {
    path: '/stats',
    name: 'stats',
    component: () =>
      import(
        /* webpackChunkName: "stats" */ '../components/StatsList.vue'
      ),
  },
  {
    path: '/host',
    name: 'host.boss.selection',
    beforeEnter: hasAccount,
    props: {
      default: (route: Route) => ({
        preference: 'host',
        search: route.query.search || ''
      })
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: "boss.selection" */ '../views/BossSelection.vue'
        ),
      'app-bar-content': () =>
        import(
          /* webpackChunkName: "searchbar" */ '../components/SearchBar.vue'
        )
    }
  },
  {
    path: '/find',
    name: 'find.boss.selection',
    beforeEnter: hasAccount,
    props: {
      default: (route: Route) => ({
        preference: 'find',
        search: route.query.search || ''
      })
    },
    components: {
      default: () =>
        import(
          /* webpackChunkName: "boss.selection" */ '../views/BossSelection.vue'
        ),
      'app-bar-content': () =>
        import(
          /* webpackChunkName: "searchbar" */ '../components/SearchBar.vue'
        )
    }
  },
  {
    path: '/host/:bossName',
    name: 'host.boss',
    beforeEnter: hasAccount,
    props: {
      default: (route: Route) => ({
        boss: store.state.bosses.find((b) => b.name === route.params.bossName)
      })
    },
    components: {
      default: () =>
        import(/* webpackChunkName: "host.boss" */ '../views/Host.vue')
    }
  },
  {
    path: '/find/:bossName',
    name: 'find.boss',
    beforeEnter: hasAccount,
    props: {
      default: (route: Route) => ({
        boss: store.state.bosses.find((b) => b.name === route.params.bossName)
      })
    },
    components: {
      default: () =>
        import(/* webpackChunkName: "find.boss" */ '../views/Find.vue')
    },
    children: [
      {
        path: ':id',
        name: 'team.details',
        component: () =>
          import(
            /* webpackChunkName: "team.details" */ '../components/TeamCard.vue'
          ),
        props: (route: Route) => ({
          team: store.state.teams.find((t) => t.id === route.params.id)
        })
      }
    ]
  },
  {
    path: '/profile',
    name: 'edit.user.profile',
    beforeEnter: hasAccount,
    components: {
      default: () =>
        import(/* webpackChunkName: "user.profile" */ '../views/Profile.vue')
    }
  },
  {
    path: '/profile/:id',
    name: 'view.user.profile',
    beforeEnter: hasAccount,
    components: {
      default: () =>
        import(/* webpackChunkName: "user.profile" */ '../views/Profile.vue')
    },
    props: {
      default: (route: Route) => ({
        account: store.state.user.accounts.find(
          (a: RunescapeAccount) => a.id === route.params.id
        )
      })
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
