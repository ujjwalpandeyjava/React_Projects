import axios from "axios";

window.mustForChat = {
    userId: "",
}
const ax = axios.create({
    baseURL: `https://liquorstore.aisommelier.org`,
    timeout: 30000,
});
const apiEndPoints = {
    WORK_ONE(url = "") {
        return {
            initialAIMessage: () => `Hi ${window.mustForChat.userName || "patient"}, I am Sirona ${window.mustForChat.companyName ? `from ${window.mustForChat.companyName},` : ""} your healthcare guide, How  can I help you?`,
            resolveQuery: (query) => ax.get(url, { params: { query: query } }),
            fetchAll: () => ax.get(url),
            fetchById: (id) => ax.get(url + id),
            create: (newRecord) => ax.post(url, newRecord, { params: { query: "query" } }),
            update: (id, updatedRecord) => ax.put(url + id, updatedRecord),
            delete: (id) => ax.delete(url + id),
        }
    },
    OTHER_WORK(url = "addPath") {
        return {
            fetchAll: () => ax.get(url),
            fetchById: (id) => ax.get(url, { params: { id } }),
            create: (newRecord) => ax.post(url, newRecord),
            update: (id, updatedRecord) => ax.put(url, updatedRecord, { params: { id } }),
            delete: (id) => ax.delete(url, { params: { id } }),
        }
    }
}

// Axios Interceptors
ax.interceptors.request.use(config => {
    let defaultData = {
        userId: window.mustForChat.userId,
        userName: window.mustForChat.userName,
        orgId: window.mustForChat.orgId,
        companyName: window.mustForChat.companyName
    };
    config.params = { ...defaultData, ...config.params };
    return config;
}, (error) => {
    console.error("Error in interceptor: ", error.message);
    return Promise.reject(error);
});
ax.interceptors.response.use(response => {
    /* console.log({
        URL_base: response.baseURL,
        URL_Full: `${response.baseURL}${response.url}`,
        response: response,
        params: response.config.params,
        data: response.data,
        status: response.status,
        statusText: response.statusText
    }); */
    // Check the status and redirect it as per the status to specific page 
    return response;
}, function (error) {
    console.error("Error in response interceptor: ", error.message);
    return Promise.reject(error);
});
export default apiEndPoints;