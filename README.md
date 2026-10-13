# Team Galaxy — Promotional Website (B2)

A separate public company website for CET257 Assessment 2, Task B2. This project is independent of the Team Galaxy Safety application and contains no database, login or private credentials.

## Published website

https://team-galaxy-website.onrender.com

GitHub: https://github.com/anuragdahal2025/team-galaxy-website

## Open locally

From this folder, run:

```sh
python3 -m http.server 4328 --bind 127.0.0.1 --directory site
```

Open http://127.0.0.1:4328 in your browser. You can also open site/index.html directly for a basic offline preview.

## Deploy on Render

Create a **Static Site**, connect this repository, and use:

- Name: `team-galaxy-website`
- Branch: `main`
- Root directory: leave blank
- Build command: `echo "Static website ready"`
- Publish directory: `site`

No environment variables, database or start command are required. Use the free onrender.com address and avoid adding paid services or a purchased domain for this zero-budget submission. Static hosting remains subject to Render's included bandwidth and build allowances.

## Pages

- Home: company introduction, mission, vision, values, services and working process.
- Product: Team Galaxy Safety overview, learning journey, six topics, role descriptions and FAQs.
- Team: all four members and their project roles.
- Contact: hosted prototype link and public GitHub question route.

## Updating content

Edit the HTML files in `site/`. Shared design rules are in `site/assets/styles.css`; navigation and the illustrative hotspot preview are in `site/assets/site.js`. All fonts and images are stored locally. The illustrated preview is not a recording of a trainee account and is clearly labelled.

The training application is linked at https://galaxy-safety-sprint-one.onrender.com and requires an administrator-provided account. This promotional website does not grant guest access to training or collect enquiry data. The GitHub enquiry route opens a public issue; a GitHub account is required.

## B2 hand-in

Include the published website URL, a ZIP of this website source, updated website design evidence, corporate identity materials and a final zero-budget marketing plan with genuine evidence of activity. Creating promotional material alone does not establish that it has been shared or reached an audience.

## Credits

The Team Galaxy logo is the team's existing corporate identity asset. The warehouse illustration and website code were prepared for this project. Manrope and DM Sans are locally hosted under the SIL Open Font License; licence texts are in `site/assets/fonts/`.
