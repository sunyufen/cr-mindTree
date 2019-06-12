import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import OuiDom from './utils/ouiDomUtils'
import { Icon } from 'antd'
import velocity from 'velocity-animate'
import domAlign from 'dom-align'
import classNames from 'classnames'

// import TreeLineDown1 from './assets/treeLineDown1.png'
// import TreeLineDown2 from './assets/treeLineDown2.png'
// import TreeLineDownLast from './assets/treeLineDownLast.png'
// import TreeLineTopLast from './assets/treeLine1.png'
// import TreeLineTop2 from './assets/treeLine2.png'
// import TreeLineTopFirst from './assets/treeLineTopLast.png'
// import TreeLineTopLeft from './assets/treeLineLeftTop.png'
// import TreeLineLeftTopFirst from './assets/treeLineLeftTopFirst.png'
// import TreeLineLeftDown from './assets/treeLineLeftDown.png'
// import TreeLineLeftDownLast from './assets/treeLineLeftDownLast.png'
// import TreeLineBottomCenter from './assets/treeLine2.png'
// import TreeLineOnlyOne from './assets/treeLineOnlyOne.png'

const TreeLineTopLast = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABMAQMAAACh04BMAAAABlBMVEUAAAC0tLQrlfMqAAAAAXRSTlMAQObYZgAAABtJREFUOMtjgIAECDXKG+WN8kYs7z8S+IDKAwCg0DWJ9+1vqwAAAABJRU5ErkJggg=='
const TreeLineDown1 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABMAQMAAACh04BMAAAABlBMVEUAAAC0tLQrlfMqAAAAAXRSTlMAQObYZgAAABtJREFUOMtj+I8EPqDxICABQo3yRnmjvJHKAwDzGzWJFvqsYAAAAABJRU5ErkJggg=='
const TreeLineDown2 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABMAQMAAACh04BMAAAABlBMVEUAAAC0tLQrlfMqAAAAAXRSTlMAQObYZgAAABxJREFUOMtjgID6/yDwASsvAUKN8kZ5o7yRygMApWIolRzU7nYAAAAASUVORK5CYII='
const TreeLineDownLast = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABMAQMAAACh04BMAAAABlBMVEUAAAC0tLQrlfMqAAAAAXRSTlMAQObYZgAAABlJREFUOMtjgID6/yDwAY03CkbBKBgFQAAAe5oM1a1+5mYAAAAASUVORK5CYII='
const TreeLineTop2 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABMAQMAAACh04BMAAAABlBMVEUAAAC0tLQrlfMqAAAAAXRSTlMAQObYZgAAABxJREFUOMtjgIAECDXKG+WN8kY4r/4/CHxA5QEAwZMolaw8DaEAAAAASUVORK5CYII='
const TreeLineTopFirst = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABMAQMAAACh04BMAAAABlBMVEUAAAC0tLQrlfMqAAAAAXRSTlMAQObYZgAAABdJREFUOMtjGAWjYBSMAgSo/w8CH1B5AI6eDNVKPTeWAAAAAElFTkSuQmCC'
const TreeLineTopLeft = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABMAQMAAACh04BMAAAABlBMVEUAAAC0tLQrlfMqAAAAAXRSTlMAQObYZgAAABtJREFUOMtjgIAECDXKG+WN8kYs7z8YPMDGAwAg2il1WWvVOAAAAABJRU5ErkJggg=='
const TreeLineLeftTopFirst = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABMAQMAAACh04BMAAAABlBMVEUAAAC0tLQrlfMqAAAAAXRSTlMAQObYZgAAABZJREFUOMtjGAWjYBSMAhD4DwYPsPEA7dYNtYS4VE0AAAAASUVORK5CYII='
const TreeLineLeftDown = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABMAQMAAACh04BMAAAABlBMVEUAAAC0tLQrlfMqAAAAAXRSTlMAQObYZgAAABtJREFUOMtj+A8GDxggAMFDgIRR3ihvlDeyeQCPVil1Y8Z+KAAAAABJRU5ErkJggg=='
const TreeLineLeftDownLast = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABMAQMAAACh04BMAAAABlBMVEUAAAC0tLQrlfMqAAAAAXRSTlMAQObYZgAAABlJREFUOMtj+A8GBxjAAM4bBaNgFIwCOAAAXv8NdTODBYsAAAAASUVORK5CYII='
const TreeLineBottomCenter = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABMAQMAAACh04BMAAAABlBMVEUAAAC0tLQrlfMqAAAAAXRSTlMAQObYZgAAABxJREFUOMtjgIAECDXKG+WN8kY4r/4/CHxA5QEAwZMolaw8DaEAAAAASUVORK5CYII='
const TreeLineOnlyOne = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABMAQMAAACh04BMAAAABlBMVEVHcEy0tLQR2M60AAAAAXRSTlMAQObYZgAAABdJREFUOMtj+I8EPjCg8kbBKBgFowAIAMlTGcmmcbuAAAAAAElFTkSuQmCC'

