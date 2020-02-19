import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

import Home from '@/views/Home.vue'
import Carousel from '@/components/Carousel.vue'

describe('Home.vue', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallowMount(Home);
  });
  it('renders', () => {
    expect(wrapper.exists()).toBe(true);
  })
  it('has 3 buttons', () => {
    expect(wrapper.find('#grid_btn').text()).toMatch(/Show Grid/);
    expect(wrapper.find('#carousel_btn').text()).toMatch(/Show Carousel/);
    expect(wrapper.find('#about_btn').text()).toMatch(/About/);
  })
  it('click on show carousel shows carousel view', () => {
    wrapper.find('#carousel_btn').trigger('click');
    expect(wrapper.contains(Carousel)).toBe(true);
  })
})
