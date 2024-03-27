# Jobly Backend

This is the Express backend for Jobly, version 2.

To run this:

    node server.js
    
To run the tests:

    jest -i
When running tests with jest -i, one suite fails with an error "TypeError: pathRegexp is not a function". After troubleshooting with my SpringBoard Academy mentor, Brandon, we determined that the error was due to third party dependencies and not due to a coding error. Additionally, when testing the solution code in the same way, the same error was raised.
