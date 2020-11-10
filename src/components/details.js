import React, { Fragment } from "react";
import { Descriptions, Button, Image } from 'antd';
import { useHistory } from "react-router-dom";


export function Details(props) {

    const history = useHistory();

    function handleLoc() {
        history.push("/");
    }

    if (typeof props.loading !== "undefined" && !props.loading)
        return (
            <Fragment>
                <Descriptions
                    bordered
                    title="Episode Details"
                    size={"default"}
                    extra={<Button type="danger" onClick={handleLoc}>Exit</Button>}
                >
                    <Descriptions.Item label="Name">{props.response.name}</Descriptions.Item>
                    <Descriptions.Item label="Season">{props.response.season}</Descriptions.Item>
                    <Descriptions.Item label="Air Date">{props.response.airdate}</Descriptions.Item>
                    <Descriptions.Item label="Air time">{props.response.airtime}</Descriptions.Item>
                    <Descriptions.Item label="Image">
                        <Image
                            width={200}
                            src={props.response.image.original}
                        />
                    </Descriptions.Item>
                </Descriptions>
            </Fragment>
        )
    return (<div>Loading...</div>)
}