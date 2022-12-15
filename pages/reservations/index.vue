<template>
  <v-container>
    <v-row class="d-flex justify-start mb-6">
      <v-col
        cols="12"
        v-for="(reservation, index) in reservations"
        :key="index"
      >
        <v-card class="pa-5">
          <v-row>
            <v-col cols="4"
              ><span class="font-weight-bold">Cod. Computador:</span>
              {{ reservation.computador.codigo }}
            </v-col>
            <v-col colas="4"
              ><span class="font-weight-bold">Laboratorio:</span>
              {{ reservation.computador.configuracao }}</v-col
            >
            <v-col colas="4"
              ><span class="font-weight-bold">Laboratorio:</span>
              {{ reservation.computador.laboratorio }}</v-col
            ></v-row
          ><v-list flat>
            <v-subheader class="pt-10">Periodos:</v-subheader>
            <v-list-item-group v-model="selectedItem" color="primary">
              <v-list-item v-for="(item, i) in reservation.periodo" :key="i">
                <v-list-item-icon>
                  <v-icon>mdi-clock</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group> </v-list
        ></v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import FellowsCard from "@/components/FellowsCard.vue";
export default {
  components: {
    FellowsCard,
  },
  data() {
    return {
      newUser: {
        nome: "",
        tipo: "",
        email: "",
        senha: "",
        cpf: "0000000000",
      },
      dialog: false,
    };
  },
  async asyncData({ $axios }) {
    const reservations = await $axios.$get(
      "http://localhost:3000/reservations"
    );

    console.log(reservations);
    return { reservations };
  },
  methods: {
    close() {
      this.newUser = {
        nome: "",
        tipo: "",
        email: "",
        senha: "",
        cpf: "0000000000",
      };
      this.senhaTemporaria = "";
      this.dialog = false;
    },
    async saveUser() {
      const md5 = this.simpleHash(
        this.newUser.email + this.newUser.nome + "Projeto Fabrica"
      );

      this.newUser.senha = md5;

      await this.$axios
        .$post("http://localhost:3000/reservations", this.newUser)
        .then(() => {
          this.senhaTemporaria = md5;
        });
    },
  },
};
</script>
