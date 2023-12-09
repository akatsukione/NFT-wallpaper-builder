export const mailChimpService = {
    subscribe,
};

function subscribe(email: string) {
    const data = new URLSearchParams({
        EMAIL: email,
        "b_c6b51b36320286437b2ecc990_c6efc83aac": '',
        "group[227162][2]": "2"
    });

    const requestOptions: any = {
        method: 'POST',
        mode: 'no-cors',
        body: data
    };

    return fetch("https://nftdrip.us20.list-manage.com/subscribe/post?u=c6b51b36320286437b2ecc990&id=c6efc83aac", requestOptions)
        .then(data => {
            return data
        }).catch(error => {
            console.log(error)
        })
}

