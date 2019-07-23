import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import MindTree from '../index'
import '../assets/index.less'
import '../assets/example.less'


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
      <div>
      <h3>无枝叶模式</h3>
      <MindTree className={"treeTitle"} bgColor='#6eabec' title='南京云帐房网络科技有限公司' />
      </div>
      <div style={{minHeight: '300px'}}>
      <h3>模式一：bottomCenter</h3>
        <MindTree title='分支机构' bgColor='#e4effc'
          tree={[{
            name: '刘丹',
            value: 'liu-dan'
          }, {
            name: 'hello',
            value: 'hello',        
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
            name: '李易峰测试文本长度如果很长会有问题呢',
            value: 'li-yi-feng',
            accessory: '88%',          
          }]}
          mode='topRight'
          treeChange={handleTreeChange}
          leafClick={handleLeafClick}
          treeBoxWidth={300}
        />
      </div>
      <div style={{minHeight: '500px'}}>
      <h3>模式三：bottomRight</h3>
        <MindTree title='分支机构' bgColor='#e4effc'
          tree={[{
            name: '刘丹',
            value: 'liu-dan',
          }, {
            name: '李易峰测试是文本长达李易峰测试是文本长达',
            value: 'li-yi-feng',          
          }]}
          mode='bottomRight'
          treeChange={handleTreeChange}
          leafClick={handleLeafClick}
        />
      </div>   
      <div style={{minHeight: '300px', marginLeft: '300px'}}>
      <h3>模式四：topLeft</h3>
        <MindTree title='分支机构' bgColor='red'
          tree={[{
            name: '刘丹',
            value: 'liu-dan',
            accessory: '20%',
          }, {
            name: '李易峰454666',
            value: 'li-yi-feng',
            accessory: '88%',           
          }]}
          mode='topLeft'
          treeChange={handleTreeChange}
          leafClick={handleLeafClick}
          hoverBgColor='green'
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
            name: '李易峰',
            value: 'li-yi-feng',
            accessory: '88%',           
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