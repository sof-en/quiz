import { FC } from "react";
import Layout from "./Layout";
import "./Question.css";
import questionData from "../config";
interface Props {
    selectQuestion: (index: number) => void;
    step: number;
    question: {
        question: string;
        arr: string[];
        current: number;
    };
}

const Qustion: FC<Props> = ({ question, step, selectQuestion }) => {
    let load = (step / questionData.length) * 100;
    return (
        <Layout>
            <div>
                <div style={{ width: `${load}%` }} className="load"></div>
                <span className="ques">{question.question}</span>
                <div className="vari">
                    {question.arr.map((item, index: number) => (
                        <div
                            onClick={() => selectQuestion(index)}
                            key={item}
                            className="vari__v"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Qustion;