const alignConfig = {
  topRight: {
    points: ['bl', 'tr'],
    offset: [ 0, 32],
    // offset: [ 0, 16],
  },
  bottomRight: {
    points: ['tl', 'tr'],
    offset: [0, 0],    
  },
  topLeft: {
    points: ['br', 'tl'],
    offset: [ 0, 32],    
    // offset: [ 0, 16],    
  },
  bottomLeft: {
    points: ['tr', 'bl'],
    offset: [ 0, -29],    
  },
  bottomCenter: {
    points: ['tl', 'bl'],
    offset: [-18, 0],       
  } 
}

class MindTree extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      mode: props.mode,
      leafIsOpen: true,
      tree: props.tree,
    }
  }

  componentDidMount() {
    const { bgColor, tree, treeBoxWidth, mode, prefixCls } = this.props
    const titleDom = document.querySelectorAll(`.${prefixCls}-title`)
    const treeBox = document.querySelectorAll(`.${prefixCls}-tree-box`)
    if (mode === 'topRight' || mode === 'topLeft') {
      const tree = this.state.tree.slice()
      if (tree && Array.isArray(tree) ) {
        this.setState({
          tree: tree.reverse()
        })
      }
    }
    const titleStyle = {
      ['cursor']: tree ? 'pointer' : 'default'
    }
    const boxStyle = {
      ['width']: treeBoxWidth + 'px'
    }
    titleDom.forEach((ele) => {
      OuiDom.setStyles(ele, titleStyle)
    })
    treeBox.forEach((ele) => {
      OuiDom.setStyles(ele, boxStyle)
    })

    const leafBoxH = OuiDom.outerHeight(this.leafBox)

    const leafTreeStyle = {
      ['width']: treeBoxWidth + 'px',
      ['height']: leafBoxH + 'px',
    }
    // 修正绝对定位的 LeafDom 的宽高度
    OuiDom.setStyles(this.leafTree, leafTreeStyle)
    if (mode) {
      domAlign(this.leafTree, this.titleDom, alignConfig[mode])
    }
  }
  handleTreeChange = (event) => { 
    const { treeChange, prefixCls, mode } = this.props
    const titleDom = event.currentTarget
    const leafDom = titleDom.nextElementSibling.querySelector(`.${prefixCls}-tree-box`)
    const leafDomH = OuiDom.outerHeight(leafDom)
    if (mode === 'topRight' || mode === 'topLeft') {
      if (this.state.leafIsOpen) {
        velocity(leafDom, {
          marginTop: leafDomH + 'px',
          opacity: 0,
        }, {
          duration: 400
        })
      } else {
        velocity(leafDom, {
          marginTop: '0px',
          opacity: 1,
        }, {
          duration: 400
        })      
      }
    } else {
      if (this.state.leafIsOpen) {
        velocity(leafDom, {
          marginTop: -leafDomH + 'px',
          opacity: 0,
        }, {
          duration: 400
        })
      } else {
        velocity(leafDom, {
          marginTop: '0px',
          opacity: 1,
        }, {
          duration: 400
        })          
      }
    }

    this.setState({
      leafIsOpen: !this.state.leafIsOpen
    }, () => {
      if (treeChange && typeof treeChange === 'function') {
        treeChange(this.state.leafIsOpen)
      }
    })

  }

  handleLeafClick = (event, val) => {
    const { leafClick } = this.props
    if (leafClick && typeof leafClick === 'function') {
      leafClick(event, val)
    }
  }

  componentDidUpdate() {

  }

  render() {
    const { mode, title, bgColor, prefixCls, className } = this.props
    const tree = this.state.tree
    const treeLast = tree && tree.length > 0 && tree.length - 1
    const mindTreeClassName = classNames({
      [className]: !!className,
      [prefixCls]: true,
    })
    const leafClassName = classNames({
      [`${prefixCls}-tree`]: true,
      [`${prefixCls}-tree-none`]: !(!!tree),
    })
    const list = tree && tree.length > 0 && (
      tree.map((item, index) => {
        if (mode === 'topRight') {
          if (tree.length === 1) {
            return (
              <div className={`${prefixCls}-tree-list`} key={index}>
                <span className={`${prefixCls}-tree-list-left`} style={{ marginTop: 45, backgroundImage: `url(${TreeLineOnlyOne})`}}></span>
                <span className={`${prefixCls}-tree-list-text`} style={{backgroundColor: bgColor, top: '35px' }} onClick={e => this.handleLeafClick(e, item)}>
                  <span>{item.name}</span>
                  { item.accessory && (<span className={`${prefixCls}-tree-list-accessory`}>{item.accessory}</span>)}
                </span>
              </div>              
            )
          }
          return (
            <div className={`${prefixCls}-tree-list`} key={index}>
              <span className={`${prefixCls}-tree-list-left`} style={{backgroundImage: index === 0 ? `url(${TreeLineTopFirst})` : 
                                                                     index === treeLast ? `url(${TreeLineTopLast})` : `url(${TreeLineTop2})`}}></span>
              <span className={`${prefixCls}-tree-list-text`} style={{backgroundColor: bgColor, top: '35px' }} onClick={e => this.handleLeafClick(e, item)}>
                <span>{item.name}</span>
                { item.accessory && (<span className={`${prefixCls}-tree-list-accessory`}>{item.accessory}</span>)}
              </span>
            </div>
          )
        }
        if (mode === 'topLeft') {
          if (tree.length === 1) {
            return (
              <div className={`${prefixCls}-tree-list`} key={index} style={{textAlign: 'right'}}>
                <span className={`${prefixCls}-tree-list-text`} style={{backgroundColor: bgColor, top: '35px' }} onClick={e => this.handleLeafClick(e, item)}>
                  <span>{item.name}</span>
                  { item.accessory && (<span className={`${prefixCls}-tree-list-accessory`}>{item.accessory}</span>)}
                </span>
                <span className={`${prefixCls}-tree-list-left`} style={{ marginTop: 45,backgroundImage: `url(${TreeLineOnlyOne})`}}></span>
              </div>              
            )
          }
          return (
            <div className={`${prefixCls}-tree-list`} key={index} style={{textAlign: 'right'}}>
              <span className={`${prefixCls}-tree-list-text`} style={{backgroundColor: bgColor, top: '35px' }} onClick={e => this.handleLeafClick(e, item)}>
                <span>{item.name}</span>
                { item.accessory && (<span className={`${prefixCls}-tree-list-accessory`}>{item.accessory}</span>)}
              </span>
              <span className={`${prefixCls}-tree-list-left`} style={{backgroundImage: index === 0 ? `url(${TreeLineLeftTopFirst})` : 
                                                                     index === treeLast ? `url(${TreeLineTopLast})` : `url(${TreeLineTopLeft})`}}></span>
            </div>
          )          
        }
        if (mode === 'bottomLeft') {
          if (tree.length === 1) {
            return (
              <div className={`${prefixCls}-tree-list`} key={index} style={{textAlign: 'right'}}>
                <span className={`${prefixCls}-tree-list-text`} style={{backgroundColor: bgColor, top: '-13px' }} onClick={e => this.handleLeafClick(e, item)}>
                  <span>{item.name}</span>
                  { item.accessory && (<span className={`${prefixCls}-tree-list-accessory`}>{item.accessory}</span>)}
                </span>
                <span className={`${prefixCls}-tree-list-left`} style={{backgroundImage: `url(${TreeLineOnlyOne})`}}></span>
              </div>              
            )
          }
          return (
            <div className={`${prefixCls}-tree-list`} key={index} style={{textAlign: 'right'}}>
              <span className={`${prefixCls}-tree-list-text`} style={{backgroundColor: bgColor, top: '-13px' }} onClick={e => this.handleLeafClick(e, item)}>
                <span>{item.name}</span>
                { item.accessory && (<span className={`${prefixCls}-tree-list-accessory`}>{item.accessory}</span>)}
              </span>
              <span className={`${prefixCls}-tree-list-left`} style={{backgroundImage: index === 0 ? `url(${TreeLineDown1})` : 
                                                                     index === treeLast ? `url(${TreeLineLeftDownLast})` : `url(${TreeLineLeftDown})`}}></span>
            </div>
          )             
        }
        if (mode === 'bottomCenter') {
          return (
            <div className={`${prefixCls}-tree-list`} key={index}>
              <span className={`${prefixCls}-tree-list-left`} style={{backgroundImage: index === 0 ? `url(${TreeLineBottomCenter})` : 
                                                                     index === treeLast ? `url(${TreeLineBottomCenter})` : `url(${TreeLineBottomCenter})`}}></span>
              <span className={`${prefixCls}-tree-list-text`} style={{backgroundColor: bgColor, top: '35px' }} onClick={e => this.handleLeafClick(e, item)}>
                <span>{item.name}</span>
                { item.accessory && (<span className={`${prefixCls}-tree-list-accessory`}>{item.accessory}</span>)}
              </span>
            </div>
          )          
        }
        if (mode === 'bottomRight') {
          if (tree.length === 1) {
            return (
              <div className={`${prefixCls}-tree-list`} key={index}>
                <span className={`${prefixCls}-tree-list-left`} style={{ backgroundImage: `url(${TreeLineOnlyOne})`}}></span>
                <span className={`${prefixCls}-tree-list-text`} style={{backgroundColor: bgColor, top: '-13px' }} onClick={e => this.handleLeafClick(e, item)}>
                    <span>{item.name}</span>
                    { item.accessory && (<span className={`${prefixCls}-tree-list-accessory`}>{item.accessory}</span>)}   
                </span>
              </div>  
            )
          }
          return (
            <div className={`${prefixCls}-tree-list`} key={index}>
              <span className={`${prefixCls}-tree-list-left`} style={{ backgroundImage: index === 0 ? `url(${TreeLineDown1})` : 
                                                                    index === treeLast ? `url(${TreeLineDownLast})` : `url(${TreeLineDown2})`}}></span>
              <span className={`${prefixCls}-tree-list-text`} style={{backgroundColor: bgColor, top: '-13px' }} onClick={e => this.handleLeafClick(e, item)}>
                  <span>{item.name}</span>
                  { item.accessory && (<span className={`${prefixCls}-tree-list-accessory`}>{item.accessory}</span>)}   
              </span>
            </div>  
          )        
        }
        return (
          <div className={`${prefixCls}-tree-list`} key={index}>
            <span className={`${prefixCls}-tree-list-left`} style={{ backgroundImage: index === 0 ? `url(${TreeLineDown1})` : 
                                                                   index === treeLast ? `url(${TreeLineDownLast})` : `url(${TreeLineDown2})`}}></span>
            <span className={`${prefixCls}-tree-list-text`} style={{backgroundColor: bgColor, top: '-13px' }} onClick={e => this.handleLeafClick(e, item)}>
                <span>{item.name}</span>
                { item.accessory && (<span className={`${prefixCls}-tree-list-accessory`}>{item.accessory}</span>)}   
            </span>
          </div>
        )
      })
    )
    return (
      <div className={mindTreeClassName}>
        <div className={`${prefixCls}-title`} style={{backgroundColor: bgColor}} onClick={this.handleTreeChange} ref={titleDom => this.titleDom = titleDom}>
          {
            tree && (tree.length > 0) && (
            <span className={`${prefixCls}-title-decoration`}>
              {
                this.state.leafIsOpen ? (<Icon type="minus-circle" />) : (<Icon type="plus-circle" />)
              }
            </span>
            )
          }
          <span className={`${prefixCls}-title-text`}>{title}</span>
        </div>
        
        <div className={leafClassName} ref={leafTree => this.leafTree = leafTree}>
          <div className={`${prefixCls}-tree-box`} style={{
            top: (mode === 'bottomLeft' || mode === 'bottomRight') ? '0px' : '-13px',
          }} ref={leafBox => this.leafBox = leafBox}>
            <div className={`${prefixCls}-tree-listBox`} style={{marginTop: mode === 'bottomCenter' ? '0' : '13px'}}>
              {list}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

MindTree.propTypes = {
  mode: PropTypes.oneOf(['topRight', 'bottomRight', 'topLeft', 'bottomLeft', 'bottomCenter']),
  title: PropTypes.string,
  tree: PropTypes.arrayOf(PropTypes.object),
  bgColor: PropTypes.string,
  treeChange: PropTypes.func,
  treeBoxWidth: PropTypes.number,
  leafClick: PropTypes.func,
  prefixCls: PropTypes.string,
  className: PropTypes.string,
}

MindTree.defaultProps = {
  mode: 'bottomRight',
  title: '暂无数据',
  bgColor: '#f5efdc',
  treeBoxWidth: 300,
  prefixCls: 'cr-mind-tree'
}
export default MindTree