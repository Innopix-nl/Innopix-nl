import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { tvShowAction } from "../redux/actions/tvshows.action";
import { endPoints } from "../_helpers";
import { Listing } from "../components";
import { Col, Row } from "antd";

function TVshows() {

    let fetchTVShowsReducer = useSelector(state => state.fetchTVShows);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(tvShowAction.fetchTVShows(endPoints.TV_SHOWS, { q: "powerpuff girls", embed: "episodes" }));
    }, []);
    const grid = { xs: 24, sm: 24, md: 12, lg: 12, xl: 12 };
    return (
        <Fragment>
            <Row justify="center">
                <Col {...grid}>
                    <div style={{ textAlign: "center" }}>
                        <img style={{ width: "95%" }} src={fetchTVShowsReducer.loading ? "" : fetchTVShowsReducer.response ? fetchTVShowsReducer.response.image.original : ""}></img>
                    </div>
                </Col>
                <Col {...grid}>
                    <Listing list={fetchTVShowsReducer.response} loading={fetchTVShowsReducer.loading} />
                </Col>
            </Row>
        </Fragment>
    )
}

export default TVshows;