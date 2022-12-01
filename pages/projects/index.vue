<template>
  <v-container>
    <v-row class="d-flex justify-start mb-6">
      <v-col cols="3" v-for="(project, index) in projects" :key="index">
        <project-card
          :projectName="project.name"
          :projectDesc="project.desc"
          :deadline="project.date"
        ></project-card>
      </v-col>
    </v-row>
    <v-card-text style="height: 100px; position: relative">
      <v-fab-transition>
        <v-btn v-show="!hidden" color="pink" dark absolute top right fab>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-fab-transition>
    </v-card-text>
  </v-container>
</template>
<script>
import ProjectCard from "@/components/ProjectCard.vue";
export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [
        {
          name: "Rede Social IFC",
          desc: "Finish video asap",
          date: "28",
        },
        {
          name: "Projeo cachorros abandonados",
          desc: "Finish video asap",
          date: "28",
        },
        {
          name: "Projeo cachorros abandonados",
          desc: "Finish video asap",
          date: "28",
        },
        {
          name: "Rede Social IFC",
          desc: "Finish video asap",
          date: "28",
        },
        {
          name: "Projeo cachorros abandonados",
          desc: "Finish video asap",
          date: "28",
        },
        {
          name: "Projeo cachorros abandonados",
          desc: "Finish video asap",
          date: "28",
        },
      ],
    };
  },
};
</script>
