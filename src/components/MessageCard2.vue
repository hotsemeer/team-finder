<template>
  <div>
    <div style="width: 100%" class="d-flex flex-row align-end justify-space-around">
      <v-icon class="mr-2">message</v-icon>
      <h1 class="headline">Messages</h1>
      <v-btn icon @click="back" class="ml-auto">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-divider />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Message from "@/classes/Message";
import RunescapeAccount from "@/classes/RunescapeAccount";
import UserMessage from "@/classes/UserMessage";

export default Vue.extend({
  data() {
    return {
      userMessages: new Array<UserMessage>(),
      //   {
      //     user: {
      //       id: '1',
      //       username: "tepel lepel",
      //       type: {
      //         name: "main",
      //         icon: "$vuetify.icons.runescape",
      //       },
      //     },
      //     unread: 1,
      //     messages: [
      //       new Message("Hey", '1'),
      //       new Message("I would like to join Nex: Angel of Death", '1'),
      //       new Message("Hey", '1'),
      //       new Message("Hey", '1'),
      //       new Message("Hey", '1'),
      //       new Message("Hey", '1'),
      //       new Message("Hey", '1'),
      //     ],
      //   },
      //   {
      //     user: {
      //       username: "tepel vork",
      //       type: {
      //         name: "main",
      //         icon: "$vuetify.icons.ironman",
      //       },
      //     },
      //     unread: 3,
      //     messages: [
      //       {
      //         sent_at: new Date(),
      //         message: "Hey",
      //         read: false,
      //       },
      //     ],
      //   },
      //   {
      //     user: {
      //       username: "tepel mes",
      //       type: {
      //         name: "main",
      //         icon: "$vuetify.icons.hardcore_ironman",
      //       },
      //     },
      //     unread: 0,
      //     messages: [
      //       {
      //         sent_at: new Date(),
      //         message: "Hey",
      //         read: false,
      //       },
      //     ],
      //   },
      //   {
      //     user: {
      //       username: "tepel lepel",
      //       type: {
      //         name: "main",
      //         icon: "$vuetify.icons.runescape",
      //       },
      //     },
      //     unread: 1,
      //     messages: [
      //       {
      //         sent_at: new Date(),
      //         message: "Hey",
      //         read: false,
      //       },
      //     ],
      //   },
      //   {
      //     user: {
      //       username: "tepel lepel",
      //       type: {
      //         name: "main",
      //         icon: "$vuetify.icons.runescape",
      //       },
      //     },
      //     unread: 1,
      //     messages: [
      //       {
      //         sent_at: new Date(),
      //         message: "Hey",
      //         read: false,
      //       },
      //     ],
      //   },
      //   {
      //     user: {
      //       username: "tepel lepel",
      //       type: {
      //         name: "main",
      //         icon: "$vuetify.icons.runescape",
      //       },
      //     },
      //     unread: 1,
      //     messages: [
      //       {
      //         sent_at: new Date(),
      //         message: "Hey",
      //         read: false,
      //       },
      //     ],
      //   },
      //   {
      //     user: {
      //       username: "tepel lepel",
      //       type: {
      //         name: "main",
      //         icon: "$vuetify.icons.runescape",
      //       },
      //     },
      //     unread: 1,
      //     messages: [
      //       {
      //         sent_at: new Date(),
      //         message: "Hey",
      //         read: false,
      //       },
      //     ],
      //   },
      //   {
      //     user: {
      //       username: "tepel lepel",
      //       type: {
      //         name: "main",
      //         icon: "$vuetify.icons.runescape",
      //       },
      //     },
      //     unread: 1,
      //     messages: [
      //       {
      //         sent_at: new Date(),
      //         message: "Hey",
      //         read: false,
      //       },
      //     ],
      //   },
      //   {
      //     user: {
      //       username: "tepel lepel",
      //       type: {
      //         name: "main",
      //         icon: "$vuetify.icons.runescape",
      //       },
      //     },
      //     unread: 1,
      //     messages: [
      //       {
      //         sent_at: new Date(),
      //         message: "Hey",
      //         read: false,
      //       },
      //     ],
      //   },
      selectedUserMessage: null,
    };
  },
  created() {
    const user = new RunescapeAccount();

    const messages = new Array<Message>(
      new Message("hey", "1"),
      new Message("I would like to join your team for Nex Angel of Death", "1"),
      new Message("I would like to join your team for Nex Angel of Death", "1"),
      new Message("I would like to join your team for Nex Angel of Death", "1"),
      new Message("I would like to join your team for Nex Angel of Death", "1"),
      new Message("I would like to join your team for Nex Angel of Death", "1")
    );

    this.userMessages.push(new UserMessage(user, messages));
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
        input.focus();
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