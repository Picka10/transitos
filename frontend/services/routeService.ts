import { Route } from "../types/route";

const manifest = await fetch("/routes/routes.json")
    .then(r => r.json());

const routes = await Promise.all(

    manifest.map(async (route) => {

        return fetch(`/routes/${route.file}`)
            .then(r => r.json());

    })

);