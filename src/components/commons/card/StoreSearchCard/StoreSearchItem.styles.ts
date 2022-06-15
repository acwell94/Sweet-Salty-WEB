import styled from "@emotion/styled";
import { breakPoints } from "../../globalstyles/Media";

export const ItemMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 12px 0px 0px 0px;
  position: relative;
`;

export const ImageTitle = styled.div`
  position: absolute;
  top: 20px;
  left: 23px;
  font-size: 16px;
  font-weight: 700;
  color: #ff9a31;
  @media ${breakPoints.mobile} {
    font-size: 10px;
    top: 20px;
    left: 20px;
  }
`;

export const ItemImg = styled.div`
  background-color: #f3f3f3;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  height: 250px;
  justify-content: center;
  align-items: center;
  padding: 70px 39px 60px 39px;
  width: 300px;
  @media ${breakPoints.mobile} {
    width: 280px;
    height: 200px;
    padding: 0px;
  }
`;

export const GifticonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 222px;
  height: 119px;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: #ffffff;
  @media ${breakPoints.mobile} {
    width: 190px;
    height: 100px;
  }
`;

export const GifticonImg = styled.div`
  width: 75%;
  height: 100%;
  border-radius: 10px 0px 0px 10px;
  background-color: #c4c4c4;
`;

export const GifticonLogoDiv = styled.div`
  display: flex;
  padding: 8px 8px 0px 0px;
`;

export const GifiticonLogo = styled.img`
  width: 31px;
  height: 7px;
`;

export const ItemInfoDiv = styled.div`
  width: 300px;
  padding: 20px 0;
  @media ${breakPoints.mobile} {
    width: 280px;
    padding: 10px 0px;
  }
`;
export const ItemInfoTopDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ItemInfoTxtDiv = styled.div`
  color: #676767;
  display: flex;
  justify-content: flex-start;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  padding: 0px 0px 10px 0px;
  width: 100%;
  @media ${breakPoints.mobile} {
    padding: 0px;
  }
`;

export const ItemInfoTitle = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;
export const ItemInfoSeller = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;

export const ItemInfoBarDiv = styled.div`
  color: #676767;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  padding: 0 5px;
  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;

export const ItemInfoBottomDiv = styled.div`
  padding: 5px 0;
  display: flex;
  justify-content: flex-start;
  @media ${breakPoints.mobile} {
    padding: 0px;
  }
`;

export const ItemDCRateDiv = styled.div`
  color: #ff6e30;
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  padding-right: 5px;
  @media ${breakPoints.mobile} {
    font-size: 12px;
  }
`;
export const ItemPriceDiv = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
  @media ${breakPoints.mobile} {
    font-size: 12px;
  }
`;
export const ItemWonDiv = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  @media ${breakPoints.mobile} {
    font-size: 8px;
  }
`;
export const ItemNoDCPriceDiv = styled.div`
  color: #aeaeae;
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  padding: 0px 0px 0px 4px;
  text-decoration: line-through;
  @media ${breakPoints.mobile} {
    font-size: 8px;
  }
`;
