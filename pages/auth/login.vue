<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md3>
            <v-card
              class="elevation-12 px-12 pt-10 rounded-xl"
              justify-center
              rounded
            >
              <v-flex class="text-center">
                <v-img
                  class="mx-auto"
                  lazy-src="https://seeklogo.com/images/S/sistema-plastics-logo-17DF2B9346-seeklogo.com.gif"
                  max-height="106"
                  max-width="250"
                  src="https://seeklogo.com/images/S/sistema-plastics-logo-17DF2B9346-seeklogo.com.gif"
                ></v-img>
              </v-flex>
              <v-card-text text-center>
                <form ref="form" @submit.prevent="login()">
                  <v-text-field
                    v-model="email"
                    name="email"
                    label="E-mail"
                    type="email"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show1 ? 'text' : 'password'"
                    name="passwird"
                    label="Senha"
                    counter
                    @click:append="show1 = !show1"
                  ></v-text-field>

                  <v-btn
                    class="mt-4"
                    rounded
                    block
                    type="submit"
                    color="primary"
                    value="log in"
                    >Login</v-btn
                  >

                  <v-row class="ma-6" align="center" justify="space-between">
                    <a class="text-decoration-none">Esqueceu a senha?</a>
                    <a class="text-decoration-none">Cadastre-se</a>
                  </v-row>
                </form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  layout: "auth",
  name: "Login",
  data() {
    return {
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      email: "",
      password: "",
      rules: {
        required: (value) => !!value || "Obrigatório",
        min: (v) => v.length >= 4 || "Min 4 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
  methods: {
    async login() {
      const users = await this.$axios.$get("http://localhost:3000/users");

      const existsUser = users.find(
        (user) => user.email === this.email && user.senha === this.password
      );

      if (!existsUser) return;

      sessionStorage.setItem("user", JSON.stringify(existsUser));
      console.log("aaa", sessionStorage.getItem("user"));
      this.$router.push("/");
    },
  },
};
</script>
