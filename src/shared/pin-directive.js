export default function (element, binding) {
  // eslint-disable-next-line
  element.style.position = 'absolute';
  Object.keys(binding.value).forEach((position) => {
    // eslint-disable-next-line
    element.style[position] = binding.value[position];
  });
}
