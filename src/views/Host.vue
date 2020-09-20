<template>
  <div class="fill-height">
    <v-container
    class="py-0"
      fluid
      fill-height
      align="center"
      justify="center"
      :style="background"
      style="background-position: center;"
    >
      <v-row justify="center" align="center" fill-height>
        <v-card @keyup.enter="save" min-width="300" max-width="400">
          <v-card-title class="d-block">
            <span>{{ boss.name }}</span>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="float-right" icon @click="toggleSave" v-bind="attrs" v-on="on">
                  <v-icon v-if="!saved" color="grey">bookmark_border</v-icon>
                  <v-icon v-else color="red darken-2">bookmark</v-icon>
                </v-btn>
              </template>
              <span class="rs-text">Save this as default</span>
            </v-tooltip>
          </v-card-title>

          <v-form class="col" @submit.prevent="hostTeam">
            <v-select label="Team size" :items="boss.team_sizes" v-model="team.size" />
            <v-select label="People left" :items="teamLeftItems" v-model="team.members_left" />
            <v-select
              v-if="boss.roles.length"
              label="Required roles"
              :items="boss.roles"
              v-model="team.required_roles"
              chips
              multiple
            />
            <v-select
              label="Experience"
              :items="experienceLevels"
              v-model="team.required_experience"
            />
            <v-select label="Lootshare type" :items="lootshareTypes" v-model="team.lootshare_type" />
            <v-combobox
              small-chips
              multiple
              label="Current team"
              hint="Enter to add name"
              v-model="team.members"
              @input.prevent
            />
            <v-btn text @click="hostTeam">Host</v-btn>
          </v-form>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Team, { ExperienceType, LootshareType } from '@/classes/Team';
import Boss from '@/classes/Boss';
import { PropType } from 'vue/types/umd';

export default Vue.extend({
  props: {
    boss: {
      type: Object as PropType<Boss>,
      required: true
    },
  },
  data() {
    return {
      saved: this.$store.state.hostPresets.hasOwnProperty(this.boss.id),
      experienceLevels: [
        ExperienceType.BeginnerFriendly,
        ExperienceType.Experienced,
        ExperienceType.Pro,
        ExperienceType.Elitist,
      ],
      lootshareTypes: [
        LootshareType.FreeForAll,
        LootshareType.LootShare,
        LootshareType.CoinShare,
      ],
      team: new Team(this.boss, this.$store.getters.currentAccount),
    };
  },
  computed: {
    background(): string {
      return this.boss
        ? `background-image: url("${require(`@/assets/bosses/${this.boss.image}`)}")`
        : '';
    },
    teamLeftItems(): number[] {
      const array = [...Array(this.team.size).keys()];
      array.shift();
      return array;
    },
  },
  created() {
    const preset = this.$store.state.hostPresets[this.boss.id]
    if (preset) {
      this.team = preset
    }
   },
  methods: {
    hostTeam(): void {
      this.$store.commit('createTeam', this.team);
      this.$router.push({
        name: 'find.boss',
        params: { bossname: this.boss.name },
      });
    },
    toggleSave() {
      this.$store.commit('toggleHostPreset', {
        boss: this.boss.id,
        team: this.team
      })

      this.saved = this.$store.state.hostPresets.hasOwnProperty(this.boss.id)
    }
  },
});
</script>