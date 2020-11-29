import React, { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';

import StickyContents from './pages/StickyContents';

const App: React.FC = () => {
  useLayoutEffect(() => {
    window.addEventListener('DOMContentLoaded', () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('id');
          if (entry.intersectionRatio > 0) {
            window.document.querySelector(`nav li a[href="#${id}"]`)?.parentElement?.classList.add('active');
          } else {
            window.document.querySelector(`nav li a[href="#${id}"]`)?.parentElement?.classList.remove('active');
          }
        });
      });

      // Track all sections that have an `id` applied
      document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
      });
    });
  }, []);

  return (
    <React.StrictMode>
      <StickyContents />
    </React.StrictMode>
  );
};


ReactDOM.render(<App />, document.querySelector('#root'));
