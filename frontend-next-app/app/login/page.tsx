import React from "react";
import "./login.css";

export default function LoginPage() {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>로그인</h2>
        <form action="#" method="post">
          <div className="input-group">
            <label htmlFor="email">이메일</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">비밀번호</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="btn-primary">
            로그인
          </button>
        </form>
        <p>
          아직 회원이 아니신가요? <a href="signup.html">회원가입</a>
        </p>
      </div>
    </div>
  );
}
