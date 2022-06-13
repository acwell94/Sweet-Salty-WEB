import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import SendMessageListPresenterPage from "./sendMessageList.presenter";
import {
  DELETE_SEND_MESSAGE,
  FETCH_SEND_MESSAGES,
  FETCH_SEND_MESSAGES_COUNT,
} from "./sendMessageList.queries";

export default function SendMessageListContainerPage() {
  const router = useRouter();
  const [deleteSendMessage] = useMutation(DELETE_SEND_MESSAGE);
  const [deleteToggle, setDeleteToggle] = useState(false);
  const [submitToggle, setSubmitToggle] = useState(false);
  const [deleteId, setDeleteId] = useState("")
  const { data: dataSendMessages, refetch: refetchSendMessages } =
    useQuery(FETCH_SEND_MESSAGES);
  const { data: dataSendMessagesCount, refetch: refetchSendMessagesCount } =
    useQuery(FETCH_SEND_MESSAGES_COUNT);

  const onClickWriteMessage = () => {
    router.push("/message/write");
  };
  const onClickMessageDetail = (id: String) => () => {
    router.push(`/message/send/${id}`);
  };
  const onClickDeleteMessage = (id: String) => async () => {
    try {
      await deleteSendMessage({
        variables: { messageInfoId: String(id) },
        refetchQueries: [
          { query: FETCH_SEND_MESSAGES },
          { query: FETCH_SEND_MESSAGES_COUNT },
        ],
      });
      setDeleteToggle((prev) => !prev);
      setSubmitToggle((prev) => !prev);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };
  const onClickDeleteModalOpen = (id: any) =>()=> {
    setDeleteId(id)
    setDeleteToggle((prev) => !prev);
  };
  const onClickSubmitModalToggle = ()=>{
    setSubmitToggle((prev) => !prev);
    
  }
  return (
    <SendMessageListPresenterPage
      onClickWriteMessage={onClickWriteMessage}
      onClickMessageDetail={onClickMessageDetail}
      onClickDeleteMessage={onClickDeleteMessage}
      onClickDeleteModalOpen={onClickDeleteModalOpen}
      dataSendMessages={dataSendMessages}
      refetch={refetchSendMessages}
      count={dataSendMessagesCount?.fetchSendMessagesCount}
      refetchSendMessagesCount={refetchSendMessagesCount}
      deleteToggle={deleteToggle}
      setDeleteToggle={setDeleteToggle}
      deleteId={deleteId}
      setDeleteId={setDeleteId}
      submitToggle={submitToggle}
      setSubmitToggle={setSubmitToggle}
      onClickSubmitModalToggle={onClickSubmitModalToggle}
    />
  );
}
