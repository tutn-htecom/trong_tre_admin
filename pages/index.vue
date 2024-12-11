<template>

</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ route, redirect }) {
    if (route.path === '/') {
      redirect('/admin/dashboard');
    }
  }
}
</script>
