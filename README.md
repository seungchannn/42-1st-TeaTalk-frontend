<img width="1411" alt="스크린샷 2023-02-17 오후 6 25 50" src="https://user-images.githubusercontent.com/120013855/219605500-b22672c5-2fe2-4c10-b7fc-ec3b95b75b74.png">



# Project : Tea Talk

- 팀명 : Tea Talk

1. 개요
      
      - 오설록 웹페이지를 기반으로한 이커머스 사이트 기능구현 및 디자인 구현

2. 구현항목 및 담당

	- nav, main, productlist (강승찬) : Product Manager
        
	- login, signup, footer, payment (이종혁)
        
	- cart, productdetail(방서빈)
	
3. 적용기술
	- React.js, sass, figma, HTML, JavaScript
	- 협업 및 일정관리 : Git, GitHub, Slack, Trello, Notion

4. 구현기능

	1). login, signup 페이지
	
	https://user-images.githubusercontent.com/120013855/219578399-60d4d35a-2859-430a-a6df-282d67122c3f.mov

	- 정규식을 이용한 pw email 유효성 검사
	- 유저정보가 올바르게 입력되었는지 여부에 따른 버픈 활성화
	- 회원가입 약관 체크박스 구현
	- 약관 상세보기 모달창 구현
	
	2). nav
	
	https://user-images.githubusercontent.com/120013855/219579373-43234574-f4bb-46da-bc9c-427dfb071455.mov
	
	- 상수데이터를 활용하여 nav 구현
	- 카테고리 & 서브카테고리 출력을 이용하여 이중 map함수 이용
	
	3)메인페이지 슬라이드, 아이템 슬라이드
	
	https://user-images.githubusercontent.com/120013855/219580135-909eed10-e7fe-4118-afaa-94e36860f652.mov
	
	https://user-images.githubusercontent.com/120013855/219580195-80da2e92-16e0-498a-8972-384c8ec5d43a.mov

	- 라이브러리를 사용하지 않고 useState를 활용한 슬라이드 구현


	3). 메인페이지 타이머
	
	https://user-images.githubusercontent.com/120013855/219580447-ffb69ea6-73b3-4c9a-99b3-224f66ebed09.mov
	
	- 타이머 기능구현
	
	4). 상품리스트 & 상품상세페이지
	- 동적 라우팅을 이용한 페이지이동및 상품 상세페이지 구현
	
	5). 카트 페이지
	- 상품 증감기능 구현
	- fetch를 이용한 데이터 호출
	
