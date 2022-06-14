import * as S from "./receivedMessageList.styled";
import { v4 as uuidv4 } from "uuid";
import { messageDate } from "../../../commons/libraries/date";
import Paginations01 from "../../../commons/paginations/paginations/01/Paginations01.container";
import MessageMenuPage from "../../../commons/messageMenu";
import DeleteModalPage from "../../../commons/modal/deleteModal/DeleteModal";
import RegisterModalPage from "../../../commons/modal/registerModal/RegisterModal";
export default function ReceivedMessageListPresenterPage(props: any) {
  const profileUrl = "https://storage.googleapis.com/";
  return (
    <div>
      {props.deleteToggle && (
        <DeleteModalPage
          isOpen={props.deleteToggle}
          setIsOpen={props.setDeleteToggle}
          onClickSuccess={props.onClickDeleteMessage(props.deleteId)}
        />
      )}
      {props.submitToggle && (
        <RegisterModalPage
          isOpen={props.submitToggle}
          setIsOpen={props.setSubmitToggle}
          onClickSuccess={props.onClickSubmitModalToggle}
          role={"삭제"}
        />
      )}
      <S.MsgWrapper>
        <S.TitleTxt>쪽지함</S.TitleTxt>
        <S.MsgHead>
          <S.MsgAmountDiv>
            총 <S.MsgAmountSpan>{props.count}</S.MsgAmountSpan>개의 받은 쪽지가
            있습니다.
          </S.MsgAmountDiv>
          <S.WriteBtn onClick={props.onClickWriteMessage}>
            <S.WriteImg src="/images/Send.png" />
            쪽지 보내기
          </S.WriteBtn>
        </S.MsgHead>

        <MessageMenuPage />

        <S.MsgListDiv>
          <S.MessageTh>
            <S.MessageThSend>보낸 단짝님</S.MessageThSend>
            <S.MessageThContent>내용</S.MessageThContent>
            <S.MessageThCreateAt>날짜</S.MessageThCreateAt>
            <S.MessageThDelete></S.MessageThDelete>
          </S.MessageTh>

          <S.MessageThHr />

          {props.dataReceivedMessages?.fetchReceivedMessages.map((el: any) => (
            <div key={uuidv4()}>
              <S.MessageBoxDiv >
                <S.ProfileDiv>
                  <S.ProfileImg src={profileUrl + el.messageSendUserImage} />
                  <S.SendUserDiv>{el.messageSendUser}</S.SendUserDiv>
                </S.ProfileDiv>
                <S.MessageContents
                  onClick={props.onClickMessageDetail(
                    el.messageInfo?.messageInfoId
                  )}
                  isRead={el.messageState}
                >
                  {" "}
                  {el.messageInfo?.messageInfoContents}
                </S.MessageContents>
                <S.DateDiv> {messageDate(el.sendAt)}</S.DateDiv>

                <S.DeleteBtn
                  onClick={props.onClickDeleteModalOpen(
                    el.messageInfo?.messageInfoId
                  )}
                >
                  삭제
                </S.DeleteBtn>
              </S.MessageBoxDiv>

              <S.MessageHr />
            </div>
          ))}
        </S.MsgListDiv>
        <S.PaginationBox>
          <Paginations01 refetch={props.refetch} count={props.count} />
        </S.PaginationBox>
      </S.MsgWrapper>
    </div>
  );
}
