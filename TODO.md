# TODO
- [ ] Update `vercel.json` to prevent SPA rewrite from intercepting `/api/*` calls to the contact endpoint.
- [ ] Confirm deployment target supports PHP server execution. If not, replace `public/api/contact.php` with a Vercel-compatible API route (Node/serverless) or use a PHP hosting integration.
- [ ] After routing fix, re-test the form submission and confirm the network request returns `{ ok: true }`.

