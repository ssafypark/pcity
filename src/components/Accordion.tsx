import React, { useState } from "react";
import "css/Accordion.css";

interface accordionType {
    place: string;
    category: string;
    title: string;
    info: string;
    idx: number;
    index: number;
    setIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Accordion = (props: accordionType) => {
    const { place, category, title, info, idx, index, setIndex } = props;
    const [toggle, setToggle] = useState<boolean>(false);
    const onClickShow = (idx: number) => {
        setToggle((prev) => !prev);
        setIndex(idx);
    }
    return (
        <article className="question" onClick={() => onClickShow(idx)}>
            <header>
                <div>
                    <small>{`[${place} > ${category}]`}</small>
                    <span><img src="https://www.p-city.com/mobilePub/static/images/common/icon/icon_qa.png" alt="Q" /> {title}</span>
                </div>

                <button className="btn">
                    {!!toggle && idx === index ? "△" : "▼"}
                </button>
            </header>
            {!!toggle && idx === index && <p className="infoText">A {info}</p>}
        </article>
    );
};

export default Accordion;