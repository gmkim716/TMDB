"use client";

import React from "react";
import styles from "./Contact.module.css";
import InquireByEmailButton from "@/components/Contact/\bInquireByEmailButton";

export default function ContactPage() {
  const developerInfo = {
    name: "김경민",
    job: "풀스택 개발자",
    email: "gmkim716@gmail.com",
  };

  const projectInfo = {
    techStack: ["Next14(app router)", "TypeScript", "Spring", "MySQL"],
    recentChanges: [
      {
        // date: "2024-08-01",
        // description: "Marvelous Chronicles v2.0 출시 - 다크 모드 지원 추가",
      },
      {
        date: "2024-08-20",
        description: "Component 구조 고민",
      },
    ], // 주요 변경사항
  };

  return (
    <main className={styles.main}>
      <h1>Contact</h1>

      <div className={styles.section}>
        <h2>개발자 정보</h2>
        <div className={styles.developerInfo}>
          <p>이름: {developerInfo.name}</p>
          <p>직업: {developerInfo.job}</p>
          <p>Email: {developerInfo.email}</p>{" "}
          <p>Github: {developerInfo.email}</p>
          <InquireByEmailButton
            email={developerInfo.email}
            subject="Marvelous Chronicles 문의하기"
          />
        </div>
      </div>

      <div className={styles.section}>
        <h2>프로젝트 정보</h2>
        <div className={styles.projectInfo}>
          <h3>기술 스택</h3>
          <ul>
            {projectInfo.techStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <h3>주요 변경사항</h3>
          <ul>
            {projectInfo.recentChanges.map((change, index) => (
              <li key={index}>
                <strong>{change.date}:</strong> {change.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
