<template>
  <div id="home">
    <ul>
      <transition-group name="list-complete">
        <li v-for="(todoList, index) in todoLists" :key="todoList.id">
          <form action="#" class="form">
            <input
              type="checkbox"
              :id="index"
              v-model="todoList.isDone"
              @change="addCompTodos(index)"
            />
            <label :for="index" class="list-complete-item">
              {{ todoList.title }}
            </label>
            <span class="icon-field" @click="deleteTodo(index)"
              ><font-awesome-icon class="icon" icon="trash-alt"
            /></span>
          </form>
        </li>
      </transition-group>
    </ul>
    <hr />
    <ul class="complete-todos">
      <div class="complete-todo" :class="{ 'comp-active': isShow }">
        <span @click="isShow = !isShow" v-show="compTitle"
          >完了({{ compTodos.length }}件)</span
        >
        <li
          v-for="(compTodo, index) in compTodos"
          :key="index"
          v-show="isShow"
          :class="{ 'comp-title': compTitle }"
        >
          <div class="comp-todo-title">
            <font-awesome-icon class="icon" icon="check" />
            <span @click="addTodoLists(index)">{{ compTodo.title }}</span>
            <span class="icon-field" @click="deleteCompTodo(index)"
              ><font-awesome-icon class="icon" icon="trash-alt"
            /></span>
          </div>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["todoLists"],
  data() {
    return {
      compTodos: [],
      isShow: false,
      compTitle: false,
    };
  },

  methods: {
    addCompTodos(index) {
      if (this.todoLists[index].isDone === true) {
        let item = {
          title: this.todoLists[index].title,
          isDone: this.todoLists[index].isDone,
          id: this.todoLists[index].id,
        };
        this.compTodos.push(item);
        this.todoLists.splice(index, 1);
      }
      if (this.compTodos.length > 0) {
        this.compTitle = true;
      } else {
        false;
      }
    },
    deleteTodo(index) {
      if (confirm("削除しますか？")) {
        this.todoLists.splice(index, 1);
      }
    },
    deleteCompTodo(index) {
      if (confirm("完全に削除しますか")) {
        this.compTodos.splice(index, 1);
      }
    },

    addTodoLists(index) {
      if (confirm("未完了にしますか？")) {
        this.compTodos[index].isDone = false;
        this.todoLists.push(this.compTodos[index]);
        this.compTodos.splice(index, 1);
      }
    },
  },
};
</script>

<style scoped>
#home {
  padding: 3rem;
}

ul {
  padding: 0;
}

li {
  list-style: none;
  font-size: 32px;
}

hr {
  border: 1px thin grey;
  margin: 0;
}

input[type="checkbox"] {
  display: none;
}

input[type="checkbox"] + label {
  cursor: pointer;
  display: inline-block;
  position: relative;
  padding-left: 25px;
  padding-right: 10px;
  user-select: none;
}

input[type="checkbox"] + label::before {
  content: "";
  position: absolute;
  display: block;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  left: 0;
  top: 50%;
  border: 1px solid;
  border-radius: 50%;
  border-color: grey;
  background-color: #fff;
}

input[type="checkbox"]:checked + label::after {
  content: "";
  position: absolute;
  box-sizing: border-box;
  width: 20px;
  height: 9px;
  margin-top: -9px;
  top: 50%;
  left: 3px;
  transform: rotate(-45deg);
  border-bottom: 3px solid;
  border-left: 3px solid;
  border-color: #3366ff;
}

.icon {
  font-size: 20px;
  vertical-align: baseline;
  color: rgba(0, 0, 0, 0.5);
}

.icon-field {
  margin-left: auto;
  cursor: pointer;
}

.form {
  display: flex;
}

.complete-todos {
  position: relative;
}

.complete-todo.comp-active > span::after {
  transform: rotate(135deg);
}

.complete-todo > span {
  font-size: 20px;
  user-select: none;
  cursor: pointer;
}

.complete-todo > span::after {
  content: "";
  border-right: 3px solid transparent;
  border-left: 3px solid #000;
  border-top: 3px solid transparent;
  border-bottom: 3px solid #000;
  transform: rotate(-45deg);
  width: 10px;
  height: 10px;
  display: inline-block;
  position: absolute;
  right: 10px;
}

.comp-todo-title {
  display: flex;
}

.comp-todo-title > .icon {
  align-items: center;
  margin-right: 10px;
  margin-top: 13px;
}

.comp-title {
  text-decoration: line-through;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);
}

.list-complete-enter-active {
  transition: all 0.3s ease;
}

.list-complete-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.list-complete-enter {
  transform: translateX(-10px);
  opacity: 0;
}

.list-complete-leave-to {
  opacity: 0;
}
</style>
