import React, { Fragment } from "react";
import { Result, Button } from "antd";
import { useHistory } from "react-router-dom";

function NotFound() {

    const history = useHistory();

    return (
        <Fragment>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary" onClick={() => history.push("/")}>Back Home</Button>}
            />
        </Fragment>
    )
}

export default NotFound;