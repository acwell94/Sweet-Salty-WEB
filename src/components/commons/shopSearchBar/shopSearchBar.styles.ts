import styled from "@emotion/styled";
import { SearchOutlined } from "@ant-design/icons";
import { breakPoints } from "../globalstyles/Media";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: #f3f3f3;
`;

export const SearchBox = styled.div`
  width: 500px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0.25turn, #ff6e30, #ffa230);
  @media ${breakPoints.mobile} {
    width: 212px;
  }
`;
export const SearchInnerBox = styled.div`
  width: 492px;
  height: 44px;
  border-radius: 50px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${breakPoints.mobile} {
    width: 204px;
    height: 42px;
  }
  #searchSelect {
    width: 88px;
    transform: translate(12px);
    border: 1px solid #999;
    -moz-appearance: none;
  }
`;
export const Select = styled.select`
  height: 32px;
  outline: 2px solid #dadada;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
  color: #676767;
  @media ${breakPoints.mobile} {
    height: 22px;
    font-size: 10px;
    border-radius: 8px;
  }
  #searchValue {
    @media ${breakPoints.mobile} {
      font-size: 10px;
    }
  }
`;

export const SearchBar = styled.input`
  padding: 0 20px;
  width: 93%;
  height: 50px;
  font-size: 16px;
  border: none;
  outline: none;
  background: transparent;
  @media ${breakPoints.mobile} {
    font-size: 10px;
    font-weight: 500;
  }
`;
export const SearchIcon = styled(SearchOutlined)`
  color: #ffa230;
  transform: translate(-25px);
  cursor: pointer;
  @media ${breakPoints.mobile} {
    width: 10px;
  }
`;
