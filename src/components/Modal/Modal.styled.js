import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalWindow = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: transparent;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  transform: translate(-50%, -50%);
  transition: transform 1000ms;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-radius: 4px;

  &:hover {
    transform: scale(1.05);
    transition: transform 1000ms;
    cursor: zoom-in;
  }
`;
