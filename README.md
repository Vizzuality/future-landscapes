# Future Landscapes

A game-like microsite which shows the sustainability path the user has chosen though his/her answers:

![Homepage](public/images/home.png)

## Getting Started

In order to start modifying the app, please make sure to correctly configure your workstation:

1. Make sure you you have [Node.js](https://nodejs.org/en/) installed
2. (Optional) Install [NVM](https://github.com/nvm-sh/nvm) to manage your different Node.js versions
3. (Optional) Use [Visual Studio Code](https://code.visualstudio.com/) as a text editor to benefit from automatic type checking
4. Configure your text editor with the [Prettier](https://prettier.io/), [ESLint](https://eslint.org/) and [EditorConfig](https://editorconfig.org/) plugins
5. Use the correct Node.js version for this app by running `nvm use`; if you didn't install NVM (step 2), then manually install the Node.js version described in `.nvmrc`
6. Install the dependencies: `yarn`
7. Create a `.env` file at the root of the project by copying `.env.default` and giving a value for each of the variables (see next section for details)
8. Create a gee.key.json file at the root of the project with the Google Earth Engine's private key inside.
9. Run the server: `yarn dev`
10. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

First, we recommend to read the guideline about [how to use Vercel](https://vizzuality.github.io/frontismos/docs/guidelines/vercel/).

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contribution rules

Please, **create a PR** for any improvement or feature you want to add. Try to not commit directly anything on the `main` branch.

## Vulnerability mitigation

[Dependabot's vulnerability security alerts](https://docs.github.com/en/code-security/dependabot/dependabot-alerts/about-dependabot-alerts) are configured in this repository and are displayed to the administrators.

When vulnerabilities are detected, a warning message is displayed at the top of the repository. The list of alerts can be found in the Dependabot alerts page.

Here's a step by step guide on how to address vulnerabilities found in production code:

1. Go to the Dependabot alerts page and locate the front-end vulnerability to address
2. Identify if the vulnerability affects production code:
	- To do so run `yarn npm audit --recursive --environment production`
	- If the dependency is _not_ listed by this command, then the vulnerability only affects development code. You can dismiss the alert on GitHub as “Vulnerable code is not actually used” in the top right corner of the vulnerability page.
	- If the dependency _is_ listed, follow the steps below.
3. On the vulnerability page, click the “Create Dependabot security update” button
	- This will create a Pull Request with a fix for the vulnerability. If GitHub can generate this PR, then you can merge and the security alert will disappear.
	- If the vulnerability can't be patched automatically, follow the steps below.
4. If the action fails, then you can semi-automatically update the vulnerable dependency by running `npm_config_yes=true npx yarn-audit-fix --only prod`
	- `yarn-audit-fix` (see [repository](https://github.com/antongolub/yarn-audit-fix)) is a tool that applies the fixes from `npm audit fix` to Yarn installations
	- The tool might also not be able to fix the vulnerability. If so, continue with the steps below.
5. If the action fails, then you will have to manually update the dependencies until the vulnerability is solved

## Env variables


| Variable name           | Description                                                             |  Default value                      |
|-------------------------|-------------------------------------------------------------------------|------------------------------------:|
| NEXTAUTH_SECRET         |  Key used to encrypt the NextAuth.js JWT, and to hash email verification tokens. Do not forget to add a secret. NextAuth can handle without it in development mode,  but it won't in production! [https://next-auth.js.org/configuration/options#secret](https://next-auth.js.org/configuration/options#secret) |  |
| NEXTAUTH_URL            |  Needed by the next-auth library for [handling auth requests and callbacks](https://next-auth.js.org/configuration/options#nextauth_url). Set the environment variable to the canonical URL of your site. Not needed in Vercel deploys.   |  |
| NEXT_PUBLIC_API_URL  | URL of the API. | http://localhost:3000   |
| STORYBOOK_API_URL  | URL of the API for storybook. |    |
| NEXT_PUBLIC_GA_TRACKING_ID  | Google Analytics tracking ID. If you're working with an Google Analytics 4 property, you have a Measurement ID instead of a Tracking ID. |    |




