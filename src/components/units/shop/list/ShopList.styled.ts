import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/globalstyles/Media";

export const Page = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Main = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 1338px;
  @media ${breakPoints.mobile} {
    width: 360px;
    padding: 0px 20px;
  }
`;

export const TitleSection = styled.div`
  font-size: 40px;
  font-weight: 700;
  padding: 100px 0px;
  @media ${breakPoints.mobile} {
    padding: 98px 0px 30px 0px;
    font-size: 20px;
  }
`;

export const SearchSection = styled.div`
  padding: 0px 0px 46px 0px;
  @media ${breakPoints.mobile} {
    padding: 0px 0px 20px 0px;
  }
`;

export const ContentsSection = styled.div`
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  border-radius: 20px;
  padding: 24px;
  width: 100%;
  @media ${breakPoints.mobile} {
    padding: 20px;
  }
`;

export const BestContentsSection = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dadada;
  padding: 30px 0px;
  @media ${breakPoints.mobile} {
    flex-direction: column;
    padding: 0px;
  }
`;

export const BestStoreItemContentsArticle = styled.div`
  display: flex;
  @media ${breakPoints.mobile} {
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const BestContentsTitleArticle = styled.div`
  display: flex;
  flex-direction: column;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const BestContentsMediaTitleArticle = styled.div`
  display: none;
  font-size: 12px;
  font-weight: 800;
  color: #ff9a31;
  @media ${breakPoints.mobile} {
    display: flex;
    color: #ff9a31;
    padding: 0px 0px 0px 10px;
  }
`;

export const BestContentsTitleTop = styled.div`
  font-size: 20px;
  font-weight: 800;
  color: #ff9a31;
`;

export const BestContentsTitleBottom = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: #ff9a31;
`;

export const StoreContentsSection = styled.div`
  padding: 30px 0px 0px 0px;
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: 25% 25% 25% 25%;
  @media ${breakPoints.mobile} {
    grid-template-columns: 100%;
    padding: 20px 0px 0px 0px;
  }
`;

export const UpBtnSection = styled.div`
  padding: 50px 0px;
`;
