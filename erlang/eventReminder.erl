-module(event).
-compile(export_all).
-record(state, {server,
name="",
to_go=0}).