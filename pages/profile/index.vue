<template>
  <v-container fluid style="height: 500px">
    <v-row justify="center">
      <v-col cols="8" class="mx-auto text-center"
        ><v-card class="pa-10">
          <v-avatar color="brown" size="132" class="ma-8">
            <v-img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
            ></v-img>
          </v-avatar>
          <h3 class="ttext-lg-h6">{{ user.nome }}</h3>
          <p class="text-md-body-1 pt-3 pa-0 ma-0">E-mail: {{ user.email }}</p>
          <p class="text-md-body-1 pa-0 ma-0">CPF: {{ user.cpf }}</p>
          <p class="text-md-body-1 pa-0 ma-0">Tipo Usuário: {{ user.tipo }}</p>
          <v-btn
            class="mt-10"
            color="teal accent-4"
            dark
            top
            right
            @click="dialog = true"
          >
            Editar <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    user: {},
  }),
  mounted() {
    if (JSON.parse(sessionStorage.getItem("user"))?.tipo) {
      this.user = JSON.parse(sessionStorage.getItem("user"));
    }
  },
};
</script>
