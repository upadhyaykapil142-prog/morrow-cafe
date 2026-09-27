\# AI Usage Disclosure



\## AI Tool Used



\- ChatGPT



\## How AI Was Used



AI was used as a development assistant during the implementation of the Morrow Café campaign.



I used AI for:



\- Initial React component structure

\- Form validation logic

\- Loading, success and error states

\- Accessibility suggestions

\- Responsive CSS implementation

\- Interaction ideas

\- Debugging and reviewing implementation details

\- README documentation



\## Useful Contribution From AI



One useful contribution was quickly structuring the form state flow:



\- Initial form state

\- Loading state while claiming

\- Error state when the claim fails

\- Success state showing the claim code

\- Copy-to-clipboard interaction



AI also helped identify accessibility considerations such as proper form labels, `tel` input, autocomplete attributes, live status messaging and reduced-motion support.



\## What AI Got Wrong or What I Changed



The first implementation of visually hidden accessibility helper text was not correctly hidden because the required `.sr-only` styling was missing.



I reviewed the issue in the browser and added the appropriate `.sr-only` CSS so the accessibility text remains available to assistive technologies without appearing visually on the page.



I also tested the form manually and adjusted the implementation where necessary rather than accepting AI-generated code without review.



\## What I Personally Reviewed



I personally reviewed and tested:



\- Hero section and campaign messaging

\- CTA interaction

\- Responsive layout

\- Name validation

\- Phone number validation

\- Loading state

\- Error state

\- Success state

\- Claim code display

\- Copy claim code interaction

\- Accessibility behavior

\- Reduced-motion behavior

\- Production build



I also ran the production build with:



```bash

npm run build

