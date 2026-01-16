# TypeScript

## Table of Contents
- [Project Overview](#project-overview)
- [Learning Objectives](#learning-objectives)
- [Requirements](#requirements)
- [Resources](#resources)
- [Table of Tasks](#table-of-tasks)

---

## Project Overview

This project introduces **TypeScript fundamentals and advanced concepts**, focusing on strong typing, interfaces, classes, namespaces, and type safety.

Throughout the project, you will progressively build TypeScript code that covers:
- basic and advanced types
- interfaces and class implementation
- type predicates
- string literal types
- ambient namespaces
- declaration merging
- namespaces
- nominal typing using branding

This project is part of **Foundations v2.1 — Part 3** and aims to provide a solid understanding of how TypeScript enhances JavaScript scalability and reliability.

---

## Learning Objectives

By the end of this project, you should be able to explain to anyone, **without Google**:

- basic types in TypeScript
- interfaces, classes, and functions
- how TypeScript works with the DOM
- advanced and union types
- generic types
- type predicates
- string literal types
- namespaces and declaration merging
- ambient namespaces (`.d.ts`)
- how to import and type external JavaScript libraries
- nominal typing using brand conventions
- how TypeScript improves maintainability and safety in large codebases

---

## Requirements

### General

- Allowed editors:
  - `vi`
  - `vim`
  - `emacs`
  - `Visual Studio Code`
- All files must:
  - end with a new line
- All files will be transpiled on **Ubuntu 18.04**
- TypeScript compilation must not show any error or warning
- A `README.md` file at the root of the project is mandatory
- Every variable must use TypeScript types when possible
- Tests are executed using **Jest (v24.9.\*)**

### Configuration Files

The following configuration files are provided and must be used when required:
- `package.json`
- `.eslintrc.js`
- `tsconfig.json`
- `webpack.config.js`

---

## Resources

Read or watch:

- [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [TypeScript documentation](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [TypeScript Dom Manipulation](https://www.typescriptlang.org/docs/handbook/dom-manipulation.html)
- [TypeScript Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- [TSConfig Reference](https://www.typescriptlang.org/tsconfig/)


---

## Table of Tasks

| #  | Task name                                   | Description                                                                 | File(s) |
| -- | ------------------------------------------- | --------------------------------------------------------------------------- | ------- |
| 0  | Creating an interface for a student         | Create a Student interface and render a table using vanilla JS              | `task_0/js/main.ts` |
| 1  | Let's build a Teacher interface             | Create a Teacher interface with optional and dynamic properties              | `task_1/js/main.ts` |
| 2  | Extending the Teacher interface              | Extend Teacher interface to Directors                                         | `task_1/js/main.ts` |
| 3  | Printing teachers                           | Create a typed function to format teacher names                               | `task_1/js/main.ts` |
| 4  | Writing a class                             | Create a StudentClass using interfaces                                        | `task_1/js/main.ts` |
| 5  | Advanced types – Part 1                     | Director & Teacher classes with union return types                            | `task_2/js/main.ts` |
| 6  | Creating functions specific to employees    | Type predicates and conditional behavior                                      | `task_2/js/main.ts` |
| 7  | String literal types                        | Restrict values using string literal types                                    | `task_2/js/main.ts` |
| 8  | Ambient Namespaces                          | Type external JS libraries using `.d.ts` files                                | `task_3/js/*` |
| 9  | Namespace & Declaration merging             | Use namespaces and declaration merging                                        | `task_4/js/subjects/*` |
| 10 | Brand convention & Nominal typing           | Implement nominal typing using branding                                        | `task_5/js/main.ts` |

---
