FROM openapitools/openapi-generator-cli

COPY ./openapi.yml .

CMD ["generate", "-i", "./openapi.yml", "-g", "nodejs-express-server", "-o", "/local/src", "-p", "supportsES6=true"]
