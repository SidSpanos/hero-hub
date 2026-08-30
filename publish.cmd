@echo off
setlocal enabledelayedexpansion
rem ---------------------------------------------------------------
rem  Hero Hub - publish the live site
rem
rem  Copies your working files out of ..\HeroHub, commits, and pushes.
rem  Cloudflare Pages redeploys within about a minute; GitHub Pages
rem  keeps working from the same repo if you still want it.
rem
rem  Just double-click this file.
rem ---------------------------------------------------------------

cd /d "%~dp0"

set SRC=..\HeroHub
set CF=https://hero-hub.pages.dev/
set GH=https://sidspanos.github.io/hero-hub/

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
copy /y "%SRC%\hero-sheet.js"  "hero-sheet.js"  >nul
copy /y "%SRC%\skill-seq.js"   "skill-seq.js"   >nul
rem  hero-mine.js is NOT copied - that one is yours. See .gitignore.

git add -A
if errorlevel 1 (
  echo.
  echo Git couldn't stage the files - see the error above. Nothing was published.
  goto done
)

git fetch --quiet origin 2>nul

git diff --cached --quiet
if not errorlevel 1 (
  echo Nothing new to commit.
  set AHEAD=0
  for /f %%c in ('git rev-list --count origin/main..HEAD 2^>nul') do set AHEAD=%%c
  if not "!AHEAD!"=="0" (
    echo But !AHEAD! commit^(s^) here are not on GitHub yet - pushing those.
    git push
    if errorlevel 1 goto fail
    goto published
  )
  echo Everything is already live.
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

:published
echo.
echo ================================================================
echo  Published. Live in about a minute:
echo    %CF%
echo    %GH%
echo.
echo  Cloudflare is told not to cache, so a normal refresh is enough.
echo  On GitHub Pages you may still need Ctrl+F5.
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
