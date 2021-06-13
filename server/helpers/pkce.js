const crypto = require('crypto');

/**
 *
 * @param {string} str
 * @returns
 */
function base64URLEncode(str) {
  return str.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}

/**
 *
 * @param {crypto.BinaryLike} buffer
 * @returns
 */
function sha256(buffer) {
  return crypto.createHash('sha256').update(buffer).digest();
}

module.exports.generateVerifier = () => {
  return base64URLEncode(crypto.randomBytes(32));
};

/**
 *
 * @param {crypto.BinaryLike} verifier
 * @returns
 */
module.exports.generateChallenge = (verifier) => {
  return base64URLEncode(sha256(verifier));
};
