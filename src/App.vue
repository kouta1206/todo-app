<template>
  <div id="app">
    <header class="header">
      <Input @my-click="todos = $event"></Input>
    </header>

    <router-view :todo-lists="todos"></router-view>
  </div>
</template>

<script>
import Input from "./components/Input";
export default {
  components: {
    Input,
  },
  data() {
    return {
      todos: "",
    };
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
.header {
  position: relative;
  height: 10vh;
  background-color: rgb(18, 185, 129);
  box-shadow: 2px 2px 10px grey;
}
</style>
