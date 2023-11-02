FROM openapitools/openapi-generator-cli

COPY ./openapi.yml .

CMD ["generate", "-i", "./openapi.yml", "-g", "graphql-schema", "-o", "/local/src"]
