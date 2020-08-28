<template>
  <v-card height="360px" width="320" min-height="360" max-height="360" @click.native.stop @keypress.enter="press">
    <v-card-title class="px-5 py-2">
      <transition name="scroll-x-transition">
        <span v-if="selectedUserMessage">
          <v-icon class="mr-2">{{ selectedUserMessage.user.type.icon}}</v-icon>
          {{ selectedUserMessage.user.username }}
        </span>
        <span v-else>
          <v-icon class="mr-2">message</v-icon>Messages
        </span>
      </transition>
      <v-spacer />
      <v-btn v-if="selectedUserMessage" icon @click="back">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-card-title>

    <v-divider />

    <div style="overflow-y: auto; height: 60%" ref="list">
      <v-list v-if="selectedUserMessage" class="px-2">
        <v-list-item
          v-for="(message, index) in selectedUserMessage.messages"
          :key="index"
          class="grey lighten-2 rounded-xl mt-1"
        >
          <v-list-item-title class="py-2"
            style="text-overflow: clip; white-space: normal;"
          >{{ message.message }}</v-list-item-title>
          <v-divider vertical class="mr-2 my-2"/>
          <div>
            <v-list-item-subtitle class="d-flex flex-row-reverse">
              <div>{{ message.sent_at | date('HH:MM')}}</div>
            </v-list-item-subtitle>
          </div>
        </v-list-item>
      </v-list>
      <v-list v-else-if="userMessages.length">
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
            <v-list-item-subtitle>{{ userMessage.messages[0].message}}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <span>{{ userMessage.messages[0].sent_at | date('HH:MM') }}</span>
            <v-avatar v-if="userMessage.unread" class="ml-3 white--text" color="primary" size="20">{{ userMessage.unread }}</v-avatar>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-sheet v-else height="100" class="d-flex align-center ml-3">
        <span>No messages</span>
      </v-sheet>
    </div>

    <v-sheet v-if="selectedUserMessage" class="d-flex align-end">
      <v-text-field ref="input" class="pl-5" placeholder="Send a message" autofocus autocomplete="false" @keyup.enter="press" />
      <v-btn fab small class="ma-3">
        <v-icon>send</v-icon>
      </v-btn>
    </v-sheet>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Message from "@/classes/Message";

export default Vue.extend({
  data() {
    return {
      userMessages: [
        {
          user: {
            id: '1',
            username: "tepel lepel",
            type: {
              name: "main",
              icon: "$vuetify.icons.runescape",
            },
          },
          unread: 1,
          messages: [
            new Message("Hey", '1'),
            new Message("I would like to join Nex: Angel of Death", '1'),
            new Message("Hey", '1'),
            new Message("Hey", '1'),
            new Message("Hey", '1'),
            new Message("Hey", '1'),
            new Message("Hey", '1'),
          ],
        },
        {
          user: {
            username: "tepel vork",
            type: {
              name: "main",
              icon: "$vuetify.icons.ironman",
            },
          },
          unread: 3,
          messages: [
            {
              sent_at: new Date(),
              message: "Hey",
              read: false,
            },
          ],
        },
        {
          user: {
            username: "tepel mes",
            type: {
              name: "main",
              icon: "$vuetify.icons.hardcore_ironman",
            },
          },
          unread: 0,
          messages: [
            {
              sent_at: new Date(),
              message: "Hey",
              read: false,
            },
          ],
        },
        {
          user: {
            username: "tepel lepel",
            type: {
              name: "main",
              icon: "$vuetify.icons.runescape",
            },
          },
          unread: 1,
          messages: [
            {
              sent_at: new Date(),
              message: "Hey",
              read: false,
            },
          ],
        },
        {
          user: {
            username: "tepel lepel",
            type: {
              name: "main",
              icon: "$vuetify.icons.runescape",
            },
          },
          unread: 1,
          messages: [
            {
              sent_at: new Date(),
              message: "Hey",
              read: false,
            },
          ],
        },
        {
          user: {
            username: "tepel lepel",
            type: {
              name: "main",
              icon: "$vuetify.icons.runescape",
            },
          },
          unread: 1,
          messages: [
            {
              sent_at: new Date(),
              message: "Hey",
              read: false,
            },
          ],
        },
        {
          user: {
            username: "tepel lepel",
            type: {
              name: "main",
              icon: "$vuetify.icons.runescape",
            },
          },
          unread: 1,
          messages: [
            {
              sent_at: new Date(),
              message: "Hey",
              read: false,
            },
          ],
        },
        {
          user: {
            username: "tepel lepel",
            type: {
              name: "main",
              icon: "$vuetify.icons.runescape",
            },
          },
          unread: 1,
          messages: [
            {
              sent_at: new Date(),
              message: "Hey",
              read: false,
            },
          ],
        },
        {
          user: {
            username: "tepel lepel",
            type: {
              name: "main",
              icon: "$vuetify.icons.runescape",
            },
          },
          unread: 1,
          messages: [
            {
              sent_at: new Date(),
              message: "Hey",
              read: false,
            },
          ],
        },
      ],
      selectedUserMessage: null,
    };
  },
  methods: {
    removeUserMessage(index: number) {
      this.userMessages.splice(index, 1);
      this.selectedUserMessage = null;
    },
    viewMessages(userMessage: any) {
      this.selectedUserMessage = userMessage;
      let list: HTMLElement = this.$refs.list as HTMLElement;
      if (list) {
        list.scrollTop = list.scrollHeight - list.clientHeight;
      }
      let input: HTMLElement = this.$refs.input as HTMLElement;
      if (input) {
        input.focus()
      }
    },
    back() {
      this.selectedUserMessage = null;
    },
    press() {
      console.log("ad");
    },
  },
});
</script>