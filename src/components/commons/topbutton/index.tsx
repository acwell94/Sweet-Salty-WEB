import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { breakPoints } from "../globalstyles/Media";

interface IAny {
  isReviewDetail?: any;
}

const TopBox = styled.div`
  width: 52px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 25px;
  background: #fff;
  cursor: pointer;
  box-shadow: ${(props: IAny) =>
    props.isReviewDetail ? "0 0 3px #fff" : "0px 0px 10px #dbdbdb"};

  transition: 0.2s;
  &:hover {
    background: linear-gradient(0.25turn, #ff6e30, #ffa230);
    color: #fff;
    font-weight: 700;
    box-shadow: ${(props: IAny) =>
      props.isReviewDetail ? "0 0 0" : "0px 0px 10px #dbdbdb"};
  }
  @media ${breakPoints.mobile} {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }
`;

export default function TopButton() {
  const router = useRouter();

  const ReviewDetail = ["/reviews/reviewdetail"];
  const isReviewDetail = ReviewDetail.includes(router.asPath);

  const onClickTopMove = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <TopBox isReviewDetail={isReviewDetail} onClick={onClickTopMove}>
      ↑
    </TopBox>
  );
}
