import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './index.less'
import OuiDom from './utils/ouiDomUtils'
import { Icon } from 'antd'
import velocity from 'velocity-animate'
import domAlign from 'dom-align'

import TreeLineDown1 from './assets/treeLineDown1.png'
import TreeLineDown2 from './assets/treeLineDown2.png'
import TreeLineDownLast from './assets/treeLineDownLast.png'
import TreeLineTopLast from './assets/treeLine1.png'
import TreeLineTop2 from './assets/treeLine2.png'
import TreeLineTopFirst from './assets/treeLineTopLast.png'
import TreeLineTopLeft from './assets/treeLineLeftTop.png'
import TreeLineLeftTopFirst from './assets/treeLineLeftTopFirst.png'
import TreeLineLeftDown from './assets/treeLineLeftDown.png'
import TreeLineLeftDownLast from './assets/treeLineLeftDownLast.png'
import TreeLineBottomCenter from './assets/treeLine2.png'

const alignConfig = {
  topRight: {
    points: ['bl', 'tr'],
    offset: [ 0, 16],
  },
  bottomRight: {
    points: ['tl', 'tr'],
    offset: [0, 0],    
  },
  topLeft: {
    points: ['br', 'tl'],
    offset: [ 0, 16],    
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
    }
  }

  componentDidMount() {
    const { bgColor, tree, treeBoxWidth, mode } = this.props
    const titleDom = document.querySelectorAll(`.${styles.title}`)
    const treeBox = document.querySelectorAll(`.${styles.box}`)
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
    const { treeChange } = this.props
    const titleDom = event.currentTarget
    const leafDom = titleDom.nextElementSibling.querySelector(`.${styles.box}`)
    if (this.state.leafIsOpen) {
      velocity(leafDom, 'slideUp', {
        duration: 300
      })
      this.setState({
        leafIsOpen: !this.state.leafIsOpen
      }, () => {
        if (treeChange && typeof treeChange === 'function') {
          treeChange(this.state.leafIsOpen)
        }
      })
    } else {
      velocity(leafDom, 'slideDown', {
        duration: 300
      })
      this.setState({
        leafIsOpen: !this.state.leafIsOpen
      }, () => {
        if (treeChange && typeof treeChange === 'function') {
          treeChange(this.state.leafIsOpen)
        }       
      })           
    }
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
    const { mode, title, bgColor, tree } = this.props
    const treeLast = tree && tree.length > 0 && tree.length - 1
    if (mode === 'topRight') {
      tree.reverse()
    }
    const list = tree && tree.length > 0 && (
      tree.map((item, index) => {
        if (mode === 'topRight') {
          return (
            <div className={styles.list} key={index}>
              <span className={styles.left} style={{backgroundImage: index === 0 ? `url(${TreeLineTopFirst})` : 
                                                                     index === treeLast ? `url(${TreeLineTopLast})` : `url(${TreeLineTop2})`}}></span>
              <span className={styles.text} style={{backgroundColor: bgColor, top: '35px' }} onClick={e => this.handleLeafClick(e, item)}>{item.name}</span>
            </div>
          )
        }
        if (mode === 'topLeft') {
          return (
            <div className={styles.list} key={index} style={{textAlign: 'right'}}>
              <span className={styles.text} style={{backgroundColor: bgColor, top: '35px' }} onClick={e => this.handleLeafClick(e, item)}>{item.name}</span>
              <span className={styles.left} style={{backgroundImage: index === 0 ? `url(${TreeLineLeftTopFirst})` : 
                                                                     index === treeLast ? `url(${TreeLineTopLast})` : `url(${TreeLineTopLeft})`}}></span>
            </div>
          )          
        }
        if (mode === 'bottomLeft') {
          return (
            <div className={styles.list} key={index} style={{textAlign: 'right'}}>
              <span className={styles.text} style={{backgroundColor: bgColor, top: '-13px' }} onClick={e => this.handleLeafClick(e, item)}>{item.name}</span>
              <span className={styles.left} style={{backgroundImage: index === 0 ? `url(${TreeLineDown1})` : 
                                                                     index === treeLast ? `url(${TreeLineLeftDownLast})` : `url(${TreeLineLeftDown})`}}></span>
            </div>
          )             
        }
        if (mode === 'bottomCenter') {
          return (
            <div className={styles.list} key={index}>
              <span className={styles.left} style={{backgroundImage: index === 0 ? `url(${TreeLineBottomCenter})` : 
                                                                     index === treeLast ? `url(${TreeLineBottomCenter})` : `url(${TreeLineBottomCenter})`}}></span>
              <span className={styles.text} style={{backgroundColor: bgColor, top: '35px' }} onClick={e => this.handleLeafClick(e, item)}>{item.name}</span>
            </div>
          )          
        }
        return (
          <div className={styles.list} key={index}>
            <span className={styles.left} style={{backgroundImage: index === 0 ? `url(${TreeLineDown1})` : 
                                                                   index === treeLast ? `url(${TreeLineDownLast})` : `url(${TreeLineDown2})`}}></span>
            <span className={styles.text} style={{backgroundColor: bgColor, top: '-13px' }} onClick={e => this.handleLeafClick(e, item)}>{item.name}</span>
          </div>
        )
      })
    )
    return (
      <div className={styles.mindTree}>
        <div className={styles.title} style={{backgroundColor: bgColor}} onClick={this.handleTreeChange} ref={titleDom => this.titleDom = titleDom}>
          {
            tree && (tree.length > 0) && (
            <span className={styles.decoration}>
              {
                this.state.leafIsOpen ? (<Icon type="minus-circle" />) : (<Icon type="plus-circle" />)
              }
            </span>
            )
          }
          <span className={styles.text}>{title}</span>
        </div>
        <div className={styles.tree} ref={leafTree => this.leafTree = leafTree}>
          <div className={styles.box} ref={leafBox => this.leafBox = leafBox}>
            <div className={styles.listBox} style={{marginTop: mode === 'bottomCenter' ? '0' : '13px'}}>
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
}

MindTree.defaultProps = {
  mode: 'bottomRight',
  title: '暂无数据',
  bgColor: '#f5efdc',
  treeBoxWidth: 300,
}
export default MindTree