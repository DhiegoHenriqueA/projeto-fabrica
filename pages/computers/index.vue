<template>
  <div>
    <h3>Listagem Computadores - Com Fetch</h3>
    <div v-if="$fetchState.pending">
      <h4>Carregando ...</h4>
    </div>
    <div v-else>
      {{ computadores }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      computadores: [],
    };
  },
  async fetch() {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
    await this.$axios
      .$get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.computadores = response;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
