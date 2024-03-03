import React, { useRef, useState } from "react";
import api from "../../api/api";
import { avatarResponse } from "../../types/types";

export default function AvatarSelector() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [imageURL, setImageURL] = useState("/images/avatar-placeholder.png");
  const [loading, setLoading] = useState(false);

  function onClickButton() {
    inputRef.current?.click();
  }

  async function onChooseAvatar(e: React.ChangeEvent<HTMLInputElement>) {
    e.stopPropagation();
    e.preventDefault();
    if (e.target.files?.length) {
      try {
        setLoading(true);
        const response = await api.requestChangeAvatar(e.target.files[0]);
        const responseData = response.data as avatarResponse;
        setImageURL(responseData.avatar.replace("5173", "8000"));
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <div className="basis-2/5 flex flex-col items-center justify-around">
      <div className="basis-2/3">
        <img src={imageURL} className="h-32 w-32" />
      </div>

      <input
        type="file"
        id="file"
        className="hidden"
        ref={inputRef}
        onChange={onChooseAvatar}
      />

      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none rounded text-sm px-5 py-2.5 w-2/3 text-center"
        onClick={onClickButton}
        disabled={loading}
      >
        انتخاب عکس پروفایل
      </button>
    </div>
  );
}
