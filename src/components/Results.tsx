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
                    src="https://cdn-icons-png.flaticon.com/512/7626/7626666.png"
                    alt=""
                />
                <span>вы ответили на {indexs} вопроса верно</span>
                <a href="/">начать заново</a>
            </div>
        </Layout>
    );
};

export default Results;
