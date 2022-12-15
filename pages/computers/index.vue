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
            <span class="text-h5">Novo Computador </span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="newComputer.codigo"
                    label="Código"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="newComputer.configuracao"
                    label="Configuração do computador"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-autocomplete
                    v-model="newComputer.laboratorio"
                    :items="laboratorios"
                    label="Laboratorios"
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
            <v-btn color="blue darken-1" text @click="saveComputer()">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card-text>
    <v-row class="d-flex justify-start mb-6">
      <v-col cols="6" v-for="(computer, index) in computers" :key="index">
        <computer-card
          :computerId="computer.id"
          :computerCodigo="computer.codigo"
          :computerConfiguracao="computer.configuracao"
          :computerLaboratorio="computer.laboratorio"
        ></computer-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import ComputerCard from "@/components/ComputerCard.vue";
export default {
  components: {
    ComputerCard,
  },
  data() {
    return {
      isCoordinate: "aa",
      laboratorios: ["B1", "B2", "B3", "B4", "B5"],
      newComputer: {
        codigo: "",
        configuracao: "",
        laboratorio: "",
      },
      dialog: false,
    };
  },
  async asyncData({ $axios }) {
    const computers = await $axios.$get("http://localhost:3000/computers");
    return { computers };
  },
  mounted() {
    if (JSON.parse(sessionStorage.getItem("user"))?.tipo === "coordenador") {
      this.isCoordinate = true;
      return;
    }

    this.isCoordinate = false;
  },
  methods: {
    async saveComputer() {
      this.dialog = false;
      await this.$axios.$post(
        "http://localhost:3000/computers",
        this.newComputer
      );
      window.location.reload();
    },
  },
};
</script>
