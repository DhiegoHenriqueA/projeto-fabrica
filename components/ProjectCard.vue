<template>
  <v-card class="mx-auto" max-width="444" min-height="240px">
    <v-card-text>
      <div>{{ projectDate }}</div>
      <p class="text-h4 text--primary">{{ projectName }}</p>
      <p>{{ projectStatus }}</p>
      <div class="text--primary">
        {{ projectDesc }}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-row class="mx-2 mb-4" align="center" justify="space-between">
            <v-chip pill v-on="on">
              <v-avatar left>
                <v-img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhMIBxITFhIWEhAVGBYXFRAYFRgVIBUWGBgTHxYYHCggGBomGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0NFg8QFSsdFRk3KzctLSsrNzcrKysrKy0tKysrNysrKysrKy0rKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQYHBQMEAv/EADQQAQABAwICBwUIAwEAAAAAAAABAgMEBREGIRIWQVFTotExYXGBoSIyNXKSweHwE0JiFP/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAZEQEBAQEBAQAAAAAAAAAAAAAAARExEgL/2gAMAwEAAhEDEQA/APjAdGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMc52hNFFVyuKKI3mZ2iGgcOcN2cK1F/LiKrkxvtPsp9yWmKng8Palm09K3RtHfVydGOCs/o79O35vRfoiIjaBNa8syzeGtTxI6VVHSjvp5/RyKqZpnar2tkcLXuHsfUbU12oim52THb7pXUsZuPS/ZuY96bV6NqonaXmqAAAAAAAAAAAAAAAAAAAAAALRwNp1N/LnMuRyo5R8e9fVe4HtxTo3SjtqqWFmtfPABGgAFL4806KZpzrcf81ftKnNM4uoivQq9+zaWZtRi9AFQAAAAAAAAAAAAAAAAAAABf8AgS/FemTa7aapWZmnC2qRpuox/k+5Vyn3d0tKoqprp6VPOGa18pARoBEztG8g4XGd+LWi1Uz/ALTEM4WLjHVac7NixZn7FH1qV1qOdAFAAAAAAAAAAAAAAAAAAAABZeH+KK8GmMfM3qo7J7Y/hWgGtYeo4mZR08eumfnzfVvDHaK6qJ3omY+Evf8A9+Ztt/lufrq9U8r6aplZ2LiUdK/XTEfGFO1/iuciicfT94ieU1dvyVau5Xcne5Mz8ZmX4MN1KAVAAAAAAAAAAAAAAAAAAAAAe+HiXs2/FnHiZqn+7r1onCuNiRF3M+3X3T7I+Rpin6fomfnzvYonbvnlDv4vBNUxvlXNvdELpTTFMbU+xLOteVctcG6dRH25qn5vbqlpO23Rn9Uu6Jq5Fdu8HabVH2OlHzc/K4J5b41z5TC5C6Yy7UNA1DA53KJmnvp5w5bZJiJjaXB1nhjEz6ZuWIiivvj2T8YXWb8s5H1ahgZGn35s5NO0/SY74fKqAAAAAAAAAAAAAAAAD2xMa7l5EWLEb1TO38vFeeBdOopxZzquc1TMR7oDrsaFo1nSsbo0865+9V/ex1AYbABQAAAAAHwavpdjVMabV6OfZPbEsz1HCvaflTj345x298d7W1c4006jJ06cqPvUc9/d3LKzYz0BpkAAAAAAAAAAAAAAaRwX+A0/mqZutmgcT4mmabGLeormYmZ3jo7fWUqzq8ir9d8Dw7vk9TrvgeHd8nqzjWxaBV+u+B4d3yep13wPDu+T1MNi0Cr9d8Dw7vk9TrvgeHd8nqYbFoFX674Hh3fJ6nXfA8O75PUw2LQKv13wPDu+T1Ou+B4d3yephsWhy+J/wG7+X94cvrvgeHd8nq+PV+LMPO02vGt0XImqNomejt7fiuJbFOAaZAAAAAAAAAAAAAAEoASIASIASIASIASIASgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//Z"
                ></v-img>
              </v-avatar>
              {{ projectCoordinator[0] }} +{{
                parseInt(projectCoordinator.length) +
                parseInt(projectFellows.length)
              }}
            </v-chip>
            <v-btn
              v-if="isCoordinate"
              text
              color="teal accent-4"
              dark
              v-bind="attrs"
              v-on="on"
            >
              <v-icon dark> mdi-pencil </v-icon>
            </v-btn>
            <v-btn
              v-else
              text
              color="teal accent-4"
              dark
              v-bind="attrs"
              v-on="on"
            >
              <v-icon dark> mdi-eye</v-icon>
            </v-btn>
          </v-row>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Projeto </span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    :solo="!isCoordinate"
                    :readonly="!isCoordinate"
                    v-model="projectName"
                    label="Titulo"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    :solo="!isCoordinate"
                    :readonly="!isCoordinate"
                    v-model="projectDesc"
                    label="Descricao"
                  ></v-textarea>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field
                    :solo="!isCoordinate"
                    :readonly="!isCoordinate"
                    v-model="projectDate"
                    label="Previs??o de Conclus??o"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-autocomplete
                    :solo="!isCoordinate"
                    :readonly="!isCoordinate"
                    v-model="projectStatus"
                    :items="['Em Desenvolvimento', 'Aguardando Aprova????o']"
                    label="Status"
                    multiple
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    :solo="!isCoordinate"
                    :readonly="!isCoordinate"
                    v-model="projectCoordinator"
                    :items="coordenadores"
                    label="Coordenador*"
                    multiple
                    required
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-autocomplete
                    :solo="!isCoordinate"
                    :readonly="!isCoordinate"
                    v-model="projectFellows"
                    :items="bolsistas"
                    label="Bolsistas"
                    multiple
                  ></v-autocomplete>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions class="pa-5">
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Close
            </v-btn>
            <v-btn
              v-if="isCoordinate"
              color="blue darken-1"
              text
              @click="editProject()"
            >
              Save
            </v-btn>
            <v-btn
              v-else
              color="teal accent-4"
              dark
              right
              @click="dialog = false"
            >
              Solicitar Participa????o
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    projectId: [String, Number],
    projectName: String,
    projectDesc: String,
    projectDate: String,
    projectStatus: String,
    projectFellows: String,
    projectCoordinator: String,
  },
  data: () => ({
    isCoordinate: false,
    newProject: {
      titulo: "",
      descricao: "",
      status: "",
      dt_previsao_conclusao: "",
      coordenadores: [],
      bolsistas: [],
    },
    dialog: false,
    bolsistas: [
      "Alfredo Quadros",
      "Roberto S??",
      "Evandro Guerra",
      "Marcos Silveira",
      "Fabiano Sim??es",
      "Rog??rio Delchiaro",
    ],
    coordenadores: [
      "Rog??rio Delchiaro",
      "Fabiano Sim??es",
      "Marcos Silveira",
      "Evandro Guerra",
      "Roberto S??",
      "Alfredo Quadros",
      "Carla Branco",
      "In??s Salgado",
      "Valqu??ria Farias",
      "Ana Garcia",
      "V??nia Esp??ndola",
      "Am??lia Bezerra",
    ],
  }),
  mounted() {
    if (JSON.parse(sessionStorage.getItem("user"))?.tipo === "coordenador") {
      this.isCoordinate = true;
      return;
    }

    this.isCoordinate = false;
  },

  methods: {
    async editProject() {
      await this.$axios.$put(
        `http://localhost:3000/projects/${this.projectId}`,
        {
          id: this.projectId,
          titulo: this.projectName,
          descricao: this.projectDesc,
          dt_previsao_conclusao: this.projectDate,
          status: this.projectStatus,
          bolsistas: this.projectFellows,
          coordenadores: this.projectCoordinator,
        }
      );
      this.dialog = false;
      window.location.reload();
    },
  },
};
</script>
