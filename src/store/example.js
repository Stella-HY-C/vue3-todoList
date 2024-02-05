const Store = {
  // 전역상태를 뜻한다. 객체를 반환하는 형태로 구현
  state: () => ({}),

  // state를 변경할 메소드를 선언하는곳
  // Vue 컴포넌트에서 methods와 같다.
  mutations: {},

  // mutations을 '비동기적'으로 실행시키는 역할
  actions: {},

  // 전역 상태 값을 원하는 포맷이나 타입으로 가공하여 참조할 수 있도록 정의하는 곳
  getters: {},
};

// Vuex는 아래와 같은 순서로 데이터를 단방향으로 관리.
// 각 컴포넌트(dispatch) -> actions(commit) -> mutations(state) -> state -> 모든 컴포넌트에서 사용
export default Store;
