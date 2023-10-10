export async function getPosts() {
    const response = await fetch(
        `${process.env.API_URL}/posts/?populate=image`
    );
    return await response.json();
}

export async function getPost(pUrl) {
    const response = await fetch(
        `${process.env.API_URL}/posts/?filters[url]=${pUrl}&populate=image`
    );

    return await response.json();
}
