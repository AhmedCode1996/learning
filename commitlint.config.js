// commitlint.config.js
export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // New feature
        "fix", // Bug fix
        "docs", // Documentation changes
        "style", // Code style/formatting
        "refactor", // Code refactor (no behavior change)
        "test", // Test-related changes
        "chore", // Build/config/tooling changes
        "revert", // Revert a previous commit
        "perf", // Performance improvement
        "ci", // CI/CD changes
        "wip", // Work in progress (optional)
      ],
    ],
    "subject-case": [2, "always", "sentence-case"],
    "header-max-length": [2, "always", 100],
  },
};
