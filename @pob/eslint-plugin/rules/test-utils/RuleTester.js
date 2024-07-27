"use strict";

const { after, describe, it } = require("node:test");
// eslint-disable-next-line import/no-unresolved -- missing main field
const { RuleTester } = require("@typescript-eslint/rule-tester");

RuleTester.afterAll = after;
RuleTester.describe = describe;
RuleTester.it = it;
RuleTester.itOnly = it.only;

exports.RuleTester = RuleTester;
