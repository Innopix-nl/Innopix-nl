import axios from "axios";
import { config } from "./config";

export { getService };

function getService(apiAddress, params) {

    if (typeof params === "number" || typeof params === "string")
        return axios.get(config.BE + apiAddress + "/" + params);
    return axios.get(config.BE + apiAddress, { params });
}