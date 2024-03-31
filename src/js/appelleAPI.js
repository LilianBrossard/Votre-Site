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
export async function stat() {
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
            stats(orderBy: id_ASC) {
                nomDeLaStat
                statEnQuestion
                image {
                height
                url
                width
                }
            }
            }`,
    }),
    });
    const statsData = await response.json();
    const stats = statsData.data.stats;
    return stats;
}
export async function poste() {
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
            postes(orderBy: publishedAt_ASC) {
                nomDuPoste
                descriptionDuPoste {
                    html
                }
                resumeDuPoste
                    slug
                }
            }`,
    }),
    });
    const postesData = await response.json();
    const postes = postesData.data.postes;
    return postes;
}
