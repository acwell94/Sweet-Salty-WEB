import { Modal } from "antd";
import { useRouter } from "next/router";
import * as S from "./CancelModal.styled";

export default function CancelModalPage(props: any) {
  const router = useRouter();

  const onClickBack = () => {
    router.back();
  };
  const onToggleModal = () => {
    props.setIsOpen((prev: boolean) => !prev);
  };
  return (
    <div>
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
          <S.ModalTitle>취소하겠습니까?</S.ModalTitle>
          <S.ModalButtonDiv>
            <S.ModalYesBtn onClick={onClickBack}>네</S.ModalYesBtn>
            <S.ModalNoBtn onClick={onToggleModal}>아니요</S.ModalNoBtn>
          </S.ModalButtonDiv>
        </S.ModalBody>
      </Modal>
    </div>
  );
}
