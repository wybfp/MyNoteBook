import React, { Component } from 'react'
import { Select, Tag,Button } from 'antd';
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid';
import moment  from 'moment'

// const options = [{ value: '立刻' }, { value: '尽快' }, { value: '还早' }, { value: '记着' }];
const options = [{ label:'立刻',value: 'red' }, { label:'尽快',value: 'lime' }, {label:'还早', value: 'green' }, {label:'记着', value: 'gold' },
{ label:'日常学习',value: 'blue' }, { label:'打工日常',value: 'yellow' }, {label:'休闲娱乐', value: 'black' }];


export default class choose extends Component {
  state={
    level:[]
  }

  static propTypes = {
    addTodo:PropTypes.func.isRequired,
    content:PropTypes.string.isRequired,
    handleClear:PropTypes.func.isRequired
    }

    handelSelect=(_,chose)=>{
      const {level}=this.state
      const newLevel=[chose.label,...level]
      // console.log(newLevel);
      this.setState({level:newLevel})
    }
    
    handleSubmit=()=>{
      const {level}=this.state
      const todoobj={id:nanoid(),content:this.props.content,level:level[0],kind:level[1],createData: moment().format('YYYY-MM-DD'),done:false}
      // console.log(todoobj);
      this.props.addTodo(todoobj)
      this.props.handleClear()
    }

    tagRender=(props)=>{
        const {label,  value, closable, onClose } = props;

        return (
          <Tag color={value} closable={closable} onClose={onClose} style={{ marginRight: 3 }}>
            {label}
          </Tag>
        );
      }
      
    render() {
        return (
            <div>
              <Select
                mode="multiple"
                showArrow
                tagRender={this.tagRender}
                // defaultValue={['red', 'blue']}
                style={{ width: 180,marginBottom:5,marginRight:5}}
                options={options}
                onSelect={this.handelSelect}
            />
            <Button
            style={{width:80,height:32,top:-7}} 
            onClick={this.handleSubmit}
            type="primary">确认</Button>
            </div>
        )
    }
}
