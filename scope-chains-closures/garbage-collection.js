'use strict';

/* 
Most garbage collection algorithm in JS use mark & sweep method.
Algorithm analyse scope chain to variable resolution to mark a variable reachable or not.
If a variable is reachable the entire scope chain will be marked as reachable.

While garbage collection occurs, it blocks the main thread, which means other Javascript cannot be executed until the event completes. Be conscious of how janky your application may become due to extensive Garbage Collection events!
*/
