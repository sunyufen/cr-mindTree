import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import MindTree from 'cr-mindtree'
import '../assets/index.less';

const reactContainer = document.getElementById('__react-content');
const bodyContainer = document.getElementsByTagName('body')
bodyContainer[0].style.padding = '10px'

function handleTreeChange(val) {
  console.log(val)
}
function handleLeafClick(e, value) {
  console.log(value)
}

function render(container) {
  ReactDOM.render(
    <div>
      <h3>MINDTREE TEST</h3>
      <div style={{minHeight: '300px'}}>
      <h3>模式一：bottomCenter</h3>
        <MindTree title='分支机构' bgColor='#e4effc'
          tree={[{
            name: '刘丹',
            value: 'liu-dan'
          }, {
            name: '韩少云',
            value: 'han-shao-yun',
            accessory: '75%',
          }, {
            name: '赵四',
            value: 'zhao-si'
          }, {
            name: '增加',
            value: 'zeng-jia'
          }]}
          mode='bottomCenter'
          treeChange={handleTreeChange}
          leafClick={handleLeafClick}
        />
      </div>
      <div style={{minHeight: '300px', marginLeft: '300px'}}>
      <h3 style={{marginLeft: '-100px'}}>模式二：topRight</h3>
        <MindTree title='分支机构' bgColor='#e4effc'
          tree={[{
            name: '刘丹000',
            value: 'liu-dan',
            accessory: '12%',
          }, {
            name: '韩少云',
            value: 'han-shao-yun',
            accessory: '10%',
          }, {
            name: '赵四',
            value: 'zhao-si',
            accessory: '58%',
          }, {
            name: '增加',
            value: 'zeng-jia',
            accessory: '20%',
          }]}
          mode='topRight'
          treeChange={handleTreeChange}
          leafClick={handleLeafClick}
        />
      </div>
      <div style={{minHeight: '300px'}}>
      <h3>模式三：bottomRight</h3>
        <MindTree title='分支机构' bgColor='#e4effc'
          tree={[{
            name: '刘丹',
            value: 'liu-dan',
            accessory: '95%',
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
          mode='bottomRight'
          treeChange={handleTreeChange}
          leafClick={handleLeafClick}
        />
      </div>   
      <div style={{minHeight: '300px', marginLeft: '300px'}}>
      <h3>模式四：topLeft</h3>
        <MindTree title='分支机构' bgColor='#e4effc'
          tree={[{
            name: '刘丹',
            value: 'liu-dan',
            accessory: '20%',
          }, {
            name: '韩少云',
            value: 'han-shao-yun',
            accessory: '20%',
          }, {
            name: '赵四',
            value: 'zhao-si',
            accessory: '20%',
          }, {
            name: '增加',
            value: 'zeng-jia',
            accessory: '20%',
          }]}
          mode='topLeft'
          treeChange={handleTreeChange}
          leafClick={handleLeafClick}
        />
      </div>   
      <div style={{minHeight: '300px', marginLeft: '300px'}}>
      <h3>模式五：bottomLeft</h3>
        <MindTree title='分支机构' bgColor='#e4effc'
          tree={[{
            name: '刘丹',
            value: 'liu-dan',
            accessory: '董事',
          }, {
            name: '韩少云',
            value: 'han-shao-yun',
            accessory: '监事',
          }, {
            name: '赵四',
            value: 'zhao-si',
            accessory: '董事',
          }, {
            name: '增加',
            value: 'zeng-jia',
            accessory: '董事长',
          }]}
          mode='bottomLeft'
          treeChange={handleTreeChange}
          leafClick={handleLeafClick}
        />
      </div>                 
    </div>, container
  )
}

render(reactContainer)