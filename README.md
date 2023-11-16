# 캐릭터 응원 페이지
좋아하는 아티스트, 캐릭터에게 응원 메시지를 작성하는 앱을 만든다.

다음과 같이 세 가지 branch가 존재한다.
- Props Drilling한 branch
- Context를 사용한 branch
- Redux를 사용한 branch

## Deployment
배포된 사이트는 아래에서 확인이 가능하다. Redux를 사용한 버전으로 배포 되었다.

https://letter-to-zworrior.vercel.app/



## 실행
```bash
yarn run start

# or

npm run start
```

## 화면 및 기능
### 메인 화면
![main.png](public%2Fhelp%2Fmain.png)

- 캐릭터 카드 클릭시 캐릭터 디테일 화면으로 이동
- 하단에는 전체 캐릭터에 대한 메시지 출력
- 메시지 클릭시 상세 메시지 모달 표시

### 캐릭터 상세 화면
![detail.png](public%2Fhelp%2Fdetail.png)

- 해당 캐릭터에게 온 메시지들만 출력한다
- 우측 하단 📝 버튼을 통해 메시지를 작성하는 모달창을 띄울 수 있다

### 메시지
![letter.png](public%2Fhelp%2Fletter.png)
- 캐릭터에게 온 상세 메시지를 출력
- 좌측 하단 버튼을 통해 수정, 삭제를 할 수 있다

### 수정 화면
![edit.png](public%2Fhelp%2Fedit.png)
- 기존 내용 수정시 편지 내용만 수정이 가능하다
- 수정 내용이 없을 경우 아래와 같이 수정 사항이 없다는 팝업이 표시된다
![edit-nochange.gif](public%2Fhelp%2Fedit-nochange.gif)

### 삭제
![delete.gif](public%2Fhelp%2Fdelete.gif)
- 삭제 클릭시 확인 팝업이 한번 더 출력된다
- 팝업에서 한번 더 '네' 버튼을 클릭시 삭제가 된다
- '취소' 버튼을 누르면 아무일도 일어나지 않는다


### 등록
![enroll.gif](public%2Fhelp%2Fenroll.gif)
- 다음과 같은 조건을 지켜서 등록해야 한다
1. 편지 내용이 있어야 한다
2. 보내는 사람의 이름이 있어야 한다
3. 편지 내용은 200자를 넘을 수 없다

