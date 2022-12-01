<template>
  <div>
    <h3>Conheça a nossa Fabrica de Software</h3>
  </div>
</template>

<script>
export default {
  async asyncData() {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
  },
};
</script>
