# Security audit

Audit baseline is `e3d9f70`, compared directly with `main` at `62130b6`. Paid services were kept off. All authorization and budget scenarios use substituted local responses.

| Severity | Confirmed finding | Fix and regression evidence |
| --- | --- | --- |
| Medium, defense in depth | The previous worker admitted nearly any successful navigation and did not inspect privacy or no-store directives. API paths were already excluded. The risk applies if a future authenticated page or personalized response is added to a cacheable section. No cached private data was identified. | Limit navigation caching to known public sections, skip authenticated and network-only requests, and reject redirects, partial responses, and private/no-store responses. Bump and clear the general cache while retaining existing explicit lecture packs. The worker fixtures cover each rejection and Chromium checks the admin route stays outside Cache Storage. |
| Low | The lecture downloader checked successful status but did not validate the downloaded file types or explicitly omit credentials. | Fetch public files without credentials or redirects, validate their media types, and reject private and partial responses before committing the pack. Keep existing range playback and quota cleanup tests. |
| Low | A private generation request could reserve part of the ledger before detecting an unsupported provider URL. | Validate the provider URL before admission. A mocked test verifies zero Redis or provider calls for invalid configuration. Valid private generation still requires the unchanged Upstash reservation and token limits. |
| Low, defense in depth | The administrator dashboard used the application-wide inline-script CSP despite containing no scripts. | Apply a dashboard-specific deny-by-default CSP while retaining private/no-store, Authorization variation, TLS-or-loopback restriction, and timing-safe credentials. |

## Preserved controls and residual risks

- The global headers and CSP match `main`. Crawler and cross-site protections remain, with additional protection for the classroom data route. Existing static rendering uses inline bootstrap scripts under the global CSP. User-agent filtering is a traffic filter, while API guards enforce authorization.
- Chat validates origin when supplied, content type, JSON shape, message roles and lengths, a streamed byte ceiling, and upload time. Its per-instance burst limit supplements the durable paid ledger. The new fixture verifies malformed and oversized bodies never reach a service.
- Private generation requires the server key, explicit private mode and the separate bearer secret. Upstash atomically enforces per-minute, per-address and site quotas plus a persistent $9 reservation ceiling. Store failure and invalid reservations fail closed. The provider output ceiling and no-redirect behavior remain. Reservations are application controls. Provider invoice totals are separate.
- Response and usage entries remain outside Cache Storage. Browser storage retains lesson files and device-side study progress. Offline media use committed first-party packs. Pack limits, cache eviction across browsers, and a review of existing historical packs remain future work.
- No new credential-like matches were found in the tracked source scan or in the scoped `main..HEAD` history scan. The checks look for common private-key and service-token formats and print paths or hashes only. They cannot rule out arbitrary passwords, encoded credentials, or findings on uninspected branches. Only `.env.example` matched the tracked credential filename check.
- Registry audit passed the project's policy. It reports two existing dev-only advisories under the dated allowlist. No production high or critical advisory was reported.

## Live lecture source

Enumerated remote branch names and inspected current routes, local API history, and the main, coaching-platform, JEE recorded-class, Marin lecture, and voice-audition branch trees. Historical `9d65ef6` added a temporary OpenAI speech audition endpoint. `39bf175` removed it after saving samples. The active checkout has private classroom chat and administrator usage routes, first-party recorded assets, and narration/transcription scripts. No current live lecture service or URL was identified in the inspected source. Verification requires the service's owning repository, deployment route, or integration documentation. Existing API configuration remains intact. [Historical audition change](https://github.com/Ghostfreakxx/mpsc-free-mock/commit/9d65ef619097c799edca987e022876a321e3a6ff)

## Additional audit evidence

- The predecessor on main has a per-instance 15-request burst guard, request-size limits, and a provider response cap. The feature branch retains those controls and adds explicit private authorization, the Upstash ledger, and an administrator-only dashboard.
- A comparison against 347 browser JavaScript, CSS, and map assets found no match for the one configured credential value available in the build environment. Only counts and match locations were printed. The historical scan was limited to the branch's source paths and common token formats.
- The scoped GitHub repository searches returned the project repository and no separately named lecture repository. No remote lecture endpoint was contacted.
- The browser assertion caught that the framework-level policy superseded the dashboard response's first CSP change. The final policy is declared under the exact administrator path in Next's header configuration and the browser regression inspects the effective response.

## Verification

The production-build Playwright fixture confirmed the effective dashboard CSP and no-store header, rejected a fixture credential, and found no dashboard response in Cache Storage. A saved public recording still reloaded, played, sought, and displayed captions offline. The quota fixture removed an incomplete pack. The browser checked transcript downloads and the circuit's keyboard-adjustable values at 360, 768, and 1440 pixels.

On the local Chromium mobile simulation at 360 px, with 4× CPU throttling, 150 ms network latency and a 1.6 Mbps download limit, controls appeared in 2.73 s for the classroom, 0.80 s for the laboratory, and 0.91 s for the sample lecture. All three measured 360 px wide. No Android hardware was available.

## Offline pack follow-up

The install-time precache now applies the same public-response checks as the fetch handler, with credentials and redirects disabled. A local fixture verifies that a private response is skipped during install. The explicit download validator is shared by individual recordings and the new chapter and subject packs. Its fixture rejects private or no-store responses, unexpected media, a mismatched reported audio size, and paths outside the same-origin public fetch boundary before writing cache entries.

Hashed script and style requests can now recover from an explicit saved lesson after the general static cache is cleared. Standalone pack pages do not enter the passive navigation cache, and their HTML uses a deny-by-default policy with same-origin media only. Existing administrator and paid-generation policies remain unchanged.

The advanced branch retains the existing no-store, private authorization, ledger and CSP controls. Local checks cover storage recovery, validated retired cache names and same-origin media. The 3D laboratory uses project-authored primitives and existing Three.js components. It adds no remote asset, paid service, dependency or CSP permission.

## Dependency audit service failures

A registry DNS failure produced a JSON error and a nonzero npm exit. The wrapper cast that response as an advisory report and could print a pass with no advisory data. The wrapper now requires the fields supplied by a genuine advisory report and rejects registry errors. This protects verification in both local checks and CI. It does not change the production dependency tree or the review dates in the existing dev-only allowlist.
