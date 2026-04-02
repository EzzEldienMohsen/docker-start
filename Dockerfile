# it is a file to run my application representing an empty machine
# the start is always from the base image
# use words like slim and alpine to reduce the spaces of node used in image
# you can multi stage your work using AS — each FROM starts a new stage
FROM node:22.13.0-alpine as base

# ARG is a build-time variable — only available during the image build, not at runtime
# ARG scope: limited to the stage it is declared in (base here)
# child stages (dev, prod) do NOT inherit ARG — they would need to re-declare it
ARG PORT=5000

# ENV is a runtime variable — available during build AND at runtime inside the container
# ENV scope: inherited by all stages that build FROM this base stage
# that is why we set ENV from ARG here, so the value carries forward into dev and prod
ENV PORT=${PORT}

# everything below is shared between dev and prod since they both extend base
WORKDIR /app
COPY package.json .


FROM base as dev

RUN npm install
COPY . .

# EXPOSE documents which port the container listens on — it does not actually publish it
# ${5000} resolves here using the ENV value inherited from base (ENV is inherited, ARG is not)
EXPOSE ${5000}

CMD ["npm","run", "dev"]

# this is the prod stage
FROM base as prod

RUN npm install --only=production
COPY . .

# same here — ${5000} works because ENV PORT was set in base and is inherited
EXPOSE ${5000}

CMD ["npm","start"]
