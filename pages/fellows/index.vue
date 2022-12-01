<template>
  <div>
    <h3>Listagem de Bolsistas - Async Data</h3>
    {{ fellows }}
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  async asyncData({ $axios }) {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
    const fellows = await $axios.$get(
      "https://jsonplaceholder.typicode.com/users"
    );

    console.log(fellows);
    return { fellows };
  },
};
</script>

<style></style>
