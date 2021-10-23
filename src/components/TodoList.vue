<template>
  <div class="todo-list" :class="{mask: menuTrigger}" @click="focusInput">
    <div class="todo-menu-trigger"  :class="{active: menuTrigger}" @click="menuTrigger = !menuTrigger">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <transition name="slide-up-trigger">
      <div class="todo-title-fields" v-show="menuTrigger" v-cloak>
        <ul>
          <li v-for="(todoTitle,index) in todosTitle" class="todo-title" :key="index">
            {{ todoTitle.title }}
          </li>
        </ul>
        <div class="create-todo-title">
          <span>＋</span>
          <form @submit.prevent="addTodoTitle">
            <input type="text" ref="focusThis" placeholder="新しいリストを作成" v-model="createTodoTitle">
            <input type="submit" value="作成" @click="menuTrigger = false">
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuTrigger: false,
      createTodoTitle: [],
      todosTitle: [],
      id:1,
    }
  },
  methods: {
    addTodoTitle: function() {
      let item = {
        title: this.createTodoTitle,
        currentTodoTitle: false,
        id: this.id,
      }
      this.id++;
      this.todosTitle.push(item);
      this.createTodoTitle = '';
      this.$emit('my-click', this.todosTitle);
    },

    focusInput: function() {
      this.$nextTick(() => this.$refs.focusThis.focus());
    },
  }
}
</script>

<style>
.mask {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}

.todo-title-fields {

    background: #fff;
    transform: translate(0px, 400px);
    z-index: 10;
    height: 45vh;
    border-radius: 15px;
    padding: 2rem;

}

.todo-menu-trigger,
.todo-menu-trigger span {
  display: inline-block;
  transition: transform .4s;
  box-sizing: border-box;
  position: absolute;
}

.todo-menu-trigger {
  width: 50px;
  height: 44px;
  cursor: pointer;
  padding: 8px;
  margin-left: 5px;
  margin-top: 8px;
  user-select: none;

}

.todo-menu-trigger > span {
  position: relative;
  width: 100%;
  height: 3px;
  background-color: grey;
  border-radius: 4px;
  margin-bottom: 0;
}

.todo-menu-trigger span:nth-of-type(1) {
  top: -10px;
}
.todo-menu-trigger span:nth-of-type(2) {
  top: -20px;

}
.todo-menu-trigger span:nth-of-type(3) {
  bottom: 30px;
}

.todo-menu-trigger.active span:nth-of-type(1) {
  transform: translateY(20px) rotate(-45deg);
}

.todo-menu-trigger.active span:nth-of-type(2) {
  opacity: 0;
}

.todo-menu-trigger.active span:nth-of-type(3) {
  transform: translateY(-8px) rotate(45deg);
}

.slide-up-trigger-enter-active, .slide-up-leave-active {
  transform: translate(0, 400px);
  transition: transform 245ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}

.slide-up-trigger-enter, .slide-up-trigger-leave-to {
  transform: translateY(100vh);
}

.slide-up-button-enter-active, .slide-up-leave-active {
  transform: translate(0, 300px);
  transition: transform 245ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}

.slide-up-button-enter, .slide-up-trigger-leave-to {
  transform: translateY(100vh);
}



</style>