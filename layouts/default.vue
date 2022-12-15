<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item>
          <v-list-item-title>Conta</v-list-item-title>
        </v-list-item>
        <v-list-item
          v-for="(item, i) in itemsProfile"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Projetos",
          to: "/projects",
        },
        {
          icon: "mdi-laptop-account",
          title: "Computadores",
          to: "/computers",
        },
      ],
      itemsProfile: [
        {
          icon: "mdi-account",
          title: "Meus Dados",
          to: "/profile",
        },
        {
          icon: "mdi-laptop-account",
          title: "Minhas Reservas",
          to: "/reservations",
        },
        {
          icon: "mdi-exit-to-app",
          title: "Sair",
          to: "/auth/login",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Fabrica Softaware Admin",
    };
  },
  mounted() {
    if (JSON.parse(sessionStorage?.getItem("user"))?.tipo === "coordenador") {
      this.items.push({
        icon: "mdi-account-group",
        title: "Usuários",
        to: "/fellows",
      });
    }
  },
};
</script>
