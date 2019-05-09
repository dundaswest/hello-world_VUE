# hello-world

hello

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### TODO

1. 스크롤이 하단에 닿을 때마다 리스트에 추가 기능

- 첫 로딩 후 필터를 적용하지 않고 스크롤해야 추가 리스트를 가져오는 상태
  필터 적용시 '스크롤이 하단에 닿을 때마다 리스트에 추가 기능'이 작동하지 않음

2. Conent 클릭 시 디테일 페이지로 이동, 해당 component render

- vue router 사용 계획

3. 크로스 브라우징

- Safari로 테스트 해봤을 때 위에 1번 기능(스크롤)이 작동하지 않음
- 브라우저마다 기본값이 다를 수 있어 reset.css 사용계획
  See [Configuration Reference](https://cli.vuejs.org/config/).

4. 필터를 모두 다 제거하고 다시 필터를 적용했을 때 리스트를 가져오지 않음

- 필터 logic과 getContentList를 고칠 필요가 있음
