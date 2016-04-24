import rootResponse from './actions/root';

const token = 'CAANhtjyR1X8BADVXLbrMgnuX62VYVKYEBo4W7K0f5z3ZAU2XdypuGt9YiB3aE5ZCZCfh9ZAmMHBgOCtWP2SfiGKx0pKSutaH5GwZBkBsmAoEgPhBrZApGWJDweKfOZAZBzOZCSTSLpntG1LDvDGnr6OIgyTPFT00CAgdbGktxKgTEZCVVxLQTgAXuTIJvVpZAPvISIZD'; // eslint-disable-line

function formatResponse({ text }, sender) {
  return {
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: token },
    method: 'POST',
    json: {
      recipient: { id: sender },
      message: {
        text: rootResponse(text, sender),
      },
    },
  };
}

export default formatResponse;
