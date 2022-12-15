<template>
  <v-container>
    <v-card-text style="height: 100px; position: relative">
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-fab-transition>
            <v-btn color="teal accent-4" dark top right @click="dialog = true">
              Adicionar <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-fab-transition>
        </template>
        <v-card class="pa-5" v-if="senhaTemporaria"
          ><v-card-title> Usuário criado com Sucesso!</v-card-title>
          <v-card-subtitle class="my-5"
            >A senha temporaria de {{ newUser.nome }} é
            <b>{{ senhaTemporaria }}</b>
          </v-card-subtitle>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="close()"> Close </v-btn>
          </v-card-actions>
        </v-card>
        <v-card v-else>
          <v-card-title>
            <span class="text-h5">Novo Usuario </span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="newUser.nome"
                    label="Nome"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="newUser.email"
                    label="E-mail"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-autocomplete
                    v-model="newUser.tipo"
                    :items="tipos"
                    label="tipo"
                  ></v-autocomplete>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="close()"> Close </v-btn>
            <v-btn color="blue darken-1" text @click="saveUser()"> Save </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card-text>
    <v-row class="d-flex justify-start mb-6">
      <v-col cols="12" v-for="(user, index) in users" :key="index">
        <fellows-card
          :userNome="user.nome"
          :userEmail="user.email"
          :userCpf="user.cpf"
          :userDtNascimento="user.dt_nascimento"
          :userTipo="user.tipo"
        ></fellows-card>
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
      senhaTemporaria: "",
      tipos: ["bolsista", "coordenador"],
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
    const users = await $axios.$get("http://localhost:3000/users");

    console.log(users);
    return { users };
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
        .$post("http://localhost:3000/users", this.newUser)
        .then(() => {
          this.senhaTemporaria = md5;
        });
    },
    simpleHash(str) {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash &= hash; // Convert to 32bit integer
      }
      return new Uint32Array([hash])[0].toString(36);
    },
  },
};
</script>
