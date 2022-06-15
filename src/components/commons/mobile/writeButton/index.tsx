import styled from "@emotion/styled";
import { useRouter } from "next/router";
const ButtonDiv = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(90deg, #ff7031 0%, #ffa230 100%);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
  position: fixed;
  bottom:20px;
  right:20px;
  z-index:10;
  
`;
const Img = styled.img`
  width: 24px;
  height: 24px;
`;

export default function WriteButtonForMobile() {
  const router = useRouter();
  const onClickWrite = () => {
    router.push(
      `/reviews/commonReview/write/?checkPage=&wishId=&communityCheckPage=community`
    );
  };
  return (
    <ButtonDiv onClick={onClickWrite}>
      <Img src="/images/mobileWrite.png" />
    </ButtonDiv>
  );
}
