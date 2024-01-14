
# 24.01.01 
Router 설치시 $ npm i react-router-dom@5.3.0
Router ver.5와 ver.6 사용법 차이 있음

# 24.01.14 
Publishing
1. $ npm i gh-pages 실행
    => github pages에 업로드하게 만들어주는 라이브러리
2. package.json에서 아래항목추가
    "hompage": "https://rookieyuna.github.io/my-movie-app-v1" ($git remote -v로 확인가능)
    "scripts" : {
        .....,
        "deploy": "gh-pages -d build",
        "predeploy": "npm run build"
    } 
    $ npm run deploy를 하면 predeploy가 먼저 실행됨 
    (퍼블리싱전 .build 폴더를 만드는 build작업 필요)
3. 실행후 홈페이지 접속 / 수정후 반영 원하면 $ npm run deploy 실행 (업데이트가 좀 늦음)

* React Router 6버전 이상 설치하고 빈화면 나오는 경우
=> Route 컴포넌트 path경로앞에 process.env.PUBLIC_URL추가
    (ex) Route path = {$`{process.env.PUBLIC_URL}/`}
=> <BrowserRouter> 속성값  basename={process.env.PUBLIC_URL} 추가