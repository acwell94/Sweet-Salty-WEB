import styled from "@emotion/styled";
import { breakPoints } from "../../globalstyles/Media";

export const FooterWrapper = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0px;
  @media ${breakPoints.mobile} {
    padding: 0px 20px;
  }
`;
export const FooterBox = styled.div`
  width: 1334px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${breakPoints.mobile} {
    width: 360px;
  }
`;
export const FooterText = styled.div`
  margin: 3px 0;
  cursor: default;
  @media ${breakPoints.mobile} {
    font-size: 10px;
    white-space: normal;
  }
`;
