/* eslint-disable no-unused-expressions */
import { useEffect } from 'react';

export const useTitle = (title) => {
  useEffect(() => {
    title && (document.title = title);
  }, [title]);
};
