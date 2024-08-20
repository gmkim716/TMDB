import React from "react";
import styles from "./Contact.module.css";

interface InquireByEmailButtonProps {
  email: string;
  subject?: string;
}

export default function InquireByEmailButton({
  email,
  subject = "문의하기",
}: InquireByEmailButtonProps) {
  const handleEmailClick = () => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}`;
  };

  return (
    <button className={styles.emailButton} onClick={handleEmailClick}>
      메일로 문의하기
    </button>
  );
}
