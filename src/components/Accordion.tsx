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
                    <span><img className="qnaImg" src="https://user-images.githubusercontent.com/99133426/237010161-772469ed-4f2c-4577-9ba6-14f1dc96f0b1.png" alt="Q" /> {title}</span>
                </div>

                <button className="btn">
                    {!!toggle && idx === index ? <img src="https://user-images.githubusercontent.com/99133426/237014642-9addd6f1-16ee-4937-a52d-5253956cf732.png" alt="아래 화살표" /> : <img src="https://user-images.githubusercontent.com/99133426/237014514-38ae2703-591c-4176-8ad6-94eebb6c042f.png" alt="위 화살표" />}
                </button>
            </header>
            {!!toggle && idx === index && <p className="infoText"><img className="qnaImg" src="https://user-images.githubusercontent.com/99133426/237010192-5da68251-7763-4839-84da-7aeaff71a8d7.png" alt="A" /> {info}</p>}
        </article>
    );
};

export default Accordion;