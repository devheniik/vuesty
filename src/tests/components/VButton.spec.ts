import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import VButton from '../../components/Button/VButton.vue'

describe('VButton', () => {
  it('renders the correct HTML', () => {
    const wrapper = mount(VButton, {
      propsData: {
        variant: 'primary',
        disabled: false,
        size: 'small',
        backgroundColor: 'primary',
        colorBold: 500,
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('emits a click event when the button is clicked', () => {
    const wrapper = mount(VButton, {
      propsData: {
        variant: 'primary',
        disabled: false,
        size: 'small',
        backgroundColor: 'primary',
        colorBold: 500,
      },
    })

    wrapper.find('button').trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
  })

  it('has the correct computed properties', () => {
    const wrapper = mount(VButton, {
      propsData: {
        variant: 'primary',
        disabled: false,
        size: 'small',
        backgroundColor: 'primary',
        colorBold: 500,
      },
    })

    expect(wrapper.vm.component).toBe('button')
  })
})
