# React TodoList Best Practice

## 실행 방법

```bash
$ npm install
$ npm start
```

## 커밋 규칙

개발하시기 전에

```bash
$ npm run prepare
```

를 통해 `husky` 설치해주세요!

기본적인 커밋 규칙은 다음 가이드를 따릅니다. [Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)

## 협업 방법

<div>
  <img src="https://user-images.githubusercontent.com/62709718/208821813-5f880759-64e4-46d4-8d2f-9721d231f4ae.png" width="200px;" />
</div>

디스코드 음성 채널을 통해 회의를 진행하였습니다. 또한 각 세션별 문서를 organization 아래 [docs](https://github.com/wanted-preonboarding-fe-internship-8th/docs)로 관리하였습니다.

## 개발 과정

- [1. 프로젝트 개발 환경 세팅](https://github.com/wanted-preonboarding-fe-internship-8th/todolist-best-practice/wiki/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B0%9C%EB%B0%9C-%ED%99%98%EA%B2%BD-%EC%84%B8%ED%8C%85)
- [2.]()
- [3.]()
- [4.]()

## 팀원

<table>
  <tr>
    <td align="center">
      <img src="https://user-images.githubusercontent.com/62709718/208676194-c22dc8af-6f06-4614-b467-6fa1dcd39e9b.png" width="100px;" alt=""/>
    </td>
    <td align="center">
      <img src="https://user-images.githubusercontent.com/62709718/208676156-350f5e57-7568-497a-ba32-cf7f849ef688.png" width="100px;" alt=""/>
    </td>
    <td align="center">
      <img src="https://user-images.githubusercontent.com/62709718/208676069-16f11acd-8447-4d72-ab0b-f6e074373dea.png" width="100px;" alt=""/>
    </td>    
    <td align="center">
      <img src="https://user-images.githubusercontent.com/62709718/208676001-b838be17-a6da-4954-8382-7b537a359f2a.png" width="100px;" alt=""/>
    </td>
    <td align="center">
      <img src="https://user-images.githubusercontent.com/62709718/208675953-3dbf10de-ed57-4b9a-9a5a-903dd5b8e708.png" width="100px;" alt=""/>
    </td>
    <td align="center">
      <img src="https://user-images.githubusercontent.com/62709718/208675588-1fc2c6ec-0a10-4496-b7de-39cfbfa5e7ab.png" width="100px;" alt=""/>
    </td>
  </tr>
  <tr>    
    <td align="center">
      <a href="https://github.com/dahui-sharon-kim">
        <div>dahui-sharon-kim</div>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/jong-k">
        <div>jong-k</div>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Duck-98">
        <div>Duck-98</div>
      </a>
    </td>    
    <td align="center">
      <a href="https://github.com/shinwonse">
        <div>shinwonse</div>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/abcabcp">
        <div>abcabcp</div>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/dong53358">
        <div>dong53358</div>
      </a>
    </td>
  </tr>
</table>

## 공통 컴포넌트

- Best: **_슬기 님_**

### 선정 이유

- Atomic Design Pattern
  - 아토믹 디자인 패턴을 도입해 공통적으로 사용되는 컴포넌트 `Button`, `Input`, `Modal` 등의 재사용성을 높였습니다.

### 코드 구현

- src/components/common 하위에 컴포넌트를 모두 넣었습니다.
- `onClick`, `onChange` 등의 이벤트에 사용되는 함수를 `props`로 전달받아 사용합니다.
- `className`, `text` 등을 `props`로 전달받아 사용합니다.
- 공통 컴포넌트는 별도의 css 모듈을 두지 않고 css-in-js로 구현했습니다.
