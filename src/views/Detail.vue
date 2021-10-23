<template>
  <div>
    <ul  v-if="todosTitleId">
      <li  v-for="(todoLis,index) in todoList" :key="index" >
        {{todoLis.title}}
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  props: ['todoList','todosTitle'],
  data() {
    return {
      todosTitleId: true
    }
  },
}
</script>

<style>
li {
  list-style: none;
}
</style>