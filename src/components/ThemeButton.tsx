import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { motion, useReducedMotion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { MouseEventHandler, useEffect, useState } from 'react';

interface Props {
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

const ThemeButton: React.FC<Props> = ({ handleClick: handleClick }) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="w-12 h-12 my-3 overflow-hidden transition bg-gray-200 rounded-lg shadow dark:bg-gray-600 hover:shadow-lg"
      onClick={handleClick}
    >
      <motion.div
        whileTap={
          !shouldReduceMotion
            ? {
                translateX: '-90px',
                scale: 0.8,
                rotate: -90,
                borderRadius: '100%',
              }
            : {}
        }
        className="p-3"
      >
        {mounted && (theme === 'light' ? <MoonIcon /> : <SunIcon />)}
      </motion.div>
    </button>
  );
};

export default ThemeButton;
