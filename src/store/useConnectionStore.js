import { defineStore } from "pinia";

export const useConnectionStore = defineStore("useConnectionStore", {
  // arrow function recommended for full type inference

  state: () => {
    return {
      // all these properties will have their type inferred automatically
      count: 0,
      name: "Dirk",
      isAdmin: true,
      items: ["kaas"],
      hasChanged: true,
      $reset() {
        count.value = 0;
      },
    };
  },
  getters: {
    // type is automatically inferred because we are not using `this`
    doubleCount: (state) => state.count * 2,
    // here we need to add the type ourselves (using JSDoc in JS). We can also
    // use this to document the getter
    /**
     * Returns the count value times two plus one.
     *
     * @returns {number}
     */
    doubleCountPlusOne() {
      // autocompletion ✨
      return this.doubleCount + 1;
    },
  },
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    increment() {
      this.count++;
    },
    randomizeCounter() {
      this.count = Math.round(100 * Math.random());
    },
  },
});
