import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 70vh;
  background-color: #ff00ff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const HistoryContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  overflow-y: auto;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const BarContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;

  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    background-color: white;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-top: 1px solid #ccc;
    z-index: 1;
  }
`;
