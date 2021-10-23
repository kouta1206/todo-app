<template>
  <div id="app">
    <header class="header">
      <TodoList @my-click="todosTitles = $event"/>
      <Input @my-click="todos = $event" :todos-titel="todosTitles"></Input>
    </header>

    <nav style="padding-top: 3rem; font-size: 2rem;">
      <router-link style="margin-right: 10px; text-decoration:none;"  :to="{name: 'detail', params: {id: todosTitle.id}}" v-for="(todosTitle,index) in todosTitles" :key="index" >
        {{ todosTitle.title }}
      </router-link>
      <hr>
    </nav>
 <router-view :todo-list="todos" :todos-title="todosTitles" >
 </router-view>
  </div>
</template>

<script>
import Input from "./components/Input";
import TodoList from "./components/TodoList.vue";
export default {
  components: {
    Input,
    TodoList,
  },
  data() {
    return {
      number: '',
      todos: '',
      todosTitles: [],
    }
  },
}

</script>

<style>
  body {
    padding: 0;
    margin: 0;
  }
  .header {
    position: relative;
    height: 10vh;
    background-color: rgb(18,185,129);
    box-shadow: 2px 2px 10px grey;
  }
</style>
