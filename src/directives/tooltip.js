import Tooltip from 'bootstrap/js/dist/tooltip';

function init(el, { value, arg }) {
  const tooltip = new Tooltip(el, {
    title: value,
    trigger: 'hover',
    placement: arg,
  });
  return tooltip;
}

const directive = {
  beforeMount(el, { value, arg = 'auto' }) {
    const tooltip = init(el, { value, arg });
    el.$tooltip = tooltip;
  },
  updated(el, { value, arg = 'auto' }) {
    el.$tooltip.disable();
    const tooltip = init(el, { value, arg });
    el.$tooltip = tooltip;
  },
  unmounted(el) {
    el.$tooltip.disable();
  },
};

export default directive;
