# coinman
**내가 찾는 코인은 가격이 얼마나 될까? Discord Bot**

**지원되는 암호화폐!**
<ul>
  <li>Bitcoin (BTC)</li>
  <li>Dogecoin (DOGE)</li>
  <li>Ethereum (ETH)</li>
  <li>Litecoin (LTC)</li>
  <li>Ripple (XRP)</li>
  
</ul>

**discordjs-modern-base-kr**를 템플릿으로 사용하여 만들었습니다.

상황에 따라 `개발 모드`와 `프로덕션 모드` 로 실행할 수 있습니다.

> :warning: **경고!**\
> 꼭, 본 `README.md` 파일을 끝까지 읽고 진행해 주세요.

<br />

## 프로덕션 모드 사용법
개발이 완료된 경우 `프로덕션 모드`를 통해 사용자에게 서브할 수 있습니다.

### 1. 모드 전환
`.env` 파일에서 `ENVIROMENT_DEV_GUILD` 값의 줄을 주석처리 하거나 삭제해 `프로덕션` 모드로 전환 시킬 수 있습니다.

### 2. 명령어 등록
`개발 모드`와 달리 `프로덕션 모드`에서는 명령어를 따로 등록해주어야 합니다.

> :warning: **경고!**\
> 일일 등록 제한 수가 있으며 적용까지 매우 긴 시간이 걸릴 수 있습니다.

다음 명령어를 입력해 등록을 진행합니다:
```
npm run regist 혹은 yarn regist
```

### 3. 빌드
다음 명령어를 통해 빌드를 진행합니다:
```
npm run build 혹은 yarn build
```

### 4. 실행
다음 명령어를 통해 봇을 실행합니다:
```
npm start 혹은 yarn start
```
