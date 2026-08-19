@echo off
setlocal enabledelayedexpansion
rem ---------------------------------------------------------------
rem  Hero Hub - setup / retry
rem
rem  Safe to run as many times as you like. It works out how far it
rem  got last time and carries on from there.
rem ---------------------------------------------------------------

cd /d "%~dp0"

set REPO=https://github.com/SidSpanos/hero-hub.git
set PAGES=https://sidspanos.github.io/hero-hub/

git --version >nul 2>&1
if errorlevel 1 (
  echo Git isn't installed. Get it from https://git-scm.com/download/win
  echo Tick "Git Credential Manager" during the install - that's what
  echo signs you in to GitHub.
  goto done
)

rem ---- 1. repository ---------------------------------------------
if exist ".git" (
  echo [1/4] Repository already here.
) else (
  echo [1/4] Creating the repository...
  git init -b main >nul 2>&1 || git init >nul 2>&1
  git branch -M main >nul 2>&1
)

rem ---- 2. commit -------------------------------------------------
git add -A >nul 2>&1
git diff --cached --quiet >nul 2>&1
if errorlevel 1 (
  echo [2/4] Committing your files...
  git -c user.name="Isidoros" -c user.email="sidspanos@gmail.com" commit -q -m "Hero Hub"
) else (
  git rev-parse HEAD >nul 2>&1
  if errorlevel 1 (
    echo Nothing to commit and no commits yet - is this folder empty?
    goto done
  )
  echo [2/4] Already committed.
)

rem ---- 3. remote -------------------------------------------------
git remote get-url origin >nul 2>&1
if errorlevel 1 (
  echo [3/4] Pointing at %REPO%
  git remote add origin %REPO%
) else (
  git remote set-url origin %REPO%
  echo [3/4] Already pointed at %REPO%
)

rem ---- 4. push ---------------------------------------------------
echo [4/4] Pushing...
echo.
echo    If a sign-in window opens, that's GitHub asking who you are.
echo    Sign in as SidSpanos and let it finish.
echo.
git push -u origin main
if errorlevel 1 goto pushfail

echo.
echo ================================================================
echo  Pushed. One last thing - turn the site on:
echo.
echo    1. https://github.com/SidSpanos/hero-hub/settings/pages
echo    2. Source          = Deploy from a branch
echo    3. Branch          = main      Folder = / (root)
echo    4. Save
echo.
echo  A minute later it's live at:
echo    %PAGES%
echo ================================================================
echo.
echo  From now on just use publish.cmd - you never need this file again.
goto done

:pushfail
echo.
echo ================================================================
echo  The push didn't go through. Read the red text above - it's
echo  almost always one of these two:
echo.
echo  "Authentication failed" / "could not read Username"
echo      Git doesn't know who you are yet. Either:
echo        - reinstall Git for Windows and tick
echo          "Git Credential Manager", then run this file again, or
echo        - make a token at
echo          https://github.com/settings/tokens/new
echo          tick "repo", copy it, run this file again, and paste the
echo          token when it asks for your PASSWORD
echo          (username is SidSpanos)
echo.
echo  "Repository not found"
echo      Sign in as SidSpanos in the sign-in window - a different
echo      GitHub account can't push to your repo.
echo.
echo  Nothing was lost. Your commit is safe here; just run this file
echo  again once the above is sorted.
echo ================================================================

:done
echo.
pause
endlocal
