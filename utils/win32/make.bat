@echo off

rem Corona HTML5 Node Kit - Plugin Builder
rem (c)2018 C. Byerley (develephant)

set wd=%~dp0
set buildlua=%1

cd "%CORONA_PATH%"

Native\Corona\win\bin\CoronaBuilder.exe build --lua %buildlua%

cd %wd%
