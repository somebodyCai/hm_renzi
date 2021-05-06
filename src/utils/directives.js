
export const imgerr = {
  inserted(el, binding) {
    el.onerror = function() {
      el.src = binding.value
    }
  }
}

