<script setup>
function handleLogin() {
  formRef.value.validate(async valid => {
    if (valid) {
      loading.value = true
      const { code, message } = await useStore.login(loginForm)
      loading.value = false
      if (code === 0) {
        router.replace(toPath || '/')
      }
      else {
        message({
          message: 'login failed',
          type: 'error'
        })
      }
    }
    else {
      console.log('error submit !! ')
      return false
    }
  })
}
</script>

<template>
  <div />
</template>

<style scoped>
</style>
