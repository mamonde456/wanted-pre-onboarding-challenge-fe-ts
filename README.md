## 챌린지 과제 가이드

[과제 가이드 링크](https://gist.github.com/pocojang/e247baddfb4345903751ec592fd836ff)

> 타 수강생의 타이핑 즉 설계 & 모델링을 실제로 구현합니다.

- **디스코드/프론트엔드 챌린지/자유로운-이야기 채널**에서 원하는 Interface 코드를 가져다 사용하세요
- 설계 & 모델링 된 Interface를 실제로 구현하는 챌린지 과제입니다.
- 모든 요구사항은 설계 & 모델링을 기반으로 수행합니다.
- 제출할 저장소 명은 wanted-pre-onboarding-challenge-fe-ts로 생성해주세요. (Public 권한 필요)
  - 이미 1차~2차 과제를 통해 저장소를 생성했다면 별도의 브랜치로 관리하시는 것을 추천합니다.
- 완성한 과제의 저장소 링크를 **디스코드/프론트엔드 챌린지/자유로운-이야기 채널**에 제출해주세요.
- README.md를 꼭 작성해 주세요.
  - 본인에 대한 소개나 프로젝트 소개 등 자유롭게 작성해주시면 됩니다.

## 📝 필수 요구사항

> 타 수강생의 타이핑 즉 설계 & 모델링을 실제로 구현합니다.

- 설계 & 모델링된 TypeScript's Interface를 따라 내부 구현부를 모두 작성한다.
- 동작되지 않더라도 설계 & 모델링을 지키는 것이 원칙이다.
  - 절대로 동작과 구현을 위해 설계 & 모델링 규칙을 어기지 않습니다.
- README.md 혹은 별도의 문서에 어떤 부분의 타입을 고치면 좋은지 피드백과 출처 링크를 남깁니다.

## 피드백

구현 완료했습니다.

아래부터는 개인적인 생각을 작성해보겠습니다.

```
  deleteTag: (todoIndex: number, tagIndex: number) => void;
  deleteAllTag: (todoIndex: number) => void;
```

해당 함수의 경우 인자로 `index`가 들어와서 `todos`의 `index`를 제거하는 방식으로 구현했습니다.
그렇지만 일관성 면에서 봤을 때, `index`를 사용하기 보다 `id`를 사용하는 게 다른 함수와 통일되는 부분이 있지 않을까 생각됩니다. 더불어, `todo`의 개수가 많으면 수를 세기가 힘들 거 같아요.

```
tags:[
    {
        id:1,
        tag:"test1"
    },
    ...
]
```

이와 같은 이유로 `tag` 또한 `index`가 아닌 구조적으로 `id`를 추가해주거나 `기존 string`, `변경할 새로운 string`을 인자로 넘겨받아 `index`를 찾고 변경해주는 것도 괜찮을 것 같습니다.
