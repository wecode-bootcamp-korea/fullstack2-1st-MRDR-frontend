#  :shopping:	모른다르 MRDR

<br/>

## :white_check_mark: 프로젝트 개요

모른다르 프로젝트는 라이프 & 스포츠 의류 쇼핑몰을 구현한 프로젝트로, 이커머스가 가진 기본적인 기능(회원가입, 상품 정보 전달, 장바구니 등)을 구현한 프로젝트입니다.
[안다르](https://andar.co.kr/index.html) 사이트를 학습 목적으로 클론한 사이트입니다.

- 기간 : 2021.10.01 ~ 2021.10.22 (마지막 한 주 - 리팩토링)
- 인원 : 5명
- [프론트엔드 GitHub Repository](https://github.com/wecode-bootcamp-korea/fullstack2-1st-MRDR-frontend)
- [백엔드 GitHub Repository](https://github.com/wecode-bootcamp-korea/fullstack2-1st-MRDR-backend)

<br/>

## :white_check_mark:	 전체적인 구조

<img src="https://user-images.githubusercontent.com/88504900/137711524-56bc57a5-21ec-4feb-9fea-ec4b8aa3cda5.jpeg" width="90%">

:exclamation: CI / CD 는 구현되지 않아 점선으로 처리하였습니다.

<br/>

## :white_check_mark:	 사용 기술 및 개발 환경

|       분류       |   사용 언어 혹은 기술   |
| :--------------: | :---------------------: |
|       언어       |       **JavaScript**        |
|       프론트엔드 프레임워크       |       **React**        |
|   런타임 환경    |         **Node.js**         |
| 웹 앱 프레임워크 |         **Express**         |
|   데이터베이스   |          **MySQL**          |
|  ORM 프레임워크  |         **Prisma**          |
|   버전관리 툴    |       **Git, Github**       |
|       IDE        |   **Visual Studio Code**    |
| 커뮤니케이션       | **Slack, Notion**           |
|      그 외       | **ESLint, Prettier, Babel** |

<br/>

## :white_check_mark: 프로젝트 목표 & 주요 관심사

### :grey_exclamation: 공통사항

* **Routing** React Router를 활용한 라우팅 (동적 라우팅 포함)
* **컨포넌트별 State 관리** 프론트엔드에서만 바뀌는 내용은 state로 관리
* **fetch** 백엔드로 보내거나 가져올 정보 있을시 fetch 함수 사용

<br/>

### :grey_exclamation: 브랜치 관리 및 PR merge

- Git flow 전략을 간소화하여 **main(master) / feature별 구현 branch** 로 나누어 작업하였습니다.

- feature 구현 branch Naming Convention

   `feature/[type]/[feature-name]`

  - type
    - add : 새로운 기능 추가
    - fix : 기존 기능 혹은 버그 수정
  - feature-name : 해당 기능의 간단한 이름

- 구현해야할 기능을 분리하여 이슈 단위로 분류하여 깃헙 리포지토리에 이슈로 작성하였고, 각 이슈는 해당하는 PR에 연결되며, 각 PR은 feature branch 하나와 연결됩니다.

- PR의 체크 리스트가 완료되고, 두 명 이상에게 Peer Review가 approve 됐을 때만 main에 merge 할 수 있습니다.

<br/>

## :white_check_mark:	 Features

### 유저 관련

- 회원가입 페이지
- 로그인 페이지
- 장바구니 페이지

### 상품 관련

- 메인 페이지
- 상품 리스트 페이지
- 상품 상세 페이지

### 그 외

- Navigation Bar
- Footer
