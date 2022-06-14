import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import ReceivedMessageListPresenterPage from "./receivedMessageList.presenter";
import {
  DELETE_RECEIVED_MESSAGE,
  FETCH_RECEIVED_MESSAGES,
  FETCH_RECEIVED_MESSAGES_COUNT,
  FETCH_UNREAD_MESSAGE_COUNT,
} from "./receivedMessageList.queries";

export default function ReceivedMessageListContainerPage() {
  const router = useRouter();
  const [deleteReceivedMessage] = useMutation(DELETE_RECEIVED_MESSAGE);
  const [deleteToggle, setDeleteToggle] = useState(false);
  const [submitToggle, setSubmitToggle] = useState(false);
  const [deleteId, setDeleteId] = useState("")
  const { data: dataReceivedMessages, refetch: refetchReceivedMessages } =
    useQuery(FETCH_RECEIVED_MESSAGES);
  const {
    data: dataReceivedMessagesCount,
    refetch: refetchReceivedMessagesCount,
  } = useQuery(FETCH_RECEIVED_MESSAGES_COUNT);
  const onClickWriteMessage = () => {
    router.push("/message/write");
  };
  const onClickMessageDetail = (id: String) => () => {
    router.push(`/message/received/${id}`);
  };
  const onClickDeleteMessage =   (id: String) =>async()=> {
    try {
      await deleteReceivedMessage({
        variables: { messageInfoId: id },
        refetchQueries: [
          { query: FETCH_RECEIVED_MESSAGES },
          { query: FETCH_UNREAD_MESSAGE_COUNT },
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
    <ReceivedMessageListPresenterPage
      onClickWriteMessage={onClickWriteMessage}
      onClickMessageDetail={onClickMessageDetail}
      onClickDeleteMessage={onClickDeleteMessage}
      onClickDeleteModalOpen={onClickDeleteModalOpen}
      dataReceivedMessages={dataReceivedMessages}
      refetch={refetchReceivedMessages}
      count={dataReceivedMessagesCount?.fetchReceivedMessagesCount}
      refetchReceivedMessagesCount={refetchReceivedMessagesCount}
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
