import { Image } from "antd";
import { FC } from "react";
import "./Results.css";
import Layout from "./Layout";
interface Props {
    indexs: number;
}

const Results: FC<Props> = ({ indexs }) => {
    return (
        <Layout>
            <div className="res">
                <Image
                    className="img"
                    src="/src/assets/img/resultsIcon.png"
                    alt=""
                />
                <span>вы ответили на {indexs} вопроса верно</span>
                <a href="/">начать заново</a>
            </div>
        </Layout>
    );
};

export default Results;
