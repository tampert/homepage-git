<script setup>
import { useConnectionStore } from "@/store/useConnectionStore";
const connectionStore = useConnectionStore();

const updateStore = () => {
  connectionStore.randomizeCounter();
  connectionStore.name = "henk";
};

const resetStore = () => {
  console.log("joo");
  // connectionStore.$reset();
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12"> {{ connectionStore.name }} </v-col>
      <v-col cols="12">
        {{ connectionStore.count }}
        {{ connectionStore.doubleCount }}
      </v-col>
      <v-col cols="12"> {{ connectionStore }} </v-col>
    </v-row>

    <v-row>
      <v-btn @click="updateStore">update</v-btn>
      <v-btn @click="resetStore">reset</v-btn>
    </v-row>
  </v-container>
</template>

<style scoped></style>
