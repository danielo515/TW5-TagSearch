@echo off
rem develop.cmd <port>
rem
rem Serves development TW5 over HTTP at localhost:8080
rem
tiddlywiki.cmd ^
	--verbose ^
	--server 8080 $:/core/save/all text/plain text/html 
rem	|| exit 1
pause