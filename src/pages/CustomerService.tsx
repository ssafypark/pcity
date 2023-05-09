import React, { useState } from "react";
import styles from "css/CustomerService.module.css";
import FAQ from "features/FAQ";
import QnA from "features/QnA";

const CustomerService = () => {
  const [currentTab, setCurrentTab] = useState<string>("고객지원");

  const changeTitle = () => {
    setCurrentTab("1 : 1 문의하기");
  }

  return (
    <>
      {/*{currentTab == "FAQ" ? "고객지원" : "1 : 1 문의하기"} */}
      <div className={styles.header}>
        <img src="https://user-images.githubusercontent.com/99133426/235196497-29d8aef5-5ecc-44d2-a1f4-4c5be2cf2b5d.png" alt="뒤로가기" />
        <div>{currentTab}</div>
        <div></div>
      </div>
      <div className={styles.top}>
        <div className={currentTab === "고객지원" ? styles.borderStyle : ""} onClick={() => setCurrentTab("고객지원")}>FAQ</div>
        <div className={styles.wall} />
        <div className={`${styles.qna} ${currentTab === "1 : 1 문의하기" ? styles.borderStyle : ""}`} onClick={() => setCurrentTab("1 : 1 문의하기")}>Q&A</div> {/* 클래스 두개 넣는 방법 */}
        <div className={styles.wall} />
        <div>문의내역</div>
      </div>
      {currentTab == "고객지원" ? <FAQ changeTitle={changeTitle} /> : <QnA />}
    </>
  );
};

export default CustomerService;