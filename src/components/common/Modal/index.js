import React from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 350px;
  height: 170px;
  transform: translate(-50%, -50%);
  border: 1px solid var(--gray5);
  border-radius: 20px;
  background-color: var(--white);
  color: var(--black);
  text-align: center;
  z-index: 10;
  & .modal-text {
    font-size: 16px;
    margin-bottom: 20px;
  }
  & .close {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    font-size: 16px;
    width: 70px;
    height: 30px;
    background-color: var(--gray3);
    color: var(--black);
    cursor: pointer;
    &:hover {
      background: var(--gradient-blue);
      color: var(--white);
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9;
`;

export default function Modal({ text, close, onClose }) {
  return (
    <>
      <StyledModal>
        <div className="modal-text">{text}</div>
        <div onClick={onClose} className="close">
          {close}
        </div>
      </StyledModal>
      <Overlay className="cursor-pointer" onClick={onClose} />
    </>
  );
}
