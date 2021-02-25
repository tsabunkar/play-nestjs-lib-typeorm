# Library

- Nest library is a Nest project that differs from an application in that it cannot run on its own.
- A library must be imported into a containing application in order for its code to execute
- Library is used to solve the same general problems, or re-use a modular component in several different contexts.
- Lib should - lightweight approach to sharing components, Monorepos, loosely connected or unaffiliated organizations (e.g., by distributing/installing 3rd party libraries).
- Ex: AuthModule - manages authentication by implementing company policies that govern all internal applications.Rather than build that module separately for each application, or physically packaging the code with npm and requiring each project to install it, a monorepo can define this module as a library.
- Decideing about library is an - architectural design decision.
- library code must be decoupled from the application !!
-

# Creating lib in nestjs

- \$ nest g library nestjs-typeorm
- What prefix would you like to use for the library (default: @app)? (Selec default - app)
- $ nest build nestjs-typeorm (To build libr)
