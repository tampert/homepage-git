<script setup>
import { ref } from "vue";
import { useConnectionStore } from "@/store/useConnectionStore";
const connectionStore = useConnectionStore();

const isEnabled = ref(true);
const firstName = ref("");
const lastName = ref("");
const isRoot = ref(false);
const rootName = ref("");
const rootLastName = ref("");
const isAdmin = ref(false);
const role = ref();
</script>

<template>
  <v-sheet class="mx-auto">
    <!-- <v-checkbox v-model="isEnabled" label="Form is enabled"></v-checkbox> -->
    <v-form :disabled="!isEnabled">
      <v-text-field v-model="firstName" label="First name"></v-text-field>
      <v-text-field v-model="lastName" label="Last name"></v-text-field>
      <v-checkbox v-model="isRoot" label="User is root"></v-checkbox>
      <v-text-field
        :model-value="connectionStore.name"
        :disabled="isRoot || undefined"
        v-on:update:model-value=""
        label="Root name"
      ></v-text-field>
      <v-text-field
        v-model="rootLastName"
        :disabled="isRoot || undefined"
        label="Root last name"
      ></v-text-field>
      <!-- <v-checkbox v-model="isAdmin" label="User is admin"></v-checkbox>
      <v-select
        v-model="role"
        :disabled="isAdmin || undefined"
        :items="['VIEWER', 'EDITOR']"
        hint="I'm enabled only if the user is not an admin"
        persistent-hint
      ></v-select> -->
      <v-btn>Add</v-btn>
      <v-btn>Reset</v-btn>
    </v-form>
  </v-sheet>
</template>

<style scoped></style>
