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

For each page, the view and the corresponding controller can be found.

Additionally, UI-related components are visualized as they represent the important part of the existing code base.
