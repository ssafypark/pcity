import React, { useState } from "react";
import styles from "css/SearchInput.module.css";

const SearchInput = () => {
    return (
        <div className={styles.searchInput}>
            <div className={styles.inputBox}>
                <input onFocus={(e) => e.target.placeholder = ''} onBlur={(e) => e.target.placeholder = "검색하실 키워드를 입력하세요"} onKeyDown={(e) => { if (e.code == "Enter") { console.log("검색됨") } }} type="text" placeholder="검색하실 키워드를 입력하세요" />
            </div>
            <button className={styles.imgButton}>
                <img src="https://www.p-city.com/pcPub/static/images/common/btn/btn_input_search.png" alt="검색" />
            </button>
        </div>
    );
};

export default SearchInput;