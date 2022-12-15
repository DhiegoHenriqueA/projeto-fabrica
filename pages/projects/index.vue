<template>
  <v-container>
    <v-card-text style="height: 100px; position: relative" v-if="isCoordinate">
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-fab-transition>
            <v-btn color="teal accent-4" dark top right @click="dialog = true">
              Adicionar <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-fab-transition>
        </template>

        <v-card>
          <v-card-title>
            <span class="text-h5">Novo Projeto </span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="newProject.titulo"
                    label="Titulo"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    v-model="newProject.descricao"
                    label="Descricao"
                  ></v-textarea>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="newProject.dt_previsao_conclusao"
                    label="Previsão de Conclusão"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-autocomplete
                    v-model="newProject.status"
                    :items="['Em Desenvolvimento', 'Aguardando Aprovação']"
                    label="Status"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    v-model="newProject.coordenadores"
                    :items="coordenadores"
                    label="Coordenador*"
                    multiple
                    required
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-autocomplete
                    v-model="newProject.bolsistas"
                    :items="bolsistas"
                    label="Bolsistas"
                    multiple
                  ></v-autocomplete>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Close
            </v-btn>
            <v-btn color="blue darken-1" text @click="saveProject()">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card-text>
    <v-row class="d-flex justify-start mb-6">
      <v-col cols="3" v-for="(project, index) in projects" :key="index">
        <project-card
          :projectId="project.id"
          :projectName="project.titulo"
          :projectDesc="project.descricao"
          :projectStatus="project.status"
          :projectDate="project.dt_previsao_conclusao"
          :projectFellows="project.bolsistas"
          :projectCoordinator="project.coordenadores"
        ></project-card>
      </v-col>
    </v-row>
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
      isCoordinate: false,
      newProject: {
        titulo: "",
        descricao: "",
        status: "",
        dt_previsao_conclusao: "",
        coordenadores: [],
        bolsistas: [],
      },
      bolsistas: [
        "Alfredo Quadros",
        "Roberto Sá",
        "Evandro Guerra",
        "Marcos Silveira",
        "Fabiano Simões",
        "Rogério Delchiaro",
      ],
      coordenadores: [
        "Rogério Delchiaro",
        "Fabiano Simões",
        "Marcos Silveira",
        "Evandro Guerra",
        "Roberto Sá",
        "Alfredo Quadros",
        "Carla Branco",
        "Inês Salgado",
        "Valquíria Farias",
        "Ana Garcia",
        "Vânia Espíndola",
        "Amélia Bezerra",
      ],
      dialog: false,
    };
  },
  async asyncData({ $axios }) {
    const projects = await $axios.$get("http://localhost:3000/projects");
    return { projects };
  },
  mounted() {
    if (JSON.parse(sessionStorage.getItem("user"))?.tipo === "coordenador") {
      this.isCoordinate = true;
      return;
    }

    this.isCoordinate = false;
  },
  methods: {
    async saveProject() {
      await this.$axios.$post(
        "http://localhost:3000/projects",
        this.newProject
      );
      this.dialog = false;
      window.location.reload();
    },
  },
};
</script>
