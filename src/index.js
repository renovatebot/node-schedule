const json = require('../schedule.json');

function inputValidation(version) {
  if (typeof version !== 'number' && typeof version !== 'string') {
    throw new Error('Invalid version type');
  }
}

const isEOL = (version) => {
  inputValidation(version);

  if (typeof version === 'number') {
    version = String(version);
  }

  if (!version.startsWith('v')) {
    version = `v${version}`;
  }

  const semver = version.split('v')[1].split('.');
  const major = semver[0];

  if (Number(major) > 0) {
    version = `v${major}`;
  } else {
    version = `v${major}.${semver[1]}`;
  }

  const meta = json[version];
  if (!meta) {
    throw new Error(`Unknown version ${version}`);
  }

  return new Date() > new Date(meta.end);
};

exports.json = json;
exports.isEOL = isEOL;
