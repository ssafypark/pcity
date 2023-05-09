import React, { useEffect, useState } from "react";
import { data } from "asset/data";
import SelectBox from "components/SelectBox";
import SearchInput from "components/SearchInput";
import "css/FAQ.css";
import Accordion from "components/Accordion";

interface faqType {
    changeTitle: () => void;
}

const FAQ = ({ changeTitle }: faqType) => {
    const mCode = [
        "장소를 선택해 주세요",
        "PARADISE CITY",
        "HOTEL PARADISE",
        "HOTEL ART PARADISO",
        "CASINO",
        "CIMER",
        "CHROMA",
        "WONDERBOX",
        "PLAZA",
        "PARADISE ART SPACE",
        "STUDIO PARADISE",
        "GROUP & WEDDINGS",
        "MEMBERSHIP",
    ];
    const [selectFacility, setSelectFacility] = useState<string>("장소를 선택해 주세요");
    const [question, setQuestion] = useState<any[]>(data);
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        if (selectFacility == "장소를 선택해 주세요") {
            setQuestion(data);
        } else {
            setQuestion(data.filter((val) => val.place == selectFacility));
        }
    }, [selectFacility]);

    return (
        <>
            <p className="first">
                자주 문의하는 질문에 대한 답변을<br />
                확인하실 수 있습니다
            </p>
            <SearchInput></SearchInput>
            <SelectBox selectList={mCode} selected={selectFacility} setSelected={setSelectFacility}></SelectBox>
            <section className="info">
                {question.map((item, idx) => (
                    <Accordion key={idx} {...item} index={index} setIndex={setIndex} idx={idx}></Accordion>
                ))}
            </section>
            <div className="bottom">
                원하는 답변을 찾지 못하셨나요?<br />
                <span onClick={() => changeTitle()}>Q&A</span>를 통해 질문을 해 주시면 빠른 시간 안에 답변을<br />
                드리도록 하겠습니다.(전화 상담: 1833-8855)
            </div>
        </>
    );
};

export default FAQ;