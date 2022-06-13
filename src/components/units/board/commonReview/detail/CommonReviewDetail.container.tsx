import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import ReviewDetailPresenter from "./CommonReviewDetail.presenter";
import {
  CREATE_BOARD_LIKE,
  DELETE_BOARD,
  FETCH_BOARD,
  FETCH_USER_LOGGED_IN,
} from "./CommonReviewDetail.queries";

export default function ReviewDetailContainer() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) },
  });
  const { data: loginUser } = useQuery(FETCH_USER_LOGGED_IN);

  const [createBoardLike] = useMutation(CREATE_BOARD_LIKE);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [deleteIsOpen, deleteSetIsOpen] = useState(false);
  const onClickCommonReviewList = () => {
    router.push("/reviews/commonReview");
  };

  const onClickProfile = () => {
    router.push(`/${data?.fetchBoard?.user?.userNickname}`);
  };
  const onClickUpdate = () => {
    router.push(`/reviews/commonReview/${router.query.boardId}/edit`);
  };
  const onClickDelete = () => {
    deleteSetIsOpen((prev) => !prev);
  };
  const onClickSuccess = () => {
    try {
      deleteBoard({
        variables: { boardId: String(router.query.boardId) },
      });
      if (
        data.fetchBoard?.boardSubject === "REVIEW" ||
        data.fetchBoard?.boardSubject === "VISITED"
      ) {
        setTimeout(() => {
          router.push("/reviews");
        }, 3000);
      } else {
        setTimeout(() => {
          router.push("/reviews");
        }, 3000);
      }
    } catch (error: any) {
      alert(error.message);
    }
  };
  const onClickLike = () => {
    createBoardLike({
      variables: {
        boardId: String(router.query.boardId),
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: String(router.query.boardId) },
        },
      ],
    });
  };
  return (
    <ReviewDetailPresenter
      data={data?.fetchBoard}
      loginUser={loginUser?.fetchUserLoggedIn}
      onClickCommonReviewList={onClickCommonReviewList}
      onClickDelete={onClickDelete}
      onClickProfile={onClickProfile}
      onClickLike={onClickLike}
      onClickUpdate={onClickUpdate}
      onClickSuccess={onClickSuccess}
      deleteIsOpen={deleteIsOpen}
      deleteSetIsOpen={deleteSetIsOpen}
    />
  );
}
