<script setup>
import ConnectionForm from "./component/ConnectionForm.vue";
import ConnectionView from "./component/ConnectionView.vue";
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col cols="3" class="border"> <ConnectionForm /> </v-col>
          <v-col cols="9" class="border"> <ConnectionView /> </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-card
          rounded="lg"
          title="Routes"
          subtitle="Routes to my different github pages"
          color="black"
          class="border"
        >
          <v-list density="compact">
            <v-list-item>
              <a
                href="https://tampert.github.io/resume-react/"
                target="_blank"
                rel="noopener"
                >resume-react
              </a>
              to https://tampert.github.io/resume-react/
            </v-list-item>
            <v-list-item>
              <a
                href="https://tampert.github.io/resume-angular/"
                target="_blank"
                rel="noopener"
                >resume-angular
              </a>
              to https://tampert.github.io/resume-angular/
            </v-list-item>
            <v-list-item>
              <a
                href="https://tampert.github.io/resume-vue/"
                target="_blank"
                rel="noopener"
                >resume-vue
              </a>
              to https://tampert.github.io/resume-vue/
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
