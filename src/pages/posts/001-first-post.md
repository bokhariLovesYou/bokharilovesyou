---
title: "First Post -  Introduction"
metaTitle: "Description of the post"
metaDescription: "Description of the post"
date: 2020-02-01 07:00:00
author: "John Doe"
image: "../../images/hero.jpeg"
tags:
  - General
---

JavaScript is a single-threaded language. Which means, it can process only one task at a time. Some tasks take time to execute. If there's a major delay between the start of one task and the end of it, it can provide bad user experience.

For example, a GET request which has to primarily wait for the response to perform a callback function can completely freeze an app until we receive the response.

Anytime you have code, that needs to execute after some period of time in response to an event, we're introducing asynchronous behavior into our program.

**JavaScript provides efficient ways to handle async operations, and asynchronous programming allows other parts of your program to carry on and run while other blocking scripts wait to complete.**

## JavaScript Call Stack

The environment in which JavaScript runs provides useful APIs to help it process more than one task at a time.

**What is the Call Stack, and Why Does it Matter?**

JavaScript runtime (or host) environments like the browser and Node have a built-in interpreter that executes JavaScript code. It's called the JavaScript engine. The engine has a mechanism, called the call stack, for keeping track of the order of function calls and where it is in a program at any given moment.

Anytime a function gets called, it gets **pushed** onto the call stack, and any functions called within the original function are pushed higher up onto the call stack. When a function is done executing, it gets **popped** off the top of the call stack, and the next function in the stack gets processed.

When the call stack finishes executing the last task and there's nothing left to execute, the program finishes, leaving the call stack empty.

```javascript
const splitter = str => {
  return str.split("").join()
}
console.log(splitter("this"))

// t,h,i,s
```

Anytime a function gets called, it gets **pushed** onto the call stack, and any functions called within the original function are pushed higher up onto the call stack. When a function is done executing, it gets **popped** off the top of the call stack, and the next function in the stack gets processed.

When the call stack finishes executing the last task and there's nothing left to execute, the program finishes, leaving the call stack empty.

![alt text](https://dreamy-agnesi-0d7576.netlify.com/static/03860dec3cbe614e7f3faf1d69a95e0e/45751/photo-1562102085-e00d01ba2898.jpg "Logo Title Text 1")

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.
