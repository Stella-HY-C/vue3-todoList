import Vuex from "vuex";

// 작성한 모듈을 가져오기
import example from "@/store/example";

const store = new Vuex.Store({
  modules: {
    // 키 : 값 형태로 저장됨
    example,
  },
});
export default store;
