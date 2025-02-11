# Build stage
FROM golang:1.21-alpine AS builder
WORKDIR /app
COPY . .
RUN go mod download
RUN CGO_ENABLED=0 GOOS=linux go build -o /chat-room

# Final stage
FROM alpine:latest
WORKDIR /app
COPY --from=builder /chat-room .
EXPOSE 8080
CMD ["./chat-room"]