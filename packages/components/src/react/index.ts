/**
 * Lightweight React wrappers generated from CEM-friendly custom elements.
 * Consumers can also use `@lit/react` for richer interop.
 */
import React from 'react'
import { createComponent } from '@lit/react'
import { DreButton } from '../atoms/button/button.js'
import { DreCheckbox } from '../atoms/checkbox/checkbox.js'
import { DreInput } from '../atoms/input/input.js'
import { DreModal } from '../organisms/modal/modal.js'

export const Button = createComponent({
  react: React,
  tagName: 'dre-button',
  elementClass: DreButton,
  events: { onDreClick: 'dre-click' },
})

export const Checkbox = createComponent({
  react: React,
  tagName: 'dre-checkbox',
  elementClass: DreCheckbox,
  events: { onDreChange: 'dre-change' },
})

export const Input = createComponent({
  react: React,
  tagName: 'dre-input',
  elementClass: DreInput,
  events: { onDreInput: 'dre-input' },
})

export const Modal = createComponent({
  react: React,
  tagName: 'dre-modal',
  elementClass: DreModal,
  events: { onDreClose: 'dre-close' },
})
