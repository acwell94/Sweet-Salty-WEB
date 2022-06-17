import styled from "@emotion/styled";
import { breakPoints } from "../../commons/globalstyles/Media";

export const Wrapper = styled.div`
  width: 100%;
  background: #f3f3f3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${breakPoints.mobile} {
    padding: 0px 20px;
  }
`;

export const Title30px = styled.div`
  padding: 200px 0 0 0;
  font-size: 30px;
  font-weight: 800;
  color: #2c2c2c;
  cursor: default;
  @media ${breakPoints.mobile} {
    padding: 98px 0 0 0;
    font-size: 20px;
  }
`;

export const LogoDiv = styled.div`
  padding: 100px 0 140px 0;
  @media ${breakPoints.mobile} {
    padding: 20px 0 40px 0;
  }
`;

export const LogoX3 = styled.img`
  width: 600px;
  height: 128px;
  object-fit: contain;
  cursor: default;
  @media ${breakPoints.mobile} {
    width: 200px;
    height: 60px;
  }
`;

export const Title50px = styled.div`
  padding: 0 0 140px 0;
  font-size: 50px;
  font-weight: 700;
  color: #2c2c2c;
  cursor: default;
  @media ${breakPoints.mobile} {
    font-size: 30px;
    text-align: center;
    padding: 0px 0px 50px 0px;
  }
`;

export const HiSpan = styled.span`
  font-size: 50px;
  font-weight: 700;
  color: #2c2c2c;
  cursor: default;
  @media ${breakPoints.mobile} {
    font-size: 30px;
    display: block;
  }
`;

export const Span = styled.span`
  font-size: 50px;
  font-weight: 700;
  color: #ffa230;
  cursor: default;
  @media ${breakPoints.mobile} {
    font-size: 30px;
  }
`;

export const Contents20px = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 36px;
  text-align: center;
  cursor: default;
  @media ${breakPoints.mobile} {
  }
`;
export const ContentsMiddle20px = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 36px;
  text-align: center;
  cursor: default;
  padding: 82px 0px 100px 0px;
  @media ${breakPoints.mobile} {
    padding: 20px 0px 25px 0px;
  }
`;

export const ContentsWrite = styled.div`
  @media ${breakPoints.mobile} {
    font-size: 10px;
  }
`;
export const ContentsWriteMedia = styled.div`
  display: none;
  @media ${breakPoints.mobile} {
    display: block;
    font-size: 10px;
  }
`;
export const ContentsWriteNoMedia = styled.div`
  display: block;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const TeamTitle = styled.div`
  padding: 200px 0px 100px 0px;
  font-size: 30px;
  font-weight: 800;
  color: #2c2c2c;
  cursor: default;
  @media ${breakPoints.mobile} {
    font-size: 20px;
    padding: 50px 0px 50px 0px;
  }
`;

export const DeveloperBox = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  width: 900px;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const FrontDeveloperBox = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  margin: 100px 0px;
  width: 1334px;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;
export const DesignerBox = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  width: 470px;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const DeveloperTitle = styled.div`
  padding: 0 0 20px 0;
  font-size: 20px;
  font-weight: 600;
  color: #2c2c2c;
  cursor: default;
  @media ${breakPoints.mobile} {
    font-size: 15px;
  }
`;
export const MemberBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  #margin {
    margin-right: 30px;
    @media ${breakPoints.mobile} {
      margin: 0;
    }
  }
  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;
export const Member = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const MemberImg = styled.img`
  width: 400px;
  object-fit: contain;
  border-radius: 20px;
  cursor: default;
  @media ${breakPoints.mobile} {
    width: 200px;
  }
`;
export const MemberTitle = styled.div`
  padding: 20px 0 10px 0;
  font-size: 16px;
  color: #2c2c2c;
  font-weight: 600;
  cursor: default;
  @media ${breakPoints.mobile} {
    font-size: 12px;
  }
`;
export const MemberInfo = styled.div`
  color: #676767;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  align-items: center;
  cursor: default;
`;
export const MailImg = styled.img`
  width: 25px;
  object-fit: contain;
  cursor: default;
`;

export const TopButtonBox = styled.div`
  padding: 50px 0;
`;
