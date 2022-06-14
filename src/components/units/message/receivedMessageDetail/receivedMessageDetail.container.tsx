import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import ReceivedMessageDetailPresenterPage from "./receivedMessageDetail.presenter";
import {
  DELETE_RECEIVED_MESSAGE,
  FETCH_RECEIVED_MESSAGE,
} from "./receivedMessageDetail.queries";

export default function ReceivedMessageDetailContainerPage() {
  const router = useRouter();
  const isRecievedTap = true;

  const [deleteReceivedMessage] = useMutation(DELETE_RECEIVED_MESSAGE);
  const { data } = useQuery(FETCH_RECEIVED_MESSAGE, {
    variables: { messageInfoId: String(router.query.messageInfoId) },
  });
  const [deleteToggle, setDeleteToggle] = useState(false);
  const [submitToggle, setSubmitToggle] = useState(false);
  const onClickReceivedMessageList = () => {
    router.push("/message/received");
  };
  const onClickDeleteMessage = async () => {
    try {
      await deleteReceivedMessage({
        variables: { messageInfoId: String(router.query.messageInfoId) },
      });
      setSubmitToggle((prev) => !prev);
      
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };
  const onClickDeleteModalToggle = () => {
    setDeleteToggle((prev) => !prev);
  };
  const onClickSubmitModalToggle = ()=>{
    setSubmitToggle((prev) => !prev);
    router.push("/message/received");
  }
  return (
    <ReceivedMessageDetailPresenterPage
      data={data}
      onClickDeleteModalToggle={onClickDeleteModalToggle}
      onClickDeleteMessage={onClickDeleteMessage}
      onClickReceivedMessageList={onClickReceivedMessageList}
      isRecievedTap={isRecievedTap}
      deleteToggle={deleteToggle}
      setDeleteToggle={setDeleteToggle}
      submitToggle={submitToggle}
      setSubmitToggle={setSubmitToggle}
      onClickSubmitModalToggle={onClickSubmitModalToggle}
    />
  );
}
