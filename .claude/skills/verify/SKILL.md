---
name: verify
description: Use when you want to validate changes before committing, or when you need to check code quality, type safety, and all tests pass. Works with any JavaScript or TypeScript project — auto-detects tools and package manager.
---

# Verification

Run all verification steps before committing. Automatically detects project setup and runs the appropriate tools.

Arguments: $ARGUMENTS: Optional test pattern or file path (e.g., "src/utils" or "--coverage")

## Step 0: Detect Project Environment

Before running any checks, detect the project configuration by reading files in the project root. **Do NOT ask the user — detect automatically and proceed.**

### Package Manager Detection (check in order)

| Lock File | Package Manager | Run Command |
|-----------|----------------|-------------|
| `bun.lockb` or `bun.lock` | bun | `bun run` |
| `pnpm-lock.yaml` | pnpm | `pnpm run` |
| `yarn.lock` | yarn | `yarn` |
| `package-lock.json` | npm | `npm run` |
| _(none found)_ | npm (fallback) | `npx` |

Store the detected run command as `$RUN` for all subsequent steps.

### Tool Detection (check `package.json` devDependencies/dependencies AND config files)

Detect which tools are available. If a tool is not found, **skip that step silently** — do not fail or warn.

**Formatter:**
1. Check for `prettier` in package.json → use `$RUN prettier --check .`
2. Else check for `@biomejs/biome` in package.json → use `$RUN biome check .`
3. Else check for `dprint` in package.json → use `$RUN dprint check`
4. Else check `package.json` scripts for `format` or `prettier` key → use `$RUN format`
5. Else skip formatting step

**Linter:**
1. Check `package.json` scripts for `lint` key → use `$RUN lint` (highest priority — respects project config)
2. Else check for `eslint` in package.json → use `$RUN eslint .`
3. Else check for `@biomejs/biome` in package.json → use `$RUN biome lint .`
4. Else check for `oxlint` in package.json → use `$RUN oxlint`
5. Else skip linting step

**Type Checker:**
1. Check for `tsconfig.json` in project root → use `$RUN tsc --noEmit`
2. Else check for `.flowconfig` in project root → use `$RUN flow`
3. Else check `package.json` scripts for `typecheck` or `type-check` key → use `$RUN typecheck`
4. Else skip type checking step

**Test Runner:**
1. Check `package.json` scripts for `test` key → use `$RUN test $ARGUMENTS`
2. Else check for `vitest` in package.json → use `$RUN vitest run $ARGUMENTS`
3. Else check for `jest` in package.json → use `$RUN jest $ARGUMENTS`
4. Else check for `mocha` in package.json → use `$RUN mocha $ARGUMENTS`
5. Else check for `playwright` in package.json → use `$RUN playwright test $ARGUMENTS`
6. Else skip test step

**Build Check (optional but recommended):**
1. Check `package.json` scripts for `build` key → use `$RUN build`
2. Else skip build step

---

## Step 1: Sequential Checks (fast — run in order, stop on first failure)

These are fast checks that catch simple issues. Run them **in sequence** and **stop immediately** if any step fails.

### 1-1. Format Check

Run the detected formatter command.
- On **success**: proceed to next step
- On **failure**: report which files need formatting and suggest running the fix command:
  - prettier: `$RUN prettier --write .`
  - biome: `$RUN biome check --write .`
  - dprint: `$RUN dprint fmt`

### 1-2. Lint Check

Run the detected linter command.
- On **success**: proceed to next step
- On **failure**: report lint errors with file locations and suggest:
  - If auto-fixable: `$RUN lint --fix` or `$RUN eslint --fix .`
  - If not: show each error with explanation and fix guidance

---

## Step 2: Parallel Checks (slow — run with subagents simultaneously)

These checks take longer. Run them **in parallel using subagents** and collect all results. Stop immediately if any fails.

### 2-1. Type Check (subagent)

Run the detected type checker command.
- On **failure**: report type errors with file locations and suggested fixes

### 2-2. Test (subagent)

Run the detected test runner command.
- On **failure**: report failing tests with names, expected vs actual values, and suggested fixes

### 2-3. Build Check (subagent, if available)

Run the detected build command.
- On **failure**: report build errors with file locations and suggested fixes

---

## Step 3: Results Summary

### On Success (all steps passed)

```
✅ Verification Complete — All checks passed!

  ✔ Format    — code style OK
  ✔ Lint      — no issues found
  ✔ Types     — no type errors
  ✔ Tests     — X tests passed
  ✔ Build     — build successful

Ready to commit.
```

### On Failure (any step failed)

```
❌ Verification Failed

  ✔ Format    — passed
  ✖ Lint      — 3 errors in 2 files      ← FIX THIS FIRST
  ⊘ Types     — skipped (blocked by lint failure)
  ⊘ Tests     — skipped (blocked by lint failure)

Suggested fix:
  $ [specific fix command]
  [explanation of what went wrong and how to fix it]
```

---

## Important Behaviors

1. **Fail fast**: Sequential steps stop on first failure. Do not continue to parallel checks if sequential checks fail.
2. **Skip gracefully**: If a tool is not detected, skip that step without error. Not every project uses every tool.
3. **Respect project config**: Always prefer `package.json` scripts over direct tool invocation. The project may have custom flags or configurations.
4. **Report clearly**: On failure, always include the file path, line number, error message, and a concrete fix suggestion.
5. **Never auto-fix without asking**: Report issues and suggest fix commands, but do not run fix commands automatically unless the user explicitly requests it.
