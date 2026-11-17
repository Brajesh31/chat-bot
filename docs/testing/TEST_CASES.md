# 🧾 Test Cases

| ID | Scenario | Coverage | Expected |
|---|---|---|---|
| TC-01 | Uppercase greeting | Automated | Greeting response |
| TC-02 | Standalone hi | Automated | Greeting response |
| TC-03 | "hi" substring inside history | Automated regression | Not treated as greeting |
| TC-04 | Morning phrase | Automated | Morning response |
| TC-05 | Joke selection | Automated with fixed randomness | First configured joke |
| TC-06 | Fact selection | Automated with fixed randomness | First configured fact |
| TC-07 | Unknown prompt | Automated with fixed randomness | First fallback |
| TC-08 | Weather prompt | Automated | Static disclaimer |
| TC-09 | Goodbye prompt | Automated | Goodbye response |
| TC-10 | Empty form submit | Manual | No message appended |
| TC-11 | Enter submission | Manual | Form submit path |
| TC-12 | Narrow viewport | Manual | Chat remains usable |
| TC-13 | Screen-reader announcements | Manual | New messages announced |

Update this table whenever actual test coverage changes.
