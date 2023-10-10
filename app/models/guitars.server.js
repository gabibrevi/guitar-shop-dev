export async function getGuitars() {
    const response = await fetch(
        `${process.env.API_URL}/guitars/?populate=image`
    );
    return await response.json();
}

export async function getGuitar(pUrl) {
    const response = await fetch(
        `${process.env.API_URL}/guitars/?filters[url]=${pUrl}&populate=image`
    );

    return await response.json();
}
