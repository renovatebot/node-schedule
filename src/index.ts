import json from '../schedule.json';

export interface ScheduleDetails {
  codename?: string
  end: string,
  lts?: string,
  maintenance?: string,
  start: string,
};

export interface Schedule {
  [key: string]: ScheduleDetails
};

function inputValidation(version: any): asserts version is number | string {
  if (typeof version !== "number" && typeof version !== "string") {
    throw new Error("Invalid version type");
  }
}

function isEOL(version: number | string): boolean {
  inputValidation(version);

  if (typeof version === "number") {
    version = String(version);
  }

  if (!version.startsWith("v")) {
    version = `v${version}`;
  }

  const semver = version.split("v")[1].split(".");
  const major = semver[0];

  if (Number(major) > 0) {
    version = `v${major}`;
  } else {
    version = `v${major}.${semver[1]}`;
  }

  const meta = (json as Schedule)[version];
  if (!meta) {
    throw new Error(`Unknown version ${version}`);
  }

  return new Date() > new Date(meta.end);
};

export { isEOL, json };
