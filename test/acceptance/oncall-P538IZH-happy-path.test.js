// ------- Imports -------------------------------------------------------------

import test from 'ava';
import chai from 'chai';

// ------- Internal imports ----------------------------------------------------

import { AcceptanceHelpers } from '../helpers/AcceptanceHelpers';

// ------- Init ----------------------------------------------------------------

const { expect } = chai;
const { waitFor } = AcceptanceHelpers;

test.before(AcceptanceHelpers.openBrowser);
test.serial.before(AcceptanceHelpers.openPage('/v1/schedules/P538IZH.html'));
test.after.always(AcceptanceHelpers.closeBrowser);

// ------- Tests ---------------------------------------------------------------

test('On-Call P538IZH: Check page response', (t) => {
  expect(t.context.pageResponse.ok()).to.be.true;
});

test('On-Call P538IZH: Schedule name in page title', async (t) => {
  const { pageTest } = t.context;
  await pageTest.expectTitleContains('Schedule a quasi illum');
});

test('On-Call P538IZH: ensure classes', waitFor('.schedule'), async (t) => {
  const { pageTest } = t.context;
  await pageTest.expectClass('.schedule', 'state_normal');
  await pageTest.expectNoClass('.schedule', 'state_not_found');
  await pageTest.expectNoClass('.schedule', 'state_active_incident');
});

test('On-Call P538IZH: show schedule name', waitFor('.schedule'), async (t) => {
  const { pageTest } = t.context;
  await pageTest.expectText('a.schedule_name', 'Schedule a quasi illum');
});

test('On-Call P538IZH: show user name', waitFor('.schedule'), async (t) => {
  const { pageTest } = t.context;
  await pageTest.expectText('.user_name', 'Rosanna Runolfsdottir');
});

test('On-Call P538IZH: show user avatar', waitFor('.schedule'), async (t) => {
  const { pageTest } = t.context;
  pageTest.expectAttrMatch(
    '.user_avatar img',
    'src',
    /^https:\/\/secure\.gravatar\.com\/avatar(.*)&s=2048/,
  );
});

test('On-Call P538IZH: status row shows dates', waitFor('.schedule'), async (t) => {
  const { pageTest } = t.context;
  await pageTest.expectText('.date_start', 'From: Tuesday, Dec 25 12:00 AM');
  await pageTest.expectText('.date_end', 'To: Tuesday, Dec 25 12:00 PM');
});

test('On-Call P538IZH: indicator is OK', waitFor('.schedule'), async (t) => {
  const { pageTest } = t.context;
  await pageTest.expectNoClass('.status_indicator', 'error');
  await pageTest.expectClass('.status_indicator', 'success');
  await pageTest.expectAttr('.status_indicator', 'title', 'OK');
});

// ------- End -----------------------------------------------------------------
