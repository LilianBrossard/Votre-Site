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
                mail
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
export async function group() {
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
            groups {
                descritption {
                    html
                }
            }
            }
`,
    }),
    });
    const groupsData = await response.json();
    const groups = groupsData.data.groups;
    const group1 = groups[0];
    return group1;
}

export async function comiteDeDirections() {
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
            comiteDeDirections {
                biographie
                nomEtPrenom
                posteOccuper
                photo {
                    height
                    url
                    width
                }
            }
}
`,
    }),
    });
    const comiteDeDirectionsData = await response.json();
    const comiteDeDirections = comiteDeDirectionsData.data.comiteDeDirections;
    return comiteDeDirections;
}

export async function contacts() {
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
            contacts {
                image {
                    width
                    url
                    height
                }
                lien
                reseaux
            }
            }

`,
    }),
    });
    const contactsData = await response.json();
    const contacts = contactsData.data.contacts;
    return contacts;
}

export async function offre() {
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
            offres {
                nomDeLoffre
                descriptionDeLoffre {
                    html
                }
                image {
                    height
                    url
                    width
                }
            }
            }


`,
    }),
    });
    const offresData = await response.json();
    const offres = offresData.data.offres;
    return offres;
}