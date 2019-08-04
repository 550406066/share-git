import React from 'react'
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';

export default function TodoList(props) {
  console.log('todo')
  const { inputValue, onChange, onAddItem, onDeleteItem, data } = props
  return (
    <div>
      <Input placeholder={inputValue}
        value={inputValue}
        style={{ width: "250px", marginRight: '10px' }}
        onChange={onChange}
      />
      <Button type="primary" onClick={onAddItem}>添加</Button>
      <List
        style={{ width: "250px", marginRight: '10px' }}
        bordered
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item
            onClick={() => onDeleteItem(index)}
          >
            {item}
          </List.Item>
        )}
      />
    </div>
  )
}


