const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*';

export const scrambleText = (target, originalText) => {
  let currentText = originalText;
  let iteration = 0;
  const duration = 0.5;

  clearInterval(target.interval);

  target.interval = setInterval(() => {
    target.innerText = currentText
      .split('')
      .map((letter, index) => {
        if (index < iteration) {
          return originalText[index];
        }
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join('');

    if (iteration >= originalText.length) {
      clearInterval(target.interval);
    }

    iteration += 1 / 3;
  }, 30);
}; 