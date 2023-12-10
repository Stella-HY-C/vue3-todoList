<template>
  <div>
    <input type="text" v-model="todoInput" />
    <button @click="addTodo">추가</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup(props, context) {
    // setup은 props와 context를 반환한다
    // props는 프롭스의 속성을 의미, context는 이벤트를 발생시킬수 있는 emit, attrs, slots, expose등을 가진 context객체를 의미
    // data
    const todoInput = ref(""); // 기본값 지정

    //methods
    const addTodo = () => {
      const todo = todoInput.value;
      //   localStorage.setItem(todo, todo);
      context.emit("add", todo);
      clearTodo();
    };

    const clearTodo = () => {
      todoInput.value = "";
    };

    return { todoInput, addTodo }; // setup에서 지정해준 값들은 무조건 return을 해줘야한다
  },
};
</script>

<style lang="scss" scoped></style>
