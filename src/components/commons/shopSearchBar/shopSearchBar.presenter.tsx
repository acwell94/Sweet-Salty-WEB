import * as S from "./shopSearchBar.styles";

export default function StoreSearchBarPresenter(props: any) {
  return (
    <S.Wrapper>
      <S.SearchBox>
        <S.SearchInnerBox>
          <S.Select
            id="searchSelect"
            onChange={props.onChangeSearchCondition}
            defaultValue="default"
            ref={props.conditionRef}
          >
            <option id="searchValue" value="default" disabled>
              선택
            </option>
            <option id="searchValue" value="title">
              메뉴명
            </option>
            <option id="searchValue" value="seller">
              가게명
            </option>
          </S.Select>
          <S.SearchBar
            onKeyUp={props.onKeyUpInput}
            ref={props.inputRef}
            type="text"
            placeholder="검색어를 입력하세요."
          />
          <S.SearchIcon type="button" onClick={props.onClickSearchKeyWord} />
        </S.SearchInnerBox>
      </S.SearchBox>
    </S.Wrapper>
  );
}
