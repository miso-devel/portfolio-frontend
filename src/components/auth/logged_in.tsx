import { useEffect } from "react";
import { LoggedInCheck } from "../../axios/userActions";
export const Logged_in = () => {
  const LoginChecker = () => {
    LoggedInCheck();
  };
  useEffect(() => {
    console.log("s");
    LoggedInCheck();
  });
  return (
    <div className="text-center p-10 m-10 border-2">
      <p>ログインチェック</p>
      <button
        onClick={() => {
          LoginChecker();
        }}
      >
        ボタン
      </button>
    </div>
  );
};
