import React from "react";
import "css/SelectBox.css";

interface selectBoxType {
    selectList: string[];
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const SelectBox = ({ selectList, selected, setSelected }: selectBoxType) => {
    return (
        <select className="selectbox" onChange={(e) => setSelected(e.target.value)} value={selected}>
            {selectList.map((item, idx) => (
                <option value={item} key={idx}>{item}</option>
            ))}
        </select>
    );
};

export default SelectBox;

// 인터페이스 부분
// onChange 부분 e.target.value / value / 저기 인자값이 타입스크립트 형식