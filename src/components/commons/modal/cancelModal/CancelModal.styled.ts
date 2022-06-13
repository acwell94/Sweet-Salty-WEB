import styled from "@emotion/styled";

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalTitle = styled.div`
  padding: 98px 0px;
  font-weight: 700;
  font-size: 24px;
  color: #2c2c2c;
`;

export const ModalButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 0px 0px 16px 0px;
`;

export const ModalYesBtn = styled.button`
  background: none;
  border: 2px solid #dadada;
  border-radius: 10px;
  width: 140px;
  height: 40px;
  margin: 0px 20px 0px 0px;
  font-weight: 700;
  font-size: 16px;
  color: #676767;
  cursor: pointer;
  &:hover {
    border: 2px solid #ff9a31;
    background: #ff9a31;
    color: #ffffff;
  }
`;
export const ModalNoBtn = styled.button`
  background: none;
  border: 2px solid #dadada;
  border-radius: 10px;
  width: 140px;
  height: 40px;
  font-weight: 700;
  font-size: 16px;
  color: #676767;
  cursor: pointer;
  &:hover {
    border: 2px solid #ff9a31;
    background: #ff9a31;
    color: #ffffff;
  }
`;
