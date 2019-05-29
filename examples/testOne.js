import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import MindTree from 'cr-mindTree'
import '../assets/index.less';

const reactContainer = document.getElementById('__react-content');
const bodyContainer = document.getElementsByTagName('body')
bodyContainer[0].style.padding = '10px'
reactContainer.style.cssText = `
                                border: 1px solid #11d0bc;
                                padding: 10px;
                                margin-bottom: 10px;
                               `

function render(container) {
  ReactDOM.render(
    <div>
      <h3>MINDTREE TEST</h3>
      <MindTree title='分支机构' bgColor='#e4effc'
            tree={[{
              name: '刘丹',
              value: 'liu-dan'
            }, {
              name: '韩少云',
              value: 'han-shao-yun'
            }, {
              name: '赵四',
              value: 'zhao-si'
            }, {
              name: '增加',
              value: 'zeng-jia'
            }]}
          />
    </div>, container
  )
}

render(reactContainer)