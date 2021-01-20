import React, { useReducer, useEffect } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, { name: "", nickname: "" });

  const onChange = (e) => {
    dispatch(e.target);
  };

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
    console.log(state.name);
    return () => {
      console.log("cleanup");
      console.log(state.name);
    };
  }, [state.name]);

  return (
    <div>
      <div>
        <input name="name" value={state.name} onChange={onChange} />
        <input name="nickname" value={state.nickname} onChange={onChange} />
      </div>
      <div>
        <b>이름:</b> {state.name}
      </div>
      <div>
        <b>닉네임:</b> {state.nickname}
      </div>
    </div>
  );
};

export default Info;
