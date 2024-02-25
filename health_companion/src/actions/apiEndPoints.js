import axios from "axios";

window.mustForChat = {
    companion_UserId: "",
    orgId: "",
    userId: "",
    userName: "",
    companyName: ""
}

// http://localhost:3000/?orgId=org_3_helthcare_assistant&userId=a8716d42-b042-477c-9d71-d05443a0ba12&userName=Sylvie%20Silverstone&companyName=Mapple
// http://192.168.1.7:3000/?orgId=org_3_helthcare_assistant&userId=a8716d42-b042-477c-9d71-d05443a0ba12&userName=Sylvie%20Silverstone&companyName=Mapple

const ax = axios.create({
    baseURL: `https://liquorstore.aisommelier.org`,
    timeout: 30000, // Will be aborted after 30s
});
const apiEndPoints = {
    COMPANION_CHAT(url = '/web') {
        return {
            initialAIMessage: () => `Hi ${window.mustForChat.userName || "patient"}, I am Sirona ${window.mustForChat.companyName ? `from ${window.mustForChat.companyName},` : ""} your healthcare guide, How  can I help you?`,
            resolveQuery: (query) => ax.get(url, { params: { query: query } }),
            resolveQuerySimple_Example: (query) => {
                let url = new URL("https://liquorstore.aisommelier.org/web");
                let params = {
                    userId: window.mustForChat.userId,
                    userName: window.mustForChat.userName,
                    orgId: window.mustForChat.orgId,
                    query: query,
                    companyName: window.mustForChat.companyName
                }
                Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
                return axios.get(url);
            },
            fetchAll: () => ax.get(url),
            fetchById: (id) => ax.get(url + id),
            create: (newRecord) => ax.post(url, newRecord),
            update: (id, updatedRecord) => ax.put(url + id, updatedRecord),
            delete: (id) => ax.delete(url + id),
        }
    },
    CHAT_ACTION(url = "/chatAction") {
        return {
            conversationEnded: () => ax.get(url, { params: { cmd: "FINISH", userName: window.mustForChat.userName, orgId: window.mustForChat.orgId, userId: window.mustForChat.userId } })
        }
    },
    USER_COMPANY_DETAILS(url = "/userDetails") {
        return {
            getUserCompanyDetails: (companion_UserId) => ax.get(url, { params: { companion_userID: companion_UserId } })
        }
    },
    OTHER_WORK(url = 'addPath/') {
        return {
            fetchAll: () => ax.get(url),
            fetchById: (id) => ax.get(url + id),
            create: (newRecord) => ax.post(url, newRecord),
            update: (id, updatedRecord) => ax.put(url + id, updatedRecord),
            delete: (id) => ax.delete(url + id),
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
    return Promise.reject(error);
});
export default apiEndPoints;