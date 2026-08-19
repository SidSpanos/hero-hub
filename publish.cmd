@echo off
setlocal
rem ---------------------------------------------------------------
rem  Hero Hub - publish the live site
rem
rem  Copies your working files out of ..\HeroHub, commits, and pushes.
rem  GitHub Pages redeploys within about a minute.
rem
rem  Just double-click this file.
rem ---------------------------------------------------------------

cd /d "%~dp0"

set SRC=..\HeroHub
set PAGES=https://sidspanos.github.io/hero-hub/

if not exist "%SRC%\hero-hub.html" (
  echo Could not find %SRC%\hero-hub.html
  echo Put this repo next to your HeroHub folder, or edit SRC above.
  goto done
)

rem ---- clear a lock left behind by a crashed or interrupted git ----
if exist ".git\index.lock" (
  tasklist /fi "imagename eq git.exe" 2>nul | find /i "git.exe" >nul
  if not errorlevel 1 (
    echo Git is already running somewhere. Close it and try again.
    goto done
  )
  echo Clearing a stale lock from a previous run...
  del /q ".git\index.lock"
)
if exist ".git\index.lock.stale" del /q ".git\index.lock.stale"

echo Copying from %SRC% ...
copy /y "%SRC%\hero-hub.html"  "index.html"     >nul
copy /y "%SRC%\hero-data.js"   "hero-data.js"   >nul
copy /y "%SRC%\hero-names.js"  "hero-names.js"  >nul

git add -A
if errorlevel 1 (
  echo.
  echo Git couldn't stage the files - see the error above. Nothing was published.
  goto done
)

git diff --cached --quiet
if not errorlevel 1 (
  echo Nothing changed since the last publish.
  goto done
)

echo.
echo About to publish:
git diff --cached --stat
echo.

for /f "tokens=1-3 delims=/ " %%a in ("%date%") do set STAMP=%%a-%%b-%%c
git commit -m "update %STAMP% %time:~0,5%"
if errorlevel 1 goto fail

git push
if errorlevel 1 goto fail

echo.
echo ================================================================
echo  Published. Live in about a minute:
echo    %PAGES%
echo.
echo  Press Ctrl+F5 when you open it - a normal refresh will show
echo  you the old cached version and look like nothing happened.
echo ================================================================
goto done

:fail
echo.
echo Something went wrong above - nothing reached GitHub.
echo Your files are safe; fix the error and run this again.

:done
echo.
pause
endlocal
