import { Modal } from "antd";
import * as S from "./DeleteModal.styled";

export default function DeleteModalPage(props: any) {
  const onToggleModal = () => {
    props.setIsOpen((prev: boolean) => !prev);
  };
  return (
    <div>
      <Modal
        visible={props.isOpen}
        closable={false}
        maskStyle={{
          width: "100%",
          height: "100%",
        }}
        bodyStyle={{
          width: "100%",
          height: "100%",
        }}
        footer={null}
        centered={true}
      >
        <S.ModalBody>
          <S.ModalTitle>삭제하겠습니까?</S.ModalTitle>
          <S.ModalButtonDiv>
            <S.ModalYesBtn onClick={onToggleModal}>취소하기</S.ModalYesBtn>
            <S.ModalNoBtn onClick={props.onClickSuccess}>삭제하기</S.ModalNoBtn>
          </S.ModalButtonDiv>
        </S.ModalBody>
      </Modal>
    </div>
  );
}
