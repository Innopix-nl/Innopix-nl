import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { endPoints } from "../_helpers";
import { episodeAction } from "../redux/actions/episodes.action";
import { Row, Col } from 'antd';
import { Details } from "../components/details";


function EpisodeDetails(props) {

    const episodeReducer = useSelector(state => state.fetchEpisode);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(episodeAction.fetchEpisode(endPoints.EPISODES, props.match.params.id));
    }, []);

    return (
        <Fragment>
            <Row justify="space-around" align="middle">
                <Col span={22}>
                    <Details response={episodeReducer.response} loading={episodeReducer.loading} />
                </Col></Row>
        </Fragment>
    )
}

export default EpisodeDetails;