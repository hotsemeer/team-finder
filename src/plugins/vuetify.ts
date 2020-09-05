import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import Discord from '@/assets/icons/discord.vue';
import Reddit from '@/assets/icons/reddit.vue';
import HardcoreIronMan from '@/assets/icons/hardcore_ironman.vue';
import IronMan from '@/assets/icons/ironman.vue';
import Runescape from '@/assets/icons/runescape.vue';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    values: {
      discord: {
        component: Discord,
      },
      reddit: {
        component: Reddit,
      },
      hardcore_ironman: {
        component: HardcoreIronMan,
      },
      ironman: {
        component: IronMan,
      },
      runescape: {
        component: Runescape,
      },
    },
  },
});
