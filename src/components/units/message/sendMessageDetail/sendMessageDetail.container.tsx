import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import SendMessageDetailPresenterPage from "./sendMessageDetail.presenter";
import {
  DELETE_SEND_MESSAGE,
  FETCH_SEND_MESSAGE,
} from "./sendMessageDetail.queries";
import { useState } from "react";
import { Modal } from "antd";

export default function SendMessageDetailContainerPage() {
  const router = useRouter();
  const isSendTap = true;
  const [deleteSendMessage] = useMutation(DELETE_SEND_MESSAGE);
  const [deleteToggle, setDeleteToggle] = useState(false);
  const [submitToggle, setSubmitToggle] = useState(false);
  const { data: sendMessageData } = useQuery(FETCH_SEND_MESSAGE, {
    variables: { messageInfoId: String(router.query.messageInfoId) },
  });
  const onClickDeleteMessage = async () => {
    try {
      await deleteSendMessage({
        variables: { messageInfoId: String(router.query.messageInfoId) },
      });
      setSubmitToggle((prev) => !prev);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };
  const onClickSendMessageList = () => {
    router.push("/message/send");
  };
  const onClickDeleteModalOpen = () => {
    setDeleteToggle((prev) => !prev);
  };
  const onClickSubmitModalToggle = () => {
    setSubmitToggle((prev) => !prev);
    router.push("/message/send");
  };
  return (
    <SendMessageDetailPresenterPage
      data={sendMessageData}
      onClickDeleteMessage={onClickDeleteMessage}
      onClickSendMessageList={onClickSendMessageList}
      isSendTap={isSendTap}
      onClickDeleteModalOpen={onClickDeleteModalOpen}
      deleteToggle={deleteToggle}
      setDeleteToggle={setDeleteToggle}
      submitToggle={submitToggle}
      setSubmitToggle={setSubmitToggle}
      onClickSubmitModalToggle={onClickSubmitModalToggle}
    />
  );
}
