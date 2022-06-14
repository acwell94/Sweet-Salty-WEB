import { messageDate } from "../../../commons/libraries/date";
import MessageMenuPage from "../../../commons/messageMenu";
import DeleteModalPage from "../../../commons/modal/deleteModal/DeleteModal";
import RegisterModalPage from "../../../commons/modal/registerModal/RegisterModal";
import * as S from "./receivedMessageDetail.styled";
export default function ReceivedMessageDetailPresenterPage(props: any) {
  const propsdata = props.data?.fetchReceivedMessage;
  const profileUrl = "https://storage.googleapis.com/";
  return (
    <S.Page>
      {props.deleteToggle &&(<DeleteModalPage
      isOpen={props.deleteToggle}
      setIsOpen={props.setDeleteToggle}
      onClickSuccess={props.onClickDeleteMessage}
      />)}
      {props.submitToggle && (
        <RegisterModalPage
          isOpen={props.submitToggle}
          setIsOpen={props.setSubmitToggle}
          onClickSuccess={props.onClickSubmitModalToggle}
          role={"삭제"}
        />
      )}
      <S.Main>
        <S.TitleSection>
          쪽지함 &#62; 받은쪽지함 &#62; {propsdata?.messageSendUser} 단짝님
        </S.TitleSection>
        <MessageMenuPage isRecievedTap={props.isRecievedTap} />
        <S.MainSection>
          <S.SenderInfo>보낸 단짝</S.SenderInfo>
          <S.ProfileImgDiv>
            <S.ProfileImg src={profileUrl + propsdata?.messageSendUserImage} />
            <S.Sender>{propsdata?.messageSendUser}</S.Sender>
            <S.DateSection>{messageDate(propsdata?.sendAt)}</S.DateSection>
          </S.ProfileImgDiv>
          <S.ContentsSection>
            <S.ContentsArticle>
              {propsdata?.messageInfo.messageInfoContents}
            </S.ContentsArticle>
          </S.ContentsSection>
          <S.ButtonSection>
            <div>
              <S.Button onClick={props.onClickReceivedMessageList}>
                목록으로
              </S.Button>
            </div>
            <div>
              <S.ReplyBtn>답장하기</S.ReplyBtn>
              <S.Button onClick={props.onClickDeleteModalToggle}>삭제하기</S.Button>
            </div>
          </S.ButtonSection>
        </S.MainSection>
      </S.Main>
    </S.Page>
  );
}
