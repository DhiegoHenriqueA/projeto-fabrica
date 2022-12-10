<template>
  <v-container>
    <v-card-text style="height: 100px; position: relative">
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-fab-transition>
            <v-btn dark top right @click="dialog = true">
              Adicionar <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-fab-transition>
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
                    multiple
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    v-model="newProject.coordenadores"
                    :items="['João Silva', 'José Silva']"
                    label="Coordenador*"
                    multiple
                    required
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-autocomplete
                    v-model="newProject.bolsistas"
                    :items="['Lucas Costa', 'Pedro Souza']"
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
      newProject: {
        titulo: "",
        descricao: "",
        status: "",
        dt_previsao_conclusao: "",
        coordenadores: [],
        bolsistas: [],
      },
      dialog: false,
      projects: [
        {
          titulo: "Rede Social IFC",
          descricao: "Rede Social IFC para todos os alunos se conectarem",
          status: "Em Desenvolvimento",
          dt_previsao_conclusao: "10/12/2023",
          bolsistas: ["Alfredo Quadros", "Rogério Delchiaro"],
          coordenadores: ["Vânia Espíndola", "Amélia Bezerra"],
        },
        {
          titulo: "Cachorros Abandonados IFC",
          status: "Em Desenvolvimento",
          dt_previsao_conclusao: "10/12/2023",
          bolsistas: ["Rogério Delchiaro"],
          coordenadores: ["Fabiano Simões", "Marcos Silveira"],
        },
        {
          titulo: "Ração Suinos",
          status: "Aguardando Aprovação",
          dt_previsao_conclusao: "10/12/2023",
          bolsistas: ["Roberto Sá", "Evandro Guerra"],
          coordenadores: ["Fabiano Simões", "Inês Salgado"],
        },
        {
          titulo: "Controle de Entrada e Saída IFC",
          status: "Em Desenvolvimento",
          dt_previsao_conclusao: "10/12/2023",
          bolsistas: ["Roberto Sá", "Fabiano Simões"],
          coordenadores: ["Amélia Bezerra"],
        },
        {
          titulo: "Pesquisa segurnaça de aplicações",
          status: "Aguardando Aprovação",
          dt_previsao_conclusao: "10/12/2023",
          bolsistas: ["Carla Branco", "Alfredo Quadros"],
          coordenadores: ["Vânia Espíndola"],
        },
        {
          titulo: "Novo Site IFC",
          status: "Finalizado",
          dt_previsao_conclusao: "10/12/2023",
          bolsistas: [],
          coordenadores: ["Vânia Espíndola"],
        },
      ],
    };
  },
  methods: {
    saveProject() {
      this.dialog = false;
      this.projects.push(this.newProject);
    },
  },
};
</script>
