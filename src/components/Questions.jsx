"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Questions = () => {
  const state = useSelector((state) => state.question);
  const [answers, setAnswers] = useState([]);
  const [question, setQuestion] = useState("");
  const [selectedItem, setSelectedItem] = useState("");

  const questionFinder = (step) => {
    console.log(step);
    switch (step) {
      case 1:
        setAnswers(state.answers[0].answersText);
        setQuestion(state.questions[0]);
        return;
      case 2:
        setAnswers(state.answers[1].answersText);
        setQuestion(state.questions[1]);
        return;
    }
  };
  useEffect(() => {
    questionFinder(state.step);
  }, [state]);

  return (
    <div className="w-full bg-primaryColor rounded-2xl p-4 flex justify-start items-center gap-5 flex-col">
      <h2>{question}</h2>
      <div className="flex justify-start items-center flex-col gap-4 w-full">
        {answers.map((item, index) => (
          <button
            className={` w-10/12 px-5 py-3 rounded-lg hover:scale-90 transition-transform duration-300 ${
              selectedItem === item
                ? "bg-secondaryColor text-white"
                : "bg-white text-black"
            }`}
            key={index}
            onClick={() => setSelectedItem(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Questions;
