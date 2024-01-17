/* eslint-disable no-undef */
export default function scroll(position) {
  window.scrollTo({
    top: position,
    left: 0,
    behavior: 'smooth',
  });
}
