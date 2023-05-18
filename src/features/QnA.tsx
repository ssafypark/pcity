import React, { useEffect, useState } from "react";
import SelectBox from "components/SelectBox";
import { QnAData } from "asset/QnAData";
import "css/QnA.css";
import { useMemo } from "react";

const QnA = () => {
    const [selectDetailOne, setSelectDetailOne] = useState<string>("항목을 선택해 주세요");
    const [selectDetailTwo, setSelectDetailTwo] = useState<string>("항목을 선택해 주세요");
    const mCode = ["항목을 선택해 주세요", "HOTEL PARADISE", "HOTEL ART PARADISO", "CASINO", "SPA CIMER", "THEME PARK WONDERBOX", "CLUB CHROMA", "SHOPPING PLAZA", "ART GALLERY ART SPACE", "STUDIO PARADISE", "GROUPS & WEDDINGS", "MEMBERSHIP"];
    const dCode = useMemo(() => {
        const list = QnAData.find((val) => val.place == selectDetailOne);
        if (typeof list != "undefined") {
            const detail = [...list.detail];
            detail.unshift("항목을 선택해 주세요");
            return detail;
        }
        else return ["항목을 선택해 주세요"];
    }, [selectDetailOne]);
    const radioArray = ["문의", "칭찬", "불만", "제안", "기타"];
    const [phoneNumber, setPhoneNumber] = useState({ first: "", second: "", third: "" });

    const onChangeInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        const regex = /[^0-9]/; // 0-9를 제외한 모든 문자
        setPhoneNumber({
            ...phoneNumber,
            [name]: value.replace(regex, "") // 조건에 맞다면 않다면 공백
        });
    };

    return (
        <>
            <br />
            <div className="one">
                <span>시설</span>
                <SelectBox selectList={mCode} selected={selectDetailOne} setSelected={setSelectDetailOne}></SelectBox>
            </div>
            <div className="one">
                <span>세부 시설</span>
                <SelectBox selectList={dCode} selected={selectDetailTwo} setSelected={setSelectDetailTwo}></SelectBox>
            </div>
            <div className="questionType">
                <span>질문 유형</span>
                <div>
                    {radioArray.map((item, idx) => (
                        <label className="radioBtn" key={idx}>
                            <input type="radio" name="radio" value={item} />
                            <span>{item}</span>
                        </label>
                    ))}
                </div>
            </div>
            <div className="contents">
                <div className="element">
                    <span>제목</span>
                    <input className="outlineStyle" type="text" />
                </div>
                <div className="element">
                    <span>내용</span>
                    <textarea className="textarea outlineStyle" />
                </div>
                <div className="element">
                    <span>이름</span>
                    <input className="outlineStyle" type="text" />
                </div>
                <div className="element">
                    <span>휴대폰 번호</span>
                    <div className="inp">
                        <input className="outlineStyle" type="text" name="first" maxLength={3} onChange={(e) => onChangeInfo(e)} value={phoneNumber.first} />
                        <input className="outlineStyle" type="text" name="second" maxLength={4} onChange={(e) => onChangeInfo(e)} value={phoneNumber.second} />
                        <input className="outlineStyle" type="text" name="third" maxLength={4} onChange={(e) => onChangeInfo(e)} value={phoneNumber.third} />
                    </div>
                </div>
                <div className="element">
                    <span>이메일 주소</span>
                    <div className="inp">
                        <input className="outlineStyle" type="text" placeholder="Paradise" />
                        <input className="outlineStyle" type="text" placeholder="@paradise.com" />
                    </div>
                </div>
            </div >
            <button className="save">등록</button>
        </>
    );
};

export default QnA;