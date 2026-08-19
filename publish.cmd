@echo off
setlocal
rem ---------------------------------------------------------------
rem  Hero Hub - publish the live site
rem
rem  Copies your working files out of ..\HeroHub, commits, and pushes.
rem  GitHub Pages picks it up within about a minute.
rem
rem  Just double-click this file.
rem ---------------------------------------------------------------

cd /d "%~dp0"

set SRC=..\HeroHub

if not exist "%SRC%\hero-hub.html" (
  echo Could not find %SRC%\hero-hub.html
  echo Put this repo next to your HeroHub folder, or edit SRC above.
  pause
  exit /b 1
)

echo Copying from %SRC% ...
copy /y "%SRC%\hero-hub.html"  "index.html"     >nul
copy /y "%SRC%\hero-data.js"   "hero-data.js"   >nul
copy /y "%SRC%\hero-names.js"  "hero-names.js"  >nul

git add -A

git diff --cached --quiet
if %errorlevel%==0 (
  echo Nothing changed since the last publish.
  pause
  exit /b 0
)

for /f "tokens=1-3 delims=/ " %%a in ("%date%") do set STAMP=%%a-%%b-%%c
git commit -m "update %STAMP% %time:~0,5%"
if errorlevel 1 goto fail

git push
if errorlevel 1 goto fail

echo.
echo Published. Live in about a minute:
echo   https://sidspanos.github.io/hero-hub/
echo.
pause
exit /b 0

:fail
echo.
echo Something went wrong above - nothing was published.
pause
exit /b 1
