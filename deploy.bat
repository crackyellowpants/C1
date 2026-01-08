# 1. 현재 폴더를 Git 저장소로 초기화
git init

# 2. 모든 파일을 업로드 대기 상태(Stage)로 추가
git add .

# 3. 변경 사항 기록 (메시지는 자유롭게 변경 가능)
git commit -m "Initial commit: Cyberpunk Archive App"

# 4. 브랜치 이름을 main으로 변경
git branch -M main

# 5. 내 컴퓨터와 GitHub 리포지토리 연결 (사용자 이름과 리포지토리 이름 확인 필수)
git remote add origin https://github.com/사용자이름/리포지토리이름.git

# 6. GitHub로 코드 전송
git push -u origin main