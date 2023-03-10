import { FormItem } from "./FormItem";

// questionList is the content of Questions.js
// pagesAnswers = {1: {password: userValue, username: userValue}, 2:{postalcode: userValue, state: userValue, street: userValue}}
// step : 1, or 2, or 3
// onPageUpdate is a callback from App.jsx (called when there's changes in the form)

export const MultiStepForm = ({ questionList, pagesAnswers, onPageUpdate, step }) => {
  const updateAnswers = (value, category) => {
    // call prop passed from parent
    onPageUpdate(step, { [category]: value });
  };

  return (
    <div className="text-left">
      {questionList[step - 1].items?.map((item, index) => {
        return (
          <FormItem
            key={`${index}_${item.label}`}
            item={item}
            onChange={updateAnswers}
            answer={pagesAnswers[step] ? pagesAnswers[step][item.key] : null}
          />
        );
      })}
    </div>
  );
};