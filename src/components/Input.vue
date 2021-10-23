<template>
  <div class="create-todo" :class="{mask:createTodoFields}">
    <div class="button">
      <div @click="focusInput"  class="todo-create-button"></div>
    </div>
    <transition name="slide-up-button">
      <div class="create-todo-fields" v-show="createTodoFields">
        <form class="create-txt-todo" @submit.prevent="addTodo();" v-cloak>
          <input class="create-txt-fields" type="text" placeholder="新しいタスク" ref="focusThis" v-model="createTodoItem" >
          <input class="submit-btn" type="submit" value="保存" @click="createTodoFields = !createTodoFields;">
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      createTodoItem: [],
      todos: [],
      createTodoFields: false,
    }
  },
   methods: {
    addTodo() {
      let item = {
        title: this.createTodoItem,
        isDone: false,
        id: this.$route.params.id
      };
      this.todos.push(item);
      this.createTodoItem = '';
      this.$emit('my-click', this.todos);
    },
    focusInput() {
      this.createTodoFields  = !this.createTodoFields;
      this.$nextTick(() => this.$refs.focusThis.focus());
    },
  }
}
</script>

<style scoped>
  .button {
    position: relative;
  }

  .todo-create-button {
    position: absolute;
    left: 0;
    right: 0;
    top: 30px;
    margin: auto;
    width: 80px;
    height: 80px;
    background: #fff;
    box-shadow: 2px 2px 10px grey;
    cursor: pointer;
    border-radius: 50%;
  }

  .todo-create-button::before {
    content: '';
    position: absolute;
    width: 40px;
    border-top: 6px solid skyblue;
    right: 0;
    left: 0;
    top: 46%;
    margin: auto;
  }

  .todo-create-button::after {
    content: '';
    position: absolute;
    height: 40px;
    border-right: 6px solid tomato;
    right: 50%;
    left: 50%;
    transform: translate(-50%, 53%);
    margin: auto;
  }

  .create-todo-fields {
    background: #fff;
    transform: translate(0px, 400px);
    z-index: 10;
    height: 45vh;
    border-radius: 15px;
    padding: 2rem;
  }

  .slide-up-button-enter-active, .slide-up-leave-active {
    transform: translate(0, 400px);
    transition: transform 245ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }

  .slide-up-button-enter, .slide-up-trigger-leave-to {
    transform: translateY(100vh);
  }

  .mask {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.4);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 100;
}





</style>