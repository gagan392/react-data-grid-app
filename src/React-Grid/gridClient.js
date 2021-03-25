import people from "./../people";

function getDataFromApi() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(people)
        }, 1000);
    })
}

export default getDataFromApi;