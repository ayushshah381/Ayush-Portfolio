# Stage 1: Build the application
# We use a Maven image based on Eclipse Temurin (stable OpenJDK)
FROM maven:3.9.6-eclipse-temurin-17 AS build
COPY . .
RUN mvn clean package -DskipTests

# Stage 2: Run the application
# We use a lightweight JRE image to keep the final size small
FROM eclipse-temurin:17-jre-jammy
COPY --from=build /target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]