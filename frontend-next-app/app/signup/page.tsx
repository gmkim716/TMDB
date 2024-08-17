import React from "react";
import "./signup.css";

export default function SignupPage() {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>회원가입</h2>
        <form action="#" method="post">
          <div className="input-group">
            <label htmlFor="username">사용자 이름</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">이메일</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">비밀번호</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">비밀번호 확인</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              required
            />
          </div>
          <button type="submit" className="btn-primary">
            회원가입
          </button>
        </form>
        <p>
          이미 회원이신가요? <a href="login.html">로그인</a>
        </p>
      </div>
    </div>
  );
}
