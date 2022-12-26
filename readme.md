# 2022.12.26. 정태영

※ mpmjs.com 참고문서
https://www.npmjs.com/package/formidable

1. npm i
2. node server.js
3. localhost:3000 접속 <-- 생략 가능
4. POST:: Upload files 선택 후 localhost:3000/upload 전송
5. GET:: localhost:3000/download 전송 시 upload 파일 중 가장 마지막에 upload된 파일 자동 다운로드

-> 파일 형식을 정해주지 않았기 때문에 확장자명 안붙음