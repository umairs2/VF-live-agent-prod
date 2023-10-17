import React from 'react';

import { Container } from './styled';
import { useTranslation } from 'react-i18next';

const LiveAgentStatus = ({ talkToRobot }: any) => {
  const { t } = useTranslation();

  return (
    <Container>
      {'You are talking to an agent. Return to robot'}{' '}
      <a onClick={talkToRobot} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
        {'Here'}
      </a>{' '}
    </Container>
  );
};

export default LiveAgentStatus;
