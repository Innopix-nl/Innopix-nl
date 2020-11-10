import React, { useState } from "react";

import { List, Button } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

export function Listing({ list = [], loading = true }) {

    const history = useHistory();
    const [pageSize, setPageSize] = useState(3);

    function onShowSizeChange(current, pageSize) {
        setPageSize(pageSize);
    }

    function handleLoc(listData) {
        history.push("/episode-details/" + listData.id);
    }

    if (!loading)
        return (
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onShowSizeChange: onShowSizeChange,
                    pageSize,
                }}
                dataSource={list._embedded.episodes}
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        extra={
                            <img
                                width={272}
                                alt="logo"
                                src={item.image.medium}
                            />
                        }
                        actions={[
                            <Button onClick={() => handleLoc(item)} icon={<EyeOutlined />}>View</Button>
                        ]}
                    >
                        <List.Item.Meta
                            title={item.name}
                            description={<div dangerouslySetInnerHTML={{ __html: item.summary }}></div>}
                        />
                        {item.content}
                    </List.Item>
                )}
            />
        )
    return (<div>loading....</div>)
}