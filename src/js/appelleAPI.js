export async function entreprise() {
    const hygraphEndpoint = import.meta.env.HYGRAPH_ENDPOINT;
    const response = await fetch(hygraphEndpoint, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify({
        query: `
            {
            entreprises(orderBy: publishedAt_ASC) {
                banniere {
                    height
                    url
                    width
                }
                logo {
                    height
                    url
                    width
                }
                description
                nom
            }
            }`,
    }),
    });
    const entreprisesData = await response.json();
    const entreprises = entreprisesData.data.entreprises;
    const entreprise1 = entreprises[0];
    return entreprise1;
}
export async function actu() {
    const hygraphEndpoint = import.meta.env.HYGRAPH_ENDPOINT;
    const response = await fetch(hygraphEndpoint, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify({
        query: `
            {
            actualites(orderBy: date_ASC) {
                date
                image {
                    width
                    url
                    height
                }
                texte
                titre
                slug
            }
            }`,
    }),
    });
    const actualitesData = await response.json();
    const actualites = actualitesData.data.actualites;
    return actualites;
}
