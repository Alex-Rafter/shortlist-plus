export function GlobalHeart(props) {
  return {
    $template: /*html*/ `<span v-cloak :class="store.count < 1 ? '${
      props.class === undefined ? "" : props.class
    } icon icon-heart1 global-heart' : '${
      props.class === undefined ? "" : props.class
    } icon icon-heart2 global-heart'" :data-count="store.count"></span>`,
  };
}
