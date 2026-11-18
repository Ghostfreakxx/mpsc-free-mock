# Tochhawng Teachers

The existing `/api/chat` route uses the OpenAI Responses API and the server's `OPENAI_API_KEY`. The existing `OPENAI_API_KEY1` alias still takes precedence when both are present. The teacher uses GPT-6 Luna with up to 450 output tokens per turn and provider storage disabled. Keep these credentials outside the repository and browser bundles.

Set `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` for a dedicated shared database. A request is reserved atomically before each OpenAI call. The defaults are five requests per minute and 20 per India calendar day per public IP or IPv6 /64, with a site-wide cap of 500 requests per day. Set `TOCHHAWNG_DAILY_REQUEST_LIMIT` to a positive integer up to 9999 to change the site cap. NAT and school networks can share a quota. Vercel supplies the trusted client address. Local and other hosts use a shared address bucket. With the key or quota store unavailable, students get existing offline guidance and practice links. Redis holds short-lived keyed address counters and 14 days of aggregate usage. It holds no questions, replies, or raw addresses.

Set `TOCHHAWNG_ADMIN_PASSWORD` to a unique randomly generated password of at least 32 characters. In a browser, visit `/api/admin/teacher-usage` over HTTPS and sign in as `admin` using this password. The dashboard shows seven days of admissions, reported tokens, and estimated USD costs. Unmetered calls count toward quotas and are shown separately. The endpoint returns 404 if the admin password is unset. Students do not sign in.

The selected teacher ID and plain-text reply are separate fields in the chat response. A future voice provider can take those fields and the selected language as inputs after an explicit student action. Keep audio generation separate from creating a text reply, with its own quotas and accounting. The current feature makes only text requests.

In `/study-room`, select Zorami or use the **Talk to Zorami** button to open the same conversation with her selected. The 3D character has a stylized woven wrap modeled on the broad red band and motifs documented by the Mizoram Art and Culture Department. Reduced-motion preferences keep the character still. [Mizo Puanchei documentation](https://mizoculture.mizoram.gov.in/page/mizo-puanchei-gi-583)

The server adds up to two matching reviewed topic notes and their source titles to the teaching context. Selecting a subject restricts this lookup to that subject or its courses. When the repository has no matching notes, the teacher uses the existing uncertainty guidance.

## Character portraits

The built-in image generator produced the fictional portraits. The app serves locally compressed WebP files.

- `public/teachers/zorami.webp` — Use case: illustration-story. Square close-cropped avatar of a fictional adult Mizo woman AI teacher from Mizoram, northeastern India, wearing clearly visible rounded dark spectacles, dark hair gathered back, warm expression and contemporary olive cardigan. Head and shoulders, face centered with generous margin for a circular crop. Rich painterly editorial illustration, soft warm desk lamp light, muted clay backdrop, no text, insignia, or border.
- `public/teachers/lalthan.webp` — Use case: illustration-story. Square close-cropped avatar of a fictional adult Mizo woman AI teacher from Mizoram, northeastern India, with shoulder-length straight dark hair, an attentive expression and a muted indigo blouse. Head and shoulders, face centered with generous margin for a circular crop. Rich painterly editorial illustration, soft warm desk lamp light, subdued green backdrop, no text, insignia, or border.
