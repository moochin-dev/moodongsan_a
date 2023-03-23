# 무동산
- 국토부 실거래가 기준으로 전국 아파트 평당가,매매가,상승률,전세가율 랭킹 표를 제공

## FE
### MVP
- 우선 react로 랭킹 표부터 제공할 수 있게 사이트를 올리고 트래픽 찍어보기
- mobile-first로 개발 (360px * 800px)
### Framework
- 우선은 react..
- 추후에 SEO를 위해 Next.js 사용할 의사 있으나, 기왕이면 svelte와 svelte kit 사용해보려 함
### Styling
- styled-components 사용
- 향후 svelte 사용한다면 해당 framework에 맞는 css in js 사용
### GIT
- 기본적으로 git-flow를 따르는데, release, hotfix를 따로 두지 않음
- main: main 브랜치 (release를 따로 두지 않음)
- feat/: feature 작업 브랜치
  - main에서 분기, main으로 병합
- fix/: 버그 픽스 브랜치
  - main에서 분기, main으로 병합
