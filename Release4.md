# Quick start

TODO

NEXTAUTH_URL=https://example.com

init secret -> env

JWT token storage for session

Use Node.js 12.22.0 or later



## Makefile
To build a Docker image of this application run `make build`
To run it use `make run`

`make all` exists to execute `build` & `run` together.

## Manual
### Build it

To build a Docker image of this application run

```
docker build -t se577 .
```

### Run it

Run it via

```
docker run -p 3000:3000 se577
```

and open http://localhost:3000/ in your browser.


# Architecture

## C4-Context

The overall context of the SE577 application is depicted below:
It shows a current state in which the SE477 system is integrated with a YAML file as data store.

![](./arch/c4_context.png)

At this time, the focus is on the SE577 itself. No external system has been integrated.

## C4-Container

The SE577 system can be understood as a client-server application using a Single-Page-Application (SPA) deployment:

![](./arch/c4_container.png)

The SPA is realized with [Next.js](https://nextjs.org/), a React-based Framework supporting features beyond SPA including compile time rendering (including [SSR and SSG](https://nextjs.org/docs/basic-features/data-fetching/overview)) with seamless detection (via the absence of `getServerSideProps()` and `getInitialProps()` in a page) for static elements, allowing the usage of CDNs and other caching capabilities with no additional effort.

For decoration purposes, [MaterialUI v4](https://v4.mui.com/) is used.

## C4-Component

The components of the SPA and its backing NodeJS server can found in the following concrete architecture:

![](./arch/c4_component.png)

Each page is pre-rendered during the build process.
If a page has no runtime dynamic content (index, about, login) then the pure HTML page is kept
and delivered to the Browser on request. This is ideal for adding a CDN in front of the
(Docker) API container.

Pages that feature (repos, repo) runtime dynamic are pre-rendered without the dynamic part.
This allows the Browser to retrieve the basic HTML and cache it (or a CDN) and only
the dynamic part is loaded on each request.

This approach significantly improves the load time of the application and allows for future
growth by using standard internet technologies like CDNs.

One drawback (which is inherent to all SPA) is that SEO / crawlers still don't retrieve
the dynamic content as these usually do not execute JavaScript. NextJS though provides
facilities to provide so-called ['fallback data' allowing the initial HTML to contain some
static content](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props#fetching-data-on-the-client-side) - which is replaced in the Browser with the refreshed data.
