import { customLinterCheckTest } from "tests";
import { TEST_DATA } from "tests/utils";

customLinterCheckTest({
  linterName: "vale",
  testName: "basic",
  args: TEST_DATA,
});
