import React from 'react'
import {Icon} from '@roo/roo'
import './styles.less'

export default class Desc extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const {
      title,
      content = [],
    } = this.props
    let displayDOM = ''
    content.forEach((item) => {
      displayDOM += item.firstLevel
      item.children.forEach((subitem, subindex) => {
        if (typeof subitem === 'string') {
          displayDOM += `
                    <p style="margin-left: 20px;">
                        ${subindex + 1}、${subitem}
                    </p>`
        } else {
          let grandson = ''
          subitem.children.forEach((sonitem) => {
            grandson = `${grandson}
                        <p style="margin-left: 40px;">
                            ${sonitem}
                        </p>`
          })
          displayDOM += `<p style="margin-left: 20px;">
                                    ${subindex + 1}、${subitem.parent}
                                    </p>${grandson}`
        }
      })
    })
    return (
      <div id="desc-con">
        <div className={`top ${content.length === 0 ? 'only-title-top' : ''}`}>
          <Icon name="info-circle" size={18} color="#5F8AF6" className="icon" />
          <span id="title">{title || '说明:'}</span>
        </div>
        <div className="content" dangerouslySetInnerHTML={{__html: displayDOM}} />
      </div>
    )
  }
}
