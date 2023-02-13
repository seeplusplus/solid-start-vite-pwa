// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Link,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";
import { useRegisterSW } from "virtual:pwa-register/solid";
import { pwaInfo } from "virtual:pwa-info";

export default function Root() {
  useRegisterSW({immediate: true});
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - Bare</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta name="description" content="My Awesome App description"/>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180"/>
        <link rel="mask-icon" href="/mask-icon.svg" color="#FFFFFF"/>
        { pwaInfo?.webManifest?.href ? <Link rel="manifest" href={pwaInfo.webManifest.href}/> : '' }
        <Meta name="theme-color" content="#ffffff"/>
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <A href="/">Index</A>
            <A href="/about">About</A>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
