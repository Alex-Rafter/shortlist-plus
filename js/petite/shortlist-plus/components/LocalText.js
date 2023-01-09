export function LocalText (props) {
  return {
    $template: /* html */ `<p v-cloak>{{slStore.checkIfAdded(reg) ? '${props.addedText}' : '${props.defaultText}'}}</p>`,
    reg: props.data.url
  }
}

// Example of Mark Up
/* <p v-scope="LocalText(<?= $carOne->toProp() ?>)">{{slStore.checkIfAdded(reg) ? 'added' : 'not added'}}</p> */
