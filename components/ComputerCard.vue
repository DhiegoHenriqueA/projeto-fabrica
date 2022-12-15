<template>
  <v-card class="mx-auto pa-2">
    <v-card-text>
      <span>Cod. {{ computerCodigo }}</span>
      <p class="text-h5 text--primary mt-2 mb-0">
        {{ computerConfiguracao }}
      </p>
    </v-card-text>
    <v-card-actions>
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-row class="mx-2 mb-4" align="center" justify="space-between">
            <v-chip pill v-on="on">
              <v-icon class="ma-1"> mdi-laptop-account </v-icon>
              {{ computerLaboratorio }}
            </v-chip>
            <v-btn v-bind="attrs" v-on="on"> Reservar </v-btn>
          </v-row>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Reservar Compudador </span>
          </v-card-title>
          <v-card-text class="pb-0">
            <v-container
              ><v-row>
                <v-col cols="12">
                  <v-autocomplete
                    v-model="diasEscolhidos"
                    :items="diasValidos"
                    label="Periodo da Reserva"
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
            <v-btn color="blue darken-1" text @click="reservar()">
              Reservar
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
    computerId: [Number, String],
    computerCodigo: [Number, String],
    computerConfiguracao: String,
    computerLaboratorio: String,
  },
  data: () => ({
    dialog: false,
    diasEscolhidos: [],
    diasValidos: [
      "Segunda-feira 08h - 10h",
      "Segunda-feira 10h - 12h",
      "Segunda-feira 13h - 15h",
      "Segunda-feira 15h - 17h",
      "Terça-feira 08h - 10h",
      "Terça-feira 10h - 12h",
      "Terça-feira 13h - 15h",
      "Terça-feira 15h - 17h",
      "Quarta-feira 08h - 10h",
      "Quarta-feira 10h - 12h",
      "Quarta-feira 13h - 15h",
      "Quarta-feira 15h - 17h",
      "Quinta-feira 08h - 10h",
      "Quinta-feira 10h - 12h",
      "Quinta-feira 13h - 15h",
      "Quinta-feira 15h - 17h",
      "Sexta-feira 08h - 10h",
      "Sexta-feira 10h - 12h",
      "Sexta-feira 13h - 15h",
      "Sexta-feira 15h - 17h",
    ],
  }),
  methods: {
    async reservar() {
      this.dialog = false;

      await this.$axios.$post("http://localhost:3000/reservations", {
        user_id: JSON.parse(sessionStorage.getItem("user"))?.id,
        periodo: this.diasEscolhidos,
        computador: {
          id: this.computerId,
          codigo: this.computerCodigo,
          laboratorio: this.computerLaboratorio,
          configuracao: this.computerConfiguracao,
        },
      });
    },
  },
};
</script>
