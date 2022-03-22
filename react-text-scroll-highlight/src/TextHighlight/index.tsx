import React, { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import useOnScreen from '../hooks/useOnScreen';

import { Container } from './styles';

const TextHighlight: React.FC = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  const [alreadySeen, setAlreadySeen] = useState(false);

  useEffect(() => {
    if (isVisible) setAlreadySeen(true)
  }, [isVisible]);


  return (
    <Container ref={ref} isVisible={isVisible} alreadySeen={alreadySeen}>
      <span>{children}</span>
    </Container>
  );
}

export default TextHighlight;