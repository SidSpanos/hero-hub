@echo off
setlocal
rem ---------------------------------------------------------------
rem  Hero Hub - one-time setup
rem
rem  Run this ONCE, after you've created an EMPTY repo on GitHub:
rem
rem    1. github.com/new
rem    2. Name it exactly:  hero-hub
rem    3. Public
rem    4. Do NOT tick "Add a README", ".gitignore" or "licence"
rem    5. Create repository
rem    6. Double-click this file
rem
rem  After this, publishing an update is just publish.cmd.
rem ---------------------------------------------------------------

cd /d "%~dp0"

set REPO=https://github.com/SidSpanos/hero-hub.git

git --version >nul 2>&1
if errorlevel 1 (
  echo Git isn't installed. Get it from https://git-scm.com/download/win
  pause
  exit /b 1
)

if exist ".git" (
  echo This folder is already set up. Use publish.cmd from now on.
  pause
  exit /b 0
)

echo Setting up...
git init -b main
if errorlevel 1 git init

git add -A
git -c user.name="Isidoros" -c user.email="sidspanos@gmail.com" commit -m "Hero Hub"
if errorlevel 1 goto fail

git branch -M main
git remote add origin %REPO%

echo.
echo Pushing to %REPO%
echo A browser or sign-in box may pop up - that's GitHub asking who you are.
echo.
git push -u origin main
if errorlevel 1 goto fail

echo.
echo ================================================================
echo  Pushed. Now turn the site on:
echo.
echo    1. Go to  https://github.com/SidSpanos/hero-hub/settings/pages
echo    2. Under "Build and deployment", Source = Deploy from a branch
echo    3. Branch = main,  folder = / (root),  Save
echo.
echo  A minute later it's live at:
echo    https://sidspanos.github.io/hero-hub/
echo ================================================================
echo.
pause
exit /b 0

:fail
echo.
echo Something went wrong above. Nothing was pushed.
echo If it says the repo doesn't exist, create it first at github.com/new
echo and make sure it's named exactly: hero-hub
pause
exit /b 1
