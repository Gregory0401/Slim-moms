import { BackgroundStyled } from './Background.styled';
import { motion } from 'framer-motion';
import Leaf from './Leaf/Leaf';

export const Background = ({ children }) => {
  return (
    <BackgroundStyled
      as={motion.div}
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.6 }}
    >
      <Leaf />
      {children}
    </BackgroundStyled>
  );
};
