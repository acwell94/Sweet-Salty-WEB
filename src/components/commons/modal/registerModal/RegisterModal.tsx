import { Modal } from "antd";
import * as S from "./RegisterModal.styled";

export default function RegisterModalPage(props: any) {
  const onToggleModal = () => {
    props.setIsOpen((prev: boolean) => !prev);
  };
  return (
    <Modal
      visible={props.isOpen}
      closable={false}
      onOk={onToggleModal}
      onCancel={onToggleModal}
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
        <S.ModalTitle>등록되었습니다.</S.ModalTitle>
        <S.ModalButtonDiv>
          <S.ModalConfirmBtn onClick={props.onClickSuccess}>
            확인하기
          </S.ModalConfirmBtn>
        </S.ModalButtonDiv>
      </S.ModalBody>
    </Modal>
  );
}
