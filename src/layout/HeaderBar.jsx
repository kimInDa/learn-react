import Heading from '@/components/Heading';

function HeaderBar() {
  // 리액트 학습 -> 사용 (필수 JavaScript 언어 구문 독해 및 활용 능력)
  // var mood = '기운차게 시작;
  // 템플릿 리터럴 구문 `오늘도 ${mood}하자!` -> string
  return (
    <header className='p-5 bg-indigo-950 text-indigo-50'>
      <Heading />
    </header>
  );
}

export default HeaderBar;
