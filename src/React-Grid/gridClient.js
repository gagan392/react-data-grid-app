import people from "./../people";

function getDataFromApi() {

    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         console.log(' people => ', people);
    //         resolve(people)
    //     }, 1000);
    // })

    return people;
}

export default getDataFromApi;