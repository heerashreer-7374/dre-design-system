import { customElement } from 'lit/decorators.js'
import { DreFieldGroup } from './field-group.js'
import './toast-group.js'

@customElement('dre-checkbox-group')
export class DreCheckboxGroup extends DreFieldGroup {}

@customElement('dre-radio-group')
export class DreRadioGroup extends DreFieldGroup {}

@customElement('dre-toggle-group')
export class DreToggleGroup extends DreFieldGroup {}

@customElement('dre-input-group')
export class DreInputGroup extends DreFieldGroup {
  override connectedCallback() {
    super.connectedCallback()
    this.denseItems = true
  }
}

@customElement('dre-dropdown-group')
export class DreDropdownGroup extends DreFieldGroup {
  override connectedCallback() {
    super.connectedCallback()
    this.denseItems = true
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-checkbox-group': DreCheckboxGroup
    'dre-radio-group': DreRadioGroup
    'dre-toggle-group': DreToggleGroup
    'dre-input-group': DreInputGroup
    'dre-dropdown-group': DreDropdownGroup
  }
}
