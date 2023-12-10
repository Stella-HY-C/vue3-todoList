import TodoInput from './components/TodoInput.vue';
<template>
  <!-- vue3같은경우는 div가 필수는 아님 -->
  <TodoHeader />
  <TodoInput @add="addTodoItem" />
  <TodoList :todoItems="todoItems" @remove="removeTodoItem" />
</template>

<script>
import { ref } from "vue";
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";

export default {
  components: { TodoHeader, TodoInput, TodoList },
  setup() {
    // data
    const todoItems = ref([]);

    // methods
    // localstorage에 있는 값들을 출력
    const fetchTodos = () => {
      // 하나의 배열로 반환해주기
      const result = [];
      for (let i = 0; i < localStorage.length; i++) {
        const todoItem = localStorage.key(i);
        // todoItems.value.push(todoItem);
        result.push(todoItem);
      }

      return result;
    };

    todoItems.value = fetchTodos();

    const addTodoItem = (todo) => {
      localStorage.setItem(todo, todo);
      todoItems.value.push(todo);
    };

    const removeTodoItem = (item, index) => {
      todoItems.value.splice(index, 1);
      localStorage.removeItem(item);
    };

    fetchTodos();

    return { todoItems, addTodoItem, removeTodoItem };
  },

  /* 여기서 methods로 사용해도 가능하다 
      >> 무조건 setup내에서만 function으로 사용해야하는것이 아닌 적절히 섞어서 써도 된다
      >> setup은 setup에서 사용했을 때 이점이 있을 코드들에만 셋업으로 옮겨오는게 가장 쉬운 마이그레이션으로 된다
      >> 컴포지션 스타일로 바꿨을때 이점이 있는 경우에만 setup내부에 사용을 하는것이 가장 좋다(마이그레이션시)
  */
};
</script>

<style lang="scss" scoped></style>
