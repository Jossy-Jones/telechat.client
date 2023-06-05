import axios from "axios";
import store from "../store";

const token = store.getters["auth/getAuth"];

const config = (token) ? {
    headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json"
    }
} : {
    headers: {
        "Content-type": "application/json"
    }
}
