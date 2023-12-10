<template>
  <ul>
    <li v-for="(item, index) in todoItems" :key="index">
      <span>{{ item }}</span>
      <button @click="removeTodo(item, index)">삭제</button>
    </li>
  </ul>
</template>

<script>
// import { ref } from "vue";

export default {
  props: ["todoItems"],
  setup(props, context) {
    // data
    // const items = ref([]);
    //methods
    // // localstorage에 있는 값들을 출력
    // const fetchTodos = () => {
    //   for (let i = 0; i < localStorage.length; i++) {
    //     const todoItem = localStorage.key(i);
    //     items.value.push(todoItem);
    //   }
    // };
    // fetchTodos();
    const removeTodo = (item, index) => {
      context.emit("remove", item, index);
    };
    return { removeTodo }; // items, fetchTodos
  },
};
</script>

<style lang="scss" scoped></style>
