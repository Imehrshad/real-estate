const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isStarted: false,
  step: 0,
  totalStep: 3,
  answers: [
    { id: 0, answersText: ["ورک پرمیت", "ویزای توریستی", "هیچکدام"] },
    { id: 1, answersText: ["ایران", "کانادا", "سایر کشور ها"] },
  ],
  questions: ["وضعیت اقامت یا ویزا", "در کدام کشور درآمد دارید"],
  usersAnswers: [],
};

const questionSlice = createSlice({
  name: "question slice",
  initialState,
  reducers: {
    increaseSteps: (state) => {
      state.step += 1;
    },
    decreaseSteps: (state) => {
      state.step -= 1;
    },
    startQuestion: (state) => {
      state.isStarted = true;
      state.step = 0;
    },
    addAnswer: (state, action) => {
      state.usersAnswers.push(action.payload);
    },
    reset: () => {
      return initialState;
    },
  },
});

export const { increaseSteps, startQuestion, addAnswer, decreaseSteps, reset } =
  questionSlice.actions;
export default questionSlice.reducer;
