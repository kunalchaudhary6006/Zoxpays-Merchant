import fs from 'node:fs';

async function run() {
  try {
    const res = await fetch('https://merchant.zoxpays.com/');
    const text = await res.text();
    console.log("FULL HTML:\n", text);
  } catch (e) {
    console.error(e);
  }
}

run();
