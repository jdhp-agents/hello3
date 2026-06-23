---
name: copier-init
description: (Re)initialize the project from the webapp-template using copier and the metadata.yml substitution values. Use when the user asks to scaffold, reinitialize, or regenerate the project structure.
tools: Bash, Read
---

# Copier Project Initialization

Scaffold or re-scaffold this project from the template `https://github.com/jdhp-agents/webapp-template.git` using the Jinja substitution values defined in `metadata.yml`.

## Steps

1. **Check that `copier` is installed.**

   ```sh
   copier --version
   ```

   If the command fails, install it first:

   ```sh
   pip install copier
   ```

   Reference: https://copier.readthedocs.io/en/stable/#installation

2. **Verify `metadata.yml` exists** in the project root and contains the expected substitution variables. Read it to confirm:

   ```sh
   cat metadata.yml
   ```

3. **Run copier** from the project root (`.`), passing `metadata.yml` as the data file:

   ```sh
   copier copy --data-file metadata.yml https://github.com/jdhp-agents/webapp-template.git .
   ```

   - `--data-file metadata.yml` — supplies all Jinja template variables non-interactively.
   - The destination `.` is the current working directory (project root).
   - If files already exist copier will ask whether to overwrite them; answer accordingly.

4. **Report** to the user which files were created or updated.

## Notes

- Re-running this command on an existing project is safe: copier will show a diff and ask before overwriting files.
- To update an already-copier-managed project to a newer template version, use `copier update` instead of `copier copy`.
- All substitution variables must be present in `metadata.yml`; missing variables will cause copier to prompt interactively.
