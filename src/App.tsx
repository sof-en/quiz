import { FC, useState } from "react";
import "./App.css";
import Results from "./components/Results";
import Qustion from "./components/Qustion";
import questionData from "./config";

const App: FC = () => {
    const [step, setStep] = useState<number>(0);
    const [indexs, setIndexs] = useState<number>(0);
    const question = questionData[step];
    const selectQuestion = (index: number): void => {
        setStep(step + 1);
        if (index === question.current) {
            setIndexs(indexs + 1);
        }
    };
    return (
        <div className="App">
            {step < questionData.length ? (
                <Qustion
                    question={question}
                    selectQuestion={selectQuestion}
                    step={step}
                />
            ) : (
                <Results indexs={indexs} />
            )}
        </div>
    );
};

export default App;
