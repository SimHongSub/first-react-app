import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  /* 렌더링될 때마다 실행 */
  /*useEffect(() => {
    console.log("렌더링이 완료되었습니다!");
    console.log({
      name,
      nickname,
    });
  });*/

  /* 마운트될 때만 실행 */
  /*useEffect(() => {
    console.log("마운트될 때만 실행됩니다.");
  }, []);*/

  /* 특정 값이 업데이트될 때만 실행 */
  /*useEffect(() => {
    console.log(name);
  }, [name]);*/

  /* 뒷정리 함수 - 언마운트되기 전, 업데이트되기 직전에 실행 */
  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  }, [name]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <b>이름:</b> {name}
      </div>
      <div>
        <b>닉네임:</b> {nickname}
      </div>
    </div>
  );
};

export default Info;
