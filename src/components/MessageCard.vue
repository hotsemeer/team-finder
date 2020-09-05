<template>
  <v-card v-if="!selectedUserMessage" :height="height" :width="width" @click.native.stop>
    <v-toolbar flat>
      <v-btn icon @click="$emit('input', false)">
        <v-icon>close</v-icon>
      </v-btn>
      <v-spacer />
      <v-icon class="mr-2">message</v-icon>
      <v-toolbar-title>messages</v-toolbar-title>
    </v-toolbar>

    <v-sheet v-if="!userMessages || !userMessages.length" class="list-header">
      <empty-messages style="width: 75%; height: 75%;" class="mx-10" />
    </v-sheet>

    <v-list v-else class="list-header">
      <v-list-item
        v-for="(userMessage, index) in userMessages"
        :key="index"
        @click="viewMessages(userMessage)"
      >
        <v-list-item-icon>
          <v-icon>{{ userMessage.user.type.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content class="mr-4">
          <v-list-item-title>{{ userMessage.user.username}}</v-list-item-title>
          <v-list-item-subtitle
            v-if="userMessage.messages.length"
          >{{ userMessage.messages[0].message}}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <span
            v-if="userMessage.messages.length"
          >{{ userMessage.messages[0].sent_at | date('HH:MM') }}</span>
          <v-avatar
            v-if="userMessage.unread"
            class="ml-3 white--text"
            color="primary"
            size="20"
          >{{ userMessage.unread }}</v-avatar>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>

  <v-card v-else :height="height" :width="width" @click.native.stop>
    <v-toolbar flat>
      <v-btn icon @click="back">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-spacer />
      <v-icon class="mr-2">{{ selectedUserMessage.user.type.icon }}</v-icon>
      <v-toolbar-title>{{ selectedUserMessage.user.username }}</v-toolbar-title>
    </v-toolbar>

    <v-list class="px-2 list-header-footer" ref="list">
      <v-list-item
        v-for="(message, index) in selectedUserMessage.messages"
        :key="index"
        class="grey lighten-2 rounded-xl mt-1"
      >
        <v-list-item-title
          class="py-2"
          style="text-overflow: clip; white-space: normal;"
        >{{ message.message }}</v-list-item-title>
        <v-divider vertical class="mr-2 my-2" />
        <div>
          <v-list-item-subtitle class="d-flex flex-row-reverse">
            <div>{{ message.sent_at | date('HH:MM')}}</div>
          </v-list-item-subtitle>
        </div>
      </v-list-item>
    </v-list>

    <v-footer>
      <v-text-field
        ref="input"
        class="pl-5"
        placeholder="Send a message"
        autofocus
        autocomplete="false"
        v-model="message"
        @keyup.enter="sendMessage"
      />
      <v-btn fab small class="ma-3" @click="sendMessage">
        <v-icon>send</v-icon>
      </v-btn>
    </v-footer>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Message from '@/classes/Message';
import RunescapeAccount from '@/classes/RunescapeAccount';
import UserMessage from '@/classes/UserMessage';
import EmptyMessages from '@/assets/undraw_mobile_messages.vue';

export default Vue.extend({
  components: {
    EmptyMessages,
  },
  props: {
    value: Boolean,
  },
  data() {
    return {
      selectedUserMessage: null,
      message: '',
      userMessage: new UserMessage(new RunescapeAccount('tepel lepel')),
    };
  },
  created() {
    this.$store.commit('addUserMessage', this.userMessage);
  },
  computed: {
    height(): string {
      return this.$vuetify.breakpoint.mobile ? '100%' : '360px';
    },
    width(): string {
      return this.$vuetify.breakpoint.mobile ? '100%' : '320px';
    },
    userMessages(): UserMessage[] {
      return this.$store.state.user.userMessages;
    },
  },
  methods: {
    removeUserMessage(index: number) {
      this.$store.commit('deleteUserMessage', index);
      this.selectedUserMessage = null;
    },
    viewMessages(userMessage: any) {
      this.selectedUserMessage = userMessage;
      const list: HTMLElement = this.$refs.list as HTMLElement;
      if (list) {
        list.scrollTop = list.scrollHeight - list.clientHeight;
      }
      const input: HTMLElement = this.$refs.input as HTMLElement;
      if (input) {
        input.focus();
      }
    },
    back() {
      this.message = '';
      this.selectedUserMessage = null;
    },
    sendMessage() {
      if (this.message.trim().length > 0) {
        this.userMessage.messages.push(new Message(this.message, '1'));
        this.message = '';
      }
    },
  },
});
</script>

<style scoped>
.list-header-footer {
  height: -moz-calc(100% - 64px - 82px); /* Firefox */
  height: -webkit-calc(100% - 64px - 82px); /* Chrome, Safari */
  height: calc(100% - 64px - 82px); /* IE9+ and future browsers */
  overflow-y: auto;
}
.list-header {
  height: -moz-calc(100% - 64px); /* Firefox */
  height: -webkit-calc(100% - 64px); /* Chrome, Safari */
  height: calc(100% - 64px); /* IE9+ and future browsers */
  overflow-y: auto;
}
</style>