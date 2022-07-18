String regex = "(\\w*?)(\\d*)([a-z])?";
Pattern pattern = Pattern.compile(regex);

Map<String, TestResult> testResults = new HashMap<>();
Map<String, TestSuiteResult> testSuiteResults = new HashMap<>();

for (int i = 0; i < tests.length; i++) {

    String test = tests[i];
    Matcher matcher = pattern.matcher(test);

    // check for illegal test name
    if (!matcher.matches()) {
        continue;
    }

    String name = matcher.group(1);
    String digitPart = matcher.group(2);
    String character = matcher.group(3);

    if (character != null) {
        // multi test
        String suiteName = name + digitPart;
        TestSuiteResult suite = testSuiteResults.get(digitPart);
        TestSuiteResult suite = testSuiteResults.get(suiteName);
        if (suite == null) {
            suite = new TestSuiteResult(suiteName);
            testSuiteResults.put(suite.getName(), suite);
        }
        String result = results[i];
        TestResult multi = new TestResult(character, result);
        suite.getResults().add(multi);
    } else {
        // single test
        String result = results[i];
        TestResult single = new TestResult(test, result);
        testResults.put(single.getName(), single);
    }
}
