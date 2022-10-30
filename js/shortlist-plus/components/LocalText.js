export function LocalText(props) {
  return {
      $template: /*html*/ `<p v-cloak>{{store.checkIfAdded(reg) ? '${props.addedText}' : '${props.defaultText}'}}</p>`,
      reg: props.data.url,
    }
}
  
// Example of Mark Up
/* <p v-scope="LocalText(<?= $carOne->toProp() ?>)">{{store.checkIfAdded(reg) ? 'added' : 'not added'}}</p> */
