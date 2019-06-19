import React from 'react'
import { render, mount, shallow } from 'enzyme'
import { renderToJson } from 'enzyme-to-json'
import MindTree from '../index'
import expect from 'expect.js'

describe('MindTree basic', () => {
  it('renders correctly', () => {
    const wrapper = mount(<MindTree bgColor='#6eabec' title='南京云帐房网络科技有限公司' />);
    expect(wrapper.props().title).to.equal('南京云帐房网络科技有限公司');
  })

  it('render tree props', () => {
    const wrapper = render(
      <MindTree 
        title='分支机构'
        tree={[{
          name: '测试一',
          value: 'ce-shi-yi'
        }, {
          name: '测试二',
          value: 'ce-shi-er'
        }]}
      />
    );
    expect(wrapper.find('.cr-mind-tree-tree-list').length).to.equal(2)
  })

  it('check the click event', () => {
    const wrapper = mount(
      <MindTree 
        title='分支机构'
        tree={[{
          name: '测试一',
          value: 'ce-shi-yi'
        }, {
          name: '测试二',
          value: 'ce-shi-er'
        }]}
      />
    )
    wrapper.find('.cr-mind-tree-title').simulate('click')
    expect(wrapper.find('.anticon').hasClass('anticon-plus-circle'))
  })
  
})