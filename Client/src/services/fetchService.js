import cacheService from "./cacheService";

async function fetchOptions(url, method, data) {
    const options = {
        method: method,
        headers: {
        "Content-Type": "application/json",
        },
    };

    // Add token to all requests
    if (cacheService.isLoggedIn("token")) {
        options.headers = {
        authorization: `Bearer ${cacheService.getLocalValue("token")}`,
        "Content-Type": "application/json",
        }
    }

    // Stringify body
    if (method !== "GET") options.body = JSON.stringify(data);

    return await fetch(url, options);
}

async function fetchJson(url, method, data) {
    return await (await fetchOptions(url, method, data)).json();
}

async function fetchRes(url, method, data) {
    return await fetchOptions(url, method, data);
}


export default { fetchJson, fetchRes };