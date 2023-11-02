---
inject: true
to: apps/frontend/src/app/app.tsx
after: import NxWelcome from './nx-welcome';
---

import <%= h.changeCase.pascal(name) %> from '../components/<%= h.inflection.dasherize(name) %>.tsx';