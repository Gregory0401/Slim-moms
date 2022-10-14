import { BackgroundStyled } from './Background.styled';
import { motion } from 'framer-motion';

export const Background = ({ children }) => {
  return (
    <BackgroundStyled
      as={motion.div}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.7, delay: 0.6 }}
    >
      {children}
    </BackgroundStyled>
  );
};
