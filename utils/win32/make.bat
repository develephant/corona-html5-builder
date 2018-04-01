@echo off

set wd=%~dp0
set buildlua=%1

cd "%CORONA_PATH%"

Native\Corona\win\bin\CoronaBuilder.exe build --lua %buildlua%

cd %wd%
