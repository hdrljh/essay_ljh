// 현재 시간을 출력하는 Clock 컴포넌트
function Clock(props) {
  return (
    <div>
      <h1>안녕</h1>
      <h2>현재시간: {new Date().toLocaleDateString()}</h2>
    </div>
  ); //최종적으로 
}

export default Clock;