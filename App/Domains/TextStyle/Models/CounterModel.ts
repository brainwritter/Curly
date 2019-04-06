import { createModel } from '@rematch/core';

export const counterModel = createModel({
  state: {
    counter: 0,
  },
  reducers: {
    increment: (state) => ({
      counter: state.counter + 1,
    }),
    decrement: (state) => ({
      counter: state.counter - 1,
    }),
  },
  effects: {
    async incrementAsync() {
      await new Promise((resolve) => setTimeout(resolve, 500));
      this.increment();
    },
    async decrementAsync() {
      await new Promise((resolve) => setTimeout(resolve, 500));
      this.decrement();
    },
  },
});
