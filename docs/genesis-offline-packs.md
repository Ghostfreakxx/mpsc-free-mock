# Versioned offline media packs

The JEE class library links to `/jee/offline-learning`. The initial catalog has full recorded Physics, Chemistry, and Mathematics subject packs and five individually selectable Gravitation chapters. Every pack lists the source audio size before saving. HTML and captions use additional storage. Subject packs are large, so saving is explicit and sequential. Existing individual lecture downloads and progress use their original cache and storage keys.

Each edition has a version in its URL and cache name. The saved version is usable from its bookmarked address, even if the catalogue is later updated. The standalone player uses the original recordings, native controls, English captions, and expandable transcripts. Chapter captions are rebased to the corresponding saved MP3's timeline. The players do not sync standalone playback positions with the recorded-course player.

The explicit downloader fetches first-party resources without credentials or redirects. It checks status, response visibility, MIME, privacy directives, and reported audio length when supplied. Cache Storage uses a ready marker only after the last resource succeeds. Cancelled, rejected, and quota-failed writes delete the partial pack. Concurrent edits to the same edition use a Web Lock. The service worker avoids general-cache admission for standalone pack pages and serves media byte ranges only from a committed pack.

Maintain a new versioned URL and unique media paths when rebuilding a pack whose source recording changes. Future work includes additional chapter catalogs, NEET subject packs, and a gallery for retired editions. Browser-managed storage can be evicted by the device. Check storage availability and keep bookmarks for saved editions.

The current audio sizes are approximately 567.5 MB for Physics, 891.5 MB for Chemistry, and 206.5 MB for Mathematics. The individual Gravitation chapters are approximately 1.2–1.5 MB. Large subject downloads need device storage and may be unsuitable for limited data plans.
