import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function MainContent() {
  // 필요한 곳에서 useContext() 훅을 사용해 데이터 가져오기
  const { theme, themes, toggleTheme } = useContext(ThemeContext);

  return (  
    <div
      style={{
        width: '100vw',
        height: '100vh',
        padding: '1.5rem',
        // backgroundColor: theme === 'light' ? 'white' : 'black',
        // color: theme === 'light' ? 'black' : 'white'
        backgroundColor: themes[theme].background,
        color: themes[theme].foreground
      }}
    >
      <p>테마 변경이 가능한 웹사이트 입니다.</p>
      <button type="button" onClick={toggleTheme}>테마 변경</button>
    </div>
  );
}

export default MainContent;