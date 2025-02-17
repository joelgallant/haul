import path from 'path';
import fs from 'fs';
import { installDeps } from '../../utils/common';
import { bundleForPlatform, cleanup } from '../../utils/bundle';

const TEST_PROJECT_DIR = path.join(
  __dirname,
  '../../../fixtures/react_native_with_haul_0_59x'
);

beforeAll(() => installDeps(TEST_PROJECT_DIR));
beforeEach(() => cleanup(TEST_PROJECT_DIR, 'android'));
afterAll(() => cleanup(TEST_PROJECT_DIR, 'android'));

test('bundle android project', () => {
  const bundlePath = bundleForPlatform(TEST_PROJECT_DIR, 'android');
  expect(fs.existsSync(bundlePath)).toBeTruthy();
});
