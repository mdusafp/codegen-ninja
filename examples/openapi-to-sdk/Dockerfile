FROM openapitools/openapi-generator-cli

COPY ./openapi.yml .

CMD ["generate", "-i", "./openapi.yml", "-g", "typescript-fetch", "-o", "/local/src", "-p", "supportsES6=true,withInterfaces=true"]
