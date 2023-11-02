FROM openapitools/openapi-generator-cli

COPY ./openapi.yml .

CMD ["generate", "-i", "./openapi.yml", "-g", "postman-collection", "-o", "/local/src"]
