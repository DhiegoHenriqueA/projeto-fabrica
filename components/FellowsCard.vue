<template>
  <v-card class="mx-auto pa-2">
    <v-card-text>
      <v-row
        ><v-chip class="ma-2" color="teal accent-4" outlined>
          <v-icon left> mdi-account-circle-outline </v-icon>{{ userTipo }}
        </v-chip></v-row
      >
      <v-row>
        <v-col cols="6"
          ><span class="font-weight-bold">Nome:</span> {{ userNome }}
        </v-col>
        <v-col colas="4"
          ><span class="font-weight-bold">CPF:</span> {{ userCpf }}</v-col
        >
      </v-row>

      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-row align="center" justify="space-between">
            <v-col cols="6"
              ><span class="font-weight-bold">E-mail:</span>
              {{ userEmail }}</v-col
            >
            <v-col colas="4"
              ><span class="font-weight-bold">Data Nascimento:</span>
              {{ userDtNascimento }}</v-col
            >
            <v-btn text color="teal accent-4" dark v-bind="attrs" v-on="on">
              <v-icon dark> mdi-pencil </v-icon>
            </v-btn>
          </v-row>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Usuario </span>
          </v-card-title>
          <v-card-text class="pb-0">
            <v-container>
              <v-row class="pa-3"
                ><b class="mr-1">Nome: </b>{{ userNome }}</v-row
              >
              <v-row class="pa-3"
                ><b class="mr-1">E-mail: </b>{{ userEmail }}</v-row
              >
              <v-row>
                <v-col cols="12">
                  <v-autocomplete
                    v-model="userTipo"
                    :items="tipoUsuario"
                    label="Tipo usuário"
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
            <v-btn color="blue darken-1" text @click="alterar()">
              Alterar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card-text>
    <v-card-actions> </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    userNome: String,
    userEmail: String,
    userCpf: String,
    userDtNascimento: String,
    userTipo: String,
  },
  data: () => ({
    dialog: false,
    userTipo: "",
    tipoUsuario: ["bolsista", "coordenador"],
  }),
  methods: {
    alterar() {
      this.dialog = false;
    },
  },
};
</script>
