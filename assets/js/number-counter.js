{/* <script> */}
  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.vertical-counter').forEach(counterEl => {
      const value = counterEl.getAttribute("data-value");
      const suffix = counterEl.getAttribute("data-suffix") || "";
      counterEl.innerHTML = '';

      value.split('').forEach((digit, i) => {
        const span = document.createElement('span');

        if (i < 2) {
          span.className = 'vertical-counter-number';
          const ul = document.createElement('ul');

          for (let j = 0; j <= 9; j++) {
            const li = document.createElement('li');
            li.textContent = j;
            ul.appendChild(li);
          }

          span.appendChild(ul);
          counterEl.appendChild(span);

          // Pixel-based transform
          setTimeout(() => {
            const liHeight = ul.querySelector('li').offsetHeight;
            ul.style.transform = `translateY(-${digit * liHeight}px)`;
          }, i * 300);
        } else {
          // static digit
          span.className = 'vertical-counter-number static';
          const ul = document.createElement('ul');
          const li = document.createElement('li');
          li.textContent = digit;
          ul.appendChild(li);
          span.appendChild(ul);
          counterEl.appendChild(span);
        }
      });

      if (suffix) {
        const suffixEl = document.createElement('span');
        suffixEl.className = 'number-suffix';
        suffixEl.textContent = suffix;
        counterEl.appendChild(suffixEl);
      }
    });
  });
{/* </script> */}
