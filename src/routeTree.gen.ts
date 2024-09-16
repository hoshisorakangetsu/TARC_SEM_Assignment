/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const HighlightsLazyImport = createFileRoute('/highlights')()
const ContactUsLazyImport = createFileRoute('/contactUs')()
const AchievementsLazyImport = createFileRoute('/achievements')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const HighlightsLazyRoute = HighlightsLazyImport.update({
  path: '/highlights',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/highlights.lazy').then((d) => d.Route))

const ContactUsLazyRoute = ContactUsLazyImport.update({
  path: '/contactUs',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/contactUs.lazy').then((d) => d.Route))

const AchievementsLazyRoute = AchievementsLazyImport.update({
  path: '/achievements',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/achievements.lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/achievements': {
      id: '/achievements'
      path: '/achievements'
      fullPath: '/achievements'
      preLoaderRoute: typeof AchievementsLazyImport
      parentRoute: typeof rootRoute
    }
    '/contactUs': {
      id: '/contactUs'
      path: '/contactUs'
      fullPath: '/contactUs'
      preLoaderRoute: typeof ContactUsLazyImport
      parentRoute: typeof rootRoute
    }
    '/highlights': {
      id: '/highlights'
      path: '/highlights'
      fullPath: '/highlights'
      preLoaderRoute: typeof HighlightsLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/achievements': typeof AchievementsLazyRoute
  '/contactUs': typeof ContactUsLazyRoute
  '/highlights': typeof HighlightsLazyRoute
}

interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/achievements': typeof AchievementsLazyRoute
  '/contactUs': typeof ContactUsLazyRoute
  '/highlights': typeof HighlightsLazyRoute
}

interface FileRoutesById {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/achievements': typeof AchievementsLazyRoute
  '/contactUs': typeof ContactUsLazyRoute
  '/highlights': typeof HighlightsLazyRoute
}

interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/achievements' | '/contactUs' | '/highlights'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/achievements' | '/contactUs' | '/highlights'
  id: '/' | '/about' | '/achievements' | '/contactUs' | '/highlights'
  fileRoutesById: FileRoutesById
}

interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AboutLazyRoute: typeof AboutLazyRoute
  AchievementsLazyRoute: typeof AchievementsLazyRoute
  ContactUsLazyRoute: typeof ContactUsLazyRoute
  HighlightsLazyRoute: typeof HighlightsLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AboutLazyRoute: AboutLazyRoute,
  AchievementsLazyRoute: AchievementsLazyRoute,
  ContactUsLazyRoute: ContactUsLazyRoute,
  HighlightsLazyRoute: HighlightsLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/achievements",
        "/contactUs",
        "/highlights"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/achievements": {
      "filePath": "achievements.lazy.tsx"
    },
    "/contactUs": {
      "filePath": "contactUs.lazy.tsx"
    },
    "/highlights": {
      "filePath": "highlights.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
