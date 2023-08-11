import CryptoJS from "crypto-js";

export const gravatarPath = (name) => {
  // 小文字に変換する
  const lowerCaseString = name.trim().toLowerCase();
  const md5 = CryptoJS.MD5(lowerCaseString).toString();

  return `https://www.gravatar.com/avatar/${md5}/?d=monsterid`;
}
